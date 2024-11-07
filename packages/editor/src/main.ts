import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import router from './router.ts';
import TDesign from 'tdesign-vue-next';

globalThis.$_meta2d_singleton = true;
const app = createApp(App);

// 加载基础服务
app.use(router).use(TDesign);
// end

app.mount('#app');

import { loader } from '@guolao/vue-monaco-editor'
loader.config({
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs',
  },
})