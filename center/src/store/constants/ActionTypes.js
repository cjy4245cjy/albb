import keyMirror from 'fbjs/lib/keyMirror'

export default keyMirror({
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
})

module.exports = exports['default']
