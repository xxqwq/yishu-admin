<template>
  <div class="text-right  w-full!">
    <div>
      <el-dropdown>
        <el-avatar :size="50" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="close">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">promotion management</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
