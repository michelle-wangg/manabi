import React, { useState } from 'react';
import './SetMeeting.css';
import AddMeeting from './AddMeeting';
import { Timestamp } from 'firebase/firestore';

const SetMeeting = props => {

    const [meetingDate, setMeetingDate] = useState(null);
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");

    const timeStampDate = (date) => {
        let jsDate = new Date(date);
        return Timestamp.fromDate(jsDate);
    }

    return (
        <div className='Popup'>
            <div className='InnerBox'>

            </div>

            <form>
                <label>Meeting Date</label>
                <input type="date" onChange={(e) => setMeetingDate(e.target.value)} />
                <br />

                <label>Title</label>
                <input type="text" placeholder="Enter Title of Meeting" onChange={(e) => setTitle(e.target.value)} />
                <br />

                <label>Link</label>
                <input type="text" placeholder="Enter Link of Meeting" onChange={(e) => setLink(e.target.value)} />
            </form>

            <AddMeeting date={timeStampDate(meetingDate)} title={title} link={link} />

            <button className='ButtonClose'
                style={{ color: "white" }}
                onClick={props.handleClose}>x</button>
        </div>
    )
}

export default SetMeeting; 