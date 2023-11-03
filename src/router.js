//@ts-nocheck
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'story',
    component: () => import('./views/story/index.vue'),
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
