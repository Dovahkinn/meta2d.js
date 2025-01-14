<template>
  <div class="app-page is--opener">

    <View
      v-if="data"
      preview
      isOpener
      :data="data"
      @ready="ready"
    />
    <t-empty v-else></t-empty>

  </div>
</template>

<script lang="ts" setup>
import {
  defineEmits,
  defineProps,
  ref,
  reactive,
  computed,
  onMounted,
} from "vue";
import View from "../components/ViewCopy.vue";
import { EventAction } from "../types/Event.ts";
import { deepClone } from "@meta2d/core";
import { useLogTable, useScripts } from "../services/useTable.ts";
import { useExtendEvent } from "../services/useHandlers.ts";

const emit = defineEmits(["ready"]);
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  
});

const data = ref<any>(null);

const applyTable = (res: any, instance: any) => {

  const { tasks } = useScripts(res, instance);
  setTimeout(async () => {
    for (const task of tasks) {
      const r = await task();
    }
  });
};


if (props.url) {
  globalThis.mainMeta2d = globalThis.meta2d;

  fetch(props.url)
    .then((res) => res.json())
    .then((res) => {
      data.value = res;
    }).catch(error => {
      console.log('opener: fetch error: ', error);
    })
}

const { extendOn } = useExtendEvent();

onMounted(() => {
  meta2d?.resize();

  // * 扩展事件
  extendOn();
});

const ready = (_meta2d: any) => {
  console.log("opener ready: ", _meta2d);
  _meta2d.fitView(true, 20)
  applyTable(data.value, _meta2d);
}



</script>

<style lang="scss" scoped>
.sidebar-transition-enter-active,
.sidebar-transition-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.sidebar-transition-enter,
.sidebar-transition-leave-to {
  transform: translateX(-250px);
  opacity: 0;
}

.sidebar-transition-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.app-page {
  display: flex;
  height: 100%;
  min-height: 400px;
  justify-content: center;
  align-items: center;

  &.is--full-height {    
    height: 100vh;
  }
 
}
</style>
