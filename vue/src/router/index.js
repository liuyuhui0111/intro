import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const demo = r => require.ensure([], () => r(require('@/view/demo/demo.vue')), 'demo')

Vue.use(Router)

export default new Router({
  routes: [
    // 路由中转
    {
      path: '/demo1',
      name: 'demo',
      component: demo,
      meta: {
        title: "加载中...",
        isCancelValidate: true
      }, //isCancelValidate 是否取消登录校验
    },
  ]
})
