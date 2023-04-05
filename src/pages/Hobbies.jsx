import React from 'react'
import Asunto3 from '../Images/Asunto3.png'
import Futbol from '../videos/Futbol.mp4'
import Fubtol2 from '../videos/Soccer2.mp4'
import Fubtol3 from '../videos/Soccer3.mp4'
import DJ from '../Images/Dj.JPG'
export default function Hobbies() {
    return (
        <div style={{ background: "linear-gradient(250deg, #F6AE2D, #F26419)" }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 150, paddingTop: 30 }}>
                <img src={Asunto3} />
                <div style={{ display: 'flex', flexDirection: 'column', width: '70%', padding: 20, marginLeft: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <text style={{ display: 'flex', paddingTop: 10, fontSize: 55, fontWeight: '500', color: 'white' }}>Jogo Bonito</text>
                    <text style={{ paddingTop: 30, fontSize: 35, color: 'white', fontWeight: '400' }}>
                        Been playing soccer since I was three years old and immedieatly fell in love with it. Here are some highlights of my goals:
                    </text>
                    <div style={{ display: 'flex', flexDirection: 'row', padding: 20 }}>
                        <video loop autoplay='' muted height={180} style={{ padding: 10, borderRadius: 30 }}>
                            <source src={Futbol} type="video/mp4" />
                        </video>
                        <video loop autoplay='' muted height={180} style={{ padding: 10, borderRadius: 30 }}>
                            <source src={Fubtol2} type="video/mp4" />
                        </video>
                        <video loop autoplay='' muted height={180} style={{ padding: 10, borderRadius: 30 }}>
                            <source src={Fubtol3} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '50%', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <text style={{ padding: 10, fontSize: 55, fontWeight: '500', color: 'white' }}>
                        DJ
                    </text>
                    <text style={{ padding: 20, fontSize: 35, fontWeight: '400', color: 'white' }}>I DJ in the weekends for fun and have done remixes with thousands of views. Here is a regetton remix that I made, hope you like it:</text>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/NQNTSOzjCpQ" title=" YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{ padding: 30 }}></iframe>
                </div>
                <img src={DJ} style={{ height: 400, borderRadius: 20 }} />
            </div>
        </div >
    )
}
