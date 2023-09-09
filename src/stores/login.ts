import { defineStore } from 'pinia'

export default defineStore('login', {
  //定义状态
  state: () => ({
    username: '',
    avatar: ''
  }),
  //定义getter
  getters: {},
  //定义actions
  actions: {
    //登录
    login(userInfo: string) {
      
    }
  }
})
