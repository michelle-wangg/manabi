import React from 'react'
import { auth } from './Firebase'

const SignOutButton = ({ color, text }) => {
  return <button style={{ fontSize: '13px', width: '100px', height: '50px', backgroundColor: color,
                  border: 'none', marginTop: '50px',position:'absolute', left:'90%'}} 
                  onClick={() => auth.signOut()}>{ text }</button>
}

export default SignOutButton