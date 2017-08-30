<template>
    <el-menu default-active="2" class="el-menu-vertical-demo left-nav-reset-bg left-nav-items" @open="handleOpen" @close="handleClose">
        <el-menu-item index="1">
            <i class="el-icon-menu"></i>导航一
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>导航二
        </el-menu-item>
        <el-menu-item index="3" @click="getNavData">
            <i class="el-icon-setting"></i>导航三
        </el-menu-item>
        <el-menu-item index="4" v-on:click="getSubNavById">
            <i class="el-icon-document"></i>导航四
        </el-menu-item>
        <el-menu-item index="5">
            <i class="el-icon-star-on"></i>导航五
        </el-menu-item>
        <el-menu-item index="6" @click="toNavSix">
            <i class="el-icon-upload2" ></i>导航六
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
    /*return store.dispatch('FETCH_SUBNAV_BY_ID', idx);*/
}
export default {
    name: 'LeftNav',
    store,
    data() {
        return {

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
        toNavSix:function (){
            this.$router.push('/createuser')
        }

    }
}
</script>
<style lang="scss" scoped>
.left-nav-reset-bg {

    background-color: #35404d;
}
.left-nav-items{
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
</style>
