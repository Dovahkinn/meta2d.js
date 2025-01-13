<template>
  <div>
  <t-form labelAlign="left">
    <t-form-item label="时长" name="name">
      <t-input-number
        v-model="defaultScript.duration"
        placeholder="单位: ms"
        @change="eventChange"
      />
    </t-form-item>
  </t-form>
  <t-button block theme="primary" @click="insert">添加脚本</t-button>
  <t-collapse class="meta-collapse" expand-mutex @change="changeHandler">
    <t-collapse-panel v-if="fields.length" header="数据">
      <t-row justify="start">
        <t-col :span="5">
          <div>字段</div>
        </t-col>
        <t-col :span="5">
          <div>值</div>
        </t-col>
        <t-col :span="2">
          <t-button variant="text" @click="addRowProp">
            <t-icon name="add"></t-icon>
          </t-button>
        </t-col>
      </t-row>
      <t-row
        v-for="(propItem, index) in rowPropList"
        :key="index"
        justify="start"
        :gutter="4"
        style="margin-bottom: 4px"
      >
        <t-col :span="5">
          <t-select
            v-model="propItem.prop"
            :options="fields"
            :keys="{ label: 'title', value: 'colKey' }"
            @change="rowPropChange"
          ></t-select>
        </t-col>
        <t-col :span="5">
          <t-input v-model="propItem.value" @change="rowPropChange"></t-input>
        </t-col>
        <t-col :span="2">
          <t-button variant="text" @click="deleteRowProp(propItem)">
            <t-icon name="delete"></t-icon>
          </t-button>
        </t-col>
      </t-row>
    </t-collapse-panel>
    <t-collapse-panel
      v-for="(item, index) in handlers"
      :key="index"
      header="脚本"
    >
      <t-form labelAlign="left">
        <t-form-item label="行为">
          <t-select
            v-model="item.action"
            :options="eventActionOptions"
            @change="eventChange"
          ></t-select>
        </t-form-item>
        <t-form-item
          v-if="
            [
              EventAction.SetProps,
              EventAction.StartAnimate,
              EventAction.StopAnimate,
              EventAction.PauseAnimate,
              ExtendAction.AnimateReverse,
            ].includes(item.action)
          "
          label="目标"
        >
          <t-tag-input
            v-model="item.target"
            placeholder="标签或ID"
            @change="eventChange"
          ></t-tag-input>
        </t-form-item>
        <template v-if="item.action === EventAction.SetProps">
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
              <t-button variant="text" @click="deleteProp(propItem, item)">
                <t-icon name="delete"></t-icon>
              </t-button>
            </t-col>
          </t-row>
        </template>
        <template v-else-if="item.action === EventAction.Dialog">
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

        <template v-else-if="item.action === ExtendAction.Video">
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
            <t-select
              v-model="item.params.mode"
              clearable
              :options="dialogModeOptions"
              @change="eventChange"
            ></t-select>
          </t-form-item>
        </template>

        <t-form-item v-if="item.where" label="触发条件">
          <t-select
            v-model="item.where.type"
            :options="extendWhereTypeOptions"
            clearable
            @change="eventChange"
          ></t-select>
        </t-form-item>
        <template
          v-if="
            item.where &&
            item.where.type === ExtendActionEventNameMap.CustomMessage
          "
        >
          <t-form-item label="事件">
            <t-select
              v-model="item.where.value"
              :options="extendWhereMessageTypeOptions"
              clearable
              @change="whereValueChange"
            ></t-select>
          </t-form-item>
          <t-form-item v-if="item.where.value === ExtendActionMessageTypeMap.VideoEnded" label="事件来源">
            <t-select
              v-model="item.where.key"
              :options="videoSourceOptions"
              clearable
              @change="eventChange"
            ></t-select>
          </t-form-item>
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
  </div>
</template>
<script setup lang="ts">
import { defineProps, ref, computed, watch, } from "vue";
import {
  EventAction,
  ExtendAction,
  EventConfig,
  ExtendActionEventNameMap,
  ExtendActionMessageTypeMap,
} from "../types/Event";
import { MessagePlugin } from "tdesign-vue-next";
import { s12 } from "@meta2d/core";

type HandlerType = {
  id: string;
  action: EventAction;
  value: any;
  target: any[];
  params: any;
  where: {
    type: ExtendActionEventNameMap;
    value: any;
    key: string | null;
  };
}

