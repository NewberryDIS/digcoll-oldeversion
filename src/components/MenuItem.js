import React, {Component} from 'react'
import PropTypes from 'prop-types'
import style from './Images.css'
import { Link } from 'react-router-dom'

class MenuItem extends Component {
  render() {
    return (
    <div onClick={this.props.onClick} className={this.props.active ? style.ActiveBtn : style.Btn}>
      <Link to={'/' + this.props.link} className={this.props.active ? style.Active : null}>
        <h3>{this.props.text}</h3>
      </Link>
    </div>
    )
  }
}

MenuItem.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.object,
  active: PropTypes.bool,
  link: PropTypes.string
}

export default MenuItem
