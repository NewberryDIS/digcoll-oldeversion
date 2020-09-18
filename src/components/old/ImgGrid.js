import React, { Component } from 'react'
import Gallery from 'react-grid-gallery'

function shuffle(array) {
  let currentIndex = array.length
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    const temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}
const IMAGES = shuffle(window.IMGDATA.items)

class ImgGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      maxrow: 4
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight
    const body = document.body
    const html = document.documentElement
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight)
    const windowBottom = windowHeight + window.pageYOffset
    if (windowBottom >= docHeight - 1) {
      this.setState({
        maxrow: this.state.maxrow + 1
      })
    }
  }
  handleClick(e) {
    this.setState({
      maxrow: this.state.maxrow + 1
    })
    e.preventDefault()
  }

  render() {

    return (
      <div>
      <Gallery images={IMAGES} maxRows={this.state.maxrow} />
      <div style={{clear: 'both'}} />
      </div>
    )
  }
}

export default ImgGrid
