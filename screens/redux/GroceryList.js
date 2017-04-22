import GroceryList from '../GroceryList'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    items:  state.groceryList.items || []
  }
}
mapDispatchToProps = (dispatch, props) => {
  return {
    onAddPressed: x => {
      console.log('onAddPressed')
      props.navigator.push('newGroceryListItem')
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GroceryList)
