import {
  createRouter,
} from '@exponent/ex-navigation';

import RootNavigation from './RootNavigation';
import GroceryList from '../screens/redux/GroceryList';
import NewGroceryListItem from '../screens/redux/NewGroceryListItem';
import BarcodeScreen from '../screens/BarcodeScreen'

export default createRouter(() => ({
  home: () => GroceryList,
  newGroceryListItem: () => NewGroceryListItem,
  barcode: () => BarcodeScreen,
  rootNavigation: () => RootNavigation,
}));
