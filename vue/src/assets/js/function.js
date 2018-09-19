/*
 *2018年6月4日10:01:28---刘宇辉
 *公用方法函数
 */

// MD5 加密
export function md5(data) {
  try {
    if (typeof (data) === "string") {
      return CryptoJS.MD5(data).toString().toUpperCase()
    } else {
      return CryptoJS.MD5(JSON.stringify(data)).toString().toUpperCase()
    }
  } catch (e) {}
}
// aes 加密
export function aesEncrypt(data, iv, _key) {
  // 需要加密的数据data  偏移量iv  密码key
  try {
    var key = "";
    if (_key) {
      key = CryptoJS.enc.Utf8.parse(_key);
    } else {
      key = CryptoJS.enc.Utf8.parse(window.CONFIG.AESKEY);
    }
    var iv = CryptoJS.enc.Utf8.parse(window.CONFIG.AESIV);

    var encrypted = CryptoJS.AES.encrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  } catch (e) {
    console.log(e);
  }
}
// aes 解密
export function aesDecrypt(data, iv, key) {
  // 需要解密的数据data  偏移量iv  密码key
  try {
    var key = "";
    if (_key) {
      key = CryptoJS.enc.Utf8.parse(_key);
    } else {
      key = CryptoJS.enc.Utf8.parse(window.CONFIG.AESKEY);
    }
    var iv = CryptoJS.enc.Utf8.parse(window.CONFIG.AESIV);
    var decrypted = CryptoJS.AES.decrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    var decryptedStr = decrypted.toString(CryptoJS.enc.Utf8);
    return decryptedStr;
  } catch (e) {
    console.log(e);
  }
}
// js触发事件
export function trigger(elem, event) {
  if (document.all) {
    elem.event();
  } else {
    var evt = document.createEvent("Events"); //还有onchange则是HtmlEvents
    evt.initEvent(event, true, true);
    elem.dispatchEvent(evt);
  };
}

//写cookies
export function setCookie(name, value, day, domain) {
  try {
    var Days = day || 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    if (typeof (value) != "string") {
      value = JSON.stringify(value)
    }
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
  } catch (e) {
    return null
  }
}
// 读cookies
export function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}
// 删除cookie
export function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
// 设置本地缓存
export function setItem(name, value) {
  if (typeof (value) == "string") {
    localStorage.setItem(name, value)
  } else {
    localStorage.setItem(name, JSON.stringify(value))
  }
}

export function getItem(name) {
  localStorage.getItem(name)
}

export function removeItem(name) {
  localStorage.removeItem(name)
}
// 设置session缓存
export function setSessionItem(name, value) {
  if (typeof (value) == "string") {
    sessionStorage.setItem(name, value)
  } else {
    sessionStorage.setItem(name, JSON.stringify(value))
  }
}

export function getSessionItem(name) {
  sessionStorage.getItem(name)
}

export function removeSessionItem(name) {
  sessionStorage.removeItem(name)
}

export function loginFn(id) {
  setCookie(window.CONFIG.TOKENKEY, id)
  setItem(window.CONFIG.TOKENKEY, id)
}

export function logOutFn(id) {
  delCookie(window.CONFIG.TOKENKEY)
  removeItem(window.CONFIG.TOKENKEY)
}

export function formatePhone(phone) {
  let tel = phone.replace(/\s+/g, '');
  if (tel.length > 3 && tel.length <= 7) {
    tel = tel.substring(0, 3) + " " + tel.substring(3)
  } else if (tel.length > 7) {
    tel = tel.substring(0, 3) + " " + tel.substring(3, 7) + " " + tel.substring(7)
  }
  return tel.trim();
}

// 判断是否为手机号
export function isPoneAvailable(pone) {
  var myreg = /^[1][1,2,3,4,5,7,8,9,0][0-9]{9}$/;
  if (!myreg.test(pone)) {
    return false;
  } else {
    return true;
  }
}

