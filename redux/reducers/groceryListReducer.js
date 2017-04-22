export default (state = {}, action) => {
  switch(action.type){
    case 'GROCERY_LIST': {
      const items = action.items || []
      console.log('IEEE', Object.keys(items).map((key) => {return items[key]}));
      return Object.assign({}, state, {
        items: Object.keys(items).map((key) => {return items[key]})
      })
    } 
    default: {
      return state;
    }
  }
}
