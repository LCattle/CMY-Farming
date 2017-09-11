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
            <input type="text" disabled autocomplete="off" placeholder="请选择功能" style="cursor:pointer;" rows="2" validateevent="true" class="el-input__inner">
            <i class="iconfont arrow-icon">&#xe792;</i>
          </div>
          <div class="select-bar" v-for="(item, index) in this.navs" :key="index">
            <i class="iconfont hs-icon">&#xe622;</i>
            <el-checkbox v-model="checkAll">{{ item.one_level }}</el-checkbox>
            <ul class="options">
              <li class="option-item" v-for="(menu, index) in item.items" :key="index">
                <i v-if="menu.isHasSub" class="iconfont hs-icon">&#xe622;</i>
                <el-checkbox :checked="menu.isActive" :true-label="menu.id">{{ menu.name }}</el-checkbox>
                <ul class="sub-options" v-if="menu.isHasSub">
                  <li class="sub-opt-item" v-for="(sub, index) in menu.subItems" :key="index">
                    <el-checkbox :true-label="sub.id" :checked="sub.isActive">{{ sub.name }}</el-checkbox>
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
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formLabelWidth: '100px',
      isShowDialog: false,
      checkAll: false,
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
      value7: '',
      navs: [{
        one_level: '根目录',
        items: [
          {
            name: '导航一A',
            isActive: true,
            id: 1,
            isHasSub: true,
            subItems: [{
              name: '子导航AA',
              isActive: false,
              id: 18
            },
            {
              name: '子导航BB',
              isActive: false,
              id: 15
            }]
          },
          {
            name: '导航二B',
            isActive: false,
            id: 2,
            isHasSub: true,
            subItems: [{
              name: '子导航CC',
              isActive: false,
              id: 13
            }]
          }
        ]
      }]
    }
  },
  mutated() {

  },
  computed: {

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
.arrow-icon {
  position: absolute;
  right: 0px;
  top: 0px;
  width: 35px;
  height: 100%;
  text-align: center;
  font-size: 22px;
  color: #bfcbd9;
}

.select-menu-box {
  position: relative;
}

.select-bar {
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

.options {
  padding-left: 33px;
  .sub-opt-item {
    padding-left: 33px;
  }
}

.el-checkbox {
  height: 25px;
  line-height: 25px;
  input,
  .el-checkbox__inner {
    width: 15px;
    height: 15px;
  }
  .el-checkbox__inner::after {
    top: 0px;
    left: 4px;
  }
}

.hs-icon {
  border: 1px solid #ccc;
  cursor: pointer;
  width: 15px;
  height: 15px;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  background: green;
  color: #fff;
}

.icon-rotate-to-top {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
}
</style>