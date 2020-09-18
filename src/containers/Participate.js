import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Participate from '../components/Participate'
import { filter, displayMore } from '../actions/items'

const mapStateToProps = (state) => {
  return {
    items: state.items.items,
    position: state.items.position
  }
}

const actions = {
  filter,
  displayMore
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Participate)
