import { fetchAllRoles } from './../../fetch/api'

let state = {
    roleDatas: {}
}

let actions = {
    GET_ALL_ROLES: ({ commit, state }, opts) => {
        return fetchAllRoles(opts).then(roles => commit('GET_ALL', { roles }))
    }
}

let mutations = {
    GET_ALL: (state, { roles }) => {
        state.roleDatas = roles.data;
    }
}

let getters = {
    getAllRoles(state) {
        return state.roleDatas;
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}