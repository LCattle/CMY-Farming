<template>
    <el-row>
        <el-col :span="5">
            <h2 class="model-title">菜单管理</h2>
            <div class="btn-box">
                <el-button type="text" @click="showEditBox">
                    <i class="iconfont">&#xe763;</i>
                    <span>添加</span>
                </el-button>
                <el-button type="text">
                    <i class="iconfont">&#xe76c;</i>
                    <span>删除</span>
                </el-button>
            </div>
            <div class="show-menu-box">
                <div class="menu-box">
                    <div class="menu-box-root" @click="rootBoxClick($event)">
                        <i class="iconfont font-icon root-icon">&#xe76b;</i>
                        <span>根目录</span>
                    </div>
                    <ul class="menu-items">
                        <li class="menu-item">
                            <i class="iconfont font-icon menu-item-icon" @click="subItemsClick($event)">&#xe76b;</i>
                            <span class="sub-txt" @click="showEditBox">系统管理</span>
                            <ul class="sub-menu-box">
                                <li class="sub-menu-item" data-parent="" data-id="" @click="showEditBox">
                                    <i class="iconfont font-icon sub-menu-icon">&#xe781;</i>
                                    <span class="sub-item-txt">功能菜单管理</span>
                                </li>
                                <li class="sub-menu-item" @click="showEditBox">
                                    <i class="iconfont font-icon sub-menu-icon">&#xe781;</i>
                                    <span class="sub-item-txt">系统用户管理</span>
                                </li>
                                <li class="sub-menu-item" @click="showEditBox">
                                    <i class="iconfont font-icon sub-menu-icon">&#xe781;</i>
                                    <span class="sub-item-txt">系统角色管理 </span>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item">
                            <i class="iconfont font-icon menu-item-icon" @click="subItemsClick($event)">&#xe76b;</i>
                            <span class="sub-txt" @click="showEditBox">系统管理</span>
                            <ul class="sub-menu-box">
                                <li class="sub-menu-item" data-parent="" data-id="" @click="showEditBox">
                                    <i class="iconfont font-icon sub-menu-icon">&#xe781;</i>
                                    <span class="sub-item-txt">功能菜单管理</span>
                                </li>
                                <li class="sub-menu-item" @click="showEditBox">
                                    <i class="iconfont font-icon sub-menu-icon">&#xe781;</i>
                                    <span class="sub-item-txt">系统用户管理</span>
                                </li>
                                <li class="sub-menu-item" @click="showEditBox">
                                    <i class="iconfont font-icon sub-menu-icon">&#xe781;</i>
                                    <span class="sub-item-txt">系统角色管理 </span>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item">
                            <i class="iconfont font-icon menu-item-icon" @click="subItemsClick($event)">&#xe76b;</i>
                            <span class="sub-txt" @click="showEditBox">系统管理</span>
                            <ul class="sub-menu-box">
                                <li class="sub-menu-item" data-parent="" data-id="" @click="showEditBox">
                                    <i class="iconfont font-icon sub-menu-icon">&#xe781;</i>
                                    <span class="sub-item-txt">功能菜单管理</span>
                                </li>
                                <li class="sub-menu-item" @click="showEditBox">
                                    <i class="iconfont font-icon sub-menu-icon">&#xe781;</i>
                                    <span class="sub-item-txt">系统用户管理</span>
                                </li>
                                <li class="sub-menu-item" @click="showEditBox">
                                    <i class="iconfont font-icon sub-menu-icon">&#xe781;</i>
                                    <span class="sub-item-txt">系统角色管理 </span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </el-col>
        <el-col :span="8" v-if="this.isShowEdit">
            <h2 class="model-title">编辑菜单</h2>
            <div class="form-box">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="menu-edit-form">
                    <el-form-item label="菜单名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="父节点名称" prop="parentName">
                        <el-input v-model="ruleForm.parentName" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="菜单路径" prop="path">
                        <el-input v-model="ruleForm.path"></el-input>
                    </el-form-item>
                    <el-form-item label="菜单排序" prop="sore">
                        <el-input v-model="ruleForm.sore"></el-input>
                    </el-form-item>
                    <el-form-item label="菜单描述" prop="des">
                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                </el-form>
                <div class="form-btn-box">
                    <el-button type="primary">
                        <i class="iconfont">&#xe79f;</i>
                        保存
                    </el-button>
                    <el-button type="primary" @click="hideEditBox">
                        <i class="iconfont">&#xe767;</i>
                        取消
                    </el-button>
                </div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import _j from 'jquery';
export default {
    data() {
        return {
            ruleForm: {
                name: '',
                parentName: '',
                path: '',
                sore: '',
                desc: ''
            },
            isShowEdit: false,
            rules: {
                name: [
                    { required: true, message: '菜单名称', trigger: 'blur' }
                ],
                path: [
                    { required: true, message: '请输入菜单路径', trigger: 'blur' }
                ],
                sore: [
                    { required: true, message: '请输入菜单排序', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        hideEditBox() {
            this.isShowEdit = false;
        },
        showEditBox() {
            this.isShowEdit = true;
        },
        rootBoxClick(e) {
            var targetDom = _j(e.currentTarget);
            var menuBoxDom = _j('.menu-box');
            if (targetDom.hasClass('nc-hide')) {
                targetDom.removeClass('nc-hide');
                 targetDom.children('i').html('&#xe76b;');
                menuBoxDom.animate({
                    'height': '600px'
                }, 300, function() {
                  
                });
                return;
            }
            targetDom.addClass('nc-hide');
            targetDom.children('i').html('&#xe762;');
           menuBoxDom.animate({
                'height': '30px'
            }, 300, function() {
                menuBoxDom.css({
                    'overflow': 'hidden'
                });
            });

        },
        subItemsClick(e) {
            var iconDom = _j(e.currentTarget);
            var subMenuBoxDom = iconDom.siblings('.sub-menu-box');
            if (iconDom.hasClass('nc-hide')) {
                subMenuBoxDom.slideDown(200);
                iconDom.html('&#xe76b;');
                iconDom.removeClass('nc-hide');
                return;
            }
            iconDom.addClass('nc-hide');
            iconDom.html('&#xe762;');
            subMenuBoxDom.slideUp(200);
        }
    }
}
</script>
<style lang="scss">
.model-title {
    width: 97%;
    text-align: left;
    font-size: 16px;
    font-weight: 400;
    margin-left: 20px;
    margin-top: 20px;
}

.menu-box {
    height: auto;
}

.btn-box {
    width: 97%;
    text-align: left;
    margin-left: 20px;
}

.show-menu-box {
    width: 300px;
    height: 600px;
    max-height: 600px;
    overflow-y: auto;
    margin-left: 20px;
    border: 1px solid #ccc;
    .menu-box-root {
        width: 95%;
        margin: 0px auto;
        text-align: left;
        height: 30px;
        line-height: 30px;
        cursor: pointer;
    }
    .font-icon {
        cursor: pointer;
    }
    .menu-item {
        width: 90%;
        margin-left: 20px;
        text-align: left;
        cursor: pointer;
    }
    .sub-txt:hover {
        color: #ccc;
    }
    .sub-menu-box {
        width: 90%;
        margin-left: 20px;
        text-align: left;
    }
    .sub-menu-item:hover {
        color: #ccc;
    }
}
.hide-menu-box{
    height: 30px;
    overflow: hidden;
}
.form-box {
    margin-top: 36px;
}
</style>