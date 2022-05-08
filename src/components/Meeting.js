import React, { useState } from 'react'
import './Meeting.css';

function Meeting({ date, title, link }) {
  const [cls, setCls] = useState("NotJoined");

  return (
    <div className='Component'>
      <div className='Box'>
        <p className='Date'>{date}</p>
        {/* <p className='Time'>{props.time}</p> */}
        <p className='Topic'>{title}</p>
      </div>
      <button className={cls} onClick={() => setCls((cls) => (cls === "NotJoined" ? "Joined" : "NotJoined"))}>
        <p style={{ color: "white", fontSize: 20 }}>+</p>
      </button>
    </div>
  )
}

export default Meeting;