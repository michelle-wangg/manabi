import React, { useEffect } from 'react';
import { useState } from "react";
import Schedule from './components/Schedule';
import SidePanel from './components/SidePanel'
import SetMeeting from './components/SetMeeting'
import Landing from './components/Landing';
import "./App.css"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './components/Firebase';
import AddMeeting from './components/AddMeeting';
// import SignOutButton from './components/SignOutButton';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [user] = useAuthState(auth);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

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

        <div className='Header'>
          <h1 className="Title">Manabi.</h1>
          <button className='AddMeetingButton'
                  onClick = {togglePopup}>
                    <p style={{color: "#27374F",
                              fontSize: 30}}>+</p>
          </button>
        </div>

        <Schedule/>
        {isOpen && <SetMeeting handleClose={togglePopup}
                    content = {
                      <div>
                        <p>this is sample stuff</p>
                      </div>}
        />}
      </div>
      <SidePanel/>
  </div> : <Landing />
  )
}

export default App;
