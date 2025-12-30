import React, { useEffect, useState } from "react";
import "../Carrers/CarrerStyles/carrerhome.css";
import { IoIosGlobe } from "react-icons/io";
import { BsBriefcase } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import carrerhome1 from "../../assets/carreerhome1.png";
import carrerhome2 from "../../assets/carrerhome2.png";
import carrerhome3 from "../../assets/carreerhome3.png";
import { useNavigate } from "react-router-dom";

function CarrerHome() {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);
  const [experience, setExperience] = useState("");
  const [department, setDepartment] = useState("");

  // ✅ LOAD JOBS FROM ADMIN (localStorage)
  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(storedJobs);
  }, []);

  // ✅ FILTER LOGIC
  const filteredJobs = jobs.filter(job => {
    const matchExp =
      !experience ||
      `${job.experienceMin}-${job.experienceMax}`.includes(experience);

    const matchDept =
      !department ||
      job.department?.toLowerCase().includes(department.toLowerCase());

    return matchExp && matchDept;
  });

  return (
    <>
      {/* Hero Banner */}
      <div className="career-banner-svv mt-5">
        <h1>Find your Dream job</h1>
        <p>Unlocking opportunities to step into a successful career ahead</p>
        <button
          className="view-ope"
          onClick={() =>
            document
              .getElementById("job-list")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          View Openings
        </button>
        <button
          className="apply-btn"
          onClick={() =>
            document
              .getElementById("job-list")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Apply Now
        </button>
      </div>

      {/* LIFE @ SVV */}
      <div className="life-section">
        <h2>LIFE @ SVV INFOTECH</h2>
        <p className="carrerhomep">
          We grow together — because teamwork always innovates.
        </p>

        <div className="life-images">
          <img src={carrerhome1} alt="Life" />
          <img src={carrerhome2} alt="Life" />
          <img src={carrerhome3} alt="Life" />
        </div>
      </div>

      {/* JOB LISTINGS */}
      <div className="job-section" id="job-list">
        <h3 className="fw-bold">CURRENT OPENINGS</h3>
        <h2>Your Next Career Milestone Starts Here!</h2>

        {/* SEARCH */}
        <div className="search-row">
          <input
            type="text"
            placeholder="Search by Experience (ex: 1-3)"
            value={experience}
            onChange={e => setExperience(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search by Department"
            value={department}
            onChange={e => setDepartment(e.target.value)}
          />
          <button className="search-btn">Search</button>
        </div>

        {/* JOB CARDS */}
        <div className="job-list">
          {filteredJobs.length === 0 && (
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              No jobs available right now.
            </p>
          )}

          {filteredJobs.map(job => (
            <div className="job-card" key={job.id}>
              <span className="job-title">{job.jobTitle}</span>
               <div className="small">
                          <span className="me-3"><IoIosGlobe /> {job.experienceMin}-{job.experienceMax} Years</span>
                          <span className="me-3"><BsBriefcase /> {job.department}</span>
                          <span><SlLocationPin /> {job.jobLocation}</span>
                        </div>
              <span className="job-type">
                Full time | {job.jobLocation}
              </span>

              <button
  className="view-btn"
  onClick={() => navigate(`/carrerroutes/carrerapply/${job.id}`)}
>
  View Job
</button>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CarrerHome;
