import React from "react";
import { motion } from "framer-motion";
import { feedback, clients } from "../constants";
import styles from "../style";
import Feedback from "./Feedback";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const clientVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.1 },
};
const Testimonials = () => {
  return (
    <section id="clients" className=" ">
      <div className="p-14  flex justify-center items-center md:flex-row flex-col sm:mb-16 mb-6 z-[1]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={styles.heading2}
        >
          What our clients are <br className="sm:block hidden" />
          saying about us
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full md:mt-0 mt-6 flex gap-14 justify-center items-center"
        >
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to do try our services and grow your business
            anywhere on the planet.
          </p>
        </motion.div>
      </div>
      <div className={`${styles.flexCenter} my-4`}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`${styles.flexCenter} flex-wrap w-full`}
        >
          {clients.map((client) => (
            <motion.div
              key={client.id}
              variants={clientVariants}
              whileHover="hover"
              className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
            >
              <img
                src={client.logo}
                alt="client"
                className="sm:w-[192px] w-[100px] object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="p-14 flex flex-wrap sm:justify-start justify-center w-full feedback-contrainer relative z-[1]"
      >
        {feedback.map((card) => (
          <Feedback key={card.id} {...card} />
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
