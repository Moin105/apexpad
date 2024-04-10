import React from 'react'
import './footer.css'
import Logo from '../../Assets/logo.png'
import { FaXTwitter,FaTelegram, FaT } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import {  } from "react-icons/fa6";

function Footer() {
  const openLink = (url) => {
    // Open the specified URL in a new tab/window
    window.open(url, '_blank');
  };


 
  


  return (
    <div className='footer'>
    <div className='container'>

 <div className='figure'>
 <div className='flex justify-center items-center'> 
            <img src={Logo} alt="ApexPad logo" />
            <h2>ApexPad</h2>
 </div>
            <ul>
                <li><a href='https://twitter.com/apexpad'target='_blank' style={{fontSize:"27px"}} ><FaXTwitter/></a></li>
                <li><a href="https://t.me/apexpad" target='_blank' className='li' style={{fontSize:"27px"}} ><FaTelegram/></a></li>
            </ul>
        </div>
        <nav style={{width:"50%",justifyContent:"space-between"}}>
        <ul className='ul'>
              <li><a href="https://docs.apexpad.finance/api-documentation" target='_blank' style={{fontSize:"15px"}}>APIs</a></li>
              <li><a href="https://docs.apexpad.finance/fees" target='_blank' style={{fontSize:"15px"}}>Fees</a></li>
        </ul>
        <ul className='ul'>
              <li><a href="https://docs.apexpad.finance/legal-and-ethics/terms-of-use" target='_blank' style={{fontSize:"15px"}}>Terms of Service</a></li>
              <li><a href="https://docs.apexpad.finance/legal-and-ethics/privacy-policy" target='_blank' style={{fontSize:"15px"}}>Privacy Policy</a></li>
              <li><a href="https://docs.apexpad.finance/audits-and-security" target='_blank' style={{fontSize:"15px"}}>Audits</a></li>
              <li><a href="https://docs.apexpad.finance" target='_blank' style={{fontSize:"15px"}}>Documentation</a></li>
            </ul>
        {/* <ul className='ul'>
    
            </ul> */}
        
          
        </nav>
    </div>
    <div className='flex justify-center snoop '>
   <p>ApexPad © 2024</p>
    </div>
    </div>
  )
}

export default Footer