import Vue from 'vue'
export function fetchHomePage () {
     return Vue.axios.get('http://localhost:3000/page-data/index-all-data')
}

export function fetchGetNav () {
    return Vue.axios.get('http://localhost:3000/page-data/product-detail-data')
}

export function fetchGetSubNavById (idx) {
    return Vue.axios.get('http://localhost:3000/page-data/index-all-data?id=' + idx.id)
}