import React, { Component } from 'react'
import MenuButtons from './MenuButtons'
import { Sticky } from 'react-sticky'
import PropTypes from 'prop-types'

class StickyMenu extends Component {
  render() {
    const stickyToggler = (
    <Sticky>
      {({
        style
      }) => {
        const sty = {...style, width: '100%', zIndex: 9999, height: this.props.mobile ? 50 : 100, top: 50, display: 'block'}
        return (
          <div
            style={sty}
          >
          <MenuButtons />
          </div>
        )
      }}
    </Sticky>)
    return (<div>{stickyToggler}</div>)
  }
}

StickyMenu.propTypes = {
  mobile: PropTypes.bool
}

export default StickyMenu
