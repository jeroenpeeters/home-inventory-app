import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "home-inventory-f81b1.firebaseapp.com",
  databaseURL: "https://home-inventory-f81b1.firebaseio.com",
  storageBucket: "home-inventory-f81b1.appspot.com"
};

console.log('init firebase');
firebase.initializeApp(firebaseConfig);
inventoryRef = firebase.database().ref('inventory')
groceryListRef = firebase.database().ref('groceryList')

let initialContactOccured = false;

export default {
  inventory: (cb) => {
    inventoryRef.on('value', (snapshot) => { cb(snapshot.val()) } );
  },
  saveInventoryItem: (name, quantity) => {
    inventoryRef.push(name, (er,x,y,z) => console.log("BLA",er,x,y,z));
  },
  groceryList: (cb) => {
    groceryListRef.on('value', (data) => {
      setTimeout( ( () => initialContactOccured = true), 1000)
      cb(data.val())
    })
  },
  onGroceryListItemAdded: (cb) => {
    groceryListRef.limitToLast(1).on('child_added', (snapshot) => {
      if(initialContactOccured){
        cb(snapshot.val())
      }
    })
  },
  addToGroceryList: (item) => {
    groceryListRef.push(item, (err) => console.log('Firebase:addToGroceryList:done', item));
  },
}
