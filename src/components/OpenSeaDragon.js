import React, { Component } from 'react'
import OpenSeadragon from 'openseadragon'
import PropTypes from 'prop-types'

// helper function to load image using promises
const loadImage = (src)=> new Promise(function(resolve, reject) {
  const img = document.createElement('img')
  img.addEventListener('load', function() { resolve(img) })
  img.addEventListener('error', function(err) { console.log(err + reject(404)) })
  img.src = src
})

class OpenSeaDragon extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.initSeaDragon()
  }
  shouldComponentUpdate() {
    return false
  }
  initSeaDragon() {
    const self = this
    const { id, image, type } = this.props
    loadImage(image).then(data => {
      self.viewer =  OpenSeadragon({
        id: id,
        visibilityRatio: 1.0,
        constrainDuringPan: false,
        defaultZoomLevel: 1,
        minZoomLevel: 1,
        maxZoomLevel: 10,
        zoomInButton: 'zoom-in',
        zoomOutButton: 'zoom-out',
        homeButton: 'reset',
        fullPageButton: 'full-page',
        nextButton: 'next',
        previousButton: 'previous',
        showNavigator: true,
        navigatorId: 'navigator',
        tileSources: {
          type: type,
          levels: [ { url: image, height: data.naturalHeight, width: data.naturalWidth } ]
        }
      })

    })
  }

  render() {
    // const self = this
    const { id } = this.props
    return (
        <div className="ocd-div" ref={node => {this.el = node}}>
            <div className="navigator-wrapper c-shadow">
                <div id="navigator" />>
            </div>
            <div className="openseadragon" id={id} />
            <ul className="ocd-toolbar">
                <li><a id="zoom-in"><i className="fa fa-plus" /></a></li>
                <li><a id="reset"><i className="fa fa-circle" /></a></li>
                <li><a id="zoom-out"><i className="fa fa-minus" /></a></li>
                <li><a id="full-page"><i className="fa fa-cog" /></a></li>
            </ul>
        </div>
    )
  }
}

OpenSeaDragon.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string
}

OpenSeaDragon.defaultProps = { id: 'ocd-viewer',  type: 'legacy-image-pyramid' }

export default OpenSeaDragon

