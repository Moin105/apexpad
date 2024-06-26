import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Logos from '../../Assets/cognito.png'
import coin from "../../Assets/coin.png";
import chart from "../../Assets/Clay.png";
import "./banner.css";
export const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  //   useEffect(() => {
  //     const updateMousePosition = (ev) => {
  //       if (!targetRef.current) return;
  //       const { clientX, clientY } = ev;
  //       targetRef.current.style.setProperty("--x", `${clientX}px`);
  //       targetRef.current.style.setProperty("--y", `${clientY}px`);
  //     };

  //     window.addEventListener("mousemove", updateMousePosition);

  //     return () => {
  //       window.removeEventListener("mousemove", updateMousePosition);
  //     };
  //   }, []);
  const openLink = (url) => {
    // Open the specified URL in a new tab/window
    window.open(url, '_blank');
  };
  return (
    <>
      <motion.div
        className="h-screen flex justify-center items-center w-full  "
        style={{ opacity, scale, zIndex: -1 }}
      >
        <div className="tifgo w-2/4	gap-6 flex flex-col pt-10 items-center">
          <h1 className="h1 text-white text-8xl text-left font-extrabold	w-full  pl-20">
            Welcome To <br></br> ApexPad
          </h1>

          <p className="text-white  w-full text-left	mt-10  pl-20" style={{fontSize:"17px"}}>
          A Suite of Reliable And Secure DeFi Tools.<br></br>
          We provide a wide range of innovative, dependable and decentralized infrastructure on Solana, Injective, Sei And Near Protocol blockchains.    </p>
          <div className="banner-buttons">
            <button onClick={openLink('https://app.apexpad.finance')} className="text-white bg-gradient-to-r from-purple-500 to-purple-300 hover:bg-gradient-to-l  focus:outline-none  font-medium rounded-lg text-base px-5  py-2.5 text-center">
              Launch App
            </button>
            <button onClick={openLink('https://docs.apexpad.finance')} >
              Documentation
            </button>
          </div>
          <div className="logoaudit" onClick={openLink('https://www.cognitos.io/soltoolslocker-audit')} >
          Audited By
            <img src={Logos} alt="ApexPad logo" />
          </div>
        </div>
        <div className="gitfo w-2/4	 flex flex-col items-center ">
          <div className="flex justify-center items-center space-x-8">
            <div className="relative h-96 w-96 imoge">
              <img
                src={chart}
                className="absolute h-full w-full object-contain animate-half-rotate-up-down"
                alt="chart"
              />
            </div>
            <div className="relative h-96 w-96 imoge">
              <img
                src={coin}
                className="absolute h-full w-full object-contain animate-half-rotate-up-down"
                alt="coin"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.section
        ref={targetRef}
        className="relative mb-1rem py-16 text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-40"
        style={{ opacity: opacity }}
      >
        {/* <motion.div
        className="fixed left-1/2 z-10 flex flex-col items-center"
        style={{ position, scale, x: "-50%" }}
      >
       <motion.p
          style={{
            y: "50%",
            x: "-50%",
            width:"100%"
          }}        >
        <p>
        Welcome To ApexPad
        </p> 
        
        </motion.p>
      </motion.div> */}
      </motion.section>
    </>
  );
};
