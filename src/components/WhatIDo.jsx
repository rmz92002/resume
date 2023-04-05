import React from 'react'
import coding from '../videos/coding.mp4'
import viaje from '../videos/viaje.mp4'
import futbol from '../videos/Futbol.mp4'
import WorkDone from './WordDone'

export default function WhatIDo() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 500, background: "#eee", justifyContent: "space-evenly", background: "linear-gradient( white, #55DDE0)" }}>
            <WorkDone link="/work" name="Code" video={coding} description="Have learned Python, Javascript, HTML, CSS React, React Native, MongoDB and Node JS, and with these skills I have created these projects. " />
            <WorkDone link="/film" name="Film" video={viaje} description="I am a passionate filmmaker with a focus on creating films that showcase various aspects of life.  I have honed my skills over time and have a diverse portfolio of films, including short films, travel films, and financial films." />
            <WorkDone link="/hobbies" name="Other Hobbies" video={futbol} description="In my free time, if I have any, I play soccer, dj and study. Here is a little summary of each of the things I do what I have done in each area. " />
            <text style={{ position: 'absolute', selfAlign: 'center', marginBottom: 550, fontSize: 35, color: 'white', fontWeight: '600' }}>What I do</text>
        </div >
    )
}

