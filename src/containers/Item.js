import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Item from '../components/Item'
import { getItem } from '../actions/items'

const mapStateToProps = (state, ownProps) => {
  return {
    itemId: String(ownProps.match.params.itemId),
    item: state.items.item
  }
}

const actions = {
  getItem
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Item)
