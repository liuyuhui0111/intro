import * as types from './mutation-types'
import {setCookie,setItem,setSessionItem} from "@/assets/js/function.js"
const matutaions = {
  [types.setcurTitle](state, curTitle) {
    state.curTitle = curTitle
  },
  [types.setId](state, id) {
  	// 每次提交用户id 同步更新
    setCookie("id",id)
  	setItem("id",id)
    state.id = id
  },
   [types.setOpenId](state, id) {
    // 每次提交用户id 同步更新
    setCookie("openid",id)
    setItem("openid",id)
    state.openid = id
  },
  [types.setToHref](state, href) {
    state.toHref = href
  },
  [types.setTo](state, to) {
    state.to = to
  },
  [types.setToken](state, token) {
    // 每次提交用户id 同步更新
    setCookie(window.CONFIG.TOKENKEY,token)
    setItem(window.CONFIG.TOKENKEY,token)
    state.token = token
  },
  [types.setInviteUId](state, inviteUId) {
    // 设置邀请人ID
    setSessionItem("inviteUId",inviteUId)
    state.inviteUId = inviteUId
  },
  [types.setShareUrl](state, shareUrl) {
    // 设置分享第三方URL
    setSessionItem("shareUrl",shareUrl)
    state.shareUrl = shareUrl
  }
}

export default matutaions