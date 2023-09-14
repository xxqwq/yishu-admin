import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory('/'),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
      meta: { title: '登录' }
    },
    {
      path: '/',
      component: () => import('@/views/home/index.vue'),
      redirect: '/dashboard',
      meta: { title: '易书后台管理系统' },
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('@/views/dashboard/index.vue')
        },
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

router.beforeEach((to, from, next) => {
  //前置守卫,判断是否登录
  if (to.path === '/login') {
    next()
  } else {
    if (localStorage.getItem('token')) {
      // 已登录
      next()
    }else{
      next('/login')
    }
  }
})
export default router
