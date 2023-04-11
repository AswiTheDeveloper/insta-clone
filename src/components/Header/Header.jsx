import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    let linkStyles = {
        textDecoration: "none",
        color: 'white'
    }

    return (
        <main className='header-class'>
            <header>
                <ul>
                    <li>
                        <Link style={linkStyles} to='/posts'><span>HOME</span></Link>
                    </li>
                    <li> <Link style={linkStyles} to='/feed'>FEED</Link></li>
                    <li> <Link style={linkStyles} to='/chats'>CHATS</Link></li>
                    <li> <Link style={linkStyles} to='/profile'>PROFILE</Link></li>
                </ul>
                <h2>MORE</h2>
            </header>
          
        </main>
        )
}