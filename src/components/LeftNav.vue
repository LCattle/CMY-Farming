<template>
    <el-menu default-active="2" class="el-menu-vertical-demo left-nav-reset-bg left-nav-items" @open="handleOpen" @close="handleClose">
        <el-menu-item index="1">
            <i class="el-icon-menu"></i>导航一
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>导航二
        </el-menu-item>
        <el-submenu index="1" class="left-nav-reset-bg ">
            <template slot="title" v-bind:style="styleH">
                <i class="el-icon-message" ></i>导航三</template>
            <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
                <el-menu-item index="1-4">选项4</el-menu-item>
                <el-menu-item index="1-5">选项5</el-menu-item>
                <el-menu-item index="1-6">选项6</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3" @click="getNavData">
            <i class="el-icon-setting"></i>导航四
        </el-menu-item>
        <el-menu-item index="4" v-on:click="getSubNavById">
            <i class="el-icon-document"></i>导航五
        </el-menu-item>
        <el-menu-item index="5">
            <i class="el-icon-star-on"></i>导航六
        </el-menu-item>
        <el-menu-item index="6" @click="toNavSix">
            <i class="el-icon-upload2"></i>导航七
        </el-menu-item>
    </el-menu>
</template>
<script>
import $ from 'jquery';
import { mapGetters } from 'vuex'
import store from './../store/index'
function fetchNav(store) {
    return store.dispatch('FETCH_GET_NAV');
}
function fetchSubNavById(store, idx) {
    console.log('刚进来???---' + idx);
    return store.dispatch('FETCH_SUBNAV_BY_ID', {
        id: idx
    });
}
export default {
    name: 'LeftNav',
    store,
    data() {
        return {
            styleH: {
                height: '40px',
                lineHeight: '40px'
            }
        }
    },
    computed: mapGetters({
        navData: 'navData',
        subNavData: 'subNavData'
    }),
    mounted() {
        var docH = $(document).height();
        var headerH = $('.header').height();
        var h = docH - headerH;
        $('.left-nav-items').css({
            'height': h + 'px'

        });

    },
    methods: {
        handleOpen: function() {
        },
        handleClose: function() {

        },
        getNavData: function() {
            fetchNav(this.$store).then(() => {
                console.log('点击导航有数据吗？');
                console.log(this.$store);
                this.navDatas = this.$store.getters.getNavData;
                console.log(this.navDatas);
            })
        },
        getSubNavById: function() {
            console.log('yes or no ?');
            fetchSubNavById(this.$store, 2).then(() => {
                console.log('获取子导航有吗？');
                console.log(this.$store);
            });
        },
        toNavSix: function() {
            this.$router.push('/createuser')
        }

    }
}
</script>
<style lang="scss" scoped>
.left-nav-reset-bg, .left-nav-reset-bg .el-menu {

    background-color: #35404d;
}

.left-nav-items {
    border-radius: 0;
}

.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active,
.el-menu-item.is-active {
    color: #20a0ff;
}

.el-menu--horizontal .el-submenu .el-submenu__title {
    height: 50px;
    line-height: 50px;
}
.el-menu-item, .el-submenu__title, .el-submenu .el-submenu__title{
    height: 40px !important;
    line-height: 40px !important;
}
</style>
