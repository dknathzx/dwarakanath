import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./carousel.css";

const Carousel = ({ items }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % items.length);
  const prev = () => setCurrent((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-overflow">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="carousel-item"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <img src={items[current].image} alt={items[current].title} className="carousel-img" />
            <div className="carousel-info">
              <h2>{items[current].title}</h2>
              <p>{items[current].desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="carousel-controls">
        <button onClick={prev}>←</button>
        <span>{current + 1} / {items.length}</span>
        <button onClick={next}>→</button>
      </div>
    </div>
  );
};

export default Carousel;