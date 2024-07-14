// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7M4DTKlueRdQaexkaOwnKLcfQW1F3MfI",
  authDomain: "storia-c7322.firebaseapp.com",
  projectId: "storia-c7322",
  storageBucket: "storia-c7322.appspot.com",
  messagingSenderId: "376612735729",
  appId: "1:376612735729:web:11ae0a333583dbe6147750"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;