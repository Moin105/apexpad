import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Logo from '../../Assets/logo.png'

export const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
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

  return (
    <motion.section
      ref={targetRef}
      className="relative mb-1rem h-screen py-16 text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-40"
      style={{ opacity: opacity }}
    >
      <motion.div
        className="fixed left-1/2 z-10 flex flex-col items-center"
        style={{ position, scale, x: "-50%" }}
      >
      <img src={Logo} style={{width:"300px",height:"250px",objectFit:"contain"}}/>
       <motion.p
          style={{
            y: "100%",
            x: "-50%",
          }}
          className="absolute left-1/2 top-1/2 text-[8.8rem] leading-tight text-black"
        >
          Apexpad
          <br />
          {/* Defi. */}
        </motion.p>
      </motion.div>
    </motion.section>
  );
};
