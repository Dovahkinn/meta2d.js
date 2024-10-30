<template>
  <div v-if="shouldRender" class="app-props">
    <FileProps v-show="selections.mode === SelectionMode.File" key="file" v-bind="$attrs">
      <template #struct>
        <Structure v-bind="$attrs" />
      </template>
    </FileProps>
    <PenProps v-show="selections.mode === SelectionMode.Pen" key="pen" v-bind="$attrs">
      <template #struct>
        <Structure v-bind="$attrs" />
      </template>
    </PenProps>

    <PensProps v-show="selections.mode === SelectionMode.Pens" key="pens" v-bind="$attrs">
      <template #struct>
        <Structure v-bind="$attrs" />
      </template>
    </PensProps>
  </div>
</template>

<script lang="ts" setup>
import FileProps from "./FileProps.vue";
import PenProps from "./PenProps.vue";
import PensProps from "./PensProps.vue";
import { useSelection, SelectionMode } from "../services/selections";
import { computed, watch } from "vue";
import Structure from "./Structure.vue";

const { selections } = useSelection();

console.log("selections: ", selections);

const shouldRender = computed(() => {
  return [SelectionMode.File, SelectionMode.Pen, SelectionMode.Pens].includes(
    selections.mode
  );
});
</script>
<style lang="postcss" scoped>
.app-props {
  padding: 16px;
  border-left: 1px solid var(--color-border);
  z-index: 2;
  height: calc(100vh - 80px);
  overflow-y: auto;

  .t-tabs {
    height: 100%;

    :deep(.t-tabs__content) {
      overflow: auto;
      height: calc(100% - 50px);

    }
  }
}
</style>
