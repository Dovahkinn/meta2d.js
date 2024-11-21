<template>
  <div>
    <PropsTab :tabs="tabs">
      <template #pen-props>
        <div class="props-panel">
          <t-form label-align="left">
            <t-form-item label="名称" name="name">
              <t-input v-model="data.name" @change="onChangeData" />
            </t-form-item>
            <t-divider />
            <t-form-item label="网格" name="grid">
              <t-switch v-model="data.grid" @change="onChangeData" />
            </t-form-item>
            <t-form-item label="网格大小" name="gridSize">
              <t-input-number
                v-model="data.gridSize"
                :min="0"
                @change="onChangeData"
              />
            </t-form-item>
            <t-form-item label="网格角度" name="gridRotate">
              <t-input-number
                v-model.number="data.gridRotate"
                @change="onChangeData"
              />
            </t-form-item>
            <t-form-item label="网格颜色" name="gridColor">
              <t-color-picker
                class="w-full"
                v-model="data.gridColor"
                :show-primary-color-preview="false"
                format="CSS"
                :color-modes="['monochrome']"
                clearable
                @change="onChangeData"
              />
            </t-form-item>

            <t-divider />

            <t-form-item label="标尺" name="rule">
              <t-switch v-model="data.rule" @change="onChangeData" />
            </t-form-item>
            <t-form-item label="标尺颜色" name="ruleColor">
              <t-color-picker
                class="w-full"
                v-model="data.ruleColor"
                :show-primary-color-preview="false"
                format="CSS"
                :color-modes="['monochrome']"
                clearable
                @change="onChangeData"
              />
            </t-form-item>
            <t-divider />

            <t-form-item label="背景颜色" name="background">
              <t-color-picker
                class="w-full"
                v-model="data.background"
                :show-primary-color-preview="false"
                format="CSS"
                :color-modes="['monochrome']"
                clearable
                @change="onChangeData"
              />
            </t-form-item>
            <t-form-item label="图元默认颜色" name="color">
              <t-color-picker
                class="w-full"
                v-model="data.color"
                :show-primary-color-preview="false"
                format="CSS"
                clearable
                :color-modes="['monochrome']"
                @change="onChangeData"
              />
            </t-form-item>

            <t-form-item label="背景图片">
              <t-upload
                ref="uploadRef"
                v-model="uploadValue"
                :action="
                  $attrs.uploadUrl ||
                  'https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo'
                "
                :headers="headers"
                name="object"
                :sizeLimit="sizeLimit"
                theme="image"
                tips="请选择单张小于1MB的图片上传"
                accept="image/*"
                @fail="handleFail"
                @success="handleSuccess"
              />
            </t-form-item>
            <t-form-item label="背景图片地址" name="bkImage">
              <t-input
                v-model="data.bkImage"
                clearable
                @change="onChangeData('bkImage')"
              />
            </t-form-item>

            <!-- 连线相交弯曲  -->
            <t-form-item label="连线相交弯曲" name="lineCross">
              <t-tooltip
                content="当直线或折线两两相交时，其中相交的交点会自动弯曲显示"
              >
                <t-switch v-model="data.lineCross" @change="onChangeData" />
              </t-tooltip>
            </t-form-item>
          </t-form>
        </div>
      </template>

      <template #struct-props>
        <slot name="struct"></slot>
      </template>

      <template #comm-props>
        <div class="props-panel">
          <t-collapse defaultExpandAll class="meta-collapse">
            <t-collapse-panel value="0" header="WebSocket">
              <t-form
                :data="data"
                label-align="left"
                size="small"
                labelWidth="80px"
              >
                <t-form-item label="地址" name="wsUrl">
                  <t-input
                    v-model="data.wsUrl"
                    clearable
                    placeholder="ws:// 开头，不符合则不保存"
                    @blur="changeConnectProp('wsUrl')"
                  />
                </t-form-item>
                <t-form-item label="消息名称" name="busName">
                  <t-input
                    v-model="data.busName"
                    clearable
                    @change="changeConnectProp('busName')"
                  />
                </t-form-item>

                <t-form-item label="消息类型" name="msgTypes">
                  <t-tag-input
                    v-model="data.msgTypes"
                    clearable
                    placeholder="消息类型, 数字, 回车添加"
                    @change="changeConnectProp('msgTypes')"
                  />
                </t-form-item>

                <t-divider />
                <t-space>
                  <t-button @click="testConnect">测试连接</t-button>
                </t-space>
              </t-form>
            </t-collapse-panel>
            <t-collapse-panel header="消息处理代码">
              <t-button block @click="showCodeEditor">编辑代码</t-button>
            </t-collapse-panel>
            <t-collapse-panel header="消息状态字段">
              <t-button block @click="addWsMsgField">新增</t-button>
              <template #headerRightContent>
                <t-tooltip
                  content="用于消息处理器的触发条件"
                  placement="top-right"
                >
                  <t-button variant="text">
                    <t-icon name="help"></t-icon>
                  </t-button>
                </t-tooltip>
              </template>
              <br />
              <t-row
                v-for="(item, index) in data.wsMsgFields"
                :key="index"
                justify="start"
                style="margin-bottom: 4px"
              >
                <t-col :span="10">
                  <t-input
                    v-model="item.value"
                    @change="wsMsgFieldsChange"
                  ></t-input>
                </t-col>
                <t-col :span="2">
                  <t-button variant="text" @click="deleteWsMsgField(index)">
                    <t-icon name="delete"></t-icon>
                  </t-button>
                </t-col>
              </t-row>
            </t-collapse-panel>
            <t-collapse-panel header="消息处理队列">
              <MessageHandlers
                :wsMsgFields="data.wsMsgFields"
                :wsMsgHandlers="data.wsMsgHandlers"
                @change="wsHandlersChange"
              />
              <template #headerRightContent>
                <t-tooltip
                  content="【消息处理代码】存在时，此处的设置无效"
                  placement="top-right"
                >
                  <t-button variant="text">
                    <t-icon name="help"></t-icon>
                  </t-button>
                </t-tooltip>
              </template>
            </t-collapse-panel>
          </t-collapse>
        </div>
      </template>
    </PropsTab>
    <CodeEditor ref="codeEditor" @confirm="saveJsStr" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, useAttrs } from "vue";
