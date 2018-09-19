<template>
  <div id="app">
    <router-view/>
    <div class="common_loading">
      <cube-loading></cube-loading>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {

    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
      // 全局引入微信config.js
      // if(window.location.hash.indexOf("regpage") != -1){
      //   return
      // }
        if(!(this.getOpenId || this.getToken)){
          this.authorizationFn()
        }
    },
   
  }
}
</script>

<style>
html{
  height:100%;
}
body{
  height:100%;
}
img{ pointer-events: none; }
img.canClick{
  pointer-events:auto;
}
.page{
  /*background: #fff;*/
  position: relative;
  max-width: 100%;
  overflow-x: hidden;
  min-height: 100%;
  overflow-y: auto;
}
#app {
  font-family: 'PingFangSC-Regular','Microsoft YaHei', Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #888;
  height: 100%;
  min-height:100%;
  /* background: #fff; */
}
input{
  font-family: 'PingFangSC-Regular','Microsoft YaHei', Helvetica, Arial, sans-serif;
}
input::-webkit-input-placeholder {
color: #BBBBBB;
}
input:-ms-input-placeholder { /*IE10+*/ 
color: #BBBBBB;
}
input:-moz-placeholder { /*Firefox4-18*/
color: #BBBBBB;
}
input::-moz-placeholder { /*Firefox19+*/
color: #BBBBBB;
}

.common_loading{
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  -o-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  z-index: 999999;
}

.common_btn_sub{
  display: block;
    width: 310px;
    height: 45px;
    line-height: 45px;
  font-size: 16px;
    color: #1C0F00;
    background-image: linear-gradient(-134deg, #BF965A 0%, #EDCE97 100%);
    border-radius: 100px;
    text-align: center;
}
</style>
