<template>
  <div id="meta2d-sub" :class="{ 'is--preview': preview, 'is--opener': isOpener }"></div>

  <t-dialog
    :visible="visible"
    :close-btn="true"
    :on-confirm="onConfirmAnother"
    cancel-btn="取消"
    :on-close="close"
  >
    <template #header>设置</template>
    <template #body>
      <t-form ref="form" :data="formData">
        <t-form-item label="ID" name="id" disabled>
          <t-input placeholder="请输入内容" v-model="formData.id" disabled />
        </t-form-item>
        <t-form-item label="名称" name="Name">
          <t-input placeholder="请输入内容" v-model="formData.Name" disabled />
        </t-form-item>
        <t-form-item
          label="设置状态值"
          name="State"
          v-if="formData.State != -1"
        >
          <t-input
            placeholder="请输入"
            v-model="formData.State"
            :disabled="formData.fault == 1"
          />
        </t-form-item>
      </t-form>
    </template>
  </t-dialog>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";
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

  isOpener: {
    type: Boolean,
    default: false,
  },
  
});


const meta2dOptions: any = {
  rule: false,
  drawingLineName: "line",
  rotateCursor: "rotate.cur",
};

const visible = ref(false);
let formData = reactive({
  id: "",
  Name: "",
  fault: 0,
  State: 0,
});


const emit = defineEmits(["ready"]);

let wsClient: any;
let _meta2d: any;


onMounted(() => {
  // 创建实例
  _meta2d = new Meta2d("meta2d-sub", meta2dOptions);

  // ! 恢复主画布
  globalThis.meta2d = globalThis.mainMeta2d;

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

  const data = props.data;
  if (data) {
    const { resolver } = useWsHandlers(data);

    if (props.preview) {
      data.locked = 1;
      if (data.lockState) {
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
        wsClient = WebSocketClient.getInstance(data.wsUrl, {
          busName: data.busName,
          msgTypes,
          enableLog: false,
          onReady: () => {
            console.log("%c连接成功！", "color: green; font-weight: bold;");
            wsClient.subscribe(data.busName, msgTypes, (response: any) => {
              console.log("response: ", response);
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
    _meta2d.open(data as any);

    emit("ready", _meta2d);

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
    wsClient = WebSocketClient.getInstance(data.wsUrl, {
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
// 发送消息设置  1设置元器件属性  2设置元器件故障分别发送消息
const sendMessageSocket = (pen: any, type: any) => {
  let data: any = localStorage.getItem("meta2d");
  if (props.data || data) {
    data = props.data || JSON.parse(data);
  }

  // 发送故障
  if (data.wsUrl && type === "fault") {
    wsClient.sendMessage(data.busName, 7000, {
      Name: pen.Name,
      Type: 28,
      Code: pen.fault,
    });
    let color = pen.fault == 0 ? "" : "#FF0000";
    _meta2d.setValue(
      { id: pen.id, color: color, fault: pen.fault },
      { render: false }
    );
  }
  // 发送开关状态
  if (data.wsUrl && type === "setting") {
    wsClient.sendMessage(data.busName, 3000, {
      Name: pen.Name,
      Type: 28,
      State: pen.State,
    });
    _meta2d.setValue({ id: pen.id, showChild: pen.State }, { render: false });
  }
};
// 发送请求同步电路
const Sendrequestsyn = () => {
  let data: any = props.data;

  if (data.wsUrl) {
    wsClient.sendMessage(data.busName, 1002, {});
  }
};

const close = () => {
  visible.value = false;
};
const onConfirmAnother = (context: any) => {
  visible.value = false;
  sendMessageSocket(formData, "setting");
  // sendMessageSocket 点击确定后发送消息
};
defineExpose({
  reconnectWebSocket,
  Sendrequestsyn,
});


onUnmounted(() => {
  _meta2d.destroy(true);
  wsClient && wsClient.close();
});

</script>
<style lang="postcss" scoped>
#meta2d-sub {
  overflow: hidden;

  &.is--opener {
    min-height: 400px;
    width: 100%;
  }
}
</style>
