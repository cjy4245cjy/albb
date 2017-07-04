const API_ROOT = "/api"
const API_SERVICES = '/services'
const API_PB = API_ROOT + '/pointbuy'
const API_PBS = API_ROOT + '/pbsupport'
const API_ASS = API_ROOT + '/ass'
const API_ADVISER = API_ROOT + '/adviser'
const API_ACTIVITY = API_ROOT + '/activity'
const API_BONUS = API_ROOT + '/bonus'
const API_USER = API_SERVICES + '/user'
const API_FUNDS = API_SERVICES + '/funds'
const API_FUNDSEXT = API_SERVICES + '/fundsExt'
const API_USEREXT = API_SERVICES + '/userExt'
const API_PT = API_SERVICES + '/pt'
const TYPES = {
  POST: 'post',
  GET: 'get'
}

export default {
  system: {
    // 发送短信验证码
    sendCode: {
      url: API_USER + "/verify/code",
      type: TYPES.POST,
      xform: true
    },
    uploadImage: {
      url: API_USEREXT + "/modify/headImage",
      type: TYPES.POST
    }
  },
  user: {
    // 获取用户资产详情
    getAssets: {
      //url: API_ASS + "/v2/uapi/user/fundstat",
      url: API_FUNDS + "/status",
      type: TYPES.GET
    },
    // 获取用户策略账户详情
    getStrategyAssets: {
      url: API_PBS + "/v2/user/query/fundstat",
      type: TYPES.POST
    },
    getUserStrategyAssets: {
      url: API_PBS + "/v2/user/query/funds",
      type: TYPES.POST
    },
    // 获取用户详情
    getInfo: {
      //url: API_ASS + "/v2/uapi/user/query",
      url: API_USER + "/info",
      type: TYPES.GET
    },
    // 获取推广汇总数据
    getSpreadCount: {
      url: API_PBS + "/v2/inviter/promoteSum",
      type: TYPES.POST
    },
    // 获取推广用户列表
    getSpreadInvitedList: {
      url: API_PBS + "/v2/inviter/promoteUser",
      type: TYPES.POST
    },
    // 获取用户的交易记录列表
    getTradeList: {
      //url: API_ASS + "/v2/uapi/user/funds/search",
      url: API_FUNDS + "/list",
      type: TYPES.GET
    },
    // 获取用户牛股推荐列表
    getStockSuggestList: {
      url: API_ADVISER + "/tactic/list",
      type: TYPES.GET
    },
    // 用户发布的观点列表
    getViewPointList: {
      url: API_ADVISER + "/view/list",
      type: TYPES.GET
    },
    // 获取用户评论列表
    getCommentList: {
      url: API_ADVISER + "/user/comment",
      type: TYPES.GET
    },
    // 获取用户银行卡列表
    getBankCardList: {
      url: API_USEREXT + "/bank/card",
      type: TYPES.GET
    },
    // 获取用户订阅列表
    getSubscriptionList: {
      url: API_ADVISER + "/user/subscribe/list",
      type: TYPES.GET
    },
    // 获取用户收藏列表
    getFavoriteList: {
      url: API_ADVISER + "/user/collect",
      type: TYPES.GET
    },
    // 获取用户提问列表
    getQuestionList: {
      url: API_ADVISER + "/user/advisory/list",
      type: TYPES.GET
    },
    // 获取关注人动态列表
    getDynamicList: {
      url: API_ADVISER + "/adviser/dynamic/list",
      type: TYPES.GET
    },
    // 获取数据统计
    getDataCount: {
      url: API_ADVISER + "/adviser/datas",
      type: TYPES.POST
    },
    // 获取认证资料
    getAuthInfo: {
      url: API_ADVISER + "/adviser/approve",
      type: TYPES.GET
    },
    // 用户理财列表
    getFinancialList: {
      url: API_ACTIVITY + "/product/records/status",
      type: TYPES.POST
    },
    // 我的红包列表
    getReadPacketList: {
      url: API_BONUS + "/v2/bonus/records",
      type: TYPES.POST
    },
    // 设置登入密码
    setLoginPwd: {
      url: API_USER + "/passwd/login",
      type: TYPES.POST,
      xform: true
    },
    // 设置交易密码
    setTransPwd: {
      url: API_USER + "/passwd/trans",
      type: TYPES.POST,
      xform: true
    },
    // 设置用户交易密码
    setTradePwd: {
      url: API_ASS + "/v2/uapi/user/modify_trans_password",
      type: TYPES.POST
    },
    // 重置用户交易密码
    setNewTradePwd: {
      url: API_ASS + "/v2/uapi/user/set_newtrans_password",
      type: TYPES.POST
    },
    // 修改用户信息
    setInfo: {
      url: API_USEREXT + "/modify",
      type: TYPES.POST,
      xform: true
    },
    // 修改头像
    setHeadPic: {
      url: API_ADVISER + "/user/image",
      type: TYPES.POST,
      form: true
    },
    // 发表观点
    addViewPoint: {
      url: API_ADVISER + "/view/add",
      type: TYPES.POST,
      form: true
    },
    // 回答问题
    addAnswer: {
      url: API_ADVISER + "/advisory/answer",
      type: TYPES.POST,
      form: true
    },
    // 申请提现
    applyWithdraw: {
      url: API_ASS + "/v2/bapi/funds/withdraw/apply",
      type: TYPES.GET
    },
    // 转入转出资金
    transfer: {
      url: API_PB + "/v2/user/transfer",
      type: TYPES.POST
    },
    // 点赞
    like: {
      url: API_ADVISER + "/user/like",
      type: TYPES.POST,
      form: true
    },
    //获取图形验证码
    getImgCode: {
      url: API_USER + '/image/code.jpg',
      type: TYPES.GET
    },
    //获取道具
    getCard: {
      url: API_PBS + "/v2/user/query/card",
      type: TYPES.POST
    },
    //抵用金明细
    getDeductionFunds: {
      url: API_PBS + "/v2/user/queryDeductionFunds",
      type: TYPES.POST
    },
    // 充值
    getRecharge: {
      url: API_FUNDSEXT + "/recharge/",
      type: TYPES.POST,
      xform: true
    },
    // 查询扫码充值结果
    querySCRecharge: {
      url: API_FUNDSEXT + '/queryRecharge',
      type: TYPES.POST,
      xform: true
    },
    // 提现
    getWithdraw: {
      url: API_FUNDSEXT + "/withdraw/40",
      type: TYPES.POST,
      xform: true
      // url: API_PB + "/v1/user/withdraw",
      // type: TYPES.POST
    },
    //获取交易类型
    dataField: {
      url: API_PT + "/dataField",
      type: TYPES.POST
    },
    // 获取隐私数据
    privacySelect: {
      url: API_PBS + "/v1/supporter/privacySelect",
      type: TYPES.POST
    },
    // 设置隐私
    privacySet: {
      url: API_PBS + "/v1/supporter/privacySet",
      type: TYPES.POST
    }
  }
}
