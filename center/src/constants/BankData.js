const BankData = [
  {
    code:'ICBC',
    name: '中国工商银行',
    limits: [
      { key: 1, once: '300', daily: '300', condition: '柜面注册存量静态密码客户', remarks: '工行签约借记卡' },
      { key: 2, once: '500', daily: '1000', condition: '电子银行口令卡客户（未开通短信认证）', remarks: '工行签约借记卡'},
      { key: 3, once: '2000', daily: '5000', condition: '电子银行口令卡客户（开通短信认证）', remarks: '工行签约借记卡'},
      { key: 4, once: '20万', daily: '100万', condition: '电子密码器', remarks: '工行签约借记卡'},
      { key: 5, once: '50万', daily: '100万', condition: '一代U盾用户(未开通短信认证)', remarks: '工行签约借记卡' },
      { key: 6, once: '100万', daily: '100万', condition: '一代U盾用户(开通短信认证)', remarks: '工行签约借记卡' },
      { key: 7, once: '100万', daily: '100万', condition: '二代U盾用户', remarks: '工行签约借记卡' },
      { key: 8, once: '5000', daily: '5000', condition: '网银互联签约客户', remarks: '工行签约借记卡' }
    ]
  },
  // {
  //   code: 'ABC',
  //   name: '中国农业银行',
  //   limits: [
  //     { key: 1, once: '1000', daily: '1000', condition: '动态口令卡', remarks: '农行金穗卡' },
  //     { key: 2, once: '1000', daily: '3000', condition: 'K码支付', remarks: '农行金穗卡' },
  //     { key: 3, once: '50万', daily: '100万', condition: '一代K宝', remarks: '农行金穗卡' },
  //     { key: 4, once: '100万', daily: '500万', condition: '二代K宝', remarks: '农行金穗卡' }
  //   ]
  // },
  {
    code: 'BOC',
    name: '中国银行',
    limits: [
      { key: 1, once: '1000', daily: '5000', condition: '中银快付', remarks: '中银快付' },
      { key: 2, once: '5万', daily: '50万', condition: '口令卡&UKEY', remarks: '中行借记卡' },
      { key: 3, once: '5000', daily: '信用额度（如信用额度超过50万，限额为50万）', condition: '口令卡&UKEY', remarks: '中行借记卡' },
      { key: 4, once: '5000', daily: '50万', condition: '信用额度（如信用额度超过50万，限额为50万）', remarks: '贷记卡' }
    ]
  },
  {
    code: 'CCB',
    name: '中国建设银行',
    limits: [
      { key: 1, once: '5万', daily: '5万', condition: '全部（签约）', remarks: '建行签约借/贷记卡' },
      { key: 2, once: '5000', daily: '5000', condition: '动态口令卡（刮刮卡）', remarks: '建行签约借/贷记卡' },
      { key: 3, once: '5000', daily: '5000', condition: '短信动态口令', remarks: '建行签约借/贷记卡' },
      { key: 4, once: '50万', daily: '50万', condition: '二代网银盾', remarks: '建行签约借/贷记卡' },
      { key: 5, once: '50万', daily: '50万', condition: '网银高端版', remarks: '建行签约借/贷记卡' },
      { key: 6, once: '50万', daily: '50万', condition: 'USB Key+短信动态口令', remarks: '建行签约借/贷记卡' },
      { key: 7, once: '50万', daily: '50万', condition: 'USB Key+短信确认', remarks: '建行签约借/贷记卡' },
      { key: 8, once: '5万', daily: '10万', condition: 'USB Key', remarks: '建行签约借/贷记卡' },
      { key: 9, once: '50万', daily: '50万', condition: '音频盾', remarks: '建行签约借/贷记卡' },
      { key: 10, once: '5000', daily: '5000', condition: '账号支付（有行业限制）', remarks: '建行签约借/贷记卡' },
      { key: 11, once: '0', daily: '0', condition: '非签约', remarks: '非签约的借记卡和贷记卡' }
    ]
  },
  {
    code: 'POST',
    name: '中国邮政储蓄银行',
    limits: [
      { key: 1, once: '10000', daily: '10000', condition: '动态口令', remarks: '邮政借记卡' },
      { key: 2, once: '20万', daily: '20万', condition: '电子令牌', remarks: '邮政借记卡' },
      { key: 3, once: '200万', daily: '200万', condition: 'USBKey', remarks: '邮政借记卡' }
    ]
  },
  {
    code: 'CMBC',
    name: '中国民生银行',
    limits:[
      { key: 1, once: '5000', daily: '5000', condition: '大众版(短信验证码)', remarks: '民生借记卡' },
      { key: 2, once: '5000', daily: '5000', condition: '大众版(浏览器证书)', remarks: '民生借记卡' },
      { key: 3, once: '50万', daily: '50万', condition: '贵宾版(U宝)', remarks: '民生借记卡' },
      { key: 4, once: '50万', daily: '50万', condition: '贵宾版(OTP)', remarks: '民生借记卡' }
    ]
  },
  {
    code: 'CMBCHINA',
    name: '招商银行',
    limits: [
      { key: 1, once: '5000', daily: '50000', condition: '大众版', remarks: '招行借记卡' },
      { key: 2, once: '无限额', daily: '无限额', condition: 'USBKey', remarks: '招行借记卡' }
    ]
  },
  {
    code: 'CEB',
    name: '中国光大银行',
    limits: [
      { key: 1, once: '1万', daily: '1万', condition: '动态密码', remarks: '阳光借记卡' },
      { key: 2, once: '50万', daily: '50万', condition: '阳光令牌', remarks: '阳光借记卡' },
      { key: 3, once: '1万', daily: '1万', condition: 'PUSH支付', remarks: '阳光借记卡' }
    ]
  },
  {
    code: 'ECITIC',
    name: '中信银行',
    limits: [
      { key: 1, once: '1000', daily: '5000', condition: '文件证书', remarks: '中信签约借记卡' },
      { key: 2, once: '1000', daily: '5000', condition: '动态口令', remarks: '中信签约借记卡' },
      { key: 3, once: '100万', daily: '100万', condition: 'USBKEY', remarks: '中信签约借记卡' }
    ]
  },
  {
    code: 'GDB',
    name: '广发银行',
    limits: [
      { key: 1, once: '3000', daily: '3000', condition: '手机动态验证码', remarks: '广发签约借记卡' },
      { key: 2, once: '30万', daily: '30万', condition: 'K盾', remarks: '广发签约借记卡' }
    ]
  },
  {
    code: 'PINGANBANK',
    name: '平安银行',
    limits: [
      { key: 1, once: '5万', daily: '5万', condition: 'USBKey', remarks: '平安(深发)借记卡' },
      { key: 2, once: '5万', daily: '5万', condition: '动态口令', remarks: '平安(深发)借记卡' }
    ]
  }
]

export default BankData
