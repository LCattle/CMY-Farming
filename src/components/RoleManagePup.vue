<template>
    <el-dialog title="收货地址" :visible.sync="this.isShowDialog">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
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
       formLabelWidth: '120px',
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
      //this.$emit('on-ok-dialog', );
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