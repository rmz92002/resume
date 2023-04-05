import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingTop: 40, background: "linear-gradient( black, white)", width: '100%', height: '100%' }}>
            <motion.div whileHover={{ scale: 1.1 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20, borderRadius: 20, height: 500, width: 400, boxShadow: "2px 2px 2px 2px #D1D8D6", background: 'white' }}>
                <text style={{ padding: 20, fontSize: 25 }} >Contact</text>
                <text style={{ paddingBottom: 15, fontSize: 20, fontWeight: '300' }} >
                    Personal email: rmz92002@gmail.com
                </text >
                <text style={{ paddingBottom: 15, fontSize: 20, fontWeight: '300' }}>
                    School email: santiago.ramirez@berkeley.edu
                </text>
                <text style={{ paddingBottom: 10, fontSize: 20, fontWeight: '300' }}>
                    Phone Number: 445-208-9637
                </text>
                <text style={{ paddingBottom: 15, fontSize: 20, fontWeight: '300' }}>
                    Instagram: <a href='https://www.instagram.com/santirmz9/'>santirmz9</a>
                </text>
                <text style={{ paddingBottom: 15, fontSize: 20, fontWeight: '300' }}>
                    Facebook: <a href='https://www.facebook.com/santiago.ramirez.31337/'> santiago.ramirez</a>
                </text>
                <text style={{ paddingBottom: 15, fontSize: 20, fontWeight: '300' }}>
                    Linkeldin: <a href='https://www.linkedin.com/in/santiago-ramirez-68802424a/'> santiago-ramirez</a>
                </text>
            </motion.div>
        </div >
    )
}
