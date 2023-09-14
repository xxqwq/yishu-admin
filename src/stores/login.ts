import { logOut, login } from '@/services/apis/login'
import { defineStore } from 'pinia'
import router from '@/router'

export default defineStore('login', {
  //定义状态
  state: () => ({
    username: ''
  }),
  // 持久化存储
  persist: {
    enabled: true // 是否开启持久化存储
  },
  //定义getter
  getters: {},
  //定义actions
  actions: {
    //登录
    async loginAction(userInfo: any) {
      const { username, password } = userInfo
      const res = await login({
        username,
        password
      })
      this.username = res.data.username
      localStorage.setItem('token', res.data.token)
      return res
    },
    //退出登录
    async logOutAction() {
      await logOut()
      router.push('/login')
      localStorage.removeItem('token')
    }
  }
})