import { lineCross, clearLineCross } from "@meta2d/utils";
import PropsTab from "./PropsTab.vue";
import { useUpload } from "../services/useUpload";
import { WebSocketClient } from "@qs/websocket-client";
import { NotifyPlugin } from "tdesign-vue-next";
import CodeEditor from "./CodeEditor.vue";
import MessageHandlers from "./MessageHandlers.vue";
import { useWsHandlers } from "../services/useHandlers";

// 图纸数据
const data = reactive<any>({
  name: "",
  background: undefined,
  color: undefined,
  lineCross: false,
  wsUrl: "",
  busName: "",
  msgTypes: [],
  backgroundImage: "",
  grid: false,
  gridSize: 10,
  gridRotate: undefined,
  gridColor: undefined,
  rule: true,
  ruleColor: undefined,
  wsMsgFields: [],
  wsMsgHandlers: [],
});

// 画布选项
const options = reactive<any>({
  grid: false,
  gridSize: 10,
  gridRotate: undefined,
  gridColor: undefined,
  rule: true,
});

const tabs = [
  {
    label: "图纸",
    value: 1,
    slot: "pen-props",
  },
  {
    label: "结构",
    value: 2,
    slot: "struct-props",
  },
  {
    label: "通信",
    value: 3,
    slot: "comm-props",
  },
];

