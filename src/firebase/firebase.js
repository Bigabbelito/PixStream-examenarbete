import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBUGPBj-Z017jtrky2Ni6CZOTf2dQuQ_6E",
  authDomain: "pixstream-d7209.firebaseapp.com",
  projectId: "pixstream-d7209",
  storageBucket: "pixstream-d7209.appspot.com",
  messagingSenderId: "653923978993",
  appId: "1:653923978993:web:43b4ab2110bf6fd3f82350",
  measurementId: "G-3LPT1143VJ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };



