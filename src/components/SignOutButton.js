import React from 'react'
import { auth } from './Firebase'

const SignOutButton = () => {
  return <button onClick={() => auth.signOut()}> Sign Out </button>
}

export default SignOutButton