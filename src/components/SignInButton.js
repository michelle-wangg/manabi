import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './Firebase.js';

const SignInButton = ({ color, text }) => {

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log("bruh");
            })
    }

    return <button style={{ fontSize: '18px', width: '190px', height: '75px', backgroundColor: color,
                    border: 'none' }} 
                    onClick={googleSignIn}>{ text }</button >
}

export default SignInButton