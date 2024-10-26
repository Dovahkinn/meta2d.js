<template>
  <t-tree
    hover
    line
    expand-all
    :data="pensTree"
    :keys="{ label: 'name', value: 'id' }"
    :icon="icon"
    @click="click"
  >
    <template #label="{ node }">
      <span> {{ node.label }} - {{ node.data.text }}</span>
    </template>
    <template #operations="{ node }">
      <div class="tdesign-demo-block-row">
        <t-icon
          :name="node.data.visible !== false ? 'browse' : 'browse-off'"
          @click="toggleVisible(node)"
        ></t-icon>
      </div>
    </template>
  </t-tree>
</template>
<script setup lang="ts">
import { defineProps, computed } from "vue";
import { Icon, TreeNodeModel } from "tdesign-vue-next";

const props = defineProps({});

// 获取画布组件
const data = meta2d.data();

const pensTree = computed(() => {
  const pens = data.pens;
  return pens.filter((pen) => {
    if (!pen.parentId) {
      if (pen.children) {
        const children = [];
        pen.children.forEach((id: string) => {
          const child = pens.find((pen) => pen.id === id);
          if (child) {
            children.push(child);
          }
        });
        pen.children = children;
      }

      return true;
    }
  });
});

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

const click = (context: { node: TreeNodeModel; e: MouseEvent }) => {
  // console.log(context);
  const pen = meta2d.findOne(context.node.data.id);
  if (pen) {
    meta2d.active([pen]);
    meta2d.render();
    meta2d.gotoView(pen);
  }
};
</script>
<style lang="scss" scoped></style>
