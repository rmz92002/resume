import React from 'react'
import family from '../Images/family.JPG'

export default function About() {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={family} style={{ height: '50%', width: '65%' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <text style={{ fontSize: 35, position: 'relative', bottom: 50, fontWeight: '500' }}>About me</text>
                <text style={{ padding: 20, fontSize: 25, width: '70%' }}>I was born in Mexico, Monterrey but when I was a year old I moved to the Phillipines and lived ther for three years. Then each three years I would move to a new country and this made me live in eight different countries which are: Mexico, Phillipines, Thailand, Costa Rica, Puerto Rico, Dominican Republic, Colombia and the United States. As you could infer, my life has been pretty hectic but through all the chaos I have made a lot friends from all parts of the world and have learned new cultures. </text>
            </div>
        </div>
    )
}
