<template>
  <t-card
    v-show="visible"
    bordered
    hoverShadow
    class="context-menu"
    :style="style"
  >
    <t-list>
      <t-list-item v-for="item in menuOptions" v-show="item.show ? item.show() : true">
        <t-button theme="default" block variant="outline" @click="item.action()">{{
          item.label
        }}</t-button>
      </t-list-item>
    </t-list>
  </t-card>
</template>
<script setup lang="ts">
import { defineProps, computed } from "vue";
import { useSelection } from "../services/selections";
import { useData } from '../services/useGraphics'

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
          })
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
    }
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
          })
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
    }
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
        return selections.mode == 2
    }
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
        return selections.mode == 1 && selections.pen?.name == "combine"
    }
  },

  {
    label: '保存为组件',
    icon: 'save',
    action: () => {
      // console.log("save as component ", selections);
      saveComponentShow(selections);
      emit("hide", false);
    },
  }


];
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
