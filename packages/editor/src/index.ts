import './style.css';
import TDesign from 'tdesign-vue-next';
import { IApiManager, registerApi, } from './services/apiManager'

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
