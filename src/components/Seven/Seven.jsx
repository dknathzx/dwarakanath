import React from "react";
import "./seven.css";
import sev from "../assets/img1.jpg";
import fillblk from "../assets/img7.jpg";
import thr from "../assets/img5.jpg";

export const Seven = () => {
  return (
    <div className="seven">
      <div className="sev-lov">
        <img src={sev} alt="pice" className="sev-pic" />
      </div>
      <div className="the">the</div>
      <div className="seven-bloc">
        <p className="pixel">mind</p>
        <p className="perfect">behind</p>
      </div>
      <div className="blocker">
        <img src={fillblk} alt="pice" className="blocker-fill" />
      </div>
      <div className="throp">
        <img src={thr} alt="thropy" className="thr" />
      </div>
    </div>
  );
};

export default Seven;