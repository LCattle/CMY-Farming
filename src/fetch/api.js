import Vue from 'vue'
import qs from 'qs'
//import Fetch from './fetchPost'
export function fetchHomePage () {
     return Vue.axios.get('/api/index-all-data')
     //return Vue.axios.get('http://localhost:3000/page-data/index-all-data')
}

export function fetchGetNav (token) {
    console.log('有token吗？');
    console.log(token);
    return Vue.axios.post('http://10.1.2.151/ctower-mall-c//sys/login/loadMenus.do', qs.stringify({
        'loginedtoken': token
    }))
   /* return Vue.axios.post('/api/test-post', qs.stringify({
        'token': token
    }))*/
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
   // return Vue.axios.post('/api/get-menu-edit')
   return Vue.axios.post('http://10.1.2.151/ctower-mall-c/sys/menumanagementMenus.do?parentId=-1')
}

export function fetchUpdateMenu(opts) {
    console.log('更新菜单这个是什么？');
    console.log(opts)
    return Vue.axios.post('http://10.1.2.151/ctower-mall-c/sys/menumanagementUpdateNode.do', qs.stringify({
        ids: opts.id,
        menuname: opts.name,
        parentids: opts.parentId,
        menuaction: opts.path,
        menusort: opts.sore,
        menudesc: opts.desc,
        menustart: 1,
        loginedtoken: opts.token
    }));
}
export function fetchAddMenu(opts) {
    console.log('更新菜单这个是什么？');
    console.log(opts)
    return Vue.axios.post('http://10.1.2.151/ctower-mall-c/sys/menumanagementNewNode.do', qs.stringify({
        menuname: opts.name,
        parentids: opts.parentId,
        menuaction: opts.path,
        menusort: opts.sore,
        menudesc: opts.desc,
        menustart: 1,
        loginedtoken: opts.token
    }));
}
export function fetchDeleteMenu(opts) {
    console.log('删除菜单这个是什么？');
    console.log(opts)
    return Vue.axios.post('http://10.1.2.151/ctower-mall-c/sys/menumanagementDeleteNode.do', qs.stringify({
        ids: opts.id,
        menuname: opts.name,
        parentids: opts.parentId,
        menuaction: opts.path,
        menusort: opts.sore,
        menudesc: opts.desc,
        loginedtoken: opts.token
    }));
}