<template>
  <t-button block theme="primary" @click="insert">添加处理器</t-button>
  <t-collapse class="meta-collapse" expand-mutex @change="changeHandler">
    <t-collapse-panel
      v-for="(item, index) in handlers"
      :key="index"
      header="处理器"
    >
      <t-form labelAlign="left">
        <t-form-item label="行为">
          <t-select
            v-model="item.action"
            :options="eventActionOptions"
            @change="eventChange"
          ></t-select>
        </t-form-item>
        <t-form-item label="目标">
          <t-button variant="text" theme="primary" @click="showSelect(index)"
            >选择目标图元</t-button
          >
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
              <t-button variant="text" @click="deleteProp(propItem)">
                <t-icon name="delete"></t-icon>
              </t-button>
            </t-col>
          </t-row>
        </template>
        <!-- 字段名 -->
        <t-form-item label="字段名">
          <t-select
            v-model="item.where.key"
            :options="wsMsgFields"
            @change="eventChange"
          ></t-select>
        </t-form-item>

        <t-form-item label="条件">
          <t-select
            v-model="item.where.comparison"
            :options="comparisonOptions"
            @change="eventChange"
          ></t-select>
        </t-form-item>

        <t-form-item label="值">
          <t-input v-model="item.where.value" @change="eventChange"></t-input>
        </t-form-item>
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
  <t-drawer
    v-model:visible="drawerVisible"
    header="选择图元"
    size="30%"
    :on-confirm="onClickConfirm"
    :close-btn="true"
  >
    <t-row v-if="currentHandler" :gutter="10">
      <t-col :span="10">
        <t-select
          v-model="currentHandler.tags"
          :options="tagOptions"
          placeholder="按标签选择"
          multiple
          clearable
        ></t-select>
      </t-col>
      <t-col :span="2">
        <t-button @click="findPens">查询</t-button>
      </t-col>
    </t-row>
    <t-table
      v-if="currentHandler"
      row-key="id"
      :columns="columns"
      :data="penList"
      :selected-row-keys="currentHandler.ids"
      @select-change="rehandleSelectChange"
    >
    </t-table>
  </t-drawer>
</template>
<script setup lang="ts">
import { defineProps, ref } from "vue";
import { EventAction, EventConfig } from "../types/Event";
import { MessagePlugin } from "tdesign-vue-next";
import ConfigList from "../utils/electric-config.json";
import { s12 } from "@meta2d/core";

const props = defineProps({
  wsMsgFields: {
    type: Array<any>,
    default: () => [],
  },
  wsMsgHandlers: {
    type: Array<any>,
    default: () => [],
  },
});

const handlers = ref<any>(props.wsMsgHandlers);

const insert = () => {
  handlers.value.push({
    id: s12(),
    action: EventAction.SetProps,
    params: {
      tags: [],
      ids: [],
    },
    value: {},
    where: {
      key: "",
      value: "",
      comparison: "",
    },
  });
};

const deleteEvent = (item: any) => {
  handlers.value.splice(handlers.value.indexOf(item), 1);
  eventChange();
};
const emit = defineEmits(["change"]);
const eventChange = () => {
  emit("change", handlers.value);
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
];

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
    value: "status",
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
  emit("change", handlers.value);
};

const updatePropList = (index: number[]) => {
  const event = handlers.value[Number(index)];
  if (event.value && typeof event.value === "object") {
    propList.value = Object.keys(event.value).map((key: string) => {
      return {
        prop: key,
        value: event.value[key],
      };
    });
  }
};

const comparisonOptions = [
  {
    label: "大于",
    value: ">",
  },
  {
    label: "大于等于",
    value: ">=",
  },
  {
    label: "小于",
    value: "<",
  },
  {
    label: "小于等于",
    value: "<=",
  },
  {
    label: "等于",
    value: "=",
  },
  {
    label: "不等于",
    value: "!=",
  },
];

const drawerVisible = ref(false);

const showSelect = (index: number) => {
  changeHandler([index]);
  drawerVisible.value = true;
};

const currentHandler = ref<any>({
  tags: [],
  ids: [],
});

/**
 * @description 点击折叠面板
 * @param value 
 */
const changeHandler = (value: number[]) => {
  updatePropList(value);
  const item = handlers.value[value[0]];
  if (item) {
    currentHandler.value = {
      tags: item.params.tags,
      ids: filterIds(item.params.ids),
      id: item.id,
    };
    findPens();
  }
};

const tagOptions = ConfigList.map((item) => {
  return {
    label: item.释义,
    value: item.元件类型,
  };
});

// 清空不存在的图元ID
function filterIds(ids: string[]) {
  return ids.filter((id: string) => {
    return !!meta2d.findOne(id)
  })
}

const onClickConfirm = () => {
  drawerVisible.value = false;
  // 更新 handlers
  const item = handlers.value.find(
    (item: any) => item.id === currentHandler.value.id
  );
  if (item) {
    item.params.tags = currentHandler.value.tags;
    item.params.ids = filterIds(currentHandler.value.ids);
    eventChange();
  }
};

const penList = ref<any>([]);
const columns = [
  {
    title: "ID",
    colKey: "id",
    type: "multiple",
  },
  {
    title: "图元名称",
    colKey: "name",
  },
  {
    title: "标签",
    colKey: "tags",
  },
  {
    title: "文字",
    colKey: "text",
  },
  {
    title: "描述",
    colKey: "description",
  },
];
const findPens = () => {
  const data = meta2d.data();
  if (currentHandler.value) {
    if (currentHandler.value.tags.length) {
      const pens: any[] = [];
      currentHandler.value.tags.forEach((tag: string) => {
        const list = meta2d.find(tag);
        pens.push(...list);
      });
      // pens 去重
      const sets = [...new Set(pens)];
      // console.log("sets", sets, pens);
      penList.value = sets;
      return;
    }
  }
  penList.value = data.pens;
};

const rehandleSelectChange = (value: string[], ctx: any) => {
  currentHandler.value.ids = value;
  //   emit("change", handlers.value);
};
</script>
<style lang="scss" scoped></style>
