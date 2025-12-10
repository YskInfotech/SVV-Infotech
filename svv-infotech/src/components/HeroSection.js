import React from 'react';
import '../Styles/HeroSection.css';
import { useNavigate, useLocation } from "react-router-dom";
import backgroundVideo from '../assets/bg-video.mp4'; 

function HeroSection() {
  const navigate = useNavigate();
  const location = useLocation();

  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  const goToAbout = () => {
    if (location.pathname === "/") {
      scrollToSection("about");
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToSection("about");
      }, 100);
    }
  };


  const goToServices = () => {
    if (location.pathname === "/") {
      scrollToSection("services");
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToSection("services");
      }, 100);
    }
  };

  return (
    <section className="hero-container" id="home">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <div className="hero-content text-center">
          <h1 className="hero-title">Empowering Digital Solutions</h1>
          <p className="hero-subtitle">
            Empower your business with technology that works for you — efficient, intelligent, 
            and built to drive success in the digital era.
          </p>

          <div className="hero-buttons">
            <button className="btn-learn" onClick={goToAbout}>
              Know More
            </button>

            <button className="btn-join" onClick={goToServices}>
              JOIN US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
