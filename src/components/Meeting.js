import React, { useState } from 'react'
import './Meeting.css';

function Meeting({ date, time, title, link }) {
  const [cls, setCls] = useState("NotJoined");
  const [showLink, setShowLink] = useState(false);

  const linkClick = () => {
    setCls((cls) => (cls === "NotJoined" ? "Joined" : "NotJoined"));
    setShowLink(!showLink);
  }

  return (
    <div className='Component'>
      <div className='Box'>
        {showLink ?
          <div>
            <p className='Link'>{link}</p>
          </div> :
          <div className='Component'>
            <p className='Date'> {date} </p>
            <p className='Time'> {time} </p>
            <p className='Topic'> {title}</p>
          </div>}
      </div>
      <button className={cls} onClick={linkClick}>
        <p style={{ color: "white", fontSize: 20 }}>+</p>
      </button>
    </div>
  )
}

export default Meeting;