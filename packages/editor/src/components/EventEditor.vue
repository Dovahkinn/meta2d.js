<template>
  <br />
  <t-button block theme="primary" @click="insert">添加事件</t-button>
  <t-collapse class="meta-collapse" expand-mutex @change="updatePropList">
    <t-collapse-panel v-for="item in events" header="事件">
      <t-form labelAlign="left">
        <t-form-item label="事件类型">
          <t-select
            v-model="item.name"
            :options="eventTypeOptions"
            @change="eventChange"
          ></t-select>
        </t-form-item>
        <t-form-item label="事件行为">
          <t-select
            v-model="item.action"
            :options="eventActionOptions"
            @change="actionChange(item)"
          ></t-select>
        </t-form-item>
        <t-form-item v-if="item.action === EventAction.Link" label="链接地址">
          <t-input
            v-model="item.value"
            clearable
            @change="eventChange"
          ></t-input>
        </t-form-item>
        <template v-if="item.action === EventAction.SetProps">
          <t-form-item label="目标">
            <t-input
              v-model="item.params"
              placeholder="可输入目标图元的ID/Tag"
              clearable
              @change="eventChange"
            ></t-input>
          </t-form-item>
          <!-- 属性列表修改 -->
          <t-row justify="start">
            <t-col :span="5">
              <div>属性</div>
            </t-col>
            <t-col :span="5">
              <div>值</div>
            </t-col>
            <t-col :span="2">
              <t-button variant="text" @click="addProp">
                <t-icon name="add"></t-icon>
              </t-button>
            </t-col>
          </t-row>
          <t-row
            v-for="(propItem, index) in propList"
            :key="index"
            justify="start"
            :gutter="4"
            style="margin-bottom: 4px"
          >
            <t-col :span="5">
              <t-select
                v-model="propItem.prop"
                :options="propOptions"
                @change="propChange(item)"
              ></t-select>
            </t-col>
            <t-col :span="5">
              <t-input
                v-model="propItem.value"
                @change="propChange(item)"
              ></t-input>
            </t-col>
            <t-col :span="2">
              <t-button variant="text" @click="deleteProp(propItem)">
                <t-icon name="delete"></t-icon>
              </t-button>
            </t-col>
          </t-row>
        </template>
        <t-form-item
          v-if="
            [
              EventAction.PauseAnimate,
              EventAction.StopAnimate,
              EventAction.StartAnimate,
            ].includes(item.action)
          "
          label="目标"
        >
          <t-input
            v-model="item.value"
            placeholder="可输入目标图元的ID/Tag"
            clearable
            @change="eventChange"
          ></t-input>
        </t-form-item>

        <template v-if="item.action === EventAction.Dialog">
          <t-form-item label="窗口标题">
            <t-input
              v-model="item.value"
              clearable
              @change="eventChange"
            ></t-input>
          </t-form-item>
          <t-form-item label="URL">
            <t-input
              v-model="item.params"
              clearable
              @change="eventChange"
            ></t-input>
          </t-form-item>
          <t-form-item v-if="item.extend" label="窗口宽度">
            <t-input-number
              v-model="item.extend.width"
              @change="eventChange"
            ></t-input-number>
          </t-form-item>
          <t-form-item v-if="item.extend" label="窗口高度">
            <t-input-number
              v-model="item.extend.height"
              @change="eventChange"
            ></t-input-number>
          </t-form-item>
          <t-form-item v-if="item.extend" label="X偏移">
            <t-input-number
              v-model="item.extend.x"
              @change="eventChange"
            ></t-input-number>
          </t-form-item>
          <t-form-item v-if="item.extend" label="Y偏移">
            <t-input-number
              v-model="item.extend.y"
              @change="eventChange"
            ></t-input-number>
          </t-form-item>
        </template>

        <template v-else-if="item.action === EventAction.JS">
          <t-form-item label="扩展行为">
            <t-select
              v-model="item.params.action"
              :options="templateCodeStringOptions"
              @change="codeJsChange($event, item)"
            ></t-select>
          </t-form-item>
          <template v-if="item.params.action === ExtendAction.Video">
            <t-form-item label="窗口标题">
              <t-input
                v-model="item.params.title"
                clearable
                @change="eventChange"
              ></t-input>
            </t-form-item>
            <t-form-item label="视频URL">
              <t-input
                v-model="item.params.url"
                clearable
                @change="eventChange"
              ></t-input>
            </t-form-item>
            <t-form-item v-if="item.params" label="窗口宽度">
              <t-input
                v-model="item.params.width"
                placeholder="示例：320, '500px', '80%'"
                @change="eventChange"
              ></t-input>
            </t-form-item>
            <t-form-item v-if="item.params" label="对话框类型">
              <t-select v-model="item.params.mode" clearable :options="dialogModeOptions"></t-select>
            </t-form-item>
          </template>
        </template>
      </t-form>
      <template #headerRightContent>
        <t-button
          size="small"
          variant="outline"
          theme="danger"
          :style="{ marginLeft: '8px' }"
          @click="deleteEvent(item)"
        >
          <t-icon name="delete"></t-icon>
        </t-button>
      </template>
    </t-collapse-panel>
  </t-collapse>
