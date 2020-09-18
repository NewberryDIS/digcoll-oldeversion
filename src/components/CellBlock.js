import React, { Component } from 'react'
import {Row, Column, Grid} from 'react-cellblock'
import styles from './Images.css'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'
import EditPencil from 'react-icons/lib/fa/edit'
import Tag from 'react-icons/lib/fa/tag'
import Upload from 'react-icons/lib/fa/upload'
import Repeat from 'react-icons/lib/fa/repeat'
import AngleDown from 'react-icons/lib/fa/angle-down'
import Modal from './Modal'

function sortAlpha(array) {
  return array.sort((a, b) => a.title.localeCompare(b.title))
}

class CellBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      activeColumn: 'all',
      isOpen: false,
      modalContent: null
    }
    this.handleModal = this.handleModal.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }
  handleClick(e) {
    const val = e.currentTarget.getAttribute('value')
    this.setState({
      activeColumn: val
    })
  }

  handleModal(par, e) {
    this.setState({
      isOpen: true,
      modalContent: par
    })
    e.preventDefault()
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen,
      modalContent: null
    })
  }

  render() {
    const collections = window.DATA.items
    const colls = sortAlpha(collections)
    const groupSize = 2
    const rows = colls.map((c, index) => {
      return (
      <Column key={index} width={this.props.mobile ? null : '1/2'}>
      <div className={styles.Collection}>
        <a href={c.url} target="_blank"><img src={c.imgurl} /></a>
        <div className={styles.CollectionModule} >
        <a href={c.url} target="_blank"><h4>{c.title}</h4></a>
        <span>{c.tdesc}</span>
        </div>
      </div>
      </Column>
      )
    }).reduce((r, element, index) => {
      index % groupSize === 0 && r.push([])
      r[r.length - 1].push(element)
      return r
    }, []).map((rowContent, index) => {
      return (<Fade key={index}><Row className={styles.CatRow}>{rowContent}</Row></Fade>)
    })
    const dataColumns = (
      <Column>
        {rows}
      </Column>
      )
    // case: participate
    const participate = window.PARDATA
    const collcat = participate.collcat
    const collcatkeys = Object.keys(collcat)
    const columnOne = collcatkeys.map((c, index) => {
      const otherColumns = collcat[c].map((r) => {
        const desc = <div style={{paddingTop: '100px'}}><Column width={'3/4'}><a href={r.directlink}><h3>{r.title}</h3></a><br /><span>{r.colldesc}</span></Column></div>
        // let link = r.directlink
        let title = r.title
        if (r.title === 'Indexing America' || r.title === 'Postcard Tag' || r.title === 'Mapping Chicago History') {
          title = (<div>{r.title} <br /> (coming soon)</div>)
        }
        return (<Row key={r.title}><Column width={this.props.category === c ? '1/4' : null}><AngleDown style={{color: '#999999', marginTop: '10px', marginBottom: '10px', fontSize: '2em'}}/><div className={styles.Module}><a target="_blank" style={{background: 'url(http://publications.newberry.org/umbrella/beta/static/images/' + r.alias + '.jpg', cursor: 'pointer'}} onClick={() => this.handleModal(r)}><div className={styles.ModOverlay} /><h2 style={{textTransform: 'uppercase'}}>{title}</h2></a></div></Column>{this.props.category === c ? desc : null}</Row>)
      })
      let vertLine = <div className={styles.VertLine} />
      let icon = ''
      if (index === 0) {
        icon = <EditPencil />
      } else if (index === 1) {
        icon = <Tag />
      } else if (index === 2) {
        icon = <Upload />
      } else if (index === 3) {
        icon = <Repeat />
        vertLine = null
      }

      return (
        <div key={index} style={{display: 'block'}} value={c} onClick={(e) => this.handleClick(e)}>
        <Column width={this.props.category === c ? null : '1/4'} className={styles.ParColumn}>
        <Row>
        <Column>
        <div className={styles.Module}>
        <a>
        <h1 style={{fontSize: '4em'}}>{icon}</h1>
        <h2 style={{fontSize: '1.5em', width: '300px'}}>{c}</h2>
        </a>
        </div>
        </Column>
        </Row>
        {vertLine}
        {otherColumns}
        </Column>
        </div>)
    })
    const pardataColumns = (<Row className={styles.ParRow}>
        <Column>
        <Fade>
        {columnOne}
        </Fade>
        </Column>
      </Row>)
    const m = this.state.modalContent
    let modalInfo = ''
    if (m !== null) {
      console.log(m.title)
      const parlink = m.title !== 'CATegorize' ? (<a href={m.directlink} target="_blank" style={{display: 'block', marginTop: '20px', textAlign: 'center'}}><h3 style={{color: 'blue'}}>{m.core} now!</h3></a>) : (<span style={{color: 'red', textAlign: 'center', display: 'block', fontSize: '1.5em'}}>Coming soon!</span>)
      modalInfo = (<div><h2 style={{textAlign: 'center', textTransform: 'uppercase', marginTop: 0, borderBottom: '2px solid black', paddingBottom: 10}}>{m.title}</h2><div style={{display: 'flex'}}><div style={{float: 'left', width: '50%', textAlign: 'center'}}><img src={m.fullimg} style={{maxHeight: 400, maxWidth: '80%'}}/></div><div style={{float: 'left', width: '50%'}}><span>{m.colldesc}</span></div></div>{parlink}</div>)
    }
    console.log(this.props.mobile)
    // case: Participate_Temp
    const lessParObj = [{title: 'Transcribing Modern Manuscripts', img: 'mms.jpg', data: collcat.Transcribe[1]}, {title: 'Chicago Protest Collection', img: 'protest.jpg', data: collcat.Contribute[0]}, {title: 'Postcard Sender', img: 'sender.jpg', data: collcat.Repurpose[0]}, {title: 'Categorize (Coming soon)', img: 'categorize.jpg', data: collcat.Tag[2]}]
    const vid = '../../static/images/mms_vid.mp4'
    const lessParMap = lessParObj.map((v, i) => {
      return (<Row key={i}><a href="#" onClick={(e) => this.handleModal(v.data, e)} style={{textDecoration: 'none'}}><div style={{height: this.props.mobile ? 150 : 350, marginBottom: 20, textAlign: 'center', backgroundImage: 'url(../../static/images/' + v.img + ')', backgroundSize: i === 1 ? '110%' : 'cover'}}><h1 style={{lineHeight: this.props.mobile ? null : '400px', fontSize: this.props.mobile ? '1em' : '3em', display: 'inline', background: 'rgba(255,255,255,0.5)'}}>{v.title}</h1></div></a></Row>)
    })
    const partempColumns = (
      <Column>
        <Row>
          <Column width={this.props.mobile ? null : '2/3'}>
            <video src={vid} width="100%" height={this.props.mobile ? '200px' : '350px'} loop="true" autoPlay="autoplay" style={{marginBottom: this.props.mobile ? null : 20}} />
          </Column>
          <Column width={this.props.mobile ? null : '1/3'}>
            <div style={{padding: this.props.mobile ? null : 20}}>
            <h3 style={{margin: this.props.mobile ? 0 : null}}>Engage with Newberry collections!</h3>
            <ul style={{listStyleType: 'disc'}}>
              <li>Transcribe letters and diaries or tag images to help with historical research</li>
              <li>Submit memories and photos</li>
              <li>Send an e-postcard to a friend</li>
            </ul>
            </div>
          </Column>
        </Row>
        {lessParMap}
      </Column>
    )
    let columns = dataColumns
    if (this.props.displayType === 'participate') {
      columns = pardataColumns
    } else if (this.props.displayType === 'participate_temp') {
      columns = partempColumns
    }
    return (
    <Grid flexible className={styles.Grid} >
        <Modal show={this.state.isOpen} onClose={this.toggleModal}>
          {modalInfo}
        </Modal>
      {columns}
    </Grid>
    )
  }
}

CellBlock.propTypes = {
  displayType: PropTypes.string,
  mobile: PropTypes.bool,
  category: PropTypes.string,
  active: PropTypes.bool
}

export default CellBlock
