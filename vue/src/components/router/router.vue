<template>
  <div class="page"></div>
</template>
<script>
// import {getQueryString} from '@/assets/js/function.js'
  export default {
  /*
  *2018年7月5日09:53:08---刘宇辉
  *中间页 根据url ?page 的值来跳转对应路由
  *微信分享出去的页面是index.html?page=login
  *然后在这里转化成为index.html/#/login?page=login
  */
    

    data(){
      return {
        name:"page"
      }
    },
    mounted(){
      this.init()
    },
    methods:{
      init(){

      },
    }
  }
</script>
<style scoped>
  
</style>