onMounted(() => {
  const d: any = meta2d.data();
  data.name = d.name || "";
  data.background = d.background;
  data.color = d.color;
  data.lineCross = d.lineCross;
  data.backgroundImage = d.backgroundImage;
  data.grid = d.grid;
  data.gridSize = d.gridSize;
  data.gridRotate = d.gridRotate;
  data.gridColor = d.gridColor;
  data.rule = d.rule;
  data.ruleColor = d.ruleColor;
  data.bkImage = d.bkImage;
  data.wsUrl = d.wsUrl;
  data.busName = d.busName;
  data.msgTypes = d.msgTypes || [];
  data.onMessageJsCode = d.onMessageJsCode;
  data.wsMsgFields = d.wsMsgFields || [];
  data.wsMsgHandlers = d.wsMsgHandlers || [];

  Object.assign(options, meta2d.getOptions());
});

/**
 * @description 针对单个图纸修改
 */
const onChangeData = (prop?: string) => {
  if (data.lineCross) {
    lineCross(true);
  } else {
    clearLineCross();
  }

  Object.assign(meta2d.store.data, data);
  meta2d.store.patchFlagsBackground = true;

  meta2d.setGrid({
    grid: data.grid,
    gridSize: data.gridSize,
    gridRotate: data.gridRotate,
    gridColor: data.gridColor,
  });
  meta2d.setRule({
    rule: data.rule,
    ruleColor: data.ruleColor,
  });

  if (prop == "bkImage") {
    meta2d.setBackgroundImage(data.bkImage);
  }

  meta2d.render();
};

const uploadRef = ref();
const { uploadValue, sizeLimit, headers } = useUpload();

const handleSuccess = (context: any) => {
  console.log("upload success: ", context);
  if (context.response) {
    data.bkImage = context.response.url || context.response.data?.fileurl;
    onChangeData("bkImage");
  }
};

const handleFail = (e: any) => {
  console.log("upload fail: ", e);
};

const changeConnectProp = (prop: string) => {
  const value = data[prop];
  if (prop == "wsUrl") {
    if (!value?.startsWith("ws://")) {
      data[prop] = "";
      return;
    }
  }
  Object.assign(meta2d.store.data, data);
};

const { resolver } = useWsHandlers(data);
const testConnect = () => {
  const msgTypes = data.msgTypes
    .map((item: string) => {
      return Number(item);
    })
    .filter((item: number) => {
      return !isNaN(item);
    });

  const wsClient = WebSocketClient.getInstance(data.wsUrl, {
    busName: data.busName,
    msgTypes,
    enableLog: false,
    onReady: () => {
      // 绿色文字提示
      console.log("%c连接成功！", "color: green; font-weight: bold;");
      NotifyPlugin.success({
        title: "连接成功！",
      });
    },
  });
  wsClient.connect();
  // console.log("ws client: ", wsClient);
  const jsStr = data.onMessageJsCode;
  wsClient.subscribe(data.busName, msgTypes, (response) => {
    try {
      if (jsStr) {
        const fn = new Function("data", jsStr);
        fn(response);
      } else {
        // 消息处理器的封装
        resolver(response);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  });
};

const codeEditor = ref();
const showCodeEditor = () => {
  if (codeEditor.value) {
    codeEditor.value.open(data.onMessageJsCode);
  }
};

const saveJsStr = (jsStr: string) => {
  data.onMessageJsCode = jsStr;
  changeConnectProp("onMessageJsCode");
};

// * 自定义消息字段
const addWsMsgField = () => {
  data.wsMsgFields.push({
    label: "",
    value: "",
  });
};
const deleteWsMsgField = (index: number) => {
  data.wsMsgFields.splice(index, 1);
};
const wsMsgFieldsChange = () => {
  changeConnectProp("wsMsgFields");
};

const wsHandlersChange = (handlers: any) => {
  console.log("handlers: ", handlers);
  data.wsMsgHandlers = handlers;
  changeConnectProp("wsMsgHandlers");
};
</script>
<style lang="postcss" scoped>
.props-panel {
  padding: 10px;

  :deep(.t-form) {
    .t-form__item {
      margin-bottom: 8px;
    }
    .t-form__label {
      padding-right: 8px;
    }

    .t-divider {
      margin: 12px 0;
    }

    .t-input--auto-width {
      width: 100%;
    }
  }
}
</style>
