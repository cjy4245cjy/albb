import React from 'react'

export default class Pager extends React.Component{
  constructor (props) {
    super(props)
  }

  handleLiClick (e){
    e = e || window.event;
    const tar = e.target;
    const data = this.props;
    var index = parseInt(tar.getAttribute('data-index'));
    switch (index) {
      case -1:
        index = 1;
        break;
      case -2:
        index = data.currentPage - 1;
        break;
      case -3:
        index = data.currentPage + 1;
        break;
      case -4:
        index = data.totalPages;
      default:
        break;
    }
    if(index == data.currentPage || index < 1 || index > data.totalPages){
      return;
    }
    this.props.onPageChange(index)
  }

  render (){
    const data = this.props;
    const pagearray = [];
    const totalPages = data.totalPages || 1
    var startP = data.currentPage > (data.pageSize / 2)?data.currentPage - parseInt(data.pageSize / 2):1;
    var loop = startP + data.pageSize - 1;
    if(loop > totalPages){
      var endP = totalPages;
      var soop = endP - data.pageSize + 1;
      startP = soop > 0?soop:1;
    }else{
      var endP = loop;
    }
    for(var i = startP;i <=  endP;i ++){
      pagearray.push(i);
    }
    const html = pagearray.map((item,i) => {
      return <li key={i} data-index={item} className={data.currentPage  == item?'pageLi active':'pageLi'}>{item}</li>
    });
    return (
      <div className={!data.totalPages?'hide':'pager-main-body'} style={this.props.style}>
        <ul onClick={this.handleLiClick.bind(this)}>
          <li style={{marginLeft:0}} data-index='-1'>第一页</li>
          <li data-index='-2'>上一页</li>
          {html}
          <li data-index='-3'>下一页</li>
          <li data-index='-4'>最末页</li>
        </ul>
      </div>
    )
  }
}

module.exports = exports['default']
