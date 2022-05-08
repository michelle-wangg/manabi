import React from 'react';
import './SetMeeting.css';

const SetMeeting = props => {
    return ( 
        <div className='Popup'>
            <div className='InnerBox'>
                <div className='Horizontal'>
                    <p className='InnerText'> Date </p>
                    <p className='InnerText'> Time </p>
                    <p className='InnerText'> Topic </p>
                </div>
                    <input type='text' className='InputBox'/>
                    <input type='text' className='InputBox'/>
                    <input type='text' className='InputBox'/>

                <div className='Horizontal' style={{marginTop: 20}}>
                    <p className='InnerText'> Link: </p>
                    <input type='text' style={{marginLeft: 20}}/>
                </div>
            </div>

            <button className='ButtonAdd'>
                <p className='AddText'>Add</p>
            </button>
            <button className='ButtonClose' 
                    style={{color: "white"}}
                    onClick = {props.handleClose}>x</button>
        </div>
    )
}

export default SetMeeting; 