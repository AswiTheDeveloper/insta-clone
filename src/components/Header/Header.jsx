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
                <Route index element={<Posts />} />
                <Route path="/posts" element={<Posts />} />
                <Route path='/feed' element={<Feed />} />
                <Route path='/chats' element={<Chat />} />
                <Route path='/profile' element={<Profile />} />

            </Routes>
        </main>)

}
