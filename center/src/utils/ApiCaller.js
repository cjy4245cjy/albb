import request from 'superagent'
import Sign from './Sign'
import Cookie from './Cookie'
import Global from '../constants/Global'
import { getDomain } from './Runtime'

const domain = getDomain()
const cookieOptions = {
  domain: domain,
  path: '/'
}

function getCommonHeader() {
  const signRes = Sign.signMd5()
  const sid = Cookie.get('sid', cookieOptions)

  // 通用参数
  const commonParams = {
    cClientType: 1, // 浏览器
    cUserId: Cookie.get('uid', cookieOptions),
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
  }
  return commonParams
}

function call(inf, params, callback) {
  if (arguments.length == 2)
  {
    callback = params
    params = {}
  }

  const domain = getDomain()
  const commonParams = getCommonHeader()

  params = params || {}
  params.uid = params.uid || commonParams.cUserId || ''
  params.sid = params.sid || commonParams.cSid || ''
  params.time = commonParams.cTime
  //params.sign = commonParams.cSign

  const type = inf.type.toLowerCase()
  let req = request[type](inf.url).set(commonParams)
  if (inf.form)
  {
    for (var p in params) {
      req = req.field(p, params[p])
    }
  } else if (inf.xform) {
    req.type('form').send(params)
  } else {
    req = req[type=='post'?'send':'query'](params)
  }

  req.end((err, res) => {
    if (Global.DEBUG)
      console.log('请求[' + type.toUpperCase() + ']:' + inf.url)
    const result = JSON.parse(res.text)
    if (isNaN(result.code))
      result.code = result.errcode
    if (result.code == -2) {
      location.href = "//user." + domain + "/login.html?url=" + location.href
    }
    if (Global.DEBUG)
      console.log(result)
    result.msg = result.msg || result.message || result.errmsg
    callback(result)
  })
}

const PROTOCOL = location.protocol
const SINA_SUGGEST_URL = PROTOCOL + "//suggest3.sinajs.cn/suggest/type=111&key=%key%&name=suggestdata_%ts%"
const SINA_STOCK_URL = PROTOCOL + "//hq.sinajs.cn/%ts%&list="

function removeElement(_element){
  var _parentElement = _element.parentNode;
  if(_parentElement){
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
  var isIE = !-[1,];
  if(isIE){
    oScript.onreadystatechange = function(){
      if(this.readyState == 'loaded' || this.readyState == 'complete'){
        removeElement(oScript)
        callback();
      }
    }
  } else {
    // IE9及以上浏览器，Firefox，Chrome，Opera
    oScript.onload = function(){
      removeElement(oScript)
      callback();
    }
  }
  document.body.appendChild(oScript);
}

// 获取股票输入建议
function callSuggest(key, callback) {
  if (!key.length) {
    if (callback)
      callback({data:[]})
    return
  }
  var ts = new Date().getTime().toString()
  getScript(SINA_SUGGEST_URL.replace(/%ts%/g, ts).replace(/%key%/g, key), function(){
    var s, r = [];
    s = (window['suggestdata_' + ts] || '').split(';');
    for (var i = 0; i < s.length; i++)
    {
      if (!s[i].length)
        continue;
      var d = s[i].split(',');
      r.push({
        stockCode:d[2],
        stockFullCode:d[3],
        stockName:d[4],
        stockShortPy:d[5]
      });
    }
    if (callback && r.length)
      callback({data: r});
  });
}

// 获取股票信息
function callStockInfo(codes, callback) {
  if (!codes.length)
    return
  if (codes.indexOf(',') > 0)
    codes = codes.split(',')
  if (!(codes instanceof Array))
    codes = [codes]
  getScript(SINA_STOCK_URL.replace(/%ts%/, new Date().getTime()) + codes.join(','), function () {
    var s,r = [];
    for (var i = 0; i < codes.length; i++)
    {
      s = (window['hq_str_' + codes[i]] || '').split(',');

      if (!s.length)
        continue;
      r.push({
        stockName:s[0],
        stockFullCode:codes[i],
        todayStartPrice:parseFloat(s[1]).toFixed(2),
        yesterdayEndPrice:parseFloat(s[2]).toFixed(2),
        nowPrice:parseFloat(s[3]).toFixed(2),
        todayMaxPrice:parseFloat(s[4]).toFixed(2),
        todayMinPrice:parseFloat(s[5]).toFixed(2),
        buy1:parseInt(s[10] / 100),
        buy1Price:parseFloat(s[11]).toFixed(2),
        buy2:parseInt(s[12] / 100),
        buy2Price:parseFloat(s[13]).toFixed(2),
        buy3:parseInt(s[14] / 100),
        buy3Price:parseFloat(s[15]).toFixed(2),
        buy4:parseInt(s[16] / 100),
        buy4Price:parseFloat(s[17]).toFixed(2),
        buy5:parseInt(s[18] / 100),
        buy5Price:parseFloat(s[19]).toFixed(2),
        sell1:parseInt(s[20] / 100),
        sell1Price:parseFloat(s[21]).toFixed(2),
        sell2:parseInt(s[22] / 100),
        sell2Price:parseFloat(s[23]).toFixed(2),
        sell3:parseInt(s[24] / 100),
        sell3Price:parseFloat(s[25]).toFixed(2),
        sell4:parseInt(s[26] / 100),
        sell4Price:parseFloat(s[27]).toFixed(2),
        sell5:parseInt(s[28] / 100),
        sell5Price:parseFloat(s[29]).toFixed(2),
        limitUp: (s[2] * (1 + 0.1)).toFixed(2),
        limitDown: (s[2] * (1 - 0.1)).toFixed(2),
        increase: (s[3] - s[2]).toFixed(2),
        increasePercent: ((s[3] - s[2]) / s[2] * 100).toFixed(2)
      });
    }
    if (callback)
      callback({data:r});
  });
}

export default {
  call: call,
  callSuggest: callSuggest,
  callStockInfo: callStockInfo,
  getCommonHeader: getCommonHeader
}
