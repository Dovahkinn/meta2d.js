<template>
  <div class="props-panel">
    <t-form label-align="left" v-if="pen">
      <h5 class="mb-24">图元组</h5>
      <t-form-item label="文本" name="text">
        <t-input v-model="pen.text" @change="changeValue('text')" />
      </t-form-item>
      <t-form-item label="颜色" name="color">
        <t-color-picker
          class="w-full"
          v-model="pen.color"
          :show-primary-color-preview="false"
          format="CSS"
          :color-modes="['monochrome']"
          @change="changeValue('color')"
        />
      </t-form-item>
      <t-form-item label="背景" name="background">
        <t-color-picker
          class="w-full"
          v-model="pen.background"
          :show-primary-color-preview="false"
          format="CSS"
          :color-modes="['monochrome']"
          @change="changeValue('background')"
        />
      </t-form-item>
      <t-form-item label="线条" name="dash">
        <t-select v-model="pen.dash" @change="changeValue('dash')">
          <t-option :key="0" :value="0" label="实线"></t-option>
          <t-option :key="1" :value="1" label="虚线"></t-option>
        </t-select>
      </t-form-item>
      <t-form-item label="圆角" name="borderRadius">
        <t-input-number
          :min="0"
          :max="1"
          :step="0.01"
          v-model="pen.borderRadius"
          @change="changeValue('borderRadius')"
        />
      </t-form-item>
      <t-form-item label="不透明度" name="globalAlpha">
        <t-slider
          v-model="pen.globalAlpha"
          :min="0"
          :max="1"
          :step="0.01"
          @change="changeValue('globalAlpha')"
        />
        <span class="ml-16" style="width: 50px; line-height: 30px">
          {{ pen.globalAlpha }}
        </span>
      </t-form-item>

      <t-divider />

      <t-form-item label="文字水平对齐" name="textAlign">
        <t-select v-model="pen.textAlign" @change="changeValue('textAlign')">
          <t-option key="left" value="left" label="左对齐"></t-option>
          <t-option key="center" value="center" label="居中"></t-option>
          <t-option key="right" value="right" label="右对齐"></t-option>
        </t-select>
      </t-form-item>
      <t-form-item label="文字垂直对齐" name="textBaseline">
        <t-select
          v-model="pen.textBaseline"
          @change="changeValue('textBaseline')"
        >
          <t-option key="top" value="top" label="顶部对齐"></t-option>
          <t-option key="middle" value="middle" label="居中"></t-option>
          <t-option key="bottom" value="bottom" label="底部对齐"></t-option>
        </t-select>
      </t-form-item>

      <t-divider />
    </t-form>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useSelection } from "@/services/selections";

const { selections } = useSelection();

const pen = ref<any>();
// 位置数据。当前版本位置需要动态计算获取
const rect = ref<any>();

onMounted(() => {
  getPen();
});

const getPen = () => {
  pen.value = selections.pens?.[0] || {};
  if (pen.value.globalAlpha == undefined) {
    pen.value.globalAlpha = 1;
  }

  rect.value = meta2d.getPenRect(pen.value);
};

// 监听选中不同图元
// @ts-ignore
const watcher = watch(() => selections.pens, getPen);

const lineDashs = [undefined, [5, 5]];

const changeValue = (prop: string) => {
  console.log("change value: ", prop, pen.value, selections.pens);
  if (selections.pens?.length) {
    const newValue = pen.value[prop];
    selections.pens.forEach((pen: any) => {
      const v: any = { id: pen.id };
      v[prop] = newValue
      if (prop === "dash") {
        v.lineDash = lineDashs[v[prop]];
      }
      meta2d.setValue(v, { render: true });
    });
  }

};

onUnmounted(() => {
  watcher();
});
</script>
<style lang="postcss" scoped>
.props-panel {
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

    .t-space {
      gap: 4px;
    }
  }
}
</style>
