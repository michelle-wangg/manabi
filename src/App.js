import React, { useEffect } from 'react';
import Schedule from './components/Schedule';
import SidePanel from './components/SidePanel'
import SetMeeting from './components/SetMeeting'
import ListOfMeetings from './components/ListOfMeetings';
import Landing from './components/Landing';
import "./App.css"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './components/Firebase';
// import SignOutButton from './components/SignOutButton';

function App() {

  const [user] = useAuthState(auth);

  useEffect(() => {
    console.log(user);
  }, [user])

  return (
    user ? 
    <div className="rowC" style={{
      backgroundColor: "#27374F",
      height: "100%",
      paddingBottom: "100px",
    }}>
    <div>
    <h1 className="Title">Manabi.</h1>
    <Schedule/>
    <SetMeeting></SetMeeting>
    </div>
    <SidePanel/>
  </div> : <Landing />
  )
}

export default App;
