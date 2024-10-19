<template>
  <t-tabs v-if="pen" :defaultValue="1">
    <t-tab-panel :value="1" label="图元">
      <div class="props-panel">
        <t-form label-align="left">
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

          <t-divider />

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
            <t-switch v-model="pen.animateReverse" @change="changeValue('animateReverse')" />
          </t-form-item>

          <t-divider />
          <t-space>
            <t-button @click="animate(true)">播放</t-button>
            <t-button @click="animate()">停止</t-button>
          </t-space>
        </t-form>
      </div>
    </t-tab-panel>
  </t-tabs>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, watch, computed } from "vue";
import { useSelection } from "@/services/selections";

const { selections } = useSelection();

const pen = ref<any>();
// 位置数据。当前版本位置需要动态计算获取
const rect = ref<any>();

onMounted(() => {
  getPen();
});

const getPen = () => {
  pen.value = selections.pen;
  if (pen.value.globalAlpha == undefined) {
    pen.value.globalAlpha = 1;
  }

  rect.value = meta2d.getPenRect(pen.value);
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
  ];
});

// 设置动画属性
// 动画类型：默认 - 水流； 1 - （水珠流动）虚线段；2 - 圆点 3. 箭头 4.水滴
// pen.lineAnimateType = 1;
// 轨迹速度，默认1
// pen.animateSpan = 1;
// 轨迹颜色
// pen.animateColor = 'red';
// 虚线段，pen.lineAnimateType = 1 有效
// pen.animateLineDash = [5, 5];
// 圆点大小，pen.lineAnimateType = 2 有效，最小值 6
// pen.animateDotSize = 20;
// 反向播放
// pen.animateReverse = false;

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
