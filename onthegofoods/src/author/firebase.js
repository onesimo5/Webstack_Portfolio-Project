// Import firebase and initialize it
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCwetOteKDDaC7SuuzWFK-L_fRFP9tRuuA",
  authDomain: "onthegofoodsauth.firebaseapp.com",
  projectId: "onthegofoodsauth",
  storageBucket: "onthegofoodsauth.appspot.com",
  messagingSenderId: "1070974380451",
  appId: "1:1070974380451:web:94628d5b8f630c3ea91216",
  measurementId: "G-EXXWFZERBE"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//export firebase
export const auth = getAuth(firebaseApp);
export default firebaseApp;
