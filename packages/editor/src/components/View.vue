<template>
  <div id="meta2d" :class="{ 'is--preview': preview }"></div>
  <ContextMenu
    v-bind="contextMenuParams"
    @hide="hideContextMenu"
    @send="modelHandle"
  />
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
        <!-- <t-form-item label="设置故障" name="fault">
          <t-select v-model="formData.fault" class="demo-select-base">
            <t-option
              v-for="(item, index) in faultOptions"
              :key="index"
              :value="item.value"
              :label="item.label"
            >
              {{ item.label }}
            </t-option>
          </t-select>
        </t-form-item> -->
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
import ContextMenu from "./ContextMenu.vue";
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
  isPreview: false,
});
const visible = ref(false);
let formData = reactive({
  id: "",
  Name: "",
  fault: 0,
  State: 0,
});
const options = [
  { label: "断开", value: 0 },
  { label: "闭合", value: 1 },
];
const faultOptions = [
  { label: "正常", value: 0 },
  { label: "有故障", value: 1 },
];
const showContextMenu = (event: any) => {
  // if (props.preview) return;
  if (selections.mode === 0) return;
  contextMenuParams.x = event.e.clientX;
  contextMenuParams.y = event.e.clientY;
  contextMenuParams.visible = true;
  contextMenuParams.isPreview = props.preview;
};
const hideContextMenu = () => {
  contextMenuParams.visible = false;
};

const emit = defineEmits(["ready"]);

let wsClient: any;
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
    const { resolver } = useWsHandlers(data);

    // 判断是否为运行查看，是-设置为预览模式
    if (location.pathname === "/preview" || props.preview) {
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

        // test: 模拟修改状态
        // setTimeout(() => {
        //   wsClient.sendMessage(data.busName, 3000, {
        //     Name: "xxx",
        //     Type: 28,
        //     State: 0,
        //   });
        // }, 10000);
      }
    } else {
      data.locked = 0;
    }
    meta2d.open(data);
    // meta2d.fitView(); // ! 别直接加，所见即所得，初始视角自行设计
  }

  meta2d.on("active", active);
  meta2d.on("inactive", inactive);
  // 右键菜单
  meta2d.on("contextmenu", showContextMenu);
  // 点击画布
  meta2d.on("click", hideContextMenu);
});
// WebSocket重新连接的方法
const reconnectWebSocket = (data: any) => {
  console.log("reconnectWebSocket======== ", data);
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
    console.log("reconnectWebSocket======== ", jsStr);
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
  console.log("sendMessageSocket======== ", data);
  console.log("sendMessageSocketpen======== ", pen);
  // 发送故障
  if (data.wsUrl && type === "fault") {
    wsClient.sendMessage(data.busName, 7000, {
      Name: pen.Name,
      Type: 28,
      Code: pen.fault,
    });
    let color = pen.fault == 0 ? "" : "#FF0000";
    meta2d.setValue(
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
    meta2d.setValue({ id: pen.id, showChild: pen.State }, { render: false });
  }
};
// 发送请求同步电路
const Sendrequestsyn = () => {
  let data: any = localStorage.getItem("meta2d");
  if (props.data || data) {
    data = props.data || JSON.parse(data);
  }
  if (data.wsUrl) {
    wsClient.sendMessage(data.busName, 1002, {});
  }
};
const modelHandle = (data: any, type: string) => {
  console.log("modelHandletype======== ", type);
  console.log("modelHandle======== ", data);
  formData.id = data.id;
  formData.Name = data.text;
  // Ecomponents 需要做处理
  if (data.Ecomponents) {
    // 目前处理开关
    if (data.tags.includes("Switch")) {
      const [switchState, switchValue] = data.Ecomponents;
      if (switchState === "off" || switchState === "on") {
        const needReverse =
          (switchState === "off" && switchValue === "1") ||
          (switchState === "on" && switchValue === "0");
        // 根据是否需要反转来设置showChild
        if (needReverse) {
          formData.State = +data?.showChild;
        } else {
          formData.State = +data?.showChild == 0 ? 1 : 0;
        }
      }
    } else {
      // 没有showChild为-1
      formData.State = +(data?.showChild ?? -1);
    }
  }else{
    formData.State = +(data?.showChild ?? -1);
  }
  formData.fault = data.fault; // 故障
  if (type === "setting") {
    // 设置属性
    visible.value = true;
  } else if (type === "fault") {
    sendMessageSocket(formData, type);
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

const active = (pens?: Pen[]) => {
  select(pens);
};

const inactive = () => {
  select();
};

onUnmounted(() => {
  meta2d.destroy();
  wsClient && wsClient.close();

});
</script>
<style lang="postcss" scoped>
#meta2d {
  height: calc(100vh - 80px);
  z-index: 1;
  overflow: hidden;

  &.is--preview {
    height: 100%;
    flex: 1;
    overflow-x: hidden;
  }
}
</style>
