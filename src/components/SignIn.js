import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './Firebase.js';

const SignIn = () => {

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log("bruh");
            })
    }

    return <button onClick={googleSignIn}>Google Sign In</button >
}

export default SignIn