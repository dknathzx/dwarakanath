import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./intro.css";

const Intro = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 800);
    }, 3000); // shows for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro-wrapper"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            className="intro-name"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            DWARAKANATH
          </motion.div>

          <motion.div
            className="intro-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Data Scientist & AI Engineer
          </motion.div>

          <motion.div
            className="intro-bar"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.8, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;