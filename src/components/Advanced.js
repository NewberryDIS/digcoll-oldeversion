import React, { Component } from 'react'

class Advanced extends Component {
  render() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <select>
        <option value="all" selected="selected">All of the words</option>
        <option value="any">Any of the words</option>
        <option value="exact">The exact phrase</option>
        <option value="none">None of the words</option>
        </select>
        <form action="http://publications.newberry.org/umbrella/site/custom-search.php" method="post" target="_blank">
        <input type="text" name="searchterm" placeholder="Search" />
        <input type="submit" value="&#xF002;" />
        </form>
        <select>
        <option value="all" selected="selected">All fields</option>
        <option value="title" selected="selected">Title</option>
        <option value="any">Creator</option>
        <option value="exact">Call number</option>
        </select>
        </div>
    )
  }
}

export default Advanced
