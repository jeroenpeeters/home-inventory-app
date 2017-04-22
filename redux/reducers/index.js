import { combineReducers } from 'redux'
import inventoryReducer from './inventoryReducer'
import groceryListReducer from './groceryListReducer'
import exampleReducer from './exampleReducer'
import newItem from './newItem'


export default combineReducers({
  inventory: inventoryReducer,
  groceryList: groceryListReducer,
  example: exampleReducer,
  newItem: newItem
})
