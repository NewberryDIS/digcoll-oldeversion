import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import style from './Image.css'

class Image extends Component {

  render() {
    const i = this.props.item
    const className = this.props.loading ? style.ImageLoading : style.Image
    let imgurl = ''
    let thumbScale = '25'
    if (i.coll === 'nby_teich') {
      thumbScale = '50'
    }
    if (i.coll === 'IA') {
      const id = i.ptr
      imgurl = 'https://archive.org/services/img/' + id
    } else {
      imgurl = 'http://collections.carli.illinois.edu/utils/ajaxhelper/?CISOROOT=' + i.coll + '&CISOPTR=' + i.img_ptr + '&action=2&DMWIDTH=5000&DMHEIGHT=5000&DMSCALE=' + thumbScale
    }
    i.alias = i.coll.toLowerCase() + '-' + i.ptr
    const maxCharCount = 80
    const truncTitle = i.title.substring(0, maxCharCount) + ' [...]'
    return (
    <Link to={'/item/' + i.alias + '/'}>
      <figure className={className}>
        <img src={imgurl} />
        <figcaption>
          {i.title.length < maxCharCount ? i.title : truncTitle}
        </figcaption>
      </figure>
    </Link>
    )
  }
}


Image.propTypes = {
  item: PropTypes.object,
  loading: PropTypes.bool
}

export default Image
