<template>
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
              v-model="imageFile"
              :action="
                $attrs.uploadUrl ||
                'https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo'
              "
              :sizeLimit="sizeLimit"
              theme="image"
              tips="请选择单张小于5MB的图片上传"
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
      <Structure />
    </template>
  </PropsTab>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import { lineCross, handleLineCross, clearLineCross } from "@meta2d/utils";
import PropsTab from "./PropsTab.vue";
import Structure from "./Structure.vue";

// 图纸数据
const data = reactive<any>({
  name: "",
  background: undefined,
  color: undefined,
  lineCross: false,
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
  // {
  //   label: "通信",
  //   value: 3,
  // }
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

  console.log("change data: ", data);
  // options.grid = data.grid;
  // options.gridSize = data.gridSize;

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

/**
 * @description 修改网格等属性需要执行，否则不会即时渲染
 * @deprecated
 */
const onChangeOptions = () => {
  console.log("onChangeOptions ", options);
  meta2d.setOptions(options);
  meta2d.store.patchFlagsTop = true;
  meta2d.store.patchFlagsBackground = true;
  meta2d.render();
};

const uploadRef = ref();
const imageFile = ref([]);
const sizeLimit = {
  limit: 1024 * 5,
  unit: "KB",
};

const handleSuccess = (context: any) => {
  console.log("upload success: ", context);
  if (context.response) {
    data.bkImage = context.response.url;
    onChangeData("bkImage");
  }
};

const handleFail = (e: any) => {
  console.log("upload fail: ", e);
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
