import React from 'react';
import { db } from './Firebase.js';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import './SetMeeting.css';

function AddMeeting({ date, time, title, link }) {

    const meetingsRef = collection(db, 'meetings');

    const addDocument = async () => {
        
        await addDoc(meetingsRef, {
            date: date,
            time: time,
            title: title,
            link: link
        });

    }

    return <button className="ButtonAddMeeting" onClick={addDocument}> 
        Add Meeting 
    </button>
    
}

export default AddMeeting;