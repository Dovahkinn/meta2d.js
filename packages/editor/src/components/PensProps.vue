<template>
  <props-tab :tabs="tabs">
    <template #pen-props>
      <div class="props-panel">
        <t-form label-align="left" v-if="pen">
          <t-form-item label="文本" name="text">
            <t-input v-model="pen.text" @change="changeValue('text')" />
          </t-form-item>
          <t-form-item label="颜色" name="color">
            <t-color-picker class="w-full" v-model="pen.color" :show-primary-color-preview="false" format="CSS"
              :color-modes="['monochrome']" @change="changeValue('color')" />
          </t-form-item>
          <t-form-item label="背景" name="background">
            <t-color-picker class="w-full" v-model="pen.background" :show-primary-color-preview="false" format="CSS"
              :color-modes="['monochrome']" @change="changeValue('background')" />
          </t-form-item>
          <t-form-item label="线条" name="dash">
            <t-select v-model="pen.dash" @change="changeValue('dash')">
              <t-option :key="0" :value="0" label="实线"></t-option>
              <t-option :key="1" :value="1" label="虚线"></t-option>
            </t-select>
          </t-form-item>
          <t-form-item label="线条宽度" name="lineWidth">
            <t-input-number v-model="pen.lineWidth" @change="changeValue('lineWidth')" />
          </t-form-item>

          <t-form-item label="圆角" name="borderRadius">
            <t-input-number :min="0" :max="1" :step="0.01" v-model="pen.borderRadius"
              @change="changeValue('borderRadius')" />
          </t-form-item>
          <t-form-item label="不透明度" name="globalAlpha">
            <t-slider v-model="pen.globalAlpha" :min="0" :max="1" :step="0.01" @change="changeValue('globalAlpha')" />
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
            <t-select v-model="pen.textBaseline" @change="changeValue('textBaseline')">
              <t-option key="top" value="top" label="顶部对齐"></t-option>
              <t-option key="middle" value="middle" label="居中"></t-option>
              <t-option key="bottom" value="bottom" label="底部对齐"></t-option>
            </t-select>
          </t-form-item>
          <t-divider />
          <t-collapse expand-icon borderless defaultExpandAll>
            <t-collapse-panel value="0" header="对齐">
              <t-button v-for="(item, index) in alginOptions" :key="index" shape="square" variant="outline"
                style="margin-right: 4px" @click="align(item)">
                <t-icon :name="item.icon" />
              </t-button>
            </t-collapse-panel>
          </t-collapse>
          <t-divider />
          <t-space>
            <t-tooltip content="清空高亮图元">
              <t-button @click="inactive">取消选中</t-button>
            </t-tooltip>
          </t-space>
        </t-form>
      </div>
    </template>
    <template #struct-props>
      <slot name="struct" :pen="pen"></slot>
    </template>
    <template #animation-props>
      <div class="props-panel">
        <t-form v-if="allIsLine || allIsRect" label-width="80px" label-align="left">
          <t-space style="width: 100%">
            <t-alert theme="warning" title="批量修改所有图元的动画" message="执行了操作后才会修改">
            </t-alert>
          </t-space>
          <t-divider />

          <template v-if="allIsRect">
            <t-form-item label="动画效果" name="animateType">
              <t-select v-model="pen.animateType" clearable @change="changeValue('animateType')">
                <t-option v-for="item in PenFrameOptions" :key="item.value" :value="item.value"
                  :label="item.label"></t-option>
              </t-select>
            </t-form-item>
            <t-form-item v-if="pen.animateType == 'x-custom'" label="自定义动画帧">
              <t-button variant="text" theme="primary" @click="showFramesDrawer">编辑
              </t-button>
            </t-form-item>
          </template>

          <template v-else-if="allIsLine">
            <t-form-item label="动画效果" name="lineAnimateType">
              <t-select v-model="pen.lineAnimateType" clearable @change="changeValue('lineAnimateType')">
                <t-option v-for="item in LineAnimateOption" :key="item.value" :value="item.value"
                  :label="item.label"></t-option>
              </t-select>
            </t-form-item>
            <t-form-item label="反向流动" name="reverse">
              <t-switch v-model="pen.animateReverse" @change="changeValue('animateReverse')" />
            </t-form-item>
            <t-form-item label="线宽" name="animateLineWidth">
              <t-input-number v-model="pen.animateLineWidth" @change="changeValue('animateLineWidth')" />
            </t-form-item>

            <t-form-item label="速度" name="animateSpan">
              <t-input-number v-model="pen.animateSpan" :min="1" :max="5" @change="changeValue('animateSpan')" />
            </t-form-item>
            <t-form-item label="颜色" name="color">
              <t-color-picker class="w-full" v-model="pen.animateColor" :show-primary-color-preview="false" format="CSS"
                :color-modes="['monochrome']" @change="changeValue('animateColor')" />
            </t-form-item>
            <t-form-item label="动画发光" name="animateShadow">
              <t-switch v-model="pen.animateShadow" @change="changeValue('animateShadow')" />
            </t-form-item>
            <t-form-item label="发光颜色" name="animateShadowColor">
              <t-color-picker class="w-full" v-model="pen.animateShadowColor" :show-primary-color-preview="false"
                format="CSS" :color-modes="['monochrome']" @change="changeValue('animateShadowColor')" />
            </t-form-item>
          </template>

          <t-form-item label="自动播放" name="autoPlay">
            <t-switch v-model="pen.autoPlay" @change="changeValue('autoPlay')" />
          </t-form-item>

          <t-divider />
          <div>
            <t-statistic title="图元总数" :value="pensTotal" trend="increase" color="orange" />
          </div>
          <t-space>
            <t-tooltip content="对大量图元执行动画时存在性能问题，请谨慎操作">
              <t-button @click="animate(true)">播放</t-button>
            </t-tooltip>
            <t-tooltip content="">
              <t-button @click="animate()">停止</t-button>
            </t-tooltip>
          </t-space>
        </t-form>
        <t-alert v-else theme="error">
          只能对同一类型的图元批量设置动画
        </t-alert>

        <t-drawer v-model:visible="drawerVisible" header="自定义动画帧" size="20%" :onConfirm="addFrames">
          <t-button block theme="primary" @click="insertFrame">新增动画帧</t-button>
          <t-collapse class="meta-collapse" expand-mutex>
            <t-collapse-panel v-for="item in customFrames" header="动画帧">
              <prop-editor :data="item"></prop-editor>
              <template #headerRightContent>
                <t-button size="small" variant="outline" theme="danger" :style="{ marginLeft: '8px' }"
                  @click="deleteFrame(item)">
                  <t-icon name="delete"></t-icon>
                </t-button>
              </template>
            </t-collapse-panel>
          </t-collapse>
        </t-drawer>
      </div>
    </template>
  </props-tab>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, watch, computed, nextTick } from "vue";
