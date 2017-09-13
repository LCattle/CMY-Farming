import { fetchGetNav, fetchGetSubNavById, fetchEditMenu  } from './../fetch/api'

export default {
    FETCH_GET_NAV: ({ commit, state }, token) => {
        return fetchGetNav(state, token).then((navData)=> {
            commit ('GET_NAV', { navData })
        }) 
    },
    FETCH_SUBNAV_BY_ID: ({ commit, state }, idx) => {
        console.log('FETCH_SUBNAV_BY_ID id 有吗？');
        console.log(idx);
        return fetchGetSubNavById(idx).then ((subNavData) => {
            commit ('GET_SUB_NAV', {subNavData});
        })
    },
    FETCH_EDIT_MENU: ({ commit, state }) => {
        console.log('FETCH EDIT MENU');
        return fetchEditMenu(state).then((menuData) => {
            commit ('GET_EDIT_MENU', { menuData });
        })
    }
}