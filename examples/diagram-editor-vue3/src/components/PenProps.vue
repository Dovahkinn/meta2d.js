<template>
  <t-tabs v-if="pen" v-model:value="activePanel">
    <t-tab-panel :value="1" label="图元">
      <div class="props-panel">
        <t-form label-align="left">
          <t-form-item label="颜色" name="color">
            <t-color-picker
              class="w-full"
              v-model="pen.color"
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
              v-model="pen.hoverColor"
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
              v-model="pen.activeColor"
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
              v-model="pen.background"
              :show-primary-color-preview="false"
              format="CSS"
              :color-modes="['monochrome']"
              clearable
              @change="changeValue('background')"
            />
          </t-form-item>
          <t-form-item label="线条" name="dash">
            <t-select v-model="pen.dash" @change="changeValue('dash')">
              <t-option :key="0" :value="0" label="实线"></t-option>
              <t-option :key="1" :value="1" label="虚线"></t-option>
            </t-select>
          </t-form-item>
          <t-form-item label="线条宽度" name="lineWidth">
            <t-input-number
              v-model="pen.lineWidth"
              @change="changeValue('lineWidth')"
            />
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
          <t-form-item label="阴影颜色" name="shadowColor">
            <t-color-picker
              class="w-full"
              v-model="pen.shadowColor"
              :show-primary-color-preview="false"
              format="CSS"
              :color-modes="['monochrome']"
              clearable
              @change="changeValue('shadowColor')"
            />
          </t-form-item>
          <t-form-item label="阴影模糊" name="shadowBlur">
            <t-input-number
              v-model="pen.shadowBlur"
              :min="0"
              @change="changeValue('shadowBlur')"
            />
          </t-form-item>
          <t-form-item label="阴影X偏移" name="shadowOffsetX">
            <t-input-number
              v-model="pen.shadowOffsetX"
              @change="changeValue('shadowOffsetX')"
            />
          </t-form-item>
          <t-form-item label="阴影Y偏移" name="shadowOffsetY">
            <t-input-number
              v-model="pen.shadowOffsetY"
              @change="changeValue('shadowOffsetY')"
            />
          </t-form-item>

          <t-divider />
          <t-form-item label="文字阴影" name="textHasShadow">
            <t-switch
              v-model="pen.textHasShadow"
              @change="changeValue('textHasShadow')"
            />
          </t-form-item>
          <t-form-item label="文本" name="text">
            <t-input
              v-model="pen.text"
              clearable
              @change="changeValue('text')"
            />
          </t-form-item>

          <t-form-item label="字体" name="fontSize">
            <t-input-number
              v-model="pen.fontSize"
              @change="changeValue('fontSize')"
            />
          </t-form-item>

          <t-form-item label="文字颜色类型" name="textType">
            <t-select v-model="pen.textType" @change="changeValue('textType')">
              <t-option key="hex" :value="0" label="纯色"></t-option>
              <t-option key="rgb" :value="1" label="线性渐变"></t-option>
              <t-option key="rgba" :value="2" label="径向渐变"></t-option>
            </t-select>
          </t-form-item>

          <t-form-item
            v-if="[1, 2].includes(pen.textType)"
            label="文字渐变"
            name="textGradientColors"
          >
            <t-color-picker
              class="w-full"
              v-model="pen.textGradientColors"
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
              v-model="pen.textColor"
              :show-primary-color-preview="false"
              format="CSS"
              :color-modes="['monochrome']"
              clearable
              @change="changeValue('textColor')"
            />
          </t-form-item>

          <t-form-item label="文本风格" name="fontStyle">
            <t-select
              v-model="pen.fontStyle"
              @change="changeValue('fontStyle')"
            >
              <t-option key="normal" value="normal" label="常规"></t-option>
              <t-option key="italic" value="italic" label="斜体"></t-option>
            </t-select>
          </t-form-item>

          <!-- 加粗 -->
          <t-form-item label="文本粗细" name="fontWeight">
            <t-select
              v-model="pen.fontWeight"
              @change="changeValue('fontWeight')"
            >
              <t-option key="normal" value="normal" label="常规"></t-option>
              <t-option key="bold" value="bold" label="加粗"></t-option>
              <t-option key="lighter" value="lighter" label="更细"></t-option>
            </t-select>
          </t-form-item>

          <t-form-item label="换行" name="whiteSpace">
            <t-select
              v-model="pen.whiteSpace"
              @change="changeValue('whiteSpace')"
            >
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
            <t-switch v-model="pen.ellipsis" @change="changeValue('ellipsis')">
            </t-switch>
          </t-form-item>

          <t-form-item label="下划线" name="textDecoration">
            <t-switch
              v-model="pen.textDecoration"
              @change="changeValue('textDecoration')"
            />
          </t-form-item>

          <t-form-item label="下划线颜色" name="textDecorationColor">
            <t-color-picker
              class="w-full"
              v-model="pen.textDecorationColor"
              :show-primary-color-preview="false"
              format="CSS"
              :color-modes="['monochrome']"
              clearable
              @change="changeValue('textDecorationColor')"
            />
          </t-form-item>

          <t-form-item label="删除线" name="textStrickout">
            <t-switch
              v-model="pen.textStrickout"
              @change="changeValue('textStrickout')"
            />
          </t-form-item>

          <t-form-item label="删除线颜色" name="textStrickoutColor">
            <t-color-picker
              class="w-full"
              v-model="pen.textStrickoutColor"
              :show-primary-color-preview="false"
              format="CSS"
              :color-modes="['monochrome']"
              clearable
              @change="changeValue('textStrickoutColor')"
            />
          </t-form-item>

          <t-form-item label="文字水平对齐" name="textAlign">
            <t-select
              v-model="pen.textAlign"
              @change="changeValue('textAlign')"
            >
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

          <t-form-item label="X" name="x">
            <t-input-number v-model="rect.x" @change="changeRect('x')" />
          </t-form-item>
          <t-form-item label="Y" name="y">
            <t-input-number v-model="rect.y" @change="changeRect('y')" />
          </t-form-item>
          <t-form-item label="宽" name="width">
            <t-input-number
              v-model="rect.width"
              @change="changeRect('width')"
            />
          </t-form-item>
          <t-form-item label="高" name="height">
            <t-input-number
              v-model="rect.height"
              @change="changeRect('height')"
            />
          </t-form-item>
          <t-form-item label="锁定宽高比" name="ratio">
            <t-switch v-model="pen.ratio" @change="changeValue('ratio')" />
          </t-form-item>
          <t-form-item label="旋转角度" name="rotate">
            <t-input-number
              v-model="pen.rotate"
              @change="changeValue('rotate')"
            />
          </t-form-item>

          <t-divider />
          <t-form-item label="进度" name="progress">
            <t-input-number
              v-model="pen.progress"
              :step="0.1"
              :min="0"
              :max="1"
              @change="changeValue('progress')"
            />
          </t-form-item>
          <t-form-item label="进度颜色" name="progressColor">
            <t-color-picker
              class="w-full"
              v-model="pen.progressColor"
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
              v-model="pen.progressGradientColors"
              :show-primary-color-preview="false"
              clearable
              format="CSS"
              :color-modes="['linear-gradient']"
              @change="changeValue('progressGradientColors')"
            />
          </t-form-item>

          <t-form-item label="垂直进度" name="verticalProgress">
            <t-switch
              v-model="pen.verticalProgress"
              @change="changeValue('verticalProgress')"
            />
          </t-form-item>
          <t-form-item label="反向进度" name="reverseProgress">
            <t-switch
              v-model="pen.reverseProgress"
              @change="changeValue('reverseProgress')"
            />
          </t-form-item>
          <t-form-item label="水平翻转" name="flipX">
            <t-switch v-model="pen.flipX" @change="changeValue('flipX')" />
          </t-form-item>

          <t-form-item label="垂直翻转" name="flipY">
            <t-switch v-model="pen.flipY" @change="changeValue('flipY')" />
          </t-form-item>

          <t-divider />

          <t-form-item v-if="pen.name == 'combine'" label="状态" name="status">
            <t-select
              v-model="pen.showChild"
              @change="changeValue('showChild')"
            >
              <t-option
                v-for="(item, index) in statusList"
                :key="item.value"
                :value="index"
                :label="item.label"
              ></t-option>
            </t-select>
          </t-form-item>
          <t-divider />

          <t-space>
            <t-button @click="top">置顶</t-button>
            <t-button @click="bottom">置底</t-button>
            <t-button @click="up">上一层</t-button>
            <t-button @click="down">下一层</t-button>
          </t-space>
        </t-form>
      </div>
    </t-tab-panel>
    <t-tab-panel v-if="['line'].includes(pen.name)" :value="2" label="动效">
      <div class="props-panel">
        <t-form label-align="left">
          <t-form-item label="动画效果" name="lineAnimateType">
            <t-select
              v-model="pen.lineAnimateType"
              @change="changeValue('lineAnimateType')"
            >
              <t-option
                v-for="item in animateTypeList"
                :key="item.value"
                :value="item.value"
                :label="item.label"
              ></t-option>
            </t-select>
          </t-form-item>
          <t-form-item label="反向流动" name="reverse">
            <t-switch
              v-model="pen.animateReverse"
              @change="changeValue('animateReverse')"
            />
          </t-form-item>
          <t-form-item label="线宽" name="animateLineWidth">
            <t-input-number
              v-model="pen.animateLineWidth"
              @change="changeValue('animateLineWidth')"
            />
          </t-form-item>

          <t-form-item label="速度" name="animateSpan">
            <t-input-number
              v-model="pen.animateSpan"
              :min="1"
              :max="5"
              @change="changeValue('animateSpan')"
            />
          </t-form-item>
          <t-form-item label="颜色" name="color">
            <t-color-picker
              class="w-full"
              v-model="pen.animateColor"
              :show-primary-color-preview="false"
              format="CSS"
              :color-modes="['monochrome']"
              @change="changeValue('animateColor')"
            />
          </t-form-item>
          <!-- 动画发光 -->
          <t-form-item label="动画发光" name="animateShadow">
            <t-switch
              v-model="pen.animateShadow"
              @change="changeValue('animateShadow')"
            />
          </t-form-item>
          <!-- 发光颜色 -->
          <t-form-item label="发光颜色" name="animateShadowColor">
            <t-color-picker
              class="w-full"
              v-model="pen.animateShadowColor"
              :show-primary-color-preview="false"
              format="CSS"
              :color-modes="['monochrome']"
              @change="changeValue('animateShadowColor')"
            />
          </t-form-item>

          <t-form-item label="自动播放" name="autoPlay">
            <t-switch
              v-model="pen.autoPlay"
              @change="changeValue('autoPlay')"
            />
          </t-form-item>

          <t-divider />
          <t-space>
            <t-button @click="animate(true)">播放</t-button>
            <t-button @click="animate()">停止</t-button>
          </t-space>
        </t-form>
      </div>
    </t-tab-panel>

    <t-tab-panel v-if="['image'].includes(pen.name)" :value="2" label="图片">
      <div class="props-panel">
        <t-form label-align="left">
          <t-form-item label="图片上传" name="image">
            <t-upload
              ref="uploadRef"
              v-model="imageFile"
              :action="$attrs.uploadUrl || 'https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo'"
              :sizeLimit="sizeLimit"
              theme="image"
              tips="请选择单张小于5MB的图片上传"
              accept="image/*"
              @fail="handleFail"
              @success="handleSuccess"
            />
          </t-form-item>

          <t-form-item label="图片地址" name="image">
            <t-input
              v-model="pen.image"
              clearable
              @change="changeValue('image')"
            />
          </t-form-item>

          <t-form-item label="保持比例" name="imageRatio">
            <t-switch
              v-model="pen.imageRatio"
              @change="changeValue('imageRatio')"
            />
          </t-form-item>
        </t-form>
      </div>
    </t-tab-panel>
  </t-tabs>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, watch, computed, useAttrs, } from "vue";
