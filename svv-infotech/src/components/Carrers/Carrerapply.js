import React, { useEffect, useState } from "react";
import "../Carrers/CarrerStyles/careerapply.css";
import { useNavigate, useParams } from "react-router-dom";

function CarrerApply() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [job, setJob] = useState(null);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];

    console.log("URL id:", id);
    console.log("Stored jobs:", storedJobs);

    const foundJob = storedJobs.find(
      j => String(j.id) === String(id)
    );

    setJob(foundJob || null);
  }, [id]);

  if (!job) {
    return (
      <h3 className="text-center mt-5">
        Job Not Found
      </h3>
    );
  }

  return (
    <div className="jobdetail-page">
      <h2 className="jobdetail-page-title">CAREERS</h2>

      <div className="jobdetail-card">
        {/* HEADER */}
        <div className="jobdetail-header">
          <h3>{job.jobTitle}</h3>
          <div className="jobdetail-meta">
            <span>{job.department}</span>
            <span>{job.experienceMin} – {job.experienceMax} years</span>
          </div>
        </div>

        {/* BODY */}
        <div className="jobdetail-body">

          <section className="jobdetail-section">
            <h4>Roles and Responsibilities</h4>
            <ul>
             <li>{job.rolesResponsibilities}</li>

            </ul>
          </section>

          <section className="jobdetail-section">
            <h4>Required Skills</h4>
            <ul>
              <li>{job.requiredSkills}</li>

            </ul>
          </section>

          <section className="jobdetail-section">
            <h4>Qualifications Required</h4>
            <ul>
              <li>{job.qualification}</li>
            </ul>
          </section>

          <section className="jobdetail-section">
            <h4>Salary Range</h4>
            <ul>
              <li>₹{job.salaryMin} – ₹{job.salaryMax}</li>
            </ul>
          </section>

          
          <section className="jobdetail-section">
            <h4>Job Location</h4>
            <ul>
              <li>{job.jobLocation}</li>
            </ul>
          </section>

          <section className="jobdetail-section">
            <h4>Work Mode</h4>
            <ul>
              <li>{job.workMode}</li>
            </ul>
          </section>

          <section className="jobdetail-section">
            <h4>Number of Openings</h4>
            <ul>
              <li>{job.numOpenings}</li>
            </ul>
          </section>

          <section className="jobdetail-section">
            <h4>Application Deadline</h4>
            <ul>
             <li>{job.deadline || job.applicationDeadline || "N/A"}</li>

            </ul>
          </section>

          <section className="jobdetail-section">
            <h4>Job Summary</h4>
            <ul>
             <li>{job.jobsummary || "Not available"}</li>

            </ul>
          </section>

          {/* BUTTONS */}
          <div className="jobdetail-apply-wrap">
            <button
              className="jobdetail-back-btn"
              onClick={() => navigate("/carrerlayout")}
            >
              Back
            </button>

            <button
              className="jobdetail-apply-btn"
              onClick={() =>
                navigate(`/carrerroutes/carrerapplicationform/${id}`, {
                  state: { job }
                })
              }
            >
              Apply
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CarrerApply;
