import React from 'react';
import { db } from './Firebase.js';
import { addDoc, collection, Timestamp } from 'firebase/firestore';

function AddMeeting({ date, title, link }) {

    const meetingsRef = collection(db, 'meetings');

    const addDocument = async () => {
        
        await addDoc(meetingsRef, {
            date: Timestamp.now(),
            title: "Dijkstra's Algorithm",
            link: "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"
        });

    }

    return <button onClick={addDocument}> Add Meeting </button>
    
}

export default AddMeeting;