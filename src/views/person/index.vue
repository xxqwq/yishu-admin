<template>
  <div>
    <el-form :inline="true" :model="formData">
      <el-form-item label="用户名">
        <el-input v-model="formData.username" placeholder="请输入要查找的账号" clearable />
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="formData.region" placeholder="请输入要筛选的状态" clearable>
          <el-option label="正常" value="zc" />
          <el-option label="禁用" value="jy" />
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-date-picker v-model="formData.date" type="date" placeholder="Pick a date" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="mt-10">
    <el-card>
      <el-table :data="tableData" border style="width: 100%" table-layout="auto" @selection-change="handleSelect">
        <el-table-column type="selection" />
        <el-table-column prop="name" label="用户名" width="180" />
        <el-table-column prop="nickname" label="昵称" width="150" />
        <el-table-column prop="avatar" label="头像" width="80">
          <template #default="scope">
            <el-avatar :size="50" :src="scope.row.avatar" />
          </template>
        </el-table-column>
        <el-table-column prop="phone" label="手机号" width="180" />
        <el-table-column prop="contactInfo" label="联系方式" width="180" />
        <el-table-column prop="email" label="邮箱" width="200" />
        <el-table-column prop="status" label="状态" width="80">
          <template #default>
            <el-tag type="success" v-if="userInfo.status === '1'">正常</el-tag>
            <el-tag class="ml-4" type="danger" v-else>禁用</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="210" />
        <el-table-column prop="operation" label="操作" width="auto">
          <template #default="scope">
            <div class="flex justify-center">
              <el-button type="primary" @click="handleEdit(scope.$index, scope.row, 'edit')">编辑</el-button>
              <el-button type="warning" @click="handleEdit(scope.$index, scope.row, 'ban')">禁用</el-button>
              <el-button type="danger" @click="handleEdit(scope.$index, scope.row, 'delete')">删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <div class="flex justify-end mt-10">
      <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[100, 200, 300, 400]"
        background layout="sizes, prev, pager, next" :total="1000" @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 分页
const pageSize = ref(0)
const currentPage = ref(0)

const handleCurrentChange = () => {
  console.log("当前改变");
}

const handleSizeChange = () => {
  console.log("每页改变");
}

const tableData = [
  {
    name: '李翔',
    nickname: 'nickname',
    phone: '12345678901',
    avatar: '1111',
    email: '2524447983@qq.com',
    status: '正常',
    createTime: '2021-09-01 12:00:00',
  },
  {
    name: '李翔1',
    phone: '12345678901',
    email: '11111111',
    status: '正常',
    createTime: '2021-09-01 12:00:00',
  },
]

//操作
const handleEdit = (index: number, row: any, operation: string) => {
  switch (operation) {
    case 'edit':
      console.log("编辑");
      break;
    case 'ban':
      console.log("禁用");
      break;
    case 'delete':
      console.log("删除");
      break;
    default:
      break;
  }
}

// 账号的状态
const userInfo = {
  status: '1'
}

// 多选
const selected = ref([])
const handleSelect = (data: any) => {
  selected.value = data.map((item: any) => item.name)
  console.log(selected.value);
}
import { reactive } from 'vue'

const formData = reactive({
  username: '',
  region: '',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style scoped>
</style>
