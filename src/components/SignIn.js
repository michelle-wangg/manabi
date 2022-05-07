import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import 'firebase/auth';

const SignIn = () => {

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(provider)
        .then(result => {
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