<template>
  <div class="app-page is--preview">
    <transition name="sidebar-transition" @after-leave="afterLeave" @after-enter="afterEnter">
      <div v-if="!isCollapsed" class="left__panel">
        <t-row justify="end">
          <t-col :span="2">
            <t-icon name="fullscreen" size="large" @click="handleToolClick('fullscreen')"></t-icon>
          </t-col>
          <t-col :span="2">
            <t-icon name="rectangle" size="large" @click="handleToolClick('fit')"></t-icon>
          </t-col>
        </t-row>
        <t-divider></t-divider>
        <t-tree :data="treeData" expandAll activable @click="changeData" />
      </div>
    </transition>

    <View v-bind="$attrs" preview :data="data" @ready="emit('ready', $event)" />

    <div v-if="showRightPanel" class="right__panel">
      <slot name="right-panel">
     </slot>
    </div>

    <t-sticky-tool v-if="showStickyTool" type="compact" placement="left-bottom" style="z-index: 999"
      @click="handleClick">
      <template v-for="tool in sidebarTools" :key="tool.label">
        <t-sticky-item v-if="tool.show()" :label="tool.label" :icon="renderIcon(tool.icon)" :popup="tool.popup">
        </t-sticky-item>
      </template>
    </t-sticky-tool>
  </div>
</template>

<script lang="ts" setup>
import {
  defineEmits,
  defineProps,
  h,
  ref,
  reactive,
  computed,
  watch,
  nextTick,
} from "vue";
import View from "../components/View.vue";
import { Icon } from "tdesign-vue-next";
import { toggleFullScreen } from "../utils";
import { usePlayer } from "../services/usePlayer.ts";

const emit = defineEmits(["ready"]);
const props = defineProps({
  data: {
    type: Object,
  },
  projectTreeData: {
    type: Array,
  },
  showStickyTool: {
    type: Boolean,
    default: true,
  },
  showRightPanel: {
    type: Boolean,
    default: true,
  },
});

// * 侧边工具栏
const isCollapsed = ref(true);
const sidebarTools = reactive([
  {
    label: "fullscreen",
    icon: "fullscreen",
    popup: "全屏",
    show: () => {
      return isCollapsed.value;
    },
  },
  {
    label: "fit",
    icon: "rectangle",
    popup: "适应窗口",
    show: () => {
      return isCollapsed.value;
    },
  },
  {
    label: "expand",
    icon: "menu-fold",
    popup: "展开侧边栏",
    show: () => {
      return isCollapsed.value;
    },
  },
  {
    label: "collapse",
    icon: "menu-unfold",
    popup: "收起侧边栏",
    show: () => {
      return !isCollapsed.value;
    },
  },
]);

const treeData = computed(() => {
  if (props.projectTreeData) return props.projectTreeData;
  if (globalThis.__meta2d_env__?.projectTreeData) {
    return globalThis.__meta2d_env__.projectTreeData;
  }
  // ! 未提供目录数据，生成默认目录
  let data: any = localStorage.getItem("meta2d");
  if (data) {
    const tmp = JSON.parse(data);
    return [
      {
        label: "默认",
        value: "",
        children: [
          {
            label: `meta2d.${tmp.template}`,
            value: "",
          },
        ],
      },
    ];
  }
  return [];
});

const renderIcon = (icon: string) => {
  return () =>
    h(Icon, {
      name: icon,
    });
};

const handleToolClick = (code: string) => {
  if (code == "fit") {
    meta2d.fitView(true, 20);
  } else if (code == "fullscreen") {
    toggleFullScreen();
  }
};

const handleClick = ({ e, item }: { e: MouseEvent; item: any }) => {
  if (item.label == "expand") {
    isCollapsed.value = false;
  } else if (item.label == "collapse") {
    isCollapsed.value = true;
  } else {
    handleToolClick(item.label);
  }
};

const changeData = ({ e, node }: { e: MouseEvent; node: any }) => {
  console.log("change node: ", node);

  if (node.value) {
    fetch(node.value)
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          res.locked = 1;
          meta2d.open(res);
          meta2d.emit("clear");
          meta2d.fitView();
        }
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }
};
const afterEnter = () => {
  meta2d?.resize();
};
const afterLeave = () => {
  meta2d?.resize();
};

// * 控制逻辑，页面切换
const { playList, currentStepData, prev, next, apply, play, pause, stop, replay, } = usePlayer();
playList.value = [
  {
    name: "page1",
    description: "text1",
    duration: 6000,
    // stateList: [
    //   {
    //     Name: "Switch",
    //     Type: 28,
    //     State: 0,
    //   },
    //   {
    //     Name: "继电器A",
    //     Type: 18,
    //     Value: 1, // 有电无电
    //   },
    // ],
    // currentStateList: [
    //   {
    //     name: "LineA",
    //     value: 1.1, // 电流值
    //   },
    // ],
    privatePropList: [
      {
        tag: "Switch",
        showChild: 1,
      },
      {
        tag: "L32",
        lineWidth: 2,
        color: 'blue',
      },
    ],
  },
  {
    name: "page2",
    description: "text2",
    duration: 9000,
    // stateList: [
    //   {
    //     Name: "Switch",
    //     Type: 28,
    //     State: 1,
    //   },
    //   {
    //     Name: "继电器",
    //     Type: 17,
    //     Value: 0,
    //   },
    // ],
    // currentStateList: [
    //   {
    //     name: "LineB",
    //     value: 1.1, // 电流值
    //   },
    // ],
    privatePropList: [
      {
        tag: "Switch",
        showChild: 0,
      },
      {
        tag: "L32",
        lineWidth: 3,
        color: 'green',
      },
      {
        tag: 'L32',
        action: 2,
      }
    ],
  },
  {
    name: "page3",
    description: "text3",
    duration: 7000,
    // stateList: [
    //   {
    //     Name: "Switch",
    //     Type: 28,
    //     State: 2,
    //   },
    //   {
    //     Name: "R",
    //     Type: 0,
    //     Value: 1,
    //   },
    // ],
    // currentStateList: [
    //   {
    //     name: "LineC",
    //     value: 1.1, // 电流值
    //   },
    // ],
    privatePropList: [
      {
        tag: "Switch",
        showChild: 1,
      },
      {
        tag: "L32",
        lineWidth: 1,
        color: 'red',
      },
      {
        tag: 'L32',
        action: 3,
      }

    ],
  },
];

</script>

<style lang="postcss" scoped>
.sidebar-transition-enter-active,
.sidebar-transition-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.sidebar-transition-enter,
.sidebar-transition-leave-to

/* .sidebar-transition-leave-active in <2.1.8 */
  {
  transform: translateX(-250px);
  opacity: 0;
}

.sidebar-transition-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.sidebar-transition-leave-to {
  transform: translateX(-250px);
  opacity: 0;
}

.app-page {
  height: 100vh;
  display: flex;

  .left__panel {
    width: 250px;
    height: 100%;
    border-right: 2px solid #f5f5f5;
    padding: 20px;
    overflow-y: auto;
  }

  .right__panel {
    width: 250px;
    height: 100%;
    border-left: 2px solid #f5f5f5;
    padding: 20px;
    overflow-y: auto;
    z-index: 999;
  }
}
</style>
