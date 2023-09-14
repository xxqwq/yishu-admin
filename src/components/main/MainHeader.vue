<template>
  <div class="w-full! header flex justify-between items-end mt-10">
    <div class="ml-10">
      <el-tag size="large" v-for="(page, index) in pageList" :key="index" closable :disable-transitions="false"
        @click="handleChange(page, index)" @close="handleClose(index)" class="mr-10"
        :effect="route.path === page.path ? 'dark' : 'light'">
        {{ page.name }}
      </el-tag>
    </div>
    <div class="mr-10 flex justify-center items-center">
      <el-dropdown>
        <el-avatar :size="50" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="close" @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <div class="ml-5">{{ store.username }}</div>
    </div>
  </div>
  <div class="divider mt-10"></div>
</template>

<script setup lang="ts">
import router from '@/router';
import { useLoginStore, usePageStore } from '@/stores'
import { useRoute } from 'vue-router';
import { logOut } from '@/services/apis/login'
import axios from 'axios';

const route = useRoute()
const { deletePage, pageList, setActivePage } = usePageStore()
const store = useLoginStore()
const { logOutAction } = store

// 删除标签
const handleClose = (index: any) => {
  if (index === 0) {
    return
  }
  deletePage(index)
}

//切换标签
const handleChange = (page: any, index: number) => {
  setActivePage(index)
  router.push(page.path)
}

//退出登录
const logout = async () => {
  await logOutAction()
}

</script>

<style scoped>
.divider {
  border-bottom: 1px solid #bdc1c9;
}
</style>
