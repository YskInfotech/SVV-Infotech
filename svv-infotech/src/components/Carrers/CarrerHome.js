import React from "react";
import "../Carrers/CarrerStyles/carrerhome.css"
import carrerhome1 from "../../assets/carreerhome1.png";
import carrerhome2 from "../../assets/carrerhome2.png";
import carrerhome3 from "../../assets/carreerhome3.png";
function CarrerHome() {
  return (
    <div className="careers-container">

      {/* Hero Banner */}
      <div className="career-banner">
        <h1>Find your Dream job</h1>
        <p>Unlocking opportunities to step into a successful career ahead</p>
        <button className="apply-btn">Apply Now</button>
      </div>

      {/* LIFE @ SVV Section */}
      <div className="life-section">
        <h2>LIFE @ SVV INFOTECH</h2>
        <p>We grow together — because teamwork always innovates.</p>

        <div className="life-images">
          <img src={carrerhome1} alt="Life" />
          <img src={carrerhome2} alt="Life" />
          <img src={carrerhome3} alt="Life" />
        </div>
      </div>

      {/* Job Listings */}
      <div className="job-section">
        <h2>Your Next Career Milestone Starts Here!</h2>

        {/* Search Row */}
        <div className="search-row">
          <input type="text" placeholder="Search by Experience" />
          <input type="text" placeholder="Search by Department" />
          <button className="search-btn">Search</button>
        </div>

        {/* Job Table */}
        <div className="job-list">
          {[
            "Front-End Developer",
            "Marketing Executive",
            "UI/UX Developer",
            "Fullstack Developer",
            "Project Manager",
            "HR Manager",
          ].map((role, i) => (
            <div className="job-card" key={i}>
              <span className="job-title">{role}</span>
              <span className="job-type">Full time | Hyderabad, Telangana</span>
              <button className="view-btn">View Job</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarrerHome;
