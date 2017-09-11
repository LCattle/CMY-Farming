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
      <div class="el-form-item select-box ">
        <label class="el-form-item__label" style="width: 100px;"> 菜单功能授权 </label>
        <div class="el-form-item__content select-menu-box" style="margin-left: 100px">
          <div class="el-input">
            <input type="text" disabled  autocomplete="off"  placeholder="请选择功能" style="cursor:pointer;" rows="2" validateevent="true" class="el-input__inner">
            <i class="iconfont arrow-icon">&#xe792;</i>
          </div>
          <div class="select-bar">
            <el-checkbox v-model="checked">根目录</el-checkbox>
            <ul class="options">
                <li class="option-item">
                    <el-checkbox v-model="checked">备选项</el-checkbox>
                    <ul class="sub-options">
                      <li class="sub-opt-item">
                        <el-checkbox v-model="checked">备选项</el-checkbox>
                      </li>
                    </ul>
                </li>
            </ul>
          </div>
        </div>
      </div>
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
       checked: false,
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
.arrow-icon{
  position: absolute;
  right: 0px;
  top: 0px;
  width: 35px;
  height: 100%;
  text-align: center;
  font-size: 22px;
  color: #bfcbd9;
  
}
.select-menu-box{
  position: relative;
}
.select-bar{
  width: 100%;
  height: auto;
  overflow: hidden;
  text-align: left;
  position: absolute;
  top: 40px;
  left: 0;
  background: #fff;
  z-index: 15;
}
.options{
  padding-left: 18px;
  .sub-opt-item{
    padding-left: 18px;
  }
}
.el-checkbox{
  height: 25px;
  line-height: 25px;
  input, .el-checkbox__inner{
    width: 15px;
    height: 15px;
  }
  .el-checkbox__inner::after{
    top: 0px;
    left: 4px;
  }
}
.icon-rotate-to-top{
transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
}
</style>