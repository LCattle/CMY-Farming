<template>
    <el-dialog title="角色信息" :visible.sync="this.isShowDialog" size="try">
      <el-form :model="form">
        <el-form-item label="角色名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色状态" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
         <el-form-item label="角色描述" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.desc"></el-input>
         </el-form-item>
         <el-form-item label="菜单功能授权" :label-width="formLabelWidth">
         <el-select v-model="value7" placeholder="请选择">
            <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
              <span style="float:left">{{ item.label }}</span>
              <span style="float:right">{{ item.value }}</span>
            </el-option>
          </el-select>
      </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="hideDialog">取 消</el-button>
        <el-button type="primary" @click="okDialog">确 定</el-button>
      </div>
</el-dialog>
</template>
<script>
import bus from './../eventBus'
export default {
  props:{
    isShow : {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
       formLabelWidth: '100px',
       isShowDialog: false,
       form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        value7: ''
    }
  },
  mutated(){

  },
  computed:{
      
  },
  methods: {
    hideDialog() {
     this.isShowDialog = false;
    },
    okDialog() {
    },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  mounted() {
    bus.$on('is-show-rm-pup', (id) => {
      console.log('接收到事件了？');
      console.log(id);
      this.isShowDialog = true;
    })
  }
}
</script>
<style lang="scss">
    
</style>