// 判断是否为电话号码
export function isTelAvailable(tel) {
  var myreg = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
  if (!myreg.test(tel)) {
    return false;
  } else {
    return true;
  }
}

export function isWeChat() {
  let userAgent = window.navigator.userAgent;
  return userAgent.match(/MicroMessenger/i) == "MicroMessenger";
}

// 校验姓名
export function checkName(name) {
  var reg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
  if (reg.test(name)) {
    return true;
  } else {
    return false;
  }
}
// 校验借款金额是否是1000的整数倍
export function checkMoney(val) {
  if (isNaN(val)) {
    return false
  } else {
    let str = (val / 1000) + ''
    if (str.indexOf(".") != -1) {
      return false
    } else {
      return true
    }
  }
}
// 校验身份证
export function checkCardNo(card) {
  // 身份证号码为18位，18位前17位为数字，最后一位是校验位，可能为数字或字符X 
  var reg = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  if (reg.test(card) === false) {
    return false;
  } else {
    return true
  }
}
// 校验密码6-20位字母数字
export function checkPassword(pwd) {
  // 校验密码6-20位字母数
  var reg = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,20}$/;
  if (reg.test(pwd) === false) {
    return false;
  } else {
    return true
  }
}


// 获取URL 参数
export function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r === null) {
    var reg2 = /^.*?[?]/;
    var r2 = window.location.hash.replace(reg2, "")
    r = r2.match(reg);
  }

  if (r != null) return r[2];
  return null;
}
// URL参数转对象格式
export function parseQuery(query) {
  var reg = /([^=&\s]+)[=\s]*([^&\s]*)/g;
  var obj = {};
  while (reg.exec(query)) {
    obj[RegExp.$1] = RegExp.$2;
  }
  return obj;
}

// 倒计时
export function startClock(vueInstance, options) {
  let _config = {
    statusKey: 'smsDisabled',
    lbCodeKey: 'lbSmsCode'
  }
  _config = Object.assign({}, _config, options);
  let time = 60;
  let timer = setInterval(function () {
    time--;
    if (time <= 0) {
      clearInterval(timer);
      vueInstance[_config.lbCodeKey] = '重新发送验证码';
      vueInstance[_config.statusKey] = false;
      return;
    }

    vueInstance[_config.lbCodeKey] = time + 's后重新获取';
    vueInstance[_config.statusKey] = true;
  }, 1000);
}

//姓名脱敏  王**
export function nameDesensit(name) {
  var val = '';
  if (name) {
    val = name.substring(0, 1) + "**"
  }
  return val;
}

//校验是否是数字
export function isNumFn(str) {

}

/** 
 * 将数值格式化成金额形式 
 * 
 * @param num 数值(Number或者String) 
 * @param precision 精度，默认不变
 * @param separator 分隔符，默认为逗号
 * @return 金额格式的字符串,如'1,234,567'，默认返回NaN
 * @type String 
 */
export function formatNumber(num, precision, separator) {
  var parts;
  // 判断是否为数字
  if (!isNaN(parseFloat(num)) && isFinite(num)) {
    // 把类似 .5, 5. 之类的数据转化成0.5, 5, 为数据精度处理做准, 至于为什么
    // 不在判断中直接写 if (!isNaN(num = parseFloat(num)) && isFinite(num))
    // 是因为parseFloat有一个奇怪的精度问题, 比如 parseFloat(12312312.1234567119)
    // 的值变成了 12312312.123456713
    num = Number(num);
    // 处理小数点位数
    num = (typeof precision !== 'undefined' ? (Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision)).toFixed(precision) : num).toString();
    // 分离数字的小数部分和整数部分
    parts = num.split('.');
    // 整数部分加[separator]分隔, 借用一个著名的正则表达式
    parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + (separator || ','));

    return parts.join('.');
  }
  return '--';
}
/**
 * 生成二维码
 * 
 */
