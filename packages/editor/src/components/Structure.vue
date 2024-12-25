<template>
  <t-tree hover line expand-all activable v-model:actived="actived" :data="pensTree"
    :keys="{ label: 'name', value: 'id', children: 'list' }" :icon="icon" :scroll="{
      rowHeight: 34,
      bufferSize: 30,
      threshold: 50,
      type: 'virtual',
    }" style="padding: 10px; height: 100%;">
    <template #label="{ node }">
      <span @click="click(node)"> {{ node.label }} - {{ node.data.text || node.data.description || node.value }}</span>
    </template>
    <template #operations="{ node }">
      <div class="tdesign-demo-block-row">
        <t-icon :name="node.data.visible !== false ? 'browse' : 'browse-off'" @click="toggleVisible(node)"></t-icon>
      </div>
    </template>
  </t-tree>
</template>
<script setup lang="ts">
import { defineProps, computed, onMounted, ref, onUnmounted, watch, } from "vue";
import { Icon, TreeNodeModel } from "tdesign-vue-next";
import { useSelection } from '../services/selections.ts'

const props = defineProps({});

// 获取画布组件
let data = ref(meta2d.data());

const pensTree = computed(() => {
  const pens = data.value.pens;
  return pens.filter((pen: any) => {
    if (!pen.parentId) {
      if (pen.children) {
        const children: any[] = [];
        pen.children.forEach((id: string) => {
          const child = pens.find((pen) => pen.id === id);
          if (child) {
            children.push(child);
          }
        });
        pen.list = children;
      }

      return true;
    }
  });
});

const updateData = () => {
  data.value = meta2d.data();
}

const { selections } = useSelection()
const actived = ref([])
watch(selections, (val) => {
  // console.log("structure selections: ", val);
  const { mode } = val;
  if (mode == 1 && val.pen) {
    actived.value = [val.pen.id]
    // const active = pensTree.value.find((pen) => pen.id === val.pen.id);
    // if (active) {
    // actived.value = [active.id]
    // }
  }
  // ! 高亮只会存在一个
  // else if (mode == 2 && val.pens) {
  //   actived.value = val.pens.map((pen: Pen) => pen.id)
  // }
  else {
    actived.value = []
  }
}, {
  immediate: true,
})

onMounted(() => {
  meta2d.on('add', updateData)
  meta2d.on('delete', updateData)
  meta2d.on('clear', updateData)
})

onUnmounted(() => {
  meta2d.off('add', updateData)
  meta2d.off('delete', updateData)
})


// console.log("pens: ", pensTree);
const icon = (h: Function, node: TreeNodeModel) => {
  const iconMap: Record<string | number, string> = {
    1: "git-commit",
    combine: "folder",
    image: "image",
  };

  const iconName =
    iconMap[node.data.type] || iconMap[node.data.name] || "rectangle";

  return h(Icon, { name: iconName });
};

const toggleVisible = (node: TreeNodeModel) => {
  node.data.visible = node.data.visible === false ? true : false;
  node.setData(node.data);
  meta2d.setValue({
    id: node.data.id,
    visible: node.data.visible,
  });
};

const click = (node: TreeNodeModel) => {
  // console.log(context);
  const pen = meta2d.findOne(node.data.id);
  if (pen) {
    meta2d.active([pen]);
    meta2d.render();
    meta2d.gotoView(pen);
  }
};
</script>
<style lang="scss" scoped></style>
