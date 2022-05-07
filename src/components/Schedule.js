import React from 'react'
import './Schedule.css';
import ListOfMeetings from './ListOfMeetings';

function Schedule() {
  return (
    <div className='Container'>
      <h1 className='Month'>MAY</h1>
      <ListOfMeetings/>
    </div>
  )
}

export default Schedule;