<template>
  <el-dialog title="角色信息" :visible.sync="this.isShowDialog" >
    <el-form :model="role">
      <el-form-item label="角色名称" :label-width="formLabelWidth">
        <el-input v-model="role.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="角色状态" :label-width="formLabelWidth">
        <el-select v-model="role.region" placeholder="请选择">
          <el-option label="有效" value="1"></el-option>
          <el-option label="无效" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="角色描述" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="role.desc"></el-input>
      </el-form-item>
      <div class="el-form-item select-box ">
        <label class="el-form-item__label" style="width: 100px;"> 菜单功能授权 </label>
        <div class="el-form-item__content select-menu-box" style="margin-left: 100px">
          <div class="el-input">
            <input type="text" disabled autocomplete="off" placeholder="请选择功能" style="cursor:pointer;" rows="2" validateevent="true" class="el-input__inner">
            <i class="iconfont arrow-icon">&#xe792;</i>
          </div>
          <div class="select-bar" v-for="(item, index) in this.rolesData" :key="item.id">
            <i class="iconfont hs-icon">&#xe622;</i>
            <label class="el-checkbox root-el-checkbox" v-bind:data-id="item.id" @click.prevent="changeAll($event)">
              <span class="el-checkbox__input root-checkbox">
                <span class="el-checkbox__inner"></span>
                <input type="checkbox" class="el-checkbox__original" value="">
              </span>
              <span class="el-checkbox__label">{{ item.name }}</span>
            </label>
            <ul class="options">
              <li class="option-item" v-for="(menu, index) in item.subItems" :key="menu.id">
                <i v-if="menu.isHasSub" class="iconfont hs-icon" @click="hsCheckboxIcon">&#xe622;</i>
                <label class="el-checkbox item-el-checkbox" v-bind:data-id="menu.id" @click.prevent="itemSelect($event)" >
                  <span class="el-checkbox__input item-checkbox">
                    <span class="el-checkbox__inner"></span>
                    <input type="checkbox" class="el-checkbox__original" value="">
                  </span>
                  <span class="el-checkbox__label">{{ menu.name }}</span>
                </label>
                <ul class="sub-options hide" v-if="menu.isHasSub" >
                  <li class="sub-opt-item" v-for="(sub, index) in menu.subItems" :key="sub.id">
                    <label class="el-checkbox sub-el-checkbox" v-bind:data-id="sub.id" @click.prevent="subSelect($event)">
                      <span class="el-checkbox__input span-checkbox" >
                        <span class="el-checkbox__inner"></span>
                        <input type="checkbox" class="el-checkbox__original" value="">
                      </span>
                      <span class="el-checkbox__label">{{ sub.name }}</span>
                    </label>
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
import { mapGetters } from 'vuex'
import _j from 'jquery'
import store from './../store/index'
function addRoles(store) {
  return store.dispatch('ADD_ROLES');
}
function fetchRoles(store, token) {
    return store.dispatch('FETCH_GET_NAV', token);
}
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  store,
  data() {
    return {
      formLabelWidth: '100px',
      isShowDialog: false,
      checkAll: false,
      token: localStorage.token,
      role: {
        name: '',
        region: '',
        desc: ''
      },
      rolesData: {},
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
  computed: mapGetters({
    getRoleData: 'navData'
  }),
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
      let dom = _j(e.currentTarget);
      let rootCheckBoxDom = dom.find('.root-checkbox');
      let itemCheckBoxDom = _j('.options').find('.item-el-checkbox')
        let tempItem = '';
      if (dom.hasClass('checked')) {
        dom.removeClass('checked')
        rootCheckBoxDom.removeClass('is-checked');
      for (let i = 0, len = itemCheckBoxDom.length; i < len; i++) {
        tempItem = _j(itemCheckBoxDom[i]);
        if (tempItem.hasClass('checked')) {
           tempItem.click();
        }
      }
        return;
      }
      dom.addClass('checked');
      rootCheckBoxDom.addClass('is-checked');
      for (let i = 0, len = itemCheckBoxDom.length; i < len; i++) {
        tempItem = _j(itemCheckBoxDom[i]);
        if (!tempItem.hasClass('checked')) {
           tempItem.click();
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
    // level two checked or unchecked
    itemSelect (e) {
        let dom = _j(e.currentTarget);
        console.log(e);
        let itemCheckBoxDom = dom.children('.item-checkbox');
        let subCheckboxs = dom.siblings('ul').find('.sub-el-checkbox');
        if (itemCheckBoxDom.hasClass('is-checked')) {
          dom.removeClass('checked');
          itemCheckBoxDom.removeClass('is-checked');
          let tempSubItem = '';
          for (let i = 0, len = subCheckboxs.length; i < len; i++) {
            tempSubItem = _j(subCheckboxs[i]);
            if (tempSubItem.hasClass('checked')) {
              tempSubItem.removeClass('checked');
              tempSubItem.children('.span-checkbox').removeClass('is-checked');
            }
          }
          return;
        }
       dom.addClass('checked');
       itemCheckBoxDom.addClass('is-checked');
       let tempSubItem = '';
          for (let i = 0, len = subCheckboxs.length; i < len; i++) {
            tempSubItem = _j(subCheckboxs[i]);
            if (!tempSubItem.hasClass('checked')) {
              tempSubItem.addClass('checked')
              tempSubItem.children('.span-checkbox').addClass('is-checked')
            }
          }
        
    },
    subSelect(e){
      let dom = _j(e.currentTarget);
      let checkBoxDom = dom.children('.span-checkbox');
      if (checkBoxDom.hasClass('is-checked')) {
        dom.removeClass('checked');
        checkBoxDom.removeClass('is-checked');
        return;
      }
      checkBoxDom.addClass('is-checked');
      dom.addClass('checked');
    }
  },
  
  mounted() {
    bus.$on('is-show-rm-pup', (id) => {
      console.log('接收到事件了？');
      console.log(id);
      this.isShowDialog = true;
      fetchRoles(this.$store, this.token).then(() => {
        console.log('导航有数据吗？');
        var tempData = this.$store.getters.getNavData.data.resultObj;
        var tempRoles = tempData;
        this.rolesData = tempRoles;
        console.log(this.rolesData);
            
    })
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
.el-dialog--small{
  width: 30%;
}
.el-form-item__content{
  text-align: left;
}
</style>