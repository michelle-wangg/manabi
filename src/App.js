import React from 'react';
import Schedule from './components/Schedule';
// import ListOfMeetings from './components/ListOfMeetings';
import SidePanel from './components/SidePanel'
import SetMeeting from './components/SetMeeting'
import "./App.css"



function App() {
  
  return (
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

    </div>
    
  )
}

export default App;
