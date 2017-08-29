import { fetchGetNav } from './../fetch/api'

export default {
    FETCH_GET_NAV: ({ commit, state }) => {
        return fetchGetNav(state).then((navData)=> {
            commit ('GET_NAV', { navData })
        }) 
    }
}