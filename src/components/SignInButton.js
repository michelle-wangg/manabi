import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './Firebase.js';

const SignInButton = () => {

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log("Error signing in.");
            })
    }

    return <button onClick={googleSignIn}>Google Sign In</button >
}

export default SignInButton