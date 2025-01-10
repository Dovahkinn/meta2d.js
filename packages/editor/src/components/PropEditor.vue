<template>
  <div class="props-panel__editor">
    <t-form label-align="left">
      <t-form-item label="时长(ms)" name="duration">
        <t-input-number
          v-model="data.duration"
          :min="0"
          @change="changeValue('duration')"
        />
      </t-form-item>

      <t-form-item label="偏移X" name="x">
        <t-input-number
          v-model="data.x"
          placeholder="px"
          @change="changeValue('x')"
        />
      </t-form-item>
      <t-form-item label="偏移Y" name="y">
        <t-input-number
          v-model="data.y"
          placeholder="px"
          @change="changeValue('y')"
        />
      </t-form-item>

      <t-form-item label="颜色" name="color">
        <t-color-picker
          class="w-full"
          v-model="data.color"
          :show-primary-color-preview="false"
          format="CSS"
          :color-modes="['monochrome']"
          clearable
          @change="changeValue('color')"
        />
      </t-form-item>
      <t-form-item label="浮动颜色" name="hoverColor">
        <t-color-picker
          class="w-full"
          v-model="data.hoverColor"
          :show-primary-color-preview="false"
          format="CSS"
          :color-modes="['monochrome']"
          clearable
          @change="changeValue('hoverColor')"
        />
      </t-form-item>
      <t-form-item label="选中颜色" name="activeColor">
        <t-color-picker
          class="w-full"
          v-model="data.activeColor"
          :show-primary-color-preview="false"
          format="CSS"
          :color-modes="['monochrome']"
          clearable
          @change="changeValue('activeColor')"
        />
      </t-form-item>

      <t-form-item label="背景" name="background">
        <t-color-picker
          class="w-full"
          v-model="data.background"
          :show-primary-color-preview="false"
          format="CSS"
          :color-modes="['monochrome']"
          clearable
          @change="changeValue('background')"
        />
      </t-form-item>
      <t-form-item label="线条" name="dash">
        <t-select v-model="data.dash" @change="changeValue('dash')">
          <t-option :key="0" :value="0" label="实线"></t-option>
          <t-option :key="1" :value="1" label="虚线"></t-option>
        </t-select>
      </t-form-item>
      <t-form-item label="线条宽度" name="lineWidth">
        <t-input-number
          v-model="data.lineWidth"
          @change="changeValue('lineWidth')"
        />
      </t-form-item>

      <t-form-item label="圆角" name="borderRadius">
        <t-input-number
          :min="0"
          :max="1"
          :step="0.01"
          v-model="data.borderRadius"
          @change="changeValue('borderRadius')"
        />
      </t-form-item>
      <t-form-item label="不透明度" name="globalAlpha">
        <t-slider
          v-model="data.globalAlpha"
          :min="0"
          :max="1"
          :step="0.01"
          @change="changeValue('globalAlpha')"
        />
        <span class="ml-16" style="width: 50px; line-height: 30px">
          {{ data.globalAlpha }}
        </span>
      </t-form-item>
      <t-form-item label="阴影颜色" name="shadowColor">
        <t-color-picker
          class="w-full"
          v-model="data.shadowColor"
          :show-primary-color-preview="false"
          format="CSS"
          :color-modes="['monochrome']"
          clearable
          @change="changeValue('shadowColor')"
        />
      </t-form-item>
      <t-form-item label="阴影模糊" name="shadowBlur">
        <t-input-number
          v-model="data.shadowBlur"
          :min="0"
          @change="changeValue('shadowBlur')"
        />
      </t-form-item>
      <t-form-item label="阴影X偏移" name="shadowOffsetX">
        <t-input-number
          v-model="data.shadowOffsetX"
          @change="changeValue('shadowOffsetX')"
        />
      </t-form-item>
      <t-form-item label="阴影Y偏移" name="shadowOffsetY">
        <t-input-number
          v-model="data.shadowOffsetY"
          @change="changeValue('shadowOffsetY')"
        />
      </t-form-item>

      <t-divider />
      <t-form-item label="文字阴影" name="textHasShadow">
        <t-switch
          v-model="data.textHasShadow"
          @change="changeValue('textHasShadow')"
        />
      </t-form-item>
      <t-form-item label="文本" name="text">
        <t-input v-model="data.text" clearable @change="changeValue('text')" />
      </t-form-item>

      <t-form-item label="字体" name="fontSize">
        <t-input-number
          v-model="data.fontSize"
          @change="changeValue('fontSize')"
        />
      </t-form-item>

      <t-form-item label="文字颜色类型" name="textType">
        <t-select v-model="data.textType" @change="changeValue('textType')">
          <t-option key="hex" :value="0" label="纯色"></t-option>
          <t-option key="rgb" :value="1" label="线性渐变"></t-option>
          <t-option key="rgba" :value="2" label="径向渐变"></t-option>
        </t-select>
      </t-form-item>

      <t-form-item
        v-if="[1, 2].includes(data.textType)"
        label="文字渐变"
        name="textGradientColors"
      >
        <t-color-picker
          class="w-full"
          v-model="data.textGradientColors"
          :show-primary-color-preview="false"
          format="CSS"
          :color-modes="['linear-gradient']"
          clearable
          @change="changeValue('textGradientColors')"
        />
      </t-form-item>

      <t-form-item v-else label="文字颜色" name="textColor">
        <t-color-picker
          class="w-full"
          v-model="data.textColor"
          :show-primary-color-preview="false"
          format="CSS"
          :color-modes="['monochrome']"
          clearable
          @change="changeValue('textColor')"
        />
      </t-form-item>

      <t-form-item label="文本风格" name="fontStyle">
        <t-select v-model="data.fontStyle" @change="changeValue('fontStyle')">
          <t-option key="normal" value="normal" label="常规"></t-option>
          <t-option key="italic" value="italic" label="斜体"></t-option>
        </t-select>
      </t-form-item>

      <!-- 加粗 -->
      <t-form-item label="文本粗细" name="fontWeight">
        <t-select v-model="data.fontWeight" @change="changeValue('fontWeight')">
          <t-option key="normal" value="normal" label="常规"></t-option>
          <t-option key="bold" value="bold" label="加粗"></t-option>
          <t-option key="lighter" value="lighter" label="更细"></t-option>
        </t-select>
      </t-form-item>

      <t-form-item label="换行" name="whiteSpace">
        <t-select v-model="data.whiteSpace" @change="changeValue('whiteSpace')">
          <t-option key="normal" value="normal" label="常规"></t-option>
          <t-option key="nowrap" value="nowrap" label="不换行"></t-option>
          <t-option
            key="pre-line"
            value="pre-line"
            label="换行符换行"
          ></t-option>
          <t-option
            key="break-all"
            value="break-all"
            label="永远换行"
          ></t-option>
        </t-select>
      </t-form-item>

      <t-form-item label="超出省略" name="ellipsis">
        <t-switch v-model="data.ellipsis" @change="changeValue('ellipsis')">
        </t-switch>
      </t-form-item>

      <t-form-item label="下划线" name="textDecoration">
        <t-switch
          v-model="data.textDecoration"
          @change="changeValue('textDecoration')"
        />
      </t-form-item>

      <t-form-item label="下划线颜色" name="textDecorationColor">
        <t-color-picker
          class="w-full"
          v-model="data.textDecorationColor"
          :show-primary-color-preview="false"
          format="CSS"
          :color-modes="['monochrome']"
          clearable
          @change="changeValue('textDecorationColor')"
        />
      </t-form-item>

      <t-form-item label="删除线" name="textStrickout">
        <t-switch
          v-model="data.textStrickout"
          @change="changeValue('textStrickout')"
        />
      </t-form-item>

      <t-form-item label="删除线颜色" name="textStrickoutColor">
        <t-color-picker
          class="w-full"
          v-model="data.textStrickoutColor"
          :show-primary-color-preview="false"
          format="CSS"
          :color-modes="['monochrome']"
          clearable
          @change="changeValue('textStrickoutColor')"
        />
      </t-form-item>

      <t-form-item label="文字水平对齐" name="textAlign">
        <t-select v-model="data.textAlign" @change="changeValue('textAlign')">
          <t-option key="left" value="left" label="左对齐"></t-option>
          <t-option key="center" value="center" label="居中"></t-option>
          <t-option key="right" value="right" label="右对齐"></t-option>
        </t-select>
      </t-form-item>
      <t-form-item label="文字垂直对齐" name="textBaseline">
        <t-select
          v-model="data.textBaseline"
          @change="changeValue('textBaseline')"
        >
          <t-option key="top" value="top" label="顶部对齐"></t-option>
          <t-option key="middle" value="middle" label="居中"></t-option>
          <t-option key="bottom" value="bottom" label="底部对齐"></t-option>
        </t-select>
      </t-form-item>

      <t-divider />

      <t-form-item label="宽" name="width">
        <t-input-number v-model="data.width" @change="changeRect('width')" />
      </t-form-item>
      <t-form-item label="高" name="height">
        <t-input-number v-model="data.height" @change="changeRect('height')" />
      </t-form-item>

      <t-form-item label="旋转角度" name="rotate">
        <t-input-number v-model="data.rotate" @change="changeValue('rotate')" />
      </t-form-item>

      <t-divider />
      <t-form-item label="进度" name="progress">
        <t-input-number
          v-model="data.progress"
          :step="0.1"
          :min="0"
          :max="1"
          @change="changeValue('progress')"
        />
      </t-form-item>
      <t-form-item label="进度颜色" name="progressColor">
        <t-color-picker
          class="w-full"
          v-model="data.progressColor"
          :show-primary-color-preview="false"
          format="CSS"
          :color-modes="['monochrome']"
          clearable
          @change="changeValue('progressColor')"
        />
      </t-form-item>
      <t-form-item label="渐变颜色" name="progressGradientColors">
        <t-color-picker
          class="w-full"
          v-model="data.progressGradientColors"
          :show-primary-color-preview="false"
          clearable
          format="CSS"
          :color-modes="['linear-gradient']"
          @change="changeValue('progressGradientColors')"
        />
      </t-form-item>

      <t-form-item label="垂直进度" name="verticalProgress">
        <t-switch
          v-model="data.verticalProgress"
          @change="changeValue('verticalProgress')"
        />
      </t-form-item>
      <t-form-item label="反向进度" name="reverseProgress">
        <t-switch
          v-model="data.reverseProgress"
          @change="changeValue('reverseProgress')"
        />
      </t-form-item>
      <t-form-item label="水平翻转" name="flipX">
        <t-switch v-model="data.flipX" @change="changeValue('flipX')" />
      </t-form-item>

      <t-form-item label="垂直翻转" name="flipY">
        <t-switch v-model="data.flipY" @change="changeValue('flipY')" />
      </t-form-item>

      <t-divider />

      <t-form-item v-if="data.penName == 'combine'" label="状态" name="status">
        <t-select v-model="data.showChild" @change="changeValue('showChild')">
          <t-option
            v-for="(item, index) in statusList"
            :key="item.value"
            :value="index"
            :label="item.label"
          ></t-option>
        </t-select>
      </t-form-item>
    </t-form>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
  statusList: {
    type: Array,
    default: () => [],
  }
});

const emit = defineEmits(["propChange"]);

const changeValue = (key: string) => {
  // * 不需要即时响应
  emit("propChange", key);
};

const changeRect = (key: string) => {
  // * 不需要即时响应
  emit("propChange", key);
};
</script>
<style lang="scss" scoped>
.props-panel__editor {
  padding: 10px;
  background-color: white;
  // --td-comp-margin-xxl: 10px;
}
</style>
