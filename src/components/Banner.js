import React, { Component } from 'react'
import style from './Banner.css'
import AngleLeft from 'react-icons/lib/fa/angle-left'
import PropTypes from 'prop-types'
// import AngleRight from 'react-icons/lib/fa/angle-right'
import logo from '../../static/images/newberry_logo_white_no_text_med.png'

class Banner extends Component {
  render() {
    const goBack = (<a href="#" onClick={() => window.history.back()} style={{float: 'left'}} className={style.BannerTitle}>
        <AngleLeft /> Go back
      </a>)
    const userSurvey = (<div className={style.UserSurvey}><span>Help improve this site! Please <a href="https://goo.gl/forms/aekqwmgHcpsBDwk63" target="_blank">provide feedback</a></span></div>)
    const bannerContent = (<span><a href="https://www.newberry.org"><img src={logo} style={{maxHeight: 40}} /></a>
          <a href="https://www.newberry.org/digital-newberry" target="_blank" className={style.LogoName}>
            <span className={style.BannerTitle}>
              Digital Newberry
            </span>
          </a>
          </span>)
    const mobileContent = (<a href="https://www.newberry.org" target="_blank" className={style.LogoName}>
            <span className={style.BannerTitle}>
              Digital Newberry: Collections
            </span>
          </a>)
    return (
      <div className={style.Banner}>
          {this.props.type !== 'main' ? goBack : null}
            {!this.props.mobile ? bannerContent : mobileContent}
          {userSurvey}
      </div>
    )
  }
}

Banner.propTypes = {
  type: PropTypes.string,
  mobile: PropTypes.bool
}

export default Banner
