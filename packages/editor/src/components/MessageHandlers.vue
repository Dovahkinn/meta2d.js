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
              <t-button variant="text" @click="deleteProp(propItem, item)">
                <t-icon name="delete"></t-icon>
              </t-button>
            </t-col>
          </t-row>
        </template>
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
    size="40%"
    :on-confirm="onClickConfirm"
    :close-btn="true"
  >
    <t-row v-if="currentHandler" :gutter="10" style="height: 100%">
      <t-col :span="4" style="height: 100%">
        <t-form label-align="top">
          <t-form-item label="电路元件" name="name">
            <t-select
              v-model="currentHandler.tags"
              :options="tagOptions"
              placeholder="按标签选择"
              multiple
              :minCollapsedNum="10"
              clearable
            ></t-select>
          </t-form-item>
          <t-form-item label="图元标签" name="tag">
            <t-input
              v-model="currentHandler._tag"
              placeholder="输入自定义的标签进行查询，不做保存"
              clearable
            ></t-input>
          </t-form-item>
          <t-form-item>
            <t-button block @click="findPens">查询</t-button>
          </t-form-item>
          <t-form-item>
            <t-tooltip content="符合条件的图元数量大时，会出现卡顿">
              <t-button block theme="warning" @click="activePens"
                >选中图元</t-button
              >
            </t-tooltip>
          </t-form-item>
        </t-form>
      </t-col>
      <t-col :span="7" style="height: 100%">
        <t-table
          v-if="currentHandler"
          class="meta-table"
          row-key="id"
          :columns="columns"
          :data="penList.value"
          :selected-row-keys="currentHandler.ids"
          :scroll="{ type: 'virtual', rowHeight: 48, bufferSize: 30 }"
          style="height: 100%"
          @select-change="rehandleSelectChange"
        >
        </t-table>
      </t-col>
    </t-row>
  </t-drawer>
</template>
<script setup lang="ts">
import { defineProps, ref, shallowReactive } from "vue";
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
  propChange(event)
};

const propChange = (event: EventConfig) => {
  const value: any = {};
  propList.value.forEach((item: any) => {
    value[item.prop] = item.value;
  });
  event.value = value;
  emit("change", handlers.value);
console.log('prop change: ', event, handlers.value)
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

const currentHandler = shallowReactive<any>({
  tags: [],
  ids: [],
  id: "",
});

/**
 * @description 点击折叠面板
 * @param value
 */
const changeHandler = (value: number[]) => {
  if (!value.length) return;
  // 拷贝
  const item = JSON.parse(JSON.stringify(handlers.value[value[0]]));
  if (item) {
    currentHandler.tags = item.params.tags;
    currentHandler.ids = filterIds(item.params.ids);
    currentHandler.id = item.id;
    updatePropList(value);
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
    return !!meta2d.findOne(id);
  });
}

const onClickConfirm = () => {
  drawerVisible.value = false;
  // 更新 handlers
  const item = handlers.value.find(
    (item: any) => item.id === currentHandler.id,
  );
  if (item) {
    item.params.tags = currentHandler.tags;
    item.params.ids = filterIds(currentHandler.ids);
    eventChange();
  }
};

const penList = shallowReactive<any>({
  value: [],
});
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
  if (currentHandler) {
    if (currentHandler._tag) {
      penList.value = meta2d.find(currentHandler._tag);
      return;
    } else if (currentHandler.tags.length) {
      const pens: any[] = [];
      currentHandler.tags.forEach((tag: string) => {
        const list = meta2d.find(tag);
        pens.push(...list);
      });
      // pens 去重
      const sets = [...new Set(pens)];
      // console.log("sets", sets, pens);
      setTimeout(() => {
        penList.value = sets;
      }, 1000);
      return;
    }
  }
  setTimeout(() => {
    penList.value = data.pens;
  }, 1000);
};

const rehandleSelectChange = (value: string[], ctx: any) => {
  currentHandler.ids = value;
};

const activePens = () => {
  if (currentHandler.ids.length) {
    // 根据ID设置选中
    const pens = currentHandler.ids
      .map((id) => {
        return meta2d.findOne(id);
      })
      .filter((pen) => !!pen);
    meta2d.active(pens);
  } else {
    // 按标签查询图元
    meta2d.active(penList.value);
  }
};
</script>
<style lang="scss" scoped></style>
