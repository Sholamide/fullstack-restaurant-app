import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAU6iTo3ZCqCeKrfqPqGxoRZnhNhuu3_vA",
  authDomain: "restaurantdemo-ff5bd.firebaseapp.com",
  databaseURL: "https://restaurantdemo-ff5bd-default-rtdb.firebaseio.com",
  projectId: "restaurantdemo-ff5bd",
  storageBucket: "restaurantdemo-ff5bd.appspot.com",
  messagingSenderId: "981565708730",
  appId: "1:981565708730:web:4852cf8ec3191b0e666583",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
