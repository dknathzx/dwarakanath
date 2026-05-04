import React from "react";
import "./second.css";
import face from "../assets/img4.png";
export const Second = () => {
  return (<div className="second">
    <div className="sec-line"></div>
    <div className="sec-line-two"></div>
    <p className="inter">Data</p>
    <p className="artist">Scientist</p>
    <div className="sec-line-three"></div>
    <div className="pic-bay">
        <img src={face} alt="face" className="face" />
    </div>
    
  </div>
  );
};


export default Second;
