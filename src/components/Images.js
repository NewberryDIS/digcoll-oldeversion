import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Masonry from 'react-masonry-component'
import Image from './Image'
import galleryStyle from './Images.css'
import imageStyle from './Image.css'
import Facets from './Facets'

class Images extends Component {

  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.handleImagesLoaded = this.handleImagesLoaded.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
  }

  componentWillMount() {
    this.props.filter([])
    this.setState({
      loading: true
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  handleScroll() {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight
    const body = document.body
    const html = document.documentElement
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight)
    const windowBottom = windowHeight + window.pageYOffset
    if (windowBottom >= docHeight - 1) {
      this.props.displayMore()
    }
  }

  handleImagesLoaded() {
    this.setState({
      loading: false
    })
  }

  handleFilter(a) {
    const f = a !== undefined ? [a] : []
    this.props.filter(f)
  }

  render() {
    const masonryOpts = {
      itemSelector: '.' + imageStyle.Image,
      transitionDuration: 0,
      fitWidth: true
    }
    const displayedItems = this.props.items.slice(0, this.props.position)

    const mason = (<Masonry
	    className={galleryStyle.Gallery}
      ref={(masonry) => this.masonry = masonry}
        onImagesLoaded={this.handleImagesLoaded}
        options={masonryOpts}>
        {displayedItems.map((item, ind) => {
          return (
            <Image
              key={'item-' + ind}
              loading={false}
              item={item}/>
          )
        })
        }
    </Masonry>)
    const masonGall = (
      <div style={{width: this.props.mobile ? null : '75%'}}>
        {mason}
      </div>)
    return (
      <div style={{display: this.props.mobile ? 'block' : 'flex'}}>
      {this.props.mobile ? null : masonGall}
      <Facets sendData={this.handleFilter} mobile={this.props.mobile} />
      {this.props.mobile ? masonGall : null}
      </div>
    )
  }
}

Images.propTypes = {
  filter: PropTypes.func,
  displayMore: PropTypes.func,
  items: PropTypes.array,
  position: PropTypes.number,
  categories: PropTypes.array,
  itemtype: PropTypes.string,
  mobile: PropTypes.bool
}

export default Images
