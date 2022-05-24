// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCxKNdmzn-Cupefo8pjhvFG3Sw2uTWfa0",
  authDomain: "netflix-clone-a1a57.firebaseapp.com",
  projectId: "netflix-clone-a1a57",
  storageBucket: "netflix-clone-a1a57.appspot.com",
  messagingSenderId: "335134210692",
  appId: "1:335134210692:web:402688dcffd11948bfa0d1"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }