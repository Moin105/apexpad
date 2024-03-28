import React,{useState} from 'react'
import Logo from '../../Assets/logo.png'
import './style.css'
import Dropdown from '../Dropdown/Dropdown'
import prevlogo from '../../Assets/soltools.png'
import { IoMdMenu } from "react-icons/io";
import Nav from './Nav'
import { IoMdArrowDroprightCircle } from "react-icons/io";

import { MdClose } from 'react-icons/md'
function Header() {
  const  [show,setShow]= React.useState(true)
  const [nav, setNav] = useState(false);
  const navHandle = () => {
    setNav(!nav);
  };
  return (
    <div style={{display:'block',width: "100%",
    position: "fixed",zIndex:"11111"}}>

 {show ?   <div className='top'>
            <img src={prevlogo} alt="ApexPad logo" /> is now
            <img src={Logo} alt="ApexPad logo"  className='ew'/>
             ApexPad
            <span onClick={()=>{setShow(false)}}>
              <MdClose/>
            </span>
    </div>: ''}
    <header>
        <div className='figure'>
            <img src={Logo} alt="ApexPad logo" />
            <h2>ApexPad</h2>
        </div>
        <div className='flex'>
        <nav className='desktop-fide'>
            <ul>
            <li><a href="twitter.com" style={{fontSize:"15px"}} className=' hover:text-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'>APIs</a></li> 

            <Dropdown text="Token Creator" options={["Coming Soon"]} />
            <Dropdown text="Launchpad" options={["Coming Soon"]} />
            <Dropdown text="Lockers" options={["Solana", "Injective", "Near","Sei"]} />
            {/* <Dropdown text="Token Creator" options={["Option 1", "Option 2", "Option 3"]} /> */}

                {/* <li><a href="twitter.com" style={{fontSize:"17px"}} >Token Creator</a></li> */}
                {/* <li><a href="google.com" style={{fontSize:"17px"}} >Launchpad</a></li>*/}
                <li><a href="google.com" style={{fontSize:"15px"}} ><button className="text-white bg-gradient-to-r from-purple-500 to-purple-300 hover:bg-gradient-to-l  focus:outline-none  font-medium  text-2xl  text-center">Launch App</button></a></li>
                {/* <li><a href="#">Features</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Roadmap</a></li> */}
            </ul>
        </nav>
            <span onClick={navHandle} className="navbar">
          <figure className="ham">
          <IoMdMenu />
          </figure>
        </span>
        </div>
    </header>
    {nav && <Nav setNav={setNav} />}

    </div>
  )
}

export default Header