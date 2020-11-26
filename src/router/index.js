import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/index')
    // component: () => import('@/components/HelloWorld')
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router