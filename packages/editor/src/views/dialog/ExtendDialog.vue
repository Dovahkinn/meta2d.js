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
    @close-btn-click="onCloseBtnClick"
  >
    <component
      :is="dialogContent"
      v-bind="contentProps"
      @ended="onEnd"
    ></component>
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
import {
  ExtendActionEventNameMap,
  ExtendAction,
  ExtendActionMessageTypeMap,
} from "../../types/Event";

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

const dialogContent = computed<any>(() => {
  switch (eventParams.value?.action) {
    case ExtendAction.Video:
      return defineAsyncComponent(() => import("./content/Video.vue"));

    case ExtendAction.ShowMeta2D:
      return defineAsyncComponent(() => import("../Opener.vue"));
  }
  return null;
});

const contentProps = computed(() => {
  const { url } = eventParams.value || {};
  switch (eventParams.value?.action) {
    case ExtendAction.Video: 
      if (!url) {
        console.error("video url is required");
      }
      return {
        src: url,
      };

    case ExtendAction.ShowMeta2D:
      return {
        url,
      }

  }
});

const dialogHandler = (options: any) => {
  console.log("dialog action params: ", options);
  const { params = {}, id } = options;
  if (params && typeof params == "object") {
    params.id = id;
    eventParams.value = params;
    // const { action } = params;
  }

  visible.value =
    (params?.action || options?.action) != ExtendAction.DialogClose;
};

onMounted(() => {
  meta2d.on(ExtendActionEventNameMap.Dialog, dialogHandler);
});

onBeforeUnmount(() => {
  meta2d.off(ExtendActionEventNameMap.Dialog, dialogHandler);
});

const onEnd = (event: any, params: any) => {
  // console.log("video end: ", event, params);
  // 通过消息实现联动逻辑
  meta2d.emit(ExtendActionEventNameMap.CustomMessage, {
    type: ExtendActionMessageTypeMap.VideoEnded,
    url: params?.src || params?.url,
    key: eventParams.value?.id,
  });
};

const onCloseBtnClick = (event: Event) => {
  if (eventParams.value?.action == ExtendAction.Video) {
    onEnd(event, eventParams.value);
  }
};
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
