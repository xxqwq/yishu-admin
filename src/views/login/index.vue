<template>
  <div class="flex justify-center items-center w-full h-full">
    <el-card shadow="always" class="w-400 h-300">
      <div>
        <h1 class="text-center text-24">易书后台管理系统入口</h1>
      </div>
      <div class="flex items-center my-20">
        <el-icon :size="20" class="mr-10">
          <User />
        </el-icon>
        <el-input v-model="logInfo.username" placeholder="请输入用户名" clearable />
      </div>
      <div class="flex items-center my-10">
        <el-icon :size="20" class="mr-10">
          <Lock />
        </el-icon>
        <el-input v-model="logInfo.password" type="password" placeholder="请输入密码" show-password />
      </div>
      <div class="flex items-center justify-center">
        <el-input style="width: 200px;" v-model="logInfo.checkword" placeholder="请输入验证码" />
        <img :src="imageUrl" class="w-100 h-60" @click="getImage">
      </div>
      <div class="flex justify-center mt-20">
        <el-button type="primary" @click="loginAction">登录</el-button>
      </div>
    </el-card>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios';
import { login } from '@/services/apis/login'
import {useRouter} from 'vue-router'

const router=useRouter()
interface ILogInfo {
  username: string
  password: string
  checkword: string
}

//用户信息
const logInfo = ref<ILogInfo>({
  username: '',
  password: '',
  checkword: ''
})

//验证码图片
const imageUrl = ref('')
const getImage = async () => {
  axios.get('/api/email/code/image', {
    responseType: 'arraybuffer'
  }).then(res => {
    const blob = new Blob([new Uint8Array(res.data)], { type: 'image/jpeg' }); // 将流数据转换为Blob对象
    // 创建包含验证码图片的URL
    imageUrl.value = URL.createObjectURL(blob);
  }).catch(err => {
    console.log(err)
  })
}

const loginAction = async () => {
  login({
    username: logInfo.value.username,
    password: logInfo.value.password,
  })
  router.push('/dashboard')
}
onMounted(() => {
  getImage()
})
</script>

<style scoped></style>
