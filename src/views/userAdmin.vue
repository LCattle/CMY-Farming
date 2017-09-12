<template>
  <el-row>
    <h1 class="form-title">角色查询</h1>
    <el-form :inline="true" :model="formInline" class="demo-form-inline form-box">
      <el-form-item label="登录帐号">
        <el-input v-model="formInline.user" placeholder="请输入登录账号"></el-input>
      </el-form-item>
      <el-form-item label="用户名称">
        <el-input v-model="formInline.user" placeholder="请输入用户名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="onSubmit">重置</el-button>
      </el-form-item>
    </el-form>
    <h1 class="form-title">角色列表</h1>
    <!-- <div class="btn-box">
      <el-button type="text" @click="shwoDialog">
        <i class="iconfont">&#xe763;</i>  
        <span>添加</span>
      </el-button>
      <el-button type="text">
        <i class="iconfont">&#xe76c;</i>
        <span>删除</span>
      </el-button>
    </div> -->
    <el-table ref="multipleTable" class="table-box" :default-sort="{prop: 'date', order: 'descending'}" :data="tableData3" border max-height="550" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <!-- <el-table-column type="selection" width="55" style="padding-right:0;">
      </el-table-column> -->
      <el-table-column label="操作" width="80">
        <template scope="scope">
          <el-button type="text" size="small">
            <i class="iconfont">&#xe7c3;</i>
          </el-button>
        </template>
      </el-table-column>
      <el-table-column label="登录账号" width="120" prop="acc" sortable>
      </el-table-column>
      <el-table-column prop="userName" label="用户名称" sortable width="120">
      </el-table-column>
      <el-table-column prop="gener" label="性别" sortable width="120">
      </el-table-column>
      <el-table-column prop="telphone" label="电话" sortable width="140">
      </el-table-column>
      <el-table-column prop="roleStatus" label="状态" sortable width="120">
      </el-table-column>
      <el-table-column prop="roleName" label="角色" sortable width="160">
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <el-pagination class="pagination-box" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
    </el-pagination>
  </el-row>
</template>
<script>
import bus from './../eventBus'
export default {
  components: {
  },
  data() {
    return {
      currentPage4: 4,
      dialogFormVisible: false,
      formInline: {
        user: '',
        region: ''
      },
      tableData3: [
      {
        userName: '系统管理员1',
        roleStatus: '养牛中',
        acc: 'cattlelin',
        gener: '男',
        telphone: '13537575578',
        roleName: '放牛管理员，养羊管理员',
        createTime: '2017-11-11 18:26:00'
      },
      {
        userName: '系统管理员1',
        roleStatus: '养牛中',
        acc: 'cattlelin',
        gener: '男',
        telphone: '13537575578',
        roleName: '放牛管理员，养羊管理员',
        createTime: '2017-11-11 18:26:00'
      },
      {
        userName: '系统管理员1',
        roleStatus: '养牛中',
        acc: 'cattlelin',
        gener: '男',
        telphone: '13537575578',
        roleName: '放牛管理员，养羊管理员',
        createTime: '2017-11-11 18:26:00'
      },
      {
        userName: '系统管理员1',
        roleStatus: '养牛中',
        acc: 'cattlelin',
        gener: '男',
        telphone: '13537575578',
        roleName: '放牛管理员，养羊管理员',
        createTime: '2017-11-11 18:26:00'
      },
      {
        userName: '系统管理员1',
        roleStatus: '养牛中',
        acc: 'cattlelin',
        gener: '男',
        telphone: '13537575578',
        roleName: '放牛管理员，养羊管理员',
        createTime: '2017-11-11 18:26:00'
      },
      {
        userName: '系统管理员1',
        roleStatus: '养牛中',
        acc: 'cattlelin',
        gener: '男',
        telphone: '13537575578',
        roleName: '放牛管理员，养羊管理员',
        createTime: '2017-11-11 18:26:00'
      },
      {
        userName: '系统管理员1',
        roleStatus: '养牛中',
        acc: 'cattlelin',
        gener: '男',
        telphone: '13537575578',
        roleName: '放牛管理员，养羊管理员',
        createTime: '2017-11-11 18:26:00'
      },
      {
        userName: '系统管理员1',
        roleStatus: '养牛中',
        acc: 'cattlelin',
        gener: '男',
        telphone: '13537575578',
        roleName: '放牛管理员，养羊管理员',
        createTime: '2017-11-11 18:26:00'
      },
      {
        userName: '系统管理员1',
        roleStatus: '养牛中',
        acc: 'cattlelin',
        gener: '男',
        telphone: '13537575578',
        roleName: '放牛管理员，养羊管理员',
        createTime: '2017-11-11 18:26:00'
      },
      {
        userName: '系统管理员1',
        roleStatus: '养牛中',
        acc: 'cattlelin',
        gener: '男',
        telphone: '13537575578',
        roleName: '放牛管理员，养羊管理员',
        createTime: '2017-11-11 18:26:00'
      },
      {
        userName: '系统管理员1',
        roleStatus: '养牛中',
        acc: 'cattlelin',
        gener: '男',
        telphone: '13537575578',
        roleName: '放牛管理员，养羊管理员',
        createTime: '2017-11-11 18:26:00'
      },
      {
        userName: '系统管理员1',
        roleStatus: '养牛中',
        acc: 'cattlelin',
        gener: '男',
        telphone: '13537575578',
        roleName: '放牛管理员，养羊管理员',
        createTime: '2017-11-11 18:26:00'
      },
      ],
      multipleSelection: []
    }
  },
  created() {
      
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    shwoDialog: function () {
      //console.log('s');
     // this.dialogFormVisible = true;
     bus.$emit('is-show-rm-pup', '1');
    }
  }
}
</script>
<style lang="scss">
.form-box {
  text-align: left;
  padding-top: 20px;
  padding-left: 20px;
}

.form-title {
  font-size: 18px;
  margin-bottom: 20px;
  padding-bottom: 15px;
  width: 97%;
  margin-left: 20px;
  padding-top: 20px;
  border-bottom: 1px solid #eee;
  text-align: left;
}

.table-box {
  max-width: 97%;
  margin-left: 20px;
  .el-table-column--selection {
    .cell {

      padding-right: 20px !important;
    }
  }
}

.el-table .cell {
  text-align: left;
}

.pagination-box {
  width: 97%;
  margin-left: 20px;
  text-align: right;
  margin-top: 20px;
}
.btn-box{
  width:97%;
  text-align: left;
  margin-left: 20px;
}
</style>

