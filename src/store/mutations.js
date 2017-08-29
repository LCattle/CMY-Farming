import Vue from 'vue'

export default {
    GET_NAV: (state, { navData }) => {
        console.log('getNav-------------------');
        console.log(navData);
       state.navData = navData;
    }
}