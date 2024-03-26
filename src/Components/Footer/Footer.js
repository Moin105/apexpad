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
 <div className='flex justify-center items-center'> 
            <img src={Logo} alt="ApexPad logo" />
            <h2>ApexPad</h2>
 </div>
            <ul>
                <li><a href="twitter.com" target='_blank' style={{fontSize:"27px"}} ><FaXTwitter/></a></li>
                <li><a href="google.com" target='_blank' className='li' style={{fontSize:"27px"}} ><FaTelegram/></a></li>
            </ul>
        </div>
        <nav>
        <ul className='ul'>
              <li><a href="twitter.com" target='_blank' style={{fontSize:"15px"}}>APIs</a></li>
              <li><a href="twitter.com" target='_blank' style={{fontSize:"15px"}}>Fees</a></li>
        </ul>
        <ul className='ul'>
              <li><a href="twitter.com" target='_blank' style={{fontSize:"15px"}}>Terms of Service</a></li>
              <li><a href="twitter.com" target='_blank' style={{fontSize:"15px"}}>Privacy Policy</a></li>
              <li><a href="twitter.com" target='_blank' style={{fontSize:"15px"}}>Audits</a></li>
              <li><a href="twitter.com" target='_blank' style={{fontSize:"15px"}}>Documentation</a></li>
            </ul>
        {/* <ul className='ul'>
    
            </ul> */}
        
          
        </nav>
    </div>
    </div>
  )
}

export default Footer