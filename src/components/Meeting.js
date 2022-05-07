import React, { useState } from 'react'
import './Meeting.css';

function Meeting(props){
  const [cls, setCls] = useState("NotJoined");

  return (
    <div className='Component'>
      <div className='Box'>
        <text className='Date'>{props.date}</text>
        <text className='Time'>{props.time}</text>
        <text className='Topic'>{props.topic}</text>
      </div>

      <button className={cls}
              onClick={() => setCls((cls) => (cls === "NotJoined" ? "Joined" : "NotJoined"))}>
        <text style={{color: "white"}}>+</text>
      </button>
    </div>
  )
}

export default Meeting;