const props = defineProps({
  fields: {
    type: Array<any>,
    default: () => [],
  },

  defaultScript: {
    type: Object,
    default: () => ({}),
  },

  scripts: {
    type: Array,
  }
});

const handlers = ref<Array<HandlerType>>(props.defaultScript?.handlers || []);

const insert = () => {
  handlers.value.push({
    id: s12(),
    action: EventAction.SetProps,
    value: {},
    target: [],
    params: {},
    where: {
      type: ExtendActionEventNameMap.CustomMessage,
      value: null,
      key: null,
    },
  });
};

const deleteEvent = (item: any) => {
  handlers.value.splice(handlers.value.indexOf(item), 1);
  eventChange();
};
const emit = defineEmits(["change"]);
const eventChange = () => {
  emit("change", {
    sid: props.defaultScript?.sid || s12(),
    duration: props.defaultScript?.duration || 3000,
    rowPropList: rowPropList.value,
    handlers: handlers.value,
  });
};

const eventActionOptions = [
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
    label: "弹窗",
    value: EventAction.Dialog,
  },

  // ! 官方没有定义的扩展类型
  {
    label: "关闭弹窗",
    value: ExtendAction.DialogClose,
  },
  {
    label: "连线动画反向",
    value: ExtendAction.AnimateReverse,
  },
  {
    label: "视频",
    value: ExtendAction.Video,
  },
];

const dialogModeOptions = [
  {
    label: "模态",
    value: "modal",
  },
  {
    label: "全屏",
    value: "full-screen",
  },
  {
    label: '非模态',
    value: 'modeless'
  }
];

const extendWhereTypeOptions = [
  {
    label: "扩展事件",
    value: ExtendActionEventNameMap.CustomMessage,
  },
];

const extendWhereMessageTypeOptions = [
  {
    label: "视频播放结束",
    value: ExtendActionMessageTypeMap.VideoEnded,
  },
];

const videoSourceOptions = ref<Array<any>>([])

const whereValueChange = (whereMessageType?: any) => {
  if (Array.isArray(props.scripts)) {
    const res: any[] = []
    props.scripts.forEach((script: any) => {
      if (Array.isArray(script.handlers)) {
        script.handlers.forEach((handler: any) => {
          if (handler.action === ExtendAction.Video) {
            res.push({
              label: handler.params?.title || handler.params?.url,
              value: handler.id,
            })
          }
        })
      }
    })
    videoSourceOptions.value = res
  }

  eventChange();

}


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

const deleteProp = (item: any, event: EventConfig) => {
  const index = propList.value.indexOf(item);
  propList.value.splice(index, 1);
  propChange(event);
};

const propChange = (event: EventConfig) => {
  const value: any = {};
  propList.value.forEach((item: any) => {
    value[item.prop] = item.value;
  });
  event.value = value;
  eventChange();
};

const updatePropList = (event: any) => {
  if (event.value && typeof event.value === "object") {
    propList.value = Object.keys(event.value).map((key: string) => {
      return {
        prop: key,
        value: event.value[key],
      };
    });
  }
};

/**
 * @description 点击折叠面板
 * @param value
 */
const changeHandler = (value: number[]) => {
  if (!value.length) return;
  if (!handlers.value.length) return;
  let index = value[0];
  if (props.fields.length) {
    index -= 1;
  }
  if (!handlers.value[index]) return;
  // 拷贝
  const item = JSON.parse(JSON.stringify(handlers.value[index]));
  if (item) {
    updatePropList(item);
    // 初始化自定义事件源选项
    if (item.where?.type == ExtendActionEventNameMap.CustomMessage) {
      whereValueChange()
    }
  }
};

// 步骤信息
const rowPropList = ref<any>(props.defaultScript?.rowPropList || []);
const addRowProp = () => {
  if (rowPropList.value.length >= props.fields.length) {
    MessagePlugin.warning(`最多只能添加${props.fields.length}个属性`);
    return;
  }
  rowPropList.value.push({
    prop: "",
    value: "",
  });
};

const rowPropChange = () => {
  // console.log("rowPropChange", rowPropList.value);
  eventChange();
};

const deleteRowProp = (item: any) => {
  const index = rowPropList.value.indexOf(item);
  rowPropList.value.splice(index, 1);
  rowPropChange();
};
</script>
<style lang="scss" scoped></style>
