import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('./views/Index.vue') },
  { path: '/preview', component: () => import('./views/Preview.vue') },
  { path: '/open', component: () => import('./views/Opener.vue') },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
