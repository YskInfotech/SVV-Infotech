import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// =====================================================
//                APPLICATION FORM PAGE
// =====================================================

function Carrerapplicationform() {
  const { id } = useParams();
  const navigate = useNavigate();

  /* ================= JOB DATA ================= */
  const [job, setJob] = useState(null);

  /* ================= EXPERIENCE ================= */
  const [experienceLevel, setExperienceLevel] = useState("Fresher");
  const [experienceBlocks, setExperienceBlocks] = useState([]);

  /* ================= EDUCATION ================= */
  const [educationBlocks, setEducationBlocks] = useState([{ id: 1 }]);

  /* ================= FORM ================= */
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    location: "",
    portfolio: "",
    keySkills: "",
    expectedSalary: "",
    whyHireMe: "",
    preferredMode: "",
  });

  /* ================= LOAD JOB ================= */
  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    const foundJob = storedJobs.find(
      j => String(j.id) === String(id)
    );
    setJob(foundJob || null);
  }, [id]);

  if (!job) {
    return <h3 className="text-center mt-5">Job Not Found</h3>;
  }

  const jobTitle = job.jobTitle;

  /* ================= INPUT ================= */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = (e) => {
    e.preventDefault();

    /* -------- EDUCATION DATA -------- */
    const educationData = educationBlocks.map((_, i) => ({
      qualification:
        document.getElementsByName("education_qualification")[i]?.value || "",
      specialization:
        document.getElementsByName("education_specialization")[i]?.value || "",
      university:
        document.getElementsByName("education_university")[i]?.value || "",
      college:
        document.getElementsByName("education_college")[i]?.value || "",
      passingYear:
        document.getElementsByName("education_year")[i]?.value || "",
      percentage:
        document.getElementsByName("education_percentage")[i]?.value || "",
    }));

    /* -------- EXPERIENCE DATA -------- */
    const experienceData = experienceBlocks.map((_, i) => ({
      companyName:
        document.getElementsByName("exp_company")[i]?.value || "",
      role:
        document.getElementsByName("exp_role")[i]?.value || "",
      joiningDate:
        document.getElementsByName("exp_joining")[i]?.value || "",
      relievingDate:
        document.getElementsByName("exp_relieving")[i]?.value || "",
    }));

    /* -------- FINAL CANDIDATE -------- */
    const newCandidate = {
      id: Date.now(),
      jobId: job.id,
      jobTitle: jobTitle,
      status: "applied",
      ...form,
      experienceLevel,
      education: educationData,
      experience:
        experienceLevel === "Experienced" ? experienceData : [],
      appliedOn: new Date().toISOString(),
    };

    /* -------- SAVE CANDIDATE -------- */
    const existingCandidates =
      JSON.parse(localStorage.getItem("candidates")) || [];

    existingCandidates.push(newCandidate);
    localStorage.setItem(
      "candidates",
      JSON.stringify(existingCandidates)
    );

    /* -------- UPDATE JOB RESPONSE COUNT -------- */
    const allJobs = JSON.parse(localStorage.getItem("jobs")) || [];

    const updatedJobs = allJobs.map(jobItem => {
      if (String(jobItem.id) === String(id)) {
        return {
          ...jobItem,
          totalResponses: (jobItem.totalResponses || 0) + 1,
        };
      }
      return jobItem;
    });

    localStorage.setItem("jobs", JSON.stringify(updatedJobs));

    alert("Application submitted successfully!");
    navigate("/carrerlayout");
  };

  /* ================= EXPERIENCE ================= */
  const handleExperienceChange = (e) => {
    const value = e.target.value;
    setExperienceLevel(value);

    if (value === "Fresher") {
      setExperienceBlocks([]);
    } else {
      setExperienceBlocks([{ id: 1 }]);
    }
  };

  const addExperienceBlock = () => {
    setExperienceBlocks(prev => [...prev, { id: prev.length + 1 }]);
  };

  const deleteExperienceBlock = (id) => {
    if (experienceBlocks.length > 1) {
      setExperienceBlocks(prev => prev.filter(b => b.id !== id));
    }
  };

  /* ================= EDUCATION ================= */
  const addEducationBlock = () => {
    setEducationBlocks(prev => [...prev, { id: prev.length + 1 }]);
  };

  const deleteEducationBlock = (id) => {
    if (educationBlocks.length > 1) {
      setEducationBlocks(prev => prev.filter(b => b.id !== id));
    }
  };

  return (
    <div className="py-5" style={{ backgroundColor: "#e6f0ff" }}>
      <div className="container bg-white border rounded p-4 shadow mt-4">

        <h4
          className="text-center text-white py-2 mb-4"
          style={{ background: "#1f4e9e" }}
        >
          APPLICATION FORM – {jobTitle}
        </h4>

        <form onSubmit={handleSubmit}>

          {/* PERSONAL INFO */}
          <SectionTitle label="Personal Information" />

          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <FormGroup label="First Name" name="firstName" required onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <FormGroup label="Last Name" name="lastName" required onChange={handleChange} />
            </div>
            <div className="col-md-4">
              <FormGroup label="Phone" name="phone" required onChange={handleChange} />
            </div>
            <div className="col-md-4">
              <FormGroup label="Email" type="email" name="email" required onChange={handleChange} />
            </div>
            <div className="col-md-4">
              <FormGroup label="Location" name="location" onChange={handleChange} />
            </div>
            <div className="col-md-12">
              <FormGroup label="LinkedIn / Portfolio" name="portfolio" onChange={handleChange} />
            </div>
          </div>

          {/* EDUCATION */}
          <SectionTitle label="Education" />

          {educationBlocks.map((block, i) => (
            <EducationBlock
              key={block.id}
              index={i + 1}
              onDelete={() => deleteEducationBlock(block.id)}
            />
          ))}

          <button type="button" className="btn btn-outline-primary btn-sm mb-4" onClick={addEducationBlock}>
            + Add Education
          </button>

          {/* JOB DETAILS */}
          <SectionTitle label="Job Details" />

          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <FormGroup label="Position Applied" value={jobTitle} readOnly />
            </div>
            <div className="col-md-6">
              <FormSelect
                label="Preferred Work Mode"
                name="preferredMode"
                required
                onChange={handleChange}
                options={["Onsite", "Hybrid", "Remote"]}
              />
            </div>
            <div className="col-md-6">
              <FormGroup label="Key Skills" name="keySkills" onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <FormGroup label="Expected Salary" name="expectedSalary" onChange={handleChange} />
            </div>
            <div className="col-12">
              <FormTextArea label="Why Hire Me" name="whyHireMe" required onChange={handleChange} />
            </div>
          </div>

          {/* EXPERIENCE */}
          <SectionTitle label="Experience" />

          <FormSelect
            label="Experience Level"
            value={experienceLevel}
            onChange={handleExperienceChange}
            options={["Fresher", "Experienced"]}
            required
          />

          {experienceLevel === "Experienced" && (
            <>
              {experienceBlocks.map((block, i) => (
                <ExperienceBlock
                  key={block.id}
                  index={i + 1}
                  onDelete={() => deleteExperienceBlock(block.id)}
                />
              ))}

              <button type="button" className="btn btn-outline-primary btn-sm" onClick={addExperienceBlock}>
                + Add Experience
              </button>
            </>
          )}

          {/* SUBMIT */}
          <div className="text-end mt-4">
            <button type="submit" className="btn btn-success px-4">
              Submit Application
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function SectionTitle({ label }) {
  return (
    <h6 className="px-3 py-2 text-white mb-3" style={{ background: "#1f4e9e" }}>
      {label}
    </h6>
  );
}

function FormGroup({ label, type = "text", name, required, value, readOnly, onChange }) {
  return (
    <div>
      <label className="form-label small">{label}</label>
      <input
        type={type}
        className="form-control form-control-sm"
        name={name}
        required={required}
        value={value}
        readOnly={readOnly}
        onChange={onChange}
      />
    </div>
  );
}

function FormTextArea({ label, name, required, onChange }) {
  return (
    <div>
      <label className="form-label small">{label}</label>
      <textarea
        className="form-control form-control-sm"
        rows="3"
        name={name}
        required={required}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

function FormSelect({ label, options, ...rest }) {
  return (
    <div className="mb-3">
      <label className="form-label small">{label}</label>
      <select className="form-select form-select-sm" {...rest}>
        <option value="">Select</option>
        {options.map(o => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function EducationBlock({ index, onDelete }) {
  return (
    <div className="border rounded p-2 mb-3">
      <div className="d-flex justify-content-between">
        <strong>Education {index}</strong>
        <button type="button" className="btn btn-sm btn-danger" onClick={onDelete}>
          Delete
        </button>
      </div>
      <div className="row g-2 mt-1">
        <div className="col-md-6"><FormGroup label="Highest Qualification" name="education_qualification" required /></div>
        <div className="col-md-6"><FormGroup label="Specialization" name="education_specialization" /></div>
        <div className="col-md-6"><FormGroup label="University" name="education_university" /></div>
        <div className="col-md-6"><FormGroup label="College" name="education_college" /></div>
        <div className="col-md-6"><FormGroup label="Year of Passing" name="education_year" /></div>
        <div className="col-md-6"><FormGroup label="CGPA / Percentage" name="education_percentage" /></div>
      </div>
    </div>
  );
}

function ExperienceBlock({ index, onDelete }) {
  return (
    <div className="border rounded p-2 mb-3">
      <div className="d-flex justify-content-between">
        <strong>Experience {index}</strong>
        <button type="button" className="btn btn-sm btn-danger" onClick={onDelete}>
          Delete
        </button>
      </div>
      <div className="row g-2 mt-1">
        <div className="col-md-6"><FormGroup label="Company Name" name="exp_company" /></div>
        <div className="col-md-6"><FormGroup label="Role" name="exp_role" /></div>
        <div className="col-md-6"><FormGroup label="Joining Date" type="date" name="exp_joining" /></div>
        <div className="col-md-6"><FormGroup label="Relieving Date" type="date" name="exp_relieving" /></div>
      </div>
    </div>
  );
}

export default Carrerapplicationform;
