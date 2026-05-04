import React from "react";
import "./HireMe.css";

const HireMe = () => {
  const handleClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&to=dknathzx@gmail.com&su=Hire Me — Portfolio Enquiry",
      "_blank"
    );
  };

  return (
    <button className="hire-btn" onClick={handleClick}>
      Hire Me
    </button>
  );
};

export default HireMe;