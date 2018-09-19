// 微信jsApi
export function wxConfig(data,fn){
	/*
	*2018年7月2日18:33:52---刘宇辉
	*微信config配置
	*window.CONFIG.DEV
	*/
	if(wx){
		wx.config({
			debug:window.CONFIG.DEV,
			appId:data.appId,
			timestamp:data.timestamp,
			nonceStr:data.nonceStr,
			signature:data.signature,
			jsApiList:[
				'onMenuShareTimeline',
				'onMenuShareAppMessage',
				'onMenuShareQQ',
				'onMenuShareWeibo',
				'onMenuShareQZone',
				'hideMenuItems',
				'chooseImage',
				'getLocalImgData'
			]
		});
		wx.ready(()=>{
			hideShare();
			if(fn){
				fn()
			}
		});
		wx.error((res)=>{
			alert(JSON.stringify(res))
        	console.log(res);
      	});
	}
}


export function wxShare(params){
	/*
	*2018年7月2日18:29:02---刘宇辉
	*微信分享  params{
		title:"",   分享标题
		desc:"",    分享描述
		link:"",    分享URL
		imgUrl:"",  分享imgUrl
		success:function(){},  成功回调
		cancel:function(){},   失败回调
	}
	*/	
	if(wx){
		wx.onMenuShareTimeline(params)		//获取“分享到朋友圈”按钮点击状态及自定义分享内容接口（即将废弃）
		wx.onMenuShareAppMessage(params)		//获取“分享给朋友”按钮点击状态及自定义分享内容接口（即将废弃）
		wx.onMenuShareQQ(params)		//获取“分享到QQ”按钮点击状态及自定义分享内容接口
		wx.onMenuShareWeibo(params)		//获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
		wx.onMenuShareQZone(params)		//获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
	}
}


export function hideShare(){
	// 批量隐藏功能按钮接口
	wx.hideMenuItems({
		menuList: [
			"menuItem:copyUrl",	//复制链接
			"menuItem:originPage",	//原网页
			"menuItem:openWithQQBrowser",	//qq浏览器打开
			"menuItem:openWithSafari",		//safari浏览器打开
			"menuItem:share:email",				//邮件
			"menuItem:share:QZone",				//分享QQ空间
			"menuItem:share:facebook",			//分享到fb
			"menuItem:share:weiboApp",			//分享到微博
			"menuItem:share:qq",				//分享到QQ

		] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
	});
}


function _wxChooseImage(){
	return new Promise((resolve, reject) => wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有, 'compressed'
        sourceType: [ 'camera'], // 可以指定来源是相册还是相机，默认二者都有'album',
        success: function (res) {
          var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          resolve(localIds[0]);
        },
        fail:function(err){
        	reject();
        }
      }));
}

export function wxTakePhoto() {
	return _wxChooseImage().then((localId) => {
		return new Promise((resolve, reject) => wx.getLocalImgData({
				localId: localId, // 图片的localID
				success: function (res) {
					var localData = res.localData; // localData是图片的base64数据，可以用img标签显示
					resolve(localData);
				},
				fail: function(err){
					reject();
				}
			}));
		});
}