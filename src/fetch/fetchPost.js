import Vue from 'vue';

var FetchPost =  function(url, data) {
    let config = {
        url: url,
        params: data,
        timeout: 5000,
       // contentType: "application/json",
        headers: {
              'Content-Type': 'application/json;charset=utf-8',
              'Access-Control-Allow-Headers': 'X-Requested-With',
             'Access-Control-Allow-Origin': '*'
        },
        baseURL: 'http://localhost:3000/test-post/',
        method: 'POST',
        data: data,
        //withCredentials: true,
        transformResponse: [function (result) {
            return result;
        }],
        responseType: 'JSON'
    }
    console.log('--------------------------------:' );
    console.log(config)
    return Vue.axios.post(url, data, config);
}

export default {
    FetchPost
}