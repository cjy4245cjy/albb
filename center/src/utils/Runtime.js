function getDomain() {
  var host = location.host
  return host.substr(host.indexOf('zjqycf'))
}

module.exports = {
  getDomain: getDomain
}
