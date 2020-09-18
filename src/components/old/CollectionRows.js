import React, { Component } from 'react'
import {Row, Column, Grid} from 'react-cellblock'
// import style from './Images.css'

function sortAlpha(array) {
  return array.sort((a, b) => a.title.localeCompare(b.title))
}

class CollectionRows extends Component {
  render() {
    const collections = window.DATA.items
    const colls = sortAlpha(collections)
    const rows = colls.map((c, index) => {
      return (
        <Row key={index}>
          <Column width="1/4">
            <a href={c.url} target="_blank"><img src={'http://publications.newberry.org/umbrella/digital_newberry/static/images/' + c.alias + '.jpg'} /></a>
            <br />
            <a href={c.url} target="_blank">{c.title}</a>
          </Column>
          <Column width="3/4">
            {c.descrip}
          </Column>
        </Row>
      )
    })
    return (
    <div>
    <Grid>
    <Column>
      {rows}
    </Column>
    </Grid>
    </div>
    )
  }
}

export default CollectionRows