export function creatEwm(type, base64, canvas, callback) {
  //当前屏幕宽高
  console.log(type)
  let w = document.body.clientWidth * 3
  let h = document.body.clientHeight * 3
  var ctx = canvas.getContext("2d");
  let imgbg = new Image();
  let percent = '';
  let percentL = '';
  let percentB = '';
  if (type == 'product') {
    percent = w * 0.5; //展业二维码的比例
    imgbg.src = '/static/imgs/addteambg.png'
  } else {
    percent = w * 0.385; //扩团二维码的比例
    imgbg.src = '/static/imgs/promotebg.png'
  }
  imgbg.onload = function () {
    var linkbg = new Image();
    if (type == 'product') {
      linkbg.src = '/static/imgs/addteam.png';
    } else {
      linkbg.src = '/static/imgs/promote.png';
    }
    linkbg.onload = function () {
      let hh = w * linkbg.height / linkbg.width
      canvas.width = w
      canvas.height = hh
      var imgUpload = new Image();
      imgUpload.src = base64;
      if (type == 'product') {
        percentL = w * 0.24 //展业二维码的左距离
        percentB = hh * 0.495 //展业二维码的上距离
      } else {
        percentL = w * 0.308 //扩团二维码的左距离
        percentB = hh * 0.695 //扩团二维码的上距离
      }
      imgUpload.onload = function () {
        //ctx.drawImage(linkbg, 0, 0,);
        ctx.drawImage(imgbg, 0, 0, imgbg.width, imgbg.height, 0, 0, w, hh);
        ctx.drawImage(linkbg, 0, 0, linkbg.width, linkbg.height, 0, 0, w, hh);
        ctx.drawImage(imgUpload, percentL, percentB, percent, percent);
        //ctx.drawImage(imgUpload,0,0);
        callback(canvas.toDataURL("image/png"))
      }
    }
  }

}
export function getProportion(img) {
  var imgw = img.width;
  let imgh = img.height
  let w = document.body.clientWidth
  let h = document.body.clientHeight
  let pimg = imgw / imgh;
  let pclient = w / h;
  if (pimg > pclient) {
    img.style.display = "block"
    img.style.width = "100%"
  } else {
    img.style.display = "block"
    img.style.height = "100%"
  }
}

export function geolocation(cb) {
  if (!AMap) {
    cb && cb();
    return;
  }
  AMap.plugin(['AMap.Geolocation'], function () {
    var geoloc = new AMap.Geolocation({
      enableHighAccuracy: true, //是否使用高精度定位，默认:true
      timeout: 10000, //超过10秒后停止定位，默认：无穷大
      maximumAge: 0, //定位结果缓存0毫秒，默认：0
      noIpLocate: 3, //是否禁止使用IP定位
      // convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
      // showButton: true,        //显示定位按钮，默认：true
      // buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
      buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
      // showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
      // showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
      // panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
      // zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    });
    geoloc.getCurrentPosition();
    AMap.event.addListener(geoloc, 'complete', function (res) {
      // res.addressComponent = {
      //   adcode:"110101",
      //   building:"银河Soho(B座)",
      //   buildingType:"商务住宅;楼宇;商务写字楼",
      //   businessAreas:[
      //   {name: "朝阳门", id: "110105", location: c},
      //   {name: "朝外", id: "110105", location: c},
      //   {name: "建国门", id: "110105", location: c}
      //   ],
      //   city:"",
      //   citycode:"010",
      //   district:"东城区",
      //   neighborhood:"",
      //   neighborhoodType:"",
      //   province:"北京市",
      //   street:"西水井胡同",
      //   streetNumber:"8号",
      //   township:"朝阳门街道",
      // }
      let location = {
        adcode: res.addressComponent.adcode,
        adcity: res.addressComponent.city || res.addressComponent.province,
        district: res.addressComponent.district
      }
      cb && cb(location);
    }); //返回定位信息
    AMap.event.addListener(geoloc, 'error', function (err) {
      console.log(err)
      cb && cb();
      return;
    });











  })
}
