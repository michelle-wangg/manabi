import React from 'react';
import Schedule from './components/Schedule';
import ListOfMeetings from './components/ListOfMeetings';
import Landing from './components/Landing';
import "./App.css"
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from './components/Firebase';

function App() {

  // const [user] = useAuthState(auth);

  return (
    <div style={{
      backgroundColor: "#27374F",
      height: "100vh",
      minHeight: "100vh"
    }}>
      <h1 className="Title">Manabi.</h1>
      <Schedule/>
      <ListOfMeetings/>
      <Landing />
    </div>
    
  )
}

export default App;
