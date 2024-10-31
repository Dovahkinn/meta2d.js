<template>
  <div class="app-page is--preview">
    <View v-bind="$attrs" preview :data="data" @ready="emit('ready', $event)" />
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps } from "vue";
import View from "../components/View.vue";
const emit = defineEmits(["ready"]);
const props = defineProps({
  data: {
    type: Object,
  },
});
</script>

<style lang="postcss" scoped>
.app-page {
  height: 100vh;
}
</style>
