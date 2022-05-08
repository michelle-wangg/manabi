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
            <h1 className="Title">Welcome to Manabi!</h1>
            <img alt="Logo" src={Logo} className="Logo"/>
            <SignInButton color='#C8D1DB' text="Google Sign In"/>
        </div>
    )
}

export default Landing