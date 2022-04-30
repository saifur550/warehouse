// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2IK0gAEqAostOhJl97Uuuy_rLyaOEUg0",
  authDomain: "email-password-auth-413ec.firebaseapp.com",
  projectId: "email-password-auth-413ec",
  storageBucket: "email-password-auth-413ec.appspot.com",
  messagingSenderId: "922071358797",
  appId: "1:922071358797:web:3ca206a0dac75aca8a6b04"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;