import { useSelection } from "../services/selections";
import PropsTab from "./PropsTab.vue";
import { Pen } from "@meta2d/core";
import {
  PenFrameOptions,
  LineAnimateOption,
  PenFrames,
} from "../utils/penFrames";
import { deepClone } from "@meta2d/core";
import PropEditor from "./PropEditor.vue";

const tabs = [
  {
    label: "图元组",
    value: 1,
    slot: "pen-props",
  },
  {
    label: "结构",
    value: 2,
    slot: "struct-props",
  },

  {
    label: "动效",
    value: 3,
    slot: "animation-props",
  },
];

const { selections } = useSelection();

const pen = ref<any>({
  globalAlpha: 1,
});
// 位置数据。当前版本位置需要动态计算获取
const rect = ref<any>();

onMounted(() => {
  getPen();
});

const getPen = () => {
  // console.log("get pen: ", allIsLine.value, allIsRect.value);
  rect.value = meta2d.getPenRect(pen.value);
};

const allIsLine = computed(() => {
  return selections.pens?.every((pen: any) => pen.type === 1);
});

const allIsRect = computed(() => {
  return selections.pens?.every((pen: any) => !pen.type);
});
const pensTotal = computed(() => {
  return selections.pens?.length || 0;
});

// 监听选中不同图元
// @ts-ignore
const watcher = watch(() => selections.pens, getPen);

const lineDashs = [undefined, [5, 5]];

const changeValue = (prop: string) => {
  // console.log("change value: ", prop, pen.value, selections.pens);
  if (selections.pens?.length) {
    const newValue = pen.value[prop];
    selections.pens.forEach((pen: any) => {
      const v: any = { id: pen.id };
      v[prop] = newValue;
      if (prop === "dash") {
        v.lineDash = lineDashs[v[prop]];
      } else if (prop == "animateType") {
        const animateType = v.animateType as keyof typeof PenFrames;
        const frames = PenFrames[animateType];
        v.frames = frames;
      }
      meta2d.setValue(v, { render: false });
    });
    meta2d.render();
  }
};

const animate = (play = false) => {
  // 不传执行所有自动播放的画笔的动画
  // console.log("animate: ", play, selections.pens)

  // ! 使用 Pen[] 有bug，有的不生效
  // if (play) {
  //   meta2d.startAnimate(selections.pens)
  // } else {
  //   meta2d.stopAnimate(selections.pens)
  // }

  selections.pens?.forEach((pen: any) => {
    if (play) {
      meta2d.startAnimate(pen.id);
    } else {
      meta2d.stopAnimate(pen.id);
    }
  });
};

const alginOptions = [
  { label: "左对齐", value: "left", icon: "format-vertical-align-left" },
  { label: "右对齐", value: "right", icon: "format-vertical-align-right" },
  { label: "顶部对齐", value: "top", icon: "format-horizontal-align-top" },
  {
    label: "底部对齐",
    value: "bottom",
    icon: "format-horizontal-align-bottom",
  },
  { label: "垂直居中", value: "center", icon: "format-vertical-align-center" },
  {
    label: "水平居中",
    value: "middle",
    icon: "format-horizontal-align-center",
  },
];
// 对齐方式: left, right, top, bottom, center, middle
const align = (item: any) => {
  const nodes = selections.pens;
  if (nodes?.length) {
    meta2d.alignNodes(item.value, nodes as Pen[]);
  }
};

onUnmounted(() => {
  watcher();
});

const drawerVisible = ref(false);
const customFrames = ref<any>([]);

const showFramesDrawer = () => {
  customFrames.value = deepClone(pen.value.frames || []);
  drawerVisible.value = true;
};
const addFrames = () => {
  // 动画帧数组
  pen.value.frames = deepClone(customFrames.value);
  changeValue("frames");
  drawerVisible.value = false;
  nextTick(() => {
    customFrames.value = [];
  });
};

const insertFrame = () => {
  customFrames.value.push({
    duration: 100,
    globalAlpha: 1,
  });
};

const deleteFrame = (frame: any) => {
  const index = customFrames.value.indexOf(frame);
  if (index > -1) {
    customFrames.value.splice(index, 1);
  }
};

const inactive = () => {
  meta2d.inactive();
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

    .t-space {
      gap: 4px;
    }

    .t-collapse-panel__wrapper .t-collapse-panel__content {
      padding-left: 10px;
    }
  }
}
</style>
