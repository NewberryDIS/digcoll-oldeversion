import React, { Component } from 'react'
import style from './Header.css'
import PropTypes from 'prop-types'
// import NewberryLogo from '../../static/images/newberry_logo_white_no_text.png'
import Backgrounds from './HeaderBackgrounds.js'
import { Link } from 'react-router-dom'
import Search from './search'

class Header extends Component  {
  shouldComponentUpdate() {
    return false
  }
  render() {
    const backgrounds = Backgrounds.backgrounds
    const numImg = backgrounds.length
    const randImgIndex = Math.floor(Math.random() * numImg)
    const randImgData = backgrounds[randImgIndex]
    const bgImage = randImgData.imgurl
    const bgTitle = randImgData.title
    const bgLink = randImgData.link
    const bgCollection = randImgData.collection.title
    const bgCollectionLink = randImgData.collection.link
    return (
            <div className={style.Header} style={{ backgroundImage: 'url(' + bgImage + ')', display: 'block'}}>
            <div className={style.Gradient} />
            <div className={style.HeaderContent}>
                <div className={style.HeaderLogo}>
                    <div className={style.LogoText}><h2>Digital Newberry: Collections</h2><h3>Beta</h3></div>
                </div>
                <div style={{clear: 'both'}} />
                <Search />
                <div className={style.HeaderFooter}>
                <h4>Explore more than 1 million digitized items</h4>
                <span className={style.DescripText}>including manuscripts, maps, books, photographs, artworks, & other rare & unique materials from the collections of the Newberry, Chicago's independent research library since 1887</span>
                <div className={style.Contact}>
                <span style={{float: 'left'}}><Link to={'/about'}>help/contact</Link></span>
                <span style={{float: 'right'}}><a href="https://www.newberry.org/rights-and-reproductions" target="_blank">Rights & Reproductions</a></span>
                </div>
                </div>
            </div>
            <div className={style.HeaderDescription}>
              <em>Image: </em><a href={bgLink} target="_blank">{bgTitle}</a> from <a href={bgCollectionLink} target="_blank">{bgCollection}</a>
            </div>
            </div>
    )
  }
}

Header.propTypes = {
  handleChangeTypeOf: PropTypes.func,
}

export default Header
