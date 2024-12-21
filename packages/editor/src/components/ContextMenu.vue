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
import { parseSvgStr,parseSvgStr1 } from "../utils/svgParser";
import { readSVGFile } from "../utils";
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
];

// 替换svg方法 需要拿到之前的pen数据放到上传的svg数据里 删除之前的元素
const customToolbarClick = (code?: string) => {
  if (code == "svg") {
    // 读取svg文件
    readSVGFile((res: { data: string }) => {
      // 读到一堆XML信息
      let list = parseSvgStr1(res.data, selections.pen, false);
      console.log("看看新的长啥样pens=====", list);
       meta2d.delete([selections.pen]);
      let item = selections.pen;
      // // 先给固定的宽高
      // const cWidth = Number(30);
      // const cHeight = Number(80);
      // const parent = list.find((v) => v.name == "combine" && !v.parentId);
      // Object.assign(parent, {
      //   text: item.name,
      //   x: Number(item.posX),
      //   y: Number(item.posY),
      //   //rotate: rotateAngelMap[item.rotateAngel] || 0, // 跟预期不一致
      //   tags: [item.type, item.name],
      //   width: parent.width || cWidth,
      //   height: parent.height || cHeight,
      // });
      // console.log("组装的parent=====", parent);
      // if (svgItem.data.anchors) {
      //   parent.anchors = svgItem.data.anchors;
      // }
      // 更新位置
      meta2d.addPens(list);
      // meta2d.addPens(pens);
      //先删除原来的图元
      //  meta2d.delete([selections.pen]);
    });
    return;
  }
  // if (code == "save") {
  //   // 保存图纸
  //   saveBlueprintShow();
  //   return;
  // }

  // meta2d.toggleAnchorMode();
  // TODO: 其他操作
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
