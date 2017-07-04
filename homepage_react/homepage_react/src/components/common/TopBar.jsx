import React, { Component } from 'react'
import Runtime from '../../utils/Runtime'
import Cookie from '../../utils/Cookie'

const domain = Runtime.getDomain()
class Logined extends Component {
  render () {
    const cookieInfo = this.props.user.get('cookieInfo')
    const centerLink = 'http://user.' + domain + '/center/'
    const helpLink = 'http://www.' + domain + '/help/'
    return (
      <div className="topbar-right">
        欢迎您，{cookieInfo.get('phone')}
        <a href={helpLink}>帮助中心</a>
        <a href="javascript:void(0)" onClick={this.props.onLogout}>退出登录</a>
      </div>
    )
  }
}

class UnLogined extends Component {
  render () {
    const regLink = 'http://user.' + domain + '/reg.html'
    const helpLink = 'http://www.' + domain + '/help/center'
    const authLink = 'http://tg.' + domain + '/adviser/apply'
    return (
      <div className="topbar-right">
        <a href="javascript:void(0)" onClick={this.props.showLogin}>立即登录</a>
        <a href={regLink}>免费注册</a>
        <a href={helpLink}>帮助中心</a>
        <a href={authLink} className='hide'>投顾认证</a>
      </div>
    )
  }
}

export default class TopBar extends React.Component {
  render () {
    return (
      <div className="topbar">
        <div className="topbar-wrapper">
          <div className="topbar-left">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABBBJREFUWAntVk9oHGUU/30zu2lSkhVbFSqpiis2Kh7MjmJjiwe1gkgPHiIWlB5ELRQaBTHdrRCwmdpLo9JWtAcF8RIFwYsI/kHQVsluL2K1xRRbi8UeWltr02x29/l7385kd2ayG3NYvOTB2+/73vu9P/O+N28HWKb/uQJmyfH3He7B1e5eVOd6IW6vtTfVy3DTl1Gu/YMx78pSfLZPYO/RG1GRDTDYCJEhOr6D3LNIgFnqfyYfIX8LlzzqnW5ls3AC/tRjEJOn0QOtDJcmlyKMswc7Bz+BMdJsG01gz9StEOcdPu3DzaDY/ioEx+HgGHE/WZ0xd6GGO1mpAZ5XxPBNRzkC4z6L/OCxUNhIwD+6HlL7jIprQmVs/RNG9qG88iDWzMzinLmN5dUrAaos+Q3yKy5gJapmBJAdlF5rdcmfGdRkM1699wtV1RPwf1jNhvqF5+uSeEoEh1DpeQkop9BV3c7zi5SuimHP09sEyu5+YMZBV9d+4p6KYcLjJW4GUPDOOlZSc0e5LhS8xhy3Y5f3HNJX1iNdPUGnrxGrwSvkkwHrfpXVKSadziHvbaGM1eDlJCnDXtAe402KGP4+k8TQ0MhWFHIH4E89z0T0eq4n/80nfRlzvKqCl7Wse5WpzmKIVZuC9yabWX1XyVES2YIxcQzGi2uo+SOq5Umwg0/+FvV6n28E+gsMNMSn0+tKkl8coN1hKsL7H7FJ+MVtlB9MGEiq3+HroeWLksGHNrhfeoKKiYZSRloGV5BNjJgGTUB95L23KXq/IQ52FTNXb8Lx4u8U9Qfi85hzs+iuZli4HynLBPLTyOduib/Hga6x6JX6pd8ouCkQXuLbcjf3F+lvmuvqQH6G1Vlbb0JxNrBEr5N3w3FzGLvnL7bYIQLD4Pq+fLdocPWsg0axDcpYX6PeRdTMRuo+oupjVv5RhaQsbtfgKa477V5/xkvDbIJN82fd1PDfZ7xiGxNGk99kfRZyk/RE3w2qV6BxBsa+ZlLiN4vs3mBdQtZKsCCWPq3vqFEygXSfZpiNwuxpCNrli1Edo39cccoilXkyLkwmAGyLg4IzZwbexeSk20IPq1OMzpeFyMgLcXHzTQF7v+9HJaVvRBuSL3mpT7ODz0ZAdp7IB9Q9FJHHD6nKWrxy/5lQXG/C8FRNP6ITqD3ZAMexu/gNJ2WJDyucph5tHmTwvva21NoYeC/ERRMQuS9ULLL2sbMfZ0AyE47Wsb1pPcZ8AtG7MvyL7TTFYkQTEAlneOfSiMWIJgBzrnORQ8/RGNEEjHwVwjq2xmJEE+guH2DgzzsWXH3XY8yHSPavDpoT2c3s7BxfM36k2ql4My1WkHUIxVmd6QdHnGcpO0U/0/woOUk/Jdw+/SmGhxW3TMsVmK/Av6wvNJHY49uyAAAAAElFTkSuQmCC" height="17" style={{ marginTop: -3 }} />
            <span>&nbsp;400-7111-288&nbsp;</span>
          </div>
          { this.props.user.get('logined') ? <Logined {...this.props} /> : <UnLogined {...this.props} />}
        </div>
      </div>
    )
  }
}

module.exports = exports['default']
