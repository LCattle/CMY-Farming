import Vue from 'vue'
import qs from 'qs'
//import Fetch from './fetchPost'
export function fetchHomePage () {
     return Vue.axios.get('/api/index-all-data')
     //return Vue.axios.get('http://localhost:3000/page-data/index-all-data')
}

export function fetchGetNav (token) {
    return Vue.axios.post('/api/test-post', qs.stringify({
        'token': token
    }))
}

export function fetchGetSubNavById (idx) {
    console.log('获取子导航！');
    return Vue.axios.post('/api/test-post', {'id': idx.id})
}

export function fetchLogin (opt) {
    console.log('登录能获取到数据？');
    console.log(opt)
   return Vue.axios.post('http://10.1.2.151/ctower-mall-c/sys/login/login.do', qs.stringify({
        'id': opt.id,
        'pwd': opt.pwd
    }));
}

export function fetchEditMenu() {
    return Vue.axios.post('/api/get-menu-edit')
}