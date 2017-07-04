import React, { Component } from 'react'
import Slider from 'react-slick'
import { Avatar, List, ListItem, RaisedButton, Divider, FlatButton, Dialog } from 'material-ui'
import ApiCaller from '../utils/ApiCaller'
import Api from '../store/constants/Api'
import * as Format from '../utils/Format'
import Immutable, { Map } from 'immutable'
import Runtime from '../utils/Runtime'

const domain = Runtime.getDomain()

class StrategySuggest extends Component {
  render () {
    return (
      <div className="strategy-suggest">
        <div className="suggest-wrapper">
          <div className="suggest-box">
            <div style={{fontSize:24,textAlign:'center',lineHeight:'70px',letterSpacing:'5px'}}>手机玩A股</div>
            <div>
              <img style={{display:'block',margin:'0 auto'}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAABR1BMVEX///8AAAAKCgqjjGqXfVYmJiZcXFwuLi4cHBzNwa1vb2/Z1tEVFRU2NjZ+fX1gYGBAQD+hoaHa2dnAv7+dnJympqbr6+vJycrc3Ny1tbX29vZUVFT8/PyvsLBISEc7Ozv6+fmpqqppaWllZWV3d3fy8vKRkZGIiIjT0tLNzc1MTEyEg4OWlpY9p+nk5ORIrezDw8Pg4ODW1tbGxsaMjIwymdnQ0NC5ubnu7vACeckxoecFhtVQUFAbmeXm5ubZ0MFQsvDNycMhkNat6f11XlL8GTXu/f/gEzdwyPchj9XmbYdbtu4gj9UAbsP8UV4Tvf9UxfkAmu0AkO386uX5aX2Q1vj+6tXlMVHN8f7RwrXyurKzVH7mMlEjtPSulIaizt5XotH73MWGdKWtlIbi+/w4u/UAq/TA3OAmjcMAWrKpNmOKbUB+Xy6Nd9J2AAASY0lEQVR42u1bd3PrRBCXD1QQkixXWe5yiWuMW+wkTgIEHhDg0Xvv/fv/zepO67uLCgFmGJhh8Ryy32rz0+7e7t7eSfn1yX8D/aY8pfwb6In/cfyP4z+Ew80lkKcALeBCUSp0NOnPRBYBv+yjyxrlKsAoCFU5YwLdw6El8RQVoHPK3GJouGAJRxWvBcwKwtb+No6dAjQ84hivmGCL3jHxWzcofr4rLeG/CUcLemzVmD7sm1btz+BwY4+5VoCqyNySlZH2pPhbP5cz8PmmyLVURJrEcfSTcLDHQOZAxmHncoUsHA7FMaW/mchVysZBceuK4pcrlOY1etdEUebBCTJXBKOUyksrl2vsQ95VKg4VcfQQRwskFiqUThRlH8eRBzsK8maRXepHToRi0Asjx2kk3Kck0JWgj5bEW0rUR0dRdOQpRHbpyrJBNzqTLXlzNo42PBbi8B+AQxdwlCm/R3E4I1PAQcrOwJmrhOSIxXgb81nOIpRyzYhx15s5swGoPjBDXnveK8X0kWoXWR8sfsiPuWVfKS8QA8LjB6cR3qdT/ydgmr9uF8AxlHEE+O9TGcf4Po4S+rQN+qLu5DzMLv2YXaj4Zs4gxAqjkmaa5sy1DGIYxDKM2aA3GBEwk2oIYaGumb2Q12kTYCRuGFINdTayjNz8YXbRUuyCVJAV00bGgDmSlF/KssN2QBkxP822C0GeE4xjSEEKjjkGGkornuc4qX9+vjQsXdVVVScBF193NfCGJYHfDWAptNszmkmJbefQ7Eul2W6455ADVAvEg7EEHHkQaro+2oWoavg3VJIxXzhxuyzkp5sCAhgpAgMVN6HjQkkji88XTml+Os3IL5xMAExx5OHRZBznqTgA8BYlCnSeaBfS7tidjg0Eg+tS92saHdXN27qtA3pLd6niVLALxSHaheqjatkq2NDSQwMaqgZZxlBNYd6qbigd/4aeaJc41TC/0HGOJZlO/bRP9TEX9SH5qUkNaAM708fD6o9Ocl3IiiCGxqNjjwZIDXBQwQM61mHkgNd0HFEEU7A3xTF6GI7WtKf16Mfs5c2+ZubzvWkVZpDZIDrJO22LBiymOF0n1C6mNmVpw1CtK0cjKtE444zm5gbARruYWigXpPdhhE/4vffweh2ksgiF+mDUl4sgdsF8T9DHFepj+3fWDdypx3+EY0IZm8oGGeeojzbLc38Sh54zLCtXgXuJBRcrKl41iDlqo13IaGSAXSJ2NSxUHa2qdDWzAZOF4VANazbTLcuYzeBSn2l75UjNHIgmuWwcPFxTWvCU6+E0aDM/Fdi7Us3JiFBel9dBAo6QHoSjhBeC/bd0dHDeDgR2j9+/EHDkKY4rGQdQBo4ezXNA81FAQim5fmEe/p/kZvOTk+0IXHVQmMLvGMfgchayVzDv16MUCewFjeLQmADKOxIQDMonJydOIo4GqzyF8maYgDvAYuyKyZMWOl2B3aM4+jlOToom4vG0LattDRcISK4LVQobKI/sK/ifVLuVI7tw6gmiV2k45HXXPvCDUpgLt5tWyy8ofC5CnWyNxyz2uusCW+WY4z0rDQvLY+UBFwSF6ms/2BdWAo4aXSRm4NAUTgJnUXBVHR5TVvROyKQyjnySUJoGmmk48lJs4uqWcQxglDEfS8MdumpMH7wmEiydggNdCuuVLaR5b5ND2izYpK36pR2r3ao3hPqpt6yF4WbtMxClxQmMAg61uh8zBHKqa+32GXY5JtBAXj5j5clIo8rQBdN08YJ5K/dTyfkLgsTMfhDHUeY45JKW9waIMF8mHMcSkxyMrtA7IiBUkLhIwbHwipNiV6V22Y2HuT+m6dC7SaopVkUPDOiNx6BEb1IM63WJgupuUtxk5zmX6/oPyUxhlOXHW2/Z+bZJTWxQy3cfhMPNxsGFtu8XeXWFUrdJOTgOztxWzhmIE6Vb79bDD/XQJuvTNetd+Jn1sIZMwnDYrTclNEma6IXi6Kd5TAPjxLqwwZwUXcq/F9CkADjgsSm1LyVPQichPjYTcGDiumquirXItce1YhE+VS/07mEBxnqtCIDGXeC1lXE1C8dwB3K4RRoQC9c7CF/rxU0YZaogtxTHwdHL6/04CbLdGI4q19pIUkxTEWr7zPXtfX/ap+LIw5iSNpq8jTVP6jrP7+PwJBxJ82tQraXgaODlVQzHikfdcphFSkXWjFguF7G4zpvUSfHDpgxs6bXhVUsxHP8sOXiTBTFPXjT/YX2q8t6KVI/9FRzg2QYuFWd/EofBLD9eh1pZ76PUWJyzFVKlVbrXjTMdx+nv5OVO0ALnqhbW4PYW4rgq+v6+smJ6xkK2tPRLKFHGgaClNqBcr0v07RfffvHFEx9Iv/k8z0XUiUcRoazOwGHw9b7I78k4PnrtlRcovfXcKxG9ryBXQZgvDd7sEukmEcdmWy6XtyWQMPeJ1I6ssutCkIfRL1M68ZUX3jk9vQzp9P33r69PKV0/h3m/jDhKW18VcMzncPesS6dRRt9BRyvslXs0RvGMLOX6meconb6iKK+9Fn25fkHZyPrgHUh5KQCUUZ8OcMrE6oPWccJHCfHyGUrPXb6mAF2zL4CjLuOwZaNwv8vEoZ+c0N4saW8d09Eofz3v9EJ1G8QZucQilkrCtd/lKQMS4uieR6iuv/u4LdvFzKmikwp+d6455sAcJOHgKoztE/LuHls+SzgOoA6Go+nmRH3wFCqtKxdpeV9OLg7y7+T9KAFHW4lck+K4DK++f/PNZ65fepHJXgo43Jh/3OB1HIeT00OL6AZRw3xkWOEF5AetF7aboFWF239Bw9HBLoCD0fUl1cfpm6ffPPr0h+aLOVUlptOmOAqNntlzVBVkGZ2B2euZRFXZuqhh5mmXxIjHjzz1U5l4nw5xTGGk+rikMA6nLyjK+5dvf/UI6Ku3AQe2QAjTBCYXcc9oIQePeP3hKvfp2GtCuzQiHHchjssDoAjphTc/ffTho8/feSnE4eOmh8mcX8DhRylmmIaj0MmrtgWe0W93WvDXpo2QtLZhk66yJrqKbdGZZeu6TpTrM4hhh49QzvLlR48+fPNAcVSigh4kAq/RA0BtzbA7rK9t6WSB3bz8tBFfR9mI20xedwXCV/vdy7OzswP46Lvv0tr70aNvzj6NcLD8KO/10o4b76/X0/qnPbSjSpkJ31o/0vo+jssDrABefrmpwPjo1Tc///yM4SjkkOQ+vxhJM/aziQsKD13L6ISj2we72DfKOdEp2Qbe5VihXV4/uzsoymcffvjyuwDmPeUACrqgOHZ2zw7V2h5QXt221Z4NnqFdgXWYrDDca/krMH9GHJPbQNVYMe6Gfnq4Pbt9W3njs1c/efmzz15+VVFu7xAHEHi2JcT1WeYCI/ucwSL1XuBthDjevn7jw/cU5ZOXQxj1C6YP3pcS+hnTB+Hg/OrI7A9mBIwyMolhWPQTVc6Dfs/pGKTDMCuv316//d4bAAOAvAHDlxdnr3Mchah/GuYiY9QAj9MJyFKjaTLrZevDxPXcRoYuhHbCQohydwAYn3JBF6+/fnsr4cCYl0/SRGZfiveaZqk41Egf77zz3huvvnOKcn463N7evv74JZcx7oW1Tps93J/EoeZIZ5v3YCY7A3M2MEcm3utD6qfu16A4Xn3j1bevLy5obfDjxcXd3d3t7eOPPr4KEzMho4FDAVvzrWpZxAqt60IxMZvBBfTt+9t8uBmfsxLtkmchJxbaj8UY1wfAeOfw+uuHxwdwz8cHAHF7d/f4SzygwTf9eCovieLwIk0fALycjGOJ6UujCeuXwwWlx48fX0T084HXkBQHZSex0pDtoaXFMdX3rZxEY7pg3RbK5Uro4AHUuC3IEkYLal/lo8MZ0FtvvXV6Fl08935ULeGGgOWftMCeJ3uA0mgFbIm2pX37ahwHQr+K7dKteb91JazkO1R9H9OvH3zwNRP09QcfvPsJdGg9joPvCOu4SPTljkoch0stb8g4Nrwx6+PFgOJoCH2puWS9mrAvZgmm7dNxw3Ekr6NqQc2GB6iV/NLxE3ShQvcqwtLcEUDmWb7f73hdWytIu641F1NuyQ8gPHPGYmijfW2U1ocxFZnibVEkgVcKC5wI1Z2etF7lpknBkU+A0eU4QDAnLSZ+iGWWMLFI8rqZ+d0mYb7I/fUT4a5l9Xj4o1qqNkDXw91yNyTCPlC56h3Zi9UTvLTOlytwUlwE7LybMDpVNzD61SC9T8dxlCUtngu3zNBDVWFNwjuu+JhCZarz1M/7KtlxDEiLtcKHPCYoTaq42PEST8JRlutCV96Pmijd1PjB96PGVcQxvgk5S+cTcJHJolirjel8IUpxhTgYjbrVaJpXa7UVcNV3i+KqayKODvhdc1zlOJrZ5xx5H1cIwbHjWDqPTRGNk7f/KlwfUj22RvaMdWUD+tqoj/Nm97jddV4/x3NsatSiRn0INiwq3W7E2DxXzGMZiUYZ1v9YH82m0kjyjxpfYVMcqSSfNdvSdnxXxMEkIo5q8rkc7qoO2kWQOuHJJZXq0h0tIXLYgCN5c24Xx7Hwhjabt7I+/NVGiDdOOo4110d9WXXoxcrzatShNQFHUJ1gFd5Ky3MAZYA4GNEnFcmUNoa5+KKwWYkXnVg89el4k7mPPAU0LJLKOGJt4sxzKIp8TtqWcZQwlHGKny9c3IQqrNWifdO9L+6W+HAOelPa1MS9DM9fbkrFSN1r6nVc3Tf+akqn+Xq/X8lbljXsavi+l7Ge42GSunYTnxEoKXEF8dUqXxHZvL8epyD73HjAQ04XOcc8VnMiPI7FcRQwxXQwEcWolI2j4ZUXQioISq3W8ugWFii6XNiAkMokyozjUgxHtTzREDbgmE5alPyWX64zHwoqyecL5WQ0i2lf2EPQwTrIRXISyedxbbG/Lq0eFqnnYOX8MpdbZMI2k06roQad45VUHGVh66yRxJJxDhZIr8CBmQoh4bydbeF6MITijRAhrpOgooO6gwDcr10IqOtyMPCkg+0oVBwJbRiAiECVcZhwKGc+4vpImy9yAT6mKsnMLxvJT31hayybEuNHO/MoT2ZcL0g4PO5LfwWHkzOIwT6oD8uyVKINTNPRQnC9HjxjyKXSM1ORtomaazFeAz5RQe2YPdOxLYO1UOAOykil0/sM1aBcfRlHFiU9gMn8FGONTJuk51X54l0qTh+KI16y8JxIsDErk8cDjYRjK+Copvdx/XZf6/e0fj6f78OgmXDRZusMVTcMPVSkqZnMhoQ0AI0VasQ2KS/cpQG7wuyi61ao9zyI68E/9BzCzn022juhn6yrQo7IPgfL19m1pBLUSOjseccZKdNIWI8s+AxUHn4uuIkBMIbjHvs5x7GMydoK+baaeX6MTDt2J/rwc9K21VSKuhbawNVdCKn2dDq1HTbZdeRFfTAEDU23XbvTtkBou00wGLi6BUGd1UyGq7pX06k7ffi58ePTCQs/I8Yr6kMIN1MM1SPRT5P2gT7OPkd//xaTZw5Ogj6GMRwNeYJHjLH13OTeewUhkQCXXuwtAHaLbegUMBmYqk5A0bZByij7yuyE7xXoljZwqfg5sQnw2jCGFEnWdXy+GI6s9yzqOZH4ufEr2sbiOUDqXhXx4G4aVdHzJRxZ75004zjwYLzJe5xUdzi7+dZ6Kq2T/GOS8R4OHc0ZpBhzMJpijxgYC/2RYRF75BArtHzf1OrsPZxZg1hkMGoTNTTKCWzQOtAQho8Zfma0ua51wYssI90ucX10OSee50eHVhFtQd5Z5HEMJMrEDXgeX98+n/WeVl3AsaHloIOTRac4yP09+JVgFDWOAxcvCTiy3ltrmlszZxFGtDMOI/0hVCuxLBjh0juepSA5Z+ZgEWRQ9TUwB8ypUCbKnJsxHOnv8XHo2bQUDo3LiwZb2H/cymqI4Uh/r5HP82xCffDzY8KB6jYvvkUczRiOrPc8gX/LfvOPAcFYlkLFsfc8g9AlN1TqiuNYzfcNfN/UFc7jFioBryf3jowj+73XeIUDjJq8gVCkY11y64BFaMxbRIg1xzaohCP7PWBOW6EdacgFNVNfE8sV3sNSdJYTkw/5VhJxxGknnScatrz98uaKih/7VXznCUkWj/5R8/c7doZ4URRre3/nQxRplZYPwVFE35Nf77UxfsyycfDeIkEErXiFzHFkvzd/E3uTkMh7GTIl7qvH+9SLFBxDr+it115xPCmux8UxvfCiOFqcjMdjvGHheUxGceINYdyxm8bjcNzt1pPQo+EOEDdZ4U3r3aaOo7cewx9K0se/gf7H8T+O/waO1tP/EBWP9PSzMXryd6BnyosEdD7pAAAAAElFTkSuQmCC'/>
            </div>
            <div style={{fontSize:14,textAlign:'center',lineHeight:'70px'}}>扫描二维码下载点点投顾APP</div>
          </div>
        </div>
      </div>
    )
  }
}

class ShowDialog extends Component{
  render (){
    const actions = [
      <FlatButton
        label="关闭"
        style={{width:'100%'}}
        primary={true}
        onTouchTap={this.props.closeHandle}
      />,
    ]

    return (
      <div>
        <Dialog
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.closeHandle}
          autoScrollBodyContent={true}
        >
          <div dangerouslySetInnerHTML={{__html:this.props.content}}/>
        </Dialog>
      </div>
    )
  }
}

