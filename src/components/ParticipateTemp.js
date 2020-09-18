import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CellBlock from './CellBlock'

class Participate extends Component {
  render() {
    return (<CellBlock displayType="participate_temp" mobile={this.props.mobile} category="all" />)
  }
}

Participate.propTypes = {
  mobile: PropTypes.bool
}
export default Participate
