import React, { useState } from "react";
import { motion } from "framer-motion";

const SplashScreen = () => {
  return (
    <motion.div
      transition={{ delay: 1, duration: 3 }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      className="fixed top-0 left-0 z-50 bg-white w-full h-screen overflow-hidden flex flex-row items-center justify-start gap-[0px] text-left text-18xl "
    >
      <div className="loading-text w-full m-auto absolute top-[40%] mobileAnimationh1 left-[40%] flex flex-col items-start justify-start gap-[0px] z-[2]">
        <h1 className="m-[0] text-[3rem] text-center leading-[3.5rem]   relative    inline-block shrink-0 z-[0]">
          <motion.p
            animate={{ x: 0 }}
            initial={{ x: -100 }}
            transition={{ duration: 1 }}
            className="[margin-block-start:0] [margin-block-end:0px] font-extrabold text-black"
          >
            WELCOME
          </motion.p>

          <motion.p
            animate={{ x: 0 }}
            initial={{ x: 100 }}
            transition={{ duration: 1 }}
            className="[margin-block-start:0] [margin-block-end:0px] text-black"
          >
            <div className="text-[2rem] tosplash">
              To <span className="text-primary">Travel Up</span>
            </div>
          </motion.p>
        </h1>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
