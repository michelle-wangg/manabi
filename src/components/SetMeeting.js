import React from 'react';
import './SetMeeting.css';

const SetMeeting = props => {
    return ( 
        <div className='Popup'>
            <div className='InnerBox'>
                heuofjroifjieojfiojoif
            </div>

            <button className='ButtonAdd'>Add</button>
            <button className='ButtonClose' 
                    style={{color: "white"}}
                    onClick = {props.handleClose}>x</button>
        </div>
    )
}

export default SetMeeting; 