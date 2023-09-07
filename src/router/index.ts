import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  // routes: RouteList as RouteRecordRaw[]
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
      meta: { title: '登录' }
    },
    {
      path: '/',
      component: () => import('@/views/home/index.vue'),
      meta: { title: '易书后台管理系统' },
      children: [
        {
          path: '/person',
          name: 'person',
          component: () => import('@/views/person/index.vue')
        },
        {
          path: '/order',
          name: 'order',
          component: () => import('@/views/order/index.vue')
        }
      ]
    }
  ]
})

export default router
