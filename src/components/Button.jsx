import React from "react";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.95, transition: { duration: 0.2 } },
};

const Button = ({ styles }) => {
  return (
    <motion.button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      Get Started
    </motion.button>
  );
};

export default Button;
