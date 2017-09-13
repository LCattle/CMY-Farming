<template>
    <el-dialog title="用户信息" :visible.sync="isShowDailog" class="edit-user-dialog">
        <el-form :inline="true" :model="editUserInfo" label-width="85px" class="edit-userInfo-form-inline">
            <el-form-item class="edit-form-item" label="登录账号">
                <el-input v-model="editUserInfo.name" placeholder="登录账号"></el-input>
            </el-form-item>
            <el-form-item class="edit-form-item" label="用户名称">
                <el-input v-model="editUserInfo.name" placeholder="用户名称"></el-input>
            </el-form-item>
            <el-form-item class="edit-form-item" label="性别">
                <el-radio-group v-model="radio2">
                <el-radio :label="3">男</el-radio>
                <el-radio :label="6">女</el-radio>
            </el-radio-group>
            </el-form-item>       
            <el-form-item class="edit-form-item" label="电话">
                <el-input v-model="editUserInfo.name" placeholder="电话"></el-input>
            </el-form-item>
            <el-form-item class="edit-form-item" label="工号">
                <el-input v-model="editUserInfo.name" placeholder="工号"></el-input>
            </el-form-item>
            <el-form-item class="edit-form-item" label="状态">
                 <el-select v-model="optionsVal" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                </el-select>
            </el-form-item >
            <el-form-item class="edit-form-item" label="头像">
                 <el-upload
                class="avatar-uploader"
                action="http://loclahost:7878/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            </el-form-item>
            <el-form-item class="edit-form-item" label="二维码图片">
                <el-upload
                class="avatar-uploader"
                action="http://loclahost:7878/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            </el-form-item> 
            <el-form-item class="edit-form-item edit-form-role" label="角色">
                <el-checkbox-group v-model="checkLists">
                    <el-checkbox  v-for="(item, index) in checkBoxs" :label="item.value" :true-label="item.id" :key="index" @change="cheangeRoleModle(item.value, $event)">{{ item.value }}</el-checkbox>
                </el-checkbox-group>
            </el-form-item>
           
        </el-form>
        <div class="edit-btn-box">
            <el-button type="primary">
                <i class="iconfont">&#xe7ca;</i>
                <span>编辑</span>
            </el-button>
            <el-button type="primary">
                <i class="iconfont ">&#xe767;</i>
                <span>取消</span>
            </el-button>
        </div>
    </el-dialog>
</template>
<script>
import bus from './../eventBus' 
import _j  from 'jquery'
export default {
    data () {
        return {
            isShowDailog: false,
            formLabelWidth: '120px',
            checkLists: ['养牛的', '养鸡的'],
            checkBoxs: [
                {
                    id:1,
                    value: '养牛的'
                },
                {
                    id:2,
                    value: '养鸡的'
                },
                {
                    id:3,
                    value: '养鸭的'
                },
                {
                    id:4,
                    value: '养狗的'
                },
                {
                    id:5,
                    value: '全养的'
                },
            ],
            options: [
                {
                    value: '有效',
                    label: '有效'
                },
                {
                    value: '无效',
                    label: '无效'
                }
            ],
            optionsVal: '',
            imageUrl: '',
            radio2: 3,
            editUserInfo: {

            }
        }
    },
    methods:{
        handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      cheangeRoleModle(val, e) {
       
      }
    },
    mounted() {
        bus.$on('show-edit-dialog', (id) =>{
            console.log('接收到事件了，ID为：' + id);
            this.isShowDailog = true;

        })
    }
}
</script>
<style lang="scss">
.edit-user-dialog .el-dialog{
    width: auto;
}
.edit-userInfo-form-inline{
    width: 630px;
}
.edit-form-item{
    width: 302px;
    text-align: left;
}
.edit-form-role{
    width: 100%;
    label.el-form-item__label{
        width: 85px;
        height: 100%;
        text-align: center;
    }
    label.el-checkbox{
        margin-left: 0px;
        width: 90px;
    }
}
.avatar-uploader-icon{
    width: 150px;
    height: 150px;
    line-height: 150px;
}
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>