import React from 'react';
import { Link } from 'react-router-dom';
import './sign-in.scss'

const SignIn = () => {
  return (
    <main className='sign-in'>
        <nav><h3>Insta Sign In</h3> <p>New User? <Link to="/posts">Sign Up</Link> </p></nav>
    </main>
  )
}

export default SignIn
