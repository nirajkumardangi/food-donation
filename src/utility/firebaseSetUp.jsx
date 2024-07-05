
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMXfJB1iSRXSAgOpwO0Cy7FHn6298pd7A",
  authDomain: "food-donate-app-5c80b.firebaseapp.com",
  projectId: "food-donate-app-5c80b",
  storageBucket: "food-donate-app-5c80b.appspot.com",
  messagingSenderId: "406202772482",
  appId: "1:406202772482:web:564ee0f718f4fd67c20b1b",
};

const fireBase = initializeApp(firebaseConfig);


export default fireBase