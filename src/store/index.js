import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import HomePage from './modules/homepage'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        navData: {},
        subNavData: {}
    },
    actions,
    mutations,
    getters,
    modules: {
       HomePage
    }
})
