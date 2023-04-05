import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function WordDone(props) {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        console.log('clicked')
        navigate(props.link);
    };

    return (
        <motion.button onClick={handleClick} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ display: 'flex', flexDirection: 'column', alignItems: "center", width: 450, backgroundColor: 'white', borderRadius: 10, padding: 10, borderColor: "#eee" }}>
            <text style={{ color: 'grey', fontSize: 25, paddingBottom: 20, fontWeight: '500' }}>
                {props.name}
            </text>
            <div>
                <video onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)} loop autoplay='' muted height={200} style={{ borderRadius: 30, filter: isHovered ? "brightness(80%)" : "brightness(100%)", }}>
                    <source src={props.video} type="video/mp4" />
                </video>
            </div>
            <text style={{ color: 'black', padding: 30, opacity: 0.5, textAlign: 'center', fontSize: 16 }}>
                {props.description}
            </text>
        </motion.button>
    )
}