import { useSelection } from "../services/selections";

const { selections } = useSelection();

const pen = ref<any>();
// 位置数据。当前版本位置需要动态计算获取
const rect = ref<any>();
const activePanel = ref(1)

onMounted(() => {
  getPen();
});

const getPen = () => {
  pen.value = selections.pen;
  if (pen.value.globalAlpha == undefined) {
    pen.value.globalAlpha = 1;
  }

  rect.value = meta2d.getPenRect(pen.value);
  activePanel.value = 1
};

// 状态组合列表
const statusList = computed(() => {
  if (pen.value?.name != "combine") return [];
  return pen.value.children.map((id: string, index: number) => {
    return {
      label: `状态${index + 1}`,
      value: id,
    };
  });
});

// 动画效果
const animateTypeList = computed(() => {
  return [
    {
      label: "水流",
      value: 0,
    },
    {
      label: "水珠滚动",
      value: 1,
    },
    {
      label: "圆点",
      value: 2,
    },
    {
      label: "箭头",
      value: 3,
    },
    {
      label: "水滴",
      value: 4,
    },
  ];
});


const animate = (play: boolean = false) => {
  console.log("animate: ", play, pen.value);
  if (play) {
    meta2d.startAnimate(pen.value.id);
  } else {
    meta2d.stopAnimate(pen.value.id);
  }
};

