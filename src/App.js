import React from 'react';
import Schedule from './components/Schedule';
import ListOfMeetings from './components/ListOfMeetings';
import "./App.css"

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
