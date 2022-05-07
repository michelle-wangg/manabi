import React from 'react';
import Schedule from './components/Schedule';
import ListOfMeetings from './components/ListOfMeetings';
import "./App.css"

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
