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

  const timeStampDate = (date) => {
    return date.toDate().toString().substring(0, 15);
  }

  let index = -1;

  const incIndex = (idx) => {
    index++;
    return index;
  }

  return (<div>
    {meetings && meetings.map(meeting => <Meeting key={incIndex(index)} date={timeStampDate(meeting.date)} time={meeting.time} title={meeting.title} link={meeting.link} />)}
  </div>);
}

export default Schedule;