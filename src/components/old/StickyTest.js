import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './Images.css'
import Book from 'react-icons/lib/fa/book'
import File from 'react-icons/lib/fa/file'
import Photo from 'react-icons/lib/fa/image'
import Pencil from 'react-icons/lib/fa/pencil'
import Upload from 'react-icons/lib/fa/upload'
import Tags from 'react-icons/lib/fa/tags'

import { Sticky, StickyContainer } from 'react-sticky'

class StickyTest extends Component {
  render() {
    const classNa = 'Active'
    const classNb = 'Active'
    const toggler = <div ref={(divElement) => this.divElement = divElement} ><a href="#" className={classNa} onClick={(e) => this.handleClick('ITEMDATA', e)}><h2><Book /><File /><Photo /></h2><h3>digital collections</h3></a><a href="#" className={classNb} onClick={(e) => this.handleClick('PARDATA', e)}><h2><Pencil /><Upload /><Tags /></h2><h3>participate</h3></a></div>
    console.log(toggler)
    return (
          <div style={{height: '100%'}}>
            <StickyContainer
              style={{ background: 'white', float: 'left', height: this.props.height }}
            >
              <Sticky>
                {({
                  this.style
                }) => {
                  return (
                    <div
                      style={{
                        ...style,
                        background: 'grey'
                      }}
                    >
                      <h2
                        style={{
                          lineHeight: '80px',
                          padding: '0 15px',
                          margin: 0
                        }}
                      >
                        <span className="pull-left">&lt;Sticky #1 /&gt;</span>
                      </h2>
                    </div>
                  )
                }}
              </Sticky>

              <h2 className="text-center" style={{ marginTop: 150 }}>
                &lt;StickyContainer #1 /&gt;
              </h2>
            </StickyContainer>
          )
      </div>
    )
  }
}

StickyTest.propTypes = {
  height: PropTypes.number
}

export default StickyTest
