import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Hero = () => {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      className="text-white text-center pt-18 px-5 z-[11]"
    >
      <motion.h1
        variants={textVariants}
        className="text-4xl md:text-5xl font-bold mb-5"
      >
        The trust
        <br />
        <span className="text-gradient">Worthy</span>
        <span> client service </span>
      </motion.h1>
      <motion.p
        variants={textVariants}
        className="max-w-[750px] mx-auto leading-8"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non dolor
        ut nemo dolores ipsam voluptatem, ratione id praesentium enim, voluptas
        quam facilis aliquid officiis, amet commodi molestias voluptate!
        Reprehenderit.
      </motion.p>
    </motion.main>
  );
};

export default Hero;
