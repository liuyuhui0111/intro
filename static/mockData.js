window.MOCKDATA = {
  '/api/user/sendValidCode': {
    'code': Math.random() > 0.0001 ? '200' : '400',

    'message': "ok",

    'data': '验证码发送成功'
  },
  '/api/user/register': {
    'code': '200',

    'message': "ok",

    'data': '注册成功'
  },
  '/api/user/login': {
    'code': '200',

    'message': "ok",

    'data': {
      token: "@id"
    }
  },
  '/api/customer/market/onelist': {
    "code": "000000",
    "message": "ok",
    "data": {
      "pagedata|1-20": [{
        username: "@cname()", //返回用户
        "applyAmount": "@integer(1-1000)", //返回整数区间1-1000
      }]
    }
  },
  '/api/product/list': {
    "code": 200,
    "message": "ok",
    'data': {
      "managerUId": 123,
      "pageNum": '@integer(1-2)',
      "totalPage": '@integer(1-3)',
      'productList|1-20': [{
        productId: '@integer(1-200)', //返回整数区间1-200,
        name: '@cname()',
        url: `@image('200x100','Hello')`,
        iconUrl: '@image()',
        description: "@cparagraph()",
        commissionRatio: "佣金比例" + 'A',
        creditLabel: ["标签A", "标签B", "标签C"]
      }]
    }
  },
  '/api/customer/market/addUser': {
    "code": 200,
    "message": "ok",
    "data": {
      "userId": "@id",
      "flag": true
    }
  },
  '/api/user/checkMobileRegister': {
    "code": 200,
    "message": "ok",
    "data": {
      "userId": "@id",
      "flag": true
    }
  },
  '/api/withdraw/withdrawRecord': {
    "code": 200,
    "message": "ok",
    'data': {
      "pagedata|20": [{
        bankName: "@cname()", //返回用户
        idBankCard: "@id()",
        availableAmount: null,
        createTime: '@datetime()', //返回时间
        withdrawAmount: "@integer(10, 300)", //返回整数区间1-1000
      }]
    },
    "pageNum": 1,
    "totalPage": 2,
  },
  '/api/product/details': {
    "code": 200,
    "message": "ok",
    "data": {
      "productName": "钱进贷",
      "productAmount": "200000",
      "interestDescribe ": "0.69",
      "applicationProcess": ["注册登录", "身份认证", "基本信息", "审核放款"],
      "applicationRequirements": ["有本人名下信用卡;","年龄22-25周岁中国共鸣（不含港澳台);","有实名认证手机号"],
      "productIntroduction": "产品介绍",
      "shareUrl": "http://"
    }
  }
}
