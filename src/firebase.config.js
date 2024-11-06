import {getApp,getApps,initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyB17x1HlXteHp51vGjRFPTUBkNyFYof5LA",
    authDomain: "restaurant-app-241e2.firebaseapp.com",
    databaseURL: "https://restaurant-app-241e2-default-rtdb.firebaseio.com",
    projectId: "restaurant-app-241e2",
    storageBucket: "restaurant-app-241e2.appspot.com",
    messagingSenderId: "634937105878",
    appId: "1:634937105878:web:051f9f7d447e56012cd877"
  };


  const app = getApps.length>0 ? getApp():initializeApp(firebaseConfig);
  const db = getFirestore(app)
  const storage = getStorage(app)

  export {app,db,storage};