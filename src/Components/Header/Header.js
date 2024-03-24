import React from 'react'
import Logo from '../../Assets/logo.png'
import './style.css'
import Dropdown from '../Dropdown/Dropdown'


function Header() {
  return (
    <header>
        <div className='figure'>
            <img src={Logo} alt="ApexPad logo" />
            <h2>ApexPad</h2>
        </div>
        <nav>
            <ul>
            <li><a href="twitter.com" style={{fontSize:"15px"}} className=' hover:text-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'>Audits</a></li> 

            <Dropdown text="Token Creator" options={["Coming Soon"]} />
            <Dropdown text="Launchpad" options={["Coming Soon"]} />
            <Dropdown text="Lockers" options={["Solana", "Injective", "Near","Sei"]} />
            {/* <Dropdown text="Token Creator" options={["Option 1", "Option 2", "Option 3"]} /> */}

                {/* <li><a href="twitter.com" style={{fontSize:"17px"}} >Token Creator</a></li> */}
                {/* <li><a href="google.com" style={{fontSize:"17px"}} >Launchpad</a></li>*/}
                <li><a href="google.com" style={{fontSize:"15px"}} ><button className="text-white bg-gradient-to-r from-purple-500 to-purple-300 hover:bg-gradient-to-l  focus:outline-none  font-medium rounded-lg text-2xl px-5 mt-2 py-2.5 text-center">Launch App</button></a></li>
                {/* <li><a href="#">Features</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Roadmap</a></li> */}
            </ul>
        </nav>
    </header>
  )
}

export default Header