class Notice extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      noticeList:[]
    }
  }

  componentDidMount (){
    this.fetchNoticeList()
  }

  fetchNoticeList (){
    ApiCaller.call(Api.activity.getNoticeList, {page:1,pageSize:2}, (res) => {
      if(res.code == 0){
        const state = this.state
        state.noticeList = res.results
        this.setState(state)
      }
    })
  }

  noticeClickHandle (id){
    this.props.noticeHandle(id)
  }

  render(){
    const noticeList = this.state.noticeList
    const html = noticeList.map((item,index) => {
      if(index > 1){
        return
      }
      let time = item.createTime
      if(time.indexOf(' ') > -1){
        time = time.substr(0,time.indexOf(' '))
      }
      return <li key={index} onClick={this.noticeClickHandle.bind(this,item.id)}><a>{item.title + '[' + time + ']'}</a></li>
    })
    return(
      <div className='notice-list'>
        <div style={{width:1200,margin:'0 auto',overflow:'hidden'}}>
          <div style={{float:'left'}}>
            <i className="iconfont icon-notice" style={{ color: '#fff', fontSize: 18 }} />
            <span style={{marginLeft:8}}>平台公告:</span>
          </div>
          <ul className='banner-notice-content'>
            {html}
          </ul>
          <span style={{float:'right'}}>
            <a style={{color:'#fff'}} href={'http://www.' + domain + '/about/announcement/'}>更多>></a>
          </span>
        </div>
      </div>
    )
  }
}

