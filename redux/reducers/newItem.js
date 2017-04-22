export default (state = {}, action) => {
  switch(action.type){
    case 'NEW_ITEM_DESCRIPTION': {
      return Object.assign({}, state, {
        name: action.name
      })
    }
    default: {
      return state;
    }
  }
}
