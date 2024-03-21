import React from 'react'
import Logo from '../../Assets/logo.png'
import './style.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

function Header() {
  return (
    <header>
        <figure>
            <img src={Logo} alt="Ironhack logo" />
        </figure>
        <nav>
            <ul>
                <li><a href="#"style={{fontSize:"26px"}} ><FaXTwitter/></a></li>
                <li><a href="#"style={{fontSize:"26px"}} ><FaDiscord/></a></li>
                {/* <li><a href="#">Features</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Roadmap</a></li> */}
            </ul>
        </nav>
    </header>
  )
}

export default Header