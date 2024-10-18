<template>
  <div class="app-props">
    <FileProps v-if="selections.mode === SelectionMode.File" />
    <PenProps v-else-if="selections.mode === SelectionMode.Pen" />
    <PensProps v-else-if="selections.mode === SelectionMode.Pens" />
  </div>
</template>

<script lang="ts" setup>
import FileProps from './FileProps.vue';
import PenProps from './PenProps.vue';
import PensProps from './PensProps.vue';
import { useSelection, SelectionMode } from '@/services/selections';
import { watch } from 'vue';

const { selections } = useSelection();

watch(() => selections.mode, (mode) => {
  console.log('select: ', mode);
});

</script>
<style lang="postcss" scoped>
.app-props {
  padding: 16px;
  border-left: 1px solid var(--color-border);
  z-index: 2;
  height: calc(100vh - 80px);
  overflow-y: auto;
}
</style>
