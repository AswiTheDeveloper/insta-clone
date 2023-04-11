import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Posts from '../Posts/Posts';
import Feed from '../Feed/Explore/Feed';
import Chat from '../chats/Chat';
import Profile from '../profile/Profile';
import './header.scss';

export default function Header() {
    let linkStyles = {
        textDecoration: "none",
        color: 'white'
    }

    // console.log(JSON.parse(localStorage.user));
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
            <Routes>
                <Route index Component={Posts} />
                <Route path="/posts" Component={Posts} />
                <Route path='/feed' Component={Feed} />
                <Route path='/chats' Component={Chat} />
                <Route path='/profile' Component={Profile} />
            </Routes>
        </main>
        )
}