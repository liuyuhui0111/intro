// 项目接口api   尽量把所有接口写在这里方便管理查看

import ajax from '@/assets/js/axiosManage.js'
import {
  md5,
  aesEncrypt,
  aesDecrypt,
  logOutFn,
  getCookie,
  getItem
} from '@/assets/js/function.js'
const baseURL = window.CONFIG.DEV ? window.CONFIG.DEV_API : window.CONFIG.API
// 请求之前拦截
// Mock.mock(baseURL+'/api/product/list',window.MOCKDATA['/api/product/list'])

ajax.interceptors.request.use(function(config){
	// 无需loading  ajax.defaults.isHideLoadding = loadding
	log("请求前入参：");
	log(config);
	if(!config.isHideLoadding){
		Vue.$createToast({txt:"",time:0}).show()
	}
	
	if(window.CONFIG.MOCK){
		// 是否开启mock
		let data = window.MOCKDATA[config.url] || {}
		
		if(window.Mock){
			window.Mock.mock(baseURL+config.url,data)
			return config;
		}
		return config;
		
	}else{
		// 是否需要AES
		if(window.CONFIG.AES){
			config.data = {data:aesEncrypt(JSON.stringify(config.data))}
		}
		return config;
	}	
	
},function(err){
  	return Promise.reject(err);
});
// 响应之前拦截
ajax.interceptors.response.use(function (res) {
  //在这里对返回的数据进行处理
  Vue.$createToast({
    txt: ""
  }).hide()
  if (!window.CONFIG.MOCK) {
    // 是否需要AES
    if (window.CONFIG.AES) {
      res.data = aesDecrypt(res.data)
    }
  }
  if (res.data.code == 200506) {
    // 登录过期  执行退出 刷新当前页
    logOutFn()
    if(!Vue.$route.meta.isCancelValidate){
      setTimeout(function(){
        window.location.reload()
      },2000)
    }
    
  }
  log("返回参数：");
  log(res);
  return res;
}, function (err) {
  Vue.$createToast({
    txt: ""
  }).hide()
  Vue.$createToast({
    txt: "请求超时，请稍后再试",
    time: 2000,
    type: "warn"
  }).show()

  return Promise.reject(err);
})


 function _post(url, params){
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
 }
