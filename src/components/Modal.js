import React from 'react'
import PropTypes from 'prop-types'

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: 50,
      zIndex: 99999
    }

    // The modal "window"
    const modalStyle = {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      border: '8px solid #3f465d',
      // width: '33%',
      maxWidth: 800,
      minHeight: 200,
      margin: 'auto',
      padding: 30,
      color: 'black',
      fontSize: '1em',
      fontFamily: 'Calibri, sans-serif',
      borderRadius: 20,
      position: 'absolute',
      right: 0,
      left: 0,
      top: '25%'
    }

    const buttonStyle = {
      border: 'none',
      background: 'none',
      color: '#1d1a1a',
      cursor: 'pointer',
      fontSize: '1em',
      float: 'right'
    }

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
           <button onClick={this.props.onClose} style={buttonStyle}>
              &#10006;
            </button>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
}

export default Modal
