window.CONFIG = {
    DEV: true, //是否开启调试   生产环境为false  
    AES: false, //是否开启AES加密
    AESIV: "0123456789123456", //AES iv    偏移量
    AESKEY: "0123456789123456", //AES key  加密
    DEV_API: "", //开发环境地址
    API: "", //生产环境地址
    MOCK: false, //是否使用本地mock数据 生产环境为false  
    TOKENKEY:"jianghu_auth_h5_token",        //token 对应key值
    OPENIDKEY:"jianghu_auth_h5_openid",        //token 对应key值
};

/*
 *2018年6月1日17:00:07---刘宇辉
 *配置测试、开发、生产、本地环境对应API
 */
var urls = [
    { url: "wwd.cs", api: "" },
    { url: "wwd.dev", api: "" },
    { url: "10.3.101.101",api:""},
    { url: "wwd.iqianjindai", api: "" },
]

for (var i = urls.length - 1; i >= 0; i--) {
    if (location.host.indexOf(urls[i].url) != -1) {
        window.CONFIG.DEV_API = urls[i].api
    }
}
if (!window.CONFIG.DEV_API) {
    // 如果没有匹配到开发环境 默认生产环境  关闭DEV  关闭mock 数据
    window.CONFIG.MOCK = false
    window.CONFIG.DEV = false
}
window.log = function(obj) {
    /*
     *2018年6月1日15:31:27---刘宇辉
     *全局log 生产环境不打印
     */
    if (window.CONFIG.DEV) {
        console.log(obj);
    }
};
/*
 *2018年6月1日14:34:56 ---刘宇辉
 *动态插入mockjs 模拟数据
 *动态插入mockjs
 *新增百度埋点
 *适配
 */
(function() {

    var defaultW = 375;
    var phoneScale = parseInt(window.screen.width) / defaultW;
     phoneScale = phoneScale>1?1:phoneScale
    document.write('<meta name="viewport" content="width=' + defaultW + ',initial-scale=' + phoneScale + ',minimum-scale=' + phoneScale + ',maximum-scale=' + phoneScale + ',user-scalable=no" />')
    var s = document.getElementsByTagName("script")[0];
    // if (window.CONFIG && window.CONFIG.MOCK) {
    //     var mockData = document.createElement("script");
    //     mockData.src = "./static/mockData.js";
    //     mockData.id = "mockData"
    //     mockData.async = "async"   
    //     var mockJs = document.createElement("script");
    //     mockJs.src = "./static/mock.js";
    //     mockJs.id = "mockJs"
    //     mockJs.async = "async"   
        
    //     s.parentNode.append(mockData);
    //     s.parentNode.append(mockJs);

    // }
    // if (window.CONFIG && window.CONFIG.AES) {
    //     var cryptoJS = document.createElement("script");
    //     cryptoJS.src = "./static/crypto.js";
    //     cryptoJS.async = "async"
    //     s.parentNode.append(cryptoJS);
    // }

})()
