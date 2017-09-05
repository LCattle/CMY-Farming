import Vue from 'vue'
import Fetch from './fetchPost'
export function fetchHomePage () {
     return Vue.axios.get('http://localhost:3000/page-data/index-all-data')
}

export function fetchGetNav () {
    return Vue.axios.get('http://localhost:3000/page-data/product-detail-data')
}

export function fetchGetSubNavById (idx) {
    console.log('获取子导航！');
    //return Vue.axios.get('http://localhost:3000/page-data/index-all-data?id=' + idx.id)
    //return Vue.axios.post('http://localhost:3000/page-data/index-all-data', {'id': idx.id})
    return Fetch.FetchPost('tpost', {'id': idx.id});
}