// 发送短信码接口
export function sendValidCode(params) {
  let url = "/api/user/sendValidCode"
  // let url = "https://app.iqianjindai.com/api/appUser/appSMCode/v1/"
  return $ajax.post(url, params).then(function (res) {

    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

// 用户注册接口
export function register(params) {
  let url = "/api/user/register"
  return $ajax.post(url, params).then(function (res) {

    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

// 用户登录接口
export function login(params) {
  let url = "/api/user/login"
  return $ajax.post(url, params).then(function (res) {

    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

// 校验手机号是否注册
export function checkExist(params) {
  let url = "/api/user/checkExist"
  return $ajax.post(url, params).then(function (res) {

    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

// 修改密码
export function modifyPassword(params) {
  let url = "/api/user/modifyPassword"
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

//获取产品列表
export function productList(params) {
  let url = '/api/product/list'
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

//申请单-用户表单-添加用户（保存用户手机号
export function addUser(params) {
  let url = '/api/customer/market/addUser'
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

//获取提现记录
export function withdrawRecord(params) {
  let url = '/api/withdraw/withdrawRecord'
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

//获取产品详情
export function productDetails(params) {
  let url = '/api/product/details'
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

//客户市场-抢单市场-列表
export function queryOneList(params) {
  let url = '/api/market/queryOneList'
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

//客户市场-抢单市场-详情
export function queryOneDetail(params) {
  let url = '/api/market/queryOneDetail'
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

//客户市场-抢单
export function robbingOrder(params) {
  let url = '/api/market/robbingOrder'
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

//客户市场-甩单市场-列表
export function queryChangeList(params) {
  let url = '/api/market/queryChangeList'
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

//客户市场-已购客户-列表
export function queryBoughtList(params) {
  let url = '/api/market/queryBoughtList'
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

//客户市场-转手
export function changeStatus(params) {
  let url = '/api/market/changeStatus'
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

//客户市场-备注
export function updateRemark(params) {
  let url = '/api/market/updateRemark'
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

//个人信息查询
export function queryuserinfo(params) {
  let url = '/api/user/queryuserinfo'
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

//枚举相关查询接口
export function query(params) {
  let url = '/api/dictionary/query'
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

//公告管理列表
export function noticeQuery(params) {
  let url = '/api/notice/query'
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

//城市列表查询
export function cityQuery(params) {
  let url = '/api/dictionary/city/query'
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

//拨打虚拟电话
export function call(params) {
	let url = '/api/phone/call'
	return $ajax.post(url, params).then(function (res) {
	  return Promise.resolve(res)
	}).catch(function (err) {
	  return Promise.reject(err)
	})
  }

//客户列表
export function queryApplyList(params) {
	let url = '/api/apply/queryApplyList'
	return $ajax.post(url, params).then(function (res) {
	  return Promise.resolve(res)
	}).catch(function (err) {
	  return Promise.reject(err)
	})
  }
  
//提现页面查询
export function selectWithdrawData(params) {
  let url = '/api/withdraw/selectWithdrawData';
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

//提现接口
export function applyWithdraw(params) {
  let url = '/api/withdraw/applyWithdraw';
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

//提现状态查询
export function queryWithdrawStatus(params) {
  let url = '/api/withdraw/queryWithdrawStatus';
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

//收支明细
export function querydetail(params) {
  let url = '/api/account/querydetail';
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}
//绑卡 OCR image upload
export function uploadIdCard(params) {
  return _post('/api/fileUpload/idcard', params);
}

// 提交OCR image
export function submitOCR(params) {
  return _post('/api/idCard/modifyInfo', params);
}
// 查询银行列表
export function getBanks() {
  return _post('/api/bankCard/selectBank');
}
// 绑卡 获取短信验证码
export function submitBankCard(params) {
  return _post('/api/bankCard/tieOnCard', params);
}
// 绑卡 根据手机号，自动匹配银行名称
export function matchCardBin(params) {
  return _post('/api/bankCard/matchCardBin', params);
}
//申请单保存
export function addApplyInfo(params) {
  let url = '/api/apply/addApplyInfo'
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}
//贷款超市申请单保存
export function addLoanApplyInfo(params) {
  let url = '/api/apply/addLoanApplyInfo'
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}
//我的团队信息查询
export function teamInfo(params) {
  let url = '/api/user/teamInfo';
  return $ajax.post(url, params).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (err) {
    return Promise.reject(err)
  })
}
// 微信签名
export function signature(params) {
  ajax.defaults.isHideLoadding = true
  let param = params || {
    // url:encodeURIComponent(window.location.href.split('#')[0])
    url:window.location.href.split('#')[0]
  }
  let url = '/api/wx/signature'
  return $ajax.post(url, param).then(function (res) { 
    ajax.defaults.isHideLoadding = false
    return Promise.resolve(res)
  }).catch(function (err) {
    ajax.defaults.isHideLoadding = false
    return Promise.reject(err)
  })
}
// 微信授权
export function authorization(params) {
  ajax.defaults.isHideLoadding = true
  let param = params || {}
  let url = '/api/wx/authorization'
  return $ajax.post(url, param).then(function (res) { 
    ajax.defaults.isHideLoadding = false
    return Promise.resolve(res)
  }).catch(function (err) {
    ajax.defaults.isHideLoadding = false
    return Promise.reject(err)
  })
}
// 获取客服帮助问答数据
export function getCustomerService(params) {
  return _post('/api/customer/question/getList', params);
}

// 获取奖励说明
export function getReward(params){
  return _post('/api/product/reward', params);
}

// 获取贷款超市列表  
export function getLoanList(params){
  return _post('/api/loan/list', params);
}

// 查询是否需要填写申请单 
export function needapply(params){
  return _post('/api/loan/needapply', params);
}