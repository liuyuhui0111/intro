/*
 *2018年6月1日14:45:52---刘宇辉
 *全局mixins  存放vuex操作
 */
import {
  logOutFn,
  getQueryString
} from "@/assets/js/function.js"
import {
  wxConfig
} from "@/assets/js/wxFunction.js"
import {signature,authorization} from '@/api/api'
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'

export default {
  install(Vue, options) {
    Vue.mixin({
      data() {

        return {
          isCanRequest: true, //防止连续请求
          publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDJz/BPrpW05cEm34a1e00c1bvj
jH4LpAdnWQV820ALY+7/C9m3NmmYBAjcS7yljBO24kDx4rEGYmJpyj8ifjPNNUqx
1IjKBVcWjyfmT8N5rPnNf12Nf9/YxTfwmbNt4yt2jxndhseMgmSK9yvB62SyxSv5
UEuONStuikP+/5ul2wIDAQAB
-----END PUBLIC KEY-----`, //公钥
          wxShareTitle:"好友邀请您加入富咖江湖",
          wxShareUrl:"?page=login",
          wxShareImage:window.location.href.split('#')[0]+"static/imgs/logo.png",
          wxShareDesc:"推广拿返利、展业更轻松"
        }
      },
      beforeRouteEnter (to, from, next) {
        if(to.meta.isShare){
          next(vm=>{
            console.log(vm)
            vm.signatureInit()
          }) 
        }else{
          next()
        }
        
      },
      // watch:{
      //       $route:function(to,from){
      //         // alert(to.path);
      //       }
      //   },
      created(){
        // if(this.$route.meta.isShare){
        //   this.signatureInit()
        // }
        
      },
      mounted() {
        //this.wxShare()
      },
      computed: {
        ...mapGetters([
          // 映射 this.count 为 store.state.count
          'getToHref', //登录跳转URL  
          'getId', //用户ID  
          'getOpenId', //微信openID  
          'getToken', //token
          'getTo', //to
          'getShareUrl', //分享跳转第三方URL
          'getInviteUId' //分享人ID
        ])
      },
      methods: {
        authorizationFn(){
          // 微信授权
          let code = getQueryString("code") || ""
          if(code){
            authorization({code:code}).then((res)=>{
              if(res.data.code == 200){
                this.setOpenId(res.data.data.openId)
                this.setToken(res.data.data.token)
              }
            },(err)=>{
              console.log(err);
            })
          }
        },
        signatureInit(){
          signature().then((res)=>{
            if(res.data.code == 200){
              wxConfig(res.data.data,this.wxShare)
            }
          },(err)=>{

          })
        },
        Toast(msg, type, time) {
          if (!msg) return;
          this.$createToast({
            txt: msg,
            time: time || 2000,
            type: type || "warn"
          }).show()
        },
        logOut() {
          // 退出登录
          this.setToken("")
          this.setToHref("")
          logOutFn()
        },
        wxShare() {
          //设置分享页
            wx.onMenuShareTimeline({
              title: this.wxShareDesc, // 分享标题
              link: window.location.href.split('#')[0] + this.wxShareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl:this.wxShareImage, // 分享图标
              success: function (res) {
                // 用户确认分享后执行的回调函数
                this.$createToast({
                  txt: "分享成功",
                  time: 2000,
                  type: "correct"
                }).show()
              },
              cancel: function (res) {
                // 用户取消分享后执行的回调函数
              }
            });
            //分享给朋友
            wx.onMenuShareAppMessage({
              title: this.wxShareTitle, // 分享标题
              link: window.location.href.split('#')[0] + this.wxShareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: this.wxShareImage, // 分享图标
              desc: this.wxShareDesc, // 分享描述
              success: function (res) {
                // 用户确认分享后执行的回调函数
                this.$createToast({
                  txt: "分享成功",
                  time: 2000,
                  type: "correct"
                }).show()
              },
              cancel: function (res) {
                // 用户取消分享后执行的回调函数
              }

            });
        },
        ...mapMutations([
          'setId', //设置用户ID
          'setOpenId', //设置微信openID
          'setToken', //设置token
          'setTo', //设置to
          'setToHref', //设置跳转URL
          'setShareUrl', //设置分享第三方URL
          'setInviteUId' //设置分享人ID
        ]),
        ...mapActions([
          'setcurTitleActions'
        ])

      }
    })
  }
}
