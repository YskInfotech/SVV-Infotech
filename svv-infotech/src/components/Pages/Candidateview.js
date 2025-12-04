import React, { useState } from "react";
import "../../Styles/Candidatesview.css";
import { useNavigate } from "react-router-dom";
import { RiShareForwardLine,RiDownloadFill } from "react-icons/ri";
import { MdOutlineBlock,MdOutlineDeleteOutline } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";


const Candidateview = () => {
  const navigate = useNavigate();

  const [experienceType, setExperienceType] = useState("");
  const [experienceList, setExperienceList] = useState([
    { company: "", role: "", joining: "", relieving: "" }
  ]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    dob: "",
    gender: "",
    location: "",
    pan: "",
    resume: null,
    photo: null,
    linkedin: "",
    qualification: "",
    specialization: "",
    university: "",
    college: "",
    yearOfPassing: "",
    positionApplied: "",
    preferredMode: "",
    keySkills: "",
    expectedSalary: "",
    whyHireMe: "",
    captcha: ""
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleExperienceChange = (index, field, value) => {
    const updated = [...experienceList];
    updated[index][field] = value;
    setExperienceList(updated);
  };

 

 

  return (
    <div className="candidate-container">
        <h3 className="candidate-heading">Candidate Name:-</h3>

         <div className="candit-filter-row">
        
                  <button className="candit-shortlist-btn" >
                     <RiShareForwardLine className="icon-candit"/> Shortlist
                    </button>
                    <button className="candit-reject-btn" >
                      <MdOutlineBlock className="icon-candit" />Reject
                    </button>
                    <button className="candit-email-btn" >
                     <HiOutlineMail className="icon-candit"/> Email
                    </button>
                    <button className="candit-forward-btn">
                     <RiShareForwardLine className="icon-candit" /> Forward
                    </button>
        
                    <button className="candit-download-btn" >
                      <RiDownloadFill className="icon-candit"/>Download
                    </button>
        
                    <button className="candit-delete-btn" >
                     <MdOutlineDeleteOutline className="icon-candit"/> Delete
                    </button>
                  </div>

      <form >
        {/* ---------- PERSONAL INFO ---------- */}
        <div className="candidate-section">
          <h4 className="candidate-section-title">Personal & Contact Information</h4>
          <br/>
          <div className="candidate-grid">
            <label className="candidate-label">First Name
              <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="candidate-input" />
            </label>

            <label className="candidate-label">Last Name
              <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="candidate-input" />
            </label>

            <label className="candidate-label">Phone Number
              <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} required className="candidate-input" />
            </label>

            <label className="candidate-label">Email ID
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="candidate-input" />
            </label>

            <label className="candidate-label">Date of Birth
              <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} required className="candidate-input" />
            </label>

            <label className="candidate-label">Gender
              <select name="gender" value={formData.gender} onChange={handleInputChange} required className="candidate-input">
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </label>

            <label className="candidate-label">Location
              <input type="text" name="location" value={formData.location} onChange={handleInputChange} className="candidate-input" />
            </label>

            <label className="candidate-label">PAN Number
              <input type="text" name="pan" value={formData.pan} onChange={handleInputChange} className="candidate-input" />
            </label>

            <label className="candidate-label">Upload Resume
              <input type="file" name="resume" onChange={handleInputChange} className="candidate-file" />
            </label>

            <label className="candidate-label">Upload Photo
              <input type="file" name="photo" onChange={handleInputChange} className="candidate-file" />
            </label>

            <label className="candidate-label col-full">LinkedIn / Portfolio URL
              <input type="text" name="linkedin" value={formData.linkedin} onChange={handleInputChange} className="candidate-input" />
            </label>
          </div>
        </div>
     <br/>
        {/* ---------- EDUCATION ---------- */}
        <div className="candidate-section">
          <h4 className="candidate-section-title">Educational Information</h4>
          <br/>
          <div className="candidate-grid">
            <label className="candidate-label">Highest Qualification
              <input type="text" name="qualification" value={formData.qualification} onChange={handleInputChange} className="candidate-input" />
            </label>

            <label className="candidate-label">Specialization
              <input type="text" name="specialization" value={formData.specialization} onChange={handleInputChange} className="candidate-input" />
            </label>

            <label className="candidate-label">University
              <input type="text" name="university" value={formData.university} onChange={handleInputChange} className="candidate-input" />
            </label>

            <label className="candidate-label">College
              <input type="text" name="college" value={formData.college} onChange={handleInputChange} className="candidate-input" />
            </label>

            <label className="candidate-label">Year Of Passing
              <input type="text" name="yearOfPassing" value={formData.yearOfPassing} onChange={handleInputChange} className="candidate-input" />
            </label>
          </div>
        </div>
        <br/>
        {/* ---------- JOB DETAILS ---------- */}
        <div className="candidate-section">
          <h4 className="jobform-section-title">Job Details</h4>
          <br/>
          <div className="candidate-grid">
            <label className="candidate-label">Position Applied For
              <input type="text" name="positionApplied" value={formData.positionApplied} onChange={handleInputChange} className="candidate-input" />
            </label>

            <label className="candidate-label">Preferred Work Mode
              <select name="preferredMode" value={formData.preferredMode} onChange={handleInputChange} className="candidate-input">
                <option value="">Select</option>
                <option>Remote</option>
                <option>Hybrid</option>
                <option>Onsite</option>
              </select>
            </label>

            <label className="candidate-label">Key Skills
              <input type="text" name="keySkills" value={formData.keySkills} onChange={handleInputChange} className="candidate-input" />
            </label>

            <label className="candidate-label">Expected Salary
              <input type="text" name="expectedSalary" value={formData.expectedSalary} onChange={handleInputChange} className="candidate-input" />
            </label>

            <label className="candidate-label col-full">Why Hire Me?
              <textarea name="whyHireMe" value={formData.whyHireMe} onChange={handleInputChange} className="candidate-textarea"></textarea>
            </label>
          </div>
        </div>
 <br/>
        {/* ---------- EXPERIENCE ---------- */}
        <div className="candidate-section">
          <h4 className="candidate-section-title">Professional Experience</h4>
          <br/>
          <label className="candidate-label">Level of Experience
            <select value={experienceType} onChange={(e) => setExperienceType(e.target.value)} className="candidate-input">
              <option value="">Select...</option>
              <option value="Fresher">Fresher</option>
              <option value="Experienced">Experienced</option>
            </select>
          </label>
         <br/>
          {experienceType === "Experienced" && (
            <div className="candidate-exp-wrapper">
              {experienceList.map((exp, index) => (
                <div key={index} className="candidate-exp-card">
                  <h5 className="candidate-exp-title">Experience {index + 1}</h5>
                  <div className="candidate-exp-grid">
                    <label className="candidate-label">Previous Company
                      <input type="text" value={exp.company} onChange={(e) => handleExperienceChange(index, "company", e.target.value)} className="candidate-input" />
                    </label>

                    <label className="candidate-label">Previous Role
                      <input type="text" value={exp.role} onChange={(e) => handleExperienceChange(index, "role", e.target.value)} className="candidate-input" />
                    </label>

                    <label className="candidate-label">Joining Date
                      <input type="date" value={exp.joining} onChange={(e) => handleExperienceChange(index, "joining", e.target.value)} className="candidate-input" />
                    </label>

                    <label className="candidate-label">Relieving Date
                      <input type="date" value={exp.relieving} onChange={(e) => handleExperienceChange(index, "relieving", e.target.value)} className="candidate-input" />
                    </label>
                  </div>
                </div>
              ))}
              
            </div>
          )}
        </div>
      </form>
      
    </div>
  );
};

export default Candidateview;