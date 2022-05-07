import React from 'react';
import Schedule from './components/Schedule';
import ListOfMeetings from './components/ListOfMeetings';

function App() {
  return (
    <div className="schedule">
      <Schedule/>
      <ListOfMeetings/>
    </div>
    
  )
}

export default App;
