<template>
    <div>
        <el-row class="header">
            <el-col :span="8">
                <div class="logo-box">
                    <span class="logo-icon">
                        <i class="el-icon-menu"></i>
                    </span>
                    <span class="logo-txt">春沐源农业管理系统</span>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="nav-box">
                    <el-menu theme="dark" class="nav-items" :default-active="activeIndex" mode="horizontal">
                        <el-menu-item class="nav-item" index="1">Home</el-menu-item>
                        <el-submenu class="nav-item" index="2">
                            <template slot="title" class="sub-item-title">news</template>
                            <el-menu-item index="2-1">new1</el-menu-item>
                            <el-menu-item index="2-2">new2</el-menu-item>
                            <el-menu-item index="2-3">new3</el-menu-item>
                        </el-submenu>
                        <el-menu-item class="nav-item" index="3">products</el-menu-item>
                        <el-menu-item class="nav-item" index="4">activity</el-menu-item>
                        <el-menu-item class="nav-item" index="5">about</el-menu-item>
                    </el-menu>
                </div>
            </el-col>
            <el-col :span="8" class="nav-btn-box">
                <el-button class="nav-btn">sign in</el-button>
                <el-button class="nav-btn">sign out</el-button>
            </el-col>
        </el-row>
        <el-row class="tac">
            <el-col :span="3" class="left-nav-box">
                <el-menu default-active="2" class="el-menu-vertical-demo left-nav-reset-bg reset-h" @open="handleOpen" @close="handleClose">
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>导航一
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>导航二
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-setting"></i>导航三
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-document"></i>导航四
                    </el-menu-item>
                    <el-menu-item index="5">
                        <i class="el-icon-star-on"></i>导航五
                    </el-menu-item>
                    <el-menu-item index="6">
                        <i class="el-icon-upload2"></i>导航六
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import $ from 'jquery';
export default {
    data() {
        return {
            activeIndex: '1'
        }
    },
    methods: {
        handleOpen() {

        },
        handleClose() {

        }

    },
    mounted() {
        var winH = $(window).height();
        var headerH = $('.header').height();
        var h = winH - headerH;
        $('.reset-h').css({
            'height': h + 'px'
        });
        $(window).resize(function() {
            var winH = $(window).height();
            var headerH = $('.header').height();
            var h = winH - headerH;
            $('.tac').css({
                'height': h + 'px'
            });
            $('.reset-h').css({
                'height': h + 'px'
            });
        });
    }
}
</script>
<style scoped>
.header {
    width: 100%;
    height: 50px;
    background: #35404d;
}

.logo-box,
.nav-box {
    width: 100%;
    height: 50px;
}

.logo-box .logo-txt,
.logo-box .logo-icon {
    color: #fff;
    font-size: 18px;
    line-height: 50px;
    text-indent: 20px;
}

.logo-box {
    text-align: left;
}

.nav-items {
    height: 50px;
    background-color: #35404d;
}

.nav-items .nav-item {
    height: 50px;
    line-height: 50px;
}

.el-menu--horizontal .el-submenu .el-submenu__title {
    height: 50px;
    line-height: 50px;
}

.nav-btn-box {
    text-align: right;
}

.nav-btn-box .nav-btn {
    margin-top: 7px;
    background-color: #35404d;
    color: #fff;
}

.nav-btn-box .nav-btn:last-child {
    margin-right: 170px;
}

.left-nav-box {
    height: 100%;
    overflow: hidden;
}

.left-nav-reset-bg {

    background-color: #35404d;
}

.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active,
.el-menu-item.is-active {
    color: #20a0ff;
}
</style>

