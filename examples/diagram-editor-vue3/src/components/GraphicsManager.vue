<template>
  <PropsTab :default-value="2" :tabs="tabs" >
    <template #graphics>
      <Graphics />
    </template>

    <template #diagrams> diagrams </template>

    <template #my-pens>
      <div class="panel__wrapper">
        <t-button block variant="outline" @click="showAddFolder">
          <t-icon name="add" slot="icon"></t-icon>
          新建文件夹
        </t-button>
        <br />
        <t-collapse defaultExpandAll>
          <t-collapse-panel
            v-for="item in myPensGroup"
            :value="item.value"
            :header="item.label"
          >
            <template #headerRightContent>
              <t-tooltip content="上传图片">
                <t-button
                  size="small"
                  variant="outline"
                  :style="{ marginLeft: '8px' }"
                >
                  <t-icon name="upload"></t-icon>
                </t-button>
              </t-tooltip>

              <t-tooltip content="添加组件">
                <t-button
                  size="small"
                  variant="outline"
                  :style="{ marginLeft: '8px' }"
                >
                  <t-icon name="chart-add"></t-icon>
                </t-button>
              </t-tooltip>

              <t-tooltip content="删除目录">
                <t-button
                  size="small"
                  variant="outline"
                  :style="{ marginLeft: '8px' }"
                >
                  <t-icon name="delete"></t-icon>
                </t-button>
              </t-tooltip>
            </template>

            <t-row :gutter="[10, 10]">
              <t-col v-for="(v, index) in item.children" :key="index" :span="6">
                <t-image
                  src="https://tdesign.gtimg.com/demo/demo-image-1.png"
                  overlayTrigger="hover"
                  fit="cover"
                  :style="{ width: '100px', height: '100px' }"
                >
                  <template #overlayContent>
                    <t-button
                      size="small"
                      variant="outline"
                      :style="{ float: 'right' }"
                      @click="deleteMyPen(v)"
                    >
                      <t-icon name="delete"></t-icon>
                    </t-button>
                  </template>
                </t-image>
              </t-col>
            </t-row>
          </t-collapse-panel>
        </t-collapse>
      </div>
    </template>
  </PropsTab>

  <t-dialog v-model:visible="visible" header="新建文件夹" @confirm="confirm" @closed="close">
    <t-input v-model="folderName" placeholder="请输入文件夹名称" maxlength="20" clearable></t-input>
  </t-dialog>
</template>
<script setup lang="ts">
import { defineProps, reactive, ref } from "vue";
import Graphics from "./Graphics.vue";
import PropsTab from "./PropsTab.vue";

const props = defineProps({});

const tabs = [
  {
    label: "图纸",
    value: 1,
    slot: "diagrams",
  },
  {
    label: "内置组件",
    value: 2,
    slot: "graphics",
  },
  {
    label: "我的组件",
    value: 3,
    slot: "my-pens",
  },
];

const myPensGroup = reactive([
  {
    label: "我的组件",
    value: "1",
    folder: true,
    children: [
      {
        name: "test1",
        image: "",
        id: "1",
      },
      {
        name: "test2",
        image: "",
        id: "2",
      },
      {
        name: "test3",
        image: "",
        id: "3",
      },
    ],
  },
  {
    label: "默认",
    value: "",
    folder: true,
    children: [
      {
        name: "test3",
        image: "",
        id: "3",
      },
      {
        name: "test4",
        image: "",
        id: "4",
      },
    ],
  },
]);

const visible = ref(false);
const folderName = ref('');
const showAddFolder = () => {
  visible.value = true;
}

const confirm = () => {
  console.log('confirm: ', folderName.value)
    visible.value = false;
};

const close = () => {
    folderName.value = '';
};

const deleteMyPen = (item: any) => {
  console.log("del: ", item);
};
</script>
<style lang="postcss" scoped>
.panel__wrapper {
  padding: 10px;

  :deep(.t-button) .t-button__text {
    align-items: center;
  }
}
</style>
