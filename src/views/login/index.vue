<template>
  <div class="flex justify-center items-center w-full h-full">
    <el-card shadow="always" class="w-400 h-200">
      <div>
        <h2 class="text-center">易书后台管理系统入口</h2>
      </div>
      <div class="flex items-center my-10">
        <el-icon :size="20" class="mr-10">
          <User />
        </el-icon>
        <el-input v-model="userInfo.username" placeholder="请输入用户名" clearable />
      </div>
      <div class="flex items-center my-10">
        <el-icon :size="20" class="mr-10">
          <Lock />
        </el-icon>
        <el-input v-model="userInfo.password" type="password" placeholder="请输入密码" show-password />
      </div>
      <div class="flex justify-center">
        <el-button type="primary" @click="login">登录</el-button>
      </div>
    </el-card>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { service } from '@/services/axios'

const router = useRouter()

interface IUser {
  username: string
  password: string
}

//用户信息
const userInfo = ref<IUser>({
  username: '',
  password: ''
})

const login = () => {

  const request=service()
  // request.post('/employee/login', {
  //   username: userInfo.value.username,
  //   password: userInfo.value.password
  // }).then(res => {
  //   console.log(res)
  // }).catch(err => {
  //   console.log(err)
  // })
  router.push('/')
  // service.post('/employee/login', {
  //   username: userInfo.value.username,
  //   password: userInfo.value.password
  // }).then(res => {
  //   console.log(res)
  // }).catch(err => {
  //   console.log(err)
  // })
}
</script>

<style scoped></style>
