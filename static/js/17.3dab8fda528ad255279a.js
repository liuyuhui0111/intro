webpackJsonp([17],{"0F6Z":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("P9l9"),a=e("tQ/e"),o={beforeRouteEnter:function(n,t,e){e(function(n){})},data:function(){return{noticeId:"",noticeType:"",noticeTitle:"",noticeTime:"",noticeContent:"",noticePublishTime:"",noticeAuthor:"",noticeImageUrl:"",isShow:!1}},mounted:function(){this.init()},methods:{init:function(){this.getAnnouncementdetail()},getAnnouncementdetail:function(){var n=this,t={noticeId:Object(a.l)("Id")};Object(i.q)(t).then(function(t){var e=n;if(200==t.data.code){var i=t.data.data;if(i){e.noticeTitle=i[0].noticeTitle,e.noticeTime=i[0].noticeTime;var a=i[0].noticeContent+"";e.noticeContent="<p>"+a.replace(/\\r\\n/g,"</p ><p>")+"</p >",e.noticePublishTime=i[0].noticePublishTime,e.noticeAuthor=i[0].noticeAuthor,i[0].noticeImageUrl?(e.isShow=!0,e.noticeImageUrl=i[0].noticeImageUrl):e.isShow=!1}}else e.$createToast({txt:t.data.message,time:2e3,type:"warn"}).show()}).catch(function(n){})},filterContent:function(n){return n.replace(/(\r\n)|(\n)/g,"<br>")}}},r={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"announcementDetailBox"},[e("div",{staticClass:"detailTitle"},[n._v(n._s(n.noticeTitle))]),n._v(" "),e("div",{staticClass:"announcementTime"},[n._v(n._s(n.noticeTime))]),n._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticClass:"announcementImg"},[e("img",{attrs:{src:n.noticeImageUrl}})]),n._v(" "),e("div",{staticClass:"announcementDes"},[e("div",{staticClass:"announceContent",domProps:{innerHTML:n._s(n.noticeContent)}},[e("div",[n._v(n._s(n.noticeContent))])]),n._v(" "),e("div",{staticClass:"authorName"},[n._v(n._s(n.noticeAuthor))]),n._v(" "),e("div",{staticClass:"authorTime"},[n._v(n._s(n.noticePublishTime))])])])},staticRenderFns:[]};var c=e("VU/8")(o,r,!1,function(n){e("mrQq"),e("yZwi")},"data-v-c3d2917a",null);t.default=c.exports},QVUh:function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\nbody[data-v-c3d2917a],#app[data-v-c3d2917a]{\r\n    background:#fff;\n}\n.announcementDetailBox[data-v-c3d2917a]{\r\n    padding:16px;\r\n    background:#fff;\r\n    text-align: left;\r\n    position:absolute;\r\n    width:100%;\r\n    height:100%;\r\n    -webkit-box-sizing:border-box;\r\n            box-sizing:border-box;\n}\n.announcementDetailBox .detailTitle[data-v-c3d2917a]{\r\n    font-size:22px;\r\n    color:#333;\r\n    padding:14px 0;  \r\n    -webkit-box-sizing: border-box;  \r\n            box-sizing: border-box;\n}\n.announcementDetailBox .announcementTime[data-v-c3d2917a]{\r\n    font-size:16px;\r\n    color:#999;\r\n    margin:10px 0 20px 0;\n}\n.announcementDetailBox .announcementImg[data-v-c3d2917a]{\r\n    width:90.6%;\r\n    height:160px;\r\n    margin:0 auto;\n}\n.announcementDetailBox .announcementImg img[data-v-c3d2917a]{\r\n    width:100%;\n}\n.announcementDetailBox .announcementDes[data-v-c3d2917a]{\r\n    color:#999;\r\n    font-size:16px;\r\n    margin-top:16px;\r\n    line-height: 24px;\r\n    text-align:justify;\r\n    text-justify:distribute-all-lines;\n}\n.announcementDetailBox .announcementDes .authorName[data-v-c3d2917a]{\r\n    margin-top:18%;\n}\n.announcementDetailBox .announcementDes .authorName[data-v-c3d2917a],.announcementDetailBox .announcementDes .authorTime[data-v-c3d2917a]{\r\n    width:100%;\r\n    text-align: right;\n}\r\n",""])},mrQq:function(n,t,e){var i=e("su8p");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("012e11ab",i,!0,{})},su8p:function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n.announceContent p{\r\n    margin-top:5px;\n}\r\n",""])},yZwi:function(n,t,e){var i=e("QVUh");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("1b22624b",i,!0,{})}});