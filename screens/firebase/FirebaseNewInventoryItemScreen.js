import { connect } from 'react-redux'
import Firebase from '../../utilities/Firebase'
import NewInventoryItemScreen from '../NewInventoryItemScreen'


const mapStateToProps = (state) => {
  return {

  }
}
mapDispatchToProps = (dispatch, props) => {
  const goBack = () => props.navigator.pop()
  return {
    onBackPressed: () => { goBack() },
    onSavePressed: () => {
      dispatch({type: 'NEW_ITEM_SAVE_REQUEST'})
      goBack()
    },
    onDescriptionChange: description => {
      dispatch({
        type: 'NEW_ITEM_DESCRIPTION',
        description: description
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewInventoryItemScreen)
