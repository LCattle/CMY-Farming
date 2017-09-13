import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import HomePage from './modules/homepage'
import Login from './modules/login'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        navData: {},
        subNavData: {},
        isShowDialog: null
    },
    actions,
    mutations,
    getters,
    modules: {
       HomePage,
       Login
    }
})
