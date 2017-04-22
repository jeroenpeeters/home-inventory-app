import firebase from '../../utilities/Firebase'
const saveItem = (item) => {
  if(!item){return}
  firebase.addToGroceryList(item)
}

export default ({ getState, dispatch }) => {
    return (next) => {
        return (action) => {
          switch(action.type){
            case 'GROCERY_LIST_ITEM_SAVE_REQUEST': {
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
