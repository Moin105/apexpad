import React from 'react'
// import Responsive from './Slider'
import ResponsiveCarousel from './Slider'
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import './about.css'
function Aboutus() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["end end", "end start"],
    });
    const opacity = useTransform(scrollYProgress, [0, 0.5 ,1], [1, 0,0]);
  return (
    <motion.div className='about h-screen'
     style={{ opacity: opacity }}
     
     ref={targetRef}>
        <h2>About Us</h2>
        <p>SolTools is a platform dedicated to revolutionalizing the Defi space on Solana. Our team of experienced blockchain professionals and enthusiasts is driven by a shared vision for the potential of the Solana network. We aim to provide a comprehensive and user-friendly Defi support ecosystem for the Solana community. Join us in shaping the future of Defi on Solana.</p>
    <ResponsiveCarousel/>
    </motion.div>
  )
}

export default Aboutus