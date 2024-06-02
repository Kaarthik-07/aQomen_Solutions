import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { close, companyLogo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.5 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav className="w-full flex justify-between items-center navbar">
      <img
        src={companyLogo}
        alt="aQomen"
        className="w-[175px] h-[175px] z-[110]"
      />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, i) => (
          <motion.li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              i === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
            whileHover={{ scale: 1.1 }}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </motion.li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((previous) => !previous)}
        />
        <AnimatePresence>
          {toggle && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar"
            >
              <ul className="list-none flex flex-col justify-end items-center flex-1">
                {navLinks.map((nav, i) => (
                  <motion.li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${
                      i === navLinks.length - 1 ? "mr-0" : "mb-4"
                    } text-white`}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
