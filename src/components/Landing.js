import React from 'react'
import SignInButton from './SignInButton'
import "./Landing.css"
import Logo from "../assets/manabi_logo.png"

const Landing = () => {
    return (
        <div style={{ 
            backgroundColor: "#27374F",
            height: "100vh",
            minHeight: "100vh",
            }}>

            <div style={{
                position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', marginTop: '-30px'
                }}>
                <img alt="Logo" src={Logo} className="Logo"/>
            </div>

            <div style={{
                position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', marginTop: '120px'
                }}>
                <SignInButton color='#C8D1DB' text="Sign In"/>
            </div>
        </div>
    )
}

export default Landing