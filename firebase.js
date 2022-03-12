import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAY6r-D9rk07AmEMd0kyEQTj1nmBzvuaco',
  authDomain: 'whatsapp-5ff34.firebaseapp.com',
  projectId: 'whatsapp-5ff34',
  storageBucket: 'whatsapp-5ff34.appspot.com',
  messagingSenderId: '271073171855',
  appId: '1:271073171855:web:b89c71f6613234496513fa',
  measurementId: 'G-0RBG0MXE7G',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
