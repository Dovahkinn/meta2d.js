<template>
  <div class="graphics">
    <t-collapse :defaultValue="[0, 6]">
      <t-collapse-panel
        :header="item.name"
        v-for="item in graphicGroups"
        :key="item.name"
        :class="{
          'has--group': item.style == 'group',
        }"
      >
        <t-collapse v-if="item.style === 'group'" :header="item.name">
          <t-collapse-panel
            v-for="panel in item.list"
            class="is--subpanel"
            :header="panel.name"
          >
            <template #headerRightContent>
              <t-tag theme="success">{{ panel.children.length }}</t-tag>
            </template>
            <div
              v-for="elem in panel.children"
              :key="elem.name"
              class="graphic"
              :draggable="true"
              @dragstart="dragStart($event, elem)"
            >
              <t-tooltip :content="elem.name">
                <img
                  v-if="elem.icon?.endsWith('svg')"
                  :src="elem.icon"
                  style="width: 100%; height: 48px"
                />
                <svg v-else class="l-icon" aria-hidden="true">
                  <use :xlink:href="'#' + elem.icon"></use>
                </svg>
              </t-tooltip>
            </div>
          </t-collapse-panel>
        </t-collapse>
        <template v-else>
          <div
            v-for="elem in item.list"
            :key="elem.name"
            class="graphic"
            :draggable="true"
            @dragstart="dragStart($event, elem)"
          >
            <t-tooltip :content="elem.name">
              <img
                v-if="elem.icon?.endsWith('svg')"
                class="icon__image"
                :src="elem.icon"
                alt=""
                srcset=""
              />
              <svg v-else class="l-icon" aria-hidden="true">
                <use :xlink:href="'#' + elem.icon"></use>
              </svg>
              <p>{{ elem.name }}</p>
            </t-tooltip>
          </div>
        </template>
      </t-collapse-panel>
    </t-collapse>
  </div>
</template>

<script lang="ts" setup>
import { parseSvgStr, loadSvg } from "../utils/svgParser";
import {
  electricSvgList,
  electricCombineList,
} from "../utils/svgConfigList.ts";
import { computed } from "vue";
import { defaultGraphics } from "../utils/graphicConfig.ts";
import SwitchCombinesData from "../utils/switch-combines.json";
import { deepClone } from "@meta2d/core";

// 根据名称增加分组
const electricList = computed(() => {
  const list = [];

  electricSvgList.forEach((el) => {
    const arr = el.name.split("-");
    let groupName = "其他";
    if (arr.length > 1) {
      groupName = arr[0];
    }
    const group = list.find((v) => v.name == groupName);
    if (group) {
      group.children.push(el);
    } else {
      list.push({
        name: groupName,
        children: [el],
      });
    }
  });

  return list;
});

const graphicGroups = [
  ...defaultGraphics,
  {
    name: "电路元件分组",
    show: true,
    style: "group",
    list: electricList.value,
  },
  {
    name: "电路元件组合(包含状态)",
    show: true,
    style: "group",
    list: electricCombineList,
  },
];

function findChildren(parent, list) {
  if (!parent) return;
  if (!list) return;
  const result = [];
  const queue = [parent];

  while (queue.length) {
    const current = queue.shift();
    result.push(current);
    for (const data of list) {
      if (data.parentId == current.id) {
        queue.push(data);
      }
    }
  }
  return result;
}

const dragStart = (e: any, elem: any) => {
  if (!elem) {
    return;
  }
  e.stopPropagation();
  if (elem.icon.endsWith("svg")) {
    if (elem.type == "combine-json") {
      // 加载预设
      console.log("load json: ", elem, SwitchCombinesData);
      const parent = SwitchCombinesData.pens.find((v) => {
        if (v.description == elem.name && !v.parentId) {
          // parent
          return true;
        }
      });
      const pens = findChildren(parent, SwitchCombinesData.pens);
      console.log("combine pens: ", parent, pens);
      if (pens) {
        elem.data = deepClone(pens);
      }
    } else {
      // 创建 svg 图元对象
      loadSvg(elem.icon, elem);
      return;
    }
  }
  console.log("elem: ", elem);
  // 拖拽事件
  if (e instanceof DragEvent) {
    // 设置拖拽数据
    e.dataTransfer?.setData("Meta2d", JSON.stringify(elem.data));
  } else {
    // 支持单击添加图元。平板模式
    // 需要单击画布
    // ! 有问题，ID 不会修改
    meta2d.canvas.addCaches = [elem.data];
  }
};
</script>
<style lang="postcss" scoped>
.graphics {
  height: calc(100vh - 80px - 50px);
  overflow-y: auto;
  border-right: 1px solid var(--color-border);
  z-index: 2;

  :deep(.t-collapse) {
    border-top: none;

    .t-collapse-panel__content {
      background-color: var(--color-background-active);
      padding: 20px 4px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-row-gap: 12px;
    }

    .t-collapse-panel {
      &.has--group {
        .t-collapse-panel__content {
          display: block;
        }
      }
      &.is--subpanel {
        .t-collapse-panel__content {
          display: grid;
        }
        .graphic {
          padding: 10px;
        }
      }
    }
    .graphic {
      position: relative;
      padding: 10px 0;
      border-radius: 2px;
      border: 1px solid transparent;

      &:hover {
        cursor: pointer;
        border-color: var(--color-primary);
      }
      p {
        margin-top: 6px;
        padding: 0 8px;
        text-align: center;
        font-size: 12px;
        height: 12px;
        line-height: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        word-break: break-all;
        -webkit-box-orient: vertical;
      }

      svg {
        color: var(--color);
        height: 28px;
        width: 100%;
        margin: auto;
      }

      .icon__image {
        height: 28px;
        width: 100%;
      }
    }
  }
}
</style>
