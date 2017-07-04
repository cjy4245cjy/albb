function isTradeTime() {
  // 交易时间
  // 9:30 - 11:29
  // 13:00 - 14:59
  const curTime = new Date()
  let isTradeTime = false
  let curHour = curTime.getHours()
  const curMin = curTime.getMinutes()

  // 解决时区问题
  const timeZoneOffset = curTime.getTimezoneOffset()
  let hourOffset = (timeZoneOffset + 480) / 60
  curHour += hourOffset
  if (curHour > 23)
    curHour -= 24

  if (curHour >= 9 && curHour <= 11) {
    isTradeTime = true
    if (curHour == 9 && curMin < 30)
      isTradeTime = false
    else if (curHour == 11 && curMin > 29)
      isTradeTime = false
  }
  else if (curHour >= 13 && curHour < 15) {
    isTradeTime = true
  }
  return isTradeTime
}

module.exports = {
  isTradeTime: isTradeTime
}
