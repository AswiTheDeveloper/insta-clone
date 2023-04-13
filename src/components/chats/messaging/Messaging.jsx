import React from 'react';
import './Messaging.scss';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SendIcon from '@mui/icons-material/Send';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import DuoSharpIcon from '@mui/icons-material/DuoSharp';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
export default function Messaging() {

    return (
        <main className='message'>
            <header id='header'>
                <div className='leftDiv'>
                    <AccountCircleSharpIcon className='ProfileIcon' />
                    <h2>Friend Name</h2>
                </div>
                <div className='rightDiv'>
                    <DuoSharpIcon className='rightIcons' />
                    <SearchRoundedIcon className='rightIcons' />
                    <FavoriteBorderRoundedIcon className='rightIcons' />
                    <NotificationsOutlinedIcon className='rightIcons' />
                </div>

            </header>

            <footer id='footer'>
                <article>
                    <MicNoneOutlinedIcon />
                    <input type="text" placeholder='Write Something...' />
                    <AttachFileOutlinedIcon />
                    <CameraAltOutlinedIcon />
                    <SentimentSatisfiedAltOutlinedIcon />
                </article>
                <section>
                    <SendIcon />
                </section>
            </footer>
        </main>
    )
}