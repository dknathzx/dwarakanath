import React from "react";
import "./fourth.css";
import stamp from "../assets/logoheader.png";
import yellow from "../assets/vector2.jpeg";
export const Fourth = () => {
  return (<div className="fourth">
    <div className="four-bloc"></div>
    <p className="web">Machine Learning</p>
    <img src={stamp} alt="stamp" className="stamp"/>
    <div className="four-line"></div>
    <div className="latest">Latest Projects!</div>
<div className="des-lat">
  Fresh builds — selected <br />
  work from my latest <br />
  AI & data releases.
</div>

    <div className="tip">note !</div>
    <div className="tp-des">Click the image to explore</div>
    <div className="four-line-two"></div>
    <div className="yell-blocl">
      <img src={yellow} alt="yellow" className="yell-fill" />
    </div>
    <div className="think">LOGEAUM</div>
<div className="new-org"></div>
<div className="new">new</div>
<div className="new-des-think">
  LOGEAUM is an AI-powered mental health platform <br />
  connecting individuals with psychiatrists and <br />
  counsellors through emotion-aware interactions.
</div>

    <div className="four-lin"></div>
    <div className="four-lin-del"></div>
    <div className="text-head-one">build, train,</div>
    <div className="delivery">deploy</div>
  
    <div className="block-a-four"><p className="block-a-let-four">e</p></div>
    <p className="go-des">
  very strong solution starts with <br />
  clean data and clear thinking. I build, <br />
  train and deploy ML systems
</p>
<p className="go-des-two">
  that drive real business impact worldwide.
</p>

  </div>
  );
};
export default Fourth;