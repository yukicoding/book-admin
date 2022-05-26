<template>
  <el-container style="height: 100%;width:1000px;text-align: center;margin: 0 auto">
    <el-main>


      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="id" label="编号" width="100">
        </el-table-column>
        <el-table-column prop="username" label="用户名" width="200">
        </el-table-column>
        <el-table-column prop="email" label="用户邮箱" width="300">
        </el-table-column>
        <el-table-column prop="created" label="注册时间" width="100">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>

</template>

<script>

export default {
  name: "PageFour",
  data() {
    return {
      total: null,
      tableData: null
    }
  },
  created() {
    const _this = this
    axios.get('http://localhost:8081/findAllUser').then(function (resp) {
      _this.tableData = resp.data

    });

  },
}

</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.el-icon-arrow-down {
  font-size: 12px;
}
</style>
