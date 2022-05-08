import React from 'react'
import './Schedule.css';
import Meeting from './Meeting';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from './Firebase.js';
import { collection } from 'firebase/firestore';

function Schedule() {

  const meetingsRef = collection(db, 'meetings');
  console.log(meetingsRef);

  const [meetings] = useCollectionData(meetingsRef);
  console.log(meetings);

  return (<div>
    {meetings && meetings.map(meeting => <Meeting date={meeting.date.seconds} title={meeting.title} link={meeting.link} />)}
  </div>);
}

export default Schedule;