import React from 'react';
import Schedule from './components/Schedule';
import ListOfMeetings from './components/ListOfMeetings';
import "./App.css"

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDLDFidgQ5lLTVCmyMNIVg9Fb2VF6WiNjA",
  authDomain: "manabi-3117f.firebaseapp.com",
  projectId: "manabi-3117f",
  storageBucket: "manabi-3117f.appspot.com",
  messagingSenderId: "355917125009",
  appId: "1:355917125009:web:fa94c502c078571909f630",
  measurementId: "G-36CJQTE0L8"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

// document.addEventListener("DOMContentLoaded", event => {
//   const app = firebase.app(); 
//   console.log(app);
// })

// function googleLogin() {
//   const provider = new firebase.auth.GoogleAuthProvider();

//   firebase.auth().signInWithPopup(provider)

//       .then(result => {
//           const user = result.user;
//           document.write('Hello ${user.displayName}');
//       })
// }

function App() {
  return (
    <div style={{
      backgroundColor: "#27374F",
      height: "100vh",
      minHeight: "100vh"
    }}>
      <h1 className="Title">Manabi.</h1>
      <Schedule/>
      <ListOfMeetings/>
    </div>
    
  )
}

export default App;
