import React, { useState } from 'react';
import './chat.scss';
import LeftAside from './LeftAside/LeftAside';
import Messaging from './messaging/Messaging';

export default function Chat() {
    let [currentUser, setCurrentUser] = useState({
        name: '',
        profilePic: '',
        username: '',
    })
    return (
        <main className='chat'>
            <LeftAside setCurrentUser={setCurrentUser} />
            <Messaging currentUser={currentUser} />
        </main>
    )
}