export default (state = {}, action) => {
  switch(action.type){
    case 'INVENTORY_LIST': {
      console.log('IEEE', Object.keys(action.items).map((key) => {return action.items[key]}));
      return Object.assign({}, state, {
        items: Object.keys(action.items).map((key) => {return action.items[key]})
      })
    }
    default: {
      return state;
    }
  }
}
