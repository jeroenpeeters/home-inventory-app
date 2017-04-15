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

export default {
  inventory: (cb) => {
    inventoryRef.on('value', (snapshot) => { cb(snapshot.val()) } );
  },
  saveInventoryItem: (name, quantity) => {
    inventoryRef.push(name, (er,x,y,z) => console.log("BLA",er,x,y,z));
  }
}