// 监听选中不同图元
// @ts-ignore
const watcher = watch(() => selections.pen.id, getPen);

const lineDashs = [undefined, [5, 5]];

const changeValue = (prop: string) => {
  const v: any = { id: pen.value.id };
  v[prop] = pen.value[prop];
  if (prop === "dash") {
    v.lineDash = lineDashs[v[prop]];
  }
  meta2d.setValue(v, { render: true });
};

const changeRect = (prop: string) => {
  const v: any = { id: pen.value.id };
  v[prop] = rect.value[prop];
  meta2d.setValue(v, { render: true });
};

const top = () => {
  meta2d.top();
  meta2d.render();
};
const bottom = () => {
  meta2d.bottom();
  meta2d.render();
};
const up = () => {
  meta2d.up();
  meta2d.render();
};
const down = () => {
  meta2d.down();
  meta2d.render();
};

onUnmounted(() => {
  watcher();
});


// * 文件上传
const uploadRef = ref();
const imageFile = ref([]);
const sizeLimit = {
  limit: 1024 * 5,
  unit: "KB",
}

const handleSuccess = (context: any) => {
  console.log("upload success: ", context);
  if (context.response) {
    pen.value.image = context.response.url;
    changeValue('image');
  }
}

const handleFail = (e: any) => {
  console.log("upload fail: ", e);
}

// const attrs = useAttrs();

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

    .t-space {
      gap: 4px;
    }
  }
}
</style>
