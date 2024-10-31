<template>
  <div class="app-page">
    <Header v-if="renderProps" v-bind="$attrs" @view="toView" />

    <div class="designer">
      <GraphicsManager v-bind="$attrs" />
      <View v-bind="$attrs" @ready="ready" />
      <Props v-if="renderProps" v-bind="$attrs" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, defineEmits, ref } from "vue";
import Header from "../components/Header.vue";
import View from "../components/View.vue";
import Props from "../components/Props.vue";
import GraphicsManager from "../components/GraphicsManager.vue";

let timer: any;

function save() {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    const data: any = meta2d.data();
    localStorage.setItem("meta2d", JSON.stringify(data));
    timer = undefined;
  }, 100);
}

const emit = defineEmits(["view", "ready"]);
const toView = (data: any) => {
  emit("view", data);
};

const renderProps = ref(false);

const ready = (data: any) => {
  emit("ready", data);
  renderProps.value = true;
};

onMounted(() => {
  meta2d.on("scale", save);
  meta2d.on("add", save);
  meta2d.on("opened", save);
  meta2d.on("undo", save);
  meta2d.on("redo", save);
  meta2d.on("add", save);
  meta2d.on("delete", save);
  meta2d.on("rotatePens", save);
  meta2d.on("translatePens", save);
});
</script>

<style lang="postcss" scoped>
.app-page {
  height: 100vh;
  overflow: hidden;

  .designer {
    display: grid;
    grid-template-columns: 300px 1fr 350px;
    height: calc(100vh - 80px);
  }
}
</style>
