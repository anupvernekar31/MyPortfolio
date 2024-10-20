import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { fadeIn } from "../utils/motion";
import { profile, quicken } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[100px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="hidden sm:flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="sm:text-left text-center">
          <h1
            className={`font-black lg:text-[50px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[58px] mt-2 text-white`}
          >
            Hi, I'm <br className="sm:block hidden" />
            <span className="text-[#915EFF]">Anup Vernekar</span>
          </h1>

          <div
            className={`${styles.heroSubText} mt-2 text-white-100`}
            // style={{
            //   display: "flex",
            //   flexWrap: "wrap",
            //   alignItems: "center",
            // }}
          >
            <Typewriter
              options={{
                strings: [
                  "Software Engineer ;",
                  "Programmer ;",
                  "Mobile Developer ;",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <p className="py-5 bottom-[120px] max-w-3xl font-medium">
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute sm:bottom-2 bottom-5 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[34px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
            <motion.div
              animate={{
                y: [-15, 20, -15],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-2.5 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
