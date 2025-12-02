// src/components/ItServicesvv.jsx
import React from "react";
import "../Services/Serstyles/itservicesvv.css"
import appimg from "../../assets/appimg.png";
import dataanalyst from "../../assets/dataanalyst.png";
import erp from "../../assets/erp.png";
import qa from "../../assets/qa.png";
import deploy from "../../assets/deployment.png";
import version from "../../assets/version.png";
import itcons from "../../assets/itconsulting.png";
import manimg from "../../assets/managed.png";
import cyberimg from "../../assets/cyber.png";

import { useNavigate } from "react-router-dom";

const Itservices = () => {
  const navigate = useNavigate();
  

  return (


    <>
      {/* 🔹 BANNER SECTION */}
      <div className="itservicesvv-banner mt-5">
        <h1>Find your Dream Job</h1>
        <p>Unlocking opportunities to step into a successful career ahead</p>
        
      </div>
       
    <section className="itservicesvv">
        
      <div className="itservicesvv-inner">
        <p className="itservicesvv-kicker">
          Empowering business with technology, talent, and transformation
        </p>
        <h2 className="itservicesvv-title">OUR SERVICES</h2>

        {/* Top tab labels (for look only – real tab handled in parent) */}
        <div className="itservicesvv-tabs">
          <button className="itservicesvv-tab itservicesvv-tab-active" onClick={() => navigate("/itservices")}>
            IT SERVICES
          </button>
          <button className="itservicesvv-tab itservicesvv-tab-muted" onClick={() => navigate("/staffing")}>
            STAFFING SOLUTIONS
          </button>
        </div>

        {/* PRODUCT BASED SOLUTIONS */}
        <div className="itservicesvv-section-heading">
          <span className="itservicesvv-section-line" />
          <span className="itservicesvv-section-text">
            PRODUCT - BASED SOLUTIONS
          </span>
          <span className="itservicesvv-section-line" />
        </div>

        <div className="itservicesvv-grid">
          <div className="itservicesvv-card">
            <img src={appimg} alt="App Development" className="itservicesvv-card-icon" />
            <h3 className="itservicesvv-card-title">App Development</h3>
            <p className="itservicesvv-card-text">
              Design, build, and maintain scalable web and mobile applications
              tailored to your business goals.
            </p>
          </div>
          <div className="itservicesvv-card">
            <img src={erp} alt="App Development" className="itservicesvv-card-icon" />
            <h3 className="itservicesvv-card-title">ERP / CRM Management</h3>
            <p className="itservicesvv-card-text">
              Optimize operations with customized ERP and CRM solutions that
              centralize data and workflows.
            </p>
          </div>
          <div className="itservicesvv-card">
            <img src={qa} alt="App Development" className="itservicesvv-card-icon" />
            <h3 className="itservicesvv-card-title">QA &amp; Testing</h3>
            <p className="itservicesvv-card-text">
              End-to-end manual and automated testing to ensure performance,
              reliability, and security.
            </p>
          </div>
          <div className="itservicesvv-card">
            <img src={deploy} alt="App Development" className="itservicesvv-card-icon" />
            <h3 className="itservicesvv-card-title">Deployment &amp; Hosting</h3>
            <p className="itservicesvv-card-text">
              Secure, high-availability deployment and infrastructure management
              across cloud and on-prem.
            </p>
          </div>
          <div className="itservicesvv-card">
            <img src={version} alt="App Development" className="itservicesvv-card-icon" />
            <h3 className="itservicesvv-card-title">Version Control</h3>
            <p className="itservicesvv-card-text">
              Robust source-code management, CI/CD pipelines, and release
              governance.
            </p>
          </div>
        </div>

        <div className="itservicesvv-cta-row">
          <button className="itservicesvv-cta-btn">Explore More +</button>
        </div>

        {/* SERVICE BASED SOLUTIONS */}
        <div className="itservicesvv-section-heading itservicesvv-section-heading-bottom">
          <span className="itservicesvv-section-line" />
          <span className="itservicesvv-section-text">
            SERVICE - BASED SOLUTIONS
          </span>
          <span className="itservicesvv-section-line" />
        </div>

        <div className="itservicesvv-grid">
          <div className="itservicesvv-card">
            <img src={appimg} alt="App Development" className="itservicesvv-card-icon" />
            <h3 className="itservicesvv-card-title">
              Cloud Services &amp; Management
            </h3>
            <p className="itservicesvv-card-text">
              Design, migrate, and manage workloads on AWS, Azure, and Google
              Cloud.
            </p>
          </div>
          <div className="itservicesvv-card">
            <img src={itcons} alt="App Development" className="itservicesvv-card-icon" />
            
            <h3 className="itservicesvv-card-title">
              IT Consulting &amp; Strategy
            </h3>
            <p className="itservicesvv-card-text">
              Strategic technology roadmaps aligned with your business
              objectives and growth plans.
            </p>
          </div>
          <div className="itservicesvv-card">
            <img src={cyberimg} alt="App Development" className="itservicesvv-card-icon" />
            <h3 className="itservicesvv-card-title">
              Cyber Security &amp; Compliance
            </h3>
            <p className="itservicesvv-card-text">
              Proactive security monitoring, risk assessment, and compliance
              management for your digital assets.
            </p>
          </div>
          <div className="itservicesvv-card">
            <img src={manimg} alt="App Development" className="itservicesvv-card-icon" />
            <h3 className="itservicesvv-card-title">Managed Services</h3>
            <p className="itservicesvv-card-text">
              24/7 monitoring, maintenance, and support for critical systems and
              applications.
            </p>
          </div>
          <div className="itservicesvv-card">
            <img src={dataanalyst} alt="App Development" className="itservicesvv-card-icon" />
            <h3 className="itservicesvv-card-title">Data Analytics &amp; BI</h3>
            <p className="itservicesvv-card-text">
              Transform raw data into actionable insights with dashboards and
              advanced analytics.
            </p>
          </div>
        </div>

        <div className="itservicesvv-cta-row">
          <button className="itservicesvv-cta-btn">Explore More +</button>
        </div>
      </div>
    </section>
     </>
  );
};

export default Itservices;
