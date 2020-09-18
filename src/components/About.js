import React, { Component } from 'react'
import style from './About.css'
import PropTypes from 'prop-types'

class About extends Component {
  render() {
    const aboutStyle = {
      margin: 'auto',
      maxWidth: 1000,
      padding: this.props.mobile ? '80px 60px 20px 60px' : '50px 60px 20px 60px',
      fontFamily: 'Basic Commercial W01, Calibri, sans-serif'
    }
    const data = [
      {title: 'Contact',
        html: [(<span>For questions about Newberry collection items, please contact a reference librarian: <a href="mailto:reference@newberry.org">reference@newberry.org</a></span>), (<span>For questions or comments about Digital Newberry resources, please contact Digital Initiatives and Services: <a href="mailto:dis@newberry.org">dis@newberry.org</a></span>)]
      },
      {title: 'About',
        html: [(<span>Featuring more than 1 million digitized images, Digital Newberry: Collections includes manuscripts, maps, books, photographs, artworks, and other rare and unique materials from the collections of the Newberry, Chicago's independent research library since 1887. The content here represents only a fraction of the library's vast holdings; materials are continuously digitized and made freely available online as resources allow. To support these efforts, visit <a href="https://www.newberry.org/give" target="_blank">Give to the Newberry</a>.</span>)]
      },
      {
        title: 'Find',
        html: [(<div><span><strong>Browse all</strong> - this tab presents a random selection of images from across our digital collections. Choose terms from the Topics, Formats, Collections, or Century lists to narrow your results.</span><img src="../../static/images/browse-all-newest.gif" /></div>),
        (<div><span><strong>Search by collection</strong> - view sets of digital content organized by theme or Newberry collection name.</span></div>),
        (<div><span><strong>Search all</strong> - for a simple search of items across all collections, use the search box at the top of the page. The Search all box looks for your keyword terms in metadata and full-text transcriptions, when available.</span></div>),
        (<div><span>For advanced search options for materials in the Internet Archive (primarily complete books and other printed texts), use the <a href="https://archive.org/advancedsearch.php" target="_blank">Internet Archive Advanced Search</a> and restrict your query to Newberry holdings.</span><img src="../../static/images/ia-search-good.gif" /></div>),
        (<div><span>For advanced search options for items in CONTENTdm collections (primarily maps, manuscripts, postcards, and other materials), use the <a href="//collections.carli.illinois.edu/cdm/search/" target="_blank">CARLI Digital Collections Advanced Search</a> and restrict your query to Newberry holdings.</span><img src="../../static/images/cdm-search-good.gif" /></div>)]
      },
      {
        title: 'Download',
        html: [(<div><span>For an item at Internet Archive, select a format from the "Download Options" list at the lower right of the screen.</span><img src="../../static/images/ia-download-good.gif" /></div>),
        (<div><span>For an item at CARLI Digital Collections, select the "Download" button to the upper right of the image display.</span><img src="../../static/images/cdm-download-good.gif" /></div>)]
      },
      {
        title: 'Copyright and Permissions',
        html: [(<span>The Newberry makes its collections available for any lawful purpose, commercial or non-commercial, without licensing or permission fees to the library, subject to the following terms and conditions: <a href="https://www.newberry.org/rights-and-reproductions" target="_blank">newberry.org/rights-and-reproductions</a></span>)]
      },
      {
        title: 'Technology',
        html: [(<span>Built using the React Javascript library, this site provides integrated access to the Newberry's digitized collection materials, which are hosted at <a href="http://collections.carli.illinois.edu/" target="_blank">CARLI Digital Collections</a> and at <a href="https://archive.org/" target="_blank">Internet Archive</a>.</span>)]
      }]
    const about = data.map((item, index) => {
      const htmlsection = item.html.map((h, i) => {
        return (<div key={i} style={{marginBottom: 10, fontSize: '0.9em', lineHeight: '1.5'}}>{h}</div>)
      })
      return (<div key={index} style={{marginBottom: 40}}><h3 style={{textTransform: 'uppercase', letterSpacing: 2}}>{item.title}</h3>{htmlsection}</div>)
    })
    return (<div style={aboutStyle} className={style.About}>{about}</div>)
  }
}

About.propTypes = {
  mobile: PropTypes.bool
}

export default About
