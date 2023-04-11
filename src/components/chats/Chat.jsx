import React from 'react';
import './chat.scss';
import LeftAside from './LeftAside/LeftAside';
import Messaging from './messaging/Messaging';

export default function Chat() {

    return (
        <main className='chat'>
                <LeftAside />
                <Messaging />
        </main>
    )
}