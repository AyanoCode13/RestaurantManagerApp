import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpqJVXI2F2RjUeYM6xQXFvl3q1ZrSD5co",
  authDomain: "quickfirecomedyclub.firebaseapp.com",
  projectId: "quickfirecomedyclub",
  storageBucket: "quickfirecomedyclub.appspot.com",
  messagingSenderId: "102180699139",
  appId: "1:102180699139:web:1c7fc923cdff57b55c2236",
  measurementId: "G-2JTCYPMX7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

console.log("request sent to firebase")