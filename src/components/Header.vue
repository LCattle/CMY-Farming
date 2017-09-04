<template>
    <header class="header-box">
        <el-row class="header">
            <el-col :span="8">
                <div class="logo-box">
                    <span class="logo-icon">
                        <i class="el-icon-menu"></i>
                    </span>
                    <span class="logo-txt" @click="toIndex">春沐源农业管理系统</span>
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
                <el-button class="nav-btn" @click="sendLogin">sign in</el-button>
                <el-button class="nav-btn">sign out</el-button>
            </el-col>
        </el-row>
    </header>
</template>
<script>
export default {
    name: 'FHeader',
    data() {
        return {
            activeIndex: '1'
        }
    },
    methods: {
        toIndex: function (){
            this.$router.push('/')
        },
        sendLogin: function () {
            this.$router.push('/login')

        }
    }
}
</script>
<style lang="scss" scoped>
.header-box{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 9;
}
.header {
    width: 100%;
    height: 60px;
    background: #35404d;
}

.logo-box,
.nav-box {
    width: 100%;
    height: 60px;
}

.logo-box .logo-txt,
.logo-box .logo-icon {
    color: #fff;
    font-size: 18px;
    line-height: 60px;
    text-indent: 20px;
}

.logo-box {
    text-align: left;
}

.nav-items {
    height: 60px;
    background-color: #35404d;
}

.nav-items .nav-item {
    height: 60px;
    line-height: 60px;
}



.nav-btn-box {
    text-align: right;
}

.nav-btn-box .nav-btn {
    margin-top: 12px;
    background-color: #35404d;
    color: #fff;
}

.nav-btn-box .nav-btn:last-child {
    margin-right: 170px;
}
</style>

