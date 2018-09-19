// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.
import ajax from '../src/assets/js/axiosManage.js'
import {
  Style,
  Toast,
  Loading,
  Button,
  IndexList,
  Slide,
  TabBar,
  Picker,
  CascadePicker,
  TabPanels,
  Input,
  Select,
  Upload,
  Dialog
} from 'cube-ui'
import App from './App'
import router from './router'
import mixins from '@/assets/js/mixins'
import store from './store'//单个store 的vuex   普通项目足够用按需引入

Vue.config.productionTip = false
Vue.use(mixins)
Vue.use(Button)
Vue.use(Toast)
Vue.use(Loading)
Vue.use(IndexList)
Vue.use(Slide)
Vue.use(Style)
Vue.use(TabBar)
Vue.use(Picker)
Vue.use(CascadePicker)
Vue.use(TabPanels)
Vue.use(Input)
Vue.use(Select)
Vue.use(Dialog)
Vue.use(Upload)
Vue.prototype.$ajax = ajax
window.$ajax = ajax

/* eslint-disable no-new */
// 导航进入前验证
router.beforeEach((to, from, next) => {
  // 联调用，临时种cookie
  // store.commit('setToken',"cecaef78737d9d919ae33457fa8ea494");
  // document.title = to.meta && to.meta.title || "加载中.."
  if(to.path == "/"){
     console.log(location.search)
      var path = ""
      var query = {},
        path = getQueryString("page") || "login";
        query = parseQuery(location.search.substring(1))
        // 百度 统计代码PV 分享页面的PV
        if(_hmt){
          _hmt.push(['_trackPageview', location.pathname + location.search]);
        }
        next()
        // router.push({path:'/'+path,query:query})
        
        window.location.href = location.origin+location.pathname+'#/'+path+location.search

        // Vue.$router.push({'path':'/'+path,"query":query})
        function parseQuery(query) {
          var reg = /([^=&\s]+)[=\s]*([^&\s]*)/g;
          var obj = {};
          while (reg.exec(query)) {
            obj[RegExp.$1] = RegExp.$2;
          }
          return obj;
        }
      function getQueryString(name) {
          var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
          var r = window.location.search.substr(1).match(reg);
          if (r === null) {
            var reg2 = /^.*?[?]/;
            var r2 = window.location.hash.replace(reg2, "")
            r = r2.match(reg);
          }

          if (r != null) return r[2];
          return null;
      }
    }else{
        if(to.path == "/login" || to.path == "/reg" || to.path == "/editPassword" || to.path == "/userRegProtocol"){
          store.commit('setToHref',store.state.toHref || "")
          store.commit('setTo',store.state.to|| "")
        }else{
          store.commit('setToHref',to.path)
          store.commit('setTo',to)
        }
        if(to.meta.isCancelValidate){
          // 如果这个值存在且为真  取消用户登录状态验证
          next()
        }else{
          
          if(store.state.token){
            // 如果token存在 默认登录
            next()
          }else{
            next()
            router.push({path:"/login"})

            // next()
          }
        }
    }
  
  // store.setToHref(to.path || "")
  
  console.log(store);  
 
})
// 导航进入后执行函数
router.afterEach(route => {
  document.title = route.meta && route.meta.title || "加载中.."
  // ...
  // 百度 统计代码PV
  if(_hmt){
    _hmt.push(['_trackPageview', '/#' + route.path ? ("/#" + route.path) : ""]);
  }
  console.log(store);
})
// 将VUE对象挂载到window 上 方便调用
window.Vue = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
