import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const stylesWithCssVar = (styles) => styles;

export const StreamlinedExperience = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const textX = useTransform(scrollYProgress, [0.1, 0.7], ["100%", "-100%"]);
  const opacitySection = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.7]);

  const opacityBorder = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72],
    [1, 1, 0]
  );
  const finalTextOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72, 0.8, 0.9],
    [0, 0, 1, 1, 0]
  );

  const finalTextScale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.7]);
  const styles = stylesWithCssVar({
    opacity: opacitySection,
    "--scale": scale,
    "--opacity-border": opacityBorder,
  });
  return (
    <motion.section
      style={styles}
      ref={targetRef}
      className=" flex h-[300vh] items-start justify-start"
    >
      <div className="sticky top-1/2 left-1/2 min-h-[50rem] min-w-[50rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap before:absolute before:inset-0 before:scale-[var(--scale)] before:border-[2.5rem] before:border-[#7b61ff] before:opacity-[var(--opacity-border)]">
        <motion.p
          aria-hidden
          style={{ x: textX, y: "-50%" }}
          className="whitepspace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] text-[23rem] text-heading"
        >
          Apexpad
        </motion.p>
        <motion.p
          aria-hidden
          style={{ x: textX, y: "-50%" }}
          className="whitepspace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] z-[11] text-[23rem] text-transparent [-webkit-text-stroke:1px_var(--color-heading)]"
        >
          Apexpad
        </motion.p>
        <motion.div
          style={{
            opacity: finalTextOpacity,
            scale: finalTextScale,
            y: "-50%",
            x: "-50%",
          }}
          className="absolute left-1/2 top-1/2  leading-tight text-white"
        >
          <motion.p className="text-[8.8rem]">
            Apexpad Services
            {/* Defi. */}
          </motion.p>
          <motion.p className="text-[1.8rem] pt-8 text-justify	">
          ApexPad (formerly SolTools) is a platform dedicated to revolutionalizing <br></br>the DeFi space. Our team of experienced blockchain professionals and enthusiasts<br></br> is driven by a shared vision for the potential of blockchain technology.<br></br>
           Through our products and services, we provide a comprehensive and user-friendly <br></br>support ecosystem for the safety of decentralized finance.
          </motion.p>
        </motion.div>

        <span className="absolute left-[calc(50%*var(--scale)+50%)] top-0 z-10 h-full w-[50vw] origin-left scale-[var(--scale)] bg-background opacity-[var(--opacity-border)]" />
        <span className="absolute left-[calc(50%*var(--scale)+50%-(2.5rem*var(--scale)))] top-0 z-[12] h-full w-[50vw] origin-left scale-[var(--scale)] border-l-[2.5rem] border-[#7b61ff] opacity-[var(--opacity-border)]" />
      </div>
    </motion.section>
  );
};
