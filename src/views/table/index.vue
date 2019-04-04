<template>
  <div class="app-container">
    <!-- <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row>
      <el-table-column label="用户名">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column label="用户密码" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.password }}</span>
        </template>
      </el-table-column>
      </el-table-column>
      <el-table-column class-name="status-col" label="操作" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="创建时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table> -->
  </div>
</template>

<script>
  import axios from 'axios'
  import apipath from '../../assets/js/api'

  export default {
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'gray',
          deleted: 'danger'
        }
        return statusMap[status]
      }
    },
    data() {
      return {
        list: null,
        listLoading: true
      }
    },
    mounted() {
      this.getuserInfo();
    },
    methods: {
      getuserInfo() {
        axios({
          method: 'get',
          url: apipath.USERINFO,
          params: {},
        }).then(res => {
          // res = res.data;
          console.log(res)

          console.log('57')
          this.loading = false
        }).catch(err => {
          return false
        });
      }
    }
  }

</script>
