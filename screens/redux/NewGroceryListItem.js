import { connect } from 'react-redux'
import Firebase from '../../utilities/Firebase'
import NewGroceryListItem from '../NewGroceryListItem'


const mapStateToProps = (state) => {
  return {

  }
}
mapDispatchToProps = (dispatch, props) => {
  const goBack = () => props.navigator.pop()
  return {
    onBackPressed: () => { goBack() },
    onSavePressed: () => {
      dispatch({type: 'GROCERY_LIST_ITEM_SAVE_REQUEST'})
      goBack()
    },
    onDescriptionChange: description => {
      dispatch({
        type: 'NEW_ITEM_DESCRIPTION',
        name: description
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewGroceryListItem)
