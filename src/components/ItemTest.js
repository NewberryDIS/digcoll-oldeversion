import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './Item.css'

class ItemTest extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
    this.handleLoad = this.handleLoad.bind(this)
  }

  componentWillMount() {
    window.addEventListener('load', this.handleLoad)
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleLoad() {
    this.setState({
      loaded: true
    })
  }

  render() {
    const itemid = this.props.itemId
    const itemArr = itemid.split('-')
    let iurl = ''
    if (itemArr[0] === 'ia') {
      iurl = 'https://archive.org/details/' + itemArr[1]
    } else {
      iurl = '//collections.carli.illinois.edu/cdm/ref/collection/' + itemArr[0] + '/id/' + String(itemArr[1])
    }
    iurl = 'http://publications.newberry.org/bookreader/brnby/demo2.php?id=' + itemid
    const loading = <div style={{position: 'fixed', width: '100%', height: '100%', top: 0, left: 0, background: 'rgba(255,255,255,0.8) url("http://i.stack.imgur.com/FhHRx.gif") 50% 50% no-repeat'}} />
    return (
      <div>
      {this.state.loaded ? null : loading}
      <div style={{width: '100%'}} className={style.iContainer} id="openseadragon1">
        <iframe ref="iframe" src={iurl} />
      </div>
      </div>
    )
  }

}

ItemTest.propTypes = {
  getItem: PropTypes.func,
  item: PropTypes.object,
  itemId: PropTypes.string
}

export default ItemTest
