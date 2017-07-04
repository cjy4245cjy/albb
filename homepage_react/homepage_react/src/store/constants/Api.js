const API_ROOT = "/api"
const API_SERVICES = '/services'
const API_PB = API_ROOT + '/pointbuy'
const API_PBS = API_ROOT + '/pbsupport'
const API_SIM = API_ROOT + '/simpb'
const API_AD = API_ROOT + '/advisers'
const API_AD_O = API_ROOT + '/adviser'
const API_ACT = API_ROOT + '/activity'
const API_USER = API_SERVICES + '/user'
const API_FUNDS = API_SERVICES + '/funds'
const API_USEREXT = API_SERVICES + '/userExt'
const API_PT = API_SERVICES + '/pt'
const TYPES = {
  POST: 'post',
  GET: 'get'
}

export default {
  pb: {
    //首页最赚钱策略排行榜
    getTopProfit: {
      url: API_PBS + "/v2/trade/getTopProfit",
      type: TYPES.POST
    },
    //首页数据统计
    getFirstPageSum: {
      url: API_PBS + "/v2/trade/getFirstPageSum",
      type: TYPES.POST
    },
    // 模拟三高手
    getSimNiuBility: {
      url: API_PBS + "/v1/simu/niubility",
      type: TYPES.POST
    },
    // 实盘三高手
    getRealNiuBility: {
      url: API_PBS + "/v1/real/niubility",
      type: TYPES.POST
    },
    // 模拟最近买入和盈利
    getSimBuyAndProfit: {
      url: API_PBS + "/v1/simu/buyAndProfit",
      type: TYPES.POST
    },
    // 实盘最近买入和盈利
    getRealBuyAndProfit: {
      url: API_PBS + "/v1/real/buyAndProfit",
      type: TYPES.POST
    },
    // 观察与取消
    inviterLookOn: {
      url: API_PBS + "/v1/inviter/lookOn",
      type: TYPES.POST
    }
  },
  simpb: {
    //首页模拟策略排行榜
    getrankingList: {
      url: API_SIM + "/v2/strategy/getTopProfit",
      type: TYPES.POST
    },
    //参赛人数
    getSimuUserCount: {
      url: API_SIM + "/v2/strategy/getSimuUserCount",
      type: TYPES.POST
    }
  },
  advisers: {
    //最新内参
    getNewAdvisers: {
      url: API_AD + "/tactic/list",
      type: TYPES.GET
    },
    //首页观点
    getViewLists: {
      url: API_AD + "/view/list",
      type: TYPES.GET
    },
    //首页问答
    getAdvisoryLists: {
      url: API_AD_O + "/advisory/list",
      type: TYPES.GET
    },
    //首页数据统计
    getAdviserRanking: {
      url: API_AD_O + "/adviser/ranking",
      type: TYPES.POST
    },
    //喜欢
    getLike: {
      url: API_AD_O + "/user/like",
      type: TYPES.POST,
      form:true
    },
    getUnLike: {
      url: API_AD_O + "/user/unlike",
      type: TYPES.POST,
      form:true
    },
    //关注
    getFocus: {
      url: API_AD_O + "/user/focus",
      type: TYPES.POST,
      form:true
    },
    getUnFocus: {
      url: API_AD_O + "/user/unfocus",
      type: TYPES.POST,
      form:true
    }
  },
  home: {
    //ban图
    getBanner: {
      url: API_AD_O + "/home/ads",
      type: TYPES.GET
    },
    //获取推广人数
    getPromoteSummary: {
      url: API_PBS+ "/v2/inviter/promoteSummary",
      type: TYPES.POST
    },
    // 是否交易日
    isTradeDay: {
      url: API_PB + '/v2/trade/tradestrategy/istradeday',
      type: TYPES.GET
    }
  },
  user: {
    // 获取用户资产详情
    getAssets: {
      url: API_FUNDS + "/status",
      type: TYPES.GET,
      xform: true
    },
    // 获取用户策略账户详情
    getStrategyAssets: {
      url: API_PBS + "/v2/user/query/fundstat",
      type: TYPES.POST
    },
    //用户信息
    getInfo: {
      url: API_USER + "/info",
      type: TYPES.GET
    }
  },
  activity: {
    //首页公告列表
    getNoticeList: {
      url: API_PT + "/announcements",
      type: TYPES.POST
    },
    //公告详情
    getNoticeDetail: {
      url: API_PT + "/announcement",
      type: TYPES.POST
    },
    //新闻列表
    getNewsList: {
      url: API_PT + "/news",
      type: TYPES.POST
    },
    //获取意见信息
    getSuggestions: {
      url: API_ACT + "/opinion/suggestions",
      type: TYPES.POST
    },
    //获取投诉信息
    getComplaint: {
      url: API_ACT + "/opinion/complaint",
      type: TYPES.POST
    },
    //获取咨询信息
    getQuestions: {
      url: API_ACT + "/opinion/questions",
      type: TYPES.POST
    },
    //提交问题
    setQuestions: {
      url: API_USEREXT + "/feedback",
      type: TYPES.POST
    }
  }
}
