import React, { useState } from 'react';
import './Messaging.scss';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SendIcon from '@mui/icons-material/Send';
import DuoSharpIcon from '@mui/icons-material/DuoSharp';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
export default function Messaging({ currentUser }) {
    let [text, setText] = useState('');
    let [chat, setChat] = useState([
        {
            from: 'from',
            to: 'to'
        }
    ])


    const sendText = () => {
        if (text) {
            setChat([...chat, text]);
            setText({
                from: ''
            })
        }
    }
    return (
        <main className='message'>
            <header id='header'>
                <div className='leftDiv'>
                    <img src={currentUser.profilePic} alt="" />
                    <h2><span>{currentUser.name}</span>
                        <p>_{currentUser.username}</p></h2>
                </div>
                <div className='rightDiv'>
                    <DuoSharpIcon className='rightIcons' />
                    <SearchRoundedIcon className='rightIcons' />
                    <FavoriteBorderRoundedIcon className='rightIcons' />
                    <NotificationsOutlinedIcon className='rightIcons' />
                </div>

            </header>
            <main className='chat-box'>
                {
                    chat && chat.map((e) => {
                        return (
                            <article>
                                <p className='to'>{e.to}</p>
                                <p className='from'>{e.from}</p>

                            </article>
                        )
                    })
                }
            </main>



            <footer id='footer'>
                <article>
                    <MicNoneOutlinedIcon />
                    <input type="text" placeholder='Write Something...' value={text.from} onChange={(event) => setText({
                        from: event.target.value,
                        to: event.target.value
                    })} />
                    <AttachFileOutlinedIcon />
                    <CameraAltOutlinedIcon />
                    <SentimentSatisfiedAltOutlinedIcon />
                </article>
                <section onClick={sendText}>
                    <SendIcon />
                </section>
            </footer>
        </main>
    )
}