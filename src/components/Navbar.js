import React from 'react'
import '../style.css';
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'


function Navbar() {
    const navigate = useNavigate();
    return (
        <div className='navbar'>
            <motion.div onClick={() => navigate('/')} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ fontSize: 25, padding: 10, borderRadius: 10, borderColor: 'white', fontWeight: '500', background: "linear-gradient(250deg, #37FF8B, #51D6FF)", color: 'white' }}>Home</motion.div>
            <motion.div onClick={() => navigate('/about')} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ fontSize: 25, padding: 10, backgroundColor: "white", borderRadius: 10, borderColor: 'white', fontWeight: '500', background: "linear-gradient(250deg, #FFCF00, #FA003F)", color: 'white' }}>About</motion.div>
            <motion.div onClick={() => navigate('/contact')} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ fontSize: 25, padding: 10, backgroundColor: "white", borderRadius: 10, borderColor: 'white', fontWeight: '500', background: "linear-gradient(250deg, #FDFFFC, #161925)", color: 'white' }}>Contact</motion.div>
        </div >
    )
}

export default Navbar