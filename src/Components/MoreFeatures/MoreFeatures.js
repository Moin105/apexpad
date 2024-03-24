
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {MdLock,MdOutlineSwapCalls, MdToken , MdOutlineRocketLaunch} from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import card1 from '../../Assets/card1.png'
import card2 from '../../Assets/card2.png' 
import card3 from '../../Assets/card3.png'
import solana from '../../Assets/solana.png'
import sei from '../../Assets/sei.png'
import injective from '../../Assets/injective.png'
import near from '../../Assets/near.png'
const content = [
  {
    icon: card1,
    title: "LP & Token Lockers ",
    first: "Launch App",
    second:"Read More"
  },
  {
    icon: card2,
    title: "Token Launchpad",
    first:"Coming Soon",
    second:'Read More'
  },
  {
    icon: card3,
    title: "Token Creator",
    first:"Coming Soon ",
    second:'Read More'

  },
];

export const MoreFeatures = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0.8, 1], ["0vh", "50vh"]);

  return (
    <motion.section
      ref={targetRef}
      style={{ opacity, y }}
      className="mx-auto flex space-x-0 w-full max-w-[120rem] justify-center flex-wrap	 gap-20 py-96"
    >
      {content.map(({ icon: Icon, title, text ,first,second}) => (
        <div key={title} style={{fontSize:"22px"}}  className="border-4 border-purple-600 hover:border-blue-200 transition-colors duration-300 flex flex-col items-center justify-center p-8 py-16 rounded-md border">
          <span className="padding-8 mb-4 flex h-32 w-32 items-center justify-center rounded-[1.8rem] bg-[#fff]">
            <img className="h-20 w-20 object-contain	" src={Icon} />
          </span>
          <h3 className="mb-2  text-white h2-poppins">{title}</h3>
          <p className="text-md text-white p-poppins" style={{color:"white"}}>{text}</p>
          <button type="button" style={{width:"200px",fontSize:"18px"}} className="text-white bg-gradient-to-r from-purple-500 to-purple-300 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-base px-5 mt-2 py-2.5 text-center ">{first}</button>
          <button type="button" style={{width:"200px",fontSize:"18px"}} className="text-white bg-gradient-to-r from-purple-500 to-purple-300 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-base px-5 mt-5 py-2.5 text-center ">{second}</button>

      
        </div>
      ))}
      <div className="mx-auto flex space-x-0 w-full max-w-[120rem] justify-center flex-wrap	 gap-40 opacity-50 ">
           <img src={solana} className="h-40 w-96 object-contain" />
           <img src={near} className="h-40 w-96 object-contain" />
            <img src={injective} className="h-40 w-96 object-contain " />
      </div>
      <div className="flex justify-center  opacity-50">
      <img src={sei} className="h-40 w-96 object-contain" />

      </div>
    </motion.section>
  );
};
