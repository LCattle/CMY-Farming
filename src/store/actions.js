import { fetchGetNav, fetchGetSubNavById, fetchLogin  } from './../fetch/api'

export default {
    FETCH_GET_NAV: ({ commit, state }) => {
        return fetchGetNav(state).then((navData)=> {
            commit ('GET_NAV', { navData })
        }) 
    },
    FETCH_SUBNAV_BY_ID: ({ commit, state }, idx) => {
        console.log('FETCH_SUBNAV_BY_ID id 有吗？');
        console.log(idx);
        return fetchGetSubNavById(idx).then ((subNavData) => {
            commit ('GET_SUB_NAV', {subNavData});
        })
    }
}