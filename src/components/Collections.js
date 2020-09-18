import React, { Component } from 'react'
import CellBlock from './CellBlock'
import PropTypes from 'prop-types'

class Collections extends Component {
  render() {
    return (<CellBlock displayType="collection" mobile={this.props.mobile}/>)
  }
}

Collections.propTypes = {
  mobile: PropTypes.bool,
}

export default Collections
