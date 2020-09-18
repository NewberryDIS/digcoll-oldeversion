import React, {Component} from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'

class SelectBox extends Component {
  render() {
  	return (
	  	<DropdownButton title="Dropdown">
	      <MenuItem href="#books">Books</MenuItem>
	      <MenuItem href="#podcasts">Podcasts</MenuItem>
	      <MenuItem href="#">Tech I Like</MenuItem>
	      <MenuItem href="#">About me</MenuItem>
	      <MenuItem href="#addBlog">Add a Blog</MenuItem>
	    </DropdownButton>
  	)
  }
}

export default SelectBox
