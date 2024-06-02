import React from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import styles from "./style";
import Navbar from "./components/NavBar";
import Stats from "./components/stats";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import Business from "./components/Buisness";
import Card from "./components/Card";

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-primary w-full overflow-hidden"
    >
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`bg-primary P-2 ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Testimonials />
          <Card />
          <Footer />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default App;
