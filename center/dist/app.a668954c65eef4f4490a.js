webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(382);


/***/ }),

/***/ 16:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var API_ROOT = "/api";
	var API_SERVICES = '/services';
	var API_PB = API_ROOT + '/pointbuy';
	var API_PBS = API_ROOT + '/pbsupport';
	var API_ASS = API_ROOT + '/ass';
	var API_ADVISER = API_ROOT + '/adviser';
	var API_ACTIVITY = API_ROOT + '/activity';
	var API_BONUS = API_ROOT + '/bonus';
	var API_USER = API_SERVICES + '/user';
	var API_FUNDS = API_SERVICES + '/funds';
	var API_FUNDSEXT = API_SERVICES + '/fundsExt';
	var API_USEREXT = API_SERVICES + '/userExt';
	var API_PT = API_SERVICES + '/pt';
	var TYPES = {
	  POST: 'post',
	  GET: 'get'
	};
	
	exports.default = {
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
	};

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _superagent = __webpack_require__(296);
	
	var _superagent2 = _interopRequireDefault(_superagent);
	
	var _Sign = __webpack_require__(390);
	
	var _Sign2 = _interopRequireDefault(_Sign);
	
	var _Cookie = __webpack_require__(60);
	
	var _Cookie2 = _interopRequireDefault(_Cookie);
	
	var _Global = __webpack_require__(173);
	
	var _Global2 = _interopRequireDefault(_Global);
	
	var _Runtime = __webpack_require__(27);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var domain = (0, _Runtime.getDomain)();
	var cookieOptions = {
	  domain: domain,
	  path: '/'
	};
	
	function getCommonHeader() {
	  var signRes = _Sign2.default.signMd5();
	  var sid = _Cookie2.default.get('sid', cookieOptions);
	
	  // 通用参数
	  var commonParams = {
	    cClientType: 1, // 浏览器
	    cUserId: _Cookie2.default.get('uid', cookieOptions),
	    cSid: sid,
	    cAddress: '',
	    cLongitude: -1,
	    cLatitude: -1,
	    cSoftVersion: '',
	    cSystemVersion: '',
	    cDeviceId: '',
	    cSignVersion: 1,
	    cTime: signRes.time,
	    cSign: signRes.sign,
	    sid: sid
	  };
	  return commonParams;
	}
	
	function call(inf, params, callback) {
	  if (arguments.length == 2) {
	    callback = params;
	    params = {};
	  }
	
	  var domain = (0, _Runtime.getDomain)();
	  var commonParams = getCommonHeader();
	
	  params = params || {};
	  params.uid = params.uid || commonParams.cUserId || '';
	  params.sid = params.sid || commonParams.cSid || '';
	  params.time = commonParams.cTime;
	  //params.sign = commonParams.cSign
	
	  var type = inf.type.toLowerCase();
	  var req = _superagent2.default[type](inf.url).set(commonParams);
	  if (inf.form) {
	    for (var p in params) {
	      req = req.field(p, params[p]);
	    }
	  } else if (inf.xform) {
	    req.type('form').send(params);
	  } else {
	    req = req[type == 'post' ? 'send' : 'query'](params);
	  }
	
	  req.end(function (err, res) {
	    if (_Global2.default.DEBUG) console.log('请求[' + type.toUpperCase() + ']:' + inf.url);
	    var result = JSON.parse(res.text);
	    if (isNaN(result.code)) result.code = result.errcode;
	    if (result.code == -2) {
	      location.href = "//user." + domain + "/login.html?url=" + location.href;
	    }
	    if (_Global2.default.DEBUG) console.log(result);
	    result.msg = result.msg || result.message || result.errmsg;
	    callback(result);
	  });
	}
	
	var PROTOCOL = location.protocol;
	var SINA_SUGGEST_URL = PROTOCOL + "//suggest3.sinajs.cn/suggest/type=111&key=%key%&name=suggestdata_%ts%";
	var SINA_STOCK_URL = PROTOCOL + "//hq.sinajs.cn/%ts%&list=";
	
	function removeElement(_element) {
	  var _parentElement = _element.parentNode;
	  if (_parentElement) {
	    _parentElement.removeChild(_element);
	  }
	}
	
	function getScript(url, callback) {
	  var oScript = document.createElement('script');
	  oScript.type = 'text/javascript';
	  oScript.async = true;
	  oScript.src = url;
	  /*
	  ** script标签的onload和onreadystatechange事件
	  ** IE6/7/8支持onreadystatechange事件
	  ** IE9/10支持onreadystatechange和onload事件
	  ** Firefox/Chrome/Opera支持onload事件
	  */
	
	  // 判断IE8及以下浏览器
	  var isIE = !-[1];
	  if (isIE) {
	    oScript.onreadystatechange = function () {
	      if (this.readyState == 'loaded' || this.readyState == 'complete') {
	        removeElement(oScript);
	        callback();
	      }
	    };
	  } else {
	    // IE9及以上浏览器，Firefox，Chrome，Opera
	    oScript.onload = function () {
	      removeElement(oScript);
	      callback();
	    };
	  }
	  document.body.appendChild(oScript);
	}
	
	// 获取股票输入建议
	function callSuggest(key, callback) {
	  if (!key.length) {
	    if (callback) callback({ data: [] });
	    return;
	  }
	  var ts = new Date().getTime().toString();
	  getScript(SINA_SUGGEST_URL.replace(/%ts%/g, ts).replace(/%key%/g, key), function () {
	    var s,
	        r = [];
	    s = (window['suggestdata_' + ts] || '').split(';');
	    for (var i = 0; i < s.length; i++) {
	      if (!s[i].length) continue;
	      var d = s[i].split(',');
	      r.push({
	        stockCode: d[2],
	        stockFullCode: d[3],
	        stockName: d[4],
	        stockShortPy: d[5]
	      });
	    }
	    if (callback && r.length) callback({ data: r });
	  });
	}
	
	// 获取股票信息
	function callStockInfo(codes, callback) {
	  if (!codes.length) return;
	  if (codes.indexOf(',') > 0) codes = codes.split(',');
	  if (!(codes instanceof Array)) codes = [codes];
	  getScript(SINA_STOCK_URL.replace(/%ts%/, new Date().getTime()) + codes.join(','), function () {
	    var s,
	        r = [];
	    for (var i = 0; i < codes.length; i++) {
	      s = (window['hq_str_' + codes[i]] || '').split(',');
	
	      if (!s.length) continue;
	      r.push({
	        stockName: s[0],
	        stockFullCode: codes[i],
	        todayStartPrice: parseFloat(s[1]).toFixed(2),
	        yesterdayEndPrice: parseFloat(s[2]).toFixed(2),
	        nowPrice: parseFloat(s[3]).toFixed(2),
	        todayMaxPrice: parseFloat(s[4]).toFixed(2),
	        todayMinPrice: parseFloat(s[5]).toFixed(2),
	        buy1: parseInt(s[10] / 100),
	        buy1Price: parseFloat(s[11]).toFixed(2),
	        buy2: parseInt(s[12] / 100),
	        buy2Price: parseFloat(s[13]).toFixed(2),
	        buy3: parseInt(s[14] / 100),
	        buy3Price: parseFloat(s[15]).toFixed(2),
	        buy4: parseInt(s[16] / 100),
	        buy4Price: parseFloat(s[17]).toFixed(2),
	        buy5: parseInt(s[18] / 100),
	        buy5Price: parseFloat(s[19]).toFixed(2),
	        sell1: parseInt(s[20] / 100),
	        sell1Price: parseFloat(s[21]).toFixed(2),
	        sell2: parseInt(s[22] / 100),
	        sell2Price: parseFloat(s[23]).toFixed(2),
	        sell3: parseInt(s[24] / 100),
	        sell3Price: parseFloat(s[25]).toFixed(2),
	        sell4: parseInt(s[26] / 100),
	        sell4Price: parseFloat(s[27]).toFixed(2),
	        sell5: parseInt(s[28] / 100),
	        sell5Price: parseFloat(s[29]).toFixed(2),
	        limitUp: (s[2] * (1 + 0.1)).toFixed(2),
	        limitDown: (s[2] * (1 - 0.1)).toFixed(2),
	        increase: (s[3] - s[2]).toFixed(2),
	        increasePercent: ((s[3] - s[2]) / s[2] * 100).toFixed(2)
	      });
	    }
	    if (callback) callback({ data: r });
	  });
	}
	
	exports.default = {
	  call: call,
	  callSuggest: callSuggest,
	  callStockInfo: callStockInfo,
	  getCommonHeader: getCommonHeader
	};

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.showCardBindDialog = showCardBindDialog;
	exports.loadUserInfo = loadUserInfo;
	exports.loadUserAssets = loadUserAssets;
	exports.loadUserStrategyAssets = loadUserStrategyAssets;
	exports.loadUserBankCardList = loadUserBankCardList;
	exports.loadUserDataCount = loadUserDataCount;
	exports.setUserDataCount = setUserDataCount;
	exports.firstSetTradePwd = firstSetTradePwd;
	exports.setNickName = setNickName;
	exports.setHeadPic = setHeadPic;
	exports.syncCookieInfo = syncCookieInfo;
	exports.setSpreadQRCode = setSpreadQRCode;
	exports.addIMEvent = addIMEvent;
	exports.removeIMEvent = removeIMEvent;
	
	var _Api = __webpack_require__(16);
	
	var _Api2 = _interopRequireDefault(_Api);
	
	var _ApiCaller = __webpack_require__(17);
	
	var _ApiCaller2 = _interopRequireDefault(_ApiCaller);
	
	var _Cookie = __webpack_require__(60);
	
	var _Cookie2 = _interopRequireDefault(_Cookie);
	
	var _ActionTypes = __webpack_require__(70);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	// 打开/关闭银行卡绑定弹窗
	function showCardBindDialog(visible) {
	  return {
	    type: _ActionTypes.GLOBAL_SET_CARD_BIND_DIALOG,
	    visible: visible
	  };
	}
	
	// 异步加载个人信息
	function loadUserInfo(callback) {
	  return function (dispath) {
	    _ApiCaller2.default.call(_Api2.default.user.getInfo, function (res) {
	      dispath({
	        type: _ActionTypes.USER_LOAD_INFO,
	        info: res.data
	      });
	      if (callback) callback(res.data);
	    });
	  };
	}
	
	// 异步加载资产
	function loadUserAssets() {
	  return function (dispath) {
	    _ApiCaller2.default.call(_Api2.default.user.getAssets, function (res) {
	      dispath({
	        type: _ActionTypes.USER_LOAD_ASSETS,
	        assets: res.data
	      });
	    });
	  };
	}
	
	// 异步加载策略账户资产
	function loadUserStrategyAssets() {
	  return function (dispath) {
	    _ApiCaller2.default.call(_Api2.default.user.getStrategyAssets, function (res) {
	      dispath({
	        type: _ActionTypes.USER_LOAD_STRATEGY_ASSETS,
	        assets: res.data
	      });
	    });
	  };
	}
	
	// 异步加载用户银行卡信息
	function loadUserBankCardList() {
	  return function (dispath) {
	    _ApiCaller2.default.call(_Api2.default.user.getBankCardList, function (res) {
	      var bankCards = [];
	      for (var i in res.datas) {
	        if (res.datas[i].status == 1) bankCards.push(res.datas[i]);
	      }
	      dispath({
	        type: _ActionTypes.USER_LOAD_BANK_CARD,
	        list: bankCards
	      });
	    });
	  };
	}
	
	// 异步加载用户数据统计
	function loadUserDataCount() {
	  return function (dispath) {
	    _ApiCaller2.default.call(_Api2.default.user.getDataCount, function (res) {
	      dispath({
	        type: _ActionTypes.USER_LOAD_DATA_COUNT,
	        count: res.datas
	      });
	    });
	  };
	}
	
	// 设置用户数据统计
	function setUserDataCount(dataCount) {
	  return {
	    type: _ActionTypes.USER_SET_DATA_COUNT,
	    dataCount: dataCount
	  };
	}
	
	// 首次设置交易密码
	function firstSetTradePwd() {
	  return {
	    type: _ActionTypes.USER_SET_TRADE_PWD
	  };
	}
	
	// 设置昵称
	function setNickName(nickName) {
	  return {
	    type: _ActionTypes.USER_SET_NICK_NAME,
	    nickName: nickName
	  };
	}
	
	function setHeadPic(headPic) {
	  return {
	    type: _ActionTypes.USER_SET_HEAD_PIC,
	    headPic: headPic
	  };
	}
	
	// 从 cookie 同步
	function syncCookieInfo() {
	  var host = location.host;
	  var domain = host.substr(host.indexOf('zjqycf'));
	  var options = {
	    domain: domain,
	    path: '/'
	  };
	
	  return {
	    type: _ActionTypes.USER_SYNC_COOKIE_INFO,
	    info: {
	      uid: _Cookie2.default.get('uid', options),
	      sid: _Cookie2.default.get('sid', options),
	      phone: _Cookie2.default.get('phone', options),
	      userType: _Cookie2.default.get('userType', options)
	    }
	  };
	}
	
	function setSpreadQRCode(data) {
	  return {
	    type: _ActionTypes.USER_SET_SPREAD_QRCODE,
	    data: data
	  };
	}
	
	function addIMEvent(type, eventHandler) {
	  return {
	    type: _ActionTypes.IM_ADD_EVENT,
	    data: {
	      type: type,
	      eventHandler: eventHandler
	    }
	  };
	}
	
	function removeIMEvent(type) {
	  return {
	    type: _ActionTypes.IM_REMOVE_EVENT,
	    data: {
	      type: type
	    }
	  };
	}

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

	'use strict';
	
	function getDomain() {
	  var host = location.host;
	  return host.substr(host.indexOf('zjqycf'));
	}
	
	module.exports = {
	  getDomain: getDomain
	};

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fixed = fixed;
	exports.money = money;
	exports.date = date;
	function fixed(num, places, halfUp) {
	    num = num || 0;
	    places = !isNaN(places = Math.abs(places)) ? places : 2;
	
	    if (!halfUp) {
	        num = num.toFixed(places + 1);
	        // 丢掉最后一位
	        num = num.toString();
	        num = num.substr(0, num.length - 1);
	    } else num = num.toFixed(places);
	    return num;
	}
	
	function money(number, places, symbol, thousand, decimal) {
	    number = number || 0;
	    places = !isNaN(places = Math.abs(places)) ? places : 2;
	    symbol = symbol !== undefined ? symbol : "$";
	    thousand = thousand || ",";
	    decimal = decimal || ".";
	    var negative = number < 0 ? "-" : "",
	        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
	        j = (j = i.length) > 3 ? j % 3 : 0;
	    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
	}
	
	/**
	 * 将 Date 转化为指定格式的String * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
	 * 可以用 1-2 个占位符 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
	 * @param date
	 * @param fmt
	 * @returns {*}
	 */
	function date(date, fmt) {
	    date = new Date(parseInt(date));
	    var o = {
	        "M+": date.getMonth() + 1, //月份
	        "d+": date.getDate(), //日
	        "h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, //小时
	        "H+": date.getHours(), //小时
	        "m+": date.getMinutes(), //分
	        "s+": date.getSeconds(), //秒
	        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
	        "S": date.getMilliseconds() //毫秒
	    };
	    var week = {
	        "0": "/u65e5",
	        "1": "/u4e00",
	        "2": "/u4e8c",
	        "3": "/u4e09",
	        "4": "/u56db",
	        "5": "/u4e94",
	        "6": "/u516d"
	    };
	    if (/(y+)/.test(fmt)) {
	        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	    }
	    if (/(E+)/.test(fmt)) {
	        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468" : "") + week[date.getDay() + ""]);
	    }
	    for (var k in o) {
	        if (new RegExp("(" + k + ")").test(fmt)) {
	            fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
	        }
	    }
	    return fmt;
	}

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Card = function (_React$Component) {
	  _inherits(Card, _React$Component);
	
	  function Card() {
	    _classCallCheck(this, Card);
	
	    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
	  }
	
	  _createClass(Card, [{
	    key: 'render',
	    value: function render() {
	      var cardClass = (0, _classnames2.default)({
	        'card': true,
	        'notb': !!this.props.noBorderTop,
	        'nobb': !!this.props.noBorderBottom,
	        'hide': !!this.props.hide
	      });
	
	      var cardStyle = {
	        marginTop: this.props.marginTop || '0',
	        height: this.props.height || 'auto'
	      };
	
	      var titleClass = 'title';
	      titleClass += this.props.showTitle == false ? ' hide' : '';
	
	      var bodyStyle = {
	        minHeight: this.props.bodyHeight || 'auto',
	        position: this.props.position || ''
	      };
	      return _react2.default.createElement(
	        'div',
	        { className: cardClass, style: cardStyle },
	        _react2.default.createElement(
	          'div',
	          { className: titleClass },
	          _react2.default.createElement(
	            'span',
	            null,
	            this.props.title
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'body', style: bodyStyle },
	          this.props.children
	        )
	      );
	    }
	  }]);
	
	  return Card;
	}(_react2.default.Component);
	
	exports.default = Card;

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	// Cookie
	// -------------
	// Thanks to:
	//  - http://www.nczonline.net/blog/2009/05/05/http-cookies-explained/
	//  - http://developer.yahoo.com/yui/3/cookie/
	
	
	var Cookie = function Cookie() {
	    _classCallCheck(this, Cookie);
	};
	
	var decode = decodeURIComponent;
	var encode = encodeURIComponent;
	
	/**
	 * Returns the cookie value for the given name.
	 *
	 * @param {String} name The name of the cookie to retrieve.
	 *
	 * @param {Function|Object} options (Optional) An object containing one or
	 *     more cookie options: raw (true/false) and converter (a function).
	 *     The converter function is run on the value before returning it. The
	 *     function is not used if the cookie doesn't exist. The function can be
	 *     passed instead of the options object for conveniently. When raw is
	 *     set to true, the cookie value is not URI decoded.
	 *
	 * @return {*} If no converter is specified, returns a string or undefined
	 *     if the cookie doesn't exist. If the converter is specified, returns
	 *     the value returned from the converter.
	 */
	Cookie.get = function (name, options) {
	    validateCookieName(name);
	
	    if (typeof options === 'function') {
	        options = { converter: options };
	    } else {
	        options = options || {};
	    }
	
	    var cookies = parseCookieString(document.cookie, !options['raw']);
	    return (options.converter || same)(cookies[name]);
	};
	
	/**
	 * Sets a cookie with a given name and value.
	 *
	 * @param {string} name The name of the cookie to set.
	 *
	 * @param {*} value The value to set for the cookie.
	 *
	 * @param {Object} options (Optional) An object containing one or more
	 *     cookie options: path (a string), domain (a string),
	 *     expires (number or a Date object), secure (true/false),
	 *     and raw (true/false). Setting raw to true indicates that the cookie
	 *     should not be URI encoded before being set.
	 *
	 * @return {string} The created cookie string.
	 */
	Cookie.set = function (name, value, options) {
	    validateCookieName(name);
	
	    options = options || {};
	    var expires = options['expires'];
	    var domain = options['domain'];
	    var path = options['path'];
	
	    if (!options['raw']) {
	        value = encode(String(value));
	    }
	
	    var text = name + '=' + value;
	
	    // expires
	    var date = expires;
	    if (typeof date === 'number') {
	        date = new Date();
	        date.setDate(date.getDate() + expires);
	    }
	    if (date instanceof Date) {
	        text += '; expires=' + date.toUTCString();
	    }
	
	    // domain
	    if (isNonEmptyString(domain)) {
	        text += '; domain=' + domain;
	    }
	
	    // path
	    if (isNonEmptyString(path)) {
	        text += '; path=' + path;
	    }
	
	    // secure
	    if (options['secure']) {
	        text += '; secure';
	    }
	
	    document.cookie = text;
	    return text;
	};
	
	/**
	 * Removes a cookie from the machine by setting its expiration date to
	 * sometime in the past.
	 *
	 * @param {string} name The name of the cookie to remove.
	 *
	 * @param {Object} options (Optional) An object containing one or more
	 *     cookie options: path (a string), domain (a string),
	 *     and secure (true/false). The expires option will be overwritten
	 *     by the method.
	 *
	 * @return {string} The created cookie string.
	 */
	Cookie.remove = function (name, options) {
	    options = options || {};
	    options['expires'] = new Date(0);
	    return this.set(name, '', options);
	};
	
	function parseCookieString(text, shouldDecode) {
	    var cookies = {};
	
	    if (isString(text) && text.length > 0) {
	
	        var decodeValue = shouldDecode ? decode : same;
	        var cookieParts = text.split(/;\s/g);
	        var cookieName;
	        var cookieValue;
	        var cookieNameValue;
	
	        for (var i = 0, len = cookieParts.length; i < len; i++) {
	
	            // Check for normally-formatted cookie (name-value)
	            cookieNameValue = cookieParts[i].match(/([^=]+)=/i);
	            if (cookieNameValue instanceof Array) {
	                try {
	                    cookieName = decode(cookieNameValue[1]);
	                    cookieValue = decodeValue(cookieParts[i].substring(cookieNameValue[1].length + 1));
	                } catch (ex) {
	                    // Intentionally ignore the cookie -
	                    // the encoding is wrong
	                }
	            } else {
	                // Means the cookie does not have an "=", so treat it as
	                // a boolean flag
	                cookieName = decode(cookieParts[i]);
	                cookieValue = '';
	            }
	
	            if (cookieName) {
	                cookies[cookieName] = cookieValue;
	            }
	        }
	    }
	
	    return cookies;
	}
	
	// Helpers
	
	function isString(o) {
	    return typeof o === 'string';
	}
	
	function isNonEmptyString(s) {
	    return isString(s) && s !== '';
	}
	
	function validateCookieName(name) {
	    if (!isNonEmptyString(name)) {
	        throw new TypeError('Cookie name must be a non-empty string');
	    }
	}
	
	function same(s) {
	    return s;
	}
	
	exports.default = Cookie;

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keyMirror = __webpack_require__(473);
	
	var _keyMirror2 = _interopRequireDefault(_keyMirror);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.default = (0, _keyMirror2.default)({
	  // 加载用户详情
	  USER_LOAD_INFO: null,
	  // 加载资产
	  USER_LOAD_ASSETS: null,
	  // 加载策略账户资产
	  USER_LOAD_STRATEGY_ASSETS: null,
	  // 加载用户银行卡列表
	  USER_LOAD_BANK_CARD: null,
	  // 获取用户数据统计
	  USER_LOAD_DATA_COUNT: null,
	  // 设置用户数据统计
	  USER_SET_DATA_COUNT: null,
	  // 新设置交易密码
	  USER_SET_TRADE_PWD: null,
	  // 设置昵称
	  USER_SET_NICK_NAME: null,
	  // 更新头像
	  USER_SET_HEAD_PIC: null,
	  // 从 cookie 同步信息
	  USER_SYNC_COOKIE_INFO: null,
	  // 生成推广二维码
	  USER_SET_SPREAD_QRCODE: null,
	  // 打开/关闭绑定银行卡弹窗
	  GLOBAL_SET_CARD_BIND_DIALOG: null,
	  // 注册 IM 监听
	  IM_ADD_EVENT: null,
	  // 移除 IM 监听
	  IM_REMOVE_EVENT: null
	});
	
	module.exports = exports['default'];

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function Md5(string) {
	    function RotateLeft(lValue, iShiftBits) {
	        return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
	    }
	    function AddUnsigned(lX, lY) {
	        var lX4, lY4, lX8, lY8, lResult;
	        lX8 = lX & 0x80000000;
	        lY8 = lY & 0x80000000;
	        lX4 = lX & 0x40000000;
	        lY4 = lY & 0x40000000;
	        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
	        if (lX4 & lY4) {
	            return lResult ^ 0x80000000 ^ lX8 ^ lY8;
	        }
	        if (lX4 | lY4) {
	            if (lResult & 0x40000000) {
	                return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
	            } else {
	                return lResult ^ 0x40000000 ^ lX8 ^ lY8;
	            }
	        } else {
	            return lResult ^ lX8 ^ lY8;
	        }
	    }
	
	    function F(x, y, z) {
	        return x & y | ~x & z;
	    }
	    function G(x, y, z) {
	        return x & z | y & ~z;
	    }
	    function H(x, y, z) {
	        return x ^ y ^ z;
	    }
	    function I(x, y, z) {
	        return y ^ (x | ~z);
	    }
	
	    function FF(a, b, c, d, x, s, ac) {
	        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
	        return AddUnsigned(RotateLeft(a, s), b);
	    };
	
	    function GG(a, b, c, d, x, s, ac) {
	        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
	        return AddUnsigned(RotateLeft(a, s), b);
	    };
	
	    function HH(a, b, c, d, x, s, ac) {
	        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
	        return AddUnsigned(RotateLeft(a, s), b);
	    };
	
	    function II(a, b, c, d, x, s, ac) {
	        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
	        return AddUnsigned(RotateLeft(a, s), b);
	    };
	
	    function ConvertToWordArray(string) {
	        var lWordCount;
	        var lMessageLength = string.length;
	        var lNumberOfWords_temp1 = lMessageLength + 8;
	        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
	        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
	        var lWordArray = Array(lNumberOfWords - 1);
	        var lBytePosition = 0;
	        var lByteCount = 0;
	        while (lByteCount < lMessageLength) {
	            lWordCount = (lByteCount - lByteCount % 4) / 4;
	            lBytePosition = lByteCount % 4 * 8;
	            lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
	            lByteCount++;
	        }
	        lWordCount = (lByteCount - lByteCount % 4) / 4;
	        lBytePosition = lByteCount % 4 * 8;
	        lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
	        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
	        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
	        return lWordArray;
	    };
	
	    function WordToHex(lValue) {
	        var WordToHexValue = "",
	            WordToHexValue_temp = "",
	            lByte,
	            lCount;
	        for (lCount = 0; lCount <= 3; lCount++) {
	            lByte = lValue >>> lCount * 8 & 255;
	            WordToHexValue_temp = "0" + lByte.toString(16);
	            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
	        }
	        return WordToHexValue;
	    };
	
	    function Utf8Encode(string) {
	        string = string.replace(/\r\n/g, "\n");
	        var utftext = "";
	
	        for (var n = 0; n < string.length; n++) {
	
	            var c = string.charCodeAt(n);
	
	            if (c < 128) {
	                utftext += String.fromCharCode(c);
	            } else if (c > 127 && c < 2048) {
	                utftext += String.fromCharCode(c >> 6 | 192);
	                utftext += String.fromCharCode(c & 63 | 128);
	            } else {
	                utftext += String.fromCharCode(c >> 12 | 224);
	                utftext += String.fromCharCode(c >> 6 & 63 | 128);
	                utftext += String.fromCharCode(c & 63 | 128);
	            }
	        }
	
	        return utftext;
	    };
	
	    var x = Array();
	    var k, AA, BB, CC, DD, a, b, c, d;
	    var S11 = 7,
	        S12 = 12,
	        S13 = 17,
	        S14 = 22;
	    var S21 = 5,
	        S22 = 9,
	        S23 = 14,
	        S24 = 20;
	    var S31 = 4,
	        S32 = 11,
	        S33 = 16,
	        S34 = 23;
	    var S41 = 6,
	        S42 = 10,
	        S43 = 15,
	        S44 = 21;
	
	    string = Utf8Encode(string);
	
	    x = ConvertToWordArray(string);
	
	    a = 0x67452301;b = 0xEFCDAB89;c = 0x98BADCFE;d = 0x10325476;
	
	    for (k = 0; k < x.length; k += 16) {
	        AA = a;BB = b;CC = c;DD = d;
	        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
	        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
	        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
	        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
	        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
	        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
	        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
	        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
	        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
	        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
	        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
	        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
	        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
	        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
	        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
	        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
	        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
	        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
	        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
	        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
	        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
	        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
	        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
	        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
	        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
	        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
	        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
	        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
	        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
	        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
	        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
	        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
	        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
	        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
	        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
	        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
	        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
	        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
	        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
	        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
	        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
	        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
	        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
	        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
	        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
	        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
	        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
	        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
	        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
	        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
	        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
	        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
	        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
	        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
	        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
	        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
	        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
	        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
	        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
	        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
	        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
	        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
	        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
	        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
	        a = AddUnsigned(a, AA);
	        b = AddUnsigned(b, BB);
	        c = AddUnsigned(c, CC);
	        d = AddUnsigned(d, DD);
	    }
	
	    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
	
	    return temp.toLowerCase();
	}
	
	exports.default = {
	    encryptMd5: Md5
	};

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * 身份证15位编码规则：dddddd yymmdd xx p
	 * dddddd：地区码
	 * yymmdd: 出生年月日
	 * xx: 顺序类编码，无法确定
	 * p: 性别，奇数为男，偶数为女
	 * <p />
	 * 身份证18位编码规则：dddddd yyyymmdd xxx y
	 * dddddd：地区码
	 * yyyymmdd: 出生年月日
	 * xxx:顺序类编码，无法确定，奇数为男，偶数为女
	 * y: 校验码，该位数值可通过前17位计算获得
	 * <p />
	 * 18位号码加权因子为(从右到左) Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2,1 ]
	 * 验证位 Y = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ]
	 * 校验位计算公式：Y_P = mod( ∑(Ai×Wi),11 )
	 * i为身份证号码从右往左数的 2...18 位; Y_P为脚丫校验码所在校验码数组位置
	 *
	 */
	var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]; // 加权因子
	var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; // 身份证验证位值.10代表X
	function IdCardValidate(idCard) {
	    if (!idCard) return false;
	    idCard = trim(idCard.replace(/ /g, ""));
	    if (idCard.length == 15) {
	        return isValidityBrithBy15IdCard(idCard);
	    } else if (idCard.length == 18) {
	        var a_idCard = idCard.split(""); // 得到身份证数组
	        if (isValidityBrithBy18IdCard(idCard) && isTrueValidateCodeBy18IdCard(a_idCard)) {
	            return true;
	        } else {
	            return false;
	        }
	    } else {
	        return false;
	    }
	}
	/**
	 * 判断身份证号码为18位时最后的验证位是否正确
	 * @param a_idCard 身份证号码数组
	 * @return
	 */
	function isTrueValidateCodeBy18IdCard(a_idCard) {
	    var sum = 0; // 声明加权求和变量
	    if (a_idCard[17].toLowerCase() == 'x') {
	        a_idCard[17] = 10; // 将最后位为x的验证码替换为10方便后续操作
	    }
	    for (var i = 0; i < 17; i++) {
	        sum += Wi[i] * a_idCard[i]; // 加权求和
	    }
	    var valCodePosition = sum % 11; // 得到验证码所位置
	    if (a_idCard[17] == ValideCode[valCodePosition]) {
	        return true;
	    } else {
	        return false;
	    }
	}
	/**
	 * 通过身份证判断是男是女
	 * @param idCard 15/18位身份证号码
	 * @return 'female'-女、'male'-男
	 */
	function maleOrFemalByIdCard(idCard) {
	    idCard = trim(idCard.replace(/ /g, "")); // 对身份证号码做处理。包括字符间有空格。
	    if (idCard.length == 15) {
	        if (idCard.substring(14, 15) % 2 == 0) {
	            return 'female';
	        } else {
	            return 'male';
	        }
	    } else if (idCard.length == 18) {
	        if (idCard.substring(14, 17) % 2 == 0) {
	            return 'female';
	        } else {
	            return 'male';
	        }
	    } else {
	        return null;
	    }
	}
	/**
	 * 验证18位数身份证号码中的生日是否是有效生日
	 * @param idCard 18位书身份证字符串
	 * @return
	 */
	function isValidityBrithBy18IdCard(idCard18) {
	    var year = idCard18.substring(6, 10);
	    var month = idCard18.substring(10, 12);
	    var day = idCard18.substring(12, 14);
	    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
	    // 这里用getFullYear()获取年份，避免千年虫问题
	    if (temp_date.getFullYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {
	        return false;
	    } else {
	        return true;
	    }
	}
	/**
	 * 验证15位数身份证号码中的生日是否是有效生日
	 * @param idCard15 15位书身份证字符串
	 * @return
	 */
	function isValidityBrithBy15IdCard(idCard15) {
	    var year = idCard15.substring(6, 8);
	    var month = idCard15.substring(8, 10);
	    var day = idCard15.substring(10, 12);
	    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
	    // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
	    if (temp_date.getYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {
	        return false;
	    } else {
	        return true;
	    }
	}
	//去掉字符串头尾空格
	function trim(str) {
	    return str.replace(/(^\s*)|(\s*$)/g, "");
	}
	
	/**
	  * 现行 16 位银联卡现行卡号开头 6 位是 622126～622925 之间的，7 到 15 位是银行自定义的，
	  * 可能是发卡分行，发卡网点，发卡序号，第 16 位是校验码。
	  * 16 位卡号校验位采用 Luhm 校验方法计算：
	  * 1，将未带校验位的 15 位卡号从右依次编号 1 到 15，位于奇数位号上的数字乘以 2
	  * 2，将奇位乘积的个十位全部相加，再加上所有偶数位上的数字
	  * 3，将加法和加上校验位能被 10 整除。
	**/
	function validateBankCard(cardNum) {
	    // 卡号16-19位
	    if (!/^[0-9]{16,19}$/.test(cardNum)) return false;
	    var bit = getBankCardCheckCode(cardNum.substring(0, cardNum.length - 1));
	    return cardNum.charAt(cardNum.length - 1) == bit;
	}
	
	// 从不含校验位的银行卡卡号采用 Luhm 校验算法获得校验位
	function getBankCardCheckCode(nonCheckCodeCardNum) {
	    var chs = nonCheckCodeCardNum.split(''); // 转成 char 数组
	    var luhmSum = 0;
	    for (var i = chs.length - 1, j = 0; i >= 0; i--, j++) {
	        var k = chs[i] - '0';
	        if (j % 2 == 0) {
	            k *= 2;
	            k = parseInt(k / 10 + k % 10);
	        }
	        luhmSum += k;
	    }
	    return luhmSum % 10 == 0 ? '0' : (10 - luhmSum % 10).toString();
	}
	
	// 验证金额
	function validateAmount(amount) {
	    return (/^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/.test(amount)
	    );
	}
	
	exports.default = {
	    idCard: IdCardValidate,
	    bankCard: validateBankCard,
	    amount: validateAmount
	};

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Global = {
	  DEBUG: true
	};
	
	exports.default = Global;

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

	"use strict";
	
	var QRCode;
	
	(function () {
	  //---------------------------------------------------------------------
	  // QRCode for JavaScript
	  //
	  // Copyright (c) 2009 Kazuhiko Arase
	  //
	  // URL: http://www.d-project.com/
	  //
	  // Licensed under the MIT license:
	  //   http://www.opensource.org/licenses/mit-license.php
	  //
	  // The word "QR Code" is registered trademark of
	  // DENSO WAVE INCORPORATED
	  //   http://www.denso-wave.com/qrcode/faqpatent-e.html
	  //
	  //---------------------------------------------------------------------
	  function QR8bitByte(data) {
	    this.mode = QRMode.MODE_8BIT_BYTE;
	    this.data = data;
	    this.parsedData = [];
	    // Added to support UTF-8 Characters
	    for (var i = 0, l = this.data.length; i < l; i++) {
	      var byteArray = [];
	      var code = this.data.charCodeAt(i);
	      if (code > 65536) {
	        byteArray[0] = 240 | (code & 1835008) >>> 18;
	        byteArray[1] = 128 | (code & 258048) >>> 12;
	        byteArray[2] = 128 | (code & 4032) >>> 6;
	        byteArray[3] = 128 | code & 63;
	      } else if (code > 2048) {
	        byteArray[0] = 224 | (code & 61440) >>> 12;
	        byteArray[1] = 128 | (code & 4032) >>> 6;
	        byteArray[2] = 128 | code & 63;
	      } else if (code > 128) {
	        byteArray[0] = 192 | (code & 1984) >>> 6;
	        byteArray[1] = 128 | code & 63;
	      } else {
	        byteArray[0] = code;
	      }
	      this.parsedData.push(byteArray);
	    }
	    this.parsedData = Array.prototype.concat.apply([], this.parsedData);
	    if (this.parsedData.length != this.data.length) {
	      this.parsedData.unshift(191);
	      this.parsedData.unshift(187);
	      this.parsedData.unshift(239);
	    }
	  }
	  QR8bitByte.prototype = {
	    getLength: function getLength(buffer) {
	      return this.parsedData.length;
	    },
	    write: function write(buffer) {
	      for (var i = 0, l = this.parsedData.length; i < l; i++) {
	        buffer.put(this.parsedData[i], 8);
	      }
	    }
	  };
	  function QRCodeModel(typeNumber, errorCorrectLevel) {
	    this.typeNumber = typeNumber;
	    this.errorCorrectLevel = errorCorrectLevel;
	    this.modules = null;
	    this.moduleCount = 0;
	    this.dataCache = null;
	    this.dataList = [];
	  }
	  function QRPolynomial(num, shift) {
	    if (num.length == undefined) throw new Error(num.length + "/" + shift);
	    var offset = 0;
	    while (offset < num.length && num[offset] == 0) {
	      offset++;
	    }this.num = new Array(num.length - offset + shift);
	    for (var i = 0; i < num.length - offset; i++) {
	      this.num[i] = num[i + offset];
	    }
	  }
	  function QRRSBlock(totalCount, dataCount) {
	    this.totalCount = totalCount, this.dataCount = dataCount;
	  }
	  function QRBitBuffer() {
	    this.buffer = [], this.length = 0;
	  }
	  QRCodeModel.prototype = {
	    addData: function addData(data) {
	      var newData = new QR8bitByte(data);
	      this.dataList.push(newData), this.dataCache = null;
	    },
	    isDark: function isDark(row, col) {
	      if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) throw new Error(row + "," + col);
	      return this.modules[row][col];
	    },
	    getModuleCount: function getModuleCount() {
	      return this.moduleCount;
	    },
	    make: function make() {
	      this.makeImpl(!1, this.getBestMaskPattern());
	    },
	    makeImpl: function makeImpl(test, maskPattern) {
	      this.moduleCount = this.typeNumber * 4 + 17, this.modules = new Array(this.moduleCount);
	      for (var row = 0; row < this.moduleCount; row++) {
	        this.modules[row] = new Array(this.moduleCount);
	        for (var col = 0; col < this.moduleCount; col++) {
	          this.modules[row][col] = null;
	        }
	      }
	      this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(test, maskPattern), this.typeNumber >= 7 && this.setupTypeNumber(test), this.dataCache == null && (this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, maskPattern);
	    },
	    setupPositionProbePattern: function setupPositionProbePattern(row, col) {
	      for (var r = -1; r <= 7; r++) {
	        if (row + r <= -1 || this.moduleCount <= row + r) continue;
	        for (var c = -1; c <= 7; c++) {
	          if (col + c <= -1 || this.moduleCount <= col + c) continue;
	          0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4 ? this.modules[row + r][col + c] = !0 : this.modules[row + r][col + c] = !1;
	        }
	      }
	    },
	    getBestMaskPattern: function getBestMaskPattern() {
	      var minLostPoint = 0,
	          pattern = 0;
	      for (var i = 0; i < 8; i++) {
	        this.makeImpl(!0, i);
	        var lostPoint = QRUtil.getLostPoint(this);
	        if (i == 0 || minLostPoint > lostPoint) minLostPoint = lostPoint, pattern = i;
	      }
	      return pattern;
	    },
	    createMovieClip: function createMovieClip(target_mc, instance_name, depth) {
	      var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth),
	          cs = 1;
	      this.make();
	      for (var row = 0; row < this.modules.length; row++) {
	        var y = row * cs;
	        for (var col = 0; col < this.modules[row].length; col++) {
	          var x = col * cs,
	              dark = this.modules[row][col];
	          dark && (qr_mc.beginFill(0, 100), qr_mc.moveTo(x, y), qr_mc.lineTo(x + cs, y), qr_mc.lineTo(x + cs, y + cs), qr_mc.lineTo(x, y + cs), qr_mc.endFill());
	        }
	      }
	      return qr_mc;
	    },
	    setupTimingPattern: function setupTimingPattern() {
	      for (var r = 8; r < this.moduleCount - 8; r++) {
	        if (this.modules[r][6] != null) continue;
	        this.modules[r][6] = r % 2 == 0;
	      }
	      for (var c = 8; c < this.moduleCount - 8; c++) {
	        if (this.modules[6][c] != null) continue;
	        this.modules[6][c] = c % 2 == 0;
	      }
	    },
	    setupPositionAdjustPattern: function setupPositionAdjustPattern() {
	      var pos = QRUtil.getPatternPosition(this.typeNumber);
	      for (var i = 0; i < pos.length; i++) {
	        for (var j = 0; j < pos.length; j++) {
	          var row = pos[i],
	              col = pos[j];
	          if (this.modules[row][col] != null) continue;
	          for (var r = -2; r <= 2; r++) {
	            for (var c = -2; c <= 2; c++) {
	              r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0 ? this.modules[row + r][col + c] = !0 : this.modules[row + r][col + c] = !1;
	            }
	          }
	        }
	      }
	    },
	    setupTypeNumber: function setupTypeNumber(test) {
	      var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
	      for (var i = 0; i < 18; i++) {
	        var mod = !test && (bits >> i & 1) == 1;
	        this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
	      }
	      for (var i = 0; i < 18; i++) {
	        var mod = !test && (bits >> i & 1) == 1;
	        this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
	      }
	    },
	    setupTypeInfo: function setupTypeInfo(test, maskPattern) {
	      var data = this.errorCorrectLevel << 3 | maskPattern,
	          bits = QRUtil.getBCHTypeInfo(data);
	      for (var i = 0; i < 15; i++) {
	        var mod = !test && (bits >> i & 1) == 1;
	        i < 6 ? this.modules[i][8] = mod : i < 8 ? this.modules[i + 1][8] = mod : this.modules[this.moduleCount - 15 + i][8] = mod;
	      }
	      for (var i = 0; i < 15; i++) {
	        var mod = !test && (bits >> i & 1) == 1;
	        i < 8 ? this.modules[8][this.moduleCount - i - 1] = mod : i < 9 ? this.modules[8][15 - i - 1 + 1] = mod : this.modules[8][15 - i - 1] = mod;
	      }
	      this.modules[this.moduleCount - 8][8] = !test;
	    },
	    mapData: function mapData(data, maskPattern) {
	      var inc = -1,
	          row = this.moduleCount - 1,
	          bitIndex = 7,
	          byteIndex = 0;
	      for (var col = this.moduleCount - 1; col > 0; col -= 2) {
	        col == 6 && col--;
	        for (;;) {
	          for (var c = 0; c < 2; c++) {
	            if (this.modules[row][col - c] == null) {
	              var dark = !1;
	              byteIndex < data.length && (dark = (data[byteIndex] >>> bitIndex & 1) == 1);
	              var mask = QRUtil.getMask(maskPattern, row, col - c);
	              mask && (dark = !dark), this.modules[row][col - c] = dark, bitIndex--, bitIndex == -1 && (byteIndex++, bitIndex = 7);
	            }
	          }row += inc;
	          if (row < 0 || this.moduleCount <= row) {
	            row -= inc, inc = -inc;
	            break;
	          }
	        }
	      }
	    }
	  };
	  QRCodeModel.PAD0 = 236;
	  QRCodeModel.PAD1 = 17;
	  QRCodeModel.createData = function (typeNumber, errorCorrectLevel, dataList) {
	    var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel),
	        buffer = new QRBitBuffer();
	    for (var i = 0; i < dataList.length; i++) {
	      var data = dataList[i];
	      buffer.put(data.mode, 4), buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber)), data.write(buffer);
	    }
	    var totalDataCount = 0;
	    for (var i = 0; i < rsBlocks.length; i++) {
	      totalDataCount += rsBlocks[i].dataCount;
	    }if (buffer.getLengthInBits() > totalDataCount * 8) throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
	    buffer.getLengthInBits() + 4 <= totalDataCount * 8 && buffer.put(0, 4);
	    while (buffer.getLengthInBits() % 8 != 0) {
	      buffer.putBit(!1);
	    }for (;;) {
	      if (buffer.getLengthInBits() >= totalDataCount * 8) break;
	      buffer.put(QRCodeModel.PAD0, 8);
	      if (buffer.getLengthInBits() >= totalDataCount * 8) break;
	      buffer.put(QRCodeModel.PAD1, 8);
	    }
	    return QRCodeModel.createBytes(buffer, rsBlocks);
	  };
	  QRCodeModel.createBytes = function (buffer, rsBlocks) {
	    var offset = 0,
	        maxDcCount = 0,
	        maxEcCount = 0,
	        dcdata = new Array(rsBlocks.length),
	        ecdata = new Array(rsBlocks.length);
	    for (var r = 0; r < rsBlocks.length; r++) {
	      var dcCount = rsBlocks[r].dataCount,
	          ecCount = rsBlocks[r].totalCount - dcCount;
	      maxDcCount = Math.max(maxDcCount, dcCount), maxEcCount = Math.max(maxEcCount, ecCount), dcdata[r] = new Array(dcCount);
	      for (var i = 0; i < dcdata[r].length; i++) {
	        dcdata[r][i] = 255 & buffer.buffer[i + offset];
	      }offset += dcCount;
	      var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount),
	          rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1),
	          modPoly = rawPoly.mod(rsPoly);
	      ecdata[r] = new Array(rsPoly.getLength() - 1);
	      for (var i = 0; i < ecdata[r].length; i++) {
	        var modIndex = i + modPoly.getLength() - ecdata[r].length;
	        ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
	      }
	    }
	    var totalCodeCount = 0;
	    for (var i = 0; i < rsBlocks.length; i++) {
	      totalCodeCount += rsBlocks[i].totalCount;
	    }var data = new Array(totalCodeCount),
	        index = 0;
	    for (var i = 0; i < maxDcCount; i++) {
	      for (var r = 0; r < rsBlocks.length; r++) {
	        i < dcdata[r].length && (data[index++] = dcdata[r][i]);
	      }
	    }for (var i = 0; i < maxEcCount; i++) {
	      for (var r = 0; r < rsBlocks.length; r++) {
	        i < ecdata[r].length && (data[index++] = ecdata[r][i]);
	      }
	    }return data;
	  };
	  var QRMode = {
	    MODE_NUMBER: 1,
	    MODE_ALPHA_NUM: 2,
	    MODE_8BIT_BYTE: 4,
	    MODE_KANJI: 8
	  },
	      QRErrorCorrectLevel = {
	    L: 1,
	    M: 0,
	    Q: 3,
	    H: 2
	  },
	      QRMaskPattern = {
	    PATTERN000: 0,
	    PATTERN001: 1,
	    PATTERN010: 2,
	    PATTERN011: 3,
	    PATTERN100: 4,
	    PATTERN101: 5,
	    PATTERN110: 6,
	    PATTERN111: 7
	  },
	      QRUtil = {
	    PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
	    G15: 1335,
	    G18: 7973,
	    G15_MASK: 21522,
	    getBCHTypeInfo: function getBCHTypeInfo(data) {
	      var d = data << 10;
	      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
	        d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
	      }return (data << 10 | d) ^ QRUtil.G15_MASK;
	    },
	    getBCHTypeNumber: function getBCHTypeNumber(data) {
	      var d = data << 12;
	      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
	        d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
	      }return data << 12 | d;
	    },
	    getBCHDigit: function getBCHDigit(data) {
	      var digit = 0;
	      while (data != 0) {
	        digit++, data >>>= 1;
	      }return digit;
	    },
	    getPatternPosition: function getPatternPosition(typeNumber) {
	      return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
	    },
	    getMask: function getMask(maskPattern, i, j) {
	      switch (maskPattern) {
	        case QRMaskPattern.PATTERN000:
	          return (i + j) % 2 == 0;
	
	        case QRMaskPattern.PATTERN001:
	          return i % 2 == 0;
	
	        case QRMaskPattern.PATTERN010:
	          return j % 3 == 0;
	
	        case QRMaskPattern.PATTERN011:
	          return (i + j) % 3 == 0;
	
	        case QRMaskPattern.PATTERN100:
	          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
	
	        case QRMaskPattern.PATTERN101:
	          return i * j % 2 + i * j % 3 == 0;
	
	        case QRMaskPattern.PATTERN110:
	          return (i * j % 2 + i * j % 3) % 2 == 0;
	
	        case QRMaskPattern.PATTERN111:
	          return (i * j % 3 + (i + j) % 2) % 2 == 0;
	
	        default:
	          throw new Error("bad maskPattern:" + maskPattern);
	      }
	    },
	    getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {
	      var a = new QRPolynomial([1], 0);
	      for (var i = 0; i < errorCorrectLength; i++) {
	        a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
	      }return a;
	    },
	    getLengthInBits: function getLengthInBits(mode, type) {
	      if (1 <= type && type < 10) switch (mode) {
	        case QRMode.MODE_NUMBER:
	          return 10;
	
	        case QRMode.MODE_ALPHA_NUM:
	          return 9;
	
	        case QRMode.MODE_8BIT_BYTE:
	          return 8;
	
	        case QRMode.MODE_KANJI:
	          return 8;
	
	        default:
	          throw new Error("mode:" + mode);
	      } else if (type < 27) switch (mode) {
	        case QRMode.MODE_NUMBER:
	          return 12;
	
	        case QRMode.MODE_ALPHA_NUM:
	          return 11;
	
	        case QRMode.MODE_8BIT_BYTE:
	          return 16;
	
	        case QRMode.MODE_KANJI:
	          return 10;
	
	        default:
	          throw new Error("mode:" + mode);
	      } else {
	        if (!(type < 41)) throw new Error("type:" + type);
	        switch (mode) {
	          case QRMode.MODE_NUMBER:
	            return 14;
	
	          case QRMode.MODE_ALPHA_NUM:
	            return 13;
	
	          case QRMode.MODE_8BIT_BYTE:
	            return 16;
	
	          case QRMode.MODE_KANJI:
	            return 12;
	
	          default:
	            throw new Error("mode:" + mode);
	        }
	      }
	    },
	    getLostPoint: function getLostPoint(qrCode) {
	      var moduleCount = qrCode.getModuleCount(),
	          lostPoint = 0;
	      for (var row = 0; row < moduleCount; row++) {
	        for (var col = 0; col < moduleCount; col++) {
	          var sameCount = 0,
	              dark = qrCode.isDark(row, col);
	          for (var r = -1; r <= 1; r++) {
	            if (row + r < 0 || moduleCount <= row + r) continue;
	            for (var c = -1; c <= 1; c++) {
	              if (col + c < 0 || moduleCount <= col + c) continue;
	              if (r == 0 && c == 0) continue;
	              dark == qrCode.isDark(row + r, col + c) && sameCount++;
	            }
	          }
	          sameCount > 5 && (lostPoint += 3 + sameCount - 5);
	        }
	      }for (var row = 0; row < moduleCount - 1; row++) {
	        for (var col = 0; col < moduleCount - 1; col++) {
	          var count = 0;
	          qrCode.isDark(row, col) && count++, qrCode.isDark(row + 1, col) && count++, qrCode.isDark(row, col + 1) && count++, qrCode.isDark(row + 1, col + 1) && count++;
	          if (count == 0 || count == 4) lostPoint += 3;
	        }
	      }for (var row = 0; row < moduleCount; row++) {
	        for (var col = 0; col < moduleCount - 6; col++) {
	          qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6) && (lostPoint += 40);
	        }
	      }for (var col = 0; col < moduleCount; col++) {
	        for (var row = 0; row < moduleCount - 6; row++) {
	          qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col) && (lostPoint += 40);
	        }
	      }var darkCount = 0;
	      for (var col = 0; col < moduleCount; col++) {
	        for (var row = 0; row < moduleCount; row++) {
	          qrCode.isDark(row, col) && darkCount++;
	        }
	      }var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
	      return lostPoint += ratio * 10, lostPoint;
	    }
	  },
	      QRMath = {
	    glog: function glog(n) {
	      if (n < 1) throw new Error("glog(" + n + ")");
	      return QRMath.LOG_TABLE[n];
	    },
	    gexp: function gexp(n) {
	      while (n < 0) {
	        n += 255;
	      }while (n >= 256) {
	        n -= 255;
	      }return QRMath.EXP_TABLE[n];
	    },
	    EXP_TABLE: new Array(256),
	    LOG_TABLE: new Array(256)
	  };
	  for (var i = 0; i < 8; i++) {
	    QRMath.EXP_TABLE[i] = 1 << i;
	  }for (var i = 8; i < 256; i++) {
	    QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
	  }for (var i = 0; i < 255; i++) {
	    QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
	  }QRPolynomial.prototype = {
	    get: function get(index) {
	      return this.num[index];
	    },
	    getLength: function getLength() {
	      return this.num.length;
	    },
	    multiply: function multiply(e) {
	      var num = new Array(this.getLength() + e.getLength() - 1);
	      for (var i = 0; i < this.getLength(); i++) {
	        for (var j = 0; j < e.getLength(); j++) {
	          num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
	        }
	      }return new QRPolynomial(num, 0);
	    },
	    mod: function mod(e) {
	      if (this.getLength() - e.getLength() < 0) return this;
	      var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0)),
	          num = new Array(this.getLength());
	      for (var i = 0; i < this.getLength(); i++) {
	        num[i] = this.get(i);
	      }for (var i = 0; i < e.getLength(); i++) {
	        num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
	      }return new QRPolynomial(num, 0).mod(e);
	    }
	  }, QRRSBlock.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
	    var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
	    if (rsBlock == undefined) throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
	    var length = rsBlock.length / 3,
	        list = [];
	    for (var i = 0; i < length; i++) {
	      var count = rsBlock[i * 3 + 0],
	          totalCount = rsBlock[i * 3 + 1],
	          dataCount = rsBlock[i * 3 + 2];
	      for (var j = 0; j < count; j++) {
	        list.push(new QRRSBlock(totalCount, dataCount));
	      }
	    }
	    return list;
	  };
	  QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {
	    switch (errorCorrectLevel) {
	      case QRErrorCorrectLevel.L:
	        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
	
	      case QRErrorCorrectLevel.M:
	        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
	
	      case QRErrorCorrectLevel.Q:
	        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
	
	      case QRErrorCorrectLevel.H:
	        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
	
	      default:
	        return undefined;
	    }
	  };
	  QRBitBuffer.prototype = {
	    get: function get(index) {
	      var bufIndex = Math.floor(index / 8);
	      return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
	    },
	    put: function put(num, length) {
	      for (var i = 0; i < length; i++) {
	        this.putBit((num >>> length - i - 1 & 1) == 1);
	      }
	    },
	    getLengthInBits: function getLengthInBits() {
	      return this.length;
	    },
	    putBit: function putBit(bit) {
	      var bufIndex = Math.floor(this.length / 8);
	      this.buffer.length <= bufIndex && this.buffer.push(0), bit && (this.buffer[bufIndex] |= 128 >>> this.length % 8), this.length++;
	    }
	  };
	  var QRCodeLimitLength = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
	  function _isSupportCanvas() {
	    return typeof CanvasRenderingContext2D != "undefined";
	  }
	  // android 2.x doesn't support Data-URI spec
	  function _getAndroid() {
	    var android = false;
	    var sAgent = navigator.userAgent;
	    if (/android/i.test(sAgent)) {
	      // android
	      android = true;
	      var aMat = sAgent.toString().match(/android ([0-9]\.[0-9])/i);
	      if (aMat && aMat[1]) {
	        android = parseFloat(aMat[1]);
	      }
	    }
	    return android;
	  }
	  var svgDrawer = function () {
	    var Drawing = function Drawing(el, htOption) {
	      this._el = el;
	      this._htOption = htOption;
	    };
	    Drawing.prototype.draw = function (oQRCode) {
	      var _htOption = this._htOption;
	      var _el = this._el;
	      var nCount = oQRCode.getModuleCount();
	      var nWidth = Math.floor(_htOption.width / nCount);
	      var nHeight = Math.floor(_htOption.height / nCount);
	      this.clear();
	      function makeSVG(tag, attrs) {
	        var el = document.createElementNS("http://www.w3.org/2000/svg", tag);
	        for (var k in attrs) {
	          if (attrs.hasOwnProperty(k)) el.setAttribute(k, attrs[k]);
	        }return el;
	      }
	      var svg = makeSVG("svg", {
	        viewBox: "0 0 " + String(nCount) + " " + String(nCount),
	        width: "100%",
	        height: "100%",
	        fill: _htOption.colorLight
	      });
	      svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
	      _el.appendChild(svg);
	      svg.appendChild(makeSVG("rect", {
	        fill: _htOption.colorDark,
	        width: "1",
	        height: "1",
	        id: "template"
	      }));
	      for (var row = 0; row < nCount; row++) {
	        for (var col = 0; col < nCount; col++) {
	          if (oQRCode.isDark(row, col)) {
	            var child = makeSVG("use", {
	              x: String(row),
	              y: String(col)
	            });
	            child.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template");
	            svg.appendChild(child);
	          }
	        }
	      }
	    };
	    Drawing.prototype.clear = function () {
	      while (this._el.hasChildNodes()) {
	        this._el.removeChild(this._el.lastChild);
	      }
	    };
	    return Drawing;
	  }();
	  var useSVG = document.documentElement.tagName.toLowerCase() === "svg";
	  // Drawing in DOM by using Table tag
	  var Drawing = useSVG ? svgDrawer : !_isSupportCanvas() ? function () {
	    var Drawing = function Drawing(el, htOption) {
	      this._el = el;
	      this._htOption = htOption;
	    };
	    /**
	         * Draw the QRCode
	         *
	         * @param {QRCode} oQRCode
	         */
	    Drawing.prototype.draw = function (oQRCode) {
	      var _htOption = this._htOption;
	      var _el = this._el;
	      var nCount = oQRCode.getModuleCount();
	      var nWidth = Math.floor(_htOption.width / nCount);
	      var nHeight = Math.floor(_htOption.height / nCount);
	      var aHTML = ['<table style="border:0;border-collapse:collapse;">'];
	      for (var row = 0; row < nCount; row++) {
	        aHTML.push("<tr>");
	        for (var col = 0; col < nCount; col++) {
	          aHTML.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + nWidth + "px;height:" + nHeight + "px;background-color:" + (oQRCode.isDark(row, col) ? _htOption.colorDark : _htOption.colorLight) + ';"></td>');
	        }
	        aHTML.push("</tr>");
	      }
	      aHTML.push("</table>");
	      _el.innerHTML = aHTML.join("");
	      // Fix the margin values as real size.
	      var elTable = _el.childNodes[0];
	      var nLeftMarginTable = (_htOption.width - elTable.offsetWidth) / 2;
	      var nTopMarginTable = (_htOption.height - elTable.offsetHeight) / 2;
	      if (nLeftMarginTable > 0 && nTopMarginTable > 0) {
	        elTable.style.margin = nTopMarginTable + "px " + nLeftMarginTable + "px";
	      }
	    };
	    /**
	         * Clear the QRCode
	         */
	    Drawing.prototype.clear = function () {
	      this._el.innerHTML = "";
	    };
	    return Drawing;
	  }() : function () {
	    // Drawing in Canvas
	    function _onMakeImage() {
	      this._elImage.src = this._elCanvas.toDataURL("image/png");
	      this._elImage.style.display = "block";
	      this._elCanvas.style.display = "none";
	    }
	    // Android 2.1 bug workaround
	    // http://code.google.com/p/android/issues/detail?id=5141
	    var _android = _getAndroid();
	    if (_android && _android <= 2.1) {
	      var factor = 1 / window.devicePixelRatio;
	      var drawImage = CanvasRenderingContext2D.prototype.drawImage;
	      CanvasRenderingContext2D.prototype.drawImage = function (image, sx, sy, sw, sh, dx, dy, dw, dh) {
	        if ("nodeName" in image && /img/i.test(image.nodeName)) {
	          for (var i = arguments.length - 1; i >= 1; i--) {
	            arguments[i] = arguments[i] * factor;
	          }
	        } else if (typeof dw == "undefined") {
	          arguments[1] *= factor;
	          arguments[2] *= factor;
	          arguments[3] *= factor;
	          arguments[4] *= factor;
	        }
	        drawImage.apply(this, arguments);
	      };
	    }
	    /**
	         * Check whether the user's browser supports Data URI or not
	         *
	         * @private
	         * @param {Function} fSuccess Occurs if it supports Data URI
	         * @param {Function} fFail Occurs if it doesn't support Data URI
	         */
	    function _safeSetDataURI(fSuccess, fFail) {
	      var self = this;
	      self._fFail = fFail;
	      self._fSuccess = fSuccess;
	      // Check it just once
	      if (self._bSupportDataURI === null) {
	        var el = document.createElement("img");
	        var fOnError = function fOnError() {
	          self._bSupportDataURI = false;
	          if (self._fFail) {
	            _fFail.call(self);
	          }
	        };
	        var fOnSuccess = function fOnSuccess() {
	          self._bSupportDataURI = true;
	          if (self._fSuccess) {
	            self._fSuccess.call(self);
	          }
	        };
	        el.onabort = fOnError;
	        el.onerror = fOnError;
	        el.onload = fOnSuccess;
	        el.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
	        // the Image contains 1px data.
	        return;
	      } else if (self._bSupportDataURI === true && self._fSuccess) {
	        self._fSuccess.call(self);
	      } else if (self._bSupportDataURI === false && self._fFail) {
	        self._fFail.call(self);
	      }
	    }
	    /**
	         * Drawing QRCode by using canvas
	         *
	         * @constructor
	         * @param {HTMLElement} el
	         * @param {Object} htOption QRCode Options
	         */
	    var Drawing = function Drawing(el, htOption) {
	      this._bIsPainted = false;
	      this._android = _getAndroid();
	      this._htOption = htOption;
	      this._elCanvas = document.createElement("canvas");
	      this._elCanvas.width = htOption.width;
	      this._elCanvas.height = htOption.height;
	      el.appendChild(this._elCanvas);
	      this._el = el;
	      this._oContext = this._elCanvas.getContext("2d");
	      this._bIsPainted = false;
	      this._elImage = document.createElement("img");
	      this._elImage.alt = "Scan me!";
	      this._elImage.style.display = "none";
	      this._el.appendChild(this._elImage);
	      this._bSupportDataURI = null;
	    };
	    /**
	         * Draw the QRCode
	         *
	         * @param {QRCode} oQRCode
	         */
	    Drawing.prototype.draw = function (oQRCode) {
	      var _elImage = this._elImage;
	      var _oContext = this._oContext;
	      var _htOption = this._htOption;
	      var nCount = oQRCode.getModuleCount();
	      var nWidth = _htOption.width / nCount;
	      var nHeight = _htOption.height / nCount;
	      var nRoundedWidth = Math.round(nWidth);
	      var nRoundedHeight = Math.round(nHeight);
	      _elImage.style.display = "none";
	      this.clear();
	      for (var row = 0; row < nCount; row++) {
	        for (var col = 0; col < nCount; col++) {
	          var bIsDark = oQRCode.isDark(row, col);
	          var nLeft = col * nWidth;
	          var nTop = row * nHeight;
	          _oContext.strokeStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
	          _oContext.lineWidth = 1;
	          _oContext.fillStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
	          _oContext.fillRect(nLeft, nTop, nWidth, nHeight);
	          _oContext.strokeRect(Math.floor(nLeft) + .5, Math.floor(nTop) + .5, nRoundedWidth, nRoundedHeight);
	          _oContext.strokeRect(Math.ceil(nLeft) - .5, Math.ceil(nTop) - .5, nRoundedWidth, nRoundedHeight);
	        }
	      }
	      this._bIsPainted = true;
	    };
	    /**
	         * Make the image from Canvas if the browser supports Data URI.
	         */
	    Drawing.prototype.makeImage = function () {
	      if (this._bIsPainted) {
	        _safeSetDataURI.call(this, _onMakeImage);
	      }
	    };
	    /**
	         * Return whether the QRCode is painted or not
	         *
	         * @return {Boolean}
	         */
	    Drawing.prototype.isPainted = function () {
	      return this._bIsPainted;
	    };
	    /**
	         * Clear the QRCode
	         */
	    Drawing.prototype.clear = function () {
	      this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);
	      this._bIsPainted = false;
	    };
	    /**
	         * @private
	         * @param {Number} nNumber
	         */
	    Drawing.prototype.round = function (nNumber) {
	      if (!nNumber) {
	        return nNumber;
	      }
	      return Math.floor(nNumber * 1e3) / 1e3;
	    };
	    return Drawing;
	  }();
	  /**
	     * Get the type by string length
	     *
	     * @private
	     * @param {String} sText
	     * @param {Number} nCorrectLevel
	     * @return {Number} type
	     */
	  function _getTypeNumber(sText, nCorrectLevel) {
	    var nType = 1;
	    var length = _getUTF8Length(sText);
	    for (var i = 0, len = QRCodeLimitLength.length; i <= len; i++) {
	      var nLimit = 0;
	      switch (nCorrectLevel) {
	        case QRErrorCorrectLevel.L:
	          nLimit = QRCodeLimitLength[i][0];
	          break;
	
	        case QRErrorCorrectLevel.M:
	          nLimit = QRCodeLimitLength[i][1];
	          break;
	
	        case QRErrorCorrectLevel.Q:
	          nLimit = QRCodeLimitLength[i][2];
	          break;
	
	        case QRErrorCorrectLevel.H:
	          nLimit = QRCodeLimitLength[i][3];
	          break;
	      }
	      if (length <= nLimit) {
	        break;
	      } else {
	        nType++;
	      }
	    }
	    if (nType > QRCodeLimitLength.length) {
	      throw new Error("Too long data");
	    }
	    return nType;
	  }
	  function _getUTF8Length(sText) {
	    var replacedText = encodeURI(sText).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
	    return replacedText.length + (replacedText.length != sText ? 3 : 0);
	  }
	  /**
	     * @class QRCode
	     * @constructor
	     * @example
	     * new QRCode(document.getElementById("test"), "http://jindo.dev.naver.com/collie");
	     *
	     * @example
	     * var oQRCode = new QRCode("test", {
	     *    text : "http://naver.com",
	     *    width : 128,
	     *    height : 128
	     * });
	     *
	     * oQRCode.clear(); // Clear the QRCode.
	     * oQRCode.makeCode("http://map.naver.com"); // Re-create the QRCode.
	     *
	     * @param {HTMLElement|String} el target element or 'id' attribute of element.
	     * @param {Object|String} vOption
	     * @param {String} vOption.text QRCode link data
	     * @param {Number} [vOption.width=256]
	     * @param {Number} [vOption.height=256]
	     * @param {String} [vOption.colorDark="#000000"]
	     * @param {String} [vOption.colorLight="#ffffff"]
	     * @param {QRCode.CorrectLevel} [vOption.correctLevel=QRCode.CorrectLevel.H] [L|M|Q|H]
	     */
	  QRCode = function QRCode(el, vOption) {
	    this._htOption = {
	      width: 256,
	      height: 256,
	      typeNumber: 4,
	      colorDark: "#000000",
	      colorLight: "#ffffff",
	      correctLevel: QRErrorCorrectLevel.H
	    };
	    if (typeof vOption === "string") {
	      vOption = {
	        text: vOption
	      };
	    }
	    // Overwrites options
	    if (vOption) {
	      for (var i in vOption) {
	        this._htOption[i] = vOption[i];
	      }
	    }
	    if (typeof el == "string") {
	      el = document.getElementById(el);
	    }
	    this._android = _getAndroid();
	    this._el = el;
	    this._oQRCode = null;
	    this._oDrawing = new Drawing(this._el, this._htOption);
	    if (this._htOption.text) {
	      this.makeCode(this._htOption.text);
	    }
	  };
	  /**
	     * Make the QRCode
	     *
	     * @param {String} sText link data
	     */
	  QRCode.prototype.makeCode = function (sText) {
	    this._oQRCode = new QRCodeModel(_getTypeNumber(sText, this._htOption.correctLevel), this._htOption.correctLevel);
	    this._oQRCode.addData(sText);
	    this._oQRCode.make();
	    this._el.title = sText;
	    this._oDrawing.draw(this._oQRCode);
	    this.makeImage();
	  };
	  /**
	     * Make the Image from Canvas element
	     * - It occurs automatically
	     * - Android below 3 doesn't support Data-URI spec.
	     *
	     * @private
	     */
	  QRCode.prototype.makeImage = function () {
	    if (typeof this._oDrawing.makeImage == "function" && (!this._android || this._android >= 3)) {
	      this._oDrawing.makeImage();
	    }
	  };
	  /**
	     * Clear the QRCode
	     */
	  QRCode.prototype.clear = function () {
	    this._oDrawing.clear();
	  };
	  /**
	     * @name QRCode.CorrectLevel
	     */
	  QRCode.CorrectLevel = QRErrorCorrectLevel;
	})();
	
	module.exports = QRCode;

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _antd = __webpack_require__(9);
	
	var _ValidateHelper = __webpack_require__(72);
	
	var _ValidateHelper2 = _interopRequireDefault(_ValidateHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FormItem = _antd.Form.Item;
	
	var CardBindForm = function (_React$Component) {
	  _inherits(CardBindForm, _React$Component);
	
	  function CardBindForm() {
	    _classCallCheck(this, CardBindForm);
	
	    return _possibleConstructorReturn(this, (CardBindForm.__proto__ || Object.getPrototypeOf(CardBindForm)).apply(this, arguments));
	  }
	
	  _createClass(CardBindForm, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var resetFields = this.props.form.resetFields;
	
	      this.props.onRegMethods(this.handleSubmit.bind(this), resetFields);
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(callback) {
	      this.props.form.validateFields(function (errors, values) {
	        if (!!errors) {
	          return;
	        }
	        callback(values);
	      });
	    }
	
	    // 真实姓名校验
	
	  }, {
	    key: 'checkRealName',
	    value: function checkRealName(rule, value, callback) {
	      if (/^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/.test(value)) callback();else callback([new Error('姓名格式不正确')]);
	    }
	
	    // 身份证号码校验
	
	  }, {
	    key: 'checkIDCard',
	    value: function checkIDCard(rule, value, callback) {
	      if (_ValidateHelper2.default.idCard(value)) callback();else callback([new Error('身份证号码不正确')]);
	    }
	
	    // 银行卡号校验
	
	  }, {
	    key: 'checkBankCard',
	    value: function checkBankCard(rule, value, callback) {
	      if (_ValidateHelper2.default.bankCard(value)) callback();else callback([new Error('银行卡号不正确')]);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var getFieldProps = this.props.form.getFieldProps;
	
	      var formItemLayout = {
	        labelCol: { span: 6 },
	        wrapperCol: { span: 14 }
	      };
	      var dot = "：";
	      if (this.props.type == 'layout') {
	        formItemLayout = {
	          labelCol: { span: 3 },
	          wrapperCol: { span: 6 }
	        };
	        dot = "";
	      }
	      var realNameProps = getFieldProps('realName', {
	        rules: [{ required: true, message: '请填写您的真实姓名' }, { validator: this.checkRealName.bind(this) }]
	      });
	      var idCardProps = getFieldProps('idCard', {
	        rules: [{ required: true, message: '请填写您的身份证号码' }, { validator: this.checkIDCard.bind(this) }]
	      });
	      var bankCardProps = getFieldProps('bankCard', {
	        rules: [{ required: true, message: '请填写您的银行卡号码' }, { validator: this.checkBankCard.bind(this) }]
	      });
	      return _react2.default.createElement(
	        _antd.Form,
	        { horizontal: true, form: this.props.form },
	        _react2.default.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            hasFeedback: true,
	            label: "真实姓名" + dot }),
	          _react2.default.createElement(_antd.Input, _extends({}, realNameProps, { placeholder: '\u8BF7\u8F93\u5165\u60A8\u7684\u771F\u5B9E\u59D3\u540D' }))
	        ),
	        _react2.default.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            hasFeedback: true,
	            label: "身份证号" + dot,
	            style: { marginTop: 20 } }),
	          _react2.default.createElement(_antd.Input, _extends({}, idCardProps, { placeholder: '\u8BF7\u8F93\u5165\u60A8\u7684\u8EAB\u4EFD\u8BC1\u53F7\u7801' }))
	        ),
	        _react2.default.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            hasFeedback: true,
	            label: "银行卡号" + dot,
	            style: { marginTop: 20 } }),
	          _react2.default.createElement(_antd.Input, _extends({}, bankCardProps, { placeholder: '\u8BF7\u8F93\u5165\u60A8\u8981\u7ED1\u5B9A\u7684\u94F6\u884C\u5361\u53F7\u7801' }))
	        )
	      );
	    }
	  }]);
	
	  return CardBindForm;
	}(_react2.default.Component);
	
	CardBindForm = _antd.Form.create()(CardBindForm);
	exports.default = CardBindForm;

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _antd = __webpack_require__(9);
	
	function show(onOk) {
	  _antd.Modal.confirm({
	    title: '您是否已完成充值？',
	    content: '如果您在充值的过程中遇到问题，请联系在线客服或拨打400-7111-288咨询',
	    okText: '已完成',
	    cancelText: '取消',
	    onOk: onOk
	  });
	}
	
	exports.default = {
	  show: show
	};

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

	;
	(function () {
	
	    exports.code = {
	        WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR: 0,
	        WEBIM_CONNCTION_OPEN_ERROR: 1,
	        WEBIM_CONNCTION_AUTH_ERROR: 2,
	        WEBIM_CONNCTION_OPEN_USERGRID_ERROR: 3,
	        WEBIM_CONNCTION_ATTACH_ERROR: 4,
	        WEBIM_CONNCTION_ATTACH_USERGRID_ERROR: 5,
	        WEBIM_CONNCTION_REOPEN_ERROR: 6,
	        WEBIM_CONNCTION_SERVER_CLOSE_ERROR: 7,  //7: client-side network offline (net::ERR_INTERNET_DISCONNECTED)
	        WEBIM_CONNCTION_SERVER_ERROR: 8,        //8: offline by multi login
	        WEBIM_CONNCTION_IQ_ERROR: 9,
	
	        WEBIM_CONNCTION_PING_ERROR: 10,
	        WEBIM_CONNCTION_NOTIFYVERSION_ERROR: 11,
	        WEBIM_CONNCTION_GETROSTER_ERROR: 12,
	        WEBIM_CONNCTION_CROSSDOMAIN_ERROR: 13,
	        WEBIM_CONNCTION_LISTENING_OUTOF_MAXRETRIES: 14,
	        WEBIM_CONNCTION_RECEIVEMSG_CONTENTERROR: 15,
	        WEBIM_CONNCTION_DISCONNECTED: 16,    //16: server-side close the websocket connection
	        WEBIM_CONNCTION_AJAX_ERROR: 17,
	        WEBIM_CONNCTION_JOINROOM_ERROR: 18,
	        WEBIM_CONNCTION_GETROOM_ERROR: 19,
	
	        WEBIM_CONNCTION_GETROOMINFO_ERROR: 20,
	        WEBIM_CONNCTION_GETROOMMEMBER_ERROR: 21,
	        WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR: 22,
	        WEBIM_CONNCTION_LOAD_CHATROOM_ERROR: 23,
	        WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR: 24,
	        WEBIM_CONNCTION_JOINCHATROOM_ERROR: 25,
	        WEBIM_CONNCTION_QUITCHATROOM_ERROR: 26,
	        WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR: 27,
	        WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR: 28,
	        WEBIM_CONNCTION_SESSIONID_NOT_ASSIGN_ERROR: 29,
	
	        WEBIM_CONNCTION_RID_NOT_ASSIGN_ERROR: 30,
	        WEBIM_CONNCTION_CALLBACK_INNER_ERROR: 31,  //31: 处理下行消息出错 try/catch抛出异常
	        WEBIM_CONNCTION_CLIENT_OFFLINE: 32,        //32: client offline
	        WEBIM_CONNCTION_CLIENT_LOGOUT: 33,        //33: client logout
	        WEBIM_CONNCTION_CLIENT_TOO_MUCH_ERROR: 34, // 34: Over amount of the tabs a user opened in the same browser
	        WEBIM_CONNECTION_ACCEPT_INVITATION_FROM_GROUP: 35,
	        WEBIM_CONNECTION_DECLINE_INVITATION_FROM_GROUP: 36,
	        WEBIM_CONNECTION_ACCEPT_JOIN_GROUP: 37,
	        WEBIM_CONNECTION_DECLINE_JOIN_GROUP: 38,
	        WEBIM_CONNECTION_CLOSED: 39,
	
	
	        WEBIM_UPLOADFILE_BROWSER_ERROR: 100,
	        WEBIM_UPLOADFILE_ERROR: 101,
	        WEBIM_UPLOADFILE_NO_LOGIN: 102,
	        WEBIM_UPLOADFILE_NO_FILE: 103,
	
	
	        WEBIM_DOWNLOADFILE_ERROR: 200,
	        WEBIM_DOWNLOADFILE_NO_LOGIN: 201,
	        WEBIM_DOWNLOADFILE_BROWSER_ERROR: 202,
	
	
	        WEBIM_MESSAGE_REC_TEXT: 300,
	        WEBIM_MESSAGE_REC_TEXT_ERROR: 301,
	        WEBIM_MESSAGE_REC_EMOTION: 302,
	        WEBIM_MESSAGE_REC_PHOTO: 303,
	        WEBIM_MESSAGE_REC_AUDIO: 304,
	        WEBIM_MESSAGE_REC_AUDIO_FILE: 305,
	        WEBIM_MESSAGE_REC_VEDIO: 306,
	        WEBIM_MESSAGE_REC_VEDIO_FILE: 307,
	        WEBIM_MESSAGE_REC_FILE: 308,
	        WEBIM_MESSAGE_SED_TEXT: 309,
	        WEBIM_MESSAGE_SED_EMOTION: 310,
	        WEBIM_MESSAGE_SED_PHOTO: 311,
	        WEBIM_MESSAGE_SED_AUDIO: 312,
	        WEBIM_MESSAGE_SED_AUDIO_FILE: 313,
	        WEBIM_MESSAGE_SED_VEDIO: 314,
	        WEBIM_MESSAGE_SED_VEDIO_FILE: 315,
	        WEBIM_MESSAGE_SED_FILE: 316,
	        WEBIM_MESSAGE_SED_ERROR: 317,
	
	
	        STATUS_INIT: 400,
	        STATUS_DOLOGIN_USERGRID: 401,
	        STATUS_DOLOGIN_IM: 402,
	        STATUS_OPENED: 403,
	        STATUS_CLOSING: 404,
	        STATUS_CLOSED: 405,
	        STATUS_ERROR: 406
	    };
	}());


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

	;
	(function () {
	
	    var EMPTYFN = function () {
	    };
	    var _code = __webpack_require__(191).code;
	    var WEBIM_FILESIZE_LIMIT = 10485760;
	
	    var _createStandardXHR = function () {
	        try {
	            return new window.XMLHttpRequest();
	        } catch (e) {
	            return false;
	        }
	    };
	
	    var _createActiveXHR = function () {
	        try {
	            return new window.ActiveXObject('Microsoft.XMLHTTP');
	        } catch (e) {
	            return false;
	        }
	    };
	
	    var _xmlrequest = function (crossDomain) {
	        crossDomain = crossDomain || true;
	        var temp = _createStandardXHR() || _createActiveXHR();
	
	        if ('withCredentials' in temp) {
	            return temp;
	        }
	        if (!crossDomain) {
	            return temp;
	        }
	        if (typeof window.XDomainRequest === 'undefined') {
	            return temp;
	        }
	        var xhr = new XDomainRequest();
	        xhr.readyState = 0;
	        xhr.status = 100;
	        xhr.onreadystatechange = EMPTYFN;
	        xhr.onload = function () {
	            xhr.readyState = 4;
	            xhr.status = 200;
	
	            var xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
	            xmlDoc.async = 'false';
	            xmlDoc.loadXML(xhr.responseText);
	            xhr.responseXML = xmlDoc;
	            xhr.response = xhr.responseText;
	            xhr.onreadystatechange();
	        };
	        xhr.ontimeout = xhr.onerror = function () {
	            xhr.readyState = 4;
	            xhr.status = 500;
	            xhr.onreadystatechange();
	        };
	        return xhr;
	    };
	
	    var _hasFlash = (function () {
	        if ('ActiveXObject' in window) {
	            try {
	                return new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
	            } catch (ex) {
	                return 0;
	            }
	        } else {
	            if (navigator.plugins && navigator.plugins.length > 0) {
	                return navigator.plugins['Shockwave Flash'];
	            }
	        }
	        return 0;
	    }());
	
	    var _base64 = function(){
	
	        var self = this;
	
	        // private property
	        var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	
	        // public method for encoding
	        this.encode = function (input) {
	            var output = "";
	            var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
	            var i = 0;
	            input = self._utf8_encode(input);
	            while (i < input.length) {
	                chr1 = input.charCodeAt(i++);
	                chr2 = input.charCodeAt(i++);
	                chr3 = input.charCodeAt(i++);
	                enc1 = chr1 >> 2;
	                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
	                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
	                enc4 = chr3 & 63;
	                if (isNaN(chr2)) {
	                    enc3 = enc4 = 64;
	                } else if (isNaN(chr3)) {
	                    enc4 = 64;
	                }
	                output = output +
	                    _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
	                    _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
	            }
	            return output;
	        }
	
	        // public method for decoding
	        this.decode = function (input) {
	            var output = "";
	            var chr1, chr2, chr3;
	            var enc1, enc2, enc3, enc4;
	            var i = 0;
	            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
	            while (i < input.length) {
	                enc1 = _keyStr.indexOf(input.charAt(i++));
	                enc2 = _keyStr.indexOf(input.charAt(i++));
	                enc3 = _keyStr.indexOf(input.charAt(i++));
	                enc4 = _keyStr.indexOf(input.charAt(i++));
	                chr1 = (enc1 << 2) | (enc2 >> 4);
	                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
	                chr3 = ((enc3 & 3) << 6) | enc4;
	                output = output + String.fromCharCode(chr1);
	                if (enc3 != 64) {
	                    output = output + String.fromCharCode(chr2);
	                }
	                if (enc4 != 64) {
	                    output = output + String.fromCharCode(chr3);
	                }
	            }
	            output = self._utf8_decode(output);
	            return output;
	        }
	
	        // private method for UTF-8 encoding
	        this._utf8_encode = function (string) {
	            string = string.replace(/\r\n/g,"\n");
	            var utftext = "";
	            for (var n = 0; n < string.length; n++) {
	                var c = string.charCodeAt(n);
	                if (c < 128) {
	                    utftext += String.fromCharCode(c);
	                } else if((c > 127) && (c < 2048)) {
	                    utftext += String.fromCharCode((c >> 6) | 192);
	                    utftext += String.fromCharCode((c & 63) | 128);
	                } else {
	                    utftext += String.fromCharCode((c >> 12) | 224);
	                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
	                    utftext += String.fromCharCode((c & 63) | 128);
	                }
	
	            }
	            return utftext;
	        }
	
	        // private method for UTF-8 decoding
	        this._utf8_decode = function (utftext) {
	            var string = "";
	            var i = 0;
	            var c = 0;
	            var c1 = 0;
	            var c2 = 0;
	            var c3 = 0;
	            while ( i < utftext.length ) {
	                c = utftext.charCodeAt(i);
	                if (c < 128) {
	                    string += String.fromCharCode(c);
	                    i++;
	                } else if((c > 191) && (c < 224)) {
	                    c2 = utftext.charCodeAt(i+1);
	                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
	                    i += 2;
	                } else {
	                    c2 = utftext.charCodeAt(i+1);
	                    c3 = utftext.charCodeAt(i+2);
	                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
	                    i += 3;
	                }
	            }
	            return string;
	        }
	    };
	
	    var _tmpUtilXHR = _xmlrequest(),
	        _hasFormData = typeof FormData !== 'undefined',
	        _hasBlob = typeof Blob !== 'undefined',
	        _isCanSetRequestHeader = _tmpUtilXHR.setRequestHeader || false,
	        _hasOverrideMimeType = _tmpUtilXHR.overrideMimeType || false,
	        _isCanUploadFileAsync = _isCanSetRequestHeader && _hasFormData,
	        _isCanUploadFile = _isCanUploadFileAsync || _hasFlash,
	        _isCanDownLoadFile = _isCanSetRequestHeader && (_hasBlob || _hasOverrideMimeType);
	
	    if (!Object.keys) {
	        Object.keys = (function () {
	            'use strict';
	            var hasOwnProperty = Object.prototype.hasOwnProperty,
	                hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
	                dontEnums = [
	                    'toString',
	                    'toLocaleString',
	                    'valueOf',
	                    'hasOwnProperty',
	                    'isPrototypeOf',
	                    'propertyIsEnumerable',
	                    'constructor'
	                ],
	                dontEnumsLength = dontEnums.length;
	
	            return function (obj) {
	                if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
	                    throw new TypeError('Object.keys called on non-object');
	                }
	
	                var result = [], prop, i;
	
	                for (prop in obj) {
	                    if (hasOwnProperty.call(obj, prop)) {
	                        result.push(prop);
	                    }
	                }
	
	                if (hasDontEnumBug) {
	                    for (i = 0; i < dontEnumsLength; i++) {
	                        if (hasOwnProperty.call(obj, dontEnums[i])) {
	                            result.push(dontEnums[i]);
	                        }
	                    }
	                }
	                return result;
	            };
	        }());
	    }
	
	    var utils = {
	        hasFormData: _hasFormData,
	
	        hasBlob: _hasBlob,
	
	        emptyfn: EMPTYFN,
	
	        isCanSetRequestHeader: _isCanSetRequestHeader,
	
	        hasOverrideMimeType: _hasOverrideMimeType,
	
	        isCanUploadFileAsync: _isCanUploadFileAsync,
	
	        isCanUploadFile: _isCanUploadFile,
	
	        isCanDownLoadFile: _isCanDownLoadFile,
	
	        isSupportWss: (function () {
	            var notSupportList = [
	                //1: QQ browser X5 core
	                /MQQBrowser[\/]5([.]\d+)?\sTBS/
	
	                //2: etc.
	                //...
	            ];
	
	            if (!window.WebSocket) {
	                return false;
	            }
	
	            var ua = window.navigator.userAgent;
	            for (var i = 0, l = notSupportList.length; i < l; i++) {
	                if (notSupportList[i].test(ua)) {
	                    return false;
	                }
	            }
	            return true;
	        }()),
	
	        getIEVersion: (function () {
	            var ua = navigator.userAgent, matches, tridentMap = {'4': 8, '5': 9, '6': 10, '7': 11};
	
	            matches = ua.match(/MSIE (\d+)/i);
	
	            if (matches && matches[1]) {
	                return +matches[1];
	            }
	            matches = ua.match(/Trident\/(\d+)/i);
	            if (matches && matches[1]) {
	                return tridentMap[matches[1]] || null;
	            }
	            return null;
	        }()),
	
	
	        stringify: function (json) {
	            if (typeof JSON !== 'undefined' && JSON.stringify) {
	                return JSON.stringify(json);
	            } else {
	                var s = '',
	                    arr = [];
	
	                var iterate = function (json) {
	                    var isArr = false;
	
	                    if (Object.prototype.toString.call(json) === '[object Array]') {
	                        arr.push(']', '[');
	                        isArr = true;
	                    } else if (Object.prototype.toString.call(json) === '[object Object]') {
	                        arr.push('}', '{');
	                    }
	
	                    for (var o in json) {
	                        if (Object.prototype.toString.call(json[o]) === '[object Null]') {
	                            json[o] = 'null';
	                        } else if (Object.prototype.toString.call(json[o]) === '[object Undefined]') {
	                            json[o] = 'undefined';
	                        }
	
	                        if (json[o] && typeof json[o] === 'object') {
	                            s += ',' + (isArr ? '' : '"' + o + '":' + (isArr ? '"' : '')) + iterate(json[o]) + '';
	                        } else {
	                            s += ',"' + (isArr ? '' : o + '":"') + json[o] + '"';
	                        }
	                    }
	
	                    if (s != '') {
	                        s = s.slice(1);
	                    }
	
	                    return arr.pop() + s + arr.pop();
	                };
	                return iterate(json);
	            }
	        },
	        login: function (options) {
	            var options = options || {};
	            var suc = options.success || EMPTYFN;
	            var err = options.error || EMPTYFN;
	
	            var appKey = options.appKey || '';
	            var devInfos = appKey.split('#');
	            if (devInfos.length !== 2) {
	                err({
	                    type: _code.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR
	                });
	                return false;
	            }
	
	            var orgName = devInfos[0];
	            var appName = devInfos[1];
	            var https = https || options.https;
	            var user = options.user || '';
	            var pwd = options.pwd || '';
	
	            var apiUrl = options.apiUrl;
	
	            var loginJson = {
	                grant_type: 'password',
	                username: user,
	                password: pwd,
	                timestamp: +new Date()
	            };
	            var loginfo = utils.stringify(loginJson);
	
	            var options = {
	                url: apiUrl + '/' + orgName + '/' + appName + '/token',
	                dataType: 'json',
	                data: loginfo,
	                success: suc,
	                error: err
	            };
	            return utils.ajax(options);
	        },
	
	        getFileUrl: function (fileInputId) {
	            var uri = {
	                url: '',
	                filename: '',
	                filetype: '',
	                data: ''
	            };
	
	            var fileObj = typeof fileInputId === 'string' ? document.getElementById(fileInputId) : fileInputId;
	
	            if (!utils.isCanUploadFileAsync || !fileObj) {
	                return uri;
	            }
	            try {
	                if (window.URL.createObjectURL) {
	                    var fileItems = fileObj.files;
	                    if (fileItems.length > 0) {
	                        var u = fileItems.item(0);
	                        uri.data = u;
	                        uri.url = window.URL.createObjectURL(u);
	                        uri.filename = u.name || '';
	                    }
	                } else { // IE
	                    var u = document.getElementById(fileInputId).value;
	                    uri.url = u;
	                    var pos1 = u.lastIndexOf('/');
	                    var pos2 = u.lastIndexOf('\\');
	                    var pos = Math.max(pos1, pos2);
	                    if (pos < 0)
	                        uri.filename = u;
	                    else
	                        uri.filename = u.substring(pos + 1);
	                }
	                var index = uri.filename.lastIndexOf('.');
	                if (index != -1) {
	                    uri.filetype = uri.filename.substring(index + 1).toLowerCase();
	                }
	                return uri;
	
	            } catch (e) {
	                throw e;
	            }
	        },
	
	        getFileSize: function (file) {
	            var fileSize = 0;
	            if (file) {
	                if (file.files) {
	                    if (file.files.length > 0) {
	                        fileSize = file.files[0].size;
	                    }
	                } else if (file.select && 'ActiveXObject' in window) {
	                    file.select();
	                    var fileobject = new ActiveXObject('Scripting.FileSystemObject');
	                    var file = fileobject.GetFile(file.value);
	                    fileSize = file.Size;
	                }
	            }
	            console.log('fileSize: ', fileSize);
	            if (fileSize > 10000000) {
	                return false;
	            }
	            var kb = Math.round(fileSize / 1000);
	            if (kb < 1000) {
	                fileSize = kb + ' KB';
	            } else if (kb >= 1000) {
	                var mb = kb / 1000;
	                if (mb < 1000) {
	                    fileSize = mb.toFixed(1) + ' MB';
	                } else {
	                    var gb = mb / 1000;
	                    fileSize = gb.toFixed(1) + ' GB';
	                }
	            }
	            return fileSize;
	        },
	
	        hasFlash: _hasFlash,
	
	        trim: function (str) {
	
	            str = typeof str === 'string' ? str : '';
	
	            return str.trim
	                ? str.trim()
	                : str.replace(/^\s|\s$/g, '');
	        },
	
	        parseEmoji: function (msg) {
	            if (typeof WebIM.Emoji === 'undefined' || typeof WebIM.Emoji.map === 'undefined') {
	                return msg;
	            } else {
	                var emoji = WebIM.Emoji,
	                    reg = null;
	
	                for (var face in emoji.map) {
	                    if (emoji.map.hasOwnProperty(face)) {
	                        while (msg.indexOf(face) > -1) {
	                            msg = msg.replace(face, '<img class="emoji" src="' + emoji.path + emoji.map[face] + '" />');
	                        }
	                    }
	                }
	                return msg;
	            }
	        },
	
	        parseLink: function (msg) {
	
	            var reg = /(https?\:\/\/|www\.)([a-zA-Z0-9-]+(\.[a-zA-Z0-9]+)+)(\:[0-9]{2,4})?\/?((\.[:_0-9a-zA-Z-]+)|[:_0-9a-zA-Z-]*\/?)*\??[:_#@*&%0-9a-zA-Z-/=]*/gm;
	
	            msg = msg.replace(reg, function (v) {
	
	                var prefix = /^https?/gm.test(v);
	
	                return "<a href='"
	                    + (prefix ? v : '//' + v)
	                    + "' target='_blank'>"
	                    + v
	                    + "</a>";
	
	            });
	
	            return msg;
	
	        },
	
	        parseJSON: function (data) {
	
	            if (window.JSON && window.JSON.parse) {
	                return window.JSON.parse(data + '');
	            }
	
	            var requireNonComma,
	                depth = null,
	                str = utils.trim(data + '');
	
	            return str && !utils.trim(
	                str.replace(/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g
	                    , function (token, comma, open, close) {
	
	                        if (requireNonComma && comma) {
	                            depth = 0;
	                        }
	
	                        if (depth === 0) {
	                            return token;
	                        }
	
	                        requireNonComma = open || comma;
	                        depth += !close - !open;
	                        return '';
	                    })
	            )
	                ? (Function('return ' + str))()
	                : (Function('Invalid JSON: ' + data))();
	        },
	
	        parseUploadResponse: function (response) {
	            return response.indexOf('callback') > -1 ? //lte ie9
	                response.slice(9, -1) : response;
	        },
	
	        parseDownloadResponse: function (response) {
	            return ((response && response.type && response.type === 'application/json')
	            || 0 > Object.prototype.toString.call(response).indexOf('Blob'))
	                ? this.url + '?token=' : window.URL.createObjectURL(response);
	        },
	
	        uploadFile: function (options) {
	            var options = options || {};
	            options.onFileUploadProgress = options.onFileUploadProgress || EMPTYFN;
	            options.onFileUploadComplete = options.onFileUploadComplete || EMPTYFN;
	            options.onFileUploadError = options.onFileUploadError || EMPTYFN;
	            options.onFileUploadCanceled = options.onFileUploadCanceled || EMPTYFN;
	
	            var acc = options.accessToken || this.context.accessToken;
	            if (!acc) {
	                options.onFileUploadError({
	                    type: _code.WEBIM_UPLOADFILE_NO_LOGIN
	                    , id: options.id
	                });
	                return;
	            }
	
	            var orgName, appName, devInfos;
	            var appKey = options.appKey || this.context.appKey || '';
	
	            if (appKey) {
	                devInfos = appKey.split('#');
	                orgName = devInfos[0];
	                appName = devInfos[1];
	            }
	
	            if (!orgName && !appName) {
	                options.onFileUploadError({
	                    type: _code.WEBIM_UPLOADFILE_ERROR
	                    , id: options.id
	                });
	                return;
	            }
	
	            var apiUrl = options.apiUrl;
	            var uploadUrl = apiUrl + '/' + orgName + '/' + appName + '/chatfiles';
	
	            if (!utils.isCanUploadFileAsync) {
	                if (utils.hasFlash && typeof options.flashUpload === 'function') {
	                    options.flashUpload && options.flashUpload(uploadUrl, options);
	                } else {
	                    options.onFileUploadError({
	                        type: _code.WEBIM_UPLOADFILE_BROWSER_ERROR
	                        , id: options.id
	                    });
	                }
	                return;
	            }
	
	            var fileSize = options.file.data ? options.file.data.size : undefined;
	            if (fileSize > WEBIM_FILESIZE_LIMIT) {
	                options.onFileUploadError({
	                    type: _code.WEBIM_UPLOADFILE_ERROR
	                    , id: options.id
	                });
	                return;
	            } else if (fileSize <= 0) {
	                options.onFileUploadError({
	                    type: _code.WEBIM_UPLOADFILE_ERROR
	                    , id: options.id
	                });
	                return;
	            }
	
	            var xhr = utils.xmlrequest();
	            var onError = function (e) {
	                options.onFileUploadError({
	                    type: _code.WEBIM_UPLOADFILE_ERROR,
	                    id: options.id,
	                    xhr: xhr
	                });
	            };
	            if (xhr.upload) {
	                xhr.upload.addEventListener('progress', options.onFileUploadProgress, false);
	            }
	            if (xhr.addEventListener) {
	                xhr.addEventListener('abort', options.onFileUploadCanceled, false);
	                xhr.addEventListener('load', function (e) {
	                    try {
	                        var json = utils.parseJSON(xhr.responseText);
	                        try {
	                            options.onFileUploadComplete(json);
	                        } catch (e) {
	                            options.onFileUploadError({
	                                type: _code.WEBIM_CONNCTION_CALLBACK_INNER_ERROR
	                                , data: e
	                            });
	                        }
	                    } catch (e) {
	                        options.onFileUploadError({
	                            type: _code.WEBIM_UPLOADFILE_ERROR,
	                            data: xhr.responseText,
	                            id: options.id,
	                            xhr: xhr
	                        });
	                    }
	                }, false);
	                xhr.addEventListener('error', onError, false);
	            } else if (xhr.onreadystatechange) {
	                xhr.onreadystatechange = function () {
	                    if (xhr.readyState === 4) {
	                        if (ajax.status === 200) {
	                            try {
	                                var json = utils.parseJSON(xhr.responseText);
	                                options.onFileUploadComplete(json);
	                            } catch (e) {
	                                options.onFileUploadError({
	                                    type: _code.WEBIM_UPLOADFILE_ERROR,
	                                    data: xhr.responseText,
	                                    id: options.id,
	                                    xhr: xhr
	                                });
	                            }
	                        } else {
	                            options.onFileUploadError({
	                                type: _code.WEBIM_UPLOADFILE_ERROR,
	                                data: xhr.responseText,
	                                id: options.id,
	                                xhr: xhr
	                            });
	                        }
	                    } else {
	                        xhr.abort();
	                        options.onFileUploadCanceled();
	                    }
	                }
	            }
	
	            xhr.open('POST', uploadUrl);
	
	            xhr.setRequestHeader('restrict-access', 'true');
	            xhr.setRequestHeader('Accept', '*/*');// Android QQ browser has some problem with this attribute.
	            xhr.setRequestHeader('Authorization', 'Bearer ' + acc);
	
	            var formData = new FormData();
	            formData.append('file', options.file.data);
	            xhr.send(formData);
	        },
	
	
	        download: function (options) {
	            options.onFileDownloadComplete = options.onFileDownloadComplete || EMPTYFN;
	            options.onFileDownloadError = options.onFileDownloadError || EMPTYFN;
	
	            var accessToken = options.accessToken || this.context.accessToken;
	            if (!accessToken) {
	                options.onFileDownloadError({
	                    type: _code.WEBIM_DOWNLOADFILE_NO_LOGIN,
	                    id: options.id
	                });
	                return;
	            }
	
	            var onError = function (e) {
	                options.onFileDownloadError({
	                    type: _code.WEBIM_DOWNLOADFILE_ERROR,
	                    id: options.id,
	                    xhr: xhr
	                });
	            };
	
	            if (!utils.isCanDownLoadFile) {
	                options.onFileDownloadComplete();
	                return;
	            }
	            var xhr = utils.xmlrequest();
	            if ('addEventListener' in xhr) {
	                xhr.addEventListener('load', function (e) {
	                    options.onFileDownloadComplete(xhr.response, xhr);
	                }, false);
	                xhr.addEventListener('error', onError, false);
	            } else if ('onreadystatechange' in xhr) {
	                xhr.onreadystatechange = function () {
	                    if (xhr.readyState === 4) {
	                        if (ajax.status === 200) {
	                            options.onFileDownloadComplete(xhr.response, xhr);
	                        } else {
	                            options.onFileDownloadError({
	                                type: _code.WEBIM_DOWNLOADFILE_ERROR,
	                                id: options.id,
	                                xhr: xhr
	                            });
	                        }
	                    } else {
	                        xhr.abort();
	                        options.onFileDownloadError({
	                            type: _code.WEBIM_DOWNLOADFILE_ERROR,
	                            id: options.id,
	                            xhr: xhr
	                        });
	                    }
	                }
	            }
	
	            var method = options.method || 'GET';
	            var resType = options.responseType || 'blob';
	            var mimeType = options.mimeType || 'text/plain; charset=x-user-defined';
	            xhr.open(method, options.url);
	            if (typeof Blob !== 'undefined') {
	                xhr.responseType = resType;
	            } else {
	                xhr.overrideMimeType(mimeType);
	            }
	
	            var innerHeaer = {
	                'X-Requested-With': 'XMLHttpRequest',
	                'Accept': 'application/octet-stream',
	                'share-secret': options.secret,
	                'Authorization': 'Bearer ' + accessToken
	            };
	            var headers = options.headers || {};
	            for (var key in headers) {
	                innerHeaer[key] = headers[key];
	            }
	            for (var key in innerHeaer) {
	                if (innerHeaer[key]) {
	                    xhr.setRequestHeader(key, innerHeaer[key]);
	                }
	            }
	            xhr.send(null);
	        },
	
	        parseTextMessage: function (message, faces) {
	            if (typeof message !== 'string') {
	                return;
	            }
	
	            if (Object.prototype.toString.call(faces) !== '[object Object]') {
	                return {
	                    isemoji: false,
	                    body: [
	                        {
	                            type: 'txt',
	                            data: message
	                        }
	                    ]
	                };
	            }
	
	            var receiveMsg = message;
	            var emessage = [];
	            var expr = /\[[^[\]]{2,3}\]/mg;
	            var emoji = receiveMsg.match(expr);
	
	            if (!emoji || emoji.length < 1) {
	                return {
	                    isemoji: false,
	                    body: [
	                        {
	                            type: 'txt',
	                            data: message
	                        }
	                    ]
	                };
	            }
	            var isemoji = false;
	            for (var i = 0; i < emoji.length; i++) {
	                var tmsg = receiveMsg.substring(0, receiveMsg.indexOf(emoji[i])),
	                    existEmoji = WebIM.Emoji.map[emoji[i]];
	
	                if (tmsg) {
	                    emessage.push({
	                        type: 'txt',
	                        data: tmsg
	                    });
	                }
	                if (!existEmoji) {
	                    emessage.push({
	                        type: 'txt',
	                        data: emoji[i]
	                    });
	                    continue;
	                }
	                var emojiStr = WebIM.Emoji.map ? WebIM.Emoji.path + existEmoji : null;
	
	                if (emojiStr) {
	                    isemoji = true;
	                    emessage.push({
	                        type: 'emoji',
	                        data: emojiStr
	                    });
	                } else {
	                    emessage.push({
	                        type: 'txt',
	                        data: emoji[i]
	                    });
	                }
	                var restMsgIndex = receiveMsg.indexOf(emoji[i]) + emoji[i].length;
	                receiveMsg = receiveMsg.substring(restMsgIndex);
	            }
	            if (receiveMsg) {
	                emessage.push({
	                    type: 'txt',
	                    data: receiveMsg
	                });
	            }
	            if (isemoji) {
	                return {
	                    isemoji: isemoji,
	                    body: emessage
	                };
	            }
	            return {
	                isemoji: false,
	                body: [
	                    {
	                        type: 'txt',
	                        data: message
	                    }
	                ]
	            };
	        },
	
	        xmlrequest: _xmlrequest,
	
	
	        getXmlFirstChild: function (data, tagName) {
	            var children = data.getElementsByTagName(tagName);
	            if (children.length == 0) {
	                return null;
	            } else {
	                return children[0];
	            }
	        },
	        ajax: function (options) {
	            var dataType = options.dataType || 'text';
	            var suc = options.success || EMPTYFN;
	            var error = options.error || EMPTYFN;
	            var xhr = utils.xmlrequest();
	
	            xhr.onreadystatechange = function () {
	                if (xhr.readyState === 4) {
	                    var status = xhr.status || 0;
	                    if (status === 200) {
	                        try {
	                            switch (dataType) {
	                                case 'text':
	                                    suc(xhr.responseText);
	                                    return;
	                                case 'json':
	                                    var json = utils.parseJSON(xhr.responseText);
	                                    suc(json, xhr);
	                                    return;
	                                case 'xml':
	                                    if (xhr.responseXML && xhr.responseXML.documentElement) {
	                                        suc(xhr.responseXML.documentElement, xhr);
	                                    } else {
	                                        error({
	                                            type: _code.WEBIM_CONNCTION_AJAX_ERROR,
	                                            data: xhr.responseText
	                                        });
	                                    }
	                                    return;
	                            }
	                            suc(xhr.response || xhr.responseText, xhr);
	                        } catch (e) {
	                            error({
	                                type: _code.WEBIM_CONNCTION_AJAX_ERROR,
	                                data: e
	                            });
	                        }
	                        return;
	                    } else {
	                        error({
	                            type: _code.WEBIM_CONNCTION_AJAX_ERROR,
	                            data: xhr.responseText
	                        });
	                        return;
	                    }
	                }
	                if (xhr.readyState === 0) {
	                    error({
	                        type: _code.WEBIM_CONNCTION_AJAX_ERROR,
	                        data: xhr.responseText
	                    });
	                }
	            };
	
	            if (options.responseType) {
	                if (xhr.responseType) {
	                    xhr.responseType = options.responseType;
	                }
	            }
	            if (options.mimeType) {
	                if (utils.hasOverrideMimeType) {
	                    xhr.overrideMimeType(options.mimeType);
	                }
	            }
	
	            var type = options.type || 'POST',
	                data = options.data || null,
	                tempData = '';
	
	            if (type.toLowerCase() === 'get' && data) {
	                for (var o in data) {
	                    if (data.hasOwnProperty(o)) {
	                        tempData += o + '=' + data[o] + '&';
	                    }
	                }
	                tempData = tempData ? tempData.slice(0, -1) : tempData;
	                options.url += (options.url.indexOf('?') > 0 ? '&' : '?') + (tempData ? tempData + '&' : tempData) + '_v=' + new Date().getTime();
	                data = null;
	                tempData = null;
	            }
	            xhr.open(type, options.url);
	
	            if (utils.isCanSetRequestHeader) {
	                var headers = options.headers || {};
	                for (var key in headers) {
	                    if (headers.hasOwnProperty(key)) {
	                        xhr.setRequestHeader(key, headers[key]);
	                    }
	                }
	            }
	
	            xhr.send(data);
	            return xhr;
	        },
	        ts: function () {
	            var d = new Date();
	            var Hours = d.getHours(); //获取当前小时数(0-23)
	            var Minutes = d.getMinutes(); //获取当前分钟数(0-59)
	            var Seconds = d.getSeconds(); //获取当前秒数(0-59)
	            var Milliseconds = d.getMilliseconds(); //获取当前毫秒
	            return (Hours < 10 ? "0" + Hours : Hours) + ':' + (Minutes < 10 ? "0" + Minutes : Minutes) + ':' + (Seconds < 10 ? "0" + Seconds : Seconds) + ':' + Milliseconds + ' ';
	        },
	
	        getObjectKey: function (obj, val) {
	            for (var key in obj) {
	                if (obj[key] == val) {
	                    return key;
	                }
	            }
	            return '';
	        },
	
	        sprintf: function () {
	            var arg = arguments,
	                str = arg[0] || '',
	                i, len;
	            for (i = 1, len = arg.length; i < len; i++) {
	                str = str.replace(/%s/, arg[i]);
	            }
	            return str;
	        },
	
	        encrypt: function (str) {
	            var base64 = new _base64();
	            var encrypt = base64.encode(str);
	            return encrypt;
	        },
	        
	        decrypt: function (str) {
	            var base64 = new _base64();
	            var decrypt = base64.decode(str);
	            decrypt = escape(decrypt);
	            decrypt = decrypt.replace(/%00/g, '');
	            decrypt = unescape(decrypt);
	            return decrypt;
	        },
	
	        setCookie: function(name, value, days){
	            var cookie = name + '=' + encodeURIComponent(value);
	            if(typeof days == 'number'){
	                cookie += '; max-age: ' + (days * 60 * 60 * 24);
	            }
	            document.cookie = cookie;
	        },
	
	        getCookie: function () {
	            var allCookie = {};
	            var all = document.cookie;
	            if(all === ""){
	                return allCookie;
	            }
	            var list = all.split("; ");
	            for(var i = 0 ; i < list.length ; i++){
	                var cookie = list[i];
	                var p = cookie.indexOf('=');
	                var name = cookie.substring(0, p);
	                var value = cookie.substring(p+1);
	                value = decodeURIComponent(value);
	                allCookie[name] = value;
	            }
	            return allCookie;
	        }
	    };
	
	
	    exports.utils = utils;
	}());

/***/ }),

/***/ 380:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var BFBankLimitData = [{
	  key: 1,
	  bankName: '中国工商银行',
	  cardType: '储蓄卡',
	  customerType: '电子口令卡',
	  singleQuota: '500',
	  dailyLimit: '1000',
	  rowNum: 4
	}, {
	  key: 2,
	  bankName: '中国工商银行',
	  cardType: '储蓄卡',
	  customerType: '短信认证',
	  singleQuota: '2000',
	  dailyLimit: '5000',
	  rowNum: 0
	}, {
	  key: 3,
	  bankName: '中国工商银行',
	  cardType: '储蓄卡',
	  customerType: '电子密码',
	  singleQuota: '50万',
	  dailyLimit: '100万',
	  rowNum: 0
	}, {
	  key: 4,
	  bankName: '中国工商银行',
	  cardType: '储蓄卡',
	  customerType: 'U盾',
	  singleQuota: '100万',
	  dailyLimit: '100万',
	  rowNum: 0
	}, {
	  key: 5,
	  bankName: '中国农业银行',
	  cardType: '储蓄卡',
	  customerType: '动态口令',
	  singleQuota: '1000',
	  dailyLimit: '3000',
	  rowNum: 3
	}, {
	  key: 6,
	  bankName: '中国农业银行',
	  cardType: '储蓄卡',
	  customerType: '移动证书（一代k宝',
	  singleQuota: '50万',
	  dailyLimit: '100万',
	  rowNum: 0
	}, {
	  key: 7,
	  bankName: '中国农业银行',
	  cardType: '储蓄卡',
	  customerType: '移动证书（二代k宝）',
	  singleQuota: '100万',
	  dailyLimit: '500万',
	  rowNum: 0
	}, {
	  key: 8,
	  bankName: '中国银行',
	  cardType: '储蓄卡',
	  customerType: 'USBKey证书认证、令牌+动态口令',
	  singleQuota: '5万',
	  dailyLimit: '20万',
	  rowNum: 1
	}, {
	  key: 9,
	  bankName: '中国建设银行',
	  cardType: '储蓄卡',
	  customerType: '账号支付',
	  singleQuota: '5000',
	  dailyLimit: '5000',
	  rowNum: 3
	}, {
	  key: 10,
	  bankName: '中国建设银行',
	  cardType: '储蓄卡',
	  customerType: '网银盾1代',
	  singleQuota: '5万',
	  dailyLimit: '10万',
	  rowNum: 0
	}, {
	  key: 11,
	  bankName: '中国建设银行',
	  cardType: '储蓄卡',
	  customerType: '网银盾2代',
	  singleQuota: '50万',
	  dailyLimit: '50万',
	  rowNum: 0
	}, {
	  key: 12,
	  bankName: '交通银行',
	  cardType: '储蓄卡',
	  customerType: '手机短信密码验证',
	  singleQuota: '5万',
	  dailyLimit: '5万',
	  rowNum: 2
	}, {
	  key: 13,
	  bankName: '交通银行',
	  cardType: '储蓄卡',
	  customerType: 'USBKey证书认证',
	  singleQuota: '100万',
	  dailyLimit: '100万',
	  rowNum: 0
	}, {
	  key: 14,
	  bankName: '中国邮政储蓄银行',
	  cardType: '储蓄卡',
	  customerType: '手机短信客户',
	  singleQuota: '1万',
	  dailyLimit: '1万',
	  rowNum: 3
	}, {
	  key: 15,
	  bankName: '中国邮政储蓄银行',
	  cardType: '储蓄卡',
	  customerType: '电子令牌+短信客户',
	  singleQuota: '20万',
	  dailyLimit: '20万',
	  rowNum: 0
	}, {
	  key: 16,
	  bankName: '中国邮政储蓄银行',
	  cardType: '储蓄卡',
	  customerType: 'Ukey+短信客户+短信客户',
	  singleQuota: '100万',
	  dailyLimit: '100万',
	  rowNum: 0
	}, {
	  key: 17,
	  bankName: '中信银行',
	  cardType: '储蓄卡',
	  customerType: '手机动态密码',
	  singleQuota: '1000',
	  dailyLimit: '5000',
	  rowNum: 2
	}, {
	  key: 18,
	  bankName: '中信银行',
	  cardType: '储蓄卡',
	  customerType: 'U盾',
	  singleQuota: '100万',
	  dailyLimit: '100万',
	  rowNum: 0
	}, {
	  key: 19,
	  bankName: '兴业银行',
	  cardType: '储蓄卡',
	  customerType: '手机动态密码版',
	  singleQuota: '日累积范围内无限额',
	  dailyLimit: '初始5000，可至网点加大',
	  rowNum: 2
	}, {
	  key: 20,
	  bankName: '兴业银行',
	  cardType: '储蓄卡',
	  customerType: 'U盾',
	  singleQuota: '40万',
	  dailyLimit: '100万',
	  rowNum: 0
	}, {
	  key: 21,
	  bankName: '光大银行',
	  cardType: '储蓄卡',
	  customerType: '手机动态密码',
	  singleQuota: '1万',
	  dailyLimit: '1万',
	  rowNum: 2
	}, {
	  key: 22,
	  bankName: '光大银行',
	  cardType: '储蓄卡',
	  customerType: '令牌动态密码及阳光网盾验证方式',
	  singleQuota: '50万',
	  dailyLimit: '50万',
	  rowNum: 0
	}, {
	  key: 23,
	  bankName: '民生银行',
	  cardType: '储蓄卡',
	  customerType: '大众版',
	  singleQuota: '300',
	  dailyLimit: '300',
	  rowNum: 3
	}, {
	  key: 24,
	  bankName: '民生银行',
	  cardType: '储蓄卡',
	  customerType: '贵宾版',
	  singleQuota: '5000',
	  dailyLimit: '5000',
	  rowNum: 0
	}, {
	  key: 25,
	  bankName: '民生银行',
	  cardType: '储蓄卡',
	  customerType: 'U宝用户',
	  singleQuota: '50万',
	  dailyLimit: '50万',
	  rowNum: 0
	}, {
	  key: 26,
	  bankName: '广发银行',
	  cardType: '储蓄卡',
	  customerType: '手机动态密码版',
	  singleQuota: '5000',
	  dailyLimit: '5000',
	  rowNum: 3
	}, {
	  key: 27,
	  bankName: '广发银行',
	  cardType: '储蓄卡',
	  customerType: 'key盾',
	  singleQuota: '100万',
	  dailyLimit: '100万',
	  rowNum: 0
	}, {
	  key: 28,
	  bankName: '广发银行',
	  cardType: '储蓄卡',
	  customerType: 'key令',
	  singleQuota: '1万',
	  dailyLimit: '5万',
	  rowNum: 0
	}, {
	  key: 29,
	  bankName: '上海银行',
	  cardType: '储蓄卡',
	  customerType: '办理动态密码版个人网银（含文件证书）,开通网上支付功能',
	  singleQuota: '6000',
	  dailyLimit: '1万',
	  rowNum: 2
	}, {
	  key: 30,
	  bankName: '上海银行',
	  cardType: '储蓄卡',
	  customerType: '办理E盾证书版个人网银，开通网上支付功能',
	  singleQuota: '10万',
	  dailyLimit: '100万',
	  rowNum: 0
	}, {
	  key: 31,
	  bankName: '招商银行',
	  cardType: '储蓄卡',
	  customerType: '大众版',
	  singleQuota: '500',
	  dailyLimit: '500',
	  rowNum: 2
	}, {
	  key: 32,
	  bankName: '招商银行',
	  cardType: '储蓄卡',
	  customerType: '专业版',
	  singleQuota: '200万',
	  dailyLimit: '200万',
	  rowNum: 0
	}, {
	  key: 33,
	  bankName: '浦发银行',
	  cardType: '储蓄卡',
	  customerType: '手机动态密码',
	  singleQuota: '20万',
	  dailyLimit: '20万',
	  rowNum: 2
	}, {
	  key: 34,
	  bankName: '浦发银行',
	  cardType: '储蓄卡',
	  customerType: '数字证书（浏览器证书或U盾',
	  singleQuota: '无限额，自行设置',
	  dailyLimit: '无限额，自行设置',
	  rowNum: 0
	}, {
	  key: 35,
	  bankName: '平安银行',
	  cardType: '储蓄卡',
	  customerType: '网银',
	  singleQuota: '5万',
	  dailyLimit: '5万',
	  rowNum: 1
	}, {
	  key: 36,
	  bankName: '北京银行',
	  cardType: '储蓄卡',
	  customerType: '普通版',
	  singleQuota: '300',
	  dailyLimit: '300',
	  rowNum: 3
	}, {
	  key: 37,
	  bankName: '北京银行',
	  cardType: '储蓄卡',
	  customerType: '动态密码版',
	  singleQuota: '1000',
	  dailyLimit: '5000',
	  rowNum: 0
	}, {
	  key: 38,
	  bankName: '北京银行',
	  cardType: '储蓄卡',
	  customerType: '证书版',
	  singleQuota: '100万',
	  dailyLimit: '100万',
	  rowNum: 0
	}, {
	  key: 39,
	  bankName: '北京农商银行',
	  cardType: '储蓄卡',
	  customerType: '大众版',
	  singleQuota: '500',
	  dailyLimit: '500',
	  rowNum: 3
	}, {
	  key: 40,
	  bankName: '北京农商银行',
	  cardType: '储蓄卡',
	  customerType: '手机认证',
	  singleQuota: '10万',
	  dailyLimit: '50万',
	  rowNum: 0
	}, {
	  key: 41,
	  bankName: '北京农商银行',
	  cardType: '储蓄卡',
	  customerType: '证书认证',
	  singleQuota: '20万',
	  dailyLimit: '100万',
	  rowNum: 0
	}, {
	  key: 42,
	  bankName: '上海农商银行',
	  cardType: '储蓄卡',
	  customerType: '短信版',
	  singleQuota: '5000',
	  dailyLimit: '5000',
	  rowNum: 2
	}, {
	  key: 43,
	  bankName: '上海农商银行',
	  cardType: '储蓄卡',
	  customerType: '证书版',
	  singleQuota: '50万',
	  dailyLimit: '100万',
	  rowNum: 0
	}, {
	  key: 44,
	  bankName: '华夏银行',
	  cardType: '储蓄卡',
	  customerType: '卡密码校验',
	  singleQuota: '300',
	  dailyLimit: '1000',
	  rowNum: 3
	}, {
	  key: 45,
	  bankName: '华夏银行',
	  cardType: '储蓄卡',
	  customerType: '手机动态验证码',
	  singleQuota: '1000',
	  dailyLimit: '5000',
	  rowNum: 0
	}, {
	  key: 46,
	  bankName: '华夏银行',
	  cardType: '储蓄卡',
	  customerType: 'U盾',
	  singleQuota: '5000',
	  dailyLimit: '10万',
	  rowNum: 0
	}];
	
	exports.default = BFBankLimitData;

/***/ }),

/***/ 381:
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = {
	  xmppURL: 'im-api.easemob.com', // xmpp Server地址，对于在console.easemob.com创建的appKey，固定为该值
	  apiURL: 'http://a1.easemob.com', // rest Server地址，对于在console.easemob.com创建的appkey，固定为该值
	  appkey: 'ddy98#ddtg', // App key
	  https: false, // 是否使用https
	  isMultiLoginSessions: false, // 是否开启多页面同步收消息
	  isAutoLogin: true // 自动上线，（如设置为false，则表示离线，无法收消息）
	};

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(4);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(18);
	
	var _reactRouter = __webpack_require__(39);
	
	var _route = __webpack_require__(383);
	
	var _configureStore = __webpack_require__(384);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	__webpack_require__(471);
	
	__webpack_require__(470);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	// 创建 store
	
	
	// 导入全局css
	var store = (0, _configureStore2.default)();
	
	// 渲染路由
	_reactDom2.default.render(_react2.default.createElement(_reactRedux.Provider, { store: store }, _react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: _route.routes })), document.getElementById('app'));

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routes = undefined;
	
	var _views = __webpack_require__(391);
	
	var _assets = __webpack_require__(392);
	
	var routes = exports.routes = {
	  path: '/center',
	  component: _views.App,
	  indexRoute: { component: _views.Dashboard },
	  childRoutes: [{
	    path: 'assets',
	    component: _views.Assets,
	    indexRoute: { component: _assets.TradeHis },
	    childRoutes: [{
	      path: 'recharge',
	      component: _assets.Recharge,
	      indexRoute: { component: _assets.Recharge.Fast },
	      childRoutes: [{ path: 'ebank', component: _assets.Recharge.Ebank }, { path: 'baofu', component: _assets.Recharge.Baofu }]
	    }, { path: 'withdraw', component: _assets.Withdraw }, { path: 'deduction', component: _assets.Deduction }, { path: 'strategy', component: _assets.StrategyHis }]
	  }, { path: 'redpacket', component: _views.RedPacket }, { path: 'protocol', component: _views.Protocol }, { path: 'accountsafety', component: _views.AccountSafety }, { path: 'spread', component: _views.Spread }, { path: 'privacy', component: _views.Privacy }]
	};

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configureStore;
	
	var _redux = __webpack_require__(11);
	
	var _reduxThunk = __webpack_require__(291);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reducers = __webpack_require__(387);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _Global = __webpack_require__(173);
	
	var _Global2 = _interopRequireDefault(_Global);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var buildStore;
	
	if (_Global2.default.DEBUG) {
	    buildStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default),
	    // require('redux-devtools').devTools(),
	    // require('redux-devtools').persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
	    window.devToolsExtension ? window.devToolsExtension() : function (f) {
	        return f;
	    })(_redux.createStore);
	} else {
	    buildStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default))(_redux.createStore);
	}
	
	function configureStore(initialState) {
	    var store = buildStore(_reducers2.default, initialState);
	
	    if (false) {
	        module.hot.accept('./reducers', function () {
	            store.replaceReducer(require('./reducers'));
	        });
	    }
	    return store;
	}

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = global;
	
	var _ActionTypes = __webpack_require__(70);
	
	var _immutable = __webpack_require__(84);
	
	var initialState = (0, _immutable.Map)({
	  showCardBindDialog: false
	});
	
	function global() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ActionTypes.GLOBAL_SET_CARD_BIND_DIALOG:
	      return state.set('showCardBindDialog', action.visible);
	    default:
	      return state;
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = global;
	
	var _ActionTypes = __webpack_require__(70);
	
	var _immutable = __webpack_require__(84);
	
	var initialState = (0, _immutable.Map)({
	  events: (0, _immutable.Map)({})
	});
	
	function global() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  var actionData = action.data;
	  var events = state.get('events');
	  switch (action.type) {
	    case _ActionTypes.IM_ADD_EVENT:
	      return state.set('events', events.set(actionData.type + '', actionData.eventHandler));
	    case _ActionTypes.IM_REMOVE_EVENT:
	      delete events[actionData.type + ''];
	      return state.set('events', (0, _immutable.Map)(events));
	    default:
	      return state;
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(11);
	
	var _global = __webpack_require__(385);
	
	var _global2 = _interopRequireDefault(_global);
	
	var _user = __webpack_require__(388);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _im = __webpack_require__(386);
	
	var _im2 = _interopRequireDefault(_im);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var rootReducer = (0, _redux.combineReducers)({
	  global: _global2.default,
	  user: _user2.default,
	  im: _im2.default
	});
	
	exports.default = rootReducer;

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = user;
	
	var _immutable = __webpack_require__(84);
	
	var _ActionTypes = __webpack_require__(70);
	
	var initialState = (0, _immutable.Map)({
	  cookieInfo: (0, _immutable.Map)({}),
	  baseInfo: (0, _immutable.Map)({}),
	  loginInfo: (0, _immutable.Map)({}),
	  assets: (0, _immutable.Map)({}),
	  bankCardList: (0, _immutable.List)([]),
	  strategyAssets: (0, _immutable.Map)({}),
	  dataCount: (0, _immutable.Map)({}),
	  spreadQRCode: false,
	  logined: true
	});
	
	function user() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ActionTypes.USER_LOAD_INFO:
	      return state.set('baseInfo', (0, _immutable.Map)(action.info)).set('loginInfo', (0, _immutable.Map)(action.info));
	    case _ActionTypes.USER_LOAD_ASSETS:
	      return state.set('assets', (0, _immutable.Map)(action.assets));
	    case _ActionTypes.USER_LOAD_STRATEGY_ASSETS:
	      return state.set('strategyAssets', (0, _immutable.Map)(action.assets));
	    case _ActionTypes.USER_LOAD_BANK_CARD:
	      return state.set('bankCardList', (0, _immutable.List)(action.list));
	    case _ActionTypes.USER_LOAD_DATA_COUNT:
	      return state.set('dataCount', (0, _immutable.Map)(action.count));
	    case _ActionTypes.USER_SET_DATA_COUNT:
	      return state.set('dataCount', state.get('dataCount').merge((0, _immutable.Map)(action.dataCount)));
	    case _ActionTypes.USER_SET_TRADE_PWD:
	      return state.set('baseInfo', state.get('baseInfo').set('transPwd', 'true'));
	    case _ActionTypes.USER_SET_NICK_NAME:
	      return state.set('baseInfo', state.get('baseInfo').set('nickName', action.nickName));
	    case _ActionTypes.USER_SET_HEAD_PIC:
	      return state.set('baseInfo', state.get('baseInfo').set('headImage', action.headPic));
	    case _ActionTypes.USER_SYNC_COOKIE_INFO:
	      var info = action.info;
	      if (!info.uid || !info.sid) return state.set('logined', false);
	      return state.set('cookieInfo', (0, _immutable.Map)(action.info));
	    case _ActionTypes.USER_SET_SPREAD_QRCODE:
	      return state.set('spreadQRCode', action.data);
	    default:
	      return state;
	  }
	}

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _Security = __webpack_require__(71);
	
	var _Security2 = _interopRequireDefault(_Security);
	
	var _Cookie = __webpack_require__(60);
	
	var _Cookie2 = _interopRequireDefault(_Cookie);
	
	var _Runtime = __webpack_require__(27);
	
	var _easemobWebsdk = __webpack_require__(462);
	
	var _easemobWebsdk2 = _interopRequireDefault(_easemobWebsdk);
	
	var _WebIMConfig = __webpack_require__(381);
	
	var _WebIMConfig2 = _interopRequireDefault(_WebIMConfig);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	_easemobWebsdk2.default.config = _WebIMConfig2.default;
	console.log(_WebIMConfig2.default);
	var domain = (0, _Runtime.getDomain)();
	var cookieOptions = {
	  domain: domain,
	  path: '/'
	};
	
	var Easemob = function () {
	  function Easemob(props) {
	    _classCallCheck(this, Easemob);
	
	    this.props = props;
	    this.conn = new _easemobWebsdk2.default.connection({
	      https: _easemobWebsdk2.default.config.https,
	      url: _easemobWebsdk2.default.config.xmppURL,
	      isAutoLogin: _easemobWebsdk2.default.config.isAutoLogin,
	      isMultiLoginSessions: _easemobWebsdk2.default.config.isMultiLoginSessions
	    });
	    this.listen();
	  }
	
	  _createClass(Easemob, [{
	    key: 'listen',
	    value: function listen() {
	      this.conn.listen(this.props.listeners || {});
	    }
	  }, {
	    key: 'login',
	    value: function login() {
	      var options = {
	        apiUrl: _easemobWebsdk2.default.config.apiURL,
	        user: this.props.user,
	        pwd: _Security2.default.encryptMd5(this.props.user),
	        appKey: _easemobWebsdk2.default.config.appkey,
	        success: function success(token) {
	          var _token = token.access_token;
	          _Cookie2.default.set('webim_token', _token, cookieOptions);
	        },
	        error: function error(err) {
	          console.log(err);
	        }
	      };
	      this.conn.open(options);
	    }
	  }]);
	
	  return Easemob;
	}();
	
	exports.default = Easemob;

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Security = __webpack_require__(71);
	
	var _Security2 = _interopRequireDefault(_Security);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function signMd5() {
	  var time = new Date().getTime();
	  return { time: time, sign: _Security2.default.encryptMd5(time + 'moc.89ddy') };
	}
	
	exports.default = {
	  signMd5: signMd5
	};

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var views = {
	  App: __webpack_require__(402),
	  Dashboard: __webpack_require__(404),
	  Assets: __webpack_require__(403),
	  RedPacket: __webpack_require__(407),
	  Protocol: __webpack_require__(406),
	  AccountSafety: __webpack_require__(401),
	  Spread: __webpack_require__(408),
	  Privacy: __webpack_require__(405)
	};
	
	module.exports = views;

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var assets = {
	  TradeHis: __webpack_require__(412),
	  Recharge: __webpack_require__(410),
	  Withdraw: __webpack_require__(413),
	  Deduction: __webpack_require__(409),
	  StrategyHis: __webpack_require__(411)
	};
	module.exports = assets;

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(18);
	
	var _actions = __webpack_require__(24);
	
	var Actions = _interopRequireWildcard(_actions);
	
	var _Api = __webpack_require__(16);
	
	var _Api2 = _interopRequireDefault(_Api);
	
	var _ApiCaller = __webpack_require__(17);
	
	var _ApiCaller2 = _interopRequireDefault(_ApiCaller);
	
	var _redux = __webpack_require__(11);
	
	var _antd = __webpack_require__(9);
	
	var _CardBindForm = __webpack_require__(175);
	
	var _CardBindForm2 = _interopRequireDefault(_CardBindForm);
	
	var _RechargeConfirm = __webpack_require__(176);
	
	var _RechargeConfirm2 = _interopRequireDefault(_RechargeConfirm);
	
	var _Runtime = __webpack_require__(27);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//构造input数据
	function setFormInput(form, value, name) {
	  var newElement = document.createElement("input");
	  newElement.setAttribute("name", name);
	  newElement.setAttribute("type", "hidden");
	  newElement.setAttribute("value", value);
	  form.appendChild(newElement);
	  return form;
	}
	
	function getRechargeApi(type) {
	  var apiOld = _Api2.default.user.getRecharge;
	  var api = {
	    url: _Api2.default.user.getRecharge.url + type,
	    type: apiOld.type,
	    xform: apiOld.xform
	  };
	  return api;
	}
	
	var CardBindDialog = function (_React$Component) {
	  _inherits(CardBindDialog, _React$Component);
	
	  function CardBindDialog(props) {
	    _classCallCheck(this, CardBindDialog);
	
	    var _this = _possibleConstructorReturn(this, (CardBindDialog.__proto__ || Object.getPrototypeOf(CardBindDialog)).call(this, props));
	
	    _this.state = {
	      handleSubmit: function handleSubmit() {},
	      handleReset: function handleReset() {}
	    };
	    return _this;
	  }
	
	  _createClass(CardBindDialog, [{
	    key: 'handleRegMethods',
	    value: function handleRegMethods(funcSubmit, funcReset) {
	      this.setState({
	        handleSubmit: funcSubmit,
	        handleReset: funcReset
	      });
	    }
	  }, {
	    key: 'reloadInfo',
	    value: function reloadInfo() {
	      // 重新加载用户信息
	      this.props.actions.loadUserInfo();
	      // 重新加载用户资产
	      this.props.actions.loadUserAssets();
	    }
	  }, {
	    key: 'handleComfirm',
	    value: function handleComfirm() {
	      var _this2 = this;
	
	      this.state.handleSubmit(function (values) {
	        // 构造跳转数据
	        var payData = {
	          sid: _this2.props.sid,
	          amount: 1,
	          bankNo: values.bankCard,
	          source: 1,
	          realName: values.realName,
	          idcardNo: values.idCard
	          //console.log(payData)
	          // 跳转
	          //window.open('//' + getDomain() + ':8082/ddy-llpay/lianlian/recharge?ddydata=' + encodeURIComponent(JSON.stringify(payData)))
	          //构造充值
	        };var api = getRechargeApi('51');
	        //api.url += '51'
	        _ApiCaller2.default.call(api, {
	          realName: encodeURIComponent(values.realName),
	          bankNo: values.bankCard,
	          idCard: values.idCard,
	          amount: 1
	        }, function (res) {
	          if (res.code == 0) {
	            //提交form
	            var data = res.data;
	            var newForm = document.createElement("form");
	            document.body.appendChild(newForm);
	            newForm.method = 'post';
	            newForm.action = '//pay.' + (0, _Runtime.getDomain)() + '/fmsubmit';
	            data['_action'] = data.req_url;
	            //newForm.target = '_blank'
	            //构造隐藏表单
	            delete data['req_url'];
	            for (var key in data) {
	              if (key == 'risk_item') {
	                data[key] = JSON.stringify(data[key]);
	                var temp = data[key].replace(/\\/g, '').substr(1);
	                temp = temp.substr(0, temp.length - 1);
	                data[key] = temp;
	              }
	              newForm = setFormInput(newForm, data[key], key);
	            }
	            //提交
	            newForm.submit();
	            _this2.handleCancel();
	            //RechargeConfirm.show(this.reloadInfo.bind(this))
	          } else {
	            _antd.message.error(res.msg);
	          }
	        });
	      });
	    }
	  }, {
	    key: 'handleCancel',
	    value: function handleCancel() {
	      this.state.handleReset();
	      this.props.onCancel();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _antd.Modal,
	        {
	          title: '\u7ED1\u5B9A\u94F6\u884C\u5361',
	          onOk: this.handleComfirm.bind(this),
	          onCancel: this.handleCancel.bind(this),
	          visible: this.props.visible,
	          className: 'card-bind-dialog' },
	        _react2.default.createElement(_CardBindForm2.default, { onRegMethods: this.handleRegMethods.bind(this) })
	      );
	    }
	  }]);
	
	  return CardBindDialog;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    global: state.global,
	    user: state.user
	  };
	}, function (dispath) {
	  return {
	    actions: (0, _redux.bindActionCreators)(Actions, dispath)
	  };
	})(CardBindDialog);

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(18);
	
	var _actions = __webpack_require__(24);
	
	var Actions = _interopRequireWildcard(_actions);
	
	var _redux = __webpack_require__(11);
	
	var _Api = __webpack_require__(16);
	
	var _Api2 = _interopRequireDefault(_Api);
	
	var _ApiCaller = __webpack_require__(17);
	
	var _ApiCaller2 = _interopRequireDefault(_ApiCaller);
	
	var _antd = __webpack_require__(9);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HeadPicDialog = function (_React$Component) {
	  _inherits(HeadPicDialog, _React$Component);
	
	  function HeadPicDialog(props) {
	    _classCallCheck(this, HeadPicDialog);
	
	    var _this = _possibleConstructorReturn(this, (HeadPicDialog.__proto__ || Object.getPrototypeOf(HeadPicDialog)).call(this, props));
	
	    _this.state = {
	      loading: false,
	      uploading: false,
	      imageUrl: ''
	    };
	    return _this;
	  }
	
	  _createClass(HeadPicDialog, [{
	    key: 'handleUpload',
	    value: function handleUpload() {
	      var _this2 = this;
	
	      this.setState({
	        loading: true
	      });
	      var imageUrl = this.state.imageUrl;
	      _ApiCaller2.default.call(_Api2.default.user.setHeadPic, { headImage: imageUrl }, function (res) {
	        _this2.setState({
	          loading: false
	        });
	        if (res.code == 0) {
	          _antd.notification.success({
	            message: '头像上传成功',
	            description: '您的头像已更新!'
	          });
	          _this2.props.actions.setHeadPic(imageUrl);
	          _this2.props.onCancel();
	        } else {
	          _antd.message.error(res.msg);
	        }
	      });
	    }
	  }, {
	    key: 'handleBeforeUpload',
	    value: function handleBeforeUpload() {
	      this.setState({
	        uploading: true
	      });
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(info) {
	      if (info.file.status == 'done') {
	        this.setState({
	          uploading: false
	        });
	        var res = info.file.response;
	        if (res.code == 0) {
	          _antd.notification.success({
	            message: '头像上传成功',
	            description: '您的头像已更新!'
	          });
	          this.props.actions.setHeadPic(res.data);
	          this.props.onCancel();
	          // this.setState({
	          //   imageUrl: res.data
	          // })
	          // message.success('图片上传成功!')
	        } else {
	          _antd.message.error('图片上传失败:' + res.msg);
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = {
	        name: 'headImage',
	        showUploadList: false,
	        action: _Api2.default.system.uploadImage.url,
	        headers: _ApiCaller2.default.getCommonHeader()
	      };
	      return _react2.default.createElement(
	        _antd.Modal,
	        {
	          title: '\u5934\u50CF\u8BBE\u7F6E',
	          onOk: this.props.onCancel,
	          onCancel: this.props.onCancel,
	          confirmLoading: this.state.loading,
	          visible: this.props.visible,
	          footer: '' },
	        _react2.default.createElement(
	          _antd.Spin,
	          { spining: this.state.uploading },
	          _react2.default.createElement(
	            'div',
	            { style: { margin: '0 auto', width: 200, height: 200, backgroundColor: '#e6f2fa' } },
	            _react2.default.createElement('img', { width: '200', height: '200', src: this.state.imageUrl || this.props.userHeadImage })
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: { margin: '10px auto', width: 105 } },
	            _react2.default.createElement(
	              _antd.Upload,
	              _extends({}, props, { onChange: this.handleChange.bind(this), beforeUpload: this.handleBeforeUpload.bind(this) }),
	              _react2.default.createElement(
	                _antd.Button,
	                { type: 'ghost' },
	                _react2.default.createElement(_antd.Icon, { type: 'upload' }),
	                ' \u70B9\u51FB\u4E0A\u4F20'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return HeadPicDialog;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    user: state.user
	  };
	}, function (dispath) {
	  return {
	    actions: (0, _redux.bindActionCreators)(Actions, dispath)
	  };
	})(HeadPicDialog);

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Api = __webpack_require__(16);
	
	var _Api2 = _interopRequireDefault(_Api);
	
	var _ApiCaller = __webpack_require__(17);
	
	var _ApiCaller2 = _interopRequireDefault(_ApiCaller);
	
	var _antd = __webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FormItem = _antd.Form.Item;
	
	var NickNameDialog = function (_React$Component) {
	  _inherits(NickNameDialog, _React$Component);
	
	  function NickNameDialog(props) {
	    _classCallCheck(this, NickNameDialog);
	
	    var _this = _possibleConstructorReturn(this, (NickNameDialog.__proto__ || Object.getPrototypeOf(NickNameDialog)).call(this, props));
	
	    _this.state = {
	      loading: false
	    };
	    return _this;
	  }
	
	  _createClass(NickNameDialog, [{
	    key: 'handleSubmit',
	    value: function handleSubmit() {
	      var _this2 = this;
	
	      this.props.form.validateFields(function (error, value) {
	        if (!error) _this2.setNickName(value.nickName);
	      });
	    }
	  }, {
	    key: 'setNickName',
	    value: function setNickName(nickName) {
	      var _this3 = this;
	
	      this.setState({
	        loading: true
	      });
	      _ApiCaller2.default.call(_Api2.default.user.setInfo, { nickName: encodeURIComponent(nickName) }, function (res) {
	        _this3.setState({
	          loading: false
	        });
	        if (res.code == 0) {
	          _antd.notification.success({
	            message: '昵称已修改',
	            description: '您的昵称已更新'
	          });
	          _this3.props.onOk(nickName);
	        } else {
	          _antd.message.error(res.msg);
	        }
	      });
	    }
	  }, {
	    key: 'checkNickName',
	    value: function checkNickName(rule, value, callback) {
	      callback();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props$form = this.props.form,
	          getFieldProps = _props$form.getFieldProps,
	          setFieldsValue = _props$form.setFieldsValue;
	
	      var formItemLayout = {
	        labelCol: { span: 6 },
	        wrapperCol: { span: 14 }
	      };
	      var nickNameProps = getFieldProps('nickName', {
	        rules: [{ required: true, whitespace: true, max: 7, message: '请填写您的昵称，最多7个字符' }, { validator: this.checkNickName.bind(this) }],
	        initialValue: this.props.nickName || ''
	      });
	      return _react2.default.createElement(
	        _antd.Modal,
	        {
	          title: '\u6635\u79F0\u8BBE\u7F6E',
	          onOk: this.handleSubmit.bind(this),
	          onCancel: this.props.onCancel,
	          confirmLoading: this.state.loading,
	          visible: this.props.visible },
	        _react2.default.createElement(
	          _antd.Form,
	          { horizontal: true, form: this.props.form },
	          _react2.default.createElement(
	            FormItem,
	            _extends({}, formItemLayout, {
	              hasFeedback: true,
	              label: '\u6635\u79F0\uFF1A' }),
	            _react2.default.createElement(_antd.Input, _extends({}, nickNameProps, { placeholder: '\u8BF7\u8F93\u5165\u60A8\u8981\u8BBE\u7F6E\u7684\u6635\u79F0' }))
	          )
	        )
	      );
	    }
	  }]);
	
	  return NickNameDialog;
	}(_react2.default.Component);
	
	NickNameDialog = _antd.Form.create()(NickNameDialog);
	
	exports.default = NickNameDialog;

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NoCardBound = function (_React$Component) {
	  _inherits(NoCardBound, _React$Component);
	
	  function NoCardBound() {
	    _classCallCheck(this, NoCardBound);
	
	    return _possibleConstructorReturn(this, (NoCardBound.__proto__ || Object.getPrototypeOf(NoCardBound)).apply(this, arguments));
	  }
	
	  _createClass(NoCardBound, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      this.props.onBindClick(true);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var noCardBoundStyle = {
	        display: this.props.visible == true ? 'block' : 'none'
	      };
	      return _react2.default.createElement(
	        'div',
	        { className: 'no_card_bound', style: noCardBoundStyle },
	        _react2.default.createElement('i', { className: 'ui-icon-warn' }),
	        ' \u60A8\u8FD8\u672A\u7ED1\u5B9A\u94F6\u884C\u5361\uFF0C\u5C06\u5F71\u54CD\u529F\u80FD\u4F7F\u7528\xA0\xA0\xA0\xA0',
	        _react2.default.createElement(
	          'a',
	          { onClick: this.handleClick.bind(this) },
	          '\u7ACB\u5373\u7ED1\u5B9A'
	        )
	      );
	    }
	  }]);
	
	  return NoCardBound;
	}(_react2.default.Component);
	
	exports.default = NoCardBound;

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(18);
	
	var _actions = __webpack_require__(24);
	
	var Actions = _interopRequireWildcard(_actions);
	
	var _redux = __webpack_require__(11);
	
	var _ValidateHelper = __webpack_require__(72);
	
	var _ValidateHelper2 = _interopRequireDefault(_ValidateHelper);
	
	var _ApiCaller = __webpack_require__(17);
	
	var _ApiCaller2 = _interopRequireDefault(_ApiCaller);
	
	var _Format = __webpack_require__(35);
	
	var Format = _interopRequireWildcard(_Format);
	
	var _Api = __webpack_require__(16);
	
	var _Api2 = _interopRequireDefault(_Api);
	
	var _reactRouter = __webpack_require__(39);
	
	var _antd = __webpack_require__(9);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FormItem = _antd.Form.Item;
	
	var formItemLayout = {
	  labelCol: { span: 6 },
	  wrapperCol: { span: 14 }
	};
	
	var TransferIn = function (_Component) {
	  _inherits(TransferIn, _Component);
	
	  function TransferIn(props) {
	    _classCallCheck(this, TransferIn);
	
	    var _this = _possibleConstructorReturn(this, (TransferIn.__proto__ || Object.getPrototypeOf(TransferIn)).call(this, props));
	
	    _this.state = {
	      loading: false
	    };
	    return _this;
	  }
	
	  _createClass(TransferIn, [{
	    key: 'checkAmount',
	    value: function checkAmount(rule, value, callback) {
	      if (_ValidateHelper2.default.amount(value)) {
	        var balance = this.props.user.get('assets').get('available');
	        if (value > balance) callback(new Error('可用余额不足'));else callback();
	      } else callback(new Error('请输入有效的金额'));
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit() {
	      var _this2 = this;
	
	      this.props.form.validateFields(function (errors, values) {
	        if (!!errors) return;
	
	        var state = _this2.state;
	        state.loading = true;
	        _this2.setState(state);
	        _ApiCaller2.default.call(_Api2.default.user.transfer, {
	          amount: values.amount
	        }, function (res) {
	          state.loading = false;
	          _this2.setState(state);
	          if (res.code == 0) {
	            _antd.notification.success({
	              message: '余额转入策略账户成功'
	            });
	            _this2.props.onCancel();
	            _this2.props.form.resetFields();
	            // 刷新账户资金
	            _this2.props.actions.loadUserAssets();
	            _this2.props.actions.loadUserStrategyAssets();
	          } else {
	            _antd.message.error(res.msg);
	          }
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var balance = this.props.user.get('assets').get('available');
	      var getFieldProps = this.props.form.getFieldProps;
	
	      var amountProps = getFieldProps('amount', {
	        rules: [{ required: true, message: '请输入转入金额' }, { validator: this.checkAmount.bind(this) }]
	      });
	      return _react2.default.createElement(
	        _antd.Modal,
	        {
	          title: '\u4ECE\u70B9\u70B9\u76C8\u94B1\u5305\u8F6C\u5165\u7B56\u7565\u8D26\u6237',
	          visible: this.props.visible,
	          confirmLoading: this.state.loading,
	          onCancel: this.props.onCancel,
	          onOk: this.handleSubmit.bind(this) },
	        _react2.default.createElement(
	          _antd.Form,
	          { horizontal: true, form: this.props.form },
	          _react2.default.createElement(
	            FormItem,
	            _extends({}, formItemLayout, {
	              label: '\u70B9\u70B9\u76C8\u94B1\u5305\u4F59\u989D\uFF1A' }),
	            _react2.default.createElement(
	              'p',
	              { className: 'ant-form-text' },
	              Format.money(balance, 2, '')
	            )
	          ),
	          _react2.default.createElement(
	            FormItem,
	            formItemLayout,
	            _react2.default.createElement(
	              'p',
	              { className: 'ant-text-recharge', style: { paddingLeft: 60 } },
	              '\u5982\u4F59\u989D\u4E0D\u8DB3\u8BF7\u5148 ',
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/center/assets/recharge' },
	                '\u5145\u503C>'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            FormItem,
	            _extends({}, formItemLayout, {
	              hasFeedback: true,
	              label: '\u8F6C\u5165\u91D1\u989D\uFF1A' }),
	            _react2.default.createElement(_antd.Input, _extends({}, amountProps, { placeholder: '\u8BF7\u8F93\u5165\u60A8\u8981\u8F6C\u5165\u7B56\u7565\u8D26\u6237\u7684\u91D1\u989D' }))
	          )
	        )
	      );
	    }
	  }]);
	
	  return TransferIn;
	}(_react.Component);
	
	TransferIn = _antd.Form.create()(TransferIn);
	
	var TransferOut = function (_Component2) {
	  _inherits(TransferOut, _Component2);
	
	  function TransferOut(props) {
	    _classCallCheck(this, TransferOut);
	
	    var _this3 = _possibleConstructorReturn(this, (TransferOut.__proto__ || Object.getPrototypeOf(TransferOut)).call(this, props));
	
	    _this3.state = {
	      balance: _this3.props.user.get('strategyAssets').get('available') || 0,
	      loading: false
	    };
	    return _this3;
	  }
	
	  _createClass(TransferOut, [{
	    key: 'checkAmount',
	    value: function checkAmount(rule, value, callback) {
	      if (_ValidateHelper2.default.amount(value)) {
	        var balance = this.props.user.get('strategyAssets').get('available');
	        if (value > balance) callback(new Error('可用余额不足'));else callback();
	      } else callback(new Error('请输入有效的金额'));
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit() {
	      var _this4 = this;
	
	      this.props.form.validateFields(function (errors, values) {
	        if (!!errors) return;
	
	        var state = _this4.state;
	        state.loading = true;
	        _this4.setState(state);
	        _ApiCaller2.default.call(_Api2.default.user.transfer, {
	          amount: -values.amount
	        }, function (res) {
	          state.loading = false;
	          _this4.setState(state);
	          if (res.code == 0) {
	            _antd.notification.success({
	              message: '策略账户余额转出成功'
	            });
	            _this4.props.onCancel();
	            _this4.props.form.resetFields();
	            // 刷新账户资金
	            _this4.props.actions.loadUserAssets();
	            _this4.props.actions.loadUserStrategyAssets();
	          } else {
	            _antd.message.error(res.msg);
	          }
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var balance = this.props.user.get('strategyAssets').get('available');
	      var getFieldProps = this.props.form.getFieldProps;
	
	      var amountProps = getFieldProps('amount', {
	        rules: [{ required: true, message: '请输入转出金额' }, { validator: this.checkAmount.bind(this) }]
	      });
	      return _react2.default.createElement(
	        _antd.Modal,
	        {
	          title: '\u4ECE\u7B56\u7565\u8D26\u6237\u8F6C\u51FA\u70B9\u70B9\u76C8\u94B1\u5305',
	          visible: this.props.visible,
	          confirmLoading: this.state.loading,
	          onCancel: this.props.onCancel,
	          onOk: this.handleSubmit.bind(this) },
	        _react2.default.createElement(
	          _antd.Form,
	          { horizontal: true, form: this.props.form },
	          _react2.default.createElement(
	            FormItem,
	            _extends({}, formItemLayout, {
	              label: '\u7B56\u7565\u8D26\u6237\u4F59\u989D\uFF1A' }),
	            _react2.default.createElement(
	              'p',
	              { className: 'ant-form-text' },
	              Format.money(balance, 2, '')
	            )
	          ),
	          _react2.default.createElement(
	            FormItem,
	            _extends({}, formItemLayout, {
	              hasFeedback: true,
	              label: '\u8F6C\u51FA\u91D1\u989D\uFF1A' }),
	            _react2.default.createElement(_antd.Input, _extends({}, amountProps, { placeholder: '\u8BF7\u8F93\u5165\u60A8\u8981\u4ECE\u7B56\u7565\u8D26\u6237\u8F6C\u51FA\u7684\u91D1\u989D' }))
	          )
	        )
	      );
	    }
	  }]);
	
	  return TransferOut;
	}(_react.Component);
	
	TransferOut = _antd.Form.create()(TransferOut);
	
	var PBTransfer = function (_Component3) {
	  _inherits(PBTransfer, _Component3);
	
	  function PBTransfer() {
	    _classCallCheck(this, PBTransfer);
	
	    return _possibleConstructorReturn(this, (PBTransfer.__proto__ || Object.getPrototypeOf(PBTransfer)).apply(this, arguments));
	  }
	
	  _createClass(PBTransfer, [{
	    key: 'render',
	    value: function render() {
	      return this.props.type == 1 ? _react2.default.createElement(TransferIn, this.props) : _react2.default.createElement(TransferOut, this.props);
	    }
	  }]);
	
	  return PBTransfer;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    user: state.user
	  };
	}, function (dispath) {
	  return {
	    actions: (0, _redux.bindActionCreators)(Actions, dispath)
	  };
	})(PBTransfer);

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Runtime = __webpack_require__(27);
	
	var _Runtime2 = _interopRequireDefault(_Runtime);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var domain = _Runtime2.default.getDomain();
	
	var Footer = function (_React$Component) {
	  _inherits(Footer, _React$Component);
	
	  function Footer() {
	    _classCallCheck(this, Footer);
	
	    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
	  }
	
	  _createClass(Footer, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        {
	          className: 'bottom-content'
	        },
	        _react2.default.createElement(
	          'div',
	          { className: 'main-page' },
	          _react2.default.createElement(
	            'div',
	            { style: { overflow: 'hidden', marginTop: 0 } },
	            _react2.default.createElement(
	              'div',
	              { style: { float: 'left', width: 538 } },
	              _react2.default.createElement(
	                'ul',
	                { className: 'bottom-contact-list' },
	                _react2.default.createElement(
	                  'li',
	                  { key: 2 },
	                  '\u7535\u8BDD\uFF1A',
	                  _react2.default.createElement(
	                    'span',
	                    { style: { fontSize: '22px' } },
	                    '400-7111-288'
	                  ),
	                  '\uFF08\u5DE5\u4F5C\u65E5 9:00-18:00\uFF09'
	                ),
	                _react2.default.createElement(
	                  'li',
	                  { key: 3 },
	                  '\u7F51\u5740\uFF1Awww.hdclzx.com'
	                ),
	                _react2.default.createElement(
	                  'li',
	                  { key: 4 },
	                  '\u5730\u5740\uFF1A\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u6EE8\u6C5F\u533A\u6EE8\u76DB\u8DEF1505\u53F7\u94F6\u4E30\u5927\u53A6'
	                ),
	                _react2.default.createElement(
	                  'li',
	                  { key: 5 },
	                  '\u6D59\u6C5F\u5148\u542F\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8  \u7248\u6743\u6240\u6709 '
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'bottom-desc-groups' },
	              _react2.default.createElement(
	                'div',
	                { style: { float: 'left', paddingTop: 45 }, key: 'desc' },
	                _react2.default.createElement(
	                  'p',
	                  { className: 'bottom-p', key: 1 },
	                  '\u8FD1\u5728\u54AB\u5C3A\u7684\u5E02\u573A\uFF0C\u89E6\u624B\u53EF\u53CA\u7684\u673A\u9047'
	                ),
	                _react2.default.createElement(
	                  'p',
	                  { className: 'bottom-p hide', key: 2 },
	                  '\u5546\u52A1\u52A0\u76DF\uFF1A',
	                  _react2.default.createElement(
	                    'span',
	                    { style: { fontSize: '22px', letterSpacing: 0 } },
	                    '15990037540\xA0\xA0\xA018814883178'
	                  )
	                ),
	                _react2.default.createElement(
	                  'p',
	                  { className: 'bottom-p hide', key: 3 },
	                  '\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0',
	                  _react2.default.createElement(
	                    'span',
	                    { style: { fontSize: '22px', letterSpacing: 0 } },
	                    '18069763567\xA0\xA0\xA018069805883'
	                  )
	                ),
	                _react2.default.createElement(
	                  'p',
	                  { className: 'bottom-p', key: 4 },
	                  '\u671F\u5F85\u60A8\u7684\u52A0\u76DF\uFF0C\u91D1\u878D\u754C\u65B0\u65F6\u4EE3\u7684\u521B\u5BCC\u673A\u4F1A'
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { key: 4, style: { overflow: 'hidden' } },
	                _react2.default.createElement(
	                  'div',
	                  { style: { float: 'left', margin: '60px 0 0 36px' } },
	                  _react2.default.createElement(
	                    'div',
	                    { style: { color: '#fff' } },
	                    _react2.default.createElement(
	                      'span',
	                      { style: { fontSize: '14px' } },
	                      '\u5FAE\u4FE1\u626B\u4E00\u626B'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { style: { marginTop: 10, overflow: 'hidden', color: '#fff' } },
	                    _react2.default.createElement('img', { style: { display: 'block' }, src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABZCAMAAACJ4sOeAAAAsVBMVEX///8AAAD39/f7/P1ZWVmhoaF/f39JSUlPT0/FxcWIiIgUFBQmJiY2NTZwcHBBQEAeHR2+vr63t7ePkI9mZWbs7Oympqarq6swLy92dnaysrJgYGAODA7W1tVra2ubm5s5Ozno6OnS0tLf39/x8fHa2tqWlpbj4uPKycvNzs3L5vVkq8gCaL6AvdLk8vvV6/idytmu1/Cg0O0olNYUgsaRyOzt9uo9ndn+6aD9z15xt+WjOfQsAAAKzElEQVRYw9VZ2aKiOBBNCCCbLLIoyCIiqHeZ7tmX//+wOZWAqNy5PfPQD3O6FW5RHipFLUlgJ+074cS+IzT2naD9n6nFk1hMAjF+fwKB/59Z7R8O6xsOFhOrw+FwxAUHxxjH61pn2mENNXwipmDjD53YrftfH/IH6h1/AGMcIAYLxwTHQgkVDAZIIUDU/AG7B+oV9zcTBu4y5kLFxoUEx3DlsHRjrKzNhvNm4/EtG1aEehPzkKhdPtx+7vPVE/WGTThxd7Ya1AB+TyL1sUAdSLHHWu4p6jlBNgtqg2U6wWFH7gq2zTIjldQ6zmxW6Ulm6LqR1boL6ktGsJnNSz2hMR6ZoxMyZnxAvR8tqYh6gsVNedxONpfKUwqgBoi6Yh4n7D+kNjkhIGqETJ2SXETDRR7Pg8G0OBaSYVXbd9SuolY+yj+kzu+pORePwTuh5ATnn6jNb1KDoTYJFxaZBYg7nIPPvEPxTeqlr5WyggNvryllpnBnSp+MwDEl6m/7euMTGnacqHXf4w3EW9bHjr/nZRzDmfGZnio0zTiO64n6yBqfsPmAOpqTXymrEDbG+CjnXEQGjEJgop6rXLSgTowJpvK1vo+NfO8YR1YZzt43hr3OISwRepFRiSuEAXchLInaNCYkoP5GDREs5B3Tuc5MfDRiUBd6uNWBcA8DQyZI+FkNMa177OEKK2UHbha5hYLBD4XDwwIeOLHaagrfcgodVeti5Sy1UPv21j3MT+s1I4SjYzN+Q4s/PQipIFr/pcu0dk8y21bUdeDy3LZtn7tBEKw5QCkaoIbEEMQstQEmcbUJLWvxXX1A7chYtedMXHEFayrKbKRW2CgRYcoCB9/rJ+rz8Xh0vOTYsd47EHV/rKpk5xF2SVVV0W63W9vQ2oG6rVJ2Ohq4FhzRjKrjSio6x5pKzBP1XmZpJO2+eXp7107K2TiDJdAdpHmtipBU9UHOn6lF28lO1cZ83Z3bVIhzF3I3jJjWaio7wkOLn3shh3gD6rqLwz0udarSRq2Abh6GoftkdcAfoAocPVOd52Q1DEyVW12ZtzRuHybdrKYibsmCaHxE7ZZcITydpLIQrIa6djLclagwarSpdXmFwHeRmQI4XV0Xg8GfxUnnA4XqItHhaU3glgdVz4CbrxtuaREnlMqlOm9k49DZRfVGRaG0jQ+oY+nU1YJaONwCh0Q7ascyygIEqjtRH3iGM/EhtcniUk+LslR+uWopbPRL1801AQ4JwXYlOZWXZoo7krgMUYJc15UeLc1/oDaVsoK6oOOsZmymRjCAmrQzpf1YnuoPqJ3+xLRzyrS+O0scvIol4XCu+QM2vcZa6GisAbXo+3OrcsDoV9w8O6G7oC6W/fXI1twgpwaOE2cSjsNuMLh+l17Q1pX2soFR3KxNyvCdBNrkrrn4a/NSPRQ0IGXRbr1GTq0T0UpdIGLdJd+ZV5MHH1DHUtrxGwrkvwkt8Qiwl2MGsH7WZdDOUSvWC+om8DDEa6BHN6RULGDos7M0Zim+A9NmXQw4MgM/uj41sEzOQ3Sq+2wGKPyZWgj6yJusFbXHCM91+aE82dtc9yR1um30PYamEy7suq1ArYgVP/5BYus82G63g14zQZod+RNHc3tZLDj0W80/z5EaKaVR5+X99QV3UJKBO3QyFyc1zc8ZsKjXVtM0ToK21MRJgo7ReDxIbNbkQpM2//j28/vbT2ykNrmXJInfDNCVoRcnnqS2QfFMTSYW4ywdmKwIuVoJ/fDL268vb28/KIdQWb3PxGo8xihD3oI6yAuW4Sm0eQ2bHTMPue5cWTFIh8Dot1/f395+VC4StmNxzzFYR7pkdebsKGTM1UPKzMWCrLapek4enH398vbzb7/9/PZFWX2bgR3nBkY9cNnAtjDywAN8N5PVLtfz6kYNvt9/+vPPn36n8INkS8MyYXWaI6fM3HFIsP7Aas4bGdf7+9bf3XJbBdHpjz/GyEYBVNU6vK8ihexJ9qOvRZzYYpsc+LrZIEIc3AOPv2cbBM11pD69sB9+OL28SKvxg8Qg9zUjiDpj28SUQbacmMVyStsqXxNcKszKIeL99cvr16+/vGo378PABwyqHC7i+rLtWYF0qpGNFjWCzTZlDlJUt0EEQ1+B979+eRUqQirkYqyPgHfwbbPjVuf7BXXAE3ULHqopsJpK7smngqi/vn99f39/naz27yuIy9WRhP5Tol8jP8jYOapozhwVZLUeVOSjwA2kjvjy8vJyffnS3rIxDEw6jSKibiKCTqH3VPlCat5yjl5xiZRNqPmtXsMP6lRaXctnVC2m7k/1ut7F15Yq4mXgHNPG4CTF/SXF/ZpxhJTvmjpNhbH2r52ACjlvtaZOE1LrIbsXlQ8d/bkGBzyWQzkbmVEwzXE0ZiA3eiZkMOzUnEXprnk2Btl6UUMchkltGHor6tF9L2TzGYi6zzlw3XK+vZJZZt+jp8dhgv4feV7Vdx0IvI1sBaWXLKgHOsxVoZIVOIPyBFeJp9pODNHk6f7WZZbBh/6aqvO+DNPULXtJ7aT+baZZappbdvD36kZtl56W0qUoVc/AcWtNW1S+OSShrMSKQ80bASU+jEI5blHJeBKhrJI5z4XBrXtqRBNVRNxQILwUNQmtiXrK6ROkMzXptuqOHi/wR02bFk/zEIsbCNfYTZiNsYdCuG6K+MhOez7BO50xcBdJesI07mQirqMSmSpaeUcBbVD7iznfepziWGwztaWzXCD692tYdXKhGRh0k6lXqbnxAUJ/udUiTm2NZUgpR+61fRgiAcKiE2RHZ/JVW4BF40DUauyEjwONEiHcKl1oy9WM9uwQMXUfol7PrZQKTswaShoyULlVwVFDmadxRyVf+DrxSiI+DrTE8oIr1owhRu57LjIpPTYkply2j4F3ZPlu57nQPlbdTB3uPGC3q6vzU3kC5DOQIJGHBra7rUNGkOX2GJP5uCv4iEXKVDahY6k8Xpi2CmBm0NgWD+ViPJ4K4sXWA5f79p4jmuTSvYxswo6b+E6gn3+yswD5NDHbk59mwdTVGjaAupnyX8VvROP71n6IEJtC9ehjoSOAbevAw6IotpZ1ZjZOOmaCusXZQEVVtzpGcW1Y3mJVAMk9xLixE8lg1+dSOe9M+mM+i/EBgNoY69bus70nIZ+sib2n/d40bNEZuVp7GsaJORBG7GjY7Lo3WUeGZBAHMmVWIIg+2zET0kAMUm1ECqbiWoEr4bipjeyffG2zWl1YLDiKeZ+PqJu4hboemz61zYiyMcf1lm3jGEKCGWdkde0TQr6CwPQzBnx7J3gHsSmdWtzN0W/b2oFqHDMGllE8fb6n6pgpxJl5AXWNs84EkFQQqzYfmCt5z9TMSTwh4Dsz+5yaCpzCwM3Zx/PqaWBHUEvM4loN/HNqv07h1E5Ew4oHw0a0g1PXtY/CNrSUGbU56JL6NDhJfWJMFEOPCFnXwb/ZdQ8h3I0rzw0vJxOrW+WzVJpOF1S9RhH//F0BHlzmIRsbKYxpKp1JINyzjvJXUqeZw0tF4ehOZuoZs0HxyRsOMbq2uAkrfof4Rr251RBgPT2Vz97LELV3o+4gbKgUrkbYN+oe4rLA9RPZvdpK3ctnO8GT1SqMcjKNCvP9nquvygqJ53BXAR8+UOeP78CIWsfbL/WDLWQ1aw+BYDMMXM5xbNUv+0mMc////74R+H9Rfz98x/fofwORA8HFYWACxgAAAABJRU5ErkJggg==' })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { style: { float: 'right', margin: '60px 0 0 36px' } },
	                  _react2.default.createElement(
	                    'div',
	                    { style: { color: '#fff', fontSize: '14px' } },
	                    _react2.default.createElement(
	                      'span',
	                      null,
	                      '\u5FAE\u535A'
	                    ),
	                    _react2.default.createElement(
	                      'span',
	                      { style: { color: '#fc5146' } },
	                      ' + \u5173\u6CE8'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { style: { marginTop: 10, overflow: 'hidden', color: '#fff' } },
	                    _react2.default.createElement('img', { style: { display: 'block' }, src: 'data:image/png;base64,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' })
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Footer;
	}(_react2.default.Component);
	
	exports.default = Footer;
	
	module.exports = exports['default'];

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ApiCaller = __webpack_require__(17);
	
	var _ApiCaller2 = _interopRequireDefault(_ApiCaller);
	
	var _Api = __webpack_require__(16);
	
	var _Api2 = _interopRequireDefault(_Api);
	
	var _reactRedux = __webpack_require__(18);
	
	var _actions = __webpack_require__(24);
	
	var Actions = _interopRequireWildcard(_actions);
	
	var _redux = __webpack_require__(11);
	
	var _Runtime = __webpack_require__(27);
	
	var _Runtime2 = _interopRequireDefault(_Runtime);
	
	var _Cookie = __webpack_require__(60);
	
	var _Cookie2 = _interopRequireDefault(_Cookie);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var domain = _Runtime2.default.getDomain();
	var cookieOptions = {
	  path: '/',
	  domain: _Runtime2.default.getDomain()
	};
	
	var UnLogined = function (_React$Component) {
	  _inherits(UnLogined, _React$Component);
	
	  function UnLogined() {
	    _classCallCheck(this, UnLogined);
	
	    return _possibleConstructorReturn(this, (UnLogined.__proto__ || Object.getPrototypeOf(UnLogined)).apply(this, arguments));
	  }
	
	  _createClass(UnLogined, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'li',
	        { className: 'logined-li' },
	        _react2.default.createElement(
	          'span',
	          { style: { margin: '0 10px 0 50px' } },
	          _react2.default.createElement(
	            'a',
	            { href: '//user.' + domain + '/login.html?url=' + location.href },
	            '\u767B\u5F55'
	          )
	        ),
	        _react2.default.createElement(
	          'i',
	          null,
	          '|'
	        ),
	        _react2.default.createElement(
	          'span',
	          { style: { margin: '0 10px' } },
	          _react2.default.createElement(
	            'a',
	            { href: '//user.' + domain + '/reg.html' },
	            '\u6CE8\u518C'
	          )
	        )
	      );
	    }
	  }]);
	
	  return UnLogined;
	}(_react2.default.Component);
	
	var Logined = function (_React$Component2) {
	  _inherits(Logined, _React$Component2);
	
	  function Logined() {
	    _classCallCheck(this, Logined);
	
	    return _possibleConstructorReturn(this, (Logined.__proto__ || Object.getPrototypeOf(Logined)).apply(this, arguments));
	  }
	
	  _createClass(Logined, [{
	    key: 'handleLogout',
	    value: function handleLogout() {
	      this.props.handleLogout();
	    }
	  }, {
	    key: 'formatPhone',
	    value: function formatPhone(phone) {
	      phone = phone.toString();
	      if (phone.length != 11) {
	        return phone;
	      }
	      phone = phone.substr(0, 3) + '****' + phone.substr(7);
	      return phone;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var cookieInfo = this.props.user.get('cookieInfo');
	      var centerLink = '//user.' + domain + '/center/';
	      var helpLink = '//www.' + domain + '/help/';
	      return _react2.default.createElement(
	        'li',
	        { className: 'logined-li', style: { minWidth: 120 } },
	        _react2.default.createElement(
	          'span',
	          { style: { color: '#fff', marginRight: 30 } },
	          '|'
	        ),
	        _react2.default.createElement(
	          'a',
	          { style: { marginRight: 20 }, href: '//user.' + domain + '/center' },
	          this.props.data.nickName || this.formatPhone(this.props.data.phone)
	        ),
	        _react2.default.createElement(
	          'a',
	          { href: 'javascript:void(0)', onClick: this.handleLogout.bind(this), style: { fontSize: '14px' } },
	          '\u9000\u51FA'
	        )
	      );
	    }
	  }]);
	
	  return Logined;
	}(_react2.default.Component);
	
	var Navigator = function (_React$Component3) {
	  _inherits(Navigator, _React$Component3);
	
	  function Navigator(props) {
	    _classCallCheck(this, Navigator);
	
	    var _this3 = _possibleConstructorReturn(this, (Navigator.__proto__ || Object.getPrototypeOf(Navigator)).call(this, props));
	
	    _this3.state = {
	      data: {},
	      logined: false
	    };
	    return _this3;
	  }
	
	  _createClass(Navigator, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var nickName = _Cookie2.default.get('nickName', cookieOptions);
	      if (nickName) {
	        var state = this.state;
	        state.data.nickName = decodeURIComponent(nickName);
	        state.data.phone = _Cookie2.default.get('phone', cookieOptions) || '';
	        state.logined = true;
	        this.setState(state);
	      }
	      this.fetch();
	    }
	  }, {
	    key: 'fetch',
	    value: function fetch() {
	      var _this4 = this;
	
	      _ApiCaller2.default.call(_Api2.default.user.getInfo, {
	        uid: _Cookie2.default.get('uid', cookieOptions)
	      }, function (res) {
	        var state = _this4.state;
	        if (res.code == 0) {
	          state.data = res.data;
	          state.logined = true;
	        } else if (res.code == -2) {
	          state.logined = false;
	        }
	        _this4.setState(state);
	      });
	    }
	  }, {
	    key: 'handleLogout',
	    value: function handleLogout() {
	      _Cookie2.default.remove('uid', cookieOptions);
	      _Cookie2.default.remove('sid', cookieOptions);
	      _Cookie2.default.remove('userType', cookieOptions);
	      this.props.actions.syncCookieInfo();
	      this.fetch();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'navigator' },
	        _react2.default.createElement(
	          'div',
	          { className: 'main-page' },
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement('img', { style: { float: 'left', height: 60 }, src: 'data:image/png;base64,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' })
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'ul',
	              { className: 'top-list' },
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  _react2.default.createElement(
	                    'a',
	                    { href: '//www.' + domain },
	                    '\u9996\u9875'
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  _react2.default.createElement(
	                    'a',
	                    { href: '//pb.' + domain + '/real/trade' },
	                    'A\u80A1\u7B56\u7565'
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  _react2.default.createElement(
	                    'a',
	                    { href: '//pb.' + domain + '/sim' },
	                    '\u7092\u80A1\u5927\u8D5B'
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  _react2.default.createElement(
	                    'a',
	                    { href: '//pb.' + domain + '/sim/subscribe' },
	                    '\u9AD8\u624B\u8DDF\u8E2A'
	                  )
	                )
	              ),
	              this.state.logined ? _react2.default.createElement(Logined, _extends({}, this.props, { data: this.state.data, handleLogout: this.handleLogout.bind(this) })) : _react2.default.createElement(UnLogined, this.props)
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Navigator;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    global: state.global,
	    user: state.user
	  };
	}, function (dispath) {
	  return {
	    actions: (0, _redux.bindActionCreators)(Actions, dispath)
	  };
	})(Navigator);
	
	module.exports = exports['default'];

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(18);
	
	var _actions = __webpack_require__(24);
	
	var Actions = _interopRequireWildcard(_actions);
	
	var _redux = __webpack_require__(11);
	
	var _reactRouter = __webpack_require__(39);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var UserHeadNick = function (_Component) {
	  _inherits(UserHeadNick, _Component);
	
	  function UserHeadNick() {
	    _classCallCheck(this, UserHeadNick);
	
	    return _possibleConstructorReturn(this, (UserHeadNick.__proto__ || Object.getPrototypeOf(UserHeadNick)).apply(this, arguments));
	  }
	
	  _createClass(UserHeadNick, [{
	    key: 'render',
	    value: function render() {
	      var headImgStyle = {
	        backgroundImage: 'url(' + this.props.userHeadImage + ')'
	      };
	      var authFlag = this.props.user.get('baseInfo').get('authStatus') == 1;
	      return _react2.default.createElement(
	        'div',
	        { className: 'head_nick' },
	        _react2.default.createElement('div', { className: 'headimg', style: this.props.userHeadImage ? headImgStyle : {}, onClick: this.props.openHeadPicDialog }),
	        _react2.default.createElement(
	          'div',
	          { className: 'nickname' },
	          this.props.userNickName || '未设置昵称',
	          ' ',
	          _react2.default.createElement(
	            'a',
	            { onClick: this.props.openNickNameDialog },
	            _react2.default.createElement('i', { className: 'iconfont icon-bianji', style: { color: "#666" } })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'info-icon hide' },
	          _react2.default.createElement(
	            'span',
	            { style: { background: authFlag ? '#fc7852' : '#999' } },
	            _react2.default.createElement('i', { className: 'iconfont icon-geren' })
	          ),
	          _react2.default.createElement(
	            'span',
	            { style: { background: '#54b5fc' } },
	            _react2.default.createElement('i', { className: 'iconfont icon-shouji' })
	          ),
	          _react2.default.createElement(
	            'span',
	            { style: { background: authFlag ? '#908af7' : '#999' } },
	            _react2.default.createElement('i', { className: 'iconfont icon-bankcard' })
	          )
	        )
	      );
	    }
	  }]);
	
	  return UserHeadNick;
	}(_react.Component);
	
	var SideMenuItem = function (_Component2) {
	  _inherits(SideMenuItem, _Component2);
	
	  function SideMenuItem() {
	    _classCallCheck(this, SideMenuItem);
	
	    return _possibleConstructorReturn(this, (SideMenuItem.__proto__ || Object.getPrototypeOf(SideMenuItem)).apply(this, arguments));
	  }
	
	  _createClass(SideMenuItem, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'li',
	        { style: this.props.style },
	        _react2.default.createElement('i', { className: this.props.hot ? 'ui-icon-hot hot-flag' : 'hide' }),
	        this.props.index ? _react2.default.createElement(
	          _reactRouter.IndexLink,
	          { activeClassName: 'actived', to: this.props.to },
	          this.props.text
	        ) : _react2.default.createElement(
	          _reactRouter.Link,
	          { activeClassName: 'actived', to: this.props.to },
	          this.props.text
	        )
	      );
	    }
	  }]);
	
	  return SideMenuItem;
	}(_react.Component);
	
	var SideMenuGroup = function (_Component3) {
	  _inherits(SideMenuGroup, _Component3);
	
	  function SideMenuGroup() {
	    _classCallCheck(this, SideMenuGroup);
	
	    return _possibleConstructorReturn(this, (SideMenuGroup.__proto__ || Object.getPrototypeOf(SideMenuGroup)).apply(this, arguments));
	  }
	
	  _createClass(SideMenuGroup, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'ul',
	        { className: 'menus' },
	        this.props.children
	      );
	    }
	  }]);
	
	  return SideMenuGroup;
	}(_react.Component);
	
	var SideMenu = function (_Component4) {
	  _inherits(SideMenu, _Component4);
	
	  function SideMenu() {
	    _classCallCheck(this, SideMenu);
	
	    return _possibleConstructorReturn(this, (SideMenu.__proto__ || Object.getPrototypeOf(SideMenu)).apply(this, arguments));
	  }
	
	  _createClass(SideMenu, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'side_menu' },
	        _react2.default.createElement(UserHeadNick, _extends({
	          userHeadImage: this.props.userHeadImage,
	          userNickName: this.props.userNickName,
	          openNickNameDialog: this.props.openNickNameDialog,
	          openHeadPicDialog: this.props.openHeadPicDialog
	        }, this.props)),
	        _react2.default.createElement(
	          SideMenuGroup,
	          null,
	          _react2.default.createElement(SideMenuItem, { text: '\u6211\u7684\u8D26\u6237', to: '/center', index: true, bordered: true }),
	          _react2.default.createElement(SideMenuItem, { text: '\u8D44\u4EA7\u660E\u7EC6', to: '/center/assets' }),
	          _react2.default.createElement(SideMenuItem, { text: '\u6211\u7684\u5361\u5238', to: '/center/redpacket' })
	        ),
	        _react2.default.createElement(
	          SideMenuGroup,
	          null,
	          _react2.default.createElement(SideMenuItem, { text: '\u6211\u7684\u63A8\u5E7F', to: '/center/spread' }),
	          _react2.default.createElement(SideMenuItem, { text: '\u76F8\u5173\u534F\u8BAE', to: '/center/protocol' }),
	          _react2.default.createElement(SideMenuItem, { text: '\u5BC6\u7801\u8BBE\u7F6E', to: '/center/accountsafety' }),
	          _react2.default.createElement(SideMenuItem, { text: '\u9690\u79C1\u8BBE\u7F6E', to: '/center/privacy' })
	        )
	      );
	    }
	  }]);
	
	  return SideMenu;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    user: state.user
	  };
	}, function (dispath) {
	  return {
	    actions: (0, _redux.bindActionCreators)(Actions, dispath)
	  };
	})(SideMenu);

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(18);
	
	var _actions = __webpack_require__(24);
	
	var Actions = _interopRequireWildcard(_actions);
	
	var _redux = __webpack_require__(11);
	
	var _Card = __webpack_require__(42);
	
	var _Card2 = _interopRequireDefault(_Card);
	
	var _ApiCaller = __webpack_require__(17);
	
	var _ApiCaller2 = _interopRequireDefault(_ApiCaller);
	
	var _Api = __webpack_require__(16);
	
	var _Api2 = _interopRequireDefault(_Api);
	
	var _Security = __webpack_require__(71);
	
	var _Security2 = _interopRequireDefault(_Security);
	
	var _antd = __webpack_require__(9);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FormItem = _antd.Form.Item;
	
	function validPwdByRegex(pwd) {
	  if (/^[0-9]{6}$/.test(pwd)) return true;else return false;
	}
	
	function validPwdCharAndNum(pwd) {
	  if (/[a-zA-Z]/.test(pwd) && /[0-9]/.test(pwd) && pwd.length > 5 && pwd.length < 17) return true;else return false;
	}
	
	// 修改登录密码
	
	var EditLoginPassword = function (_Component) {
	  _inherits(EditLoginPassword, _Component);
	
	  function EditLoginPassword(props) {
	    _classCallCheck(this, EditLoginPassword);
	
	    var _this = _possibleConstructorReturn(this, (EditLoginPassword.__proto__ || Object.getPrototypeOf(EditLoginPassword)).call(this, props));
	
	    _this.state = {
	      sending: false,
	      waitting: false,
	      curWaitTime: maxWaitTime,
	      waitingText: defSendText
	    };
	    return _this;
	  }
	
	  _createClass(EditLoginPassword, [{
	    key: 'handleSubmit',
	    value: function handleSubmit() {
	      var _this2 = this;
	
	      this.props.form.validateFields(function (error, value) {
	        if (!error) {
	          if (!_this2.props.form.getFieldsValue().imgCode) {
	            _antd.message.error('图形验证码不能为空');
	            return;
	          }
	          _this2.props.onOk(_this2.props.form.getFieldsValue(), _this2.props.form.resetFields);
	        }
	      });
	    }
	  }, {
	    key: 'checkPass',
	    value: function checkPass(rule, value, callback) {
	      if (validPwdCharAndNum(value)) callback();else callback([new Error('密码由6-16位数字和字母组成')]);
	    }
	  }, {
	    key: 'checkNewPass',
	    value: function checkNewPass(rule, value, callback) {
	      var _props$form = this.props.form,
	          getFieldValue = _props$form.getFieldValue,
	          setFields = _props$form.setFields;
	
	      if (validPwdCharAndNum(value)) {
	        var reNewPass = getFieldValue('reNewPass');
	        if (value !== reNewPass) setFields({
	          'reNewPass': {
	            errors: [new Error('两次输入的密码不一致')],
	            value: reNewPass
	          }
	        });
	        callback();
	      } else callback([new Error('密码由6-16位数字和字母组成')]);
	    }
	  }, {
	    key: 'checkReNewPass',
	    value: function checkReNewPass(rule, value, callback) {
	      var getFieldValue = this.props.form.getFieldValue;
	
	      if (value && value !== getFieldValue('newPass')) callback([new Error('两次输入的密码不一致')]);else callback();
	    }
	  }, {
	    key: 'timerWaitTick',
	    value: function timerWaitTick() {
	      var _this3 = this;
	
	      var curWaitTime = this.state.curWaitTime;
	      if (curWaitTime == 0) {
	        this.setState({
	          waitting: false,
	          waitingText: defSendText,
	          curWaitTime: maxWaitTime
	        });
	      } else {
	        this.setState({
	          curWaitTime: curWaitTime - 1,
	          waitingText: curWaitTime + ' 秒后重置'
	        });
	
	        // 递归计时
	        setTimeout(function () {
	          _this3.timerWaitTick();
	        }, 1000);
	      }
	    }
	
	    // 发送短信验证码
	
	  }, {
	    key: 'handleSend',
	    value: function handleSend() {
	      var _this4 = this;
	
	      if (this.state.waitting) return;
	      var verifyCode = this.props.form.getFieldValue('imgCode');
	      if (!verifyCode || verifyCode == '') {
	        _antd.message.error('请输入图形验证码');
	        return;
	      }
	      this.setState({
	        sending: true,
	        waitingText: '发送中'
	      });
	      _ApiCaller2.default.call(_Api2.default.system.sendCode, {
	        //phone: this.props.phone,
	        phone: this.props.phone,
	        type: 2, // 找回交易密码
	        token: this.props.token,
	        code: verifyCode
	      }, function (res) {
	        var state = _this4.state;
	        state.sending = false;
	        if (res.code == 0) {
	          state.waitting = true;
	          _this4.timerWaitTick();
	          _antd.message.success('短信验证码已发送，请注意查收！');
	        } else {
	          state.waitingText = defSendText;
	          _antd.message.error(res.msg);
	        }
	        _this4.setState(state);
	        _this4.imgCodeHandle();
	      });
	    }
	  }, {
	    key: 'imgCodeHandle',
	    value: function imgCodeHandle() {
	      this.props.imgCodeChange();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var formItemLayout = {
	        labelCol: { span: 6 },
	        wrapperCol: { span: 14 }
	      };
	      var getFieldProps = this.props.form.getFieldProps;
	
	      var imgCodeProps = getFieldProps('imgCode', {
	        rules: [{ required: false, message: '请输入图形验证码' }]
	      });
	      var verifyCodeProps = getFieldProps('verifyCode', {
	        rules: [{ required: true, message: '请输入您收到的短信验证码' }]
	      });
	      var oldPassProps = getFieldProps('oldPass', {
	        // rules: [
	        //   { required: true, whitespace: true, message: '请填写原登录密码' },
	        //   { validator: this.checkPass.bind(this) }
	        // ]
	      });
	      var newPassProps = getFieldProps('newPass', {
	        rules: [{ required: true, whitespace: true, message: '请填写新密码' }, { validator: this.checkNewPass.bind(this) }]
	      });
	      var reNewPassProps = getFieldProps('reNewPass', {
	        rules: [{ required: true, whitespace: true, message: '请再次输入新密码' }, { validator: this.checkReNewPass.bind(this) }]
	      });
	      var src = this.props.token ? _Api2.default.user.getImgCode.url + '?token=' + this.props.token + '&t=' + this.props.time + '&width=80&height=30' : '';
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _antd.Modal,
	          { title: '\u4FEE\u6539\u767B\u5F55\u5BC6\u7801',
	            visible: this.props.visible,
	            onOk: this.handleSubmit.bind(this),
	            confirmLoading: this.props.loading,
	            onCancel: this.props.onCancel },
	          _react2.default.createElement(
	            _antd.Form,
	            { horizontal: true, form: this.props.form },
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                label: '\u56FE\u5F62\u9A8C\u8BC1\u7801\uFF1A' }),
	              _react2.default.createElement(
	                _antd.Col,
	                { span: '16' },
	                _react2.default.createElement(_antd.Input, _extends({ hasFeedback: true, placeholder: '\u8BF7\u8F93\u5165\u56FE\u5F62\u9A8C\u8BC1\u7801' }, imgCodeProps))
	              ),
	              _react2.default.createElement(
	                _antd.Col,
	                { span: '4' },
	                _react2.default.createElement('img', { onClick: this.imgCodeHandle.bind(this), style: { marginLeft: 10 }, src: src })
	              )
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                label: '\u624B\u673A\u53F7\u7801\uFF1A' }),
	              _react2.default.createElement(
	                _antd.Col,
	                { span: '16' },
	                _react2.default.createElement(
	                  'p',
	                  { className: 'ant-form-text', id: 'phone', name: 'phone' },
	                  this.props.phone
	                )
	              ),
	              _react2.default.createElement(
	                _antd.Col,
	                { span: '4' },
	                _react2.default.createElement(
	                  _antd.Button,
	                  { loading: this.state.sending, disabled: this.state.waitting, onClick: this.handleSend.bind(this) },
	                  this.state.waitingText
	                )
	              )
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                hasFeedback: true,
	                label: '\u77ED\u4FE1\u9A8C\u8BC1\u7801\uFF1A' }),
	              _react2.default.createElement(_antd.Input, _extends({ hasFeedback: true, placeholder: '\u8BF7\u8F93\u5165\u60A8\u6536\u5230\u7684\u77ED\u4FE1\u9A8C\u8BC1\u7801' }, verifyCodeProps))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                label: '\u539F\u767B\u5F55\u5BC6\u7801\uFF1A',
	                hasFeedback: true,
	                className: 'hide' }),
	              _react2.default.createElement(_antd.Input, _extends({}, oldPassProps, { type: 'password', placeholder: '\u8BF7\u8F93\u5165\u60A8\u5F53\u524D\u7684\u767B\u5F55\u5BC6\u7801' }))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                hasFeedback: true,
	                label: '\u65B0\u767B\u5F55\u5BC6\u7801\uFF1A' }),
	              _react2.default.createElement(_antd.Input, _extends({ type: 'password', placeholder: '\u767B\u5F55\u5BC6\u7801\u7531\u6570\u5B57\u4E0E\u5B57\u6BCD\u7EC4\u6210 6-16\u4F4D' }, newPassProps))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                hasFeedback: true,
	                label: '\u786E\u8BA4\u767B\u5F55\u5BC6\u7801\uFF1A' }),
	              _react2.default.createElement(_antd.Input, _extends({ type: 'password', placeholder: '\u8BF7\u518D\u6B21\u8F93\u5165\u65B0\u5BC6\u7801' }, reNewPassProps))
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return EditLoginPassword;
	}(_react.Component);
	
	EditLoginPassword = _antd.Form.create()(EditLoginPassword);
	
	// 修改交易密码
	
	var EditTradePassword = function (_Component2) {
	  _inherits(EditTradePassword, _Component2);
	
	  function EditTradePassword() {
	    _classCallCheck(this, EditTradePassword);
	
	    return _possibleConstructorReturn(this, (EditTradePassword.__proto__ || Object.getPrototypeOf(EditTradePassword)).apply(this, arguments));
	  }
	
	  _createClass(EditTradePassword, [{
	    key: 'handleSubmit',
	    value: function handleSubmit() {
	      var _this6 = this;
	
	      this.props.form.validateFields(function (error, value) {
	        if (!error) _this6.props.onOk(_this6.props.form.getFieldsValue(), _this6.props.form.resetFields);
	      });
	    }
	  }, {
	    key: 'checkPass',
	    value: function checkPass(rule, value, callback) {
	      if (validPwdByRegex(value)) callback();else callback([new Error('交易密码由6位数字组成')]);
	    }
	  }, {
	    key: 'checkNewPass',
	    value: function checkNewPass(rule, value, callback) {
	      var _props$form2 = this.props.form,
	          getFieldValue = _props$form2.getFieldValue,
	          setFields = _props$form2.setFields;
	
	      if (validPwdByRegex(value)) {
	        var reNewPass = getFieldValue('reNewPass');
	        if (value !== reNewPass) setFields({
	          'reNewPass': {
	            errors: [new Error('两次输入的密码不一致')],
	            value: reNewPass
	          }
	        });
	        callback();
	      } else callback([new Error('交易密码由6位数字组成')]);
	    }
	  }, {
	    key: 'checkReNewPass',
	    value: function checkReNewPass(rule, value, callback) {
	      var getFieldValue = this.props.form.getFieldValue;
	
	      if (value && value !== getFieldValue('newPass')) callback([new Error('两次输入的密码不一致')]);else callback();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var formItemLayout = {
	        labelCol: { span: 6 },
	        wrapperCol: { span: 14 }
	      };
	      var getFieldProps = this.props.form.getFieldProps;
	
	      var oldPassProps = getFieldProps('oldPass', {
	        // rules: [
	        //   { required: true, whitespace: true, message: '请输入您当前的登录密码' },
	        //   { validator: this.checkPass.bind(this) },
	        // ],
	      });
	      var newPassProps = getFieldProps('newPass', {
	        rules: [{ required: true, whitespace: true, message: '请输入新密码' }, { validator: this.checkNewPass.bind(this) }]
	      });
	      var reNewPassProps = getFieldProps('reNewPass', {
	        rules: [{ required: true, whitespace: true, message: '请再次输入新密码' }, { validator: this.checkReNewPass.bind(this) }]
	      });
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _antd.Modal,
	          { title: '\u4FEE\u6539\u4EA4\u6613\u5BC6\u7801',
	            visible: this.props.visible,
	            onOk: this.handleSubmit.bind(this),
	            confirmLoading: this.props.loading,
	            onCancel: this.props.onCancel },
	          _react2.default.createElement(
	            _antd.Form,
	            { horizontal: true, form: this.props.form },
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                label: '\u539F\u4EA4\u6613\u5BC6\u7801\uFF1A',
	                className: 'hide',
	                hasFeedback: true }),
	              _react2.default.createElement(_antd.Input, _extends({}, oldPassProps, { type: 'password', placeholder: '\u4EA4\u6613\u5BC6\u7801\u75316\u4F4D\u6570\u5B57\u7EC4\u6210' }))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                hasFeedback: true,
	                label: '\u65B0\u4EA4\u6613\u5BC6\u7801\uFF1A' }),
	              _react2.default.createElement(_antd.Input, _extends({ type: 'password', placeholder: '\u4EA4\u6613\u5BC6\u7801\u75316\u4F4D\u6570\u5B57\u7EC4\u6210' }, newPassProps))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                hasFeedback: true,
	                label: '\u786E\u8BA4\u4EA4\u6613\u5BC6\u7801\uFF1A' }),
	              _react2.default.createElement(_antd.Input, _extends({ type: 'password', placeholder: '\u8BF7\u518D\u6B21\u8F93\u5165\u65B0\u4EA4\u6613\u5BC6\u7801' }, reNewPassProps))
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return EditTradePassword;
	}(_react.Component);
	
	EditTradePassword = _antd.Form.create()(EditTradePassword);
	
	var maxWaitTime = 60; // 短信等待时间
	var defSendText = '发送验证码';
	
	// 重置交易密码
	
	var ForgotTradePassword = function (_Component3) {
	  _inherits(ForgotTradePassword, _Component3);
	
	  function ForgotTradePassword(props) {
	    _classCallCheck(this, ForgotTradePassword);
	
	    var _this7 = _possibleConstructorReturn(this, (ForgotTradePassword.__proto__ || Object.getPrototypeOf(ForgotTradePassword)).call(this, props));
	
	    _this7.state = {
	      sending: false,
	      waitting: false,
	      curWaitTime: maxWaitTime,
	      waitingText: defSendText
	    };
	    return _this7;
	  }
	
	  _createClass(ForgotTradePassword, [{
	    key: 'handleSubmit',
	    value: function handleSubmit() {
	      var _this8 = this;
	
	      this.props.form.validateFields(function (error, value) {
	        if (!error) {
	          if (!_this8.props.form.getFieldsValue().imgCode) {
	            _antd.message.error('图形验证码不能为空');
	            return;
	          }
	          _this8.props.onOk(_this8.props.form.getFieldsValue(), _this8.props.form.resetFields);
	        }
	      });
	    }
	  }, {
	    key: 'timerWaitTick',
	    value: function timerWaitTick() {
	      var _this9 = this;
	
	      var curWaitTime = this.state.curWaitTime;
	      if (curWaitTime == 0) {
	        this.setState({
	          waitting: false,
	          waitingText: defSendText,
	          curWaitTime: maxWaitTime
	        });
	      } else {
	        this.setState({
	          curWaitTime: curWaitTime - 1,
	          waitingText: curWaitTime + ' 秒后重置'
	        });
	
	        // 递归计时
	        setTimeout(function () {
	          _this9.timerWaitTick();
	        }, 1000);
	      }
	    }
	
	    // 发送短信验证码
	
	  }, {
	    key: 'handleSend',
	    value: function handleSend() {
	      var _this10 = this;
	
	      if (this.state.waitting) return;
	      var verifyCode = this.props.form.getFieldValue('imgCode');
	      if (!verifyCode || verifyCode == '') {
	        _antd.message.error('请输入图形验证码');
	        return;
	      }
	      this.setState({
	        sending: true,
	        waitingText: '发送中'
	      });
	      _ApiCaller2.default.call(_Api2.default.system.sendCode, {
	        //phone: this.props.phone,
	        phone: this.props.phone,
	        type: 3, // 找回交易密码
	        token: this.props.token,
	        code: verifyCode
	      }, function (res) {
	        var state = _this10.state;
	        state.sending = false;
	        if (res.code == 0) {
	          state.waitting = true;
	          _this10.timerWaitTick();
	          _antd.message.success('短信验证码已发送，请注意查收！');
	        } else {
	          state.waitingText = defSendText;
	          _antd.message.error(res.msg);
	        }
	        _this10.setState(state);
	        _this10.imgCodeHandle();
	      });
	    }
	  }, {
	    key: 'checkNewPass',
	    value: function checkNewPass(rule, value, callback) {
	      var _props$form3 = this.props.form,
	          getFieldValue = _props$form3.getFieldValue,
	          setFields = _props$form3.setFields;
	
	      if (validPwdByRegex(value)) {
	        var reNewPass = getFieldValue('reNewPass');
	        if (value !== reNewPass) setFields({
	          'reNewPass': {
	            errors: [new Error('两次输入的密码不一致')],
	            value: reNewPass
	          }
	        });
	        callback();
	      } else callback([new Error('交易密码由6位数字组成')]);
	    }
	  }, {
	    key: 'checkReNewPass',
	    value: function checkReNewPass(rule, value, callback) {
	      var getFieldValue = this.props.form.getFieldValue;
	
	      if (value && value !== getFieldValue('newPass')) callback([new Error('两次输入的密码不一致')]);else callback();
	    }
	  }, {
	    key: 'imgCodeHandle',
	    value: function imgCodeHandle() {
	      this.props.imgCodeChange();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var getFieldProps = this.props.form.getFieldProps;
	
	      var formItemLayout = {
	        labelCol: { span: 6 },
	        wrapperCol: { span: 14 }
	      };
	      var imgCodeProps = getFieldProps('imgCode', {
	        rules: [{ required: false, message: '请输入图形验证码' }]
	      });
	      var verifyCodeProps = getFieldProps('verifyCode', {
	        rules: [{ required: true, message: '请输入您收到的短信验证码' }]
	      });
	      var newPassProps = getFieldProps('newPass', {
	        rules: [{ required: true, whitespace: true, message: '请输入新密码' }, { validator: this.checkNewPass.bind(this) }]
	      });
	      var reNewPassProps = getFieldProps('reNewPass', {
	        rules: [{ required: true, whitespace: true, message: '请再次输入新密码' }, { validator: this.checkReNewPass.bind(this) }]
	      });
	      var title = (this.props.tradePwdSetted ? '找回' : '设置') + '交易密码';
	      var src = this.props.token ? _Api2.default.user.getImgCode.url + '?token=' + this.props.token + '&t=' + this.props.time + '&width=80&height=30' : '';
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _antd.Modal,
	          { title: title,
	            visible: this.props.visible,
	            onOk: this.handleSubmit.bind(this),
	            confirmLoading: this.props.loading,
	            onCancel: this.props.onCancel },
	          _react2.default.createElement(
	            _antd.Form,
	            { horizontal: true, form: this.props.form },
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                label: '\u56FE\u5F62\u9A8C\u8BC1\u7801\uFF1A' }),
	              _react2.default.createElement(
	                _antd.Col,
	                { span: '16' },
	                _react2.default.createElement(_antd.Input, _extends({ hasFeedback: true, placeholder: '\u8BF7\u8F93\u5165\u56FE\u5F62\u9A8C\u8BC1\u7801' }, imgCodeProps))
	              ),
	              _react2.default.createElement(
	                _antd.Col,
	                { span: '4' },
	                _react2.default.createElement('img', { onClick: this.imgCodeHandle.bind(this), style: { marginLeft: 10 }, src: src })
	              )
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                label: '\u624B\u673A\u53F7\u7801\uFF1A' }),
	              _react2.default.createElement(
	                _antd.Col,
	                { span: '16' },
	                _react2.default.createElement(
	                  'p',
	                  { className: 'ant-form-text', id: 'phone', name: 'phone' },
	                  this.props.phone
	                )
	              ),
	              _react2.default.createElement(
	                _antd.Col,
	                { span: '4' },
	                _react2.default.createElement(
	                  _antd.Button,
	                  { loading: this.state.sending, disabled: this.state.waitting, onClick: this.handleSend.bind(this) },
	                  this.state.waitingText
	                )
	              )
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                hasFeedback: true,
	                label: '\u77ED\u4FE1\u9A8C\u8BC1\u7801\uFF1A' }),
	              _react2.default.createElement(_antd.Input, _extends({ hasFeedback: true, placeholder: '\u8BF7\u8F93\u5165\u60A8\u6536\u5230\u7684\u77ED\u4FE1\u9A8C\u8BC1\u7801' }, verifyCodeProps))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                hasFeedback: true,
	                label: '\u65B0\u4EA4\u6613\u5BC6\u7801\uFF1A' }),
	              _react2.default.createElement(_antd.Input, _extends({ type: 'password', placeholder: '\u4EA4\u6613\u5BC6\u7801\u75316\u4F4D\u6570\u5B57\u7EC4\u6210' }, newPassProps))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                hasFeedback: true,
	                label: '\u786E\u8BA4\u4EA4\u6613\u5BC6\u7801\uFF1A' }),
	              _react2.default.createElement(_antd.Input, _extends({ type: 'password', placeholder: '\u8BF7\u518D\u6B21\u8F93\u5165\u65B0\u4EA4\u6613\u5BC6\u7801' }, reNewPassProps))
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return ForgotTradePassword;
	}(_react.Component);
	
	ForgotTradePassword = _antd.Form.create()(ForgotTradePassword);
	
	var AccountSafety = function (_Component4) {
	  _inherits(AccountSafety, _Component4);
	
	  function AccountSafety(props) {
	    _classCallCheck(this, AccountSafety);
	
	    var _this11 = _possibleConstructorReturn(this, (AccountSafety.__proto__ || Object.getPrototypeOf(AccountSafety)).call(this, props));
	
	    _this11.state = {
	      editLoginPwd: {
	        visible: false,
	        loading: false
	      },
	      editTradePwd: {
	        visible: false,
	        loading: false
	      },
	      forgotTradePwd: {
	        visible: false,
	        loading: false
	      }
	    };
	    return _this11;
	  }
	
	  // 修改登录密码
	
	
	  _createClass(AccountSafety, [{
	    key: 'handleEditLoginPwd',
	    value: function handleEditLoginPwd(fieldsVal, reset) {
	      var _this12 = this;
	
	      this.setState({
	        editLoginPwd: {
	          loading: true,
	          visible: true
	        }
	      });
	      _ApiCaller2.default.call(_Api2.default.user.setLoginPwd, {
	        //oldPasswd: Security.encryptMd5(fieldsVal.oldPass),
	        newPasswd: _Security2.default.encryptMd5(fieldsVal.newPass),
	        newPasswdRepeat: _Security2.default.encryptMd5(fieldsVal.reNewPass),
	        type: 1,
	        code: fieldsVal.verifyCode,
	        phone: this.props.user.get('baseInfo').get('phone')
	      }, function (res) {
	        var editLoginPwd = _this12.state.editLoginPwd;
	        editLoginPwd.loading = false;
	        if (res.code == 0) {
	          editLoginPwd.visible = false;
	          _antd.notification.success({
	            message: '登录密码修改成功',
	            description: '您的登录密码已修改，下次登录请使用新的密码'
	          });
	          reset();
	        } else {
	          _antd.message.error(res.msg);
	          _this12.imgCodeHandleLogin();
	        }
	        _this12.setState({
	          editLoginPwd: editLoginPwd
	        });
	      });
	    }
	
	    // 修改交易密码
	
	  }, {
	    key: 'handleEditTradePwd',
	    value: function handleEditTradePwd(fieldsVal, reset) {
	      var _this13 = this;
	
	      this.setState({
	        editTradePwd: {
	          loading: true,
	          visible: true
	        }
	      });
	      _ApiCaller2.default.call(_Api2.default.user.setTransPwd, {
	        //oldPasswd: Security.encryptMd5(fieldsVal.oldPass),
	        newPasswd: _Security2.default.encryptMd5(fieldsVal.newPass),
	        newPasswdRepeat: _Security2.default.encryptMd5(fieldsVal.reNewPass),
	        type: 2
	      }, function (res) {
	        var editTradePwd = _this13.state.editTradePwd;
	        editTradePwd.loading = false;
	        if (res.code == 0) {
	          editTradePwd.visible = false;
	          _antd.notification.success({
	            message: '交易密码修改成功',
	            description: '您的交易密码已修改，为了您的资金安全，请妥善保管'
	          });
	          reset();
	        } else {
	          _antd.message.error(res.msg);
	        }
	        _this13.setState({
	          editTradePwd: editTradePwd
	        });
	      });
	    }
	
	    // 忘记交易密码
	
	  }, {
	    key: 'handleForgotTradePwd',
	    value: function handleForgotTradePwd(fieldsVal, reset) {
	      var _this14 = this;
	
	      var tradePwdSetted = this.props.user.get('baseInfo').get('transPwd') ? true : false;
	      this.setState({
	        forgotTradePwd: {
	          loading: true,
	          visible: true
	        }
	      });
	      this.imgCodeHandle();
	      _ApiCaller2.default.call(_Api2.default.user.setTransPwd, {
	        //oldPasswd: '',
	        newPasswd: _Security2.default.encryptMd5(fieldsVal.newPass),
	        newPasswdRepeat: _Security2.default.encryptMd5(fieldsVal.reNewPass),
	        type: 2,
	        code: fieldsVal.verifyCode
	      }, function (res) {
	        var forgotTradePwd = _this14.state.forgotTradePwd;
	        forgotTradePwd.loading = false;
	        var setText = tradePwdSetted ? '设置' : '重置';
	        if (res.code == 0) {
	          forgotTradePwd.visible = false;
	          _antd.notification.success({
	            message: '交易密码' + setText + '成功',
	            description: '您的交易密码已' + setText + '，为了您的资金安全，请妥善保管'
	          });
	          reset();
	          if (!tradePwdSetted) _this14.props.actions.firstSetTradePwd();
	        } else {
	          _antd.message.error(res.msg);
	          _this14.imgCodeHandle();
	        }
	        _this14.setState({
	          forgotTradePwd: forgotTradePwd
	        });
	      });
	    }
	  }, {
	    key: 'imgCodeHandle',
	    value: function imgCodeHandle() {
	      var time = new Date().getTime();
	      var token = _Security2.default.encryptMd5(this.props.phone + '.' + time);
	      var state = this.state;
	      state.forgotTradePwd.token = token;
	      state.forgotTradePwd.time = time;
	      state.forgotTradePwd.visible = true;
	      this.setState(state);
	    }
	  }, {
	    key: 'imgCodeHandleLogin',
	    value: function imgCodeHandleLogin() {
	      var time = new Date().getTime();
	      var token = _Security2.default.encryptMd5(this.props.phone + '.' + time);
	      var state = this.state;
	      state.editLoginPwd.token = token;
	      state.editLoginPwd.time = time;
	      state.editLoginPwd.visible = true;
	      this.setState(state);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this15 = this;
	
	      var tradePwdSetted = this.props.user.get('baseInfo').get('isTransPwd') == 1 ? true : false;
	      return _react2.default.createElement(
	        'div',
	        { className: 'accountsafety' },
	        _react2.default.createElement(
	          _Card2.default,
	          { title: '\u5BC6\u7801\u8BBE\u7F6E', bodyHeight: '500' },
	          _react2.default.createElement(
	            _antd.QueueAnim,
	            { delay: 400 },
	            _react2.default.createElement(
	              'div',
	              { className: 'item', key: 'a' },
	              _react2.default.createElement(
	                'div',
	                { className: 'icon' },
	                _react2.default.createElement('i', { className: 'iconfont icon-denglumima', style: { fontSize: '24px' } })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'name' },
	                '\u767B\u5F55\u5BC6\u7801'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'status' },
	                '\u5DF2\u8BBE\u7F6E'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'tips' },
	                '\u767B\u5F55\u7F51\u7AD9\u65F6\u9700\u8981\u8F93\u5165\u7684\u5BC6\u7801'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'operation' },
	                _react2.default.createElement(
	                  'a',
	                  { onClick: function onClick() {
	                      _this15.imgCodeHandleLogin();
	                    } },
	                  '\u4FEE\u6539'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'item', key: 'b' },
	              _react2.default.createElement(
	                'div',
	                { className: 'icon' },
	                _react2.default.createElement('i', { className: 'iconfont icon-denglumima', style: { fontSize: '24px' } })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'name' },
	                '\u4EA4\u6613\u5BC6\u7801'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'status' },
	                tradePwdSetted ? '已设置' : '未设置'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'tips' },
	                '\u4E3A\u4E86\u60A8\u7684\u8D44\u91D1\u5B89\u5168\uFF0C\u8BF7\u59A5\u5584\u4FDD\u7BA1\u597D\u4EA4\u6613\u5BC6\u7801'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'operation' },
	                _react2.default.createElement(
	                  'a',
	                  { className: tradePwdSetted ? 'hide' : 'hide', onClick: function onClick() {
	                      return _this15.setState({
	                        editTradePwd: {
	                          visible: true
	                        }
	                      });
	                    } },
	                  '\u4FEE\u6539\xA0\xA0'
	                ),
	                _react2.default.createElement(
	                  'a',
	                  { onClick: this.imgCodeHandle.bind(this) },
	                  tradePwdSetted ? '忘记密码' : '设置'
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(EditLoginPassword, {
	          visible: this.state.editLoginPwd.visible,
	          loading: this.state.editLoginPwd.loading,
	          onOk: this.handleEditLoginPwd.bind(this),
	          onCancel: function onCancel() {
	            return _this15.setState({ editLoginPwd: { visible: false } });
	          },
	          imgCodeChange: this.imgCodeHandleLogin.bind(this),
	          token: this.state.editLoginPwd.token,
	          time: this.state.editLoginPwd.time,
	          phone: this.props.user.get('baseInfo').get('phone')
	        }),
	        _react2.default.createElement(EditTradePassword, {
	          visible: this.state.editTradePwd.visible,
	          loading: this.state.editTradePwd.loading,
	          onOk: this.handleEditTradePwd.bind(this),
	          onCancel: function onCancel() {
	            return _this15.setState({ editTradePwd: { visible: false } });
	          }
	        }),
	        _react2.default.createElement(ForgotTradePassword, {
	          phone: this.props.user.get('baseInfo').get('phone'),
	          visible: this.state.forgotTradePwd.visible,
	          loading: this.state.forgotTradePwd.loading,
	          onOk: this.handleForgotTradePwd.bind(this),
	          tradePwdSetted: tradePwdSetted,
	          imgCodeChange: this.imgCodeHandle.bind(this),
	          token: this.state.forgotTradePwd.token,
	          time: this.state.forgotTradePwd.time,
	          onCancel: function onCancel() {
	            return _this15.setState({ forgotTradePwd: { visible: false } });
	          }
	        })
	      );
	    }
	  }]);
	
	  return AccountSafety;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    user: state.user
	  };
	}, function (dispath) {
	  return {
	    actions: (0, _redux.bindActionCreators)(Actions, dispath)
	  };
	})(AccountSafety);
	
	module.exports = exports['default'];

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(18);
	
	var _actions = __webpack_require__(24);
	
	var Actions = _interopRequireWildcard(_actions);
	
	var _redux = __webpack_require__(11);
	
	var _reactImmutableRenderMixin = __webpack_require__(89);
	
	var _Cookie = __webpack_require__(60);
	
	var _Cookie2 = _interopRequireDefault(_Cookie);
	
	var _Runtime = __webpack_require__(27);
	
	var _Runtime2 = _interopRequireDefault(_Runtime);
	
	var _Easemob = __webpack_require__(389);
	
	var _Easemob2 = _interopRequireDefault(_Easemob);
	
	var _Navigator = __webpack_require__(399);
	
	var _Navigator2 = _interopRequireDefault(_Navigator);
	
	var _Footer = __webpack_require__(398);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _SideMenu = __webpack_require__(400);
	
	var _SideMenu2 = _interopRequireDefault(_SideMenu);
	
	var _NoCardBound = __webpack_require__(396);
	
	var _NoCardBound2 = _interopRequireDefault(_NoCardBound);
	
	var _CardBindDialog = __webpack_require__(393);
	
	var _CardBindDialog2 = _interopRequireDefault(_CardBindDialog);
	
	var _NickNameDialog = __webpack_require__(395);
	
	var _NickNameDialog2 = _interopRequireDefault(_NickNameDialog);
	
	var _HeadPicDialog = __webpack_require__(394);
	
	var _HeadPicDialog2 = _interopRequireDefault(_HeadPicDialog);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	    _this.shouldComponentUpdate = _reactImmutableRenderMixin.shouldComponentUpdate.bind(_this);
	    _this.state = {
	      showNickNameDialog: false,
	      showHeadPicDialog: false
	    };
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // 同步 cookie 信息
	      this.props.actions.syncCookieInfo();
	      // 加载用户信息
	      this.props.actions.loadUserInfo(this.setEasemob.bind(this));
	      // 加载用户银行卡信息
	      this.props.actions.loadUserBankCardList();
	    }
	  }, {
	    key: 'setEasemob',
	    value: function setEasemob(data) {
	      var _this2 = this;
	
	      var em = new _Easemob2.default({
	        user: data.uid,
	        listeners: {
	          onOpened: function onOpened() {
	            console.log('opened');
	          },
	          onClosed: function onClosed() {
	            console.log('closed');
	          },
	          onOnline: function onOnline() {
	            console.log('online');
	          },
	          onOffline: function onOffline() {
	            console.log('offline');
	          },
	          onTextMessage: function onTextMessage(message) {
	            console.log(message);
	            var msgType = message.ext.type + '';
	            var eventHandlers = _this2.props.im.get('events').get(msgType);
	            if (eventHandlers) {
	              eventHandlers(message);
	            }
	          }
	        }
	      });
	      em.login();
	    }
	
	    // 打开昵称设置对话框
	
	  }, {
	    key: 'openNickNameDialog',
	    value: function openNickNameDialog() {
	      this.setState({
	        showNickNameDialog: true
	      });
	    }
	  }, {
	    key: 'openHeadPicDialog',
	    value: function openHeadPicDialog() {
	      this.setState({
	        showHeadPicDialog: true
	      });
	    }
	
	    // 关闭绑卡对话框
	
	  }, {
	    key: 'closeBindCardDialog',
	    value: function closeBindCardDialog() {
	      this.props.actions.showCardBindDialog(false);
	    }
	
	    // 设置昵称成功之后会调用此方法关闭对话框
	
	  }, {
	    key: 'closeNickNameDialog',
	    value: function closeNickNameDialog(nickName) {
	      this.props.actions.setNickName(nickName);
	      this.setState({
	        showNickNameDialog: false
	      });
	    }
	
	    // 退出
	
	  }, {
	    key: 'handleLogout',
	    value: function handleLogout() {
	      var domain = _Runtime2.default.getDomain();
	      var cookieOptions = {
	        domain: domain,
	        path: '/'
	      };
	      _Cookie2.default.remove('uid', cookieOptions);
	      _Cookie2.default.remove('sid', cookieOptions);
	      //Cookie.remove('userType', cookieOptions)
	      this.props.actions.syncCookieInfo();
	      location.href = '//www.' + domain;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var baseInfo = this.props.user.get('baseInfo');
	      var userHeadImage = baseInfo.get('headImage');
	      var userNickName = baseInfo.get('nickName');
	      var realNameAuth = baseInfo.get('authStatus');
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Navigator2.default, { user: this.props.user }),
	        _react2.default.createElement(
	          'div',
	          { className: 'main' },
	          _react2.default.createElement(_NoCardBound2.default, { visible: this.props.user.get('baseInfo').get('authStatus') != 1, onBindClick: this.props.actions.showCardBindDialog }),
	          _react2.default.createElement(_SideMenu2.default, {
	            userHeadImage: userHeadImage,
	            userNickName: userNickName,
	            openNickNameDialog: this.openNickNameDialog.bind(this),
	            openHeadPicDialog: this.openHeadPicDialog.bind(this) }),
	          _react2.default.createElement(
	            'div',
	            { className: 'content' },
	            this.props.children
	          )
	        ),
	        _react2.default.createElement(_Footer2.default, null),
	        _react2.default.createElement(_CardBindDialog2.default, { visible: this.props.global.get('showCardBindDialog'), sid: this.props.user.get('cookieInfo').get('sid'), onCancel: this.closeBindCardDialog.bind(this) }),
	        _react2.default.createElement(_NickNameDialog2.default, { visible: this.state.showNickNameDialog, onOk: this.closeNickNameDialog.bind(this), onCancel: function onCancel() {
	            _this3.setState({ showNickNameDialog: false });
	          }, nickName: baseInfo.get('nickName') }),
	        _react2.default.createElement(_HeadPicDialog2.default, { visible: this.state.showHeadPicDialog, onCancel: function onCancel() {
	            _this3.setState({ showHeadPicDialog: false });
	          }, userHeadImage: userHeadImage })
	      );
	    }
	  }]);
	
	  return App;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    global: state.global,
	    user: state.user,
	    im: state.im
	  };
	}, function (dispath) {
	  return {
	    actions: (0, _redux.bindActionCreators)(Actions, dispath)
	  };
	})(App);
	
	module.exports = exports['default'];

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(39);
	
	var _reactRedux = __webpack_require__(18);
	
	var _actions = __webpack_require__(24);
	
	var Actions = _interopRequireWildcard(_actions);
	
	var _redux = __webpack_require__(11);
	
	var _Card = __webpack_require__(42);
	
	var _Card2 = _interopRequireDefault(_Card);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AssetsTab = function (_Component) {
	  _inherits(AssetsTab, _Component);
	
	  function AssetsTab() {
	    _classCallCheck(this, AssetsTab);
	
	    return _possibleConstructorReturn(this, (AssetsTab.__proto__ || Object.getPrototypeOf(AssetsTab)).apply(this, arguments));
	  }
	
	  _createClass(AssetsTab, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'tabs' },
	        _react2.default.createElement(
	          _reactRouter.IndexLink,
	          { activeClassName: 'actived', to: '/center/assets' },
	          '\u94B1\u5305\u6D41\u6C34'
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { activeClassName: 'actived', to: '/center/assets/strategy' },
	          '\u7B56\u7565\u4EA4\u6613\u6D41\u6C34'
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { activeClassName: 'actived', to: '/center/assets/deduction' },
	          '\u62B5\u7528\u91D1\u660E\u7EC6'
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { activeClassName: 'actived', to: '/center/assets/recharge' },
	          '\u5145\u503C'
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { activeClassName: 'actived', to: '/center/assets/withdraw' },
	          '\u63D0\u73B0'
	        )
	      );
	    }
	  }]);
	
	  return AssetsTab;
	}(_react.Component);
	
	var Assets = function (_Component2) {
	  _inherits(Assets, _Component2);
	
	  function Assets() {
	    _classCallCheck(this, Assets);
	
	    return _possibleConstructorReturn(this, (Assets.__proto__ || Object.getPrototypeOf(Assets)).apply(this, arguments));
	  }
	
	  _createClass(Assets, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.actions.loadUserAssets();
	      this.props.actions.loadUserStrategyAssets();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'assets' },
	        _react2.default.createElement(AssetsTab, null),
	        _react2.default.createElement(
	          'div',
	          { style: { padding: '0 33px' } },
	          this.props.children
	        )
	      );
	    }
	  }]);
	
	  return Assets;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    user: state.user
	  };
	}, function (dispath) {
	  return {
	    actions: (0, _redux.bindActionCreators)(Actions, dispath)
	  };
	})(Assets);
	
	module.exports = exports['default'];

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(39);
	
	var _reactRedux = __webpack_require__(18);
	
	var _actions = __webpack_require__(24);
	
	var Actions = _interopRequireWildcard(_actions);
	
	var _redux = __webpack_require__(11);
	
	var _Card = __webpack_require__(42);
	
	var _Card2 = _interopRequireDefault(_Card);
	
	var _PBTransfer = __webpack_require__(397);
	
	var _PBTransfer2 = _interopRequireDefault(_PBTransfer);
	
	var _Format = __webpack_require__(35);
	
	var Format = _interopRequireWildcard(_Format);
	
	var _Runtime = __webpack_require__(27);
	
	var _Runtime2 = _interopRequireDefault(_Runtime);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Dashboard = function (_React$Component) {
	  _inherits(Dashboard, _React$Component);
	
	  function Dashboard(props) {
	    _classCallCheck(this, Dashboard);
	
	    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));
	
	    _this.state = {
	      transfer: {
	        type: 1,
	        visible: false
	      }
	    };
	    return _this;
	  }
	
	  _createClass(Dashboard, [{
	    key: 'openTransferIn',
	    value: function openTransferIn() {
	      this.setState({
	        transfer: {
	          type: 1,
	          visible: true
	        }
	      });
	    }
	  }, {
	    key: 'openTransferOut',
	    value: function openTransferOut() {
	      this.setState({
	        transfer: {
	          type: 2,
	          visible: true
	        }
	      });
	    }
	  }, {
	    key: 'closeTransfer',
	    value: function closeTransfer() {
	      var state = this.state;
	      state.transfer.visible = false;
	      this.setState(state);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.actions.loadUserAssets();
	      this.props.actions.loadUserStrategyAssets();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var assets = this.props.user.get('assets');
	      var strategyAssets = this.props.user.get('strategyAssets');
	      var loginInfo = this.props.user.get('loginInfo');
	      var pbLink = "//pb." + _Runtime2.default.getDomain();
	      var financialClass = (0, _classnames2.default)({
	        'financial': true,
	        'show': parseFloat(assets.get('totalInvested')) > 0
	      });
	      var available = strategyAssets.get('available');
	      return _react2.default.createElement(
	        'div',
	        { className: 'dashboard' },
	        _react2.default.createElement(
	          'div',
	          { className: 'strategy-row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row-icon' },
	            _react2.default.createElement('i', { className: 'iconfont icon-qiandai', style: { fontSize: '30px' } })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row-value' },
	            _react2.default.createElement(
	              'p',
	              null,
	              '\u70B9\u70B9\u76C8\u94B1\u5305'
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'red-value' },
	              Format.fixed(assets.get('available')),
	              '\u5143'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row-btn' },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { className: 'button recharge', to: '/center/assets/recharge' },
	              '\u5145\u503C'
	            ),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { className: 'button withdraw', to: '/center/assets/withdraw' },
	              '\u63D0\u73B0'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: available ? "other-row" : "other-row" },
	          _react2.default.createElement(
	            'div',
	            { className: 'row-icon' },
	            _react2.default.createElement('i', { className: 'iconfont icon-renminbi', style: { fontSize: '30px' } })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row-value' },
	            _react2.default.createElement(
	              'p',
	              null,
	              '\u7B56\u7565\u4F59\u989D'
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'red-value' },
	              Format.fixed(available),
	              '\u5143'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row-btn' },
	            _react2.default.createElement(
	              'a',
	              { className: 'value-to-strategy', onClick: this.openTransferIn.bind(this), style: { marginRight: 10 } },
	              '\u8F6C\u5165'
	            ),
	            _react2.default.createElement(
	              'a',
	              { className: 'value-to-strategy', onClick: this.openTransferOut.bind(this) },
	              '\u8F6C\u51FA'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'data-row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'data-row-child' },
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                '\u5F53\u524D\u51BB\u7ED3'
	              ),
	              _react2.default.createElement(
	                'span',
	                { className: 'red-value', style: { marginLeft: 10 } },
	                this.props.user.get('strategyAssets').get('actualFreeze') || 0
	              ),
	              _react2.default.createElement(
	                'span',
	                null,
	                '\u5143'
	              ),
	              _react2.default.createElement(
	                'a',
	                { href: '//pb.' + _Runtime2.default.getDomain() + '/real/trade/sell' },
	                '\u67E5\u770B\u8BE6\u60C5>'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'data-row-child' },
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                '\u62B5\u7528\u91D1\u4F59\u989D'
	              ),
	              _react2.default.createElement(
	                'span',
	                { className: 'red-value', style: { marginLeft: 10 } },
	                this.props.user.get('strategyAssets').get('deduction') || 0
	              ),
	              _react2.default.createElement(
	                'span',
	                null,
	                '\u5143'
	              ),
	              _react2.default.createElement(
	                'a',
	                { href: '//pb.' + _Runtime2.default.getDomain() + '/real/trade/buy/t1' },
	                '\u524D\u53BB\u4F7F\u7528>'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'data-row-child' },
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                '\u60A8\u5F53\u524D\u5269\u4F59\u4F7F\u7528\u7684\u7EA2\u5305'
	              ),
	              _react2.default.createElement(
	                'span',
	                { className: 'red-value', style: { marginLeft: 10 } },
	                this.props.user.get('strategyAssets').get('bonusCount')
	              ),
	              _react2.default.createElement(
	                'span',
	                null,
	                '\u4E2A'
	              ),
	              _react2.default.createElement(
	                'a',
	                { href: '//pb.' + _Runtime2.default.getDomain() + '/real/trade/buy/t1' },
	                '\u524D\u53BB\u4F7F\u7528>'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'data-row-child', style: { border: 0, display: "none" } },
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                '\u60A8\u5F53\u524D\u5269\u4F591000\u5143\u4F7F\u7528\u6B21\u6570'
	              ),
	              _react2.default.createElement(
	                'span',
	                { className: 'red-value', style: { marginLeft: 10 } },
	                this.props.user.get('strategyAssets').get('expCount')
	              ),
	              _react2.default.createElement(
	                'span',
	                null,
	                '\u6B21'
	              ),
	              _react2.default.createElement(
	                'a',
	                { href: '//pb.' + _Runtime2.default.getDomain() + '/real/trade/buy/experience' },
	                '\u524D\u53BB\u4F7F\u7528>'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'base-info-row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row-icon' },
	            _react2.default.createElement('i', { className: 'iconfont icon-shenfenzheng', style: { fontSize: '30px' } })
	          ),
	          _react2.default.createElement(
	            'span',
	            { style: { fontSize: '14px', color: "#666" } },
	            '\u57FA\u672C\u4FE1\u606F'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'login-info-row' },
	          _react2.default.createElement(
	            'div',
	            { style: { width: 274 } },
	            '\u7528\u6237\u540D\uFF1A',
	            loginInfo.get('userName')
	          )
	        ),
	        _react2.default.createElement(_PBTransfer2.default, { type: this.state.transfer.type, onCancel: this.closeTransfer.bind(this), visible: this.state.transfer.visible })
	      );
	    }
	  }]);
	
	  return Dashboard;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    user: state.user
	  };
	}, function (dispath) {
	  return {
	    actions: (0, _redux.bindActionCreators)(Actions, dispath)
	  };
	})(Dashboard);
	
	module.exports = exports['default'];

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Runtime = __webpack_require__(27);
	
	var _Runtime2 = _interopRequireDefault(_Runtime);
	
	var _Api = __webpack_require__(16);
	
	var _Api2 = _interopRequireDefault(_Api);
	
	var _ApiCaller = __webpack_require__(17);
	
	var _ApiCaller2 = _interopRequireDefault(_ApiCaller);
	
	var _Card = __webpack_require__(42);
	
	var _Card2 = _interopRequireDefault(_Card);
	
	var _antd = __webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Privacy = function (_React$Component) {
	  _inherits(Privacy, _React$Component);
	
	  function Privacy(props) {
	    _classCallCheck(this, Privacy);
	
	    var _this = _possibleConstructorReturn(this, (Privacy.__proto__ || Object.getPrototypeOf(Privacy)).call(this, props));
	
	    _this.state = {
	      data: {}
	    };
	    return _this;
	  }
	
	  _createClass(Privacy, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.fetch();
	    }
	  }, {
	    key: 'fetch',
	    value: function fetch() {
	      var _this2 = this;
	
	      _ApiCaller2.default.call(_Api2.default.user.privacySelect, function (res) {
	        if (res.code == 0) {
	          _this2.setState({ data: res.data });
	        }
	      });
	    }
	  }, {
	    key: 'handleOnChangeReal',
	    value: function handleOnChangeReal(index) {
	      var _this3 = this;
	
	      _ApiCaller2.default.call(_Api2.default.user.privacySet, {
	        realStatus: -1 * this.state.data.realStatus
	      }, function (res) {
	        if (res.code == 0) {
	          _this3.fetch();
	        } else {
	          message.error(res.msg);
	        }
	      });
	    }
	  }, {
	    key: 'handleOnChangeSim',
	    value: function handleOnChangeSim() {
	      var _this4 = this;
	
	      _ApiCaller2.default.call(_Api2.default.user.privacySet, {
	        simuStatus: -1 * this.state.data.simuStatus
	      }, function (res) {
	        if (res.code == 0) {
	          _this4.fetch();
	        } else {
	          message.error(res.msg);
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var data = this.state.data;
	      return _react2.default.createElement(
	        'div',
	        { className: 'privacy-layout' },
	        _react2.default.createElement(
	          _Card2.default,
	          { title: '\u9690\u79C1\u8BBE\u7F6E', bodyHeight: '500px' },
	          _react2.default.createElement(
	            _antd.QueueAnim,
	            { delay: 400 },
	            _react2.default.createElement(
	              'div',
	              { className: 'item', key: 'a' },
	              _react2.default.createElement(
	                'div',
	                { className: 'icon' },
	                _react2.default.createElement('i', { className: 'iconfont icon-denglumima', style: { fontSize: '24px' } })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'name' },
	                '\u5B9E\u76D8\u4FE1\u606F\u662F\u5426\u5F00\u653E'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'operation' },
	                _react2.default.createElement(_antd.Switch, { checked: data.realStatus == 1, onChange: this.handleOnChangeReal.bind(this) })
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'item hide', key: 'b' },
	              _react2.default.createElement(
	                'div',
	                { className: 'icon' },
	                _react2.default.createElement('i', { className: 'iconfont icon-denglumima', style: { fontSize: '24px' } })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'name' },
	                '\u6A21\u62DF\u4FE1\u606F\u662F\u5426\u5F00\u653E'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'operation' },
	                _react2.default.createElement(_antd.Switch, { checked: data.simuStatus == 1, onChange: this.handleOnChangeSim.bind(this) })
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Privacy;
	}(_react2.default.Component);
	
	exports.default = Privacy;
	
	module.exports = exports['default'];

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(18);
	
	var _actions = __webpack_require__(24);
	
	var Actions = _interopRequireWildcard(_actions);
	
	var _redux = __webpack_require__(11);
	
	var _Card = __webpack_require__(42);
	
	var _Card2 = _interopRequireDefault(_Card);
	
	var _antd = __webpack_require__(9);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var columns = [{
	  title: '协议名称',
	  dataIndex: 'name',
	  key: 'name',
	  render: function render(name, item, i) {
	    return _react2.default.createElement(
	      'a',
	      { href: '//static.ddy98.com/img/pb/protocol_' + (i + 1) + '.png', target: '_blank' },
	      name
	    );
	  }
	}, {
	  title: '版本号',
	  dataIndex: 'version',
	  key: 'version'
	}, {
	  title: '发布日期',
	  dataIndex: 'publishDate',
	  key: 'publishDate'
	}, {
	  title: '签署日期',
	  dataIndex: 'signDate',
	  key: 'signDate'
	}];
	
	var Protocol = function (_React$Component) {
	  _inherits(Protocol, _React$Component);
	
	  function Protocol() {
	    _classCallCheck(this, Protocol);
	
	    return _possibleConstructorReturn(this, (Protocol.__proto__ || Object.getPrototypeOf(Protocol)).apply(this, arguments));
	  }
	
	  _createClass(Protocol, [{
	    key: 'render',
	    value: function render() {
	      var userRegTime = this.props.user.get('loginInfo').createTime;
	      var signDate = '2016-02-16';
	      if (new Date(userRegTime).getTime() > new Date('2016-02-16').getTime()) signDate = userRegTime.split(' ')[0];
	      var data = [{
	        key: '1',
	        name: '《（股票）投顾策略交易居间服务协议》',
	        version: '160216-1',
	        publishDate: '2016-02-16',
	        signDate: signDate
	      }, {
	        key: '2',
	        name: '《（股票）投顾策略交易合作协议》',
	        version: '160216-2',
	        publishDate: '2016-02-16',
	        signDate: signDate
	      }, {
	        key: '3',
	        name: '《（股票）投顾策略交易合作协议（T+D）》',
	        version: '161021-3',
	        publishDate: '2016-10-21',
	        signDate: '2016-10-21'
	      }];
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'protocol' },
	        _react2.default.createElement(
	          _Card2.default,
	          { title: '\u76F8\u5173\u534F\u8BAE', bodyHeight: '744px' },
	          _react2.default.createElement(_antd.Table, { columns: columns, dataSource: data, style: { marginTop: 25 } })
	        )
	      );
	    }
	  }]);
	
	  return Protocol;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    user: state.user
	  };
	}, function (dispath) {
	  return {
	    actions: (0, _redux.bindActionCreators)(Actions, dispath)
	  };
	})(Protocol);
	
	module.exports = exports['default'];

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Card = __webpack_require__(42);
	
	var _Card2 = _interopRequireDefault(_Card);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Runtime = __webpack_require__(27);
	
	var _Runtime2 = _interopRequireDefault(_Runtime);
	
	var _ApiCaller = __webpack_require__(17);
	
	var _ApiCaller2 = _interopRequireDefault(_ApiCaller);
	
	var _Api = __webpack_require__(16);
	
	var _Api2 = _interopRequireDefault(_Api);
	
	var _antd = __webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TabPane = _antd.Tabs.TabPane;
	
	var CardItem = function (_React$Component) {
	  _inherits(CardItem, _React$Component);
	
	  function CardItem() {
	    _classCallCheck(this, CardItem);
	
	    return _possibleConstructorReturn(this, (CardItem.__proto__ || Object.getPrototypeOf(CardItem)).apply(this, arguments));
	  }
	
	  _createClass(CardItem, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      if (!this.props.usedFlag) window.open(this.props.href);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var cardClass = (0, _classnames2.default)({
	        "card-item": true,
	        "used": this.props.usedFlag
	      });
	      return _react2.default.createElement(
	        'div',
	        { className: cardClass, onClick: this.handleClick.bind(this) },
	        _react2.default.createElement(
	          'div',
	          { className: 'left-page' },
	          _react2.default.createElement(
	            'span',
	            { className: 'front' },
	            this.props.front || ''
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: 'amount' },
	            this.props.amountF
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: 'back' },
	            this.props.amountB
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'right-page' },
	          _react2.default.createElement(
	            'p',
	            { className: 'title' },
	            this.props.title
	          ),
	          _react2.default.createElement(
	            'p',
	            { className: 'use-desc' },
	            this.props.useDesc
	          ),
	          _react2.default.createElement(
	            'p',
	            { className: 'use-date' },
	            this.props.dateLine
	          )
	        )
	      );
	    }
	  }]);
	
	  return CardItem;
	}(_react2.default.Component);
	
	var Stamps = function (_React$Component2) {
	  _inherits(Stamps, _React$Component2);
	
	  function Stamps() {
	    _classCallCheck(this, Stamps);
	
	    return _possibleConstructorReturn(this, (Stamps.__proto__ || Object.getPrototypeOf(Stamps)).apply(this, arguments));
	  }
	
	  _createClass(Stamps, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'stamps' },
	        _react2.default.createElement(
	          'ul',
	          null,
	          this.props.data.map(function (item) {
	            var usedFlag = item.TimeStatus == -1 && item.status == 1;
	            var amount = item.amount;
	            var amountString = amount.toString();
	            var amountF = void 0,
	                amountB = void 0;
	            if (amountString.indexOf('.') > -1) {
	              amountF = parseInt(amount);
	              amountB = amountString.substr(amountString.indexOf('.'));
	            } else {
	              amountF = amount;
	              amountB = '.0';
	            }
	            var useDesc = "-A股策略" + item.depositAmount + "元以上支付可用";
	            if (item.depositAmount == 0) {
	              useDesc = "-A股策略1元以上支付可用";
	            }
	            var dateLine = "-有效期" + item.deadLine.substr(0, 10);
	            var href = '//pb.' + _Runtime2.default.getDomain() + '/real/trade/buy/t1';
	            return _react2.default.createElement(CardItem, { front: '\uFFE5', title: '\u73B0\u91D1\u5238', usedFlag: usedFlag, amountF: amountF, amountB: amountB, useDesc: useDesc, dateLine: dateLine, key: item.recordId, href: href });
	          })
	        )
	      );
	    }
	  }]);
	
	  return Stamps;
	}(_react2.default.Component);
	
	var CardLimit = function (_React$Component3) {
	  _inherits(CardLimit, _React$Component3);
	
	  function CardLimit() {
	    _classCallCheck(this, CardLimit);
	
	    return _possibleConstructorReturn(this, (CardLimit.__proto__ || Object.getPrototypeOf(CardLimit)).apply(this, arguments));
	  }
	
	  _createClass(CardLimit, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'stamps' },
	        _react2.default.createElement(
	          'ul',
	          null,
	          this.props.data.map(function (item, index) {
	            var href = '//pb.' + _Runtime2.default.getDomain() + '/real/trade/buy/experience';
	            return _react2.default.createElement(CardItem, { title: '\u6DA8\u505C\u5361', usedFlag: item.status != -1, amountF: item.bennfitsValue, amountB: '%', useDesc: '-\u96501\u5143\u4F53\u9A8C\u53EF\u7528', dateLine: '-\u6709\u6548\u671F \u957F\u671F\u6709\u6548', key: item.recordId, href: href });
	          })
	        )
	      );
	    }
	  }]);
	
	  return CardLimit;
	}(_react2.default.Component);
	
	var CardDouble = function (_React$Component4) {
	  _inherits(CardDouble, _React$Component4);
	
	  function CardDouble() {
	    _classCallCheck(this, CardDouble);
	
	    return _possibleConstructorReturn(this, (CardDouble.__proto__ || Object.getPrototypeOf(CardDouble)).apply(this, arguments));
	  }
	
	  _createClass(CardDouble, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'stamps' },
	        _react2.default.createElement(
	          'ul',
	          null,
	          this.props.data.map(function (item, index) {
	            var href = '//pb.' + _Runtime2.default.getDomain() + '/real/trade/history';
	            return _react2.default.createElement(CardItem, { title: '\u7FFB\u500D\u5361', usedFlag: item.status != -1, amountF: item.bennfitsValue, amountB: '\u500D', useDesc: '-\u96501\u5143\u4F53\u9A8C\u53EF\u7528', dateLine: '-\u6709\u6548\u671F \u957F\u671F\u6709\u6548', key: item.recordId, href: href });
	          })
	        )
	      );
	    }
	  }]);
	
	  return CardDouble;
	}(_react2.default.Component);
	
	var RedPacket = function (_React$Component5) {
	  _inherits(RedPacket, _React$Component5);
	
	  function RedPacket(props) {
	    _classCallCheck(this, RedPacket);
	
	    var _this5 = _possibleConstructorReturn(this, (RedPacket.__proto__ || Object.getPrototypeOf(RedPacket)).call(this, props));
	
	    _this5.state = {
	      data: [],
	      pagination: {
	        pageSize: 18
	      },
	      loading: false,
	      data1: [],
	      pagination1: {
	        pageSize: 18
	      },
	      loading1: false,
	      data2: [],
	      pagination2: {
	        pageSize: 18
	      },
	      loading2: false
	    };
	    return _this5;
	  }
	
	  _createClass(RedPacket, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      //获取红包
	      this.fetch();
	      //涨停卡
	      this.fetchCard();
	      //翻倍卡
	      this.fetchCardDouble();
	    }
	  }, {
	    key: 'fetch',
	    value: function fetch() {
	      var _this6 = this;
	
	      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      params.pageSize = this.state.pagination.pageSize;
	      params.page = params.page || 1;
	      params.available = 1;
	      this.setState({ loading: true });
	      _ApiCaller2.default.call(_Api2.default.user.getReadPacketList, params, function (res) {
	        var pagination = _this6.state.pagination;
	        pagination.total = parseInt(res.total);
	        _this6.setState({
	          loading: false,
	          data: res.data,
	          pagination: pagination
	        });
	      });
	    }
	  }, {
	    key: 'fetchCard',
	    value: function fetchCard() {
	      var _this7 = this;
	
	      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      params.pageSize = this.state.pagination1.pageSize;
	      params.page = params.page || 1;
	      params.type = 2;
	      this.setState({ loading1: true });
	      _ApiCaller2.default.call(_Api2.default.user.getCard, params, function (res) {
	        var pagination1 = _this7.state.pagination1;
	        pagination1.total = parseInt(res.totalRows);
	        _this7.setState({
	          loading1: false,
	          data1: res.data || [],
	          pagination1: pagination1
	        });
	      });
	    }
	  }, {
	    key: 'fetchCardDouble',
	    value: function fetchCardDouble() {
	      var _this8 = this;
	
	      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      params.pageSize = this.state.pagination2.pageSize;
	      params.page = params.page || 1;
	      params.type = 1;
	      this.setState({ loading2: true });
	      _ApiCaller2.default.call(_Api2.default.user.getCard, params, function (res) {
	        var pagination2 = _this8.state.pagination2;
	        pagination2.total = parseInt(res.totalRows);
	        _this8.setState({
	          loading2: false,
	          data2: res.data || [],
	          pagination2: pagination2
	        });
	      });
	    }
	  }, {
	    key: 'handlePageChange',
	    value: function handlePageChange(nextPage) {
	      this.fetch({
	        page: nextPage
	      });
	    }
	  }, {
	    key: 'handlePageChange1',
	    value: function handlePageChange1(nextPage) {
	      this.fetchCard({
	        page: nextPage
	      });
	    }
	  }, {
	    key: 'handlePageChange2',
	    value: function handlePageChange2(nextPage) {
	      this.fetchCardDouble({
	        page: nextPage
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'redpacket', style: { background: '#fff', minHeight: 794 } },
	        _react2.default.createElement(
	          _antd.Tabs,
	          { defaultActiveKey: '1' },
	          _react2.default.createElement(
	            TabPane,
	            { tab: '\u6211\u7684\u7EA2\u5305', key: '1' },
	            _react2.default.createElement(
	              'div',
	              { className: 'tab_content' },
	              _react2.default.createElement(
	                _antd.Spin,
	                { spining: this.state.loading },
	                this.state.data.length == 0 ? _react2.default.createElement(
	                  'div',
	                  { className: 'none' },
	                  '\u60A8\u8FD8\u6CA1\u6709\u7EA2\u5305\u54E6\uFF01'
	                ) : _react2.default.createElement(Stamps, { data: this.state.data })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'page-container' },
	                _react2.default.createElement(_antd.Pagination, {
	                  defaultCurrent: 1,
	                  onChange: this.handlePageChange.bind(this),
	                  defaultPageSize: this.state.pagination.pageSize,
	                  total: this.state.pagination.total })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            TabPane,
	            { tab: '\u7FFB\u500D\u5361', key: '3' },
	            _react2.default.createElement(
	              'div',
	              { className: 'tab_content' },
	              _react2.default.createElement(
	                _antd.Spin,
	                { spining: this.state.loading2 },
	                this.state.data2.length == 0 ? _react2.default.createElement(
	                  'div',
	                  { className: 'none' },
	                  '\u60A8\u8FD8\u6CA1\u6709\u7FFB\u500D\u5361\u54E6\uFF01'
	                ) : _react2.default.createElement(CardDouble, { data: this.state.data2 })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'page-container' },
	                _react2.default.createElement(_antd.Pagination, {
	                  defaultCurrent: 1,
	                  onChange: this.handlePageChange2.bind(this),
	                  defaultPageSize: this.state.pagination2.pageSize,
	                  total: this.state.pagination2.total })
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return RedPacket;
	}(_react2.default.Component);
	
	exports.default = RedPacket;
	
	module.exports = exports['default'];

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(18);
	
	var _actions = __webpack_require__(24);
	
	var Actions = _interopRequireWildcard(_actions);
	
	var _redux = __webpack_require__(11);
	
	var _Card = __webpack_require__(42);
	
	var _Card2 = _interopRequireDefault(_Card);
	
	var _QRCode = __webpack_require__(174);
	
	var _QRCode2 = _interopRequireDefault(_QRCode);
	
	var _Runtime = __webpack_require__(27);
	
	var _Runtime2 = _interopRequireDefault(_Runtime);
	
	var _Api = __webpack_require__(16);
	
	var _Api2 = _interopRequireDefault(_Api);
	
	var _ApiCaller = __webpack_require__(17);
	
	var _ApiCaller2 = _interopRequireDefault(_ApiCaller);
	
	var _Format = __webpack_require__(35);
	
	var Format = _interopRequireWildcard(_Format);
	
	var _antd = __webpack_require__(9);
	
	var _reactImmutableRenderMixin = __webpack_require__(89);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ZeroClipboard = window.ZeroClipboard;
	var columns = [{
	  title: '用户名',
	  dataIndex: 'phone',
	  key: 'phone'
	}, {
	  title: '推广时间',
	  dataIndex: 'promoteDate',
	  key: 'promoteDate'
	}, {
	  title: '策略笔数',
	  dataIndex: 'countDM',
	  key: 'countDM',
	  render: function render(countDM) {
	    return (countDM || 0) + ' 笔';
	  }
	}, {
	  title: '策略最后发布时间',
	  dataIndex: 'lastTime',
	  key: 'lastTime',
	  render: function render(lastTime) {
	    return lastTime || '该用户未发布过策略';
	  }
	}];
	
	var Spread = function (_React$Component) {
	  _inherits(Spread, _React$Component);
	
	  function Spread(props) {
	    _classCallCheck(this, Spread);
	
	    var _this = _possibleConstructorReturn(this, (Spread.__proto__ || Object.getPrototypeOf(Spread)).call(this, props));
	
	    _this.shouldComponentUpdate = _reactImmutableRenderMixin.shouldComponentUpdate.bind(_this);
	    _this.state = {
	      spreadCount: {},
	      data: [],
	      pagination: {
	        pageSize: 15
	      },
	      loading: false
	    };
	    return _this;
	  }
	
	  _createClass(Spread, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      _ApiCaller2.default.call(_Api2.default.user.getSpreadCount, function (res) {
	        _this2.setState({
	          spreadCount: res.data
	        });
	      });
	
	      this.fetch();
	
	      ZeroClipboard.config({
	        swfPath: '//cdn.bootcss.com/zeroclipboard/2.2.0/ZeroClipboard.swf'
	      });
	      var clip = new ZeroClipboard(document.getElementById('btnCopy'));
	      clip.on('ready', function () {
	        clip.on('copy', function (e) {
	          var myInviteUrl = 'user.' + _Runtime2.default.getDomain() + '/reg.html?inviterCode=' + _this2.props.user.get('cookieInfo').get('phone');
	          e.clipboardData.setData("text/plain", myInviteUrl);
	        });
	        clip.on('aftercopy', function () {
	          _antd.message.success('邀请网址已复制到剪贴板');
	        });
	        clip.on('error', function () {
	          _antd.message.error('自动复制失败，请手动复制');
	        });
	      });
	    }
	  }, {
	    key: 'handleTableChange',
	    value: function handleTableChange(pagination) {
	      var pager = this.state.pagination;
	      pager.current = pagination.current;
	      this.setState({
	        pagination: pager
	      });
	      this.fetch({
	        currentPage: pagination.current
	      });
	    }
	  }, {
	    key: 'fetch',
	    value: function fetch() {
	      var _this3 = this;
	
	      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      params.pageSize = this.state.pagination.pageSize;
	      params.currentPage = params.currentPage || this.state.pagination.current || 1;
	      this.setState({ loading: true });
	      _ApiCaller2.default.call(_Api2.default.user.getSpreadInvitedList, params, function (res) {
	        var pagination = _this3.state.pagination;
	        pagination.total = parseInt(res.data.totalRows);
	        _this3.setState({
	          loading: false,
	          data: res.data.resultList,
	          pagination: pagination
	        });
	      });
	    }
	  }, {
	    key: 'handleShareClick',
	    value: function handleShareClick(e) {
	      var clsName = e.target.className;
	      var myInviteUrl = '//user.' + _Runtime2.default.getDomain() + '/reg.html?inviterCode=' + this.props.user.get('cookieInfo').get('phone');
	      var title = '我正在点点盈玩合作炒股，快来和我一起赚钱吧！';
	      switch (clsName) {
	        case 'iconfont icon-xinlang':
	          window.open('http://s.jiathis.com/?webid=tsina&url=' + encodeURIComponent(myInviteUrl) + '&title=' + encodeURIComponent(title) + '&uid=1626433&summary=%E7%82%B9%E7%82%B9%E7%9B%88&su=1');
	          break;
	        case 'iconfont icon-weixin':
	          break;
	        case 'iconfont icon-qq':
	          window.open('http://s.jiathis.com/?webid=cqq&url=' + encodeURIComponent(myInviteUrl) + '&title=' + encodeURIComponent(title) + '&uid=1626433&summary=%E7%82%B9%E7%82%B9%E7%9B%88&su=1');
	          break;
	        case 'iconfont icon-tengxunweibo':
	          window.open('http://share.v.t.qq.com/index.php?c=share&a=index&title=' + encodeURIComponent(title) + '&url=' + encodeURIComponent(myInviteUrl) + '&appkey=ce15e084124446b9a612a5c29f82f080&site=www.jiathis.com&pic=');
	          break;
	      }
	    }
	  }, {
	    key: 'buildRowKey',
	    value: function buildRowKey(item, index) {
	      return index;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      var myInviteUrl = 'user.' + _Runtime2.default.getDomain() + '/reg.html?inviterCode=' + this.props.user.get('cookieInfo').get('phone');
	      if (!this.props.user.get('spreadQRCode')) {
	        var elQRCode = document.createElement('div');
	        elQRCode.innerHTML = '';
	        var qrcode = new _QRCode2.default(elQRCode, {
	          width: 90,
	          height: 90
	        });
	        qrcode.makeCode('http://user.m.' + _Runtime2.default.getDomain() + '/reg.html?inviterCode=' + this.props.user.get('cookieInfo').get('phone'));
	        elQRCode.children[1].onload = function () {
	          _this4.props.actions.setSpreadQRCode(elQRCode.children[1].getAttribute('src'));
	        };
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: 'spread' },
	        _react2.default.createElement(
	          _Card2.default,
	          { title: '\u6211\u7684\u63A8\u5E7F' },
	          _react2.default.createElement(
	            'div',
	            { className: 'tips clearfix' },
	            _react2.default.createElement(
	              'div',
	              { className: 'circle' },
	              _react2.default.createElement('i', { className: 'iconfont icon-gerenxuanzhong' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'desc' },
	              _react2.default.createElement(
	                'p',
	                null,
	                '\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u9080\u8BF7\u597D\u53CB\u6CE8\u518C'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'arrow' },
	              _react2.default.createElement('i', { className: 'iconfont icon-youjiantou' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'circle' },
	              _react2.default.createElement('i', { className: 'iconfont icon-tablet' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'desc' },
	              '\u88AB\u9080\u8BF7\u4EBA\u64CD\u4F5C\u70B9\u7B56\u7565'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'arrow' },
	              _react2.default.createElement('i', { className: 'iconfont icon-youjiantou' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'circle' },
	              _react2.default.createElement('i', { className: 'iconfont icon-iconfonticon01' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'desc' },
	              '\u83B7\u5F97\u63D0\u6210'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'spread-content' },
	          _react2.default.createElement(
	            'div',
	            { className: 'clearfix' },
	            _react2.default.createElement(
	              'div',
	              { className: 'share' },
	              _react2.default.createElement(
	                'p',
	                null,
	                '\u65B9\u5F0F\u4E00\uFF1A\u5206\u4EAB\u94FE\u63A5\u7ED9\u597D\u53CB'
	              ),
	              _react2.default.createElement(
	                'ul',
	                { className: 'clearfix' },
	                _react2.default.createElement(
	                  _antd.Tooltip,
	                  { title: '\u5206\u4EAB\u5230\u65B0\u6D6A\u5FAE\u535A' },
	                  _react2.default.createElement(
	                    'li',
	                    { className: 'weibo', onClick: this.handleShareClick.bind(this), style: { marginLeft: 0 } },
	                    _react2.default.createElement('i', { className: 'iconfont icon-xinlang' })
	                  )
	                ),
	                _react2.default.createElement(
	                  _antd.Tooltip,
	                  { title: '\u8BF7\u626B\u63CF\u6216\u4FDD\u5B58\u53F3\u4FA7\u4E8C\u7EF4\u7801\u56FE\u7247' },
	                  _react2.default.createElement(
	                    'li',
	                    { className: 'wechat' },
	                    _react2.default.createElement('i', { className: 'iconfont icon-weixin' })
	                  )
	                ),
	                _react2.default.createElement(
	                  _antd.Tooltip,
	                  { title: '\u5206\u4EAB\u7ED9QQ\u597D\u53CB' },
	                  _react2.default.createElement(
	                    'li',
	                    { className: 'qq', style: { lineHeight: '45px' }, onClick: this.handleShareClick.bind(this) },
	                    _react2.default.createElement('i', { className: 'iconfont icon-qq' })
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'button',
	                { id: 'btnCopy', className: 'share-button' },
	                '\u70B9\u51FB\u590D\u5236\u94FE\u63A5'
	              ),
	              _react2.default.createElement(
	                'p',
	                { style: { color: "#ff503f" } },
	                '\u63D0\u793A\uFF1A\u60A8\u7684\u9080\u8BF7\u7801\u4E3A\u60A8\u7684\u624B\u673A\u53F7\u7801\u3002'
	              )
	            ),
	            _react2.default.createElement('div', { className: 'spread-content-sepLine' }),
	            _react2.default.createElement(
	              'div',
	              { className: 'shareRight' },
	              _react2.default.createElement(
	                'div',
	                null,
	                '\u65B9\u5F0F\u4E8C\uFF1A \u5206\u4EAB\u4E8C\u7EF4\u7801\u7ED9\u597D\u53CB'
	              ),
	              _react2.default.createElement(
	                'div',
	                { id: 'qrcode', className: 'qrcode' },
	                _react2.default.createElement('img', { src: this.props.user.get('spreadQRCode'), width: '90' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: { marginTop: 15, color: "#54b5fc" } },
	                '\u5FAE\u4FE1\u626B\u4E00\u626B\uFF0C\u5206\u4EAB\u7ED9\u597D\u53CB'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _Card2.default,
	          { bodyHeight: '336', marginTop: '20', position: 'relative' },
	          _react2.default.createElement(
	            'div',
	            { className: 'listTitle' },
	            '\u63A8\u5E7F\u5217\u8868'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'invited_count' },
	            '\u5DF2\u63A8\u5E7F\uFF1A',
	            _react2.default.createElement(
	              'span',
	              { className: 'color_orange' },
	              this.state.spreadCount.userCount
	            ),
	            ' \u4EBA'
	          ),
	          _react2.default.createElement(
	            _antd.Row,
	            { style: { fontSize: 14, padding: '15px 0 0 0' } },
	            _react2.default.createElement(
	              _antd.Col,
	              { className: 'clearfix', span: '12' },
	              '\u6628\u65E5\u63D0\u6210\uFF1A',
	              _react2.default.createElement(
	                'span',
	                { className: 'color_orange' },
	                Format.money(this.state.spreadCount.lastCommission, 2, '￥')
	              ),
	              '\xA0\u5143'
	            ),
	            _react2.default.createElement(
	              _antd.Col,
	              { span: '12' },
	              _react2.default.createElement(
	                'div',
	                { style: { marginLeft: 200 } },
	                '\u6628\u65E5\u7B56\u7565\uFF1A',
	                _react2.default.createElement(
	                  'span',
	                  { className: 'color_orange' },
	                  this.state.spreadCount.yesStrategy || 0
	                ),
	                '\xA0\u7B14'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            _antd.Row,
	            { style: { fontSize: 14, padding: '15px 0 15px 0' } },
	            _react2.default.createElement(
	              _antd.Col,
	              { span: '12' },
	              '\u63D0\u6210\u603B\u8BA1\uFF1A',
	              _react2.default.createElement(
	                'span',
	                { className: 'color_orange' },
	                Format.money(this.state.spreadCount.sumCommission, 2, '￥')
	              ),
	              '\xA0\u5143'
	            ),
	            _react2.default.createElement(
	              _antd.Col,
	              { span: '12' },
	              _react2.default.createElement(
	                'div',
	                { style: { marginLeft: 200 } },
	                '\u7B56\u7565\u603B\u8BA1\uFF1A',
	                _react2.default.createElement(
	                  'span',
	                  { className: 'color_orange' },
	                  this.state.spreadCount.strategyCount
	                ),
	                '\xA0\u7B14'
	              )
	            )
	          ),
	          _react2.default.createElement(_antd.Table, {
	            style: { marginTop: 20 },
	            rowKey: this.buildRowKey,
	            columns: columns,
	            dataSource: this.state.data,
	            pagination: this.state.pagination,
	            loading: this.state.loading,
	            onChange: this.handleTableChange.bind(this) })
	        )
	      );
	    }
	  }]);
	
	  return Spread;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    user: state.user
	  };
	}, function (dispath) {
	  return {
	    actions: (0, _redux.bindActionCreators)(Actions, dispath)
	  };
	})(Spread);
	
	module.exports = exports['default'];

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _antd = __webpack_require__(9);
	
	var _Format = __webpack_require__(35);
	
	var Format = _interopRequireWildcard(_Format);
	
	var _ApiCaller = __webpack_require__(17);
	
	var _ApiCaller2 = _interopRequireDefault(_ApiCaller);
	
	var _Api = __webpack_require__(16);
	
	var _Api2 = _interopRequireDefault(_Api);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var columns = [{
	  title: '时间',
	  dataIndex: 'createTime',
	  key: 'createTime'
	}, {
	  title: '类型',
	  dataIndex: 'fundsTypeName',
	  key: 'fundsTypeName'
	}, {
	  title: '抵用金',
	  dataIndex: 'amount',
	  key: 'amount',
	  render: function render(amount) {
	    var amountClassName = "color_green";
	    if (amount > 0) amountClassName = "color_orange";
	    return _react2.default.createElement(
	      'span',
	      { className: amountClassName },
	      Format.fixed(amount)
	    );
	  }
	}, {
	  title: '抵用金余额',
	  dataIndex: 'available',
	  key: 'available',
	  render: function render(available) {
	    return _react2.default.createElement(
	      'span',
	      null,
	      Format.fixed(available)
	    );
	  }
	}];
	
	var Deduction = function (_React$Component) {
	  _inherits(Deduction, _React$Component);
	
	  function Deduction(props) {
	    _classCallCheck(this, Deduction);
	
	    var _this = _possibleConstructorReturn(this, (Deduction.__proto__ || Object.getPrototypeOf(Deduction)).call(this, props));
	
	    _this.state = {
	      data: [],
	      pagination: {
	        pageSize: 20
	      },
	      loading: false
	    };
	    return _this;
	  }
	
	  _createClass(Deduction, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.fetch({
	        page: 1
	      });
	    }
	  }, {
	    key: 'buildRowKey',
	    value: function buildRowKey(record, index) {
	      return index;
	    }
	  }, {
	    key: 'fetch',
	    value: function fetch() {
	      var _this2 = this;
	
	      var para = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      para.pageSize = 20;
	      this.setState({ loading: true });
	      _ApiCaller2.default.call(_Api2.default.user.getDeductionFunds, para, function (res) {
	        var state = _this2.state;
	        if (res.code == 0) {
	          state.pagination.total = parseInt(res.totalRows);
	          state.data = res.data;
	        }
	        state.loading = false;
	        _this2.setState(state);
	      });
	    }
	  }, {
	    key: 'handleTableChange',
	    value: function handleTableChange(pagination) {
	      var pager = this.state.pagination;
	      pager.current = pagination.current;
	      this.setState({
	        pagination: pager
	      });
	      this.fetch({
	        page: pagination.current
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_antd.Table, {
	          style: { paddingTop: 18 },
	          rowKey: this.buildRowKey,
	          columns: columns,
	          dataSource: this.state.data,
	          pagination: this.state.pagination,
	          loading: this.state.loading,
	          onChange: this.handleTableChange.bind(this) })
	      );
	    }
	  }]);
	
	  return Deduction;
	}(_react2.default.Component);
	
	exports.default = Deduction;
	
	
	module.exports = exports['default'];

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(39);
	
	var _reactRedux = __webpack_require__(18);
	
	var _actions = __webpack_require__(24);
	
	var Actions = _interopRequireWildcard(_actions);
	
	var _redux = __webpack_require__(11);
	
	var _Format = __webpack_require__(35);
	
	var Format = _interopRequireWildcard(_Format);
	
	var _ValidateHelper = __webpack_require__(72);
	
	var _ValidateHelper2 = _interopRequireDefault(_ValidateHelper);
	
	var _Api = __webpack_require__(16);
	
	var _Api2 = _interopRequireDefault(_Api);
	
	var _ApiCaller = __webpack_require__(17);
	
	var _ApiCaller2 = _interopRequireDefault(_ApiCaller);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _CardBindForm = __webpack_require__(175);
	
	var _CardBindForm2 = _interopRequireDefault(_CardBindForm);
	
	var _RechargeConfirm = __webpack_require__(176);
	
	var _RechargeConfirm2 = _interopRequireDefault(_RechargeConfirm);
	
	var _Runtime = __webpack_require__(27);
	
	var _QRCode = __webpack_require__(174);
	
	var _QRCode2 = _interopRequireDefault(_QRCode);
	
	var _antd = __webpack_require__(9);
	
	var _BFBankLimitData = __webpack_require__(380);
	
	var _BFBankLimitData2 = _interopRequireDefault(_BFBankLimitData);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import BankData from '../../../constants/BankData'
	
	
	var FormItem = _antd.Form.Item;
	
	var wechatLogo = "data:image/png;base64,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";
	
	var alipayLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAC9FBMVEUAAAAWntg5XXdCjKUalscIqeodqd3z8/MaRV0dSmMGp+kHqOoOjMAUbpUdRV0fRFkHqu0OmNAQgrAUZ4obZIQYUmkcZIUcVW8dQFMTg7IXRlwdO0oJo+QKnNoKmNQOkskOj8YandMRfKsYYoEWXHwdbpEKpOQIod4JndsVo9wintEPib4RfKYNibwQc54QbpQQeaYUV3YWcJkcYn4XS2AcVG4YdJpHe5UYY4AKmNMWoNsKm9dRt9n59vTq8O0gqeAmqeCz3ekalccQga8blsYOhLUMjcEijLgkiK4SgK8SdqEWZocYY4QTfKYZXXgia4YhP1QAqu/+/v7///8AqvD///0Aq+8Aqe4ApvAAsvoArfUAqe/9/v4Aoe4AqvPr+fz5/f2x4/YAou0Dqez///tQw/AApe7v+fpBve8AqPAAo+4ApO9dw+sAouwCpuwAq/Flx+0Br/cAqO72+/oApO0LqOsGqe1exOv9//wBs/yx4/MBsfgArfOa2/EGpu0Apu0ApOwGqOv5/Pra8vcArPOo3/JZw+0osusHpuoAtv/x+vzW8PeP1/BOwO0Tqu1Twew1tusSrOtBuur7/v0AtP3x+vrq9/nh9PjS7/fF6vW86PQWr+4Oq+1Ww+xDvOwAoez0+/7k9fe45fSs4fS05PKS1+8Aou9uyu5IvusutOsaruvz+/rl9vrd8/jn9vfN7fbD6fSd3PK35PGY2vGG1O9lyO9pyu5dxe0+uu0Mqu0YrOwfsOsBpOoEsvrr+Pm25fXK6/QDsPQArvSi3fGm3fCV2fBEv/BRwu+C0u5vzO4gse4KqO1ixuwisOw6uOsxt+v+///D6/gAr/ju+ffX8vfM7PTJ6vSO1/Ow4fKK1vKe2vBaxfCM1e53z+5Ww+4Anu4yuO0nte0wtO0nse0WrescrOsAnutEu+rJ7PfA6PTT7/N+0e9gxu9Ivu8Fq+98z+55zu5yzu45u+4Lre4bsO1Wv+kAuP/Z8fTO7vSk3/QRru46tuayC8F9AAAAUXRSTlMA7jFQyfLb2gsG9/LOkzYV+dy1iXNXUEseFhEE7ubg2dSzq2cxJ/Xt693IxLWunomFbmhXTEA2ICDk4+Hb2tra2NfJw8G+uqSYlop+fXdtOijPQRxkAAAImklEQVRo3u2aZXTTUBSAg7u7u7u7uxOSl2S8FgmhIwltqUHxDZjg7u7u7u7u7u7uf3ihSSltyjJoOfzgO6ddljTvy8279yZrhv1E1gotSpbIk6d+/N+jbvw8eVOUzZ8N80PKUslzhFvamge1/V32DLJYkuZMWzYVpkLlFFX69LbsMZvJP8Hcpw9y5M6XBPOmXJrdewaReCAw97EkLZ4f+4nE6ZKGmPGAQQ4KyVk+m+f4KbafofFAQoUUyoC5SZKuZ1saDyg0Pa5wRrcgfe/eNB5o4OA0KZX0zD6uEx5waPJD8ayYRLa0g2k8CNBte+fDJDLsNiNBELAOzpVZmuF6PWk8OJi3t8yGZiDpIM3praD1JA0ulhjD0lk0BkBZ7SYZq0ZD24IokRpoTVFmzJW+Lq4shBSuie35sFRp2uLaEDa0IWTmdNcoONMYq5hdaw8ydNO1+Y6O6KVV0LYolilZMAXm2ljG4ApqYfGSkUEUtEuIxUvwX/AbAhKnVDB0c8oGSaAC1CygO6mxDUUgCy5Fh6t8oB+ktAng5os7O/oydyUSuFjWUY25txhtAmbackKVNgqEKs7holbB5PZqLG2jhNBBdfuyGRoj4F/MuNHZl+fznXIWgckjO6twcCqvNU0FVu/LzcixSppGPDDqVYBBrgPq3ym0vyJgRMYL/Ub3HMw1WZmfEBkYS8GLNwe6eHHimruSV83w2nZg01sYKwGcOrCDL4pAp/PZNHmrNZaCiYQvwGeFm4v9Yis4Nz50SCgCvblBq9Br/BBlta2NDBhw0EDHTvB2ZI+uPXp07doVvRDST+U31wLa+P4SIGTByuOGWE4yqZ9pnMmyRiPLut5n6qWFmdKbvPrmg2GEIhgWrT2LFANJUeiF3uQlEiH/5lrNfJkC5KwKHS5orgPtCIsnEXLznjKaCbyAFG7YZAH3yggDL4BhlwFwCZbfWUAFXmA4skseH6wOg7HrRRBChjEgGAPqM5CHKvuT9kgn4UqhHcNZMhYCHjKiY+rtE4umX706fdGmO7enOvr1ZxirlwSOmKvk6JpoXrOAgox9xJsNe89NsHHfGRC6Yui8a4cPLl4yzYrCgTRFyTk0fIA8xUMiWUpzu2aE4+vnDQCenca1MOHR5+vDF2/pFyY1ZlQHzGh3EUx2MLhWgThi/XkO1b88PPF9dPk+BXDcxDkXI0dtsbMLoNm+kJPP0NhnekqbgMSFOxEcgeBsQ0/P7Tt//96Op4ee5YDrjsgVC5Jc3jhq2oPFK5QZ2LWZ1yagKWHTUA4dPZg0bOTid5tNYabwaUcWL3q9etcAICmUSMCAgTtfrgE61wrndAOJaxGQeP9RA6WTM3DhXbsgoAnleYhyVezvOD7j+hybdK5cY7pmRbm4zQnncU0CihkxmdABLiLKboCkR77zPCMYtpw4NAkoBoS7jdq+3oQUpSkC9qUOgLHzHWpXDhRKv3sb19jQuF7Y9h3bajLwOEXHIKCYJUNBG7Cvn7+AIex/dMy+swB4GXQdJkZEvjP1t8IYBGy3pYCYtIRRnTFlluyjrkzwUQDgXBGxcetRq5WH/gX8ttUoPXoIMXQ+ZtuovaE+QUjJNXvt9K1HURX6E4j3LhDEEweM6SJA6aPXoEr0BRDcwLWRUUdFlCJqAuHWcgDW2WNq3RTDXp9FuI/8J6QKHbp2ZFQ4K0rdxEvAzlhGcNMZPAb4mZGhhHtAlTAAt3L/9LthepGkvATPkeBATAKSXTTbNSxK6bOhSKHTeTmkRnN+2MH7Rj1DUp6nqIsGAakfM5FoIwsmjByzeofadADkCN01f/jomSzzQ2A/OZDgbhh+LTA+nE3olHu5hfowx61DA+U25RMGt+PTsIeOBUUUATN6FUEME395/GHvlRaqI8auQyUJmX5Huj12osrwRepd7S9cru5ZB8TA0Vb/X7Py2xaOB8rx6/pGw+9SaJq2aG6oqgJVINDVdPcidoMNjH1l9Junhi37O7jzR7dvM/+jT5lODpvYgVB1EIkUAWXYeg4QOx4Kaq2Rwq39xlxQJtQJdHs3e6YDyQhLDk8ezwHgX4AwDkMhLR8jMLz3uYcGe9Q1G+Heaexan6swwzpGRswGBPAvoMSoiaidrjg2ghUgSXl0aqH/3cMff+QKWLou2uoTI8UvCDsxf5ITEH4joOyHOZQe3LxjUSaWFUQGIQps2IgZ6yYB4pSyB1jeLUy1XCgoGKNeT7EBwp+Aj44gTulQCq/su2FM1FRHdPS0I6NGHpozAUgVK+/APR4zk/fXqHjReC8yQvq8mgA1svtTACp9AnDO2ZNO77w0b8qjgaHA4+OAGH/ovt1M+e+FpMHo2LRuKCdfwBWBgnh8DXAN5AJIC54Ned4Mk4jHAGPvH7VhFQeAjwBhWLIf3biooTsFwOSNIwwQjxnI9N8yPMIGgEuQjPTU9xt5XkWBIrHNmz6agbg2IDQ4Rs1HaYsE5ZIN+mmTOOLYqqVOwAEXBEBZMWDpqqejwkWIa4eCjGHJwpUdaqDvrvv83HR4IXzT051D2w+ZJTFkwpMpa7udDBesFB5beMERWQdrlb2P9xMwkmH7jz45/Nn69euvLro92mRE1U3jsYeiYLuiWOVqfVRPorhggfQnschAiHrRb0KHNMKwYhZ/NxDfQRHhv8/29BiWAgmCxaDUFTAsU2ozHiTonrlTYVji3OgpUXCAg5tjiDK9lVILeAA5WkuCVMmD9CjQ3DNdEkwiQ7glGAY4OHlm5Xl4zz6BN9A9C5bHZFKlHRd4Q0jq9JibzGnHWehAKmiqZ+pmSTAPQ962PcnAGeg+4wql9/qnk9KFB4cERkHTg3r2Tp4B8yZT3qSDQ/bg9J9CWcbtzlmqAOZL1owlcwzqHdLbEvLbWM6MC9kdnqtpRUydxPnLNGmYq2qc36ZImuQlSmcsIM+uuiNLlgJxf5tKlbJk8Rr9G170vJeO/YznAAAAAElFTkSuQmCC";
	
	var submitUrl = '//pay.' + (0, _Runtime.getDomain)() + '/fmsubmit';
	
	var formItemLayout = {
	  labelCol: { span: 3 },
	  wrapperCol: { span: 6 }
	
	  // 校验充值金额
	};function checkAmount(rule, value, callback) {
	  if (!_ValidateHelper2.default.amount(value) || !(value > 0)) callback(new Error('请输入正确的充值金额'));else callback();
	}
	
	//构造input数据
	function setFormInput(form, value, name) {
	  var newElement = document.createElement("input");
	  newElement.setAttribute("name", name);
	  newElement.setAttribute("type", "hidden");
	  newElement.setAttribute("value", value);
	  form.appendChild(newElement);
	  return form;
	}
	
	function getRechargeApi(type) {
	  var apiOld = _Api2.default.user.getRecharge;
	  var api = {
	    url: _Api2.default.user.getRecharge.url + type,
	    type: apiOld.type,
	    xform: apiOld.xform
	  };
	  return api;
	}
	
	var Recharge = function (_Component) {
	  _inherits(Recharge, _Component);
	
	  function Recharge(props) {
	    _classCallCheck(this, Recharge);
	
	    var _this = _possibleConstructorReturn(this, (Recharge.__proto__ || Object.getPrototypeOf(Recharge)).call(this, props));
	
	    _this.state = {
	      handleSubmit: function handleSubmit() {},
	      handleReset: function handleReset() {},
	      payType: 0,
	      loading: false,
	      scModal: {
	        visible: false,
	        clientType: '',
	        qrcode: '',
	        rechargeId: '',
	        paySuccess: false
	      }
	    };
	    return _this;
	  }
	
	  _createClass(Recharge, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.actions.addIMEvent("14", this.handleSCRechargeMsg.bind(this));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.actions.removeIMEvent("14");
	    }
	  }, {
	    key: 'handleSCRechargeMsg',
	    value: function handleSCRechargeMsg(message) {
	      if (message.ext.payStatus == 'pay_success') {
	        var scModal = this.state.scModal;
	        if (scModal.visible && message.ext.rechargeId == scModal.rechargeId) {
	          this.onSCRechargeSuccess();
	        }
	        // notification
	        _antd.notification.success({
	          message: '充值成功',
	          description: message.data
	        });
	      }
	    }
	  }, {
	    key: 'onSCRechargeSuccess',
	    value: function onSCRechargeSuccess() {
	      var _this2 = this;
	
	      var scModal = this.state.scModal;
	      scModal.paySuccess = true;
	      this.setState({ scModal: scModal });
	
	      // 3秒后关闭modal
	      setTimeout(function () {
	        var scModal = {
	          visible: false,
	          clientType: '',
	          qrcode: '',
	          rechargeId: '',
	          paySuccess: false
	        };
	        _this2.setState({ scModal: scModal });
	        // 跳转到充值记录
	        _this2.context.router.push('/center/assets');
	      }, 3000);
	    }
	  }, {
	    key: 'switchPayType',
	    value: function switchPayType(type) {
	      var state = this.state;
	      state.payType = type;
	      this.setState(state);
	    }
	
	    // 实名认证表单方法注册
	
	  }, {
	    key: 'handleRegMethods',
	    value: function handleRegMethods(funcSubmit, funcReset) {
	      this.setState({
	        handleSubmit: funcSubmit,
	        handleReset: funcReset
	      });
	    }
	  }, {
	    key: 'reloadInfo',
	    value: function reloadInfo() {
	      // 重新加载用户信息
	      this.props.actions.loadUserInfo();
	      // 重新加载用户资产
	      this.props.actions.loadUserAssets();
	      // 重置表单
	      this.props.form.resetFields();
	      // 充值实名认证表单
	      this.state.handleReset();
	    }
	
	    // 快捷支付
	
	  }, {
	    key: 'goRecharge',
	    value: function goRecharge(data) {
	      var api = getRechargeApi('51');
	      //api.url += '51'
	      _ApiCaller2.default.call(api, {
	        realName: encodeURIComponent(data.realName),
	        bankNo: data.bankCard,
	        idCard: data.idCard,
	        amount: data.amount
	      }, function (res) {
	        if (res.code == 0) {
	          //提交form
	          var _data = res.data;
	          //解析risk对象
	          var newForm = document.createElement("form");
	          document.body.appendChild(newForm);
	          newForm.method = 'post';
	          newForm.action = submitUrl;
	          _data['_action'] = _data.req_url;
	          //newForm.target = '_blank'
	          //构造隐藏表单
	          delete _data['req_url'];
	          for (var key in _data) {
	            if (key == 'risk_item') {
	              _data[key] = JSON.stringify(_data[key]);
	              var temp = _data[key].replace(/\\/g, '').substr(1);
	              temp = temp.substr(0, temp.length - 1);
	              _data[key] = temp;
	            }
	            newForm = setFormInput(newForm, _data[key], key);
	          }
	          //提交
	          newForm.submit();
	          //确认窗口
	          //RechargeConfirm.show(this.reloadInfo.bind(this))
	        } else {
	          _antd.message.error(res.msg);
	        }
	      });
	    }
	
	    // 网银支付
	
	  }, {
	    key: 'handleSubmitInWang',
	    value: function handleSubmitInWang() {
	      var _this3 = this;
	
	      this.props.form.validateFields(function (errors, values) {
	        if (!!errors) {
	          _this3.showSubmitError(errors);
	          return;
	        }
	        var baseInfo = _this3.props.user.get('baseInfo');
	        var api = getRechargeApi('52');
	        _ApiCaller2.default.call(api, {
	          realName: encodeURIComponent(baseInfo.get('realName')),
	          //bankNo: 'PSBC',
	          idCard: baseInfo.get('idCard'),
	          amount: values.amount
	        }, function (res) {
	          if (res.code == 0) {
	            //提交form
	            var _data2 = res.data;
	            var newForm = document.createElement("form");
	            document.body.appendChild(newForm);
	            newForm.method = 'post';
	            newForm.action = submitUrl;
	            _data2['_action'] = _data2.nodeAuthorizationURL;
	            //newForm.target = '_blank'
	            //构造隐藏表单
	            delete _data2['req_url'];
	            delete _data2['nodeAuthorizationURL'];
	            for (var key in _data2) {
	              newForm = setFormInput(newForm, _data2[key], key);
	            }
	            //提交
	            newForm.submit();
	            //确认窗口
	            //RechargeConfirm.show(this.reloadInfo.bind(this))
	          } else {
	            _antd.message.error(res.msg);
	          }
	        });
	      });
	    }
	
	    // 宝付支付
	
	  }, {
	    key: 'handleSubmitInBao',
	    value: function handleSubmitInBao() {
	      var _this4 = this;
	
	      this.props.form.validateFields(function (errors, values) {
	        if (!!errors) {
	          _this4.showSubmitError(errors);
	          return;
	        }
	        var baseInfo = _this4.props.user.get('baseInfo');
	        var api = getRechargeApi('42');
	        _ApiCaller2.default.call(api, {
	          realName: encodeURIComponent(baseInfo.get('realName')),
	          //bankNo: this.props.user.get('bankCardList').get(0).bankNo,
	          idCard: baseInfo.get('idCard'),
	          amount: values.amount
	        }, function (res) {
	          if (res.code == 0) {
	            //提交form
	            var _data3 = res.data;
	            var newForm = document.createElement("form");
	            document.body.appendChild(newForm);
	            newForm.method = 'post';
	            newForm.action = submitUrl;
	            _data3['_action'] = _data3.PayUrl;
	            //newForm.target = '_blank'
	            //构造隐藏表单
	            delete _data3['req_url'];
	            for (var key in _data3) {
	              newForm = setFormInput(newForm, _data3[key], key);
	            }
	            //提交
	            newForm.submit();
	            //确认窗口
	            //RechargeConfirm.show(this.reloadInfo.bind(this))
	          } else {
	            _antd.message.error(res.msg);
	          }
	        });
	      });
	    }
	
	    // 易宝充值
	
	  }, {
	    key: 'goYiBao',
	    value: function goYiBao(data) {
	      var api = getRechargeApi('42');
	      //api.url += '51'
	      _ApiCaller2.default.call(api, {
	        realName: encodeURIComponent(data.realName),
	        bankNo: data.bankCard,
	        idCard: data.idCard,
	        amount: data.amount
	      }, function (res) {
	        if (res.code == 0) {
	          //提交form
	          var _data4 = res.data;
	          //解析risk对象
	          var newForm = document.createElement("form");
	          document.body.appendChild(newForm);
	          newForm.method = 'post';
	          newForm.action = submitUrl;
	          _data4['_action'] = _data4.nodeAuthorizationURL;
	          //newForm.target = '_blank'
	          //构造隐藏表单
	          delete _data4['nodeAuthorizationURL'];
	          for (var key in _data4) {
	            newForm = setFormInput(newForm, _data4[key], key);
	          }
	          //提交
	          newForm.submit();
	          //确认窗口
	          //RechargeConfirm.show(this.reloadInfo.bind(this))
	        } else {
	          _antd.message.error(res.msg);
	        }
	      });
	    }
	  }, {
	    key: 'goSCPay',
	    value: function goSCPay(qrType) {
	      var _this5 = this;
	
	      this.props.form.validateFields(function (errors, values) {
	        if (errors) return;
	
	        var api = getRechargeApi('80');
	        _this5.setState({ loading: true });
	        _ApiCaller2.default.call(api, { amount: values.amount, qrType: qrType }, function (res) {
	          _this5.setState({ loading: false });
	          if (res.code == 0) {
	            var elQRCode = document.createElement('div');
	            elQRCode.innerHTML = '';
	            var qrcode = new _QRCode2.default(elQRCode, {
	              width: 300,
	              height: 300
	            });
	            qrcode.makeCode(res.data.dimensionUrl);
	            // 生成二维码
	            elQRCode.children[1].onload = function () {
	              var scModal = {
	                visible: true,
	                clientType: qrType == 1 ? '支付宝' : '微信',
	                qrcode: elQRCode.children[1].getAttribute('src'),
	                rechargeId: res.data.rechargeId,
	                paySuccess: false,
	                rechargeAmount: res.data.amount,
	                rechargeFee: res.data.qrFee
	              };
	              _this5.setState({ scModal: scModal });
	            };
	          } else {
	            _antd.message.error(res.msg || '未知错误');
	          }
	        });
	      });
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(callback) {
	      var _this6 = this;
	
	      this.props.form.validateFields(function (errors, values) {
	        if (!!errors) {
	          _this6.showSubmitError(errors);
	          return;
	        }
	
	        var rechargeData = {
	          amount: values.amount
	        };
	
	        var bankCardList = _this6.props.user.get('bankCardList');
	        var baseInfo = _this6.props.user.get('baseInfo');
	        if (bankCardList.size > 0) {
	          var bankCard = bankCardList.get(0);
	          rechargeData.bankCard = bankCard.bankNo;
	          rechargeData.realName = bankCard.cardUserName;
	          rechargeData.idCard = baseInfo.get('idCard');
	          rechargeData.realName = baseInfo.get('realName');
	          callback(rechargeData);
	        } else {
	          _this6.state.handleSubmit(function (fieldsVal) {
	            rechargeData.bankCard = fieldsVal.bankCard;
	            rechargeData.realName = fieldsVal.realName;
	            rechargeData.idCard = fieldsVal.idCard;
	            callback(rechargeData);
	          });
	        }
	      });
	    }
	  }, {
	    key: 'showSubmitError',
	    value: function showSubmitError(errors) {
	      for (var error in errors) {
	        _antd.Modal.error({
	          title: '错误',
	          content: errors[error].errors[0].message
	        });
	        return;
	      }
	    }
	  }, {
	    key: 'handleSubmitBindType',
	    value: function handleSubmitBindType() {
	      var state = this.state;
	      switch (state.payType) {
	        case 0:
	          this.handleSubmit(this.goRecharge.bind(this));
	          break;
	        case 1:
	          this.handleSubmitInWang();
	          break;
	        case 2:
	          //this.handleSubmitInBao()
	          this.handleSubmit(this.goYiBao.bind(this));
	          break;
	        case 3:
	          this.goSCPay(1);
	          break;
	        case 4:
	          this.goSCPay(2);
	          break;
	      }
	    }
	  }, {
	    key: 'handleSCPayCheck',
	    value: function handleSCPayCheck(rechargeId) {
	      var _this7 = this;
	
	      _ApiCaller2.default.call(_Api2.default.user.querySCRecharge, { rechargeId: rechargeId }, function (res) {
	        if (res.code == 0 && res.data.status == 1) {
	          // 充值成功
	          _this7.onSCRechargeSuccess();
	        } else {
	          // 充值失败
	          _this7.handleCloseSCModal();
	          _antd.message.error('您未完成充值，已取消该充值订单');
	        }
	      });
	    }
	  }, {
	    key: 'handleCloseSCModal',
	    value: function handleCloseSCModal() {
	      var scModal = {
	        visible: false,
	        clientType: '',
	        qrcode: '',
	        rechargeId: '',
	        paySuccess: false,
	        rechargeAmount: 0,
	        rechargeFee: 0
	      };
	      this.setState({ scModal: scModal });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var columnsInFast = [{
	        title: '单笔限额（元）',
	        dataIndex: 'singleLimit',
	        key: 'singleLimit'
	      }, {
	        title: '每日限额（元）',
	        dataIndex: 'dayLimit',
	        key: 'dayLimit'
	      }, {
	        title: '每月限额（元）',
	        dataIndex: 'monthLimit',
	        key: 'monthLimit'
	      }, {
	        title: '备注',
	        dataIndex: 'remarks',
	        key: 'remarks'
	      }];
	      var columnsInBao = [{
	        title: '银行名称',
	        dataIndex: 'bankName',
	        key: 'bankName',
	        render: function render(value, row, index) {
	          var obj = {
	            children: value,
	            props: {}
	            //行合并
	          };obj.props.rowSpan = data[index].rowNum;
	          return obj;
	        },
	
	        width: '20%'
	      }, {
	        title: '卡类型',
	        dataIndex: 'cardType',
	        key: 'cardType',
	        render: function render(value, row, index) {
	          var obj = {
	            children: value,
	            props: {}
	            //行合并
	          };obj.props.rowSpan = data[index].rowNum;
	          return obj;
	        },
	
	        width: '10%'
	      }, {
	        title: '客户类型',
	        dataIndex: 'customerType',
	        key: 'customerType',
	        width: '30%'
	      }, {
	        title: '单笔限额(元)',
	        dataIndex: 'singleQuota',
	        key: 'singleQuota',
	        width: '20%'
	      }, {
	        title: '日累计限额(元)',
	        dataIndex: 'dailyLimit',
	        key: 'dailyLimit',
	        width: '20%'
	      }];
	      var assets = this.props.user.get('assets');
	      var userBankCardList = this.props.user.get('bankCardList');
	      var strategyAssets = this.props.user.get('strategyAssets');
	      var bankNo = userBankCardList.size > 0 ? userBankCardList.get(0).bankNo.substr(-4) : '';
	      var bankImg = userBankCardList.size > 0 ? '//static.ddy98.com/front/1.0.0/images/banks/' + userBankCardList.get(0).alias + '.png' : '';
	      var cardSelectClass = (0, _classnames2.default)({
	        'item': true,
	        'hide': userBankCardList.size == 0
	      });
	      var infoFormClass = (0, _classnames2.default)({
	        'item': true,
	        'hide': userBankCardList.size > 0
	      });
	      var getFieldProps = this.props.form.getFieldProps;
	
	      var amountProps = getFieldProps('amount', {
	        rules: [{ validator: checkAmount.bind(this) }]
	      });
	      // 充值方式选择
	      var payType = this.state.payType;
	      var fastClass = (0, _classnames2.default)({
	        "pay-fast": true,
	        'active': payType == 0
	      });
	      var wangyinClass = (0, _classnames2.default)({
	        "pay-wangyin": true,
	        'active': payType == 1
	      });
	      var baofuClass = (0, _classnames2.default)({
	        //"pay-baofu": true,
	        "pay-yibao": true,
	        'active': payType == 2
	      });
	      var scAlipayClass = (0, _classnames2.default)({
	        'pay-alipay': true,
	        'active': payType == 3
	      });
	      var scWechatClass = (0, _classnames2.default)({
	        'pay-wechat': true,
	        'active': payType == 4
	      });
	      var fastTabsClass = (0, _classnames2.default)({
	        "recharge-tabs": true,
	        "hide": payType != 0 && payType != 2
	      });
	      // 限额说明
	      var data = void 0,
	          colums = void 0;
	      if (payType == 0) {
	        data = [{
	          key: 1,
	          singleLimit: '5万',
	          dayLimit: ' 5万',
	          monthLimit: '20万',
	          remarks: '若充值金额超限可选择网银支付进行充值'
	        }];
	        colums = columnsInFast;
	      } else if (payType == 2) {
	        data = _BFBankLimitData2.default;
	        colums = columnsInBao;
	      } else {
	        data = [];
	        colums = [];
	      }
	      var scModal = this.state.scModal;
	      return _react2.default.createElement(
	        'div',
	        { className: 'recharge fast' },
	        _react2.default.createElement(
	          _antd.Spin,
	          { spining: this.state.loading },
	          _react2.default.createElement(
	            'div',
	            { className: 'item value-input', style: { paddingBottom: 0, borderBottom: 'none' } },
	            _react2.default.createElement(
	              _antd.Form,
	              { horizontal: true, form: this.props.form },
	              _react2.default.createElement(
	                FormItem,
	                _extends({}, formItemLayout, {
	                  label: '\u5145\u503C\u91D1\u989D' }),
	                _react2.default.createElement(_antd.Input, _extends({}, amountProps, { placeholder: '\u8BF7\u8F93\u5165\u60A8\u8981\u5145\u503C\u7684\u91D1\u989D', addonAfter: '\u5143' }))
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'item-input-desc' },
	              _react2.default.createElement(
	                'span',
	                { style: { marginLeft: 200 } },
	                '\u70B9\u70B9\u76C8\u94B1\u5305\u4F59\u989D ',
	                _react2.default.createElement(
	                  'span',
	                  { className: 'red-value' },
	                  Format.fixed(assets.get('available'))
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'input-desc' },
	              '\u5145\u503C\u6709\u95EE\u9898\uFF1F\u5728\u7EBF',
	              _react2.default.createElement(
	                'a',
	                { className: 'red-value', href: '//wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzkzODAxNTM4MF8zMTM5MDdfNDAwNzExMTI4OF8yXw', target: '_blank' },
	                '\u8054\u7CFB\u5BA2\u670D'
	              ),
	              '\u6216\u62E8\u6253400-7111-288\u54A8\u8BE2'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'pay-methods' },
	              _react2.default.createElement(
	                'div',
	                { className: 'pay-desc' },
	                '\u5145\u503C\u65B9\u5F0F'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'pay-choice' },
	                _react2.default.createElement(
	                  'div',
	                  { className: fastClass, onClick: this.switchPayType.bind(this, 0) },
	                  _react2.default.createElement('i', { className: 'ui-icon-select-right-top' })
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: scAlipayClass, onClick: this.switchPayType.bind(this, 3) },
	                  _react2.default.createElement('div', null),
	                  _react2.default.createElement('i', { className: 'ui-icon-select-right-top' })
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: scWechatClass, onClick: this.switchPayType.bind(this, 4) },
	                  _react2.default.createElement('div', null),
	                  _react2.default.createElement('i', { className: 'ui-icon-select-right-top' })
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: wangyinClass, onClick: this.switchPayType.bind(this, 1) },
	                  _react2.default.createElement('div', null),
	                  _react2.default.createElement('i', { className: 'ui-icon-select-right-top' })
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: baofuClass, onClick: this.switchPayType.bind(this, 2) },
	                  _react2.default.createElement('i', { className: 'ui-icon-select-right-top' })
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: fastTabsClass },
	            _react2.default.createElement(
	              'div',
	              { className: cardSelectClass },
	              _react2.default.createElement(
	                'div',
	                { className: 'use_card' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'uc_title' },
	                  '\u4F7F\u7528\u94F6\u884C\u5361\uFF1A'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'uc_bankcard' },
	                  _react2.default.createElement('i', { className: 'ui-icon-select-right-top' }),
	                  _react2.default.createElement('img', { src: bankImg, alt: 'bank card' }),
	                  _react2.default.createElement(
	                    'div',
	                    null,
	                    '\u5C3E\u53F7 ',
	                    bankNo
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'use-desc' },
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  '\u5FEB\u6377\u652F\u4ED8\u6682\u65F6\u53EA\u652F\u6301\u5DF2\u7ED1\u5B9A\u7684\u94F6\u884C\u5361'
	                ),
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  '\u5982\u9700\u6362\u7ED1\u94F6\u884C\u5361\uFF0C\u8BF7\u8054\u7CFB\u5BA2\u670D\uFF1A400-7111-288'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: infoFormClass, style: { paddingTop: 0 } },
	              _react2.default.createElement(_CardBindForm2.default, { onRegMethods: this.handleRegMethods.bind(this), type: 'layout' })
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'recharge-submit-btn', onClick: this.handleSubmitBindType.bind(this) },
	            '\u63D0\u4EA4'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: payType != 0 && payType != 2 ? "hide" : "item spec" },
	            _react2.default.createElement(
	              'p',
	              null,
	              '\u8BF7\u5173\u6CE8\u60A8\u7684\u5145\u503C\u91D1\u989D\u662F\u5426\u8D85\u9650'
	            ),
	            _react2.default.createElement(_antd.Table, { columns: colums, dataSource: data, pagination: false, bordered: true })
	          )
	        ),
	        _react2.default.createElement(
	          _antd.Modal,
	          {
	            visible: scModal.visible,
	            title: scModal.clientType + '扫码充值',
	            footer: scModal.paySuccess ? null : _react2.default.createElement(
	              _antd.Button,
	              { type: 'primary', onClick: this.handleSCPayCheck.bind(this, scModal.rechargeId) },
	              '\u5DF2\u5B8C\u6210\u5145\u503C'
	            ),
	            onCancel: this.handleCloseSCModal.bind(this) },
	          scModal.paySuccess ? _react2.default.createElement(
	            'div',
	            { style: { textAlign: 'center' } },
	            _react2.default.createElement(
	              'p',
	              { style: { fontSize: '150px', color: '#00a854' } },
	              _react2.default.createElement(_antd.Icon, { type: 'check-circle' })
	            ),
	            _react2.default.createElement(
	              'p',
	              { style: { fontSize: '16px' } },
	              '\u60A8\u5DF2\u5B8C\u6210\u5145\u503C\uFF0C3\u79D2\u540E\u81EA\u52A8\u5173\u95ED...'
	            )
	          ) : _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'div',
	              { style: { width: '100%', textAlign: 'center', fontSize: '16px' } },
	              '\u8BF7\u4F7F\u7528',
	              scModal.clientType,
	              '\u5BA2\u6237\u7AEF\u626B\u63CF\u4E0B\u9762\u7684\u4E8C\u7EF4\u7801\u5B8C\u6210\u5145\u503C',
	              _react2.default.createElement('br', null),
	              '\u652F\u4ED8\u91D1\u989D\uFF1A',
	              _react2.default.createElement(
	                'span',
	                { style: { color: 'red' } },
	                scModal.rechargeAmount
	              ),
	              '\u5143\uFF08\u542B\u624B\u7EED\u8D39\uFF1A',
	              _react2.default.createElement(
	                'span',
	                { style: { color: 'red' } },
	                scModal.rechargeFee
	              ),
	              '\u5143\uFF09'
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: { padding: 10, textAlign: 'center', position: 'relative' } },
	              _react2.default.createElement('img', { src: scModal.qrcode, width: '300' }),
	              _react2.default.createElement(
	                'div',
	                { style: { position: 'absolute', left: '50%', top: '50%', margin: '-24px 0 0 -24px' } },
	                _react2.default.createElement('img', { src: scModal.clientType == '支付宝' ? alipayLogo : wechatLogo, width: '48', height: '48' })
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Recharge;
	}(_react.Component);
	
	Recharge.contextTypes = {
	  router: _react2.default.PropTypes.object.isRequired
	};
	Recharge = _antd.Form.create()(Recharge);
	Recharge = (0, _reactRedux.connect)(function (state) {
	  return {
	    user: state.user,
	    im: state.im
	  };
	}, function (dispath) {
	  return {
	    actions: (0, _redux.bindActionCreators)(Actions, dispath)
	  };
	})(Recharge);
	
	exports.default = Recharge;
	
	module.exports = exports['default'];

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _antd = __webpack_require__(9);
	
	var _Format = __webpack_require__(35);
	
	var Format = _interopRequireWildcard(_Format);
	
	var _ApiCaller = __webpack_require__(17);
	
	var _ApiCaller2 = _interopRequireDefault(_ApiCaller);
	
	var _Api = __webpack_require__(16);
	
	var _Api2 = _interopRequireDefault(_Api);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Option = _antd.Select.Option;
	var RangePicker = _antd.DatePicker.RangePicker;
	
	var columns = [{
	  title: '交易时间',
	  dataIndex: 'createTime',
	  key: 'createTime'
	}, {
	  title: '交易类型',
	  dataIndex: 'fundsType',
	  key: 'fundsType',
	  render: function render(type, record) {
	    return record.labelMap.fundsType;
	  }
	}, {
	  title: '交易金额',
	  dataIndex: 'amount',
	  key: 'amount',
	  render: function render(amount) {
	    var amountClassName = "color_green";
	    if (amount > 0) amountClassName = "color_orange";
	    return _react2.default.createElement(
	      'span',
	      { className: amountClassName },
	      Format.fixed(amount)
	    );
	  }
	}, {
	  title: '策略账户余额',
	  dataIndex: 'available',
	  key: 'available',
	  render: function render(amount) {
	    return _react2.default.createElement(
	      'span',
	      null,
	      Format.fixed(amount)
	    );
	  }
	}, {
	  title: '交易状态',
	  dataIndex: 'status',
	  key: 'status',
	  render: function render(status, record) {
	    return record.labelMap.status;
	  }
	}];
	
	var StrategyHis = function (_React$Component) {
	  _inherits(StrategyHis, _React$Component);
	
	  function StrategyHis(props) {
	    _classCallCheck(this, StrategyHis);
	
	    var _this = _possibleConstructorReturn(this, (StrategyHis.__proto__ || Object.getPrototypeOf(StrategyHis)).call(this, props));
	
	    _this.state = {
	      data: [],
	      searchFilter: {
	        type: '0'
	      },
	      filter: {
	        type: '0',
	        startDate: '',
	        endDate: ''
	      },
	      pagination: {
	        pageSize: 15
	      },
	      loading: false
	    };
	    return _this;
	  }
	
	  _createClass(StrategyHis, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.fetch();
	    }
	  }, {
	    key: 'buildRowKey',
	    value: function buildRowKey(record, index) {
	      return index;
	    }
	  }, {
	    key: 'handleTableChange',
	    value: function handleTableChange(pagination) {
	      var pager = this.state.pagination;
	      pager.current = pagination.current;
	      this.setState({
	        pagination: pager
	      });
	      this.fetch({
	        page: pagination.current
	      });
	    }
	  }, {
	    key: 'handleTypeChange',
	    value: function handleTypeChange(value) {
	      var state = this.state;
	      state.filter.type = value;
	      this.setState(state);
	    }
	  }, {
	    key: 'handleDateChange',
	    value: function handleDateChange(value) {
	      var state = this.state;
	      state.filter.startDate = Format.date(value[0].getTime(), 'yyyy-MM-dd');
	      state.filter.endDate = Format.date(value[1].getTime(), 'yyyy-MM-dd') + " 23:59:59";
	      this.setState(state);
	    }
	  }, {
	    key: 'handleSearch',
	    value: function handleSearch() {
	      var state = this.state;
	      // 复制搜索条件
	      state.searchFilter = {
	        type: state.filter.type,
	        startDate: state.filter.startDate,
	        endDate: state.filter.endDate
	      };
	      state.pagination.current = 1;
	      this.setState(state);
	      this.fetch();
	    }
	  }, {
	    key: 'handleReset',
	    value: function handleReset() {
	      var state = this.state;
	      state.searchFilter = {
	        type: '0',
	        startDate: '',
	        endDate: ''
	      };
	      state.filter = {
	        type: '0',
	        startDate: '',
	        endDate: ''
	      };
	      state.pagination.current = 1;
	      this.setState(state);
	      this.fetch();
	    }
	  }, {
	    key: 'fetch',
	    value: function fetch() {
	      var _this2 = this;
	
	      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      var filter = this.state.searchFilter;
	      if (filter.type != '0') params.fundsTypes = [parseInt(filter.type)];
	      if (filter.startDate) params.filterStartDate = filter.startDate;
	      if (filter.endDate) params.filterEndDate = filter.endDate;
	      params.pageSize = this.state.pagination.pageSize;
	      this.setState({ loading: true });
	      _ApiCaller2.default.call(_Api2.default.user.getUserStrategyAssets, params, function (res) {
	        var pagination = _this2.state.pagination;
	        pagination.total = parseInt(res.totalRows);
	        _this2.setState({
	          loading: false,
	          data: res.data,
	          pagination: pagination
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var typeDataSource = [{ type: 1, text: '账户充值' }, { type: 100, text: '余额提现' }, { type: 28, text: '从策略账户转出' }, { type: 29, text: '转入策略账户' }, { type: 2, text: '支付信用金' }, { type: 3, text: '追加信用金' }, { type: 4, text: '支付管理费' }, { type: 5, text: '支付利息' }, { type: 6, text: '盈利提取' }, { type: 7, text: '股票盈亏' }, { type: 8, text: '提现手续费' }, { type: 10, text: '理财产品收入' }, { type: 11, text: '理财产品付款' }, { type: 12, text: '理财本金' }, { type: 22, text: '管理费回款' }, { type: 23, text: '利息回款' }, { type: 24, text: '退还信用金' }, { type: 25, text: '红包返现' }];
	      return _react2.default.createElement(
	        'div',
	        { className: 'tradehis' },
	        _react2.default.createElement(
	          _antd.Row,
	          { style: { paddingTop: '30px' }, className: 'hide' },
	          _react2.default.createElement(
	            _antd.Col,
	            { span: '24' },
	            _react2.default.createElement(
	              _antd.Select,
	              { defaultValue: '0', value: this.state.filter.type, style: { width: '160px' }, onChange: this.handleTypeChange.bind(this) },
	              _react2.default.createElement(
	                Option,
	                { value: '0', key: '0' },
	                '\u5168\u90E8\u7C7B\u578B'
	              ),
	              typeDataSource.map(function (item) {
	                return _react2.default.createElement(
	                  Option,
	                  { value: item.type, key: item.type },
	                  item.text
	                );
	              })
	            ),
	            '\xA0\xA0',
	            _react2.default.createElement(RangePicker, { style: { width: 184 }, onChange: this.handleDateChange.bind(this) }),
	            '\xA0\xA0',
	            _react2.default.createElement(
	              _antd.Button,
	              { type: 'primary', onClick: this.handleSearch.bind(this) },
	              '\u67E5\u8BE2'
	            ),
	            '\xA0\xA0',
	            _react2.default.createElement(
	              _antd.Button,
	              { type: 'ghost', onClick: this.handleReset.bind(this) },
	              '\u91CD\u7F6E'
	            )
	          )
	        ),
	        _react2.default.createElement(_antd.Table, {
	          style: { paddingTop: 18 },
	          rowKey: this.buildRowKey,
	          columns: columns,
	          dataSource: this.state.data,
	          pagination: this.state.pagination,
	          loading: this.state.loading,
	          onChange: this.handleTableChange.bind(this) })
	      );
	    }
	  }]);
	
	  return StrategyHis;
	}(_react2.default.Component);
	
	exports.default = StrategyHis;
	
	module.exports = exports['default'];

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _antd = __webpack_require__(9);
	
	var _Format = __webpack_require__(35);
	
	var Format = _interopRequireWildcard(_Format);
	
	var _ApiCaller = __webpack_require__(17);
	
	var _ApiCaller2 = _interopRequireDefault(_ApiCaller);
	
	var _Api = __webpack_require__(16);
	
	var _Api2 = _interopRequireDefault(_Api);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Option = _antd.Select.Option;
	var RangePicker = _antd.DatePicker.RangePicker;
	
	var typeDataSource = [{ type: 1, text: '账户充值' }, { type: 100, text: '余额提现' }, { type: 28, text: '从策略账户转出' }, { type: 29, text: '转入策略账户' }, { type: 2, text: '支付信用金' }, { type: 3, text: '追加信用金' }, { type: 4, text: '支付管理费' }, { type: 5, text: '支付利息' }, { type: 6, text: '盈利提取' }, { type: 7, text: '股票盈亏' }, { type: 8, text: '提现手续费' }, { type: 10, text: '理财产品收入' }, { type: 11, text: '理财产品付款' }, { type: 12, text: '理财本金' }, { type: 22, text: '管理费回款' }, { type: 23, text: '利息回款' }, { type: 24, text: '退还信用金' }, { type: 25, text: '红包返现' }];
	
	var columns = [{
	  title: '交易时间',
	  dataIndex: 'createTime',
	  key: 'createTime'
	}, {
	  title: '交易类型',
	  dataIndex: 'type',
	  key: 'type',
	  render: function render(type, record) {
	    return record.labelMap.fundsType;
	  }
	}, {
	  title: '交易金额',
	  dataIndex: 'amount',
	  key: 'amount',
	  render: function render(amount) {
	    var amountClassName = "color_green";
	    if (amount > 0) amountClassName = "color_orange";
	    return _react2.default.createElement(
	      'span',
	      { className: amountClassName },
	      Format.fixed(amount)
	    );
	  }
	}, {
	  title: '账户余额',
	  dataIndex: 'availableNew',
	  key: 'availableNew'
	  // {
	  //   title: '交易状态',
	  //   dataIndex: 'status',
	  //   key: 'status',
	  //   render (status, record) {
	  //     return record.labelMap.status
	  //   }
	  // }
	}];
	
	var TradeHis = function (_React$Component) {
	  _inherits(TradeHis, _React$Component);
	
	  function TradeHis(props) {
	    _classCallCheck(this, TradeHis);
	
	    var _this = _possibleConstructorReturn(this, (TradeHis.__proto__ || Object.getPrototypeOf(TradeHis)).call(this, props));
	
	    _this.state = {
	      data: [],
	      searchFilter: {
	        type: '0'
	      },
	      filter: {
	        type: '0',
	        startDate: '',
	        endDate: ''
	      },
	      pagination: {
	        pageSize: 15
	      },
	      loading: false,
	      typeData: []
	    };
	    return _this;
	  }
	
	  _createClass(TradeHis, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.fetch();
	      //获取类型
	      this.fetchType();
	    }
	  }, {
	    key: 'fetchType',
	    value: function fetchType() {
	      var _this2 = this;
	
	      _ApiCaller2.default.call(_Api2.default.user.dataField, { key: 'funds_type' }, function (res) {
	        if (res.code == 0) {
	          var state = _this2.state;
	          state.typeData = res.dataFields;
	          _this2.setState(state);
	        }
	      });
	    }
	  }, {
	    key: 'buildRowKey',
	    value: function buildRowKey(record, index) {
	      return index;
	    }
	  }, {
	    key: 'handleTableChange',
	    value: function handleTableChange(pagination) {
	      var pager = this.state.pagination;
	      pager.current = pagination.current;
	      this.setState({
	        pagination: pager
	      });
	      this.fetch({
	        page: pagination.current
	      });
	    }
	  }, {
	    key: 'handleTypeChange',
	    value: function handleTypeChange(value) {
	      var state = this.state;
	      state.filter.type = value;
	      this.setState(state);
	    }
	  }, {
	    key: 'handleDateChange',
	    value: function handleDateChange(value) {
	      var state = this.state;
	      state.filter.rangeDate = value;
	      state.filter.startDate = value[0] ? Format.date(value[0].getTime(), 'yyyy-MM-dd') : '';
	      state.filter.endDate = value[1] ? Format.date(value[1].getTime(), 'yyyy-MM-dd') + " 23:59:59" : '';
	      this.setState(state);
	    }
	  }, {
	    key: 'handleSearch',
	    value: function handleSearch() {
	      var state = this.state;
	      // 复制搜索条件
	      state.searchFilter = {
	        type: state.filter.type,
	        startDate: state.filter.startDate,
	        endDate: state.filter.endDate
	      };
	      state.pagination.current = 1;
	      this.setState(state);
	      this.fetch();
	    }
	  }, {
	    key: 'handleReset',
	    value: function handleReset() {
	      var state = this.state;
	      state.searchFilter = {
	        type: '0',
	        startDate: '',
	        endDate: ''
	      };
	      state.filter = {
	        type: '0',
	        startDate: '',
	        endDate: '',
	        rangeDate: []
	      };
	      state.pagination.current = 1;
	      this.setState(state);
	      this.fetch();
	    }
	  }, {
	    key: 'fetch',
	    value: function fetch() {
	      var _this3 = this;
	
	      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      var filter = this.state.searchFilter;
	      if (filter.type != '0') params.type = [parseInt(filter.type)];
	      if (filter.startDate) params.startTime = parseInt(new Date(filter.startDate.replace(/-/g, "/")).getTime()) / 1000;
	      if (filter.endDate) params.endTime = parseInt(new Date(filter.endDate.replace(/-/g, "/")).getTime()) / 1000;
	      params.pageSize = this.state.pagination.pageSize;
	      this.setState({ loading: true });
	      _ApiCaller2.default.call(_Api2.default.user.getTradeList, params, function (res) {
	        var pagination = _this3.state.pagination;
	        pagination.total = parseInt(res.total);
	        _this3.setState({
	          loading: false,
	          data: res.datas,
	          pagination: pagination
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'tradehis' },
	        _react2.default.createElement(
	          _antd.Row,
	          { style: { paddingTop: '30px' } },
	          _react2.default.createElement(
	            _antd.Col,
	            { span: '24' },
	            _react2.default.createElement(
	              _antd.Select,
	              { defaultValue: '0', value: this.state.filter.type, style: { width: '160px' }, onChange: this.handleTypeChange.bind(this) },
	              _react2.default.createElement(
	                Option,
	                { value: '0', key: '0' },
	                '\u5168\u90E8\u7C7B\u578B'
	              ),
	              this.state.typeData.map(function (item) {
	                return _react2.default.createElement(
	                  Option,
	                  { value: item.code, key: item.code },
	                  item.text
	                );
	              })
	            ),
	            '\xA0\xA0',
	            _react2.default.createElement(RangePicker, { style: { width: 184 }, value: this.state.filter.rangeDate, onChange: this.handleDateChange.bind(this) }),
	            '\xA0\xA0',
	            _react2.default.createElement(
	              _antd.Button,
	              { type: 'primary', onClick: this.handleSearch.bind(this) },
	              '\u67E5\u8BE2'
	            ),
	            '\xA0\xA0',
	            _react2.default.createElement(
	              _antd.Button,
	              { type: 'ghost', onClick: this.handleReset.bind(this) },
	              '\u91CD\u7F6E'
	            )
	          )
	        ),
	        _react2.default.createElement(_antd.Table, {
	          style: { paddingTop: 18 },
	          rowKey: this.buildRowKey,
	          columns: columns,
	          dataSource: this.state.data,
	          pagination: this.state.pagination,
	          loading: this.state.loading,
	          onChange: this.handleTableChange.bind(this) })
	      );
	    }
	  }]);
	
	  return TradeHis;
	}(_react2.default.Component);
	
	exports.default = TradeHis;
	
	module.exports = exports['default'];

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(39);
	
	var _reactRedux = __webpack_require__(18);
	
	var _actions = __webpack_require__(24);
	
	var Actions = _interopRequireWildcard(_actions);
	
	var _redux = __webpack_require__(11);
	
	var _reactImmutableRenderMixin = __webpack_require__(89);
	
	var _Api = __webpack_require__(16);
	
	var _Api2 = _interopRequireDefault(_Api);
	
	var _ApiCaller = __webpack_require__(17);
	
	var _ApiCaller2 = _interopRequireDefault(_ApiCaller);
	
	var _ValidateHelper = __webpack_require__(72);
	
	var _ValidateHelper2 = _interopRequireDefault(_ValidateHelper);
	
	var _Format = __webpack_require__(35);
	
	var Format = _interopRequireWildcard(_Format);
	
	var _Security = __webpack_require__(71);
	
	var _Security2 = _interopRequireDefault(_Security);
	
	var _antd = __webpack_require__(9);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FormItem = _antd.Form.Item;
	var Option = _antd.Select.Option;
	
	function bankNoHide(bankNo) {
	  return !!bankNo ? bankNo.substr(0, 4) + ' **** ' + bankNo.substr(bankNo.length - 4) : '';
	}
	
	/**
	  * 提现
	**/
	
	var Withdraw = function (_React$Component) {
	  _inherits(Withdraw, _React$Component);
	
	  function Withdraw(props) {
	    _classCallCheck(this, Withdraw);
	
	    var _this = _possibleConstructorReturn(this, (Withdraw.__proto__ || Object.getPrototypeOf(Withdraw)).call(this, props));
	
	    _this.state = {
	      loading: false
	    };
	    _this.shouldComponentUpdate = _reactImmutableRenderMixin.shouldComponentUpdate.bind(_this);
	    return _this;
	  }
	
	  // 绑定银行卡
	
	
	  _createClass(Withdraw, [{
	    key: 'handleBindCardClick',
	    value: function handleBindCardClick() {
	      this.props.actions.showCardBindDialog(true);
	    }
	
	    // 验证提现金额有效性
	
	  }, {
	    key: 'checkAmount',
	    value: function checkAmount(rule, value, callback) {
	      if (_ValidateHelper2.default.amount(value) && value != 0) {
	        if (value > this.props.user.get('assets').get('available')) callback('余额不足');else callback();
	      } else callback(new Error('请输入有效的金额'));
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      var _this2 = this;
	
	      e.preventDefault();
	      var fieldsVal = this.props.form.getFieldsValue();
	      this.props.form.validateFields(function (errors, values) {
	        if (!!errors) {
	          for (var error in errors) {
	            _antd.Modal.error({
	              title: '错误',
	              content: errors[error].errors[0].message
	            });
	            return;
	          }
	        }
	        if (!errors) {
	          if (_this2.props.user.get('baseInfo').get('authStatus') != 1) {
	            _antd.Modal.error({
	              title: '错误',
	              content: '请先绑定银行卡'
	            });
	            return;
	          }
	          _this2.setState({
	            loading: true
	          });
	          _ApiCaller2.default.call(_Api2.default.user.getWithdraw, {
	            //passwd: Security.encryptMd5(fieldsVal.tradePwd),
	            //bankNo: fieldsVal.bankNo,
	            transPwd: _Security2.default.encryptMd5(fieldsVal.tradePwd),
	            amount: fieldsVal.amount
	          }, function (res) {
	            _this2.setState({
	              loading: false
	            });
	            if (res.code == 0) {
	              _this2.props.actions.loadUserStrategyAssets();
	              _this2.props.form.resetFields();
	              _antd.Modal.success({
	                title: '成功',
	                content: '提现申请已提交'
	              });
	            } else {
	              _antd.Modal.error({
	                title: '错误',
	                content: res.msg
	              });
	            }
	          });
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var getFieldProps = this.props.form.getFieldProps;
	
	      var formItemLayout = {
	        labelCol: { span: 3 },
	        wrapperCol: { span: 7 }
	      };
	      var hasBoundCard = this.props.user.get('baseInfo').get('authStatus') == 1;
	      var tradePwdSetted = this.props.user.get('baseInfo').get('transPwd') ? true : false;
	      var cardHelpClass = (0, _classnames2.default)({
	        hide: !hasBoundCard
	      });
	      var cardSelectClass = (0, _classnames2.default)({
	        "withdraw-card-container": true,
	        hide: !hasBoundCard
	      });
	      var goBindCardClass = (0, _classnames2.default)({
	        "bind-card-desc": true,
	        hide: hasBoundCard
	      });
	      var tradePwdInputClass = (0, _classnames2.default)({
	        hide: !tradePwdSetted
	      });
	      var goSetTradePwdClass = (0, _classnames2.default)({
	        hide: tradePwdSetted
	      });
	      var amountProps = getFieldProps('amount', {
	        rules: [{ required: true, whitespace: true, message: '请输入您要提现的金额' }, { validator: this.checkAmount.bind(this) }]
	      });
	      var tradePwdProps = getFieldProps('tradePwd', {
	        rules: [{ required: true, whitespace: true, message: '请输入您的交易密码' }]
	      });
	      var userBankCardList = this.props.user.get('bankCardList');
	      var bankImg = userBankCardList.size > 0 ? '//static.ddy98.com/front/1.0.0/images/banks/' + userBankCardList.get(0).alias + '.png' : '';
	      var bankNo = userBankCardList.size > 0 ? userBankCardList.get(0).bankNo.substr(-4) : '';
	      // const bankCards = this.props.user.get('bankCardList').toArray().map((item, index)=>{
	      //   const cardText = `${item.bankName} ${item.bankNo}`
	      //   return (<Option key={index} value={index}>{cardText}</Option>)
	      // })
	      var bankCard = this.props.user.get('bankCardList').get(0) || {};
	      return _react2.default.createElement(
	        'div',
	        { className: 'withdraw' },
	        _react2.default.createElement(
	          'div',
	          { className: 'item' },
	          _react2.default.createElement(
	            _antd.Form,
	            { horizontal: true, form: this.props.form, onSubmit: this.handleSubmit.bind(this) },
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                label: '\u94B1\u5305\u4F59\u989D' }),
	              _react2.default.createElement(
	                'p',
	                { className: 'ant-form-text' },
	                Format.fixed(this.props.user.get('assets').get('available'))
	              )
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                label: '\u63D0\u73B0\u91D1\u989D',
	                style: { marginTop: 20 } }),
	              _react2.default.createElement(_antd.Input, _extends({}, amountProps, { placeholder: '\u8BF7\u8F93\u5165\u60A8\u8981\u63D0\u73B0\u7684\u91D1\u989D', addonAfter: '\u5143' }))
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'input-desc' },
	              '\u63D0\u73B0\u6709\u95EE\u9898\uFF1F\u5728\u7EBF',
	              _react2.default.createElement(
	                'a',
	                { className: 'red-value', href: '//wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzkzODAxNTM4MF8zMTM5MDdfNDAwNzExMTI4OF8yXw', target: '_blank' },
	                '\u8054\u7CFB\u5BA2\u670D'
	              ),
	              '\u6216\u62E8\u6253400-7111-288\u54A8\u8BE2'
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                label: '\u63D0\u73B0\u94F6\u884C\u5361',
	                style: { marginTop: 20 },
	                help: _react2.default.createElement(
	                  'b',
	                  { className: cardHelpClass, style: { fontSize: 12 } },
	                  '\u66F4\u6362\u94F6\u884C\u5361\uFF0C\u8BF7\u8054\u7CFB\u5BA2\u670D 400-7111-288'
	                ) }),
	              _react2.default.createElement(
	                'div',
	                { className: cardSelectClass },
	                _react2.default.createElement('img', { src: bankImg }),
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  '\u5C3E\u53F7 ',
	                  bankNo
	                )
	              ),
	              _react2.default.createElement(
	                'p',
	                { className: goBindCardClass },
	                '\u672A\u7ED1\u5B9A\u94F6\u884C\u5361',
	                _react2.default.createElement(
	                  'a',
	                  { onClick: this.handleBindCardClick.bind(this), style: { marginLeft: 44 } },
	                  '\u7ACB\u5373\u7ED1\u5B9A>'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                className: tradePwdInputClass,
	                hasFeedback: true,
	                label: '\u4EA4\u6613\u5BC6\u7801',
	                style: { marginTop: 30 } }),
	              _react2.default.createElement(_antd.Input, _extends({}, tradePwdProps, { type: 'password', placeholder: '\u8BF7\u8F93\u5165\u4EA4\u6613\u5BC6\u7801' }))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                className: goSetTradePwdClass,
	                label: '\u4EA4\u6613\u5BC6\u7801',
	                style: { marginTop: 30 } }),
	              _react2.default.createElement(
	                'p',
	                { className: 'bind-card-desc' },
	                '\u672A\u8BBE\u7F6E\u4EA4\u6613\u5BC6\u7801',
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { to: '/center/accountsafety' },
	                  '\u524D\u53BB\u8BBE\u7F6E>'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              _antd.Row,
	              { style: { margin: '30px 0' } },
	              _react2.default.createElement(
	                _antd.Col,
	                { span: '1', offset: '3' },
	                _react2.default.createElement(
	                  _antd.Button,
	                  { type: 'primary', htmlType: 'submit', loading: this.state.loading },
	                  '\u786E\u8BA4\u63D0\u73B0'
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'item remarks' },
	          _react2.default.createElement(
	            'h2',
	            null,
	            '\u5173\u4E8E\u63D0\u73B0\u624B\u7EED\u8D39'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            '1.\u4E3A\u9632\u6B62\u9891\u7E41\u975E\u6B63\u5E38\u6295\u8D44\u4E3A\u76EE\u7684\u7684\u8D44\u91D1\u5145\u63D0\u884C\u4E3A\uFF08\u5957\u73B0\u3001\u6D17\u94B1\u3001\u533F\u540D\u8F6C\u8D26\u7B49\uFF09\uFF0C\u5145\u503C\u540E24\u5C0F\u65F6\u5185\u672A\u6295\u8D44\u7684\u91D1\u989D\u63D0\u73B0\u5C06\u6536\u53D60.5%\u7684\u624B\u7EED\u8D39\u4F5C\u4E3A\u7B2C\u4E09\u65B9\u652F\u4ED8\u5E73\u53F0\u7684\u670D\u52A1\u8D39\u7528\u3002'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            '2..\u514D\u8D39\u63D0\u73B0\u989D\u5EA6\u5C06\u6839\u636E\u60A8\u7684\u5145\u503C\u63D0\u73B0\u65F6\u95F4\u8BA1\u7B97\uFF0C\u6B63\u5E38\u6295\u8D44\u56DE\u6B3E\u7684\u63D0\u73B0\u57FA\u672C\u4E0D\u4F1A\u53D7\u5F71\u54CD\uFF0C\u656C\u8BF7\u6295\u8D44\u8005\u653E\u5FC3\u3002\u4EE5\u4E0A\u6700\u7EC8\u89E3\u91CA\u6743\u5F52\u672C\u5E73\u53F0\u6240\u6709\u3002'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'middle' },
	            _react2.default.createElement(
	              'div',
	              { className: 'box' },
	              _react2.default.createElement(
	                'h2',
	                null,
	                '\u63D0\u6B3ET+0\u5230\u8D26'
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                '\u6700\u5FEB30\u5206\u949F\uFF0C\u4E00\u822C\u60C5\u51B5T+0(\u5F53\u5929)\u5230\u8D26',
	                _react2.default.createElement('br', null),
	                '\u6CD5\u5B9A\u8282\u5047\u65E5\u6216\u94F6\u884C\u7279\u6B8A\u539F\u56E0\u9664\u5916'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'box' },
	              _react2.default.createElement(
	                'h2',
	                null,
	                '\u652F\u6301\u94F6\u884C\u8FBE10\u591A\u5BB6'
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                '\u63A8\u8350\u60A8\u4F7F\u7528\u5DE5\u5546\u94F6\u884C\u3001\u5EFA\u8BBE\u94F6\u884C\u3001',
	                _react2.default.createElement('br', null),
	                '\u62DB\u5546\u94F6\u884C\u3001\u519C\u4E1A\u94F6\u884C\u8FDB\u884C\u63D0\u73B0\uFF0C\u5230\u8D26\u6700\u5FEB'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            '\u6E29\u99A8\u63D0\u793A\uFF1A\u7981\u6B62\u6D17\u94B1\u3001\u4FE1\u7528\u5361\u5957\u73B0\u3001\u865A\u5047\u4EA4\u6613\u7B49\u884C\u4E3A\uFF0C\u4E00\u7ECF\u53D1\u73B0\u5E76\u786E\u8BA4\uFF0C\u5C06\u7EC8\u6B62\u8BE5\u8D26\u6237\u7684\u4F7F\u7528\u3002'
	          )
	        )
	      );
	    }
	  }]);
	
	  return Withdraw;
	}(_react2.default.Component);
	
	Withdraw = _antd.Form.create()(Withdraw);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    user: state.user
	  };
	}, function (dispath) {
	  return {
	    actions: (0, _redux.bindActionCreators)(Actions, dispath)
	  };
	})(Withdraw);
	
	module.exports = exports['default'];

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(463)


/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

	var _version = '1.4.2';
	var _code = __webpack_require__(191).code;
	var _utils = __webpack_require__(192).utils;
	var _msg = __webpack_require__(464);
	var _message = _msg._msg;
	var _msgHash = {};
	var Queue = __webpack_require__(465).Queue;
	
	window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
	
	if (window.XDomainRequest) {
	    XDomainRequest.prototype.oldsend = XDomainRequest.prototype.send;
	    XDomainRequest.prototype.send = function () {
	        XDomainRequest.prototype.oldsend.apply(this, arguments);
	        this.readyState = 2;
	    };
	}
	
	Strophe.Request.prototype._newXHR = function () {
	    var xhr = _utils.xmlrequest(true);
	    if (xhr.overrideMimeType) {
	        xhr.overrideMimeType('text/xml');
	    }
	    // use Function.bind() to prepend ourselves as an argument
	    xhr.onreadystatechange = this.func.bind(null, this);
	    return xhr;
	};
	
	Strophe.Websocket.prototype._closeSocket = function () {
	    if (this.socket) {
	        var me = this;
	        setTimeout(function () {
	            try {
	                me.socket.close();
	            } catch (e) {
	            }
	        }, 0);
	    } else {
	        this.socket = null;
	    }
	};
	
	/**
	 *
	 * Strophe.Websocket has a bug while logout:
	 * 1.send: <presence xmlns='jabber:client' type='unavailable'/> is ok;
	 * 2.send: <close xmlns='urn:ietf:params:xml:ns:xmpp-framing'/> will cause a problem,log as follows:
	 * WebSocket connection to 'ws://im-api.easemob.com/ws/' failed: Data frame received after close_connect @ strophe.js:5292connect @ strophe.js:2491_login @ websdk-1.1.2.js:278suc @ websdk-1.1.2.js:636xhr.onreadystatechange @ websdk-1.1.2.js:2582
	 * 3 "Websocket error [object Event]"
	 * _changeConnectStatus
	 * onError Object {type: 7, msg: "The WebSocket connection could not be established or was disconnected.", reconnect: true}
	 *
	 * this will trigger socket.onError, therefore _doDisconnect again.
	 * Fix it by overide  _onMessage
	 */
	Strophe.Websocket.prototype._onMessage = function (message) {
	    WebIM && WebIM.config.isDebug && console.log(WebIM.utils.ts() + 'recv:', message.data);
	    var elem, data;
	    // check for closing stream
	    // var close = '<close xmlns="urn:ietf:params:xml:ns:xmpp-framing" />';
	    // if (message.data === close) {
	    //     this._conn.rawInput(close);
	    //     this._conn.xmlInput(message);
	    //     if (!this._conn.disconnecting) {
	    //         this._conn._doDisconnect();
	    //     }
	    //     return;
	    //
	    // send and receive close xml: <close xmlns='urn:ietf:params:xml:ns:xmpp-framing'/>
	    // so we can't judge whether message.data equals close by === simply.
	    if (message.data.indexOf("<close ") === 0) {
	        elem = new DOMParser().parseFromString(message.data, "text/xml").documentElement;
	        var see_uri = elem.getAttribute("see-other-uri");
	        if (see_uri) {
	            this._conn._changeConnectStatus(Strophe.Status.REDIRECT, "Received see-other-uri, resetting connection");
	            this._conn.reset();
	            this._conn.service = see_uri;
	            this._connect();
	        } else {
	            // if (!this._conn.disconnecting) {
	            this._conn._doDisconnect("receive <close> from server");
	            // }
	        }
	        return;
	    } else if (message.data.search("<open ") === 0) {
	        // This handles stream restarts
	        elem = new DOMParser().parseFromString(message.data, "text/xml").documentElement;
	        if (!this._handleStreamStart(elem)) {
	            return;
	        }
	    } else {
	        data = this._streamWrap(message.data);
	        elem = new DOMParser().parseFromString(data, "text/xml").documentElement;
	    }
	
	    if (this._check_streamerror(elem, Strophe.Status.ERROR)) {
	        return;
	    }
	
	    //handle unavailable presence stanza before disconnecting
	    if (this._conn.disconnecting &&
	        elem.firstChild.nodeName === "presence" &&
	        elem.firstChild.getAttribute("type") === "unavailable") {
	        this._conn.xmlInput(elem);
	        this._conn.rawInput(Strophe.serialize(elem));
	        // if we are already disconnecting we will ignore the unavailable stanza and
	        // wait for the </stream:stream> tag before we close the connection
	        return;
	    }
	    this._conn._dataRecv(elem, message.data);
	};
	
	
	var _listenNetwork = function (onlineCallback, offlineCallback) {
	
	    if (window.addEventListener) {
	        window.addEventListener('online', onlineCallback);
	        window.addEventListener('offline', offlineCallback);
	
	    } else if (window.attachEvent) {
	        if (document.body) {
	            document.body.attachEvent('ononline', onlineCallback);
	            document.body.attachEvent('onoffline', offlineCallback);
	        } else {
	            window.attachEvent('load', function () {
	                document.body.attachEvent('ononline', onlineCallback);
	                document.body.attachEvent('onoffline', offlineCallback);
	            });
	        }
	    } else {
	        /*var onlineTmp = window.ononline;
	         var offlineTmp = window.onoffline;
	
	         window.attachEvent('ononline', function () {
	         try {
	         typeof onlineTmp === 'function' && onlineTmp();
	         } catch ( e ) {}
	         onlineCallback();
	         });
	         window.attachEvent('onoffline', function () {
	         try {
	         typeof offlineTmp === 'function' && offlineTmp();
	         } catch ( e ) {}
	         offlineCallback();
	         });*/
	    }
	};
	
	var _parseRoom = function (result) {
	    var rooms = [];
	    var items = result.getElementsByTagName('item');
	    if (items) {
	        for (var i = 0; i < items.length; i++) {
	            var item = items[i];
	            var roomJid = item.getAttribute('jid');
	            var tmp = roomJid.split('@')[0];
	            var room = {
	                jid: roomJid,
	                name: item.getAttribute('name'),
	                roomId: tmp.split('_')[1]
	            };
	            rooms.push(room);
	        }
	    }
	    return rooms;
	};
	
	var _parseRoomOccupants = function (result) {
	    var occupants = [];
	    var items = result.getElementsByTagName('item');
	    if (items) {
	        for (var i = 0; i < items.length; i++) {
	            var item = items[i];
	            var room = {
	                jid: item.getAttribute('jid'),
	                name: item.getAttribute('name')
	            };
	            occupants.push(room);
	        }
	    }
	    return occupants;
	};
	
	var _parseResponseMessage = function (msginfo) {
	    var parseMsgData = {errorMsg: true, data: []};
	
	    var msgBodies = msginfo.getElementsByTagName('body');
	    if (msgBodies) {
	        for (var i = 0; i < msgBodies.length; i++) {
	            var msgBody = msgBodies[i];
	            var childNodes = msgBody.childNodes;
	            if (childNodes && childNodes.length > 0) {
	                var childNode = msgBody.childNodes[0];
	                if (childNode.nodeType == Strophe.ElementType.TEXT) {
	                    var jsondata = childNode.wholeText || childNode.nodeValue;
	                    jsondata = jsondata.replace('\n', '<br>');
	                    try {
	                        var data = eval('(' + jsondata + ')');
	                        parseMsgData.errorMsg = false;
	                        parseMsgData.data = [data];
	                    } catch (e) {
	                    }
	                }
	            }
	        }
	
	        var delayTags = msginfo.getElementsByTagName('delay');
	        if (delayTags && delayTags.length > 0) {
	            var delayTag = delayTags[0];
	            var delayMsgTime = delayTag.getAttribute('stamp');
	            if (delayMsgTime) {
	                parseMsgData.delayTimeStamp = delayMsgTime;
	            }
	        }
	    } else {
	        var childrens = msginfo.childNodes;
	        if (childrens && childrens.length > 0) {
	            var child = msginfo.childNodes[0];
	            if (child.nodeType == Strophe.ElementType.TEXT) {
	                try {
	                    var data = eval('(' + child.nodeValue + ')');
	                    parseMsgData.errorMsg = false;
	                    parseMsgData.data = [data];
	                } catch (e) {
	                }
	            }
	        }
	    }
	    return parseMsgData;
	};
	
	var _parseNameFromJidFn = function (jid, domain) {
	    domain = domain || '';
	    var tempstr = jid;
	    var findex = tempstr.indexOf('_');
	
	    if (findex !== -1) {
	        tempstr = tempstr.substring(findex + 1);
	    }
	    var atindex = tempstr.indexOf('@' + domain);
	    if (atindex !== -1) {
	        tempstr = tempstr.substring(0, atindex);
	    }
	    return tempstr;
	};
	
	var _parseFriend = function (queryTag, conn, from) {
	    var rouster = [];
	    var items = queryTag.getElementsByTagName('item');
	    if (items) {
	        for (var i = 0; i < items.length; i++) {
	            var item = items[i];
	            var jid = item.getAttribute('jid');
	            if (!jid) {
	                continue;
	            }
	            var subscription = item.getAttribute('subscription');
	            var friend = {
	                subscription: subscription,
	                jid: jid
	            };
	            var ask = item.getAttribute('ask');
	            if (ask) {
	                friend.ask = ask;
	            }
	            var name = item.getAttribute('name');
	            if (name) {
	                friend.name = name;
	            } else {
	                var n = _parseNameFromJidFn(jid);
	                friend.name = n;
	            }
	            var groups = [];
	            Strophe.forEachChild(item, 'group', function (group) {
	                groups.push(Strophe.getText(group));
	            });
	            friend.groups = groups;
	            rouster.push(friend);
	            // B同意之后 -> B订阅A
	            if (conn && (subscription == 'from')) {
	                conn.subscribe({
	                    toJid: jid
	                });
	            }
	
	            if (conn && (subscription == 'to')) {
	                conn.subscribed({
	                    toJid: jid
	                });
	            }
	        }
	    }
	    return rouster;
	};
	
	var _login = function (options, conn) {
	    var accessToken = options.access_token || '';
	    if (accessToken == '') {
	        var loginfo = _utils.stringify(options);
	        conn.onError({
	            type: _code.WEBIM_CONNCTION_OPEN_USERGRID_ERROR,
	            data: options
	        });
	        return;
	    }
	    conn.context.accessToken = options.access_token;
	    conn.context.accessTokenExpires = options.expires_in;
	    var stropheConn = null;
	    if (conn.isOpening() && conn.context.stropheConn) {
	        stropheConn = conn.context.stropheConn;
	    } else if (conn.isOpened() && conn.context.stropheConn) {
	        // return;
	        stropheConn = conn.getStrophe();
	    } else {
	        stropheConn = conn.getStrophe();
	    }
	    var callback = function (status, msg) {
	        _loginCallback(status, msg, conn);
	    };
	
	    conn.context.stropheConn = stropheConn;
	    if (conn.route) {
	        stropheConn.connect(conn.context.jid, '$t$' + accessToken, callback, conn.wait, conn.hold, conn.route);
	    } else {
	        stropheConn.connect(conn.context.jid, '$t$' + accessToken, callback, conn.wait, conn.hold);
	    }
	};
	
	var _parseMessageType = function (msginfo) {
	    var msgtype = 'normal';
	    var receiveinfo = msginfo.getElementsByTagName('received');
	    if (receiveinfo && receiveinfo.length > 0 && receiveinfo[0].namespaceURI === 'urn:xmpp:receipts') {
	        msgtype = 'received';
	    } else {
	        var inviteinfo = msginfo.getElementsByTagName('invite');
	        if (inviteinfo && inviteinfo.length > 0) {
	            msgtype = 'invite';
	        }
	    }
	    return msgtype;
	};
	
	var _handleMessageQueue = function (conn) {
	    for (var i in _msgHash) {
	        if (_msgHash.hasOwnProperty(i)) {
	            _msgHash[i].send(conn);
	        }
	    }
	};
	
	var _loginCallback = function (status, msg, conn) {
	    var conflict, error;
	
	    if (msg === 'conflict') {
	        conflict = true;
	    }
	
	    if (status == Strophe.Status.CONNFAIL) {
	        //client offline, ping/pong timeout, server quit, server offline
	        error = {
	            type: _code.WEBIM_CONNCTION_SERVER_CLOSE_ERROR,
	            msg: msg,
	            reconnect: true
	        };
	
	        conflict && (error.conflict = true);
	        conn.onError(error);
	    } else if (status == Strophe.Status.ATTACHED || status == Strophe.Status.CONNECTED) {
	        // client should limit the speed of sending ack messages  up to 5/s
	        conn.autoReconnectNumTotal = 0;
	        conn.intervalId = setInterval(function () {
	            conn.handelSendQueue();
	        }, 200);
	        var handleMessage = function (msginfo) {
	            var type = _parseMessageType(msginfo);
	
	            if ('received' === type) {
	                conn.handleReceivedMessage(msginfo);
	                return true;
	            } else if ('invite' === type) {
	                conn.handleInviteMessage(msginfo);
	                return true;
	            } else {
	                conn.handleMessage(msginfo);
	                return true;
	            }
	        };
	        var handlePresence = function (msginfo) {
	            conn.handlePresence(msginfo);
	            return true;
	        };
	        var handlePing = function (msginfo) {
	            conn.handlePing(msginfo);
	            return true;
	        };
	        var handleIqRoster = function (msginfo) {
	            conn.handleIqRoster(msginfo);
	            return true;
	        };
	        var handleIqPrivacy = function (msginfo) {
	            conn.handleIqPrivacy(msginfo);
	            return true;
	        };
	        var handleIq = function (msginfo) {
	            conn.handleIq(msginfo);
	            return true;
	        };
	
	        conn.addHandler(handleMessage, null, 'message', null, null, null);
	        conn.addHandler(handlePresence, null, 'presence', null, null, null);
	        conn.addHandler(handlePing, 'urn:xmpp:ping', 'iq', 'get', null, null);
	        conn.addHandler(handleIqRoster, 'jabber:iq:roster', 'iq', 'set', null, null);
	        conn.addHandler(handleIqPrivacy, 'jabber:iq:privacy', 'iq', 'set', null, null);
	        conn.addHandler(handleIq, null, 'iq', null, null, null);
	
	        conn.registerConfrIQHandler && (conn.registerConfrIQHandler());
	
	        conn.context.status = _code.STATUS_OPENED;
	
	        var supportRecMessage = [
	            _code.WEBIM_MESSAGE_REC_TEXT,
	            _code.WEBIM_MESSAGE_REC_EMOJI];
	
	        if (_utils.isCanDownLoadFile) {
	            supportRecMessage.push(_code.WEBIM_MESSAGE_REC_PHOTO);
	            supportRecMessage.push(_code.WEBIM_MESSAGE_REC_AUDIO_FILE);
	        }
	        var supportSedMessage = [_code.WEBIM_MESSAGE_SED_TEXT];
	        if (_utils.isCanUploadFile) {
	            supportSedMessage.push(_code.WEBIM_MESSAGE_REC_PHOTO);
	            supportSedMessage.push(_code.WEBIM_MESSAGE_REC_AUDIO_FILE);
	        }
	        conn.notifyVersion();
	        conn.retry && _handleMessageQueue(conn);
	        conn.heartBeat();
	        conn.isAutoLogin && conn.setPresence();
	        conn.onOpened({
	            canReceive: supportRecMessage,
	            canSend: supportSedMessage,
	            accessToken: conn.context.accessToken
	        });
	    } else if (status == Strophe.Status.DISCONNECTING) {
	        if (conn.isOpened()) {
	            conn.stopHeartBeat();
	            conn.context.status = _code.STATUS_CLOSING;
	
	            error = {
	                type: _code.WEBIM_CONNCTION_SERVER_CLOSE_ERROR,
	                msg: msg,
	                reconnect: true
	            };
	
	            conflict && (error.conflict = true);
	            conn.onError(error);
	        }
	    } else if (status == Strophe.Status.DISCONNECTED) {
	        if (conn.isOpened()) {
	            if (conn.autoReconnectNumTotal < conn.autoReconnectNumMax) {
	                conn.reconnect();
	                return;
	            } else {
	                error = {
	                    type: _code.WEBIM_CONNCTION_DISCONNECTED
	                };
	                conn.onError(error);
	            }
	        }
	        conn.context.status = _code.STATUS_CLOSED;
	        conn.clear();
	        conn.onClosed();
	    } else if (status == Strophe.Status.AUTHFAIL) {
	        error = {
	            type: _code.WEBIM_CONNCTION_AUTH_ERROR
	        };
	
	        conflict && (error.conflict = true);
	        conn.onError(error);
	        conn.clear();
	    } else if (status == Strophe.Status.ERROR) {
	        conn.context.status = _code.STATUS_ERROR;
	        error = {
	            type: _code.WEBIM_CONNCTION_SERVER_ERROR
	        };
	
	        conflict && (error.conflict = true);
	        conn.onError(error);
	    }
	    conn.context.status_now = status;
	};
	
	var _getJid = function (options, conn) {
	    var jid = options.toJid || '';
	
	    if (jid === '') {
	        var appKey = conn.context.appKey || '';
	        var toJid = appKey + '_' + options.to + '@' + conn.domain;
	
	        if (options.resource) {
	            toJid = toJid + '/' + options.resource;
	        }
	        jid = toJid;
	    }
	    return jid;
	};
	
	var _getJidByName = function (name, conn) {
	    var options = {
	        to: name
	    };
	    return _getJid(options, conn);
	};
	
	var _validCheck = function (options, conn) {
	    options = options || {};
	
	    if (options.user == '') {
	        conn.onError({
	            type: _code.WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR
	        });
	        return false;
	    }
	
	    var user = (options.user + '') || '';
	    var appKey = options.appKey || '';
	    var devInfos = appKey.split('#');
	
	    if (devInfos.length !== 2) {
	        conn.onError({
	            type: _code.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR
	        });
	        return false;
	    }
	    var orgName = devInfos[0];
	    var appName = devInfos[1];
	
	    if (!orgName) {
	        conn.onError({
	            type: _code.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR
	        });
	        return false;
	    }
	    if (!appName) {
	        conn.onError({
	            type: _code.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR
	        });
	        return false;
	    }
	
	    var jid = appKey + '_' + user.toLowerCase() + '@' + conn.domain,
	        resource = options.resource || 'webim';
	
	    if (conn.isMultiLoginSessions) {
	        resource += user + new Date().getTime() + Math.floor(Math.random().toFixed(6) * 1000000);
	    }
	    conn.context.jid = jid + '/' + resource;
	    /*jid: {appkey}_{username}@domain/resource*/
	    conn.context.userId = user;
	    conn.context.appKey = appKey;
	    conn.context.appName = appName;
	    conn.context.orgName = orgName;
	
	    return true;
	};
	
	var _getXmppUrl = function (baseUrl, https) {
	    if (/^(ws|http)s?:\/\/?/.test(baseUrl)) {
	        return baseUrl;
	    }
	
	    var url = {
	        prefix: 'http',
	        base: '://' + baseUrl,
	        suffix: '/http-bind/'
	    };
	
	    if (https && _utils.isSupportWss) {
	        url.prefix = 'wss';
	        url.suffix = '/ws/';
	    } else {
	        if (https) {
	            url.prefix = 'https';
	        } else if (window.WebSocket) {
	            url.prefix = 'ws';
	            url.suffix = '/ws/';
	        }
	    }
	
	    return url.prefix + url.base + url.suffix;
	};
	
	
	//class
	var connection = function (options) {
	    if (!this instanceof connection) {
	        return new connection(options);
	    }
	
	    var options = options || {};
	
	    this.isHttpDNS = options.isHttpDNS || false;
	    this.isMultiLoginSessions = options.isMultiLoginSessions || false;
	    this.wait = options.wait || 30;
	    this.retry = options.retry || false;
	    this.https = options.https || location.protocol === 'https:';
	    this.url = _getXmppUrl(options.url, this.https);
	    this.hold = options.hold || 1;
	    this.route = options.route || null;
	    this.domain = options.domain || 'easemob.com';
	    this.inactivity = options.inactivity || 30;
	    this.heartBeatWait = options.heartBeatWait || 4500;
	    this.maxRetries = options.maxRetries || 5;
	    this.isAutoLogin = options.isAutoLogin === false ? false : true;
	    this.pollingTime = options.pollingTime || 800;
	    this.stropheConn = false;
	    this.autoReconnectNumMax = options.autoReconnectNumMax || 0;
	    this.autoReconnectNumTotal = 0;
	    this.autoReconnectInterval = options.autoReconnectInterval || 0;
	    this.context = {status: _code.STATUS_INIT};
	    this.sendQueue = new Queue();  //instead of sending message immediately,cache them in this queue
	    this.intervalId = null;   //clearInterval return value
	    this.apiUrl = options.apiUrl || '';
	    this.isWindowSDK = options.isWindowSDK || false;
	
	    this.dnsArr = ['https://rs.easemob.com', 'https://rsbak.easemob.com', 'http://182.92.174.78', 'http://112.126.66.111']; //http dns server hosts
	    this.dnsIndex = 0;   //the dns ip used in dnsArr currently
	    this.dnsTotal = this.dnsArr.length;  //max number of getting dns retries
	    this.restHosts = null; //rest server ips
	    this.restIndex = 0;    //the rest ip used in restHosts currently
	    this.restTotal = 0;    //max number of getting rest token retries
	    this.xmppHosts = null; //xmpp server ips
	    this.xmppIndex = 0;    //the xmpp ip used in xmppHosts currently
	    this.xmppTotal = 0;    //max number of creating xmpp server connection(ws/bosh) retries
	
	    this.groupOption = {};
	};
	
	connection.prototype.registerUser = function (options) {
	    if (location.protocol != 'https:' && this.isHttpDNS) {
	        this.dnsIndex = 0;
	        this.getHttpDNS(options, 'signup');
	    } else {
	        this.signup(options);
	    }
	}
	
	connection.prototype.handelSendQueue = function () {
	    var options = this.sendQueue.pop();
	    if (options !== null) {
	        this.sendReceiptsMessage(options);
	    }
	};
	connection.prototype.listen = function (options) {
	    this.onOpened = options.onOpened || _utils.emptyfn;
	    this.onClosed = options.onClosed || _utils.emptyfn;
	    this.onTextMessage = options.onTextMessage || _utils.emptyfn;
	    this.onEmojiMessage = options.onEmojiMessage || _utils.emptyfn;
	    this.onPictureMessage = options.onPictureMessage || _utils.emptyfn;
	    this.onAudioMessage = options.onAudioMessage || _utils.emptyfn;
	    this.onVideoMessage = options.onVideoMessage || _utils.emptyfn;
	    this.onFileMessage = options.onFileMessage || _utils.emptyfn;
	    this.onLocationMessage = options.onLocationMessage || _utils.emptyfn;
	    this.onCmdMessage = options.onCmdMessage || _utils.emptyfn;
	    this.onPresence = options.onPresence || _utils.emptyfn;
	    this.onRoster = options.onRoster || _utils.emptyfn;
	    this.onError = options.onError || _utils.emptyfn;
	    this.onReceivedMessage = options.onReceivedMessage || _utils.emptyfn;
	    this.onInviteMessage = options.onInviteMessage || _utils.emptyfn;
	    this.onOffline = options.onOffline || _utils.emptyfn;
	    this.onOnline = options.onOnline || _utils.emptyfn;
	    this.onConfirmPop = options.onConfirmPop || _utils.emptyfn;
	    //for WindowSDK start
	    this.onUpdateMyGroupList = options.onUpdateMyGroupList || _utils.emptyfn;
	    this.onUpdateMyRoster = options.onUpdateMyRoster || _utils.emptyfn;
	    //for WindowSDK end
	    this.onBlacklistUpdate = options.onBlacklistUpdate || _utils.emptyfn;
	
	    _listenNetwork(this.onOnline, this.onOffline);
	};
	
	//webrtc需要强制心跳，加个默认为false的参数 向下兼容
	connection.prototype.heartBeat = function (forcing = false) {
	    var me = this;
	    //IE8: strophe auto switch from ws to BOSH, need heartbeat
	    var isNeed = !/^ws|wss/.test(me.url) || /mobile/.test(navigator.userAgent);
	
	    if (this.heartBeatID || (!forcing && !isNeed)) {
	        return;
	    }
	
	    var options = {
	        toJid: this.domain,
	        type: 'normal'
	    };
	    this.heartBeatID = setInterval(function () {
	        me.ping(options);
	    }, this.heartBeatWait);
	};
	
	connection.prototype.stopHeartBeat = function () {
	    if (typeof this.heartBeatID == "number") {
	        this.heartBeatID = clearInterval(this.heartBeatID);
	    }
	};
	
	connection.prototype.sendReceiptsMessage = function (options) {
	    var dom = $msg({
	        from: this.context.jid || '',
	        to: this.domain,
	        id: options.id || ''
	    }).c('received', {
	        xmlns: 'urn:xmpp:receipts',
	        id: options.id || ''
	    });
	    this.sendCommand(dom.tree());
	};
	
	connection.prototype.cacheReceiptsMessage = function (options) {
	    this.sendQueue.push(options);
	};
	
	connection.prototype.getStrophe = function () {
	    if (location.protocol != 'https:' && this.isHttpDNS) {
	        //TODO: try this.xmppTotal times on fail
	        var url = '';
	        var host = this.xmppHosts[this.xmppIndex];
	        var domain = _utils.getXmlFirstChild(host, 'domain');
	        var ip = _utils.getXmlFirstChild(host, 'ip');
	        if (ip) {
	            url = ip.textContent;
	            var port = _utils.getXmlFirstChild(host, 'port');
	            if (port.textContent != '80') {
	                url += ':' + port.textContent;
	            }
	        } else {
	            url = domain.textContent;
	        }
	
	        if (url != '') {
	            var parter = /(.+\/\/).+(\/.+)/;
	            this.url = this.url.replace(parter, "$1" + url + "$2");
	        }
	    }
	
	    var stropheConn = new Strophe.Connection(this.url, {
	        inactivity: this.inactivity,
	        maxRetries: this.maxRetries,
	        pollingTime: this.pollingTime
	    });
	    return stropheConn;
	};
	connection.prototype.getHostsByTag = function (data, tagName) {
	    var tag = _utils.getXmlFirstChild(data, tagName);
	    if (!tag) {
	        console.log(tagName + ' hosts error');
	        return null;
	    }
	    var hosts = tag.getElementsByTagName('hosts');
	    if (hosts.length == 0) {
	        console.log(tagName + ' hosts error2');
	        return null;
	    }
	    return hosts[0].getElementsByTagName('host');
	
	};
	connection.prototype.getRestFromHttpDNS = function (options, type) {
	    if (this.restIndex > this.restTotal) {
	        console.log('rest hosts all tried,quit');
	        return;
	    }
	    var url = '';
	    var host = this.restHosts[this.restIndex];
	    var domain = _utils.getXmlFirstChild(host, 'domain');
	    var ip = _utils.getXmlFirstChild(host, 'ip');
	    if (ip) {
	        var port = _utils.getXmlFirstChild(host, 'port');
	        url = (location.protocol === 'https:' ? 'https:' : 'http:') + '//' + ip.textContent + ':' + port.textContent;
	    } else {
	        url = (location.protocol === 'https:' ? 'https:' : 'http:') + '//' + domain.textContent;
	    }
	
	    if (url != '') {
	        this.apiUrl = url;
	        options.apiUrl = url;
	    }
	
	    if (type == 'login') {
	        this.login(options);
	    } else {
	        this.signup(options);
	    }
	};
	
	connection.prototype.getHttpDNS = function (options, type) {
	    if (this.restHosts) {
	        this.getRestFromHttpDNS(options, type);
	        return;
	    }
	    var self = this;
	    var suc = function (data, xhr) {
	        data = new DOMParser().parseFromString(data, "text/xml").documentElement;
	        //get rest ips
	        var restHosts = self.getHostsByTag(data, 'rest');
	        if (!restHosts) {
	            console.log('rest hosts error3');
	            return;
	        }
	        self.restHosts = restHosts;
	        self.restTotal = restHosts.length;
	
	        //get xmpp ips
	        var xmppHosts = self.getHostsByTag(data, 'xmpp');
	        if (!xmppHosts) {
	            console.log('xmpp hosts error3');
	            return;
	        }
	        self.xmppHosts = xmppHosts;
	        self.xmppTotal = xmppHosts.length;
	
	        self.getRestFromHttpDNS(options, type);
	    };
	    var error = function (res, xhr, msg) {
	
	        console.log('getHttpDNS error', res, msg);
	        self.dnsIndex++;
	        if (self.dnsIndex < self.dnsTotal) {
	            self.getHttpDNS(options, type);
	        }
	
	    };
	    var options2 = {
	        url: this.dnsArr[this.dnsIndex] + '/easemob/server.xml',
	        dataType: 'text',
	        type: 'GET',
	
	        // url: 'http://www.easemob.com/easemob/server.xml',
	        // dataType: 'xml',
	        data: {app_key: encodeURIComponent(options.appKey)},
	        success: suc || _utils.emptyfn,
	        error: error || _utils.emptyfn
	    };
	    _utils.ajax(options2);
	};
	
	connection.prototype.signup = function (options) {
	    var self = this;
	    var orgName = options.orgName || '';
	    var appName = options.appName || '';
	    var appKey = options.appKey || '';
	    var suc = options.success || EMPTYFN;
	    var err = options.error || EMPTYFN;
	
	    if (!orgName && !appName && appKey) {
	        var devInfos = appKey.split('#');
	        if (devInfos.length === 2) {
	            orgName = devInfos[0];
	            appName = devInfos[1];
	        }
	    }
	    if (!orgName && !appName) {
	        err({
	            type: _code.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR
	        });
	        return;
	    }
	
	    var error = function (res, xhr, msg) {
	        if (location.protocol != 'https:' && self.isHttpDNS) {
	            if ((self.restIndex + 1) < self.restTotal) {
	                self.restIndex++;
	                self.getRestFromHttpDNS(options, 'signup');
	                return;
	            }
	        }
	        self.clear();
	        err(res);
	    };
	    var https = options.https || https;
	    var apiUrl = options.apiUrl;
	    var restUrl = apiUrl + '/' + orgName + '/' + appName + '/users';
	
	    var userjson = {
	        username: options.username,
	        password: options.password,
	        nickname: options.nickname || ''
	    };
	
	    var userinfo = _utils.stringify(userjson);
	    var options2 = {
	        url: restUrl,
	        dataType: 'json',
	        data: userinfo,
	        success: suc,
	        error: error
	    };
	    _utils.ajax(options2);
	};
	
	
	connection.prototype.open = function (options) {
	    if (location.protocol != 'https:' && this.isHttpDNS) {
	        this.dnsIndex = 0;
	        this.getHttpDNS(options, 'login');
	    } else {
	        this.login(options);
	    }
	};
	
	connection.prototype.login = function (options) {
	    var pass = _validCheck(options, this);
	
	    if (!pass) {
	        return;
	    }
	
	    var conn = this;
	
	    if (conn.isOpened()) {
	        return;
	    }
	
	    if (options.accessToken) {
	        options.access_token = options.accessToken;
	        conn.context.restTokenData = options;
	        _login(options, conn);
	    } else {
	        var apiUrl = options.apiUrl;
	        var userId = this.context.userId;
	        var pwd = options.pwd || '';
	        var appName = this.context.appName;
	        var orgName = this.context.orgName;
	
	        var suc = function (data, xhr) {
	            conn.context.status = _code.STATUS_DOLOGIN_IM;
	            conn.context.restTokenData = data;
	            if(options.success)
	                options.success(data);
	            _login(data, conn);
	        };
	        var error = function (res, xhr, msg) {
	            if(options.error)
	                options.error();
	            if (location.protocol != 'https:' && conn.isHttpDNS) {
	                if ((conn.restIndex + 1) < conn.restTotal) {
	                    conn.restIndex++;
	                    conn.getRestFromHttpDNS(options, 'login');
	                    return;
	                }
	            }
	            conn.clear();
	            if (res.error && res.error_description) {
	                conn.onError({
	                    type: _code.WEBIM_CONNCTION_OPEN_USERGRID_ERROR,
	                    data: res,
	                    xhr: xhr
	                });
	            } else {
	                conn.onError({
	                    type: _code.WEBIM_CONNCTION_OPEN_ERROR,
	                    data: res,
	                    xhr: xhr
	                });
	            }
	        };
	
	        this.context.status = _code.STATUS_DOLOGIN_USERGRID;
	
	        var loginJson = {
	            grant_type: 'password',
	            username: userId,
	            password: pwd,
	            timestamp: +new Date()
	        };
	        var loginfo = _utils.stringify(loginJson);
	
	        var options2 = {
	            url: apiUrl + '/' + orgName + '/' + appName + '/token',
	            dataType: 'json',
	            data: loginfo,
	            success: suc || _utils.emptyfn,
	            error: error || _utils.emptyfn
	        };
	        _utils.ajax(options2);
	    }
	};
	
	// attach to xmpp server for BOSH
	connection.prototype.attach = function (options) {
	    var pass = _validCheck(options, this);
	
	    if (!pass) {
	        return;
	    }
	
	    options = options || {};
	
	    var accessToken = options.accessToken || '';
	    if (accessToken == '') {
	        this.onError({
	            type: _code.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR
	        });
	        return;
	    }
	
	    var sid = options.sid || '';
	    if (sid === '') {
	        this.onError({
	            type: _code.WEBIM_CONNCTION_SESSIONID_NOT_ASSIGN_ERROR
	        });
	        return;
	    }
	
	    var rid = options.rid || '';
	    if (rid === '') {
	        this.onError({
	            type: _code.WEBIM_CONNCTION_RID_NOT_ASSIGN_ERROR
	        });
	        return;
	    }
	
	    var stropheConn = this.getStrophe();
	
	    this.context.accessToken = accessToken;
	    this.context.stropheConn = stropheConn;
	    this.context.status = _code.STATUS_DOLOGIN_IM;
	
	    var conn = this;
	    var callback = function (status, msg) {
	        _loginCallback(status, msg, conn);
	    };
	
	    var jid = this.context.jid;
	    var wait = this.wait;
	    var hold = this.hold;
	    var wind = this.wind || 5;
	    stropheConn.attach(jid, sid, rid, callback, wait, hold, wind);
	};
	
	connection.prototype.close = function (reason) {
	    this.stopHeartBeat();
	
	    var status = this.context.status;
	    if (status == _code.STATUS_INIT) {
	        return;
	    }
	
	    if (this.isClosed() || this.isClosing()) {
	        return;
	    }
	
	    this.context.status = _code.STATUS_CLOSING;
	    this.context.stropheConn.disconnect(reason);
	};
	
	connection.prototype.addHandler = function (handler, ns, name, type, id, from, options) {
	    this.context.stropheConn.addHandler(handler, ns, name, type, id, from, options);
	};
	
	connection.prototype.notifyVersion = function (suc, fail) {
	    var jid = _getJid({}, this);
	    var dom = $iq({
	        from: this.context.jid || ''
	        , to: this.domain
	        , type: 'result'
	    })
	        .c('query', {xmlns: 'jabber:iq:version'})
	        .c('name')
	        .t('easemob')
	        .up()
	        .c('version')
	        .t(_version)
	        .up()
	        .c('os')
	        .t('webim');
	
	    var suc = suc || _utils.emptyfn;
	    var error = fail || this.onError;
	    var failFn = function (ele) {
	        error({
	            type: _code.WEBIM_CONNCTION_NOTIFYVERSION_ERROR
	            , data: ele
	        });
	    };
	    this.context.stropheConn.sendIQ(dom.tree(), suc, failFn);
	    return;
	};
	
	// handle all types of presence message
	connection.prototype.handlePresence = function (msginfo) {
	    if (this.isClosed()) {
	        return;
	    }
	    var from = msginfo.getAttribute('from') || '';
	    var to = msginfo.getAttribute('to') || '';
	    var type = msginfo.getAttribute('type') || '';
	    var presence_type = msginfo.getAttribute('presence_type') || '';
	    var fromUser = _parseNameFromJidFn(from);
	    var toUser = _parseNameFromJidFn(to);
	    var isCreate = false;
	    var info = {
	        from: fromUser,
	        to: toUser,
	        fromJid: from,
	        toJid: to,
	        type: type,
	        chatroom: msginfo.getElementsByTagName('roomtype').length ? true : false
	    };
	
	    var showTags = msginfo.getElementsByTagName('show');
	    if (showTags && showTags.length > 0) {
	        var showTag = showTags[0];
	        info.show = Strophe.getText(showTag);
	    }
	    var statusTags = msginfo.getElementsByTagName('status');
	    if (statusTags && statusTags.length > 0) {
	        var statusTag = statusTags[0];
	        info.status = Strophe.getText(statusTag);
	        info.code = statusTag.getAttribute('code');
	    }
	
	    var priorityTags = msginfo.getElementsByTagName('priority');
	    if (priorityTags && priorityTags.length > 0) {
	        var priorityTag = priorityTags[0];
	        info.priority = Strophe.getText(priorityTag);
	    }
	
	    var error = msginfo.getElementsByTagName('error');
	    if (error && error.length > 0) {
	        var error = error[0];
	        info.error = {
	            code: error.getAttribute('code')
	        };
	    }
	
	    var destroy = msginfo.getElementsByTagName('destroy');
	    if (destroy && destroy.length > 0) {
	        var destroy = destroy[0];
	        info.destroy = true;
	
	        var reason = destroy.getElementsByTagName('reason');
	        if (reason && reason.length > 0) {
	            info.reason = Strophe.getText(reason[0]);
	        }
	    }
	
	    var members = msginfo.getElementsByTagName('item');
	    if (members && members.length > 0) {
	        var member = members[0];
	        var role = member.getAttribute('role');
	        var jid = member.getAttribute('jid');
	        var affiliation = member.getAttribute('affiliation');
	        // dismissed by group
	        if (role == 'none' && jid) {
	            var kickedMember = _parseNameFromJidFn(jid);
	            var actor = member.getElementsByTagName('actor')[0];
	            var actorNick = actor.getAttribute('nick');
	            info.actor = actorNick;
	            info.kicked = kickedMember;
	        }
	        // Service Acknowledges Room Creation `createGroupACK`
	        if (role == 'moderator' && info.code == '201') {
	            if (affiliation === 'owner') {
	                info.type = 'createGroupACK';
	                isCreate = true;
	            }
	            else
	                info.type = 'joinPublicGroupSuccess';
	        }
	    }
	
	    var apply = msginfo.getElementsByTagName('apply');
	    if (apply && apply.length > 0) {
	        apply = apply[0];
	        var toNick = apply.getAttribute('toNick');
	        var groupJid = apply.getAttribute('to');
	        var userJid = apply.getAttribute('from');
	        var groupName = _parseNameFromJidFn(groupJid);
	        var userName = _parseNameFromJidFn(userJid);
	        info.toNick = toNick;
	        info.groupName = groupName;
	        info.type = 'joinGroupNotifications';
	        var reason = apply.getElementsByTagName('reason');
	        if (reason && reason.length > 0) {
	            info.reason = Strophe.getText(reason[0]);
	        }
	    }
	
	
	    if (info.chatroom) {
	        // diff the
	        info.presence_type = presence_type;
	        info.original_type = info.type;
	        var reflectUser = from.slice(from.lastIndexOf('/') + 1);
	
	        if (reflectUser === this.context.userId) {
	            if (info.type === '' && !info.code) {
	                info.type = 'joinChatRoomSuccess';
	            } else if (presence_type === 'unavailable' || info.type === 'unavailable') {
	                if (!info.status) {// logout successfully.
	                    info.type = 'leaveChatRoom';
	                } else if (info.code == 110) {// logout or dismissied by admin.
	                    info.type = 'leaveChatRoom';
	                } else if (info.error && info.error.code == 406) {// The chat room is full.
	                    info.type = 'reachChatRoomCapacity';
	                }
	            }
	        }
	    } else {
	        info.presence_type = presence_type;
	        info.original_type = type;
	
	        if (/subscribe/.test(info.type)) {
	            //subscribe | subscribed | unsubscribe | unsubscribed
	        } else if (type == "" && !info.status && !info.error && !isCreate) {
	            info.type = 'joinPublicGroupSuccess';
	        } else if (presence_type === 'unavailable' || type === 'unavailable') {// There is no roomtype when a chat room is deleted.
	            if (info.destroy) {// Group or Chat room Deleted.
	                info.type = 'deleteGroupChat';
	            } else if (info.code == 307 || info.code == 321) {// Dismissed by group.
	                var nick = msginfo.getAttribute('nick');
	                if (!nick)
	                    info.type = 'leaveGroup';
	                else
	                    info.type = 'removedFromGroup';
	            }
	        }
	    }
	    this.onPresence(info, msginfo);
	};
	
	connection.prototype.handlePing = function (e) {
	    if (this.isClosed()) {
	        return;
	    }
	    var id = e.getAttribute('id');
	    var from = e.getAttribute('from');
	    var to = e.getAttribute('to');
	    var dom = $iq({
	        from: to
	        , to: from
	        , id: id
	        , type: 'result'
	    });
	    this.sendCommand(dom.tree());
	};
	
	connection.prototype.handleIq = function (iq) {
	    return true;
	};
	
	connection.prototype.handleIqPrivacy = function (msginfo) {
	    var list = msginfo.getElementsByTagName('list');
	    if (list.length == 0) {
	        return;
	    }
	    this.getBlacklist();
	};
	
	connection.prototype.handleIqRoster = function (e) {
	    var id = e.getAttribute('id');
	    var from = e.getAttribute('from') || '';
	    var name = _parseNameFromJidFn(from);
	    var curJid = this.context.jid;
	    var curUser = this.context.userId;
	
	    var iqresult = $iq({type: 'result', id: id, from: curJid});
	    this.sendCommand(iqresult.tree());
	
	    var msgBodies = e.getElementsByTagName('query');
	    if (msgBodies && msgBodies.length > 0) {
	        var queryTag = msgBodies[0];
	        var rouster = _parseFriend(queryTag, this, from);
	        this.onRoster(rouster);
	    }
	    return true;
	};
	
	connection.prototype.handleMessage = function (msginfo) {
	    var self = this;
	    if (this.isClosed()) {
	        return;
	    }
	
	    var id = msginfo.getAttribute('id') || '';
	
	    // cache ack into sendQueue first , handelSendQueue will do the send thing with the speed of  5/s
	    this.cacheReceiptsMessage({
	        id: id
	    });
	    var parseMsgData = _parseResponseMessage(msginfo);
	    if (parseMsgData.errorMsg) {
	        this.handlePresence(msginfo);
	        return;
	    }
	    // send error
	    var error = msginfo.getElementsByTagName('error');
	    var errorCode = '';
	    var errorText = '';
	    var errorBool = false;
	    if (error.length > 0) {
	        errorBool = true;
	        errorCode = error[0].getAttribute('code');
	        var textDOM = error[0].getElementsByTagName('text');
	        errorText = textDOM[0].textContent || textDOM[0].text;
	        log('handle error', errorCode, errorText);
	    }
	
	    var msgDatas = parseMsgData.data;
	    for (var i in msgDatas) {
	        if (!msgDatas.hasOwnProperty(i)) {
	            continue;
	        }
	        var msg = msgDatas[i];
	        if (!msg.from || !msg.to) {
	            continue;
	        }
	
	        var from = (msg.from + '').toLowerCase();
	        var too = (msg.to + '').toLowerCase();
	        var extmsg = msg.ext || {};
	        var chattype = '';
	        var typeEl = msginfo.getElementsByTagName('roomtype');
	        if (typeEl.length) {
	            chattype = typeEl[0].getAttribute('type') || 'chat';
	        } else {
	            chattype = msginfo.getAttribute('type') || 'chat';
	        }
	
	        var msgBodies = msg.bodies;
	        if (!msgBodies || msgBodies.length == 0) {
	            continue;
	        }
	        var msgBody = msg.bodies[0];
	        var type = msgBody.type;
	
	        try {
	            switch (type) {
	                case 'txt':
	                    var receiveMsg = msgBody.msg;
	                    var emojibody = _utils.parseTextMessage(receiveMsg, WebIM.Emoji);
	                    if (emojibody.isemoji) {
	                        var msg = {
	                            id: id
	                            , type: chattype
	                            , from: from
	                            , to: too
	                            , delay: parseMsgData.delayTimeStamp
	                            , data: emojibody.body
	                            , ext: extmsg
	                        };
	                        !msg.delay && delete msg.delay;
	                        msg.error = errorBool;
	                        msg.errorText = errorText;
	                        msg.errorCode = errorCode;
	                        this.onEmojiMessage(msg);
	                    } else {
	                        var msg = {
	                            id: id
	                            , type: chattype
	                            , from: from
	                            , to: too
	                            , delay: parseMsgData.delayTimeStamp
	                            , data: receiveMsg
	                            , ext: extmsg
	                        };
	                        !msg.delay && delete msg.delay;
	                        msg.error = errorBool;
	                        msg.errorText = errorText;
	                        msg.errorCode = errorCode;
	                        this.onTextMessage(msg);
	                    }
	                    break;
	                case 'img':
	                    var rwidth = 0;
	                    var rheight = 0;
	                    if (msgBody.size) {
	                        rwidth = msgBody.size.width;
	                        rheight = msgBody.size.height;
	                    }
	                    var msg = {
	                        id: id
	                        , type: chattype
	                        , from: from
	                        , to: too
	                        ,
	                        url: (location.protocol != 'https:' && self.isHttpDNS) ? (self.apiUrl + msgBody.url.substr(msgBody.url.indexOf("/", 9))) : msgBody.url
	                        , secret: msgBody.secret
	                        , filename: msgBody.filename
	                        , thumb: msgBody.thumb
	                        , thumb_secret: msgBody.thumb_secret
	                        , file_length: msgBody.file_length || ''
	                        , width: rwidth
	                        , height: rheight
	                        , filetype: msgBody.filetype || ''
	                        , accessToken: this.context.accessToken || ''
	                        , ext: extmsg
	                        , delay: parseMsgData.delayTimeStamp
	                    };
	                    !msg.delay && delete msg.delay;
	                    msg.error = errorBool;
	                    msg.errorText = errorText;
	                    msg.errorCode = errorCode;
	                    this.onPictureMessage(msg);
	                    break;
	                case 'audio':
	                    var msg = {
	                        id: id
	                        , type: chattype
	                        , from: from
	                        , to: too
	                        ,
	                        url: (location.protocol != 'https:' && self.isHttpDNS) ? (self.apiUrl + msgBody.url.substr(msgBody.url.indexOf("/", 9))) : msgBody.url
	                        , secret: msgBody.secret
	                        , filename: msgBody.filename
	                        , length: msgBody.length || ''
	                        , file_length: msgBody.file_length || ''
	                        , filetype: msgBody.filetype || ''
	                        , accessToken: this.context.accessToken || ''
	                        , ext: extmsg
	                        , delay: parseMsgData.delayTimeStamp
	                    };
	                    !msg.delay && delete msg.delay;
	                    msg.error = errorBool;
	                    msg.errorText = errorText;
	                    msg.errorCode = errorCode;
	                    this.onAudioMessage(msg);
	                    break;
	                case 'file':
	                    var msg = {
	                        id: id
	                        , type: chattype
	                        , from: from
	                        , to: too
	                        ,
	                        url: (location.protocol != 'https:' && self.isHttpDNS) ? (self.apiUrl + msgBody.url.substr(msgBody.url.indexOf("/", 9))) : msgBody.url
	                        , secret: msgBody.secret
	                        , filename: msgBody.filename
	                        , file_length: msgBody.file_length
	                        , accessToken: this.context.accessToken || ''
	                        , ext: extmsg
	                        , delay: parseMsgData.delayTimeStamp
	                    };
	                    !msg.delay && delete msg.delay;
	                    msg.error = errorBool;
	                    msg.errorText = errorText;
	                    msg.errorCode = errorCode;
	                    this.onFileMessage(msg);
	                    break;
	                case 'loc':
	                    var msg = {
	                        id: id
	                        , type: chattype
	                        , from: from
	                        , to: too
	                        , addr: msgBody.addr
	                        , lat: msgBody.lat
	                        , lng: msgBody.lng
	                        , ext: extmsg
	                        , delay: parseMsgData.delayTimeStamp
	                    };
	                    !msg.delay && delete msg.delay;
	                    msg.error = errorBool;
	                    msg.errorText = errorText;
	                    msg.errorCode = errorCode;
	                    this.onLocationMessage(msg);
	                    break;
	                case 'video':
	                    var msg = {
	                        id: id
	                        , type: chattype
	                        , from: from
	                        , to: too
	                        ,
	                        url: (location.protocol != 'https:' && self.isHttpDNS) ? (self.apiUrl + msgBody.url.substr(msgBody.url.indexOf("/", 9))) : msgBody.url
	                        , secret: msgBody.secret
	                        , filename: msgBody.filename
	                        , file_length: msgBody.file_length
	                        , accessToken: this.context.accessToken || ''
	                        , ext: extmsg
	                        , delay: parseMsgData.delayTimeStamp
	                    };
	                    !msg.delay && delete msg.delay;
	                    msg.error = errorBool;
	                    msg.errorText = errorText;
	                    msg.errorCode = errorCode;
	                    this.onVideoMessage(msg);
	                    break;
	                case 'cmd':
	                    var msg = {
	                        id: id
	                        , from: from
	                        , to: too
	                        , action: msgBody.action
	                        , ext: extmsg
	                        , delay: parseMsgData.delayTimeStamp
	                    };
	                    !msg.delay && delete msg.delay;
	                    msg.error = errorBool;
	                    msg.errorText = errorText;
	                    msg.errorCode = errorCode;
	                    this.onCmdMessage(msg);
	                    break;
	            }
	            ;
	        } catch (e) {
	            this.onError({
	                type: _code.WEBIM_CONNCTION_CALLBACK_INNER_ERROR
	                , data: e
	            });
	        }
	    }
	};
	
	connection.prototype.handleReceivedMessage = function (message) {
	    try {
	        this.onReceivedMessage(message);
	    } catch (e) {
	        this.onError({
	            type: _code.WEBIM_CONNCTION_CALLBACK_INNER_ERROR
	            , data: e
	        });
	    }
	
	    var rcv = message.getElementsByTagName('received'),
	        id,
	        mid;
	
	    if (rcv.length > 0) {
	        if (rcv[0].childNodes && rcv[0].childNodes.length > 0) {
	            id = rcv[0].childNodes[0].nodeValue;
	        } else {
	            id = rcv[0].innerHTML || rcv[0].innerText;
	        }
	        mid = rcv[0].getAttribute('mid');
	    }
	
	    if (_msgHash[id]) {
	        try {
	            _msgHash[id].msg.success instanceof Function && _msgHash[id].msg.success(id, mid);
	        } catch (e) {
	            this.onError({
	                type: _code.WEBIM_CONNCTION_CALLBACK_INNER_ERROR
	                , data: e
	            });
	        }
	        delete _msgHash[id];
	    }
	};
	
	connection.prototype.handleInviteMessage = function (message) {
	    var form = null;
	    var invitemsg = message.getElementsByTagName('invite');
	    var reasonDom = message.getElementsByTagName('reason')[0];
	    var reasonMsg = reasonDom.textContent;
	    var id = message.getAttribute('id') || '';
	    this.sendReceiptsMessage({
	        id: id
	    });
	
	    if (invitemsg && invitemsg.length > 0) {
	        var fromJid = invitemsg[0].getAttribute('from');
	        form = _parseNameFromJidFn(fromJid);
	    }
	    var xmsg = message.getElementsByTagName('x');
	    var roomid = null;
	    if (xmsg && xmsg.length > 0) {
	        for (var i = 0; i < xmsg.length; i++) {
	            if ('jabber:x:conference' === xmsg[i].namespaceURI) {
	                var roomjid = xmsg[i].getAttribute('jid');
	                roomid = _parseNameFromJidFn(roomjid);
	            }
	        }
	    }
	    this.onInviteMessage({
	        type: 'invite',
	        from: form,
	        roomid: roomid,
	        reason: reasonMsg
	    });
	};
	
	connection.prototype.sendCommand = function (dom, id) {
	    if (this.isOpened()) {
	        this.context.stropheConn.send(dom);
	    } else {
	        this.onError({
	            type: _code.WEBIM_CONNCTION_DISCONNECTED,
	            reconnect: true
	        });
	    }
	};
	
	connection.prototype.getUniqueId = function (prefix) {
	    var cdate = new Date();
	    var offdate = new Date(2010, 1, 1);
	    var offset = cdate.getTime() - offdate.getTime();
	    var hexd = parseInt(offset).toString(16);
	
	    if (typeof prefix === 'string' || typeof prefix === 'number') {
	        return prefix + '_' + hexd;
	    } else {
	        return 'WEBIM_' + hexd;
	    }
	};
	
	connection.prototype.send = function (message) {
	    var self = this;
	    if (this.isWindowSDK) {
	        WebIM.doQuery('{"type":"sendMessage","to":"' + message.to + '","message_type":"' + message.type + '","msg":"' + encodeURI(message.msg) + '","chatType":"' + message.chatType + '"}',
	            function (response) {
	            },
	            function (code, msg) {
	                var message = {
	                    data: {
	                        data: "send"
	                    },
	                    type: _code.WEBIM_MESSAGE_SED_ERROR
	                };
	                self.onError(message);
	            });
	    } else {
	        if (Object.prototype.toString.call(message) === '[object Object]') {
	            var appKey = this.context.appKey || '';
	            var toJid = appKey + '_' + message.to + '@' + this.domain;
	
	            if (message.group) {
	                toJid = appKey + '_' + message.to + '@conference.' + this.domain;
	            }
	            if (message.resource) {
	                toJid = toJid + '/' + message.resource;
	            }
	
	            message.toJid = toJid;
	            message.id = message.id || this.getUniqueId();
	            _msgHash[message.id] = new _message(message);
	            _msgHash[message.id].send(this);
	        } else if (typeof message === 'string') {
	            _msgHash[message] && _msgHash[message].send(this);
	        }
	    }
	};
	
	connection.prototype.addRoster = function (options) {
	    var jid = _getJid(options, this);
	    var name = options.name || '';
	    var groups = options.groups || '';
	
	    var iq = $iq({type: 'set'});
	    iq.c('query', {xmlns: 'jabber:iq:roster'});
	    iq.c('item', {jid: jid, name: name});
	
	    if (groups) {
	        for (var i = 0; i < groups.length; i++) {
	            iq.c('group').t(groups[i]).up();
	        }
	    }
	    var suc = options.success || _utils.emptyfn;
	    var error = options.error || _utils.emptyfn;
	    this.context.stropheConn.sendIQ(iq.tree(), suc, error);
	};
	
	connection.prototype.removeRoster = function (options) {
	    var jid = _getJid(options, this);
	    var iq = $iq({type: 'set'}).c('query', {xmlns: 'jabber:iq:roster'}).c('item', {
	        jid: jid,
	        subscription: 'remove'
	    });
	
	    var suc = options.success || _utils.emptyfn;
	    var error = options.error || _utils.emptyfn;
	    this.context.stropheConn.sendIQ(iq, suc, error);
	};
	
	connection.prototype.getRoster = function (options) {
	    var conn = this;
	    var dom = $iq({
	        type: 'get'
	    }).c('query', {xmlns: 'jabber:iq:roster'});
	
	    var options = options || {};
	    var suc = options.success || this.onRoster;
	    var completeFn = function (ele) {
	        var rouster = [];
	        var msgBodies = ele.getElementsByTagName('query');
	        if (msgBodies && msgBodies.length > 0) {
	            var queryTag = msgBodies[0];
	            rouster = _parseFriend(queryTag);
	        }
	        suc(rouster, ele);
	    };
	    var error = options.error || this.onError;
	    var failFn = function (ele) {
	        error({
	            type: _code.WEBIM_CONNCTION_GETROSTER_ERROR
	            , data: ele
	        });
	    };
	    if (this.isOpened()) {
	        this.context.stropheConn.sendIQ(dom.tree(), completeFn, failFn);
	    } else {
	        error({
	            type: _code.WEBIM_CONNCTION_DISCONNECTED
	        });
	    }
	};
	
	connection.prototype.subscribe = function (options) {
	    var jid = _getJid(options, this);
	    var pres = $pres({to: jid, type: 'subscribe'});
	    if (options.message) {
	        pres.c('status').t(options.message).up();
	    }
	    if (options.nick) {
	        pres.c('nick', {'xmlns': 'http://jabber.org/protocol/nick'}).t(options.nick);
	    }
	    this.sendCommand(pres.tree());
	};
	
	connection.prototype.subscribed = function (options) {
	    var jid = _getJid(options, this);
	    var pres = $pres({to: jid, type: 'subscribed'});
	
	    if (options.message) {
	        pres.c('status').t(options.message).up();
	    }
	    this.sendCommand(pres.tree());
	};
	
	connection.prototype.unsubscribe = function (options) {
	    var jid = _getJid(options, this);
	    var pres = $pres({to: jid, type: 'unsubscribe'});
	
	    if (options.message) {
	        pres.c('status').t(options.message);
	    }
	    this.sendCommand(pres.tree());
	};
	
	connection.prototype.unsubscribed = function (options) {
	    var jid = _getJid(options, this);
	    var pres = $pres({to: jid, type: 'unsubscribed'});
	
	    if (options.message) {
	        pres.c('status').t(options.message).up();
	    }
	    this.sendCommand(pres.tree());
	};
	
	
	connection.prototype.joinPublicGroup = function (options) {
	    var roomJid = this.context.appKey + '_' + options.roomId + '@conference.' + this.domain;
	    var room_nick = roomJid + '/' + this.context.userId;
	    var suc = options.success || _utils.emptyfn;
	    var err = options.error || _utils.emptyfn;
	    var errorFn = function (ele) {
	        err({
	            type: _code.WEBIM_CONNCTION_JOINROOM_ERROR,
	            data: ele
	        });
	    };
	    var iq = $pres({
	        from: this.context.jid,
	        to: room_nick
	    })
	        .c('x', {xmlns: Strophe.NS.MUC});
	
	    this.context.stropheConn.sendIQ(iq.tree(), suc, errorFn);
	};
	
	connection.prototype.listRooms = function (options) {
	    var iq = $iq({
	        to: options.server || 'conference.' + this.domain,
	        from: this.context.jid,
	        type: 'get'
	    })
	        .c('query', {xmlns: Strophe.NS.DISCO_ITEMS});
	
	    var suc = options.success || _utils.emptyfn;
	    var error = options.error || this.onError;
	    var completeFn = function (result) {
	        var rooms = [];
	        rooms = _parseRoom(result);
	        try {
	            suc(rooms);
	        } catch (e) {
	            error({
	                type: _code.WEBIM_CONNCTION_GETROOM_ERROR,
	                data: e
	            });
	        }
	    };
	    var err = options.error || _utils.emptyfn;
	    var errorFn = function (ele) {
	        err({
	            type: _code.WEBIM_CONNCTION_GETROOM_ERROR
	            , data: ele
	        });
	    };
	    this.context.stropheConn.sendIQ(iq.tree(), completeFn, errorFn);
	};
	
	connection.prototype.queryRoomMember = function (options) {
	    var domain = this.domain;
	    var members = [];
	    var iq = $iq({
	        to: this.context.appKey + '_' + options.roomId + '@conference.' + this.domain
	        , type: 'get'
	    })
	        .c('query', {xmlns: Strophe.NS.MUC + '#admin'})
	        .c('item', {affiliation: 'member'});
	
	    var suc = options.success || _utils.emptyfn;
	    var completeFn = function (result) {
	        var items = result.getElementsByTagName('item');
	
	        if (items) {
	            for (var i = 0; i < items.length; i++) {
	                var item = items[i];
	                var mem = {
	                    jid: item.getAttribute('jid')
	                    , affiliation: 'member'
	                };
	                members.push(mem);
	            }
	        }
	        suc(members);
	    };
	    var err = options.error || _utils.emptyfn;
	    var errorFn = function (ele) {
	        err({
	            type: _code.WEBIM_CONNCTION_GETROOMMEMBER_ERROR
	            , data: ele
	        });
	    };
	    this.context.stropheConn.sendIQ(iq.tree(), completeFn, errorFn);
	};
	
	connection.prototype.queryRoomInfo = function (options) {
	    var domain = this.domain;
	    var iq = $iq({
	        to: this.context.appKey + '_' + options.roomId + '@conference.' + domain,
	        type: 'get'
	    }).c('query', {xmlns: Strophe.NS.DISCO_INFO});
	
	    var suc = options.success || _utils.emptyfn;
	    var members = [];
	
	    var completeFn = function (result) {
	        var settings = '';
	        var features = result.getElementsByTagName('feature');
	        if (features) {
	            settings = features[1].getAttribute('var') + '|' + features[3].getAttribute('var') + '|' + features[4].getAttribute('var');
	        }
	        switch (settings) {
	            case 'muc_public|muc_membersonly|muc_notallowinvites':
	                settings = 'PUBLIC_JOIN_APPROVAL';
	                break;
	            case 'muc_public|muc_open|muc_notallowinvites':
	                settings = 'PUBLIC_JOIN_OPEN';
	                break;
	            case 'muc_hidden|muc_membersonly|muc_allowinvites':
	                settings = 'PRIVATE_MEMBER_INVITE';
	                break;
	            case 'muc_hidden|muc_membersonly|muc_notallowinvites':
	                settings = 'PRIVATE_OWNER_INVITE';
	                break;
	        }
	        var owner = '';
	        var fields = result.getElementsByTagName('field');
	        var fieldValues = {};
	        if (fields) {
	            for (var i = 0; i < fields.length; i++) {
	                var field = fields[i];
	                var fieldVar = field.getAttribute('var');
	                var fieldSimplify = fieldVar.split('_')[1];
	                switch (fieldVar) {
	                    case 'muc#roominfo_occupants':
	                    case 'muc#roominfo_maxusers':
	                    case 'muc#roominfo_affiliations':
	                    case 'muc#roominfo_description':
	                        fieldValues[fieldSimplify] = (field.textContent || field.text || '');
	                        break;
	                    case 'muc#roominfo_owner':
	                        var mem = {
	                            jid: (field.textContent || field.text) + '@' + domain
	                            , affiliation: 'owner'
	                        };
	                        members.push(mem);
	                        fieldValues[fieldSimplify] = (field.textContent || field.text);
	                        break;
	                }
	
	                // if (field.getAttribute('label') === 'owner') {
	                //     var mem = {
	                //         jid: (field.textContent || field.text) + '@' + domain
	                //         , affiliation: 'owner'
	                //     };
	                //     members.push(mem);
	                //     break;
	                // }
	            }
	            fieldValues['name'] = (result.getElementsByTagName('identity')[0]).getAttribute('name');
	        }
	        log(settings, members, fieldValues);
	        suc(settings, members, fieldValues);
	    };
	    var err = options.error || _utils.emptyfn;
	    var errorFn = function (ele) {
	        err({
	            type: _code.WEBIM_CONNCTION_GETROOMINFO_ERROR
	            , data: ele
	        });
	    };
	    this.context.stropheConn.sendIQ(iq.tree(), completeFn, errorFn);
	};
	
	connection.prototype.queryRoomOccupants = function (options) {
	    var suc = options.success || _utils.emptyfn;
	    var completeFn = function (result) {
	        var occupants = [];
	        occupants = _parseRoomOccupants(result);
	        suc(occupants);
	    }
	    var err = options.error || _utils.emptyfn;
	    var errorFn = function (ele) {
	        err({
	            type: _code.WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR
	            , data: ele
	        });
	    };
	    var attrs = {
	        xmlns: Strophe.NS.DISCO_ITEMS
	    };
	    var info = $iq({
	        from: this.context.jid
	        , to: this.context.appKey + '_' + options.roomId + '@conference.' + this.domain
	        , type: 'get'
	    }).c('query', attrs);
	    this.context.stropheConn.sendIQ(info.tree(), completeFn, errorFn);
	};
	
	connection.prototype.setUserSig = function (desc) {
	    var dom = $pres({xmlns: 'jabber:client'});
	    desc = desc || '';
	    dom.c('status').t(desc);
	    this.sendCommand(dom.tree());
	};
	
	connection.prototype.setPresence = function (type, status) {
	    var dom = $pres({xmlns: 'jabber:client'});
	    if (type) {
	        if (status) {
	            dom.c('show').t(type);
	            dom.up().c('status').t(status);
	        } else {
	            dom.c('show').t(type);
	        }
	    }
	    this.sendCommand(dom.tree());
	};
	
	connection.prototype.getPresence = function () {
	    var dom = $pres({xmlns: 'jabber:client'});
	    var conn = this;
	    this.sendCommand(dom.tree());
	};
	
	connection.prototype.ping = function (options) {
	    var options = options || {};
	    var jid = _getJid(options, this);
	
	    var dom = $iq({
	        from: this.context.jid || ''
	        , to: jid
	        , type: 'get'
	    }).c('ping', {xmlns: 'urn:xmpp:ping'});
	
	    var suc = options.success || _utils.emptyfn;
	    var error = options.error || this.onError;
	    var failFn = function (ele) {
	        error({
	            type: _code.WEBIM_CONNCTION_PING_ERROR
	            , data: ele
	        });
	    };
	    if (this.isOpened()) {
	        this.context.stropheConn.sendIQ(dom.tree(), suc, failFn);
	    } else {
	        error({
	            type: _code.WEBIM_CONNCTION_DISCONNECTED
	        });
	    }
	    return;
	};
	
	connection.prototype.isOpened = function () {
	    return this.context.status == _code.STATUS_OPENED;
	};
	
	connection.prototype.isOpening = function () {
	    var status = this.context.status;
	    return status == _code.STATUS_DOLOGIN_USERGRID || status == _code.STATUS_DOLOGIN_IM;
	};
	
	connection.prototype.isClosing = function () {
	    return this.context.status == _code.STATUS_CLOSING;
	};
	
	connection.prototype.isClosed = function () {
	    return this.context.status == _code.STATUS_CLOSED;
	};
	
	connection.prototype.clear = function () {
	    var key = this.context.appKey;
	    if (this.errorType != _code.WEBIM_CONNCTION_DISCONNECTED) {
	        this.context = {
	            status: _code.STATUS_INIT,
	            appKey: key
	        };
	    }
	    if (this.intervalId) {
	        clearInterval(this.intervalId);
	    }
	    this.restIndex = 0;
	    this.xmppIndex = 0;
	
	    if (this.errorType == _code.WEBIM_CONNCTION_CLIENT_LOGOUT || this.errorType == -1) {
	        var message = {
	            data: {
	                data: "logout"
	            },
	            type: _code.WEBIM_CONNCTION_CLIENT_LOGOUT
	        };
	        this.onError(message);
	    }
	};
	
	connection.prototype.getChatRooms = function (options) {
	
	    if (!_utils.isCanSetRequestHeader) {
	        conn.onError({
	            type: _code.WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR
	        });
	        return;
	    }
	
	    var conn = this,
	        token = options.accessToken || this.context.accessToken;
	
	    if (token) {
	        var apiUrl = options.apiUrl;
	        var appName = this.context.appName;
	        var orgName = this.context.orgName;
	
	        if (!appName || !orgName) {
	            conn.onError({
	                type: _code.WEBIM_CONNCTION_AUTH_ERROR
	            });
	            return;
	        }
	
	        var suc = function (data, xhr) {
	            typeof options.success === 'function' && options.success(data);
	        };
	
	        var error = function (res, xhr, msg) {
	            if (res.error && res.error_description) {
	                conn.onError({
	                    type: _code.WEBIM_CONNCTION_LOAD_CHATROOM_ERROR,
	                    msg: res.error_description,
	                    data: res,
	                    xhr: xhr
	                });
	            }
	        };
	
	        var pageInfo = {
	            pagenum: parseInt(options.pagenum) || 1,
	            pagesize: parseInt(options.pagesize) || 20
	        };
	
	        var opts = {
	            url: apiUrl + '/' + orgName + '/' + appName + '/chatrooms',
	            dataType: 'json',
	            type: 'GET',
	            headers: {'Authorization': 'Bearer ' + token},
	            data: pageInfo,
	            success: suc || _utils.emptyfn,
	            error: error || _utils.emptyfn
	        };
	        _utils.ajax(opts);
	    } else {
	        conn.onError({
	            type: _code.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR
	        });
	    }
	
	};
	
	connection.prototype.joinChatRoom = function (options) {
	    var roomJid = this.context.appKey + '_' + options.roomId + '@conference.' + this.domain;
	    var room_nick = roomJid + '/' + this.context.userId;
	    var suc = options.success || _utils.emptyfn;
	    var err = options.error || _utils.emptyfn;
	    var errorFn = function (ele) {
	        err({
	            type: _code.WEBIM_CONNCTION_JOINCHATROOM_ERROR
	            , data: ele
	        });
	    };
	
	    var iq = $pres({
	        from: this.context.jid,
	        to: room_nick
	    })
	        .c('x', {xmlns: Strophe.NS.MUC + '#user'})
	        .c('item', {affiliation: 'member', role: 'participant'})
	        .up().up()
	        .c('roomtype', {xmlns: 'easemob:x:roomtype', type: 'chatroom'});
	
	    this.context.stropheConn.sendIQ(iq.tree(), suc, errorFn);
	};
	
	connection.prototype.quitChatRoom = function (options) {
	    var roomJid = this.context.appKey + '_' + options.roomId + '@conference.' + this.domain;
	    var room_nick = roomJid + '/' + this.context.userId;
	    var suc = options.success || _utils.emptyfn;
	    var err = options.error || _utils.emptyfn;
	    var errorFn = function (ele) {
	        err({
	            type: _code.WEBIM_CONNCTION_QUITCHATROOM_ERROR
	            , data: ele
	        });
	    };
	    var iq = $pres({
	        from: this.context.jid,
	        to: room_nick,
	        type: 'unavailable'
	    })
	        .c('x', {xmlns: Strophe.NS.MUC + '#user'})
	        .c('item', {affiliation: 'none', role: 'none'})
	        .up().up()
	        .c('roomtype', {xmlns: 'easemob:x:roomtype', type: 'chatroom'});
	
	    this.context.stropheConn.sendIQ(iq.tree(), suc, errorFn);
	};
	
	connection.prototype._onReceiveInviteFromGroup = function (info) {
	    info = eval('(' + info + ')');
	    var self = this;
	    var options = {
	        title: "Group invitation",
	        msg: info.user + " invites you to join into group:" + info.group_id,
	        agree: function agree() {
	            WebIM.doQuery('{"type":"acceptInvitationFromGroup","id":"' + info.group_id + '","user":"' + info.user + '"}', function (response) {
	            }, function (code, msg) {
	                var message = {
	                    data: {
	                        data: "acceptInvitationFromGroup error:" + msg
	                    },
	                    type: _code.WEBIM_CONNECTION_ACCEPT_INVITATION_FROM_GROUP
	                };
	                self.onError(message);
	            });
	        },
	        reject: function reject() {
	            WebIM.doQuery('{"type":"declineInvitationFromGroup","id":"' + info.group_id + '","user":"' + info.user + '"}', function (response) {
	            }, function (code, msg) {
	                var message = {
	                    data: {
	                        data: "declineInvitationFromGroup error:" + msg
	                    },
	                    type: _code.WEBIM_CONNECTION_DECLINE_INVITATION_FROM_GROUP
	                };
	                self.onError(message);
	            });
	        }
	    };
	
	    this.onConfirmPop(options);
	};
	connection.prototype._onReceiveInviteAcceptionFromGroup = function (info) {
	    info = eval('(' + info + ')');
	    var options = {
	        title: "Group invitation response",
	        msg: info.user + " agreed to join into group:" + info.group_id,
	        agree: function agree() {
	        }
	    };
	    this.onConfirmPop(options);
	};
	connection.prototype._onReceiveInviteDeclineFromGroup = function (info) {
	    info = eval('(' + info + ')');
	    var options = {
	        title: "Group invitation response",
	        msg: info.user + " rejected to join into group:" + info.group_id,
	        agree: function agree() {
	        }
	    };
	    this.onConfirmPop(options);
	};
	connection.prototype._onAutoAcceptInvitationFromGroup = function (info) {
	    info = eval('(' + info + ')');
	    var options = {
	        title: "Group invitation",
	        msg: "You had joined into the group:" + info.group_name + " automatically.Inviter:" + info.user,
	        agree: function agree() {
	        }
	    };
	    this.onConfirmPop(options);
	};
	connection.prototype._onLeaveGroup = function (info) {
	    info = eval('(' + info + ')');
	    var options = {
	        title: "Group notification",
	        msg: "You have been out of the group:" + info.group_id + ".Reason:" + info.msg,
	        agree: function agree() {
	        }
	    };
	    this.onConfirmPop(options);
	};
	connection.prototype._onReceiveJoinGroupApplication = function (info) {
	    info = eval('(' + info + ')');
	    var self = this;
	    var options = {
	        title: "Group join application",
	        msg: info.user + " applys to join into group:" + info.group_id,
	        agree: function agree() {
	            WebIM.doQuery('{"type":"acceptJoinGroupApplication","id":"' + info.group_id + '","user":"' + info.user + '"}', function (response) {
	            }, function (code, msg) {
	                var message = {
	                    data: {
	                        data: "acceptJoinGroupApplication error:" + msg
	                    },
	                    type: _code.WEBIM_CONNECTION_ACCEPT_JOIN_GROUP
	                };
	                self.onError(message);
	            });
	        },
	        reject: function reject() {
	            WebIM.doQuery('{"type":"declineJoinGroupApplication","id":"' + info.group_id + '","user":"' + info.user + '"}', function (response) {
	            }, function (code, msg) {
	                var message = {
	                    data: {
	                        data: "declineJoinGroupApplication error:" + msg
	                    },
	                    type: _code.WEBIM_CONNECTION_DECLINE_JOIN_GROUP
	                };
	                self.onError(message);
	            });
	        }
	    };
	    this.onConfirmPop(options);
	};
	connection.prototype._onReceiveAcceptionFromGroup = function (info) {
	    info = eval('(' + info + ')');
	    var options = {
	        title: "Group notification",
	        msg: "You had joined into the group:" + info.group_name + ".",
	        agree: function agree() {
	        }
	    };
	    this.onConfirmPop(options);
	};
	connection.prototype._onReceiveRejectionFromGroup = function () {
	    info = eval('(' + info + ')');
	    var options = {
	        title: "Group notification",
	        msg: "You have been rejected to join into the group:" + info.group_name + ".",
	        agree: function agree() {
	        }
	    };
	    this.onConfirmPop(options);
	};
	connection.prototype._onUpdateMyGroupList = function (options) {
	    this.onUpdateMyGroupList(options);
	};
	connection.prototype._onUpdateMyRoster = function (options) {
	    this.onUpdateMyRoster(options);
	};
	connection.prototype.reconnect = function () {
	    var that = this;
	    setTimeout(function () {
	        _login(that.context.restTokenData, that);
	    }, (this.autoReconnectNumTotal == 0 ? 0 : this.autoReconnectInterval) * 1000);
	    this.autoReconnectNumTotal++;
	};
	
	connection.prototype.closed = function () {
	    var message = {
	        data: {
	            data: "Closed error"
	        },
	        type: _code.WEBIM_CONNECTION_CLOSED
	    };
	    this.onError(message);
	};
	
	// used for blacklist
	function _parsePrivacy(iq) {
	    var list = [];
	    var items = iq.getElementsByTagName('item');
	
	    if (items) {
	        for (var i = 0; i < items.length; i++) {
	            var item = items[i];
	            var jid = item.getAttribute('value');
	            var order = item.getAttribute('order');
	            var type = item.getAttribute('type');
	            if (!jid) {
	                continue;
	            }
	            var n = _parseNameFromJidFn(jid);
	            list[n] = {
	                type: type,
	                order: order,
	                jid: jid,
	                name: n
	            };
	        }
	    }
	    return list;
	};
	
	// used for blacklist
	connection.prototype.getBlacklist = function (options) {
	    options = (options || {});
	    var iq = $iq({type: 'get'});
	    var sucFn = options.success || _utils.emptyfn;
	    var errFn = options.error || _utils.emptyfn;
	    var me = this;
	
	    iq.c('query', {xmlns: 'jabber:iq:privacy'})
	        .c('list', {name: 'special'});
	
	    this.context.stropheConn.sendIQ(iq.tree(), function (iq) {
	        me.onBlacklistUpdate(_parsePrivacy(iq));
	        sucFn();
	    }, function () {
	        me.onBlacklistUpdate([]);
	        errFn();
	    });
	};
	
	// used for blacklist
	connection.prototype.addToBlackList = function (options) {
	    var iq = $iq({type: 'set'});
	    var blacklist = options.list || {};
	    var type = options.type || 'jid';
	    var sucFn = options.success || _utils.emptyfn;
	    var errFn = options.error || _utils.emptyfn;
	    var piece = iq.c('query', {xmlns: 'jabber:iq:privacy'})
	        .c('list', {name: 'special'});
	
	    var keys = Object.keys(blacklist);
	    var len = keys.length;
	    var order = 2;
	
	    for (var i = 0; i < len; i++) {
	        var item = blacklist[keys[i]];
	        var type = item.type || 'jid';
	        var jid = item.jid;
	
	        piece = piece.c('item', {action: 'deny', order: order++, type: type, value: jid})
	            .c('message');
	        if (i !== len - 1) {
	            piece = piece.up().up();
	        }
	    }
	
	    // log('addToBlackList', blacklist, piece.tree());
	    this.context.stropheConn.sendIQ(piece.tree(), sucFn, errFn);
	};
	
	// used for blacklist
	connection.prototype.removeFromBlackList = function (options) {
	
	    var iq = $iq({type: 'set'});
	    var blacklist = options.list || {};
	    var sucFn = options.success || _utils.emptyfn;
	    var errFn = options.error || _utils.emptyfn;
	    var piece = iq.c('query', {xmlns: 'jabber:iq:privacy'})
	        .c('list', {name: 'special'});
	
	    var keys = Object.keys(blacklist);
	    var len = keys.length;
	
	    for (var i = 0; i < len; i++) {
	        var item = blacklist[keys[i]];
	        var type = item.type || 'jid';
	        var jid = item.jid;
	        var order = item.order;
	
	        piece = piece.c('item', {action: 'deny', order: order, type: type, value: jid})
	            .c('message');
	        if (i !== len - 1) {
	            piece = piece.up().up();
	        }
	    }
	
	    // log('removeFromBlackList', blacklist, piece.tree());
	    this.context.stropheConn.sendIQ(piece.tree(), sucFn, errFn);
	};
	
	connection.prototype._getGroupJid = function (to) {
	    var appKey = this.context.appKey || '';
	    return appKey + '_' + to + '@conference.' + this.domain;
	};
	
	// used for blacklist
	connection.prototype.addToGroupBlackList = function (options) {
	    var sucFn = options.success || _utils.emptyfn;
	    var errFn = options.error || _utils.emptyfn;
	    var jid = _getJid(options, this);
	    var affiliation = 'admin';//options.affiliation || 'admin';
	    var to = this._getGroupJid(options.roomId);
	    var iq = $iq({type: 'set', to: to});
	
	    iq.c('query', {xmlns: 'http://jabber.org/protocol/muc#' + affiliation})
	        .c('item', {
	            affiliation: 'outcast',
	            jid: jid
	        });
	
	    this.context.stropheConn.sendIQ(iq.tree(), sucFn, errFn);
	};
	
	function _parseGroupBlacklist(iq) {
	    var list = {};
	    var items = iq.getElementsByTagName('item');
	
	    if (items) {
	        for (var i = 0; i < items.length; i++) {
	            var item = items[i];
	            var jid = item.getAttribute('jid');
	            var affiliation = item.getAttribute('affiliation');
	            var nick = item.getAttribute('nick');
	            if (!jid) {
	                continue;
	            }
	            var n = _parseNameFromJidFn(jid);
	            list[n] = {
	                jid: jid,
	                affiliation: affiliation,
	                nick: nick,
	                name: n
	            };
	        }
	    }
	    return list;
	}
	
	// used for blacklist
	connection.prototype.getGroupBlacklist = function (options) {
	    var sucFn = options.success || _utils.emptyfn;
	    var errFn = options.error || _utils.emptyfn;
	
	    // var jid = _getJid(options, this);
	    var affiliation = 'admin';//options.affiliation || 'admin';
	    var to = this._getGroupJid(options.roomId);
	    var iq = $iq({type: 'get', to: to});
	
	    iq.c('query', {xmlns: 'http://jabber.org/protocol/muc#' + affiliation})
	        .c('item', {
	            affiliation: 'outcast',
	        });
	
	    this.context.stropheConn.sendIQ(iq.tree(), function (msginfo) {
	        log('getGroupBlackList');
	        sucFn(_parseGroupBlacklist(msginfo));
	    }, function () {
	        errFn();
	    });
	};
	
	// used for blacklist
	connection.prototype.removeGroupMemberFromBlacklist = function (options) {
	    var sucFn = options.success || _utils.emptyfn;
	    var errFn = options.error || _utils.emptyfn;
	
	    var jid = _getJid(options, this);
	    var affiliation = 'admin';//options.affiliation || 'admin';
	    var to = this._getGroupJid(options.roomId);
	    var iq = $iq({type: 'set', to: to});
	
	    iq.c('query', {xmlns: 'http://jabber.org/protocol/muc#' + affiliation})
	        .c('item', {
	            affiliation: 'none',
	            jid: jid
	        });
	
	    this.context.stropheConn.sendIQ(iq.tree(), function (msginfo) {
	        sucFn();
	    }, function () {
	        errFn();
	    });
	};
	
	/**
	 * changeGroupSubject 修改群名称
	 *
	 * @param options
	 */
	// <iq to='easemob-demo#chatdemoui_roomid@conference.easemob.com' type='set' id='3940489311' xmlns='jabber:client'>
	//     <query xmlns='http://jabber.org/protocol/muc#owner'>
	//         <x type='submit' xmlns='jabber:x:data'>
	//             <field var='FORM_TYPE'><value>http://jabber.org/protocol/muc#roomconfig</value></field>
	//             <field var='muc#roomconfig_roomname'><value>Room Name</value></field>
	//         </x>
	//     </query>
	// </iq>
	connection.prototype.changeGroupSubject = function (options) {
	    var sucFn = options.success || _utils.emptyfn;
	    var errFn = options.error || _utils.emptyfn;
	
	    // must be `owner`
	    var affiliation = 'owner';
	    var to = this._getGroupJid(options.roomId);
	    var iq = $iq({type: 'set', to: to});
	
	    iq.c('query', {xmlns: 'http://jabber.org/protocol/muc#' + affiliation})
	        .c('x', {type: 'submit', xmlns: 'jabber:x:data'})
	        .c('field', {'var': 'FORM_TYPE'})
	        .c('value')
	        .t('http://jabber.org/protocol/muc#roomconfig')
	        .up().up()
	        .c('field', {'var': 'muc#roomconfig_roomname'})
	        .c('value')
	        .t(options.subject)
	        .up().up()
	        .c('field', {'var': 'muc#roomconfig_roomdesc'})
	        .c('value')
	        .t(options.description);
	
	
	    this.context.stropheConn.sendIQ(iq.tree(), function (msginfo) {
	        sucFn();
	    }, function () {
	        errFn();
	    });
	};
	
	/**
	 * destroyGroup 删除群组
	 *
	 * @param options
	 */
	// <iq id="9BEF5D20-841A-4048-B33A-F3F871120E58" to="easemob-demo#chatdemoui_1477462231499@conference.easemob.com" type="set">
	//     <query xmlns="http://jabber.org/protocol/muc#owner">
	//         <destroy>
	//             <reason>xxx destory group yyy</reason>
	//         </destroy>
	//     </query>
	// </iq>
	connection.prototype.destroyGroup = function (options) {
	    var sucFn = options.success || _utils.emptyfn;
	    var errFn = options.error || _utils.emptyfn;
	
	    // must be `owner`
	    var affiliation = 'owner';
	    var to = this._getGroupJid(options.roomId);
	    var iq = $iq({type: 'set', to: to});
	
	    iq.c('query', {xmlns: 'http://jabber.org/protocol/muc#' + affiliation})
	        .c('destroy')
	        .c('reason').t(options.reason || '');
	
	    this.context.stropheConn.sendIQ(iq.tree(), function (msginfo) {
	        sucFn();
	    }, function () {
	        errFn();
	    });
	};
	
	/**
	 * leaveGroupBySelf 主动离开群组
	 *
	 * @param options
	 */
	// <iq id="5CD33172-7B62-41B7-98BC-CE6EF840C4F6_easemob_occupants_change_affiliation" to="easemob-demo#chatdemoui_1477481609392@conference.easemob.com" type="set">
	//     <query xmlns="http://jabber.org/protocol/muc#admin">
	//         <item affiliation="none" jid="easemob-demo#chatdemoui_lwz2@easemob.com"/>
	//     </query>
	// </iq>
	// <presence to="easemob-demo#chatdemoui_1479811172349@conference.easemob.com/mt002" type="unavailable"/>
	
	connection.prototype.leaveGroupBySelf = function (options) {
	    var self = this;
	    var sucFn = options.success || _utils.emptyfn;
	    var errFn = options.error || _utils.emptyfn;
	
	    // must be `owner`
	    var jid = _getJid(options, this);
	    var affiliation = 'admin';
	    var to = this._getGroupJid(options.roomId);
	    var iq = $iq({type: 'set', to: to});
	
	    iq.c('query', {xmlns: 'http://jabber.org/protocol/muc#' + affiliation})
	        .c('item', {
	            affiliation: 'none',
	            jid: jid
	        });
	
	    this.context.stropheConn.sendIQ(iq.tree(), function (msgInfo) {
	        sucFn(msgInfo);
	        var pres = $pres({type: 'unavailable', to: to + '/' + self.context.userId});
	        self.sendCommand(pres.tree());
	    }, function (errInfo) {
	        errFn(errInfo);
	    });
	};
	
	/**
	 * leaveGroup 被踢出群组
	 *
	 * @param options
	 */
	// <iq id="9fb25cf4-1183-43c9-961e-9df70e300de4:sendIQ" to="easemob-demo#chatdemoui_1477481597120@conference.easemob.com" type="set" xmlns="jabber:client">
	//     <query xmlns="http://jabber.org/protocol/muc#admin">
	//         <item affiliation="none" jid="easemob-demo#chatdemoui_lwz4@easemob.com"/>
	//         <item jid="easemob-demo#chatdemoui_lwz4@easemob.com" role="none"/>
	//         <item affiliation="none" jid="easemob-demo#chatdemoui_lwz2@easemob.com"/>
	//         <item jid="easemob-demo#chatdemoui_lwz2@easemob.com" role="none"/>
	//     </query>
	// </iq>
	connection.prototype.leaveGroup = function (options) {
	    var sucFn = options.success || _utils.emptyfn;
	    var errFn = options.error || _utils.emptyfn;
	    var list = options.list || [];
	    var affiliation = 'admin';
	    var to = this._getGroupJid(options.roomId);
	    var iq = $iq({type: 'set', to: to});
	    var piece = iq.c('query', {xmlns: 'http://jabber.org/protocol/muc#' + affiliation});
	    var keys = Object.keys(list);
	    var len = keys.length;
	
	    for (var i = 0; i < len; i++) {
	        var name = list[keys[i]];
	        var jid = _getJidByName(name, this);
	
	        piece = piece.c('item', {
	            affiliation: 'none',
	            jid: jid
	        }).up().c('item', {
	            role: 'none',
	            jid: jid,
	        }).up();
	    }
	
	    this.context.stropheConn.sendIQ(iq.tree(), function (msgInfo) {
	        sucFn(msgInfo);
	    }, function (errInfo) {
	        errFn(errInfo);
	    });
	};
	
	/**
	 * addGroupMembers 添加群组成员
	 *
	 * @param options
	
	 Attention the sequence: message first (每个成员单独发一条message), iq second (多个成员可以合成一条iq发)
	 <!-- 添加成员通知：send -->
	 <message to='easemob-demo#chatdemoui_1477482739698@conference.easemob.com'>
	 <x xmlns='http://jabber.org/protocol/muc#user'>
	 <invite to='easemob-demo#chatdemoui_lwz2@easemob.com'>
	 <reason>liuwz invite you to join group '谢谢'</reason>
	 </invite>
	 </x>
	 </message>
	 <!-- 添加成员：send -->
	 <iq id='09DFB1E5-C939-4C43-B5A7-8000DA0E3B73_easemob_occupants_change_affiliation' to='easemob-demo#chatdemoui_1477482739698@conference.easemob.com' type='set'>
	 <query xmlns='http://jabber.org/protocol/muc#admin'>
	 <item affiliation='member' jid='easemob-demo#chatdemoui_lwz2@easemob.com'/>
	 </query>
	 </iq>
	 */
	
	connection.prototype.addGroupMembers = function (options) {
	    var sucFn = options.success || _utils.emptyfn;
	    var errFn = options.error || _utils.emptyfn;
	    var list = options.list || [];
	    var affiliation = 'admin';
	    var to = this._getGroupJid(options.roomId);
	    var iq = $iq({type: 'set', to: to});
	    var piece = iq.c('query', {xmlns: 'http://jabber.org/protocol/muc#' + affiliation});
	    var len = list.length;
	
	    for (var i = 0; i < len; i++) {
	
	        var name = list[i];
	        var jid = _getJidByName(name, this);
	
	        piece = piece.c('item', {
	            affiliation: 'member',
	            jid: jid
	        }).up();
	
	        var dom = $msg({
	            to: to
	        }).c('x', {
	            xmlns: 'http://jabber.org/protocol/muc#user'
	        }).c('invite', {
	            to: jid
	        }).c('reason').t(options.reason || '');
	
	        this.sendCommand(dom.tree());
	
	    }
	
	    this.context.stropheConn.sendIQ(iq.tree(), function (msgInfo) {
	        sucFn(msgInfo);
	    }, function (errInfo) {
	        errFn(errInfo);
	    });
	};
	
	/**
	 * acceptInviteFromGroup 接受加入申请
	 *
	 * @param options
	 */
	connection.prototype.acceptInviteFromGroup = function (options) {
	    options.success = function () {
	        // then send sendAcceptInviteMessage
	        // connection.prototype.sendAcceptInviteMessage(optoins);
	    };
	    this.addGroupMembers(options);
	};
	
	/**
	 * rejectInviteFromGroup 拒绝入群申请
	 *
	 * throw request for now 暂时不处理，直接丢弃
	 *
	 <message to='easemob-demo#chatdemoui_mt002@easemob.com' from='easmeob-demo#chatdemoui_mt001@easemob.com' id='B83B7210-BCFF-4DEE-AB28-B9FE5579C1E2'>
	 <x xmlns='http://jabber.org/protocol/muc#user'>
	 <apply to='easemob-demo#chatdemoui_groupid1@conference.easemob.com' from='easmeob-demo#chatdemoui_mt001@easemob.com' toNick='llllll'>
	 <reason>reject</reason>
	 </apply>
	 </x>
	 </message>
	 *
	 * @param options
	 */
	connection.prototype.rejectInviteFromGroup = function (options) {
	    // var from = _getJidByName(options.from, this);
	    // var dom = $msg({
	    //     from: from,
	    //     to: _getJidByName(options.to, this)
	    // }).c('x', {
	    //     xmlns: 'http://jabber.org/protocol/muc#user'
	    // }).c('apply', {
	    //     from: from,
	    //     to: this._getGroupJid(options.groupId),
	    //     toNick: options.groupName
	    // }).c('reason').t(options.reason || '');
	    //
	    // this.sendCommand(dom.tree());
	};
	
	connection.prototype.createGroupAsync = function (p) {
	    var roomId = p.from
	    var me = this;
	    var toRoom = this._getGroupJid(roomId);
	    var to = toRoom + '/' + this.context.userId;
	    var options = this.groupOption;
	    var suc = p.success || _utils.emptyfn;
	
	    // Creating a Reserved Room
	    var iq = $iq({type: 'get', to: toRoom})
	        .c('query', {xmlns: 'http://jabber.org/protocol/muc#owner'});
	
	    // Strophe.info('step 1 ----------');
	    // Strophe.info(options);
	    me.context.stropheConn.sendIQ(iq.tree(), function (msgInfo) {
	        // log(msgInfo);
	
	        // for ie hack
	        if ('setAttribute' in msgInfo) {
	            // Strophe.info('step 3 ----------');
	            var x = msgInfo.getElementsByTagName('x')[0];
	            x.setAttribute('type', 'submit');
	        } else {
	            // Strophe.info('step 4 ----------');
	            Strophe.forEachChild(msgInfo, 'x', function (field) {
	                field.setAttribute('type', 'submit');
	            });
	        }
	
	        Strophe.info('step 5 ----------');
	        Strophe.forEachChild(x, 'field', function (field) {
	            var fieldVar = field.getAttribute('var');
	            var valueDom = field.getElementsByTagName('value')[0];
	            Strophe.info(fieldVar);
	            switch (fieldVar) {
	                case 'muc#roomconfig_roomname':
	                    _setText(valueDom, options.subject || '');
	                    break;
	                case 'muc#roomconfig_roomdesc':
	                    _setText(valueDom, options.description || '');
	                    break;
	                case 'muc#roomconfig_publicroom': // public 1
	                    _setText(valueDom, +options.optionsPublic);
	                    break;
	                case 'muc#roomconfig_membersonly':
	                    _setText(valueDom, +options.optionsMembersOnly);
	                    break;
	                case 'muc#roomconfig_moderatedroom':
	                    _setText(valueDom, +options.optionsModerate);
	                    break;
	                case 'muc#roomconfig_persistentroom':
	                    _setText(valueDom, 1);
	                    break;
	                case 'muc#roomconfig_allowinvites':
	                    _setText(valueDom, +options.optionsAllowInvites);
	                    break;
	                case 'muc#roomconfig_allowvisitornickchange':
	                    _setText(valueDom, 0);
	                    break;
	                case 'muc#roomconfig_allowvisitorstatus':
	                    _setText(valueDom, 0);
	                    break;
	                case 'allow_private_messages':
	                    _setText(valueDom, 0);
	                    break;
	                case 'allow_private_messages_from_visitors':
	                    _setText(valueDom, 'nobody');
	                    break;
	                default:
	                    break;
	            }
	        });
	
	        var iq = $iq({to: toRoom, type: 'set'})
	            .c('query', {xmlns: 'http://jabber.org/protocol/muc#owner'})
	            .cnode(x);
	
	        me.context.stropheConn.sendIQ(iq.tree(), function (msgInfo) {
	            me.addGroupMembers({
	                list: options.members,
	                roomId: roomId
	            });
	
	            suc(options);
	        }, function (errInfo) {
	            // errFn(errInfo);
	        });
	        // sucFn(msgInfo);
	    }, function (errInfo) {
	        // errFn(errInfo);
	    });
	};
	
	/**
	 * createGroup 创建群组
	 *
	 * 1. 创建申请 -> 得到房主身份
	 * 2. 获取房主信息 -> 得到房间form
	 * 3. 完善房间form -> 创建成功
	 * 4. 添加房间成员
	 * 5. 消息通知成员
	 * @param options
	 */
	connection.prototype.createGroup = function (options) {
	    this.groupOption = options;
	    var roomId = +new Date();
	    var toRoom = this._getGroupJid(roomId);
	    var to = toRoom + '/' + this.context.userId;
	
	    var pres = $pres({to: to})
	        .c('x', {xmlns: 'http://jabber.org/protocol/muc'}).up()
	        .c('create', {xmlns: 'http://jabber.org/protocol/muc'}).up();
	
	    // createGroupACK
	    this.sendCommand(pres.tree());
	};
	
	function _setText(valueDom, v) {
	    if ('textContent' in valueDom) {
	        valueDom.textContent = v;
	    } else if ('text' in valueDom) {
	        valueDom.text = v;
	    } else {
	        // Strophe.info('_setText 4 ----------');
	        // valueDom.innerHTML = v;
	    }
	}
	
	
	var WebIM = window.WebIM || {};
	WebIM.connection = connection;
	WebIM.utils = _utils;
	WebIM.statusCode = _code;
	WebIM.message = _msg.message;
	WebIM.doQuery = function (str, suc, fail) {
	    if (typeof window.cefQuery === 'undefined') {
	        return;
	    }
	    window.cefQuery({
	            request: str,
	            persistent: false,
	            onSuccess: suc,
	            onFailure: fail
	        }
	    );
	};
	
	module.exports = WebIM;
	
	if (false) {
	    module.hot.accept();
	}

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

	;(function () {
	    'use strict';
	
	    var _utils = __webpack_require__(192).utils;
	    var Message = function (type, id) {
	        if (!this instanceof Message) {
	            return new Message(type);
	        }
	
	        this._msg = {};
	
	        if (typeof Message[type] === 'function') {
	            Message[type].prototype.setGroup = this.setGroup;
	            this._msg = new Message[type](id);
	        }
	        return this._msg;
	    }
	    Message.prototype.setGroup = function (group) {
	        this.body.group = group;
	    }
	
	
	    /*
	     * text message
	     */
	    Message.txt = function (id) {
	        this.id = id;
	        this.type = 'txt';
	        this.body = {};
	    };
	    Message.txt.prototype.set = function (opt) {
	        this.value = opt.msg;
	        this.body = {
	            id: this.id
	            , to: opt.to
	            , msg: this.value
	            , type: this.type
	            , roomType: opt.roomType
	            , ext: opt.ext || {}
	            , success: opt.success
	            , fail: opt.fail
	        };
	
	        !opt.roomType && delete this.body.roomType;
	
	    };
	
	    /*
	     * cmd message
	     */
	    Message.cmd = function (id) {
	        this.id = id;
	        this.type = 'cmd';
	        this.body = {};
	    };
	    Message.cmd.prototype.set = function (opt) {
	        this.value = '';
	
	        this.body = {
	            to: opt.to
	            , action: opt.action
	            , msg: this.value
	            , type: this.type
	            , roomType: opt.roomType
	            , ext: opt.ext || {}
	            , success: opt.success
	        };
	        !opt.roomType && delete this.body.roomType;
	    };
	
	    /*
	     * loc message
	     */
	    Message.location = function (id) {
	        this.id = id;
	        this.type = 'loc';
	        this.body = {};
	    };
	    Message.location.prototype.set = function (opt) {
	        this.body = {
	            to: opt.to
	            , type: this.type
	            , roomType: opt.roomType
	            , addr: opt.addr
	            , lat: opt.lat
	            , lng: opt.lng
	            , ext: opt.ext || {}
	        };
	    };
	
	    /*
	     * img message
	     */
	    Message.img = function (id) {
	        this.id = id;
	        this.type = 'img';
	        this.body = {};
	    };
	    Message.img.prototype.set = function (opt) {
	        opt.file = opt.file || _utils.getFileUrl(opt.fileInputId);
	
	        this.value = opt.file;
	
	        this.body = {
	            id: this.id,
	            file: this.value,
	            apiUrl: opt.apiUrl,
	            to: opt.to,
	            type: this.type,
	            ext: opt.ext || {},
	            roomType: opt.roomType,
	            onFileUploadError: opt.onFileUploadError,
	            onFileUploadComplete: opt.onFileUploadComplete,
	            success: opt.success,
	            fail: opt.fail,
	            flashUpload: opt.flashUpload,
	            width: opt.width,
	            height: opt.height,
	            body: opt.body,
	            uploadError: opt.uploadError,
	            uploadComplete: opt.uploadComplete
	        };
	
	        !opt.roomType && delete this.body.roomType;
	    };
	
	    /*
	     * audio message
	     */
	    Message.audio = function (id) {
	        this.id = id;
	        this.type = 'audio';
	        this.body = {};
	    };
	    Message.audio.prototype.set = function (opt) {
	        opt.file = opt.file || _utils.getFileUrl(opt.fileInputId);
	
	        this.value = opt.file;
	        this.filename = opt.filename || this.value.filename;
	
	        this.body = {
	            id: this.id
	            , file: this.value
	            , filename: this.filename
	            , apiUrl: opt.apiUrl
	            , to: opt.to
	            , type: this.type
	            , ext: opt.ext || {}
	            , length: opt.length || 0
	            , roomType: opt.roomType
	            , file_length: opt.file_length
	            , onFileUploadError: opt.onFileUploadError
	            , onFileUploadComplete: opt.onFileUploadComplete
	            , success: opt.success
	            , fail: opt.fail
	            , flashUpload: opt.flashUpload
	            , body: opt.body
	        };
	        !opt.roomType && delete this.body.roomType;
	    };
	
	    /*
	     * file message
	     */
	    Message.file = function (id) {
	        this.id = id;
	        this.type = 'file';
	        this.body = {};
	    };
	    Message.file.prototype.set = function (opt) {
	        opt.file = opt.file || _utils.getFileUrl(opt.fileInputId);
	
	        this.value = opt.file;
	        this.filename = opt.filename || this.value.filename;
	
	        this.body = {
	            id: this.id
	            , file: this.value
	            , filename: this.filename
	            , apiUrl: opt.apiUrl
	            , to: opt.to
	            , type: this.type
	            , ext: opt.ext || {}
	            , roomType: opt.roomType
	            , onFileUploadError: opt.onFileUploadError
	            , onFileUploadComplete: opt.onFileUploadComplete
	            , success: opt.success
	            , fail: opt.fail
	            , flashUpload: opt.flashUpload
	            , body: opt.body
	        };
	        !opt.roomType && delete this.body.roomType;
	    };
	
	    /*
	     * video message
	     */
	    Message.video = function (id) {
	
	    };
	    Message.video.prototype.set = function (opt) {
	
	    };
	
	    var _Message = function (message) {
	
	        if (!this instanceof _Message) {
	            return new _Message(message, conn);
	        }
	
	        this.msg = message;
	    };
	
	    _Message.prototype.send = function (conn) {
	        var me = this;
	
	        var _send = function (message) {
	
	            message.ext = message.ext || {};
	            message.ext.weichat = message.ext.weichat || {};
	            message.ext.weichat.originType = message.ext.weichat.originType || 'webim';
	
	            var json = {
	                from: conn.context.userId || ''
	                , to: message.to
	                , bodies: [message.body]
	                , ext: message.ext || {}
	            };
	
	            var jsonstr = _utils.stringify(json);
	            var dom = $msg({
	                type: message.group || 'chat'
	                , to: message.toJid
	                , id: message.id
	                , xmlns: 'jabber:client'
	            }).c('body').t(jsonstr);
	
	            if (message.roomType) {
	                dom.up().c('roomtype', {xmlns: 'easemob:x:roomtype', type: 'chatroom'});
	            }
	
	            setTimeout(function () {
	                if (typeof _msgHash !== 'undefined' && _msgHash[message.id]) {
	                    _msgHash[message.id].msg.fail instanceof Function
	                    && _msgHash[message.id].msg.fail(message.id);
	                }
	            }, 60000);
	            conn.sendCommand(dom.tree(), message.id);
	        };
	
	
	        if (me.msg.file) {
	            if (me.msg.body && me.msg.body.url) {// Only send msg
	                _send(me.msg);
	                return;
	            }
	            var _tmpComplete = me.msg.onFileUploadComplete;
	            var _complete = function (data) {
	
	                if (data.entities[0]['file-metadata']) {
	                    var file_len = data.entities[0]['file-metadata']['content-length'];
	                    me.msg.file_length = file_len;
	                    me.msg.filetype = data.entities[0]['file-metadata']['content-type'];
	                    if (file_len > 204800) {
	                        me.msg.thumbnail = true;
	                    }
	                }
	
	                me.msg.body = {
	                    type: me.msg.type || 'file'
	                    ,
	                    url: ((location.protocol != 'https:' && conn.isHttpDNS) ? (conn.apiUrl + data.uri.substr(data.uri.indexOf("/", 9))) : data.uri) + '/' + data.entities[0]['uuid']
	                    , secret: data.entities[0]['share-secret']
	                    , filename: me.msg.file.filename || me.msg.filename
	                    , size: {
	                        width: me.msg.width || 0
	                        , height: me.msg.height || 0
	                    }
	                    , length: me.msg.length || 0
	                    , file_length: me.msg.file_length || 0
	                    , filetype: me.msg.filetype
	                }
	                _send(me.msg);
	                _tmpComplete instanceof Function && _tmpComplete(data, me.msg.id);
	            };
	
	            me.msg.onFileUploadComplete = _complete;
	            _utils.uploadFile.call(conn, me.msg);
	        } else {
	            me.msg.body = {
	                type: me.msg.type === 'chat' ? 'txt' : me.msg.type
	                , msg: me.msg.msg
	            };
	            if (me.msg.type === 'cmd') {
	                me.msg.body.action = me.msg.action;
	            } else if (me.msg.type === 'loc') {
	                me.msg.body.addr = me.msg.addr;
	                me.msg.body.lat = me.msg.lat;
	                me.msg.body.lng = me.msg.lng;
	            }
	
	            _send(me.msg);
	        }
	    };
	
	    exports._msg = _Message;
	    exports.message = Message;
	}());


/***/ }),

/***/ 465:
/***/ (function(module, exports) {

	;(function () {
	    function Array_h(length) {
	        this.array = length === undefined ? [] : new Array(length);
	    }
	
	    Array_h.prototype = {
	        /**
	         * 返回数组长度
	         *
	         * @return {Number} length [数组长度]
	         */
	        length: function () {
	            return this.array.length;
	        },
	
	        at: function (index) {
	            return this.array[index];
	        },
	
	        set: function (index, obj) {
	            this.array[index] = obj;
	        },
	
	        /**
	         * 向数组的末尾添加一个或多个元素，并返回新的长度。
	         *
	         * @param  {*} obj [description]
	         * @return {Number} length [新数组的长度]
	         */
	        push: function (obj) {
	            return this.array.push(obj);
	        },
	
	        /**
	         * 返回数组中选定的元素
	         *
	         * @param  {Number} start [开始索引值]
	         * @param  {Number} end [结束索引值]
	         * @return {Array} newArray  [新的数组]
	         */
	        slice: function (start, end) {
	            return this.array = this.array.slice(start, end);
	        },
	
	        concat: function (array) {
	            this.array = this.array.concat(array);
	        },
	
	        remove: function (index, count) {
	            count = count === undefined ? 1 : count;
	            this.array.splice(index, count);
	        },
	
	        join: function (separator) {
	            return this.array.join(separator);
	        },
	
	        clear: function () {
	            this.array.length = 0;
	        }
	    };
	
	    /**
	     * 先进先出队列 (First Input First Output)
	     *
	     * 一种先进先出的数据缓存器
	     */
	    var Queue = function () {
	        this._array_h = new Array_h();
	    };
	
	    Queue.prototype = {
	        _index: 0,
	
	        /**
	         * 排队
	         *
	         * @param  {Object} obj [description]
	         * @return {[type]}     [description]
	         */
	        push: function (obj) {
	            this._array_h.push(obj);
	        },
	
	        /**
	         * 出队
	         *
	         * @return {Object} [description]
	         */
	        pop: function () {
	            var ret = null;
	            if (this._array_h.length()) {
	                ret = this._array_h.at(this._index);
	                if (++this._index * 2 >= this._array_h.length()) {
	                    this._array_h.slice(this._index);
	                    this._index = 0;
	                }
	            }
	            return ret;
	        },
	
	        /**
	         * 返回队列中头部(即最新添加的)的动态对象
	         *
	         * @return {Object} [description]
	         */
	        head: function () {
	            var ret = null, len = this._array_h.length();
	            if (len) {
	                ret = this._array_h.at(len - 1);
	            }
	            return ret;
	        },
	
	        /**
	         * 返回队列中尾部(即最早添加的)的动态对象
	         *
	         * @return {Object} [description]
	         */
	        tail: function () {
	            var ret = null, len = this._array_h.length();
	            if (len) {
	                ret = this._array_h.at(this._index);
	            }
	            return ret;
	        },
	
	        /**
	         * 返回数据队列长度
	         *
	         * @return {Number} [description]
	         */
	        length: function () {
	            return this._array_h.length() - this._index;
	        },
	
	        /**
	         * 队列是否为空
	         *
	         * @return {Boolean} [description]
	         */
	        empty: function () {
	            return (this._array_h.length() === 0);
	        },
	
	        clear: function () {
	            this._array_h.clear();
	        }
	    };
	    exports.Queue = Queue;
	}());


/***/ }),

/***/ 470:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 471:
470,

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var invariant = __webpack_require__(194);
	
	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function keyMirror(obj) {
	  var ret = {};
	  var key;
	  !(obj instanceof Object && !Array.isArray(obj)) ?  false ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : void 0;
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};
	
	module.exports = keyMirror;

/***/ })

});