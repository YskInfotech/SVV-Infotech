// src/components/Staffingsvv.jsx
import React from "react";
import "../Services/Serstyles/staffingsvv.css"
import it from "../../assets/it.png";
import nonit from "../../assets/non-it.png";
import Rpo from "../../assets/Rpo.png";
import Bpo from "../../assets/bpo.png";
import campous from "../../assets/campous.png";

import { useNavigate } from "react-router-dom";

const Staffing = () => {
    const navigate = useNavigate();
  return (
    <>
     <div className="staffingsvv-banner mt-5">
        <h1>Find your Dream Job</h1>
        <p>Unlocking opportunities to step into a successful career ahead</p>
        
      </div>
    <section className="staffingsvv">
      <div className="staffingsvv-inner">
        <p className="staffingsvv-kicker">
          Scalable staffing solutions for agile, future-ready teams
        </p>
        <h2 className="staffingsvv-title">OUR SERVICES</h2>

        <div className="staffingsvv-tabs">
          <button className="staffingsvv-tab staffingsvv-tab-muted"
          onClick={() => navigate("/itservices")}>
            IT SERVICES
          </button>
          <button className="staffingsvv-tab staffingsvv-tab-active">
            STAFFING SOLUTIONS
          </button>
        </div>

        <div className="staffingsvv-section-heading">
          <span className="staffingsvv-section-line" />
          <span className="staffingsvv-section-text">
            STAFFING - BASED SOLUTIONS
          </span>
          <span className="staffingsvv-section-line" />
        </div>

        <div className="staffingsvv-grid">
          <div className="staffingsvv-card">
            <img src={it} alt="App Development" className="itservicesvv-card-icon" />
            <h3 className="staffingsvv-card-title">IT Staffing</h3>
            <p className="staffingsvv-card-text">
              Connecting your team with top-tier developers, architects, and engineers for project-specific needs.
            </p>
          </div>
          <div className="staffingsvv-card">
            <img src={nonit} alt="App Development" className="itservicesvv-card-icon" />
            <h3 className="staffingsvv-card-title">Non-IT Staffing</h3>
            <p className="staffingsvv-card-text">
              Sourcing skilled professionals across finance, operations, HR, and marketing sectors.
            </p>
          </div>
          <div className="staffingsvv-card">
            <img src={Rpo} alt="App Development" className="itservicesvv-card-icon" />
            <h3 className="staffingsvv-card-title">
             Recruitment Process
Outsourcing (RPO)
            </h3>
            <p className="staffingsvv-card-text">
             End-to-end talent acquisition management to handle high-volume hiring efficiently.
            </p>
          </div>
          <div className="staffingsvv-card">
            <img src={campous} alt="App Development" className="itservicesvv-card-icon" />
            <h3 className="staffingsvv-card-title">Campus Hiring</h3>
            <p className="staffingsvv-card-text">
             Bridging the gap between fresh academic talent and your corporate entry-level requirements.
            </p>
          </div>
          <div className="staffingsvv-card">
            <img src={Bpo } alt="App Development" className="itservicesvv-card-icon" />
            <h3 className="staffingsvv-card-title">Administrative Support (BPO)</h3>
            <p className="staffingsvv-card-text">
              Efficient back-office solutions to manage administrative workflows and operational tasks.
            </p>
          </div>
        </div>

        <div className="staffingsvv-cta-row">
          <button className="staffingsvv-cta-btn">Explore More +</button>
        </div>
      </div>
    </section>
    </>
  );
};

export default Staffing;
