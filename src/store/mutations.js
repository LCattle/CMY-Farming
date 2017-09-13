import Vue from 'vue'

export default {
    GET_NAV: (state, { navData }) => {
        console.log('getNav-------------------');
        console.log(navData);
       state.navData = navData;
    },
    GET_SUB_NAV: (state, { subNavData }) => {
        console.log('get sub nav=========================');
        console.log(subNavData);
        state.subNavData = subNavData;
    },
    GET_EDIT_MENU: (state, { menuData }) => {
        console.log('get edit menu=======================');
        console.log(menuData);
        state.menuData = menuData;
    }
}