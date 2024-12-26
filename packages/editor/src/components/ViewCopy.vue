<template>
  <div id="meta2dCopy" :class="{ 'is--preview': preview }"></div>
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
import { useSelection } from "../services/selections";
import { WebSocketClient } from "@qs/websocket-client";
import { useWsHandlers } from "../services/useHandlers";

const props = defineProps({
  preview: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Object,
  },
  customWsHandler: {
    type: Function,
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
let meta2dCopy: any = null;

onMounted(() => {
  // 创建实例
  meta2dCopy = new Meta2d("meta2dCopy", meta2dOptions);
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
    const { resolver } = useWsHandlers(data);

    // 判断是否为运行查看，是-设置为预览模式
    if (location.pathname === "/preview" || props.preview) {
      data.locked = 1;
      if (data.lockState) {
        // meta2d.lock(data.lockState);
        data.locked = data.lockState;
      }
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
            wsClient.subscribe(data.busName, msgTypes, (response: any) => {
              try {
                if (jsStr) {
                  const fn = new Function("data", jsStr);
                  fn(response);
                } else {
                  if (props.customWsHandler) {
                    // 自定义处理，如电路消息需要考虑更新不显示的，对消息进行缓存等等
                    props.customWsHandler(response, meta2d);
                  } else {
                    // TODO：需要根据 msg 中的实际字段信息，转换为具体的 meta2d 执行逻辑
                    resolver(response);
                  }
                }
              } catch (error) {
                console.log("error: ", error);
              }
            });
          },
        });
        wsClient.connect();
      }
    } else {
      data.locked = 0;
    }
    meta2dCopy.open(data);
    meta2dCopy.fitView();
  }

});
// WebSocket重新连接的方法
const reconnectWebSocket = (data: any) => {
  const { resolver } = useWsHandlers(data);
  if (data.wsUrl) {
    data.locked = 1;
    const msgTypes = (data.msgTypes || [])
      .map((item: string) => {
        return Number(item);
      })
      .filter((item: number) => {
        return !isNaN(item);
      });

    const jsStr = data.onMessageJsCode;
    const wsClient = WebSocketClient.getInstance(data.wsUrl, {
      busName: data.busName,
      msgTypes,
      enableLog: false,
      onReady: () => {
        console.log("%c连接成功！", "color: green; font-weight: bold;");
        wsClient.subscribe(data.busName, msgTypes, (response: any) => {
          try {
            if (jsStr) {
              const fn = new Function("data", jsStr);
              fn(response);
            } else {
              if (props.customWsHandler) {
                // 自定义处理，如电路消息需要考虑更新不显示的，对消息进行缓存等等
                props.customWsHandler(response, meta2d);
              } else {
                // TODO：需要根据 msg 中的实际字段信息，转换为具体的 meta2d 执行逻辑
                resolver(response);
              }
            }
          } catch (error) {
            console.log("error: ", error);
          }
        });
      },
    });
    wsClient.connect();
  }
};
defineExpose({
  reconnectWebSocket
});

const active = (pens?: Pen[]) => {
  select(pens);
};

const inactive = () => {
  select();
};

onUnmounted(() => {
  meta2dCopy.destroy();
});
</script>
<style lang="postcss" scoped>
#meta2dCopy {
  height: calc(100vh - 80px);
  z-index: 1;
  overflow: hidden;
  background-color: white;

  &.is--preview {
    height: 100%;
    flex: 1;
    overflow-x: hidden;
  }
}
</style>
