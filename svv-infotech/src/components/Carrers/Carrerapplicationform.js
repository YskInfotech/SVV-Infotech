import React, { useState } from "react";
import "../Carrers/CarrerStyles/carrerapplication.css";
import { IoChevronBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const Carrerapplicationform = () => {
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

  const addExperience = () => {
    setExperienceList([
      ...experienceList,
      { company: "", role: "", joining: "", relieving: "" }
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = { ...formData, experience: experienceList };

    const existingApplications =
      JSON.parse(localStorage.getItem("jobApplications")) || [];

    existingApplications.push(finalData);
    localStorage.setItem("jobApplications", JSON.stringify(existingApplications));

    

    // Redirect after small delay to show toast
    setTimeout(() => {
      navigate("/Student/JobStrategy");
    }, 1800);
  };

  return (
    <div className="jobform-container">
    
      <h3 className="jobform-heading">APPLICATION FORM</h3>

      <form onSubmit={handleSubmit}>
        {/* ---------- PERSONAL INFO ---------- */}
        <div className="jobform-section">
          <h4 className="jobform-section-title">Personal & Contact Information</h4>
          <br/>
          <div className="jobform-grid">
            <label className="jobform-label">First Name
              <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="jobform-input" />
            </label>

            <label className="jobform-label">Last Name
              <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="jobform-input" />
            </label>

            <label className="jobform-label">Phone Number
              <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} required className="jobform-input" />
            </label>

            <label className="jobform-label">Email ID
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="jobform-input" />
            </label>

            <label className="jobform-label">Date of Birth
              <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} required className="jobform-input" />
            </label>

            <label className="jobform-label">Gender
              <select name="gender" value={formData.gender} onChange={handleInputChange} required className="jobform-input">
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </label>

            <label className="jobform-label">Location
              <input type="text" name="location" value={formData.location} onChange={handleInputChange} className="jobform-input" />
            </label>

            <label className="jobform-label">PAN Number
              <input type="text" name="pan" value={formData.pan} onChange={handleInputChange} className="jobform-input" />
            </label>

            <label className="jobform-label">Upload Resume
              <input type="file" name="resume" onChange={handleInputChange} className="jobform-file" />
            </label>

            <label className="jobform-label">Upload Photo
              <input type="file" name="photo" onChange={handleInputChange} className="jobform-file" />
            </label>

            <label className="jobform-label col-full">LinkedIn / Portfolio URL
              <input type="text" name="linkedin" value={formData.linkedin} onChange={handleInputChange} className="jobform-input" />
            </label>
          </div>
        </div>
     <br/>
        {/* ---------- EDUCATION ---------- */}
        <div className="jobform-section">
          <h4 className="jobform-section-title">Educational Information</h4>
          <br/>
          <div className="jobform-grid">
            <label className="jobform-label">Highest Qualification
              <input type="text" name="qualification" value={formData.qualification} onChange={handleInputChange} className="jobform-input" />
            </label>

            <label className="jobform-label">Specialization
              <input type="text" name="specialization" value={formData.specialization} onChange={handleInputChange} className="jobform-input" />
            </label>

            <label className="jobform-label">University
              <input type="text" name="university" value={formData.university} onChange={handleInputChange} className="jobform-input" />
            </label>

            <label className="jobform-label">College
              <input type="text" name="college" value={formData.college} onChange={handleInputChange} className="jobform-input" />
            </label>

            <label className="jobform-label">Year Of Passing
              <input type="text" name="yearOfPassing" value={formData.yearOfPassing} onChange={handleInputChange} className="jobform-input" />
            </label>
          </div>
        </div>
        <br/>
        {/* ---------- JOB DETAILS ---------- */}
        <div className="jobform-section">
          <h4 className="jobform-section-title">Job Details</h4>
          <br/>
          <div className="jobform-grid">
            <label className="jobform-label">Position Applied For
              <input type="text" name="positionApplied" value={formData.positionApplied} onChange={handleInputChange} className="jobform-input" />
            </label>

            <label className="jobform-label">Preferred Work Mode
              <select name="preferredMode" value={formData.preferredMode} onChange={handleInputChange} className="jobform-input">
                <option value="">Select</option>
                <option>Remote</option>
                <option>Hybrid</option>
                <option>Onsite</option>
              </select>
            </label>

            <label className="jobform-label">Key Skills
              <input type="text" name="keySkills" value={formData.keySkills} onChange={handleInputChange} className="jobform-input" />
            </label>

            <label className="jobform-label">Expected Salary
              <input type="text" name="expectedSalary" value={formData.expectedSalary} onChange={handleInputChange} className="jobform-input" />
            </label>

            <label className="jobform-label col-full">Why Hire Me?
              <textarea name="whyHireMe" value={formData.whyHireMe} onChange={handleInputChange} className="jobform-textarea"></textarea>
            </label>
          </div>
        </div>
 <br/>
        {/* ---------- EXPERIENCE ---------- */}
        <div className="jobform-section">
          <h4 className="jobform-section-title">Professional Experience</h4>
          <br/>
          <label className="jobform-label">Level of Experience
            <select value={experienceType} onChange={(e) => setExperienceType(e.target.value)} className="jobform-input">
              <option value="">Select...</option>
              <option value="Fresher">Fresher</option>
              <option value="Experienced">Experienced</option>
            </select>
          </label>
         <br/>
          {experienceType === "Experienced" && (
            <div className="jobform-exp-wrapper">
              {experienceList.map((exp, index) => (
                <div key={index} className="jobform-exp-card">
                  <h5 className="jobform-exp-title">Experience {index + 1}</h5>
                  <div className="jobform-exp-grid">
                    <label className="jobform-label">Previous Company
                      <input type="text" value={exp.company} onChange={(e) => handleExperienceChange(index, "company", e.target.value)} className="jobform-input" />
                    </label>

                    <label className="jobform-label">Previous Role
                      <input type="text" value={exp.role} onChange={(e) => handleExperienceChange(index, "role", e.target.value)} className="jobform-input" />
                    </label>

                    <label className="jobform-label">Joining Date
                      <input type="date" value={exp.joining} onChange={(e) => handleExperienceChange(index, "joining", e.target.value)} className="jobform-input" />
                    </label>

                    <label className="jobform-label">Relieving Date
                      <input type="date" value={exp.relieving} onChange={(e) => handleExperienceChange(index, "relieving", e.target.value)} className="jobform-input" />
                    </label>
                  </div>
                </div>
              ))}
              <button type="button" className="jobform-add-btn" onClick={addExperience}>+ Add Experience</button>
            </div>
          )}
        </div>

        {/* ---------- CAPTCHA + SUBMIT ---------- */}
        <div className="jobform-captcha-row">
          <label className="jobform-captcha">2 × 9 8 | 4</label>
          
          <input type="text" name="captcha" value={formData.captcha} onChange={handleInputChange} className="jobform-input small  mt-0" placeholder="Enter Captcha" />
          <button type="submit" className="jobform-submit-btn">Submit</button>
          <button className="carappliback" onClick={() => navigate("/carrerroutes/carrerapply")}>  <IoChevronBackSharp/>Back</button>
        
        </div>
      </form>
      
    </div>
  );
};

export default Carrerapplicationform;