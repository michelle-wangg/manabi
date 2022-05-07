import React from 'react'
import './Meeting.css';

function Meeting(props){
  return (
      <div className='Box'>
        <text className='Date'>{props.date}</text>
        <text className='Time'>{props.time}</text>
        <text className='Topic'>{props.topic}</text>
      </div>
  )
}

export default Meeting;