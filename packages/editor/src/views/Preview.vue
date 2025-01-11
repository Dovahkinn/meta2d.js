<template>
  <div class="app-page is--preview">
    <transition
      name="sidebar-transition"
      @after-leave="afterLeave"
      @after-enter="afterEnter"
    >
      <div v-if="!isCollapsed" class="left__panel">
        <t-row justify="end" style="cursor: pointer">
          <t-col :span="2">
            <t-icon
              name="fullscreen"
              size="large"
              @click="handleToolClick('fullscreen')"
            ></t-icon>
          </t-col>
          <t-col :span="2">
            <t-icon
              name="rectangle"
              size="large"
              @click="handleToolClick('fit')"
            ></t-icon>
          </t-col>
          <t-col :span="2">
            <t-icon
              name="refresh"
              size="large"
              @click="handleToolClick('refresh')"
            ></t-icon>
          </t-col>
        </t-row>
        <t-divider></t-divider>
        <t-tree :data="treeData" expandAll activable @click="changeData" />
      </div>
    </transition>

    <View
      v-bind="$attrs"
      preview
      :data="data"
      :customWsHandler="customWsHandler"
      @ready="emit('ready', $event)"
      ref="childComponentRef"
    />

    <div v-if="showRightPanel" class="right__panel">
      <slot name="right-panel">
        <t-table
          v-if="tableColumns.length"
          ref="tableRef"
          class="table-flex-right"
          row-key="sid"
          :data="tableLogData"
          :columns="tableColumns"
          active-row-type="single"
          v-bind="tableProps"
          :style="tableStyle"
        ></t-table>
      </slot>
    </div>

    <t-sticky-tool
      v-if="showStickyTool"
      type="compact"
      placement="left-bottom"
      style="z-index: 999"
      @click="handleClick"
    >
      <template v-for="tool in sidebarTools" :key="tool.label">
        <t-sticky-item
          v-if="tool.show()"
          :label="tool.label"
          :icon="renderIcon(tool.icon)"
          :popup="tool.popup"
        >
        </t-sticky-item>
      </template>
    </t-sticky-tool>
  </div>
  <extend-dialog></extend-dialog>
</template>

<script lang="ts" setup>
import {
  defineEmits,
  defineProps,
  h,
  ref,
  reactive,
  computed,
  onMounted,
} from "vue";
import View from "../components/View.vue";
import { Icon } from "tdesign-vue-next";
import { toggleFullScreen } from "../utils";
import { EventAction } from "../types/Event.ts";
import { deepClone } from "@meta2d/core";
import { useRoute } from "vue-router";
import { usePlayer } from "../services/usePlayer.ts";
import { useLogTable, useScripts } from "../services/useTable.ts";
import { useExtendEvent } from "../services/useHandlers.ts";
import ExtendDialog from "./dialog/ExtendDialog.vue";

