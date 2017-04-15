import { combineReducers } from 'redux'
import inventoryReducer from './inventoryReducer'
import exampleReducer from './exampleReducer'
import newItem from './newItem'


export default combineReducers({
  inventory: inventoryReducer,
  example: exampleReducer,
  newItem: newItem
})
