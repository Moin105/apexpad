import React from 'react'
import './footer.css'
import Logo from '../../Assets/logo.png'
import { FaXTwitter,FaTelegram, FaT } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import {  } from "react-icons/fa6";

function Footer() {
  return (
    <div className='footer'>
    <div className='container'>

 <div className='figure'>
            <img src={Logo} alt="ApexPad logo" />
            <h2>ApexPad</h2>
        </div>
        <nav>
            <ul>
                <li><a href="twitter.com" target='_blank' style={{fontSize:"27px"}} ><FaXTwitter/></a></li>
                <li><a href="google.com" target='_blank' style={{fontSize:"27px"}} ><FaTelegram/></a></li>
                <li><a href="google.com" target='_blank' style={{fontSize:"27px"}} ><FaDiscord/></a></li>
                 {/* <li><a href="#">Features</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Roadmap</a></li> */}
            </ul>
        </nav>
    </div>
    </div>
  )
}

export default Footer