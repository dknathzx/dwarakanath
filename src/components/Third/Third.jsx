import React from "react";
import "./third.css";
import side from "../assets/img1.jpg";
export const Third = () => {
  return (<div className="third">
    <div className="pic-side-boc">
        <img src={side} alt="side" className="boc-fill" />
    </div>
    <div className="third-line"></div>
    <div className="third-line-two"></div>
    <div className="third-line-three"></div>
    <div className="third-line-four"></div>
    <p className="text-one">Data Scientist</p>
    <p className="text-two">AI & ML Engineer</p>
    <p className="text-three">Data Engineer</p>
    <div className="block-a"><p className="block-a-let">a</p></div>
    <p className="text-ablaz">
    As a Data Scientist & AI Engineer, <br />
    I'm passionate about building <br />
    intelligent, data-driven systems <br />

    </p>
<p className="ablaz-two">through machine learning, NLP and <br />
    agentic AI — for enterprises and <br />
    startups around the world.</p>

    
  </div>
  );
};
export default Third;
