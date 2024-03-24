import React from 'react'
import Logo from '../../Assets/logo.png'
import './style.css'


function Header() {
  return (
    <header>
        <div className='figure'>
            <img src={Logo} alt="ApexPad logo" />
            <h2>ApexPad</h2>
        </div>
        <nav>
            <ul>
                <li><a href="twitter.com" style={{fontSize:"17px"}} >Token Creator</a></li>
                <li><a href="google.com" style={{fontSize:"17px"}} >Launchpad</a></li>
                <li><a href="twitter.com" style={{fontSize:"17px"}} >Lockers</a></li>
                <li><a href="google.com" style={{fontSize:"17px"}} ><button>Launch App</button></a></li>
                {/* <li><a href="#">Features</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Roadmap</a></li> */}
            </ul>
        </nav>
    </header>
  )
}

export default Header