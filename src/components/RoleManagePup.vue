<template>
    <el-dialog title="收货地址" :visible.sync="this.isShowPup">
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
      isShowPup: function () {
        return this.isShowDialog = this.isShow;
      }
  },
  methods: {
    hideDialog() {
      // this.$emit('on-hide-dialog', false);
      //this.isShowDialog = false;
      //this.isShow = false;
     this.isShowPup = function (){
       return this.isShowDialog = false;
     }
    },
    okDialog() {
      //this.$emit('on-ok-dialog', );
    } 
  },
  mounted() {
    console.log('pup:' + this.isShowDialog);
  }
}
</script>
<style lang="scss">
    
</style>