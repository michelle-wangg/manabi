import React from 'react'
import { auth } from './Firebase'

const SignOutButton = ({ color, text }) => {
  return <button style={{ fontSize: '18px', width: '190px', height: '75px', backgroundColor: color,
                  border: 'none' }} 
                  onClick={() => auth.signOut()}>{ text }</button>
}

export default SignOutButton