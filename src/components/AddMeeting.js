import React from 'react';
import { db } from './Firebase.js';
import { doc, setDoc } from 'firebase/firestore';


function AddMeeting() {

    const addDocument = async () => {

        await setDoc(doc(db, 'meetings'), {
            title: "Recursion",
            date: "Jan. 4",
            link: "https://firebase.google.com/docs/firestore/manage-data/add-data"
        });

    }

    return (
        <button onClick={addDocument}>
            Add Meeting
        </button>
    )
}

export default AddMeeting;