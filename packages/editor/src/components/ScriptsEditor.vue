<template>
  <t-collapse defaultExpandAll class="meta-collapse">
    <t-collapse-panel header="表格列">
      <t-row justify="start">
        <t-col :span="5">
          <div>名称</div>
        </t-col>
        <t-col :span="5">
          <div>字段</div>
        </t-col>
        <t-col :span="2">
          <t-button variant="text" @click="addColumn">
            <t-icon name="add"></t-icon>
          </t-button>
        </t-col>
      </t-row>
      <t-row
        v-for="(item, index) in columns"
        :key="index"
        justify="start"
        :gutter="4"
        style="margin-bottom: 4px"
      >
        <t-col :span="5">
          <t-input v-model="item.title" @change="change"></t-input>
        </t-col>
        <t-col :span="5">
          <t-input v-model="item.colKey" @change="change"></t-input>
        </t-col>
        <t-col :span="2">
          <t-button variant="text" @click="deleteColumn(index)">
            <t-icon name="delete"></t-icon>
          </t-button>
        </t-col>
      </t-row>
    </t-collapse-panel>
    <t-collapse-panel header="样式">
      <t-form labelAlign="left">
        <t-form-item label="边框">
          <t-switch v-model="tableProps.bordered" @change="change"></t-switch>
        </t-form-item>
        <t-form-item label="悬停">
          <t-switch v-model="tableProps.hover" @change="change"></t-switch>
        </t-form-item>
        <t-form-item label="显示表头">
          <t-switch v-model="tableProps.showHeader" @change="change"></t-switch>
        </t-form-item>
        <t-form-item label="斑马纹">
          <t-switch v-model="tableProps.stripe" @change="change"></t-switch>
        </t-form-item>
        <t-form-item label="行默认背景">
          <t-color-picker
            v-model="tableProps.style.evenRowBackgroundColor"
            class="w-full"
            :show-primary-color-preview="false"
            format="CSS"
            :color-modes="['monochrome']"
            clearable
            @change="change"
          ></t-color-picker>
        </t-form-item>
        <t-form-item v-if="tableProps.stripe" label="奇数行背景">
          <t-color-picker
            v-model="tableProps.style.oddRowBackgroundColor"
            class="w-full"
            :show-primary-color-preview="false"
            format="CSS"
            :color-modes="['monochrome']"
            clearable
            @change="change"
          ></t-color-picker>
        </t-form-item>

        <t-form-item label="字体颜色">
          <t-color-picker
            v-model="tableProps.style.textColor"
            class="w-full"
            :show-primary-color-preview="false"
            format="CSS"
            :color-modes="['monochrome']"
            clearable
            @change="change"
          ></t-color-picker>
        </t-form-item>

        <t-form-item label="背景图片">
          <t-input
            v-model="tableProps.style.backgroundImageUrl"
            class="w-full"
            clearable
            @change="change"
          ></t-input>
        </t-form-item>
      </t-form>
    </t-collapse-panel>

    <t-collapse-panel
      v-for="(script, index) in scripts"
      :key="script.sid"
      :header="`指令-${script.sid}`"
    >
      <template #headerRightContent>
        <t-space size="small">
          <t-button
            v-if="index == scripts.length - 1"
            theme="primary"
            size="small"
            @click="addScript"
            >追加</t-button
          >
          <t-button
            v-else
            theme="warning"
            size="small"
            @click="insertScript(index)"
            >插入</t-button
          >
          <t-button
            v-if="index > 0"
            theme="danger"
            size="small"
            @click="deleteScript(index)"
            >删除</t-button
          >
        </t-space>
      </template>
      <script-handlers
        :key="script.sid"
        :fields="scriptFields"
        :defaultScript="script"
        :scripts="scripts"
        @change="scriptChange($event, index)"
      ></script-handlers>
    </t-collapse-panel>
  </t-collapse>
</template>
<script setup lang="ts">
import { defineProps, reactive, computed, defineEmits } from "vue";
import { s8 } from "@meta2d/core";
import ScriptHandlers from "./ScriptHandlers.vue";

const props = defineProps({});

const emit = defineEmits(["change"]);

const { presetScriptsConfig } = meta2d.data();

type ColumnType = {
  title: string;
  colKey: string;
  sid?: string;
  width?: string;
};

const defaultColumns = [
  { colKey: "serial-number", title: "序号", width: "100" },
  {
    title: "名称",
    colKey: "name",
    sid: s8(),
  },
  {
    title: "描述",
    colKey: "description",
    sid: s8(),
  },
];

const columns = reactive<Array<ColumnType>>(
  presetScriptsConfig?.columns || defaultColumns
);

const addColumn = () => {
  columns.push({
    title: "",
    colKey: "",
    sid: s8(),
  });
  change();
};
const change = (column?: any) => {
  emit("change", {
    columns,
    scripts,
    ...tableProps,
  });
};

const deleteColumn = (index: number) => {
  columns.splice(index, 1);
  change();
};

const tableProps = reactive({
  bordered: false,
  height: null,
  hover: false,
  showHeader: true,
  stripe: false,
  style: {
    evenRowBackgroundColor: "#f8f8f8",
    oddRowBackgroundColor: "#ffffff",
    textColor: "#000000",
    backgroundImageUrl: "",
  },
});

if (presetScriptsConfig) {
  tableProps.bordered = presetScriptsConfig.bordered;
  tableProps.height = presetScriptsConfig.height;
  tableProps.hover = presetScriptsConfig.hover;
  tableProps.showHeader = presetScriptsConfig.showHeader;
  tableProps.stripe = presetScriptsConfig.stripe;
  tableProps.style = presetScriptsConfig.style;
}

const scripts = reactive(
  presetScriptsConfig?.scripts || [
    {
      sid: s8(),
    },
  ]
);
const scriptFields = computed(() => {
  return columns.filter((item) => item.colKey != "serial-number");
});

const scriptChange = (data: any, index: number) => {
  scripts[index] = data;
  change();
};

const addScript = () => {
  scripts.push({
    sid: s8(),
  });
};

const insertScript = (index: number) => {
  scripts.splice(index, 0, {
    sid: s8(),
  });
};

const deleteScript = (index: number) => {
  scripts.splice(index, 1);
  change();
};

meta2d.on("opened", () => {
  // 打开新图纸，数据更新
  const { presetScriptsConfig } = meta2d.data();
  if (presetScriptsConfig) {
    if (Array.isArray(presetScriptsConfig.columns)) {
      columns.splice(0, columns.length, ...presetScriptsConfig.columns);
    }
    if (Array.isArray(presetScriptsConfig.scripts)) {
      scripts.splice(0, scripts.length, ...presetScriptsConfig.scripts);
    }

    tableProps.bordered = presetScriptsConfig.bordered;
    tableProps.height = presetScriptsConfig.height;
    tableProps.hover = presetScriptsConfig.hover;
    tableProps.showHeader = presetScriptsConfig.showHeader;
    tableProps.stripe = presetScriptsConfig.stripe;
    tableProps.style = presetScriptsConfig.style;
  } else {
    columns.splice(0, columns.length, ...defaultColumns);
    scripts.splice(0, scripts.length, {
      sid: s8(),
    });

    tableProps.bordered = false;
    tableProps.height = null;
    tableProps.hover = false;
    tableProps.showHeader = true;
    tableProps.stripe = false;
    tableProps.style = {
      evenRowBackgroundColor: "",
      oddRowBackgroundColor: "",
      textColor: "",
      backgroundImageUrl: "",
    };
    
  }
});
</script>
<style lang="scss" scoped></style>
