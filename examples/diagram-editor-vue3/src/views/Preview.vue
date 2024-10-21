<template>
  <div class="app-page">
    <View @ready="emit('ready', $event)" />
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';
import View from '../components/View.vue';
const emit = defineEmits(['ready']);

</script>

<style lang="postcss" scoped>
.app-page {
  height: 100vh;
}
</style>
