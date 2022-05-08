import React from 'react'
import './Schedule.css';
import ListOfMeetings from './ListOfMeetings';
// import Meeting from './Meeting';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from './Firebase.js';
import { collection } from 'firebase/firestore';

function Schedule() {

  const meetingsRef = collection(db, 'meetings');
  console.log(meetingsRef);
  const [meetings] = useCollectionData(meetingsRef);
  console.log(meetings);

  return (
    <div>
      <div className='Container'>
        <h1 className='Month'>MAY</h1>
        <ListOfMeetings />
      </div>
      {meetings && meetings.map(meeting => <h1>{meeting.title}</h1>)}
    </div>
  )
}

export default Schedule;