</template>
<script setup lang="ts">
import { defineProps, ref, watch, } from "vue";
import { MessagePlugin } from "tdesign-vue-next";
import {
  EventAction,
  ExtendAction,
  EventConfig,
  ExtendActionJsCodeMap,
} from "../types/Event";
const props = defineProps({
  defaultEventsValue: {
    type: Array,
    default: () => [],
  },
});

const events = ref<Array<EventConfig>>(
  props.defaultEventsValue as EventConfig[]
);

watch(() => props.defaultEventsValue, (val) => {
  if (val) {
    events.value = val as EventConfig[];
  } else {
    events.value = [];
  }
})

const eventTypeOptions = [
  {
    label: "单击",
    value: "click",
  },
  {
    label: "双击",
    value: "dblclick",
  },
  {
    label: "鼠标按下",
    value: "mousedown",
  },
  {
    label: "鼠标抬起",
    value: "mouseup",
  },
  {
    label: "鼠标进入",
    value: "enter",
  },
  {
    label: "鼠标离开",
    value: "leave",
  },
  //   {
  //     label: "选中",
  //     value: "active",
  //   },
  //   {
  //     label: "取消选中",
  //     value: "inactive",
  //   },
];

const eventActionOptions = [
  {
    label: "打开链接",
    value: EventAction.Link,
  },
  {
    label: "更改属性",
    value: EventAction.SetProps,
  },
  {
    label: "执行动画",
    value: EventAction.StartAnimate,
  },
  {
    label: "暂停动画",
    value: EventAction.PauseAnimate,
  },
  {
    label: "停止动画",
    value: EventAction.StopAnimate,
  },
  {
    label: "执行JS代码",
    value: EventAction.JS,
  },
  //   {
  //     label: "执行全局函数",
  //     value: EventAction.GlobalFn,
  //   },
  //   {
  //     label: "发送消息",
  //     value: EventAction.Emit,
  //   },
  //   {
  //     label: "播放视频",
  //     value: EventAction.StartVideo,
  //   },
  //   {
  //     label: "暂停视频",
  //     value: EventAction.PauseVideo,
  //   },
  //   {
  //     label: "停止视频",
  //     value: EventAction.StopVideo,
  //   },
  //   {
  //     label: "发送图元数据",
  //     value: EventAction.SendPropData,
  //   },
  //   {
  //     label: "发送绑定变量",
  //     value: EventAction.SendVarData,
  //   },
  {
    label: "对话框",
    value: EventAction.Dialog,
  },
  // {
  //   label: '扩展-视频',
  //   value: ExtendAction.Video,
  // }
];

const templateCodeStringOptions = [
  {
    label: "视频",
    value: ExtendAction.Video,
  },
  // {
  //   label: '',
  //   value: '',
  // },
  // {
  //   label: '',
  //   value: '',
  // }
];

const dialogModeOptions = [
  {
    label: "模态",
    value: "modal",
  },
  {
    label: '全屏',
    value: 'full-screen'
  }
]

const insert = () => {
  events.value.push({
    name: "",
    action: 0,
    value: "",
    params: "",
    where: {},
    extend: {},
  });
};
const deleteEvent = (event: any) => {
  events.value = events.value.filter((item: any) => item !== event);
  eventChange();
};

const emit = defineEmits(["change"]);
const eventChange = () => {
  emit("change", events.value);
};

const actionChange = (event: any) => {
  console.log("action change: ", event);
  if (event.action == EventAction.JS) {
    event.params = {
      url: "",
      action: "", // ExtendAction.Video,
    };
    event.value = ``; // 代码字符串，通过选择预定义的模板更新
  }
  eventChange();
};

const codeJsChange = (action: ExtendAction, event: any) => {
  const code = ExtendActionJsCodeMap[action] as string;
  if (code) {
    event.value = code;
  }
  eventChange();
};

const propOptions = [
  {
    label: "背景颜色",
    value: "background",
  },
  {
    label: "颜色",
    value: "color",
  },
  {
    label: "文字",
    value: "text",
  },
  {
    label: "进度",
    value: "progress",
  },
  {
    label: "显示",
    value: "visible",
  },
  {
    label: "状态",
    value: "showChild",
  },
];
const propList = ref<any>([]);
const addProp = () => {
  if (propList.value.length >= 6) {
    MessagePlugin.warning("最多只能添加6个属性");
    return;
  }
  propList.value.push({
    prop: "",
    value: "",
  });
};

const deleteProp = (item: any) => {
  const index = propList.value.indexOf(item);
  propList.value.splice(index, 1);
};

const propChange = (event: EventConfig) => {
  const value: any = {};
  propList.value.forEach((item: any) => {
    value[item.prop] = item.value;
  });
  event.value = value;
  emit("change", events.value);
};

const updatePropList = (index: number[]) => {
  const event = events.value[Number(index)];
  if (!event) return
  if (event.value && typeof event.value === "object") {
    propList.value = Object.keys(event.value).map((key: string) => {
      return {
        prop: key,
        value: event.value[key],
      };
    });
  }
};
</script>
<style lang="scss" scoped></style>
