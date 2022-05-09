import React, { useState } from 'react';
import './SetMeeting.css';
import AddMeeting from './AddMeeting';
import { Timestamp } from 'firebase/firestore';

const SetMeeting = props => {

    const [meetingDate, setMeetingDate] = useState(null);
    const [time, setTime] = useState(null);
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");

    const timeStampDate = (date) => {
        let jsDate = new Date(date);
        return Timestamp.fromDate(jsDate);
    }

    return (
        <div className='Popup'>
            {/* <div className='InnerBox'>

            </div> */}
            <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', marginTop: '-30px'}}>
                <form>
                    <label className="Label"> Meeting Date </label>
                    <input type="date" onChange={(e) => setMeetingDate(e.target.value)} />
                    <br />

                    <label className="Label"> Time </label>
                    <input type="time" onChange={(e) => setTime(e.target.value)} />
                    <br />

                    <label className="Label"> Title </label>
                    <input type="text" placeholder="Enter Title of Meeting" onChange={(e) => setTitle(e.target.value)} />
                    <br />

                    <label className="Label"> Link </label>
                    <input type="text" placeholder="Enter Link of Meeting" onChange={(e) => setLink(e.target.value)} />
                </form>

                <AddMeeting date={timeStampDate(meetingDate)} time={time} title={title} link={link} />
            </div>

            <button className='ButtonClose'
                style={{ color: "white" }}
                onClick={props.handleClose}>x</button>
        </div>
    )
}

export default SetMeeting; 