import './style.css';
import TDesign from 'tdesign-vue-next';

const Meta2DPreviewLoader = () => import('./views/Preview.vue');

export { TDesign, Meta2DPreviewLoader };

export default function (app: any, options: PluginOptions) {
  console.log('install meta2d player...', app, options);
  app.use(TDesign);
}
