import axios from 'axios'
import {
	getCookie,
	getItem
} from '@/assets/js/function.js'
/*
*2018年6月1日14:45:52---刘宇辉
*封装axios
*/
let baseURL = window.CONFIG.DEV ? window.CONFIG.DEV_API : window.CONFIG.API
let axiosInstance = axios.create();
axiosInstance.defaults.timeout = 1000 * 10;
axiosInstance.defaults.headers.post['Content-Type'] =   'application/json;charset=utf-8';
axiosInstance.defaults.headers.get['Content-Type'] =  'application/json;charset=utf-8';
axiosInstance.defaults.baseURL = baseURL
// axiosInstance.defaults.headers.jianghu_auth_h5_token = getCookie("token") || getItem("token") || ""

//添加一个请求拦截器
axiosInstance.interceptors.request.use(function(config){
  return config;
},function(err){
  return Promise.reject(err);
});
//添加一个响应拦截器
axiosInstance.interceptors.response.use(function(res){
  //在这里对返回的数据进行处理
  return res;
},function(err){
  return Promise.reject(err);
})

export default axiosInstance