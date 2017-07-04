import { Modal } from 'antd'

function show (onOk) {
  Modal.confirm({
    title: '您是否已完成充值？',
    content: '如果您在充值的过程中遇到问题，请联系在线客服或拨打400-7111-288咨询',
    okText: '已完成',
    cancelText: '取消',
    onOk: onOk
  })
}

export default {
  show: show
}
