import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Images from '../components/Images'
import { filter, displayMore } from '../actions/items'

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.items.items,
    position: state.items.position,
    categories: state.items.categories,
    mobile: ownProps.mobile
  }
}

const actions = {
  filter,
  displayMore
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Images)
