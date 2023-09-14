<template>
  <div>
    <el-form :inline="true" :model="formData">
      <el-form-item label="用户名">
        <el-input v-model="formData.username" placeholder="请输入要查找的用户名" clearable />
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="formData.nickname" placeholder="请输入要查找的昵称" clearable />
      </el-form-item>
      <el-form-item label="身份证">
        <el-input v-model="formData.idNumber" placeholder="请输入要查找的身份证" clearable />
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="formData.sex" placeholder="请输入要筛选的状态" clearable>
          <el-option label="男" value="1" />
          <el-option label="女" value="0" />
        </el-select>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="formData.phone" placeholder="请输入要查找的手机号" clearable />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="formData.email" placeholder="请输入要查找的邮箱" clearable />
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="formData.status" placeholder="请输入要筛选的状态" clearable>
          <el-option label="正常" value="zc" />
          <el-option label="禁用" value="jy" />
        </el-select>
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
        <el-table-column prop="username" label="用户名" width="180" />
        <el-table-column prop="name" label="昵称" width="150" />
        <el-table-column prop="avatar" label="头像" width="80">
          <template #default="scope">
            <el-avatar :size="50" :src="scope.row.avatar" />
          </template>
        </el-table-column>
        <el-table-column prop="idNumber" label="身份证号" width="200" />
        <el-table-column prop="sex" label="性别" width="180">
          <template #default="scope">
            {{ scope.row.sex === '1' ? '男' : '女' }}
          </template>
        </el-table-column>
        <el-table-column prop="phone" label="手机号" width="180" />
        <el-table-column prop="email" label="邮箱" width="200">
          <template #default="scope">
            {{ scope.row.email || '空' }}
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态" width="80">
          <template #default="scope">
            <el-tag type="success" v-if="scope.row.status == '1'">正常</el-tag>
            <el-tag class="ml-4" type="danger" v-else>禁用</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="210">
          <template #default="scope">
            {{ scope.row.createTime.replace('T', ' ') }}
          </template>
        </el-table-column>
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
      <el-pagination v-model:current-page="paginationData.currentPage" v-model:page-size="paginationData.pageSize"
        :page-sizes="[10, 20, 30, 40]" background layout="sizes, prev, pager, next, jumper"
        :page-count="paginationData.totalPages"
         @size-change="handleSizeChange" @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getAllPeople } from '@/services/apis/person'
// 分页
const paginationData = reactive({
  pageSize: 10,
  currentPage: 1,
  totalPages: 0,
  totalData: 0
})

const handleCurrentChange = (val: any) => {
  paginationData.currentPage = val
  getTableData()
}

const handleSizeChange = (val: any) => {
  paginationData.pageSize = val
  getTableData()
}

const tableData = ref([])

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


// 多选
const selected = ref([])
const handleSelect = (data: any) => {
  selected.value = data.map((item: any) => item.name)

}

import { reactive } from 'vue'

const formData = reactive({
  username: '',
  nickname: '',
  idNumber: '',
  sex: '',
  phone: '',
  email: '',
  status: ''

})

const onSubmit = () => {
  console.log('submit!')
}

//获取表格数据
const getTableData = async () => {
  const res = await getAllPeople({
    params: {
      page: paginationData.currentPage, pageSize: paginationData.pageSize
    }
  })
  console.log(res.data);
  tableData.value = res.data.records
  paginationData.totalData = res.data.total
  paginationData.totalPages = res.data.pages
}
onMounted(() => {
  getTableData()
})
</script>

<style scoped></style>
