import Security from './Security'

function signMd5 () {
  const time = new Date().getTime()
  return { time: time, sign: Security.encryptMd5(time + 'moc.89ddy')}
}

export default {
  signMd5: signMd5
}
