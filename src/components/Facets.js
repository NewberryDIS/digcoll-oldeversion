import React, { Component } from 'react'
import style from './Facets.css'
import PropTypes from 'prop-types'
import InfoCircle from 'react-icons/lib/fa/info-circle'
import Plus from 'react-icons/lib/fa/plus'
import Minus from 'react-icons/lib/fa/minus'
import Modal from './Modal'

class Facets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      modalContent: null,
      hide: []
    }
  }

  componentWillMount() {
    if (this.props.mobile) {
      this.setState({
        hide: [0, 1, 2, 3]
      })
    }
  }

  handleModal(x) {
    this.setState({
      isOpen: !this.state.isOpen,
      modalContent: x
    })
  }

  handleSendData(val, i) {
    this.props.sendData(val)
    if (this.props.mobile) {
      this.setState({
        hide: [...this.state.hide, i]
      })
    }
  }

  toggleFacets(i) {
    const ind = this.state.hide.indexOf(i)
    const minusarr = this.state.hide.filter(function(x) {return x !== i})
    const plusarr = [...this.state.hide, i]
    const newstate = ind > -1 ? minusarr : plusarr
    this.setState({
      hide: newstate
    })
  }
  render() {
    const facetobj = [{title: 'Topics', desc: (<div><p>Browsing topics are based on current strengths of the digitized collection and frequent researcher requests.</p><p>The Newberry&#39;s digital collection represent only a fraction of the library&#39;s vast holdings; as more material is digitized and made freely available online, browsing topics will be expanded to reflect new strengths and researcher requests.</p><p>To browse additional subjects, please also use the Search by Collection tab.</p></div>), facets: ['African Americans', 'Agriculture & Farm Life', 'American Indian & Indigenous Studies', 'Art, Music, & Dance', 'Buildings & Architecture', 'Chicago & the Midwest', 'Civil War', 'French Revolution', 'Genealogy & Local History', 'Medieval, Renaissance, & Early Modern Studies', 'Nature & Animals', 'Politics & Social Action', 'Railroads', 'Religion', 'Travel & Exploration', 'Women']}, {title: 'Formats', desc: (<div><p>Browsing formats are based on current strengths of the Newberry&#39;s digitized collections and frequent researcher requests.</p><p>The Newberry’s digital collection represent only a fraction of the library&#39;s vast holdings; as more material is digitized and made freely available online, browsing formats will be expanded to reflect new strengths and researcher requests.</p></div>),  facets: ['Advertisements', 'Books', 'Engineering drawings', 'Financial & Legal Documents', 'Letters, Journals & Diaries', 'Maps', 'Music', 'Newspapers & Broadsides', 'Pamphlets', 'Photos & Illustrations', 'Postcards']}, {title: 'Collection', facets: ['Chicago and the Midwest', 'Chicago Protest Collection', 'Curt Teich Postcard Archives Digital Collection', 'Daily Life Along the Chicago, Burlington & Quincy Railroad', 'Edward E. Ayer Digital Collection', 'Everett D. Graff Collection of Western Americana', 'French Pamphlets Collection', 'German-American Birth and Baptismal Certificates, 1700-1900', 'Helen Morrison Photographs of Kentucky African Americans', 'Italian Religious Broadsides', 'Modern Manuscript Digital Collection', 'Music Treasures', 'Newberry at Internet Archive',  'Pullman Digital Collection', 'Raphael Tuck & Sons Oilette Postcards', 'Religious Change and Print, 1450-1700']}, {title: 'Century', facets: ['pre-1400', '1400-1499', '1500-1599', '1600-1699', '1700-1799', '1800-1899', '1900-1999', '2000-']}]
    const sidebar = facetobj.map((facet, index) => {
      const facetlist = facet.facets.map((f, i) => {
        let collel = null
        if (facet.title === 'Collection') {
          const colldata = window.DATA.items.find(function(a) {return a.title === f})
          const collinfo = <div><h2 style={{textAlign: 'center', textTransform: 'uppercase', marginTop: 0, borderBottom: '2px solid black', paddingBottom: 10}}>{f}</h2><div style={{display: 'flex'}}><div style={{float: 'left', width: '50%', textAlign: 'center'}}><img src={colldata.imgurl} style={{maxHeight: 400, maxWidth: '80%'}}/></div><div style={{float: 'left', width: '50%'}}><span>{colldata.descrip}</span></div></div><a href={colldata.url} style={{display: 'block', marginTop: '20px', textAlign: 'center'}} target="_blank"><h3>Go to collection homepage</h3></a></div>
          collel = <a onClick={() => this.handleModal(collinfo)}><InfoCircle /></a>
        }
        return (<li key={i}><a href="#" onClick={() => this.handleSendData(f, index)}>{f}</a> {collel}</li>)
      })
      const hid = this.state.hide.includes(index)
      return (
        <div key={index} style={{width: '100%', fontSize: this.props.mobile ? '0.9em' : null}} className={style.Facets} >
          <h3>{facet.title}  {'desc' in facet ? (<a onClick={() => this.handleModal(facet.desc)}><InfoCircle /></a>) : null} <a onClick={() => this.toggleFacets(index)}>{this.state.hide.includes(index) ? (<Plus />) : (<Minus />)}</a></h3>
          <ul style={{visibility: hid ? 'hidden' : null, opacity: hid ? '0' : '1', height: hid ? '0' : 'unset', transfrom: hid ? 'translateY(-4em)' : 'translateY(0%)', transition: 'all 0.3s', listStyleType: this.props.mobile ? 'none' : null, padding: this.props.mobile ? 0 : null}}>{facetlist}</ul>
        </div>
      )
    })
    const modalInfo = this.state.modalContent
    return (<div style={{background: 'rgba(0,0,0,0.1)', padding: '10px', marginRight: '20px', marginTop: '20px', width: this.props.mobile ? null : '25%', textAlign: this.props.mobile ? 'center' : null, margin: this.props.mobile ? 'auto' : null}}>
              <Modal show={this.state.isOpen} onClose={() => this.handleModal(null)}>
                {modalInfo}
              </Modal>
              <a onClick={() => this.handleSendData()}>
              <h3 className={style.All} style={{textTransform: 'uppercase', cursor: 'pointer'}}>Browse all</h3>
              </a>
              {sidebar}
            </div>)
  }
}

Facets.propTypes = {
  sendData: PropTypes.func,
  mobile: PropTypes.bool
}


export default Facets
