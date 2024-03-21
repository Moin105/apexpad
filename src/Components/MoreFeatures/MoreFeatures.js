
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {MdLock,MdOutlineSwapCalls, MdToken , MdOutlineRocketLaunch} from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";


const content = [
  {
    icon: MdOutlineSwapCalls,
    title: "UNIQUE SWAP",
    text: "SolTools Swap allows you to launch and trade coins and tokens with innovative tax tokenomics, max transaction, and max wallet functions. This sets us apart from other platforms, providing a more comprehensive solution for your Defi needs",
  },
  {
    icon: MdLock,
    title: "LIQUIDITY AND TOKEN LOCKER",
    text: "SolTools Locker provides a secure and efficient way to manage your liquidity pools and tokens on the Solana network. The user-friendly interface makes it easy to lock and unlock your liquidity and tokens, giving you complete control over your assets.",
  },
  {
    icon: MdToken,
    title: "TOKEN CREATOR",
    text: "SolTools Token creator allows you to create and deploy new tokens on Solana with ease. Whether launching a new project or adding a new token to your portfolio, our token creator streamlines the process, making it quick and simple.",
  },
  {
    icon: FaChartLine,
    title: "CHARTING TOOL",
    text: "The charting tool provides valuable insights into the performance of your investments. You can make informed decisions about your portfolio with real-time data and comprehensive analysis",
  },
  {
    icon: MdOutlineRocketLaunch,
    title: "LAUNCHPAD",
    text: "The token and NFT launchpad offer a platform for project developers and creators to launch and sell their tokens and NFTs. Whether you're a seasoned developer team or a new entrant to the Defi space, our launchpad provides a secure and user-friendly environment for raising funds and successfully launching your project.",
  }
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
      className="mx-auto grid w-full max-w-[120rem] grid-cols-3 gap-40 py-96"
    >
      {content.map(({ icon: Icon, title, text }) => (
        <div key={title}>
          <span className="padding-8 mb-4 flex h-32 w-32 items-center justify-center rounded-[1.8rem] bg-[#fff]">
            <Icon className="h-12 w-12" />
          </span>
          <h3 className="mb-2  text-white h3-poppins">{title}</h3>
          <p className="text-md text-white p-poppins" style={{color:"white"}}>{text}</p>
        </div>
      ))}
    </motion.section>
  );
};
