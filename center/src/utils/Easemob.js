import Security from './Security'
import Cookie from './Cookie'
import { getDomain } from './Runtime'
import WebIM from 'easemob-websdk'
import config from '../constants/WebIMConfig'
WebIM.config = config
console.log(config)
const domain = getDomain()
const cookieOptions = {
  domain: domain,
  path: '/'
}

class Easemob {
  constructor(props) {
    this.props = props
    this.conn = new WebIM.connection({
      https: WebIM.config.https,
      url: WebIM.config.xmppURL,
      isAutoLogin: WebIM.config.isAutoLogin,
      isMultiLoginSessions: WebIM.config.isMultiLoginSessions
    })
    this.listen()
  }

  listen() {
    this.conn.listen(this.props.listeners || {})
  }

  login() {
    const options = {
      apiUrl: WebIM.config.apiURL,
      user: this.props.user,
      pwd: Security.encryptMd5(this.props.user),
      appKey: WebIM.config.appkey,
      success: token => {
        const _token = token.access_token;
        Cookie.set('webim_token', _token, cookieOptions);
      },
      error: err =>{
        console.log(err)
      }
    }
    this.conn.open(options)
  }
}

export default Easemob
