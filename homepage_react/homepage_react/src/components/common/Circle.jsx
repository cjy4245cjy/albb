import React from 'react'

export default class Circle extends React.Component {
  constructor (props) {
    super(props)
  }

  setCircle (){
    if (this.props.percent || this.props.percent == 0) {
      const fullColor = this.props.fullColor
      const percent = this.props.percent
      const r = parseInt(this.props.outR / 2)

      var canvas = this.refs.canvasCircle;
      if(canvas){
        var ctx=canvas.getContext('2d');
        //清空画布
        ctx.clearRect(0,0,300,150);
        //确定起始角度,和结束角度位置
        const startP = this.props.startAngle || 0
        const endP = startP + percent
        ctx.beginPath();
        ctx.translate(0, 0);
        ctx.moveTo(r, r);
        ctx.arc(r, r, r, Math.PI * startP * 2, Math.PI * endP * 2,false);
        ctx.closePath();
        ctx.fillStyle = fullColor
        ctx.fill();
      }
    }
  }

  componentDidMount (){
    this.setCircle()
  }

  render () {
    const outR = this.props.outR
    const inR = this.props.inR
    const padding = parseInt((outR - inR)/2)
    const shadowColor = this.props.shadowColor
    const id = this.props.id
    const circleStyle = this.props.style || {}
    circleStyle.width = outR
    circleStyle.height = outR
    circleStyle.background = shadowColor
    this.setCircle()

    return (
      <div className="circle-out-side" style={circleStyle}>
        <div className="circle-in-side" style={{ width:inR,height:inR,top:padding,left:padding}}/>
        <canvas ref='canvasCircle' className="circle-in-sector"></canvas>
      </div>
    )
  }
}
module.exports = exports['default']