const childComponentRef = ref(null);
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
    default: false,
  },
  rightPanelWidth: {
    type: Number,
    default: 400,
  },

  // * 后台更新模式，用于一个项目包含多张电路的情形
  enableBackgroundUpdate: {
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

const isInElectron = () => {
  return globalThis.navigator.userAgent.includes("Electron");
};
const _electronArgvData = ref([]);
const tableRef = ref(null);

const route = useRoute();

const tableColumns = ref([]);
const tableLogData = ref([]);
const tableProps = ref({});
const tableStyle = ref({});

const applyTable = (res: any) => {
  const {
    columns: _columns,
    tableProps: _tableProps,
    tableStyle: _tableStyle,
  } = useLogTable(res);
  const { tasks } = useScripts(res);
  tableColumns.value = _columns;
  tableProps.value = _tableProps;
  tableStyle.value = _tableStyle;

  setTimeout(async () => {
    for (const task of tasks) {
      const r = await task();
      if (r) {
        tableLogData.value.push(r);
      }
    }
  });
};

const { extendOn } = useExtendEvent();

onMounted(() => {
  if (isInElectron()) {
    if (globalThis.versions?.projectListSync) {
      globalThis.versions
        .projectListSync("list.json")
        .then((res) => {
          console.log("projectListSync res: ", res);
          if (Array.isArray(res)) {
            _electronArgvData.value = res;
            if (res.length > 0) {
              if (res[0].children?.length > 0) {
                const first = res[0].children[0];
                if (first.json) {
                  const res = deepClone(first.json);
                  res.locked = 1;
                  if (res.lockState) {
                    res.locked = res.lockState;
                  }
                  meta2d.open(res);
                  // meta2d.emit("clear");
                  meta2d.fitView();
                  applyStateSet();
                  localStorage.setItem("meta2d", JSON.stringify(first.json));
                  if (childComponentRef.value) {
                    childComponentRef.value.Sendrequestsyn();
                    childComponentRef.value.reconnectWebSocket(res); // 同步一下电路状态
                  }
                  applyTable(res);
                }
              }
            } else {
              meta2d.clear();
            }
          }
        })
        .catch((err) => {
          console.log("projectListSync err: ", err);
          meta2d.clear();
        });
    } else {
      meta2d.clear();
    }
  } else {
    try {
      const filePath = route?.query?.["open-file"];
      if (filePath) {
        fetch(filePath as string)
          .then((res) => res.json())
          .then((res) => {
            // console.log('open file: ', res)
            res.locked = 1;
            if (res.lockState) {
              res.locked = res.lockState;
            }
            meta2d.open(res);
            meta2d.emit("clear");
            meta2d.fitView();
            applyStateSet();
            // -----
            applyTable(res);
          });
      }
    } catch (error) {
      console.log("open file error: ", error);
    }
  }
  meta2d?.resize();

  // * 扩展事件
  extendOn();
});

const treeData = computed(() => {
  if (isInElectron()) {
    return _electronArgvData.value;
  }

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
  } else if (code == "refresh") {
    console.log("refresh同步一下数据");
    if (childComponentRef.value) {
      childComponentRef.value.Sendrequestsyn();
    }
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
  console.log("change node=== ", node);

  if (isInElectron()) {
    if (node.data.json) {
      const res = deepClone(node.data.json);
      res.locked = 1;
      meta2d.open(res);
      meta2d.emit("clear");
      meta2d.fitView();
      applyStateSet();
      if (childComponentRef.value) {
        childComponentRef.value.reconnectWebSocket(node.data.json);
      }
    }
    return;
  }

  if (node.value) {
    fetch(node.value)
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          res.locked = 1;
          meta2d.open(res);
          meta2d.emit("clear");
          meta2d.fitView();
          applyStateSet();
          // 程序内先不做处理
          // if (childComponentRef.value) {
          //   childComponentRef.value.reconnectWebSocket(node.data.json);
          // }
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
// const {
//   playList,
//   currentStepData,
//   prev,
//   next,
//   apply,
//   play,
//   pause,
//   stop,
//   replay,
// } = usePlayer();
// playList.value = [];

// * ws 消息处理
let customWsHandler;
type ResponseMsgType = {
  busName: string;
  msg: any;
  msgType: number;
};

type PenState = {
  action: number;
  id?: string;
  tag?: string;
  [t: string]: any;
};

let penStateSet: any[] = [];
const combineState = (msg: PenState) => {
  // console.log("penStateSet==== ", penStateSet);
  const state = penStateSet.find((s) => s.Name === msg.Name);
  // console.log("state==== ", state);

  if (state) {
    const { id, tag, ...rest } = msg;
    Object.assign(state, rest);
    return;
  } else {
    penStateSet.push(msg);
  }
};

const applyState = (msg: PenState) => {
  if (!msg) return;
  const { id, tag, action, value, ...rest } = msg;
  const _props = value || rest;
  const pens = meta2d.find(id || tag || rest.Name);
  // * 暂时包含四种
  switch (action) {
    case EventAction.StartAnimate:
      meta2d.startAnimate(pens);
      break;
    case EventAction.PauseAnimate:
      meta2d.pauseAnimate(pens);
      break;
    case EventAction.StopAnimate:
      meta2d.stopAnimate(pens);
      break;
    // case EventAction.SetProps:
    //   break;

    default:
      pens.forEach((pen: any) => {
        _props.id = pen.id;
        // showChild 永远都是打开是0 关闭是1
        if ("showChild" in pen && pen.Ecomponents?.length > 0) {
          //  v10: 是触点数量
          // v12：最上面触点的值
          // v14：第二个触点对应的值
          // 以此类推
          //  多路开关怎么映射 本地开关的0 1 2 值

          // 获取开关状态和值
          const [switchState, switchValue] = pen.Ecomponents;
          if (switchState === "off" || switchState === "on") {
            const needReverse =
              (switchState === "off" && switchValue === "1") ||
              (switchState === "on" && switchValue === "0");
            // 根据是否需要反转来设置showChild
            let arr;
            if (needReverse) {
              arr = [1, 0];
            }else{
              arr = [0, 1];
            }
            _props.showChild = arr.indexOf(msg.State);
          }else{
            // Ecomponents去掉数组第一个值 赋值给一个新的对象components
            const components = pen.Ecomponents.slice(1);
            if(switchState >= 3){
              // 找到数组里msg.State的位置下标
              // components = ['1', '0', '2', '1'] msg.State = 1 找到第一次出现1的下标
              const index = components.indexOf(msg.State.toString());
              // 设置showChild
              _props.showChild = index;
            }
          }
        }
        //颜色color 是否有电 1有电显示红色 2无电蓝色

        if (msg.Value == 1) {
          _props.color = "rgb(255, 0, 0)"; //线条的颜色
          _props.lineWidth = 2; //线条的宽度
          _props.animateColor = "rgb(255, 0, 0)"; //流动的颜色
          meta2d.startAnimate([pen]);
        } else {
          meta2d.stopAnimate([pen]);
          _props.color = "rgb(0, 0, 128)"; //线条的颜色
          _props.lineWidth = 2; //线条的宽度
        }
        console.log("_props: ", _props);
        meta2d.setValue(_props, { render: false });
      });

      break;
  }
};

const applyStateSet = () => {
  if (!meta2d) return;
  penStateSet.forEach((state: PenState) => {
    console.log("state: ", state);
    applyState(state);
  });
};

if (props.enableBackgroundUpdate) {
  // 针对所有图纸的状态消息
  customWsHandler = (data: ResponseMsgType) => {
    const { busName, msg, msgType } = data || {};

    console.log("ws msg: ", data);

    // 更新处理
    if (msg) {
      // * 先认为是符合内置属性集合的标准 Meta2D 对象
      const { id, tag, action, value, ...rest } = msg;
      if (!rest) {
        console.warn("无法识别目标图元：", data);
        return;
      }

      combineState(msg);

      // -- 当前打开图元
      const pens = meta2d.find(id || tag || rest.Name);
      if (pens.length) {
        applyState(msg);
        meta2d.render();
      } else {
        // 未加载的图纸
        // 暂定在打开时从状态集合全量更新一次
        // applyStateSet();
      }
    }
  };
}

const cssRightPanelWidth = computed(() => {
  return `${props.rightPanelWidth}px`;
});
// * 日志表格
let dataJson: any = localStorage.getItem("meta2d");
let meta2dData: any;
try {
  meta2dData = JSON.parse(dataJson);
  if (!isInElectron() && !route?.query?.["open-file"]) {
    applyTable(props.data || meta2dData);
  }
} catch (error) {}
</script>

<style lang="scss" scoped>
.sidebar-transition-enter-active,
.sidebar-transition-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.sidebar-transition-enter,
.sidebar-transition-leave-to {
  transform: translateX(-250px);
  opacity: 0;
}

.sidebar-transition-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.app-page {
  display: flex;
  height: 100%;

  &.is--full-height {    
    height: 100vh;
  }

  .left__panel {
    width: 250px;
    height: 100%;
    border-right: 2px solid #f5f5f5;
    padding: 20px;
    overflow-y: auto;
  }

  .right__panel {
    width: v-bind(cssRightPanelWidth);
    max-width: 50%;
    height: 100%;
    // border-left: 2px solid #f5f5f5;
    padding: 0;
    overflow-y: auto;
    z-index: 999;

    .t-table {
      background-image: var(--table-background-image-url);
      height: 100%;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
