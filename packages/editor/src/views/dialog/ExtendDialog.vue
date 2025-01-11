<template>
  <t-dialog
    v-model:visible="visible"
    dialogClassName="extend-action__dialog"
    :header="title"
    closeOnEscKeydown
    :footer="false"
    :mode="mode"
    :width="width"
    destroyOnClose
  >
    <component :is="dialogContent" v-bind="contentProps" @ended="onEnd"></component>
  </t-dialog>
</template>
<script setup lang="ts">
import {
  defineProps,
  ref,
  onMounted,
  onBeforeUnmount,
  computed,
  defineAsyncComponent,
} from "vue";
import { ExtendActionEventNameMap, ExtendAction, ExtendActionMessageTypeMap, } from "../../types/Event";

type ModeValues = "full-screen" | "modal" | undefined;
type WidthValues = Number | String | undefined;

const props = defineProps({});

const visible = ref(false);
const eventParams = ref();

const mode = computed(() => {
  return eventParams.value?.mode as ModeValues;
});
const width = computed(() => {
  return eventParams.value?.width as WidthValues;
});

const title = computed(() => {
  return eventParams.value?.title;
});

const dialogContent = computed(() => {
  switch (eventParams.value?.action) {
    case ExtendAction.Video: {
      return defineAsyncComponent(() => import("./content/Video.vue"));
    }
    // case ExtendAction.Image: {
    //   return () => import('./ImageDialog.vue')
    // }
  }
});

const contentProps = computed(() => {
  const { url } = eventParams.value || {};
  switch (eventParams.value?.action) {
    case ExtendAction.Video: {
      if (!url) {
        console.error("video url is required");
      }
      return {
        src: url,
      };
    }
  }
});

onMounted(() => {
  meta2d.on(ExtendActionEventNameMap.Dialog, (options) => {
    console.log("dialog action params: ", options);
    const { params = {} } = options;
    if (params) {
      eventParams.value = params;
      const { action } = params;
    }

    visible.value = params.action != ExtendAction.DialogClose;
  });
});

onBeforeUnmount(() => {
  meta2d.off(ExtendActionEventNameMap.Dialog);
});

const onEnd = (event: any, params: any) => {
  console.log("video end: ", event, params);
  // 通过消息实现联动逻辑
  meta2d.emit(ExtendActionEventNameMap.CustomMessage, {
    type: ExtendActionMessageTypeMap.VideoEnded,
    key: params?.src,
  })
}
</script>
<style lang="scss" scoped>
:global(.extend-action__dialog.t-dialog__fullscreen) {
  --td-comp-paddingTB-xl: 0;
  --td-comp-paddingLR-xxl: 0;
}

:global(.t-dialog__position_fullscreen) {
  height: 100%;
}
</style>
