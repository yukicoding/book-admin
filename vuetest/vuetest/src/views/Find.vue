<template>

  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="id"
        label="编号"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="200">
      </el-table-column>
      <el-table-column
        prop="author"
        label="作者"
        width="200">
      </el-table-column>
      <el-table-column
        prop="publish"
        label="出版社"
        width="300">
      </el-table-column>
      <el-table-column
        prop="pages"
        label="库存"
        width="100">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"
        width="100">
      </el-table-column>
      <el-table-column
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="deleteData(scope.row)" type="text" size="small">删除</el-button>
        </template>

      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      page-size="5"
      :total="total"
      @current-change="page">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        this.$router.push({
          path: '/Update',
          query: {
            id: row.id
          }
        })
      },

      deleteData(row) {
        const _this = this
        axios.delete('http://localhost:8081/book/deleteById/' + row.id).then(function (resp) {
          _this.$alert('《' + row.name + '》删除成功！', '消息', {
            confirmButtonText: '确定',
            callback: action => {
              window.location.reload()
            }
          })
        })
      },
      page(current) {
        const _this = this
        axios.get('http://localhost:8081/book/findAll/' + current + '/5').then(function (resp) {
          _this.tableData = resp.data.content
          _this.total = resp.data.totalElements
        })
      }
    },
    created() {
      const _this = this
      axios.get('http://localhost:8081/book/findAll/1/5').then(function (resp) {
        _this.tableData = resp.data.content
        _this.total = resp.data.totalElements
      })
    },
    data() {
      return {
        total: null,
        tableData: null
      }
    }
  }
</script>
