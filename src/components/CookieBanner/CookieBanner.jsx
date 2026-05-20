import React, { useState, useEffect } from "react";
import "./CookieBanner.css";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div id="cookie-container" className="cookie-container">
      <p>We honor your autonomy and privacy. Our site uses cookies to enhance your experience — but only with your clear consent.</p>
      <p>You are in control — choose how much data you feel comfortable sharing.</p>
      <p>
        Our{" "}
        <a className="cookieLink" href="/privacy-policy" target="_blank" rel="noreferrer">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a className="cookieLink" href="/cookie-policy" target="_blank" rel="noreferrer">
          Extended Cookie Policy
        </a>{" "}
        are available for transparency.
      </p>
      <span className="custom-break"></span>
      <div id="buttonContainer" className="cookie-buttons">
        <button id="acceptButton" className="cookieButton" onClick={handleAccept}>Accept All</button>
        <button id="declineButton" className="cookieButton" onClick={handleDecline}>Decline</button>
      </div>
    </div>
  );
};

export default CookieBanner;