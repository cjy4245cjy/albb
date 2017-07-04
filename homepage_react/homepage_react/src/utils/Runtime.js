import Detector from './Detector'
import Cookie from './Cookie'

function getParams()
{
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1)
    {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++)
        {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

function getDomain() {
  var host = location.host
  return host.substr(host.indexOf('zjqycf'))
}

function initBaiduCount() {
  const domain = getDomain()
  if (domain.indexOf('.com') > -1) {
    const isPC = "macosx" == Detector.os.name || "windows" == Detector.os.name
    // 移动端
    let url = "//hm.baidu.com/hm.js?da662e344602cb5e493e438d30107fda"
    if (isPC) {
      // PC端
      url = "//hm.baidu.com/hm.js?c517ee8dbbab228796b220f53a8f8463"
    }

    var oScript = document.createElement('script');
    oScript.type = 'text/javascript';
    oScript.async = true;
    oScript.src = url;
    document.body.appendChild(oScript);
  }
}

function initSpread() {
  Cookie.set('spreadCode', getParams()['spreadCode'], {
    domain: getDomain(),
    path: '/',
    expires: 30
  })
}

module.exports = {
  getDomain: getDomain,
  initBaiduCount: initBaiduCount,
  initSpread: initSpread
}
