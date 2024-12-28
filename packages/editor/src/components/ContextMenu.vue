<template>
  <t-card
    v-show="visible"
    bordered
    hoverShadow
    class="context-menu"
    :style="style"
  >
    <t-list>
      <t-list-item
        v-for="item in menuOptions"
        v-show="item.show ? item.show() : true"
      >
        <t-button
          theme="default"
          block
          variant="outline"
          @click="item.action()"
          >{{ item.label }}</t-button
        >
      </t-list-item>
    </t-list>
  </t-card>
</template>
<script setup lang="ts">
import { defineProps, computed } from "vue";
import { useSelection } from "../services/selections";
import { useData } from "../services/useGraphics";
import { parseSvgStr, parseSvgStr1 } from "../utils/svgParser";
import { readSVGFile } from "../utils";
import { NotifyPlugin } from "tdesign-vue-next";
import { deepClone, getAllChildren } from "@meta2d/core";
const props = defineProps({
  x: {
    type: Number,
    default: 0,
  },
  y: {
    type: Number,
    default: 0,
  },
  visible: {
    type: Boolean,
    default: false,
  },
  isPreview: {
    type: Boolean,
    default: false,
  }
});

const style = computed(() => {
  return {
    left: props.x + "px",
    top: props.y + "px",
  };
});

const emit = defineEmits(["hide","send"]);

const { selections } = useSelection();
const { saveComponentShow } = useData(true);

