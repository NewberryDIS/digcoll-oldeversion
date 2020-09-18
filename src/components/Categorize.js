import React, { Component } from 'react'
import ExternalLink from 'react-icons/lib/fa/external-link'
import style from './Categorize.css'

class Categorize extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      error: null,
      isLoaded: false
    }
  }

  componentWillMount() {
    const itemData = window.ITEMDATA.items
    const length = window.ITEMDATA.items.length
    const randItemIndex = Math.floor(Math.random() * length)
    const randItem = itemData[randItemIndex]
    const randPtr = randItem.ptr
    const randImg = randItem.img_ptr
    const randColl = randItem.collection
    let scale = '50'
    if (randColl === 'nby_teich') {
      scale = '100'
    }
    if ('collection' in randItem) {
      fetch('https://collections.carli.illinois.edu/digital/bl/dmwebservices/index.php?q=dmGetItemInfo/' + randColl + '/' + randPtr + '/json')
        .then(res => res.json())
        .then(
          (result) => {
            result.img = 'http://collections.carli.illinois.edu/utils/ajaxhelper/?CISOROOT=' + randColl + '&CISOPTR=' + randImg + '&action=2&DMWIDTH=5000&DMHEIGHT=5000&DMSCALE=' + scale
            result.url = 'http://digcoll.newberry.org/#/item/' + randColl + '-' + randPtr
            this.setState({
              items: result
            })
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            })
          }
        )
    } else {
      fetch('https://archive.org/advancedsearch.php?q=identifier%3A' + randItem.identifier + '&fl[]=creator&fl[]=date&fl[]=description&fl[]=title&sort[]=&sort[]=&sort[]=&rows=2&page=1&output=json')
        .then(res => res.json())
        .then(
          (result) => {
            result.response.docs[0].img = 'https://archive.org/services/img/' + randItem.identifier
            result.response.docs[0].url = 'http://digcoll.newberry.org/#/item/ia-' + randItem.identifier
            this.setState({
              items: result.response.docs[0]
            })
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            })
          }
        )
    }
  }

  render() {
    const item = this.state.items
    console.log(item)
    return (
      <div className={style.Categorize}>
      <img src={item.img} style={{width: '100%'}} />
      <div>
      <a href={item.url} target="_blank">{item.title}<ExternalLink /></a>
      <br />
      <span>Collection: {item.collec}</span>
      <br />
      <span>Format: {item.format}</span>
      </div>
      </div>
    )
  }
}

export default Categorize
