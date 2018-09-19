import {getCookie,getItem,getSessionItem} from "@/assets/js/function.js"

const state = {
  curTitle:"加载中...",		//标题
  toHref:"",					//跳转url
  to:null,					//跳转to对象
  id:getItem("id") || getCookie("id") || "",		//用户唯一标识
  token:getItem(window.CONFIG.TOKENKEY) || getCookie(window.CONFIG.TOKENKEY) || "",		//token
  openid:getItem(window.CONFIG.OPENIDKEY) || getCookie(window.CONFIG.OPENIDKEY) || "",		//token
  inviteUId:getSessionItem("inviteUId") || "",	//邀请人id
  shareUrl:getSessionItem("shareUrl") || "",	//分享第三方URL
}


export default state