import React, { Component } from 'react'
import MenuItem from './MenuItem'
import style from './Images.css'
import PropTypes from 'prop-types'

class MenuButtons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
    }
  }

  componentWillMount() {
    let activeindex = 0
    if (location.hash.includes('participate')) {
      activeindex = 2
    } else if (location.hash.includes('collections')) {
      activeindex = 1
    }
    this.setState({
      activeIndex: activeindex
    })
  }

  handleClick(choice, index, e) {
    this.setState({
      activeIndex: index
    })
    e.preventDefault()
  }

  render() {
    const MenuData = [{
      type: 'ITEMDATA',
      text: <div>browse all</div>,
      link: ''
    }, {
      type: 'DATA',
      text: <div>search by collection</div>,
      link: 'collections'
    }, {
      type: 'PARDATA',
      link: 'participate',
      text: <div>participate<br /><span style={{textTransform: 'none'}}>Help uncover history!</span></div>
    }]

    const options = MenuData.map((btn, i) => {
      return (
        <MenuItem
          active={this.state.activeIndex === i}
          key={i}
          onClick={(e) => this.handleClick(btn.type, i, e)}
          text={btn.text}
          link={btn.link} />
      )
    })
    return (<div className={style.Toggler}>{options}</div>)
  }
}

MenuButtons.propTypes = {
  location: PropTypes.func
}

export default MenuButtons
