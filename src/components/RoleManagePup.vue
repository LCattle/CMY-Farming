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
          <div class="select-bar" v-for="(item, index) in this.navs" :key="item.id">
            <i class="iconfont hs-icon">&#xe622;</i>
            <el-checkbox class="all-checkbox" @change="changeAll" v-model="checkAll">{{ item.one_level }}</el-checkbox>
            <ul class="options">
              <li class="option-item" v-for="(menu, index) in item.items" :key="menu.id">
                <i v-if="menu.isHasSub" class="iconfont hs-icon" @click="hsCheckboxIcon">&#xe622;</i>
                <el-checkbox class="opt-items" @change="optsItemsChange($event)" :checked="menu.isActive" :true-label="menu.id">{{ menu.name }}</el-checkbox>
                <ul class="sub-options hide" v-if="menu.isHasSub" >
                  <li class="sub-opt-item" v-for="(sub, index) in menu.subItems" :key="sub.id">
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
import _j from 'jquery'
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
          },
          {
            name: '导航二T',
            isActive: false,
            id: 2,
            isHasSub: false,
            subItems: [{
              name: '子导航CC',
              isActive: false,
              id: 13
            }]
          }]
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
    },
    // check all checkbox
    changeAll(e) {
      let _t = this;
      let allCheckBoxDom = _j('.all-checkbox').children('.el-checkbox__input');
      if (allCheckBoxDom.hasClass('is-checked')){
      // check all
       _t._changeAll(true);
        
      } else {
      // unCheck all
      _t._changeAll(false)
      }
    },
    // check all checkbox ==> unCheck all 
    _changeAll(isCheckAll) {
      let checkBoxs = _j('.options').find('.el-checkbox');
      if (isCheckAll) {
        if (checkBoxs.length > 0) {
          let tempItem = '', tempItemChil = '';
          for (let i = 0, len = checkBoxs.length; i < len; i++) {
              tempItem = _j(checkBoxs[i]);
            tempItemChil = tempItem.children('.el-checkbox__input');
              if (!tempItemChil.hasClass('is-checked')) {
                tempItem.click();
              }
          }
         var subItems = _j('.sub-options').find('.el-checkbox');
          let subItemTemp = '';
          for (var j = 0, len = subItems.length; j < len; j++) {
            subItemTemp = _j(subItems[j]);
            let subInputDom = subItemTemp.children('.el-checkbox__input');
            if (!subInputDom.hasClass('is-checked')) {
              subInputDom.click();
            }
          }
        }
      } else {
          if (checkBoxs.length > 0) {
          let tempItem = '', tempItemChil = '';
          var subItems = _j('.sub-options').find('.el-checkbox');
          for (let i = 0, len = checkBoxs.length; i < len; i++) {
              tempItem = _j(checkBoxs[i]);
            tempItemChil = tempItem.children('.el-checkbox__input');
            
              if (tempItemChil.hasClass('is-checked')) {
                tempItem.click();
              }
          }
          let subItemTemp = '';
          for (var j = 0, len = subItems.length; j < len; j++) {
            subItemTemp = _j(subItems[j]);
            let subInputDom = subItemTemp.children('.el-checkbox__input');
            if (subInputDom.hasClass('is-checked')) {
              subInputDom.click();
            }
          }
        }
      }
    },
    // hide or show sub menus
    hsCheckboxIcon(e) {
      let iconDom = _j(e.target);
      if (iconDom.hasClass('show')) {
        iconDom.html('&#xe622;')
        iconDom.siblings('.sub-options').slideUp();
        iconDom.removeClass('show');
        return;
      }
      iconDom.addClass('show');
      iconDom.html('&#xe620;')
      iconDom.siblings('.sub-options').slideDown();
    },
    optsItemsChange (e) {
      let dom = _j(e.target).parents('label') || _j(e.target)
      let checkDom = dom.children('.el-checkbox__input');
      let subDom = dom.siblings('.sub-options');
      let subCheckboxs = subDom.find('.el-checkbox');
      if (checkDom.hasClass('is-checked')) {
        // 选中
        if (subCheckboxs.length > 0) {
          let tempItem1 = '';
          for (let i = 0, len = subCheckboxs.length; i < len; i++) {
            tempItem1 = _j(subCheckboxs[i]);
           
            if (!tempItem1.hasClass('is-checked')) {
              tempItem1.click();
            }

          }
        }
       
      } else {
          // 取消选中
             // let subCheckboxs = subDom.find('.el-checkbox');
          if (subCheckboxs.length > 0) {
              let tempItem2 = '';
              for (let i = 0, len = subCheckboxs.length; i < len; i++) {
                tempItem2 = _j(subCheckboxs[i]);
                 var tempItemChil = tempItem2.children('.el-checkbox__input');
                if (tempItemChil.hasClass('is-checked')) {
                        tempItem2.click();
                }

              }
            }
        }
      }
  },
  mounted() {
    bus.$on('is-show-rm-pup', (id) => {
      console.log('接收到事件了？');
      console.log(id);
      this.isShowDialog = true;
    });
   
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