import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import img5 from "../assets/img5.jpg";
import "./About.css";

const About = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="about-overlay"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="about-close" onClick={onClose}>X</div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <div className="about-left">
              <img src={img5} alt="Dwarakanath" className="about-photo" />
            </div>

            <div className="about-right">
              <p className="about-tag">About Me</p>
              <h1 className="about-name">Dwarakanath K Dinesh</h1>
              <p className="about-role">Data Scientist · AI Engineer · Founder</p>
              <p className="about-bio">
                I am a Data Science graduate specialising in building intelligent,
                data-driven systems that solve real world problems. From engineering
                enterprise ML platforms at KONE processing nearly a million records,
                to founding LOGEAUM — an AI mental health platform with 94% emotion
                accuracy — I turn raw data into real impact.
              </p>
              <p className="about-bio">
                Based in Kozhikode, Kerala — open to opportunities worldwide.
                I bring deep expertise in Python, LangChain, Databricks, GPT-4
                and agentic AI systems.
              </p>
              <div className="about-links">
                <a href="https://linkedin.com/in/dwarakanathk" target="_blank" rel="noreferrer" className="about-btn">LinkedIn</a>
                <a href="https://github.com/dknathzx" target="_blank" rel="noreferrer" className="about-btn">GitHub</a>
                <a href="mailto:dknathzx@gmail.com" className="about-btn">Email</a>
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default About;