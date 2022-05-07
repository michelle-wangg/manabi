import React from 'react'
import SignInButton from './SignInButton'

const Landing = () => {
    return (
        <div style={{ 
            backgroundColor: "#27374F",
            height: "100vh",
            minHeight: "100vh"
            }}>
            <h1 className="Title">Welcome to Manabi!</h1>
            <SignInButton color='#C8D1DB' text="Google Sign In"/>
        </div>
    )
}

export default Landing