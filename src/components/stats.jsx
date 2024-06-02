import React from "react";
import { motion } from "framer-motion";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-24 gap-8`}
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Stats;
