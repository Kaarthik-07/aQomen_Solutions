import React from "react";
import { motion } from "framer-motion";
import { quotes } from "../assets";

const feedbackVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const Feedback = ({ content, name, title, img }) => {
  return (
    <motion.div
      variants={feedbackVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
    >
      <img
        src={quotes}
        alt="double-quotes"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>
      <div className="flex flex-row">
        <img
          src={img}
          alt="client"
          className="w-[70px] h-[70px] rounded-full"
        />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-white">
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Feedback;
