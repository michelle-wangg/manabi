import React from 'react';
import Schedule from './components/Schedule';
import ListOfMeetings from './components/ListOfMeetings';
import SidePanel from './components/SidePanel'
import "./App.css"

function App() {
  return (
    <div className="rowC" style={{
      backgroundColor: "#27374F",
      height: "100vh",
      minHeight: "100vh"
    }}>
        <div>

      <h1 className="Title">Manabi.</h1>
      <Schedule/>
      <ListOfMeetings/>

    </div>
    <SidePanel/>
    
      </div>
    
  )
}

export default App;
