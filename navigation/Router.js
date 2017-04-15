import {
  createRouter,
} from '@exponent/ex-navigation';

import RootNavigation from './RootNavigation';
import InventoryList from '../screens/firebase/FirebaseInventoryList';
import FirebaseNewInventoryItemScreen from '../screens/firebase/FirebaseNewInventoryItemScreen';
import BarcodeScreen from '../screens/BarcodeScreen'

export default createRouter(() => ({
  home: () => InventoryList,
  newInventoryItem: () => FirebaseNewInventoryItemScreen,
  barcode: () => BarcodeScreen,
  rootNavigation: () => RootNavigation,
}));
