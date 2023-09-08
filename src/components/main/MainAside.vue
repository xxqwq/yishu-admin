<template>
  <div class="h-full overflow-hidden">
    <div class="flex items-center py-10 pl-10 logo">
      <el-avatar :size="50" />
      <h1 class="ml-10">易书</h1>
    </div>
    <el-menu class="h-full" :active="activeIndex" default-active="0">
      <router-link to="/">
        <el-menu-item index="0" @click="addLabel({
          name: '首页',
          path: '/'
        }, 0)">
          <template #title>
            <el-icon>
              <Menu />
            </el-icon>
            <span>首页</span>
          </template>
        </el-menu-item>
      </router-link>
      <router-link to="/order">
        <el-menu-item index="1" @click="addLabel({
          name: '订单管理',
          path: '/order'
        }, 1)">
          <template #title>
            <el-icon>
              <CreditCard />
            </el-icon>
            订单管理
          </template>
        </el-menu-item>
      </router-link>
      <router-link to="/person">
        <el-menu-item index="2" @click="addLabel({
          name: '人员管理',
          path: '/person'
        }, 2)">
          <el-icon>
            <User />
          </el-icon>人员管理
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePageStore } from '@/stores';

const { addPage, setActivePage } = usePageStore()

// 添加标签
const addLabel = (page: any, index: number) => {
  activeIndex.value = index.toString()
  addPage(page)
  setActivePage(index)
}


//当前激活的菜单
const activeIndex = ref('0')
</script>

<style  scoped>
.logo{
  border-bottom: 1px solid #dcdfe6;
  border-right: 1px solid #dcdfe6;
}
</style>
