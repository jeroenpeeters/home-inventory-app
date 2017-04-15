import InventoryList from '../InventoryList'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    items:  state.inventory.items || []
  }
}
mapDispatchToProps = (dispatch, props) => {
  return {
    onAddPressed: x => {
      console.log('onAddPressed')
      props.navigator.push('newInventoryItem')
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(InventoryList)
