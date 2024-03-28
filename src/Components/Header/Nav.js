import React from "react";
import logo from "../../Assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import Dropdown from "../Dropdown/Dropdown";
import { IoMdArrowDroprightCircle } from "react-icons/io";
function Nav(props) {
  const navHandle = () => {
    props.setNav(false);
  };
  return (
    <div className="mobilenav">
      {" "}
      <div className="mobileback">
        <div onClick={navHandle}>
          {" "}
          <figure>
          <IoMdArrowDroprightCircle/>
          </figure>
        </div>
      </div>
      <div className="mobilebar">
        <figure className="hlogo">
          <img
            src={logo}
            alt="OBS TECHNOLOGIA"
            layout="fill"
            objectFit="contain"
          />
          <h2>ApexPad</h2>
        </figure>
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
      </div>
    </div>
  );
}

export default Nav;