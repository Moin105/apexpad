import React from "react";
import logo from "../../Assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import Dropdown from "../Dropdown/Dropdown";
import { IoMdArrowDroprightCircle } from "react-icons/io";
function Nav(props) {
  const navHandle = () => {
    props.setNav(false);
  };
  const arr =[{name:"Solana",link:"https://app.apexpad.finance/sol/locker"}, {name:"Injective",link:"https://app.apexpad.finance/inj/locker"},{ name:"Near",link:'https://app.apexpad.finance/near/locker'},{name:"Sei",link:'https://app.apexpad.finance/sei/locker'}]
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

<li><a href="https://docs.apexpad.finance/api-documentation "style={{fontSize:"15px"}} className=' hover:text-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'>APIs</a></li> 
<li><a href="twitter.com" style={{fontSize:"15px"}} className=' hover:text-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'>Token Creator</a><span className='sife'>soon</span></li> 
<li><a href="twitter.com" style={{fontSize:"15px"}} className=' hover:text-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'>Launchpad</a><span className='sife'>soon</span></li> 

{/* <Dropdown text="" options={[{name:"Soon",cname:"pisco"}]} /> */}
{/* <Dropdown text="" options={[{name:"Soon",cname:"pisco"}]} /> */}
<Dropdown text="Lockers"  />
{arr.map((item,index)=>{
  return <li><a href={item.link} key={index} style={{fontSize:"15px"}} className=' hover:text-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'>{item.name}</a></li>
})}
{/* <Dropdown text="Token Creator" options={["Option 1", "Option 2", "Option 3"]} /> */}

    {/* <li><a href="twitter.com" style={{fontSize:"17px"}} >Token Creator</a></li> */}
    {/* <li><a href="google.com" style={{fontSize:"17px"}} >Launchpad</a></li>*/}
    <li><a href="https://app.apexpad.finance" style={{fontSize:"15px"}} ><button className="text-white bg-gradient-to-r from-purple-500 to-purple-300 hover:bg-gradient-to-l  focus:outline-none  font-medium  text-2xl  text-center">Launch App</button></a></li>
    {/* <li><a href="#">Features</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Roadmap</a></li> */}
</ul>
      </div>
    </div>
  );
}

export default Nav;