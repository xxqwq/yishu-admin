<template>
  <div class="h-full bg-blue">
    <el-menu default-active="1" class="bg-blue!" @open="handleOpen" @close="handleClose">
      <el-menu-item index="1">
        <template #title>
          <el-icon>
            <Menu />
          </el-icon>
          <span>首页</span>
        </template>
      </el-menu-item>
      <el-menu-item index="2" class="text-black!">
        <template #title>
          <router-link to="/order">
            <el-icon>
              <CreditCard />
            </el-icon>
            订单管理
          </router-link>
        </template>
      </el-menu-item>
      <el-menu-item index="3" class="text-black!">
        <router-link to="/person">
          <el-icon>
            <User />
          </el-icon>人员管理
        </router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style  scoped></style>
