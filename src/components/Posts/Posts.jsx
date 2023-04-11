import React from 'react';
import './Post.scss'
import { useState } from 'react';


export default function Posts() {
    const [time, setTime] = useState({
        time: '',
        date: ''
    });
    setInterval(() => {
        setTime({
            time: new Date().toLocaleTimeString(),
            date: new Date().toDateString()
        });
    }, 1000);
    return (
        <main className='posts'>
            <h1>INSTA CLONE <p><span>{time.date}</span><strong>{time.time}</strong> </p></h1>
            <section>
                <p><strong>Header/Routing:</strong> Aswi</p>
                <p><strong>Feed/Explore:</strong></p>
                <p><strong>Insta Posts:</strong></p>
                <p><strong>Chat:</strong> Kiran, Bhavani</p>
                <p><strong>SignIn/SignUp(create Account):</strong></p>
            </section>
        </main>)
}
