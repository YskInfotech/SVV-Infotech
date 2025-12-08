import React, { useState } from "react";
import "../../Styles/AddOnJobForm.css";
import { useNavigate } from "react-router-dom";

const AddonJob = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    jobTitle: "",
    department: "",
    workMode: "",
    roles: "",
    skills: [],
    experienceMin: "",
    experienceMax: "",
    qualification: "",
  });

  const skillOptions = [
    "Python", "AWS",  
     "SQL", "HTML", "CSS", "JavaScript", "DevOps",
    "Problem Solving", "Adaptability", 
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillClick = (skill) => {
    setFormData((prev) => {
      const exists = prev.skills.includes(skill);
      return {
        ...prev,
        skills: exists
          ? prev.skills.filter((s) => s !== skill)
          : [...prev.skills, skill],
      };
    });
  };

  const handleNext = () => {
    localStorage.setItem("jobFormData", JSON.stringify(formData));
    navigate("/dashboard/AddonJobs");
  };

  return (
    <div className="addonjobsvv-container">
      <h2 className="addonjobsvv-title">
        ADD ON JOB 
      </h2>

      <div className="addonjobsvv-form">
        <div className="addonjobsvv-field">
          <label>Job Title*</label>
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={handleChange}
          />
        </div>

        <div className="addonjobsvv-field">
          <label>Department*</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option value="IT">IT</option>
            <option value="Non-IT">Non IT</option>
          </select>
        </div>

        <div className="addonjobsvv-field">
          <label>Work Mode*</label>
          <select
            name="workMode"
            value={formData.workMode}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option value="Onsite">Onsite</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        <div className="addonjobsvv-field">
          <label>Roles & Responsibilities*</label>
          <textarea
            name="roles"
            placeholder="Enter job responsibilities..."
            value={formData.roles}
            onChange={handleChange}
          ></textarea>
        </div>

       <div className="addonjobsvv-field">
          <label>Job Summary*</label>
          <textarea
            name="roles"
            placeholder="Enter job summary..."
            value={formData.roles}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="addonjobsvv-field">
          <label>Required Skills*</label>
          <div className="addonjobsvv-skillbox">
            {skillOptions.map((skill) => (
              <span
                key={skill}
                className={`addonjobsvv-skilltag ${
                  formData.skills.includes(skill) ? "selected" : ""
                }`}
                onClick={() => handleSkillClick(skill)}
              >
                {skill} +
              </span>
            ))}
          </div>
        </div>

        <div className="addonjobsvv-expbox">
          <label>Experience*</label>
          <div className="addonjobsvv-exp">
            <select
              name="experienceMin"
              value={formData.experienceMin}
              onChange={handleChange}
            >
              <option value="">Minimum</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>
            <select
              name="experienceMax"
              value={formData.experienceMax}
              onChange={handleChange}
            >
              <option value="">Maximum</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>
          </div>
        </div>

        <div className="addonjobsvv-field">
          <label>Qualification Required*</label>
          <input
            type="text"
            name="qualification"
            placeholder="Qualifications"
            value={formData.qualification}
            onChange={handleChange}
          />
        </div>

        <div className="addonjobsvv-btnbox">
          <button className="addonjobsvv-nextbtn" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddonJob;
