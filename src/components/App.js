import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Images from '../containers/Images'
import Item from '../containers/Item'
import style from './App.css'
import Banner from './Banner'
import ParticipateTemp from './ParticipateTemp'
import Collections from './Collections'
import { StickyContainer } from 'react-sticky'
import StickyMenu from './StickyMenu'
import About from './About'
import Advanced from './Advanced'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobile: false
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }
  componentWillMount() {
    const width = document.documentElement.clientWidth
    if (width < 500) {
      this.setState({
        mobile: true
      })
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    const width = document.documentElement.clientWidth
    if (width > 500) {
      this.setState({
        mobile: false
      })
    } else {
      this.setState({
        mobile: true
      })
    }
  }

  render() {
    const notHome = window.location.hash.includes('item') || window.location.hash.includes('about') || window.location.hash.includes('advanced')
    return (
      <div className={style.App} id="App">
        <Banner type="main" mobile={this.state.mobile} />
        {notHome ? null : (<Header display={notHome ? 'none' : 'block'} mobile={this.state.mobile} />)}
        <StickyContainer>
        {notHome ? null : (<StickyMenu display={notHome ? 'none' : 'block'} mobile={this.state.mobile} />)}
        <Route exact path="/" render={(props) => (<Images {...props} mobile={this.state.mobile} />)} />
        <Route path="/item/:itemId" component={Item} />
        <Route path="/participate" render={(props) => (<ParticipateTemp {...props} mobile={this.state.mobile} />)} />
        <Route path="/collections" render={(props) => (<Collections {...props} mobile={this.state.mobile} />)} />
        <Route path="/about" render={(props) => (<About {...props} mobile={this.state.mobile} />)} />
        <Route path="/advanced" component={Advanced} />
        <Footer />
        </StickyContainer>
      </div>
    )
  }

}


export default App
