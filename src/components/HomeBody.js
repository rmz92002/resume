import React from 'react'
import doodlevideo from '../videos/Doodle_jump.mp4'
import stock from '../Images/Stock.png'
import '../style.css';
import gala from '../Images/Gala.png'

export default function HomeBody() {
    return (
        <div>
            <div className='home'>
                <video loop autoplay='' muted height={500} >
                    <source src={doodlevideo} type="video/mp4" />
                </video>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <text style={{ fontWeight: '500', fontSize: 45 }}>Doodle Jump</text>
                    <text className='home-text'>This is my own re creation of Doodle jump. It was for my CS61a final project, so I proposed myself a challend to recreate doddle jump game and that is what I did. I found the task a little hard as I needed to implement physics into the game but at the end it was worth it and it is one of the project that I am most proud to present.</text>
                </div>
            </div >
            <div className='home-2'>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <text style={{ fontWeight: '500', fontSize: 45 }}>Stock Simulator</text>
                    <text className='home-text'>Created my own stock simulator with pure javascript, html and css. In high school, I took an online course that Harvard offers called CS50 and this was my final project</text>
                </div>
                <img src={stock} alt="Logo" height={500} />;
            </div >
            <div className='home-3'>
                <img src={gala} alt="Logo" height={500} />;
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <text style={{ fontWeight: '500', fontSize: 45, color: 'black' }}>Mobile Application coming soon..</text>
                    <text className='home-text'>Right now I am currently creating my own mobile appllication called Gala. For this to happen I learned React, React Native, NodeJS, and MongoDB. </text>
                </div>
            </div >
        </div>
    )
}