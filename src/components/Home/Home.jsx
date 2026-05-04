
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Videos from "../Videos/Videos";
import logo from "../assets/logoheader.png";
import vector2 from "../assets/vector1.jpeg";
import vector1 from "../assets/vector6.png";
import vector3 from "../assets/vector3.png";
import "./home.css";

const projects = [
  {
    number: "01",
    title: "Composable ML Platform",
    tag: "KONE — Enterprise",
    desc: "Databricks platform processing 961K records across 9 ML models with MLflow, AWS S3, XGBoost (97.84% acc) and Random Forest (99.21% acc).",
    stack: "Python · Databricks · MLflow · AWS S3 · XGBoost",
  },
  {
    number: "02",
    title: "Agentic AI Chatbot",
    tag: "KONE — ServiceNow",
    desc: "Fully on-premise agentic AI system integrated with ServiceNow using LangChain, Ollama and FastAPI with zero external API dependency.",
    stack: "LangChain · Ollama · FastAPI · Docker · ServiceNow",
  },
  {
    number: "03",
    title: "LOGEAUM",
    tag: "Founder — AI Startup",
    desc: "AI mental health platform trained on 657K+ labelled samples detecting 15+ conditions with 94.44% emotion accuracy using GPT-4 and SpaCy.",
    stack: "GPT-4 · SpaCy · TensorFlow · Streamlit · Python",
  },
  {
    number: "04",
    title: "LLM2-General",
    tag: "Personal — AI Research",
    desc: "Custom LLM built from scratch including own tokenizer, model architecture, trainer and inference engine.",
    stack: "Python · PyTorch · Custom Tokenizer",
  },
  {
    number: "05",
    title: "Full-Stack React SSR App",
    tag: "Personal — Web Dev",
    desc: "Production grade React app with Server-Side Rendering, Redux state management and Express backend.",
    stack: "React · TypeScript · Webpack · Redux · Express",
  },
  {
    number: "06",
    title: "Astro Platform Starter",
    tag: "Personal — Web Dev",
    desc: "Modern Astro based web platform starter with optimized performance and clean architecture.",
    stack: "Astro · JavaScript · CSS",
  },
];

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [videosOpen, setVideosOpen] = useState(false);

  return (
    <div className="home">

      <div className="hamburger" onClick={() => setMenuOpen(true)}>
        <div className="top-bun"></div>
        <div className="meat"></div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="menu-overlay"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="menu-close" onClick={() => setMenuOpen(false)}>X</div>

            <motion.div
              className="menu-links"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#projects" onClick={() => { setMenuOpen(false); setTimeout(() => setProjectsOpen(true), 700); }}>Projects</a>
              <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </motion.div>

            <motion.div
              className="menu-bottom"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <a href="https://linkedin.com/in/dwarakanathk" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/dknathzx" target="_blank" rel="noreferrer">GitHub</a>
              <span>dknathzx@gmail.com</span>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {projectsOpen && (
          <motion.div
            className="projects-overlay"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="projects-close" onClick={() => setProjectsOpen(false)}>X</div>
            <div className="projects-title">Projects</div>
            <button className="watch-videos-btn" onClick={() => { setProjectsOpen(false); setTimeout(() => setVideosOpen(true), 700); }}>▶ Watch Project Videos</button>

            <motion.div
              className="projects-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="project-item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                >
                  <div className="project-number">{project.number}</div>
                  <div className="project-info">
                    <div className="project-top">
                      <h2 className="project-name">{project.title}</h2>
                      <span className="project-tag">{project.tag}</span>
                    </div>
                    <p className="project-desc">{project.desc}</p>
                    <p className="project-stack">{project.stack}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      <Videos open={videosOpen} onClose={() => setVideosOpen(false)} />

      <div className="nav">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="location">India, Kerala, Kozhikode</div>
      <div className="line"></div>

      <div className="pic-block">
        <img src={vector3} alt="ecom" className="image-og" />
      </div>
      <p className="tagger-one">KMOC Forge</p>
      <p className="tagger-des">
        A composable ML platform on Databricks that processes <br />
        nearly a million records across 7 algorithms — <br />
        enabling non-technical analysts to run forecasting <br />
        and anomaly detection pipelines
      </p>

      <div className="pic-block-two">
        <img src={vector2} alt="ecom" className="image-og" />
      </div>
      <p className="tagger-two">KoneDesk</p>
      <div className="new">new</div>
      <p className="tagger-des-two">
        An on-premise agentic AI system integrated with ServiceNow,<br />
        using LangChain and locally hosted LLMs to interpret user intent, <br />
        retrieve records and auto-generate incident responses <br />
        with zero external API dependency.
      </p>

      <div className="pic-block-three">
        <img src={vector1} alt="ecom" className="image-og" />
      </div>
      <p className="tagger-three">LOGEAUM</p>
      <p className="tagger-des-three">
        An AI-powered mental health platform trained on 657K+ labelled <br />
        samples, detecting 15+ conditions including anxiety, depression <br />
        and PTSD with 94% accuracy connecting users to professionals <br />
        through real-time emotion-aware interactions.
      </p>

      <div className="name-block"></div>
      <div className="name">DWARAKANATH</div>

    </div>
  );
};

export default Home;