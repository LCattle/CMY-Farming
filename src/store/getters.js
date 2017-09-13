export default {
    getNavData (state) {
        return state.navData;
    },
    getSubNavData (state) {
        return state.subNavData;
    },
    getEditMenu(state) {
        return state.menuData.data;
    }
}