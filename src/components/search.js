// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import style from './Header.css'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      db: 'ia',
      searchTerm: ''
    }

    this.handleSelect = this.handleSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.submitSearch = this.submitSearch.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  handleSelect = (event) => {
    this.setState({db: event.target.value})
  }
  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }
  submitSearch = () => {
    const url = this.state.db === 'ia' ? 'https://archive.org/details/newberry?and%5B%5D=' + this.state.searchTerm + '&sin=' : 'http://collections.carli.illinois.edu/cdm/search/collection/nby_chicago!nby_teich!nby_rrlife!nby_eeayer!nby_graff!nby_morriso!nby_mms!nby_music!nby_dig!nby_pullman/searchterm/' + this.state.searchTerm + '/field/all/mode/all/conn/and/order/title/ad/asc'
    window.open(url, '_blank')
  }
  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.submitSearch()
    }
  }
  render() {
    const dbname = this.state.db === 'ia' ? 'Internet Archive' : 'CARLI'
    return (
      <div className="Searchbox">
        <input className={style.Searchbox} placeholder={'Search ' + dbname} value={this.state.searchTerm} type="text" onKeyDown={this.handleKeyDown} onChange={(e) => this.handleChange(e)} />
        <input type="submit" value="&#xF002;" onClick={this.submitSearch} />
        <select defaultValue="ia" className={style.Dropdown} onChange={this.handleSelect}>
          <option value="ia">Internet Archive</option>
          <option value="carli">CARLI</option>
        </select>
      </div>
    )
  }
}

Search.propTypes = {
  db: PropTypes.string,
  history: PropTypes.object,
}

export default Search
