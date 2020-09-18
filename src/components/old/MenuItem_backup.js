import React, {Component} from 'react'
import PropTypes from 'prop-types'
import style from './Images.css'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'


class MenuItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdownActive: false
    }
  }
  render() {
    const list = this.props.facets.map((f, i) => (
      <li key={i}><a href="#" value={f} onClick={this.props.onClick}>> {f}</a></li>
    ))
    const arrow = (<span style={{cursor: 'pointer'}} className={style.Arrow} >&#9658;</span>)
    const downarrow = (<span style={{cursor: 'pointer'}} className={style.Arrow} >&#9660;</span>)
    const btn = (<a href="#" value="all" onClick={this.props.onClick} className={this.props.active ? style.Active : null}><h3>{this.props.text}</h3></a>)
    const dropdown = (<ul><li><u>Filter items</u></li>{list}</ul>)
    return (
      <div className={this.props.active ? style.ActiveBtn : style.Btn}>
      <Dropdown onShow={() => this.setState({dropdownActive: true})} onHide={() => this.setState({dropdownActive: false})}>
      <DropdownTrigger style={{width: 'unset'}}>
      {this.state.dropdownActive ? downarrow : arrow}
      </DropdownTrigger>
      {btn}
      <DropdownContent>
      {dropdown}
      </DropdownContent>
      </Dropdown>
      </div>
    )
  }
}

MenuItem.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  active: PropTypes.boolean,
  facets: PropTypes.array,
  value: PropTypes.string,
  index: PropTypes.number
}

export default MenuItem