export default class Banner extends React.Component {
  constructor (props) {
    super(props)
    let bannerData = localStorage.getItem('banner') || '[]'
    bannerData = JSON.parse(bannerData)
    this.state = {
      bannerData:bannerData,
      dialog:{
        open:false,
        closeHandle:null,
        content:'',
        title:''
      },
      notice:[]
    }
  }

  componentDidMount (){
    //获取数据
    ApiCaller.call(Api.home.getBanner, {}, (res) => {
      if(res.errcode == 0){
        const state = this.state
        state.bannerData = res.datas
        localStorage.setItem('banner', JSON.stringify(res.datas))
        this.setState(state)
      }
    })
  }

  noticeDetailHandle (id){
    const state = this.state
    const notice = state.notice
    //查看缓存数据
    for(let item in notice){
      if(notice[item].id == id){
        this.ShowDialogHandle(notice[item].content,notice[item].title)
        return
      }
    }
    //未缓存，请求数据
    const api = Api.activity.getNoticeList
    const apiMap = Map(api).set('url',api.url + '/' + id)
    ApiCaller.call(apiMap.toJS(), {}, (res) => {
      if(res.code == 0){
        const state = this.state
        state.notice.push(res.notice)
        this.setState(state)
        this.ShowDialogHandle(res.notice.content,res.notice.title)
      }
    })
  }

  ShowDialogHandle (content,title){
    const state = this.state
    state.dialog = {
      open:true,
      closeHandle:() => {
        const state = this.state
        state.dialog.open = false
        this.setState(state)
      },
      content:content,
      title:title
    }
    this.setState(state)
  }

  render () {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplaySpeed:6000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false
    }
    const bannerData = this.state.bannerData
    const html = bannerData.map((item,index) => {
      return <div key={index} style={{backgroundImage:'url(' + item.imageUrl + ')'}}><a target='_blank' href={item.hrefUrl} style={{display:'block',height:'100%'}}></a></div>
    })
    return (
      <div className="banner">
        <Slider {...sliderSettings} className="banner-slider">
          {html}
        </Slider>
        <StrategySuggest />
        <Notice noticeHandle={this.noticeDetailHandle.bind(this)}/>
        <ShowDialog open={this.state.dialog.open} closeHandle={this.state.dialog.closeHandle} content={this.state.dialog.content} title={this.state.dialog.title}/>
      </div>
    )
  }
}

module.exports = exports['default']
