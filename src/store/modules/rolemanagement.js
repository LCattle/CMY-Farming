import { fetchAllRoles, fetchDelByIds } from './../../fetch/api'

let state = {
    roleDatas: {},
    delRoleData: {},
    addRole: {}
}

let actions = {
    GET_ALL_ROLES: ({ commit, state }, opts) => {
        return fetchAllRoles(opts).then(roles => commit('GET_ALL', { roles }))
    },
    DELETE_ROLE_BY_ID: ({ commit, state }, opts) =>　{
        return fetchDelByIds(opts).then( roles => commit ('Del_ROLES_BYID', { roles }) )
    },
    ADD_ROLES: ( { commit, state } ) => {
        return addRoles(opts).then(role => commit('ADD_ROLE', { role }))
    }
}

let mutations = {
    GET_ALL: (state, { roles }) => {
        state.roleDatas = roles.data;
    },
    Del_ROLES_BYID: ( state, { roles }) => {
        state.delRoleData = roles.data;
    },
    ADD_ROLE: ( state, { role } ) => {
        state.addRole =  role.data;
    }
}

let getters = {
    getAllRoles(state) {
        return state.roleDatas;
    },
    delRoles(state){
        return state.delRoleData;
    },
    addRoles( state ){
        return state.addRole;
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}