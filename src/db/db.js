import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAGblM9hwJ_jsxOddz73kh-WeHBXlV2tXo",
  authDomain: "eccomerce-vmc.firebaseapp.com",
  projectId: "eccomerce-vmc",
  storageBucket: "eccomerce-vmc.appspot.com",
  messagingSenderId: "736858825087",
  appId: "1:736858825087:web:c5ce46bc952d4307827a4a"
};


initializeApp(firebaseConfig);

const db = getFirestore()

export default db