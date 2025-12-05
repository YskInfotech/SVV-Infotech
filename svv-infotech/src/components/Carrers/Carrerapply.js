
import React from "react";
import "../Carrers/CarrerStyles/careerapply.css";
import { useNavigate } from "react-router-dom";

function CarrerApply() {
    const navigate = useNavigate();
  return (
    <div className="jobdetail-page">
      {/* Optional small page title */}
      <h2 className="jobdetail-page-title">CAREERS</h2>

      <div className="jobdetail-card">
        {/* Blue header */}
        <div className="jobdetail-header">
          <h3>Front-End Developer</h3>
          <div className="jobdetail-meta">
            <span>IT</span>
            <span>3 – 5 years</span>
            <span>Hyderabad, Telangana</span>
          </div>
        </div>

        {/* Content */}
        <div className="jobdetail-body">
          

          <section className="jobdetail-section">
            <h4>Roles and Responsibilities</h4>
            <ul>
              <li>Develop responsive web pages using React.js, HTML, CSS & JavaScript</li>
              <li>Integrate REST APIs & ensure smooth UI/UX</li>
              <li>Optimize website performance and loading speed</li>
              
            </ul>
          </section>
              <section className="jobdetail-section">
            <h4>Required Skills</h4>
            <ul>
              <li>HTML5, CSS3, JavaScript, React.js, Redux, Tailwind CSS, Bootstrap, Git, REST API</li>

            </ul>
          </section>
          <section className="jobdetail-section">
            <h4>Qualifications Required</h4>
            <ul>
               
              <li>B.Tech / MCA / Any Graduate in Computer Science</li>
              
            </ul>
          </section>
          <section className="jobdetail-section">
            <h4>Salary Range</h4>
            <ul>
               
              <li>₹25,000 – ₹60,000</li>
              
            </ul>
          </section>
          <section className="jobdetail-section">
            <h4>Perks & Benefits</h4>
            <ul>
               
              <li>Health Insurance, Work From Home Option, Paid Leaves, Performance Bonus</li>
              
            </ul>
          </section>
          <section className="jobdetail-section">
            <h4>Job Location/Area</h4>
            <ul>
               
              <li>Madhapur, Hyderabad</li>
              
            </ul>
          </section>
          <section className="jobdetail-section">
            <h4>Job Locality</h4>
            <ul>
               
              <li>Hyderabad Metro Area</li>
              
            </ul>
          </section>
          <section className="jobdetail-section">
            <h4>Number of Openings</h4>
            <ul>
               
              <li>04</li>
              
            </ul>
          </section>
          <section className="jobdetail-section">
            <h4>Application Deadline</h4>
            <ul>
               
              <li>15-Dec-2025</li>
              
            </ul>
          </section>
          <section className="jobdetail-section">
            <h4>Job Summary</h4>
            <ul>
               
              <li>We are looking for a skilled Frontend Developer who can create responsive, fast-loading user interfaces and work closely with backend developers to deliver high-quality web applications.</li>
              
            </ul>
          </section>

          

          <div className="jobdetail-apply-wrap">
            <button className="jobdetail-back-btn" onClick={() => navigate("/carrerlayout")}>Back</button>
            <button className="jobdetail-apply-btn" onClick={() => navigate("/carrerroutes/carrerapplicationform")}>Apply</button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarrerApply;
