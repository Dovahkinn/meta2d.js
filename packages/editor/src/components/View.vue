<template>
  <div id="meta2d" :class="{ 'is--preview': preview }"></div>
  <ContextMenu v-bind="contextMenuParams" @hide="hideContextMenu" />
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, reactive } from "vue";
import {
  Meta2d,
  Pen,
  register,
  registerAnchors,
  registerCanvasDraw,
} from "@meta2d/core";
import { flowPens, flowAnchors } from "@meta2d/flow-diagram";
import {
  activityDiagram,
  activityDiagramByCtx,
} from "@meta2d/activity-diagram";
import { classPens } from "@meta2d/class-diagram";
import { sequencePens, sequencePensbyCtx } from "@meta2d/sequence-diagram";
import { register as registerEcharts } from "@meta2d/chart-diagram";
import { formPens } from "@meta2d/form-diagram";
import { chartsPens } from "@meta2d/le5le-charts";
import { ftaPens, ftaPensbyCtx, ftaAnchors } from "@meta2d/fta-diagram";
import ContextMenu from "./ContextMenu.vue";
import { useSelection } from "../services/selections";
import { WebSocketClient } from "@qs/websocket-client";
import { useWsHandlers } from '../services/useHandlers'

const props = defineProps({
  preview: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Object,
  },
});

const { select, selections } = useSelection();

const meta2dOptions: any = {
  rule: false,
  drawingLineName: "line",
  rotateCursor: "rotate.cur",
};

const contextMenuParams = reactive({
  x: 0,
  y: 0,
  visible: false,
});
const showContextMenu = (event: any) => {
  if (props.preview) return;
  if (selections.mode === 0) return;
  contextMenuParams.x = event.e.clientX;
  contextMenuParams.y = event.e.clientY;
  contextMenuParams.visible = true;
};
const hideContextMenu = () => {
  contextMenuParams.visible = false;
};

const emit = defineEmits(["ready"]);

onMounted(() => {
  // 创建实例
  new Meta2d("meta2d", meta2dOptions);
  // meta2d.store.options.grid = true; // 开启网格
  // 按需注册图形库
  // 以下为自带基础图形库
  register(flowPens());
  registerAnchors(flowAnchors());
  register(activityDiagram());
  registerCanvasDraw(activityDiagramByCtx());
  register(classPens());
  register(sequencePens());
  registerCanvasDraw(sequencePensbyCtx());
  registerEcharts();
  registerCanvasDraw(formPens());
  registerCanvasDraw(chartsPens());
  register(ftaPens());
  registerCanvasDraw(ftaPensbyCtx());
  registerAnchors(ftaAnchors());
  // 注册其他自定义图形库
  // ...
  emit("ready", meta2d);

  // 读取本地存储
  let data: any = localStorage.getItem("meta2d");
  if (props.data || data) {
    data = props.data || JSON.parse(data);
    const { resolver } = useWsHandlers(data)

    // 判断是否为运行查看，是-设置为预览模式
    if (location.pathname === "/preview" || props.preview) {
      data.locked = 1;
      const msgTypes = (data.msgTypes || [])
        .map((item: string) => {
          return Number(item);
        })
        .filter((item: number) => {
          return !isNaN(item);
        });

      const jsStr = data.onMessageJsCode;
      if (data.wsUrl) {
        const wsClient = WebSocketClient.getInstance(data.wsUrl, {
        busName: data.busName,
        msgTypes,
        enableLog: false,
        onReady: () => {
          console.log("%c连接成功！", "color: green; font-weight: bold;");
          wsClient.subscribe("", [1], (response: any) => {
            console.log(
              "%c收到消息: ",
              "color: green; font-weight: bold;",
              data
            );

            try {
              if (jsStr) {
                const fn = new Function("data", jsStr);
                fn(response);
              } else {
                // TODO：需要根据 msg 中的实际字段信息，转换为具体的 meta2d 执行逻辑
                resolver(response)
              }
            } catch (error) {
              console.log("error: ", error);
            }
          });
        },
      });
      wsClient.connect();
      }


      // test: 模拟修改状态
      // setTimeout(() => {
      //   wsClient.sendMessage("", 1, {
      //     action: 1,
      //     // name: "setProps",
      //     id: "301cf29",
      //     tag: '',
      //     value: {
      //       color: "red",
      //       text: "ws",
      //     },
      //   });
      // }, 10e3);
    } else {
      data.locked = 0;
    }
    meta2d.open(data);
  }

  meta2d.on("active", active);
  meta2d.on("inactive", inactive);
  // 右键菜单
  meta2d.on("contextmenu", showContextMenu);
  // 点击画布
  meta2d.on("click", hideContextMenu);
});

const active = (pens?: Pen[]) => {
  select(pens);
};

const inactive = () => {
  select();
};

onUnmounted(() => {
  meta2d.destroy();
});
</script>
<style lang="postcss" scoped>
#meta2d {
  height: calc(100vh - 80px);
  z-index: 1;

  &.is--preview {
    height: 100%;
    flex: 1;
    overflow-x: hidden;


  }
}
</style>
