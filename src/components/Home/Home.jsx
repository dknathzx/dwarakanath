import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import About from "../About/About";
import Videos from "../Videos/Videos";
import MercuryBackground from "../Background/Mercurybackground";
import logo from "../assets/logoheader.png";
import vector2 from "../assets/img11.png";
import vector6 from "../assets/vector6.png";
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

const skills = [
  { category: "Programming", items: "Python (Advanced) · SQL · R · Java" },
  { category: "AI & LLM", items: "LangChain · Ollama · OpenAI GPT-4 · Agentic AI · Prompt Engineering" },
  { category: "ML / Deep Learning", items: "Supervised & Unsupervised Learning · Deep Learning · NLP · Forecasting · Anomaly Detection" },
  { category: "ML Libraries", items: "scikit-learn · TensorFlow/Keras · PyTorch · XGBoost · pandas · NumPy · SpaCy · statsmodels" },
  { category: "Data Platforms", items: "Databricks · Apache Spark · Hadoop · Delta Lake · MLflow · AWS S3" },
  { category: "Databases", items: "SQL · NoSQL · SAP · Salesforce API · Delta Lake · DBMS" },
  { category: "Visualisation", items: "Tableau (Advanced) · matplotlib · seaborn · Streamlit" },
  { category: "DevOps & Tools", items: "Docker · FastAPI · Flask · Git · GitHub · Jupyter · Google Colab · VS Code" },
  { category: "Statistics", items: "Probability Theory · Hypothesis Testing · Regression Analysis · Statistical Inference" },
];

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [videosOpen, setVideosOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);

  return (
    <>
      <MercuryBackground />

      <div className="home">

        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <div className="top-bun"></div>
          <div className="meat"></div>
        </div>

        {/* MENU OVERLAY */}
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
                <a href="#about" onClick={(e) => { e.preventDefault(); setMenuOpen(false); setTimeout(() => setAboutOpen(true), 700); }}>About</a>
                <a href="#projects" onClick={(e) => { e.preventDefault(); setMenuOpen(false); setTimeout(() => setProjectsOpen(true), 700); }}>Projects</a>
                <a href="#videos" onClick={(e) => { e.preventDefault(); setMenuOpen(false); setTimeout(() => setVideosOpen(true), 700); }}>Videos</a>
                <a href="#skills" onClick={(e) => { e.preventDefault(); setMenuOpen(false); setTimeout(() => setSkillsOpen(true), 700); }}>Skills</a>
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

        {/* PROJECTS OVERLAY */}
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
              <button className="watch-videos-btn" onClick={() => { setProjectsOpen(false); setTimeout(() => setVideosOpen(true), 700); }}>Watch Project Videos</button>
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

        {/* SKILLS OVERLAY */}
        <AnimatePresence>
          {skillsOpen && (
            <motion.div
              className="projects-overlay"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="projects-close" onClick={() => setSkillsOpen(false)}>X</div>
              <div className="projects-title">Skills</div>
              <motion.div
                className="projects-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="project-item"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  >
                    <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
                    <div className="project-info">
                      <div className="project-top">
                        <h2 className="project-name">{skill.category}</h2>
                      </div>
                      <p className="project-desc">{skill.items}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ABOUT OVERLAY */}
        <About open={aboutOpen} onClose={() => setAboutOpen(false)} />

        {/* VIDEOS OVERLAY */}
        <Videos open={videosOpen} onClose={() => setVideosOpen(false)} />

        {/* REST OF HOME */}
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
          <img src={vector6} alt="ecom" className="image-og" />
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
    </>
  );
};

export default Home;