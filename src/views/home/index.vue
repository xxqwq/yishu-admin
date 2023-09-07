<template>
  <div class="w-full h-full">
    <el-container class="w-full h-full">
      <el-aside width="200px">
        <MainAside/>
      </el-aside>
      <el-container>
        <el-header>
          <MainHeader/>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MainHeader from '@/components/main/MainHeader.vue'
import MainAside from '@/components/main/MainAside.vue'

</script>

<style  scoped></style>
