import './style.css';
import TDesign from 'tdesign-vue-next';

const Meta2DEditorLoader = () => import('./views/Index.vue');
const Meta2DPreviewLoader = () => import('./views/Preview.vue');

export { TDesign, Meta2DEditorLoader, Meta2DPreviewLoader };

export default function (app: any) {
  console.log('install meta2d...', app);
  app.use(TDesign);
}
