import React from "react";
import { motion } from "framer-motion";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const featureVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.95, transition: { duration: 0.2 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const FeatureCard = ({ icon, title, content, index }) => (
  <motion.div
    variants={featureVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
    whileTap="tap"
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </motion.div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={layout.sectionInfo}
      >
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" />
          we'll handle the Services.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
          accusantium cumque autem inventore numquam cum unde illum voluptate
          similique dignissimos impedit? Blanditiis cum placeat tempora
          necessitatibus eaque rem eveniet adipisci!
        </p>
        <Button styles="mt-10" />
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`${layout.sectionImg} flex-col`}
      >
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default Business;