const menuOptions = [
  {
    label: "设置",
    icon: "group",
    action: () => {
      if (selections.pen) {
        // 弹窗
        emit("send", selections.pen);
        emit("hide", false);
      }
    },
    show: () => {
      return selections.mode == 1 && selections.pen?.name == "combine" && props.isPreview;
    },
  },
  {
    label: "锁定",
    icon: "lock",
    action: () => {
      console.log("lock", selections);
      if (selections.pen) {
        const v = { id: selections.pen.id, locked: 2 };
        meta2d.setValue(v, { render: true });
      } else if (selections.pens) {
        selections.pens.forEach((pen: any) => {
          const v = { id: pen.id, locked: 2 };
          meta2d.setValue(v, { render: true });
        });
      }
      emit("hide", false);
    },
    show: () => {
      if (selections.pen) {
        return !selections.pen.locked;
      }
      if (selections.pens) {
        return !selections.pens.some((pen: any) => pen.locked > 0);
      }
    },
  },
  {
    label: "解锁",
    icon: "lock",
    action: () => {
      console.log("unlock", selections);
      if (selections.pen) {
        const v = { id: selections.pen.id, locked: 0 };
        meta2d.setValue(v, { render: true });
      } else if (selections.pens) {
        selections.pens.forEach((pen: any) => {
          const v = { id: pen.id, locked: 0 };
          meta2d.setValue(v, { render: true });
        });
      }
      emit("hide", false);
    },
    show: () => {
      if (selections.pen) {
        return selections.pen.locked;
      }
      if (selections.pens) {
        return selections.pens.some((pen: any) => pen.locked > 0);
      }
    },
  },

  {
    label: "删除",
    icon: "delete",
    action: () => {
      if (selections.pen) {
        meta2d.delete([selections.pen]);
      } else if (selections.pens) {
        meta2d.delete(selections.pens);
      }
      emit("hide", false);
    },
  },

  // 组合
  {
    label: "组合",
    icon: "group",
    action: () => {
      if (selections.pens) {
        meta2d.combine(selections.pens);
      }
      emit("hide", false);
    },
    show: () => {
      return selections.mode == 2;
    },
  },

  {
    label: "组合为状态",
    icon: "group",
    action: () => {
      console.log("group", selections);
      if (selections.pens) {
        meta2d.combine(selections.pens, 0);
      }
      emit("hide", false);
    },
    show: () => {
      return selections.mode == 2;
    },
  },
  // 取消组合
  {
    label: "取消组合",
    icon: "group",
    action: () => {
      console.log("ungroup", selections);
      meta2d.uncombine(selections.pen);
      emit("hide", false);
    },
    show: () => {
      return selections.mode == 1 && selections.pen?.name == "combine";
    },
  },

  {
    label: "保存为组件",
    icon: "save",
    action: () => {
      // console.log("save as component ", selections);
      saveComponentShow(selections);
      emit("hide", false);
    },
  },

  {
    label: "替换svg",
    icon: "save",
    action: () => {
      customToolbarClick("svg");
      emit("hide", false);
    },
    show: () => {
      return selections.mode == 1 && selections.pen?.name == "combine";
    },
  },
  {
    label: "标记",
    icon: "mark",
    action: () => {
      markHandle(true);
      emit("hide", false);
    },
    show: () => {
      // 只能标记一个组合
      return (
        selections.mode == 1 &&
        selections.pen?.name == "combine" &&
        selections.pen?.showChild != undefined &&
        !selections.pen?.tags?.includes("mark")
      );
    },
  },
  {
    label: "取消标记",
    icon: "mark",
    action: () => {
      markHandle(false);
      emit("hide", false);
    },
    show: () => {
      return (
        selections.mode == 1 &&
        selections.pen?.name == "combine" &&
        selections.pen?.showChild != undefined &&
        selections.pen?.tags?.includes("mark")
      );
    },
  },
  {
    label: "替换为标记的图元",
    icon: "save",
    action: () => {
      customToolbarClick("svgs");
      emit("hide", false);
    },
    show: () => {
      return (
        selections.mode == 1 &&
        selections.pen?.name == "combine" &&
        selections.pen?.showChild != undefined &&
        !selections.pen?.tags?.includes("mark")
      );
    },
  },
];
// 添加标记
const markHandle = (type: any) => {
  console.log("meta2d", meta2d.data());
  if (type) {
    let mark = false;
    meta2d.data().pens.forEach((item) => {
      if (item.tags?.includes("mark")) {
        NotifyPlugin.error({
          title: "只能标记一个组合，请先取消标记",
        });
        mark = true;
      }
    });
    if (mark) return;
    selections.pen?.tags?.push("mark");
  } else {
    let arr = selections.pen?.tags || [];
    selections.pen.tags = arr.filter((item) => item !== "mark");
  }
};
// 替换svg方法 需要拿到之前的pen数据放到上传的svg数据里 删除之前的元素
const customToolbarClick = (code?: string) => {
  if (code == "svg") {
    // 读取svg文件
    readSVGFile((res: { data: string }) => {
      // 读到一堆XML信息
      let list = parseSvgStr1(res.data, selections.pen, false);
      console.log("看看新的长啥样pens=====", list);
      //先删除原来的图元
      meta2d.delete([selections.pen]);
      // 更新位置
      meta2d.addPens(list);
    });
    return;
  }
  if (code == "svgs") {
    let mark = false;
    meta2d.data().pens.forEach((item) => {
      if (item.tags?.includes("mark")) {
        mark = true;
      }
    });
    if (!mark) {
      NotifyPlugin.error({
        title: "请先标记一个组合",
      });
      return;
    }
    // // 1.获取当前选中的图元 要把这个数据做更改
    let penConfig: any = selections.pen;
    meta2d.delete([penConfig]); // 删除当前图元
    // // 2.获取被标记的图元 只有一个
    let pens =[];
    meta2d.data().pens.forEach((item) => {
      if (item.tags?.includes("mark")) {
        // toPen = item;
        let parent = item;
        // 获取被标记的图元下的子节点
        let children = findChildren(parent, meta2d.data().pens);
        // console.log("children=====", children);
        // 组装数据
        children.forEach((item) => {
          if (parent.children.includes(item.id)) {
            item.parentId = penConfig?.id;
          }

        });
        pens = [...children];
      }
    });
    console.log("传入的SVG===== ", pens, "以前的图元数据=====", penConfig);
    // 拿到之前的图元父节点进行组装吧
    const parent = pens.find((v) => v.name == "combine" && !v.parentId);
    let del = getAllChildren(parent,meta2d.store);
    // 获取所有的paths
    let paths = meta2d.data().paths;
    meta2d.delete([...del,parent]);
    Object.assign(parent, {
      id: penConfig?.id,
      x: penConfig?.x,
      y: penConfig?.y,
      description: penConfig?.description,
      text: penConfig?.text,
      withh: penConfig?.width,
      height: penConfig?.height,
      showChild: penConfig?.showChild,
      //rotate: rotateAngelMap[item.rotateAngel] || 0, // 跟预期不一致
      tags: penConfig?.tags,
    });
    meta2d.store.data.paths = paths;
    // //处理子节点数据
    meta2d.addPens(pens);
  }
};
function findChildren(parent: any, list: any[]) {
  if (!parent) return;
  if (!list) return;
  const result = [];
  const queue = [parent];
  while (queue.length) {
    const current = queue.shift();
    result.push(current);
    for (const data of list) {
      if (data.parentId == current.id) {
        queue.push(data);
      }
    }
  }
  return result;
}
</script>
<style lang="postcss" scoped>
.context-menu {
  position: absolute;
  z-index: 99;
  text-align: left;

  :deep(.t-card__body) {
    padding: 0;
  }

  .t-button {
    justify-content: start;
  }
}
</style>
