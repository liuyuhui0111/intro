webpackJsonp([32],{FV7T:function(a,t,n){(a.exports=n("FZ+f")(!1)).push([a.i,"\n.onCard[data-v-37405090] {\r\n  height: 100%;\r\n  background: #f5f5f5;\n}\n.onCardcon[data-v-37405090] {\r\n  background: #fff;\r\n  padding: 0 16px;\r\n  font-size: 16px;\r\n  color: #BBBBBB;\n}\n.idCard[data-v-37405090] {\r\n  height: 56px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  position: relative;\n}\n.idCard input[data-v-37405090]{\r\n  -webkit-box-flex:1;\r\n      -ms-flex:1;\r\n          flex:1;\r\n  margin-left: 5px;\n}\n.idCard button[data-v-37405090]{\r\n  border: 0;\r\n  background: transparent;\n}\n.onCard .bd[data-v-37405090] {\r\n  border-bottom: 1px solid #ddd;\n}\n.line[data-v-37405090] {\r\n  height: 10px;\r\n  background: #f5f5f5;\r\n  width: 100%;\n}\n.idCard .card[data-v-37405090] {\r\n  width: 70%;\r\n  height: 30px;\r\n  text-align: right;\n}\n.idCard-tel[data-v-37405090] {\r\n  text-align: right;\n}\n.idCard-tel.on[data-v-37405090]{\r\n  color: #F75F30;\n}\n.cube-select[data-v-37405090]::after {\r\n  border: none;\n}\n.verification[data-v-37405090] {\r\n  font-size: 14px;\r\n  color: #3C9AFC;\r\n  // text-align: right;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 16px;\n}\n.verification[disabled][data-v-37405090]{ color: #BBBBBB;\n}\n.submitCard[data-v-37405090] {\r\n  width: 83%;\r\n  background-image: -webkit-linear-gradient(316deg, #EDCE97 0%, #BF965A 100%);\r\n  background-image: linear-gradient(134deg, #EDCE97 0%, #BF965A 100%);\r\n  border-radius: 100px;\r\n  height: 45px;\r\n  margin: 24px auto;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 16px;\r\n  color: #1C0F00;\r\n  text-align: center;\n}\n.submitCardline[data-v-37405090] {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  height: 1px;\r\n  padding: 0 16px;\n}\n.submitCardline div[data-v-37405090] {\r\n  height: 1px;\r\n  background: #ddd;\n}\n.onCardcon img[data-v-37405090]{\r\n  width: 32px;\r\n  height: 32px;\n}\n.idCard .selected[data-v-37405090]{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  color: #1C0F00;\n}\ninput[data-v-37405090] {\r\n  outline: none;\n}\r\n",""])},IhU1:function(a,t,n){var e=n("FV7T");"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);n("rjj0")("78af974a",e,!0,{})},"N+1W":function(a,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=n("tQ/e"),r=n("P9l9"),i={data:function(){return{isTel:!0,smsDisabled:!1,lbSmsCode:"获取验证码",formData:{idBankCard:"",bankCode:"",bankName:"",reservePhone:"",smCode:""},tel:""}},props:[],watch:{tel:"telChangeFn"},mounted:function(){this.bindBanks()},methods:{bindBanks:function(){var a=this;Object(r.i)().then(function(t){if(200==t.data.code){var n=[];t.data.data.map(function(a){n.push({text:a.bankName,value:a.bankCode})}),a.picker=a.$createPicker({title:"银行卡",data:[n],onSelect:function(t,n,e){a.formData.bankCode=t[0],a.formData.bankName=e[0]}})}else a.Toast("获取银行列表出错")})},showPicker:function(){this.picker.show()},telChangeFn:function(){this.tel=Object(e.h)(this.tel),this.formData.reservePhone=this.tel.replace(/\s+/g,""),this.isTel=Object(e.n)(this.formData.reservePhone)},onMatchCardBin:function(){var a=this;if(this.formData.idBankCard){var t={idBankCard:this.formData.idBankCard};Object(r.n)(t).then(function(t){200==t.data.code?(a.formData.bankCode=t.data.data.bankCode,a.formData.bankName=t.data.data.bankName):a.Toast(t.data.message)})}},getSmsCode:function(){var a=this;if(this.formData.idBankCard)if(this.formData.bankName)if(this.formData.reservePhone)if(this.isTel){this.smsDisabled=!0,this.lbSmsCode="请稍后...";var t={mobile:this.formData.reservePhone,type:4};Object(r.F)(t).then(function(t){if(200!=t.data.code)return a.smsDisabled=!1,a.lbSmsCode="获取验证码",void a.Toast(t.data.message);Object(e.v)(a)}).catch(function(t){a.smsDisabled=!1,a.lbSmsCode="获取验证码"})}else this.Toast("手机号格式不正确");else this.Toast("请填写银行预留手机号");else this.Toast("请选择银行名称");else this.Toast("请填写银行卡卡号")},onSubmitBankCard:function(){var a=this;this.formData.idBankCard?this.formData.bankName?this.formData.reservePhone?this.isTel?this.formData.smCode?Object(r.H)(this.formData).then(function(t){200==t.data.code?a.$router.replace({path:"/personalCenter"}):a.Toast(t.data.message)}):this.Toast("请填写短信验证码"):this.Toast("手机号格式不正确"):this.Toast("请填写银行预留手机号"):this.Toast("请选择银行名称"):this.Toast("请填写银行卡卡号")}}},s={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"onCard"},[e("div",{staticClass:"onCardcon"},[e("div",{staticClass:"idCard bd"},[e("span",[a._v("银行卡卡号")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.idBankCard,expression:"formData.idBankCard"}],staticClass:"card",attrs:{pattern:"\\d*",type:"number"},domProps:{value:a.formData.idBankCard},on:{blur:a.onMatchCardBin,input:function(t){t.target.composing||a.$set(a.formData,"idBankCard",t.target.value)}}})]),a._v(" "),e("div",{staticClass:"idCard"},[e("span",[a._v("银行名称")]),a._v(" "),e("div",{staticClass:"selected",on:{click:a.showPicker}},[e("span",[a._v(a._s(a.formData.bankName))]),a._v(" "),e("img",{attrs:{src:n("KPxJ"),alt:""}})])])]),a._v(" "),e("div",{staticClass:"line"}),a._v(" "),e("div",{staticClass:"onCardcon"},[e("div",{staticClass:"idCard bd"},[e("span",[a._v("银行预留手机号")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.tel,expression:"tel"}],staticClass:"idCard-tel",class:{on:!a.isTel},attrs:{type:"tel",maxlength:"13"},domProps:{value:a.tel},on:{input:function(t){t.target.composing||(a.tel=t.target.value)}}})]),a._v(" "),e("div",{staticClass:"idCard"},[e("span",[a._v("验证码")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.smCode,expression:"formData.smCode"}],attrs:{type:"number",pattern:"/d*"},domProps:{value:a.formData.smCode},on:{input:function(t){t.target.composing||a.$set(a.formData,"smCode",t.target.value)}}}),a._v(" "),e("button",{staticClass:"verification",attrs:{disabled:a.smsDisabled},on:{click:a.getSmsCode}},[a._v(a._s(a.lbSmsCode))])])]),a._v(" "),e("button",{staticClass:"submitCard",on:{click:a.onSubmitBankCard}},[a._v("提交绑卡")]),a._v(" "),a._m(0)])},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"submitCardline"},[t("div")])}]};var o=n("VU/8")(i,s,!1,function(a){n("IhU1")},"data-v-37405090",null);t.default=o.exports}});