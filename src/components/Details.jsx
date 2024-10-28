import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import AboutMe from "./AboutMe";
import DownloadResume from "./DownloadResume";

export default function Details() {
  const [isDark] = useTheme();
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className={`landing ${isDark ? "dark" : ""}`}>
      <div className={`information-container ${isDark ? "dark" : ""}`}>
        <h1>Ankit Kumar Mitra</h1>
        <p>Full Stack Web Developer</p>
        <div className="buttonContainer">
          <button className="info-btn" onClick={togglePopup}>
            About Me
          </button>
          <DownloadResume />
        </div>
      </div>
      <img src="/lander_img2.png" className="landing-img" alt="Landing" />

      {showPopup && <AboutMe onClose={togglePopup} />}
    </div>
  );
}
