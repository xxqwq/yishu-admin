<template>
  <div class="h-full overflow-hidden">
    <div class="flex items-center py-10 pl-10 logo" @click="router.push('/')">
      <el-avatar :size="50" />
      <h1 class="ml-10">易书</h1>
    </div>
    <div class="w-full h-full border">
      <router-link to="/dashboard">
        <div class="item" :class="route.path === '/dashboard' ? 'is-active' : ''" @click="addLabel({
          name: '首页',
          path: '/dashboard',
          index: 0
        })">
          <el-icon :size="20">
            <Menu />
          </el-icon>
          <span class="ml-10">首页</span>
        </div>
      </router-link>
      <router-link to="/person">
        <div :class="[route.path === '/person' ? 'is-active' : '', 'item']" @click="addLabel({
          name: '人员管理',
          path: '/person',
          index: 1
        })">
          <el-icon :size="20">
            <User />
          </el-icon>
          <span class="ml-10">人员管理</span>
        </div>
      </router-link>
      <router-link to="/order">
        <div :class="[route.path === '/order' ? 'is-active' : '', 'item']" @click="addLabel({
          name: '订单管理',
          path: '/order',
          index: 2
        })">
          <el-icon :size="20">
            <CreditCard />
          </el-icon>
          <span class="ml-10">订单管理</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router';
import { usePageStore } from '@/stores';

const route = useRoute()

const { addPage, setActivePage } = usePageStore()

// 添加标签
const addLabel = (page: any) => {
  router.push(page.path)
  addPage(page)
  setActivePage(page.index)
}


</script>

<style  scoped>
.logo {
  border-bottom: 1px solid #dcdfe6;
  border-right: 1px solid #dcdfe6;
}

.border {
  border-right: 1px solid #dcdfe6;
}

.item {
  display: flex;
  align-items: center;
  height: 56px;
  line-height: 56px;
  font-size: 14px;
  padding: 0 20px;
  list-style: none;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  white-space: nowrap;
}

.item:hover {
  background-color: #ecf5ff;
}

.is-active {
  color: #409eff;
}
</style>
