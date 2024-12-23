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
import { deepClone,getAllChildren } from "@meta2d/core";
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
});

const style = computed(() => {
  return {
    left: props.x + "px",
    top: props.y + "px",
  };
});

const emit = defineEmits(["hide"]);

const { selections } = useSelection();
const { saveComponentShow } = useData(true);

const menuOptions = [
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
    label: "拷贝信息",
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
  // {
  //   label: "取消标记",
  //   icon: "mark",
  //   action: () => {
  //     markHandle(false);
  //     emit("hide", false);
  //   },
  //   show: () => {
  //     return (
  //       selections.mode == 1 &&
  //       selections.pen?.name == "combine" &&
  //       selections.pen?.showChild != undefined &&
  //       selections.pen?.tags?.includes("mark")
  //     );
  //   },
  // },
  {
    label: "粘贴并删除复制的图元",
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
        title: "请先拷贝信息",
      });
      return;
    }
    // 1.获取当前选中的图元 要把这个数据做更改
    let seletPen:any = selections.pen;
    const getChildren = getAllChildren(seletPen,meta2d.store); // 获取所有子节点
    meta2d.delete([seletPen]); // 删除当前图元
    // 2.获取被复制的图元 只有一个
    let copyPen: any;
    meta2d.data().pens.forEach((item) => {
      if (item.tags?.includes("mark")) {
        copyPen = {...item};
      }
    });
    meta2d.delete([copyPen]); // 删除被复制的图元
    console.log("getChildren=======", getChildren); // 获取所有子节点
    // 查找要替换的子节点                                      
    // 这里的子节点parentId没有变
    seletPen.children.forEach((item) => {
      getChildren.forEach((item2) => {
        if (item2.id == item) {
          item2.parentId = copyPen.id;
          console.log("item2====", item2);
        }
      })
    })
    // 组合的主节点进行替换 好操作
    seletPen.id = copyPen?.id;
    seletPen.description = copyPen?.description;
    seletPen.tags = copyPen.tags.filter(tag => tag !== 'mark');;
    if (copyPen?.anchors) {
      seletPen.anchors.forEach((anchor:any) => (copyPen.anchors = [anchor]));
    }
    console.log("getChildren====", getChildren);
    console.log("seletPen====", seletPen);
    meta2d.addPens([seletPen, ...getChildren]);
  }
};
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
