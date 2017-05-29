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
              saveItem({
                name: action.name,
                quantity: action.quantity,
                quantityType: action.quantityType
              });
              break
            }
            default: {
              return next(action);
            }
          }
        }
    }
}
