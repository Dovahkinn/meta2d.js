<template>
  <t-tree
    hover
    line
    expand-all
    :data="pensTree"
    :keys="{ label: 'name', value: 'id', children: 'list' }"
    :icon="icon"
    style="padding: 10px;"
    
  >
    <template #label="{ node }">
      <span @click="click(node)"> {{ node.label }} - {{ node.data.text || node.value }}</span>
    </template>
    <template #operations="{ node }">
      <div class="tdesign-demo-block-row">
        <t-icon
          :name="node.data.visible !== false ? 'browse' : 'browse-off'"
          @click ="toggleVisible(node)"
        ></t-icon>
      </div>
    </template>
  </t-tree>
</template>
<script setup lang="ts">
import { defineProps, computed, onMounted, ref, onUnmounted, } from "vue";
import { Icon, TreeNodeModel } from "tdesign-vue-next";

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

onMounted(() => {
  meta2d.on('add', updateData)
  meta2d.on('delete',updateData)
  meta2d.on('clear', updateData)
})

onUnmounted(() => {
  meta2d.off('add', updateData)
  meta2d.off('delete',updateData)
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
