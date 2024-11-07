<template>
  <t-dialog
    v-model:visible="visible"
    header="JavaScript"
    width="50%"
    :on-cancel="onCancel"
    :on-close="close"
    :on-confirm="onConfirmAnother"
  >
    <t-space direction="vertical" style="width: 100%">
      <code>function(data: any) { // data 为 MessageBus 消息里的 data 对象</code>
      <vue-monaco-editor
        v-model:value="code"
        theme="vs-dark"
        :options="MONACO_EDITOR_OPTIONS"
        style="height: 50vh"
        @mount="handleMount"
      />
      <code>}</code>
    </t-space>
  </t-dialog>
</template>
<script setup lang="ts">
import { defineProps, ref, defineExpose, shallowRef, defineEmits } from "vue";
import { VueMonacoEditor } from "@guolao/vue-monaco-editor";
const props = defineProps({});

const emit = defineEmits(["confirm"]);
const visible = ref(false);

const onConfirmAnother = (context: any) => {
  visible.value = false;
  emit("confirm", code.value);
};
const close = (context: any) => {
  console.log("关闭弹窗，点击关闭按钮、按下ESC、点击蒙层等触发", context);
};
const onCancel = (context: any) => {
  console.log("点击了取消按钮", context);
};

const open = (jsStr: string) => {
  visible.value = true;
  code.value = jsStr;
};

defineExpose({
  open,
});

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
};

const code = ref("// some code...");
const editorRef = shallowRef();
const handleMount = (editor: typeof VueMonacoEditor) =>
  (editorRef.value = editor);

// your action
function formatCode() {
  editorRef.value?.getAction("editor.action.formatDocument").run();
}
</script>
<style lang="scss" scoped>
:global(code) {
    color: blue;
    font-weight: bold;
}
</style>
