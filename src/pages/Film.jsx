import React from 'react'
import { motion } from 'framer-motion'

export default function Film() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <motion.div whileHover={{ scale: 1.1 }} style={{
                display: 'flex',
                flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', padding: 50, background: "black", borderRadius: 10, margin: 40
            }}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/nral5jSVChU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', width: '40%' }}>
                    <text style={{ color: 'white', fontSize: 70, padding: 30, fontWeight: '500' }}>Travel</text>
                    <text style={{ color: 'white', fontSize: 25, fontWeight: '400' }}>I usually do travel videos whenever I visit some country and enjoy the process of editing which I think is the best as it makes me show my creative side.</text>
                </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} style={{
                display: 'flex',
                flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', padding: 50, background: "linear-gradient(250deg, #830A48, #DEEFB7)", borderRadius: 10, margin: 40
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', width: '40%' }}>
                    <text style={{ color: 'white', fontSize: 70, padding: 20, fontWeight: '500' }}>Documentary</text>
                    <text style={{ color: 'white', fontSize: 25, fontWeight: '400' }}>When I lived in Colombia I saw the amount of Venezuelan people in the street and wanted to help them out. So I made this mini-documentary which explained their lives to the Colombian people and how we could help them.</text>
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/sdAYUKGCgMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} style={{
                display: 'flex',
                flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', padding: 50, background: "linear-gradient(250deg, #37FF8B, #51D6FF)", borderRadius: 10, margin: 40
            }}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0iZihMjRpaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', width: '40%' }}>
                    <text style={{ color: 'white', fontSize: 70, padding: 20, fontWeight: '500' }}>Finance</text>
                    <text style={{ color: 'white', fontSize: 25, fontWeight: '400' }}>When I started quaranting I weirdly enought became interested into finance, and at this time I combined my passion with finance and filmaking to do videos about dropshipping and day trading.</text>
                </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} style={{
                display: 'flex',
                flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height: 100, background: "red", margin: 40, borderRadius: 10
            }}>
                <text style={{ fontWeight: '500', fontSize: 30, color: 'white' }}>If you are interested for more videos click <a href="https://www.youtube.com/channel/UCVYZM33Tkd6dlXRtaib0SKw">here</a> to visit my youtube channel.</text>
            </motion.div>
        </div >
    )
}
