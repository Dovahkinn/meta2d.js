import './style.css';
import TDesign from 'tdesign-vue-next';
import { IApiManager, registerApi, } from './services/apiManager'
import { loader } from '@guolao/vue-monaco-editor'
loader.config({
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs',
  },
})

const Meta2DEditorLoader = () => import('./views/Index.vue');
const Meta2DPreviewLoader = () => import('./views/Preview.vue');

export { TDesign, Meta2DEditorLoader, Meta2DPreviewLoader };

type PluginOptions = {
 api: IApiManager
}

export default function (app: any, options: PluginOptions) {
  console.log('install meta2d...', app);
  registerApi(options?.api);
  app.use(TDesign);
}
