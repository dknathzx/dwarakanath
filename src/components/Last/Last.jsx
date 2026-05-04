import React from "react";
import "./last.css";
import stamp from "../assets/logoheader.png";



export const Last = () => {
  return (
    <div className="last">
      <div className="last-line"></div>
      <div className="Dwarakanath">
        <div className="marquee">
          <div className="img1"></div>
        </div>
      </div>
      <div className="last-line-two"></div>
      <div className="names">&#169;Dwarakanath K Dinesh</div>
      <img src={stamp} alt="legal" className="legal" />
      <a href="https://www.linkedin.com/in/dwarakanathk/" className="last-link-one">
        Linkedin
      </a>
      <a href="https://github.com/dknathzx" className="last-link-two">
        GitHub
      </a>
    </div>
  );
};

export default Last;