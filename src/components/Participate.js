import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CellBlock from './CellBlock'

class Participate extends Component {
  render() {
    return (<CellBlock displayType="participate" mobile={false} category="all" />)
  }
}

Participate.propTypes = {
  mobile: PropTypes.bool
}
export default Participate
