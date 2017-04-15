import firebase from '../../utilities/Firebase'
const saveItem = (item) => {
  if(!item){return}
  firebase.saveInventoryItem(item.description)
}

export default ({ getState, dispatch }) => {
    return (next) => {
        return (action) => {
          switch(action.type){
            case 'NEW_ITEM_SAVE_REQUEST': {
              saveItem(getState().newItem);
              break
            }
            default: {
              return next(action);
            }
          }
        }
    }
}
