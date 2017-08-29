import Vue from 'vue'

/*export function fetch(url, type, params) {
    return new Promise((resolve, reject) => {
        Vue.axios[type](url, params).then = (res => {
            resolve(res.data)
        }).catch = (err => {
            reject(err)
        })
    })
};

export default {
    axiosFetch (url, type, params) {
        return fetch(url, type, params);
    }
}
*/
export function fetchHomePage () {
     return Vue.axios.get('http://localhost:3000/page-data/index-all-data')
}

export function fetchGetNav () {
    return Vue.axios.get('http://localhost:3000/page-data/product-detail-data')
}