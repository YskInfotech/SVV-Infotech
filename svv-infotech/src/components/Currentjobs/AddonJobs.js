import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function AddonJobs() {
  const [step, setStep] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const isEdit = Boolean(id);

  const skillsList = [
    "Python", "HTML", "CSS", "JavaScript", "Bootstrap",
    "Java", "C", "C++", "Excel", "SQL", "MongoDB",
    "AWS", "React", "Node.js", "Django", "FastAPI",
    "Tailwind CSS", "TypeScript", "Git", "GitHub",
    "Linux", "Firebase"
  ];

  const [formData, setFormData] = useState({
    jobTitle: "",
    department: "IT",
    workMode: "",
    rolesResponsibilities: "",
    jobsummary:"",
    requiredSkills: "",
    selectedSkills: [],
    experienceMin: "",
    experienceMax: "",
    qualification: "",
    salaryMin: "",
    salaryMax: "",
    perksBenefits: "",
    jobLocation: "",
    jobLocality: "",
    numOpenings: "",
    applicationDeadline: "",
    bannerFile: null,
  });

  // ---------------- LOAD EDIT DATA ----------------
  useEffect(() => {
    if (isEdit && location.state?.job) {
      const j = location.state.job;

      setFormData({
        jobTitle: j.jobTitle || "",
        department: j.department || "IT",
        workMode: j.workMode || "",
        rolesResponsibilities: j.rolesResponsibilities || "",
        jobsummary: j.jobsummary || "",
        requiredSkills: j.requiredSkills || "",
        selectedSkills: j.selectedSkills || [],
        experienceMin: j.experienceMin || "",
        experienceMax: j.experienceMax || "",
        qualification: j.qualification || "",
        salaryMin: j.salaryMin || "",
        salaryMax: j.salaryMax || "",
        perksBenefits: j.perksBenefits || "",
        jobLocation: j.jobLocation || "",
        jobLocality: j.jobLocality || "",
        numOpenings: j.numOpenings || "",
        applicationDeadline: j.applicationDeadline || "",
        bannerFile: null,
      });
    }
  }, [isEdit, location.state]);

  // ---------------- INPUT HANDLER ----------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, bannerFile: e.target.files[0] }));
  };

  // ---------------- SKILL SELECT ----------------
  const handleSkillSelect = (skill) => {
    if (!formData.selectedSkills.includes(skill)) {
      const updated = [...formData.selectedSkills, skill];
      setFormData((prev) => ({
        ...prev,
        selectedSkills: updated,
        requiredSkills: updated.join(", "),
      }));
    }
  };

  // ---------------- STEP NAV ----------------
  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStep(1);
  };

  // ---------------- SUBMIT ----------------
  const handleSubmit = (e) => {
    e.preventDefault();

    let jobs = JSON.parse(localStorage.getItem("jobs") || "[]");

    if (isEdit) {
      jobs = jobs.map((job) =>
        job.id === Number(id) ? { id: Number(id), ...formData } : job
      );
      toast.success("Job updated successfully!");
    } else {
      jobs.push({ id: Date.now(), ...formData });
      toast.success("Job added successfully!");
    }

    localStorage.setItem("jobs", JSON.stringify(jobs));
    navigate("/dashboard/AdminJobsList");

  };

  return (
    <div className="container-fluid min-vh-100 py-4" style={{ backgroundColor: "#F1F7FF" }}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-6">
          <div className="card shadow-sm border-0 rounded">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center mb-4 fw-bold text-uppercase">
                {isEdit ? "EDIT JOB" : "ADD ON JOB"}
              </h2>

              <form>
                {/* ---------------- STEP 1 ---------------- */}
                {step === 1 && (
                  <>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Job Title*</label>
                      <input
                        type="text"
                        name="jobTitle"
                        className="form-control bg-white"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <label className="form-label fw-semibold">Department*</label>
                        <select
                          name="department"
                          className="form-select bg-white"
                          value={formData.department}
                          onChange={handleChange}
                        >
                          <option value="IT">IT</option>
                          <option value="Non-IT">Non-IT</option>
                        </select>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Work Mode*</label>
                        <select
                          name="workMode"
                          className="form-select bg-white"
                          value={formData.workMode}
                          onChange={handleChange}
                        >
                          <option value="">Select...</option>
                          <option value="Remote">Remote</option>
                          <option value="On-site">On-site</option>
                          <option value="Hybrid">Hybrid</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">Roles & Responsibilities*</label>
                      <textarea
                        name="rolesResponsibilities"
                        className="form-control bg-white"
                        rows="3"
                        value={formData.rolesResponsibilities}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">Job Summary*</label>
                      <textarea
                        name="jobsummary"
                        className="form-control bg-white"
                        rows="3"
                        value={formData.jobsummary}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">Required Skills*</label>
                      <textarea
                        name="requiredSkills"
                        className="form-control bg-white"
                        rows="2"
                        value={formData.requiredSkills}
                        onChange={handleChange}
                      />

                      <div className="mt-2 d-flex flex-wrap gap-2">
                        {skillsList.map((skill, i) => (
                          <span
                            key={i}
                            onClick={() => handleSkillSelect(skill)}
                            className="badge border border-secondary text-secondary bg-transparent px-3 py-2"
                            style={{ cursor: "pointer" }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Experience Min*</label>
                        <input
                          type="number"
                          name="experienceMin"
                          className="form-control bg-white"
                          value={formData.experienceMin}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Experience Max*</label>
                        <input
                          type="number"
                          name="experienceMax"
                          className="form-control bg-white"
                          value={formData.experienceMax}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold">Qualification Required*</label>
                      <input
                        type="text"
                        name="qualification"
                        className="form-control bg-white"
                        value={formData.qualification}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="text-center">
                      <button className="btn btn-success px-5 py-2 fw-semibold" onClick={handleNext}>
                        Next
                      </button>
                    </div>
                  </>
                )}

                {/* ---------------- STEP 2 ---------------- */}
                {step === 2 && (
                  <>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Salary Min*</label>
                        <input
                          type="number"
                          name="salaryMin"
                          className="form-control bg-white"
                          value={formData.salaryMin}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Salary Max*</label>
                        <input
                          type="number"
                          name="salaryMax"
                          className="form-control bg-white"
                          value={formData.salaryMax}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">Perks & Benefits</label>
                      <textarea
                        name="perksBenefits"
                        className="form-control bg-white"
                        rows="2"
                        value={formData.perksBenefits}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Location*</label>
                        <input
                          type="text"
                          name="jobLocation"
                          className="form-control bg-white"
                          value={formData.jobLocation}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Locality</label>
                        <input
                          type="text"
                          name="jobLocality"
                          className="form-control bg-white"
                          value={formData.jobLocality}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Openings*</label>
                        <input
                          type="number"
                          name="numOpenings"
                          className="form-control bg-white"
                          value={formData.numOpenings}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Deadline*</label>
                        <input
                          type="date"
                          name="applicationDeadline"
                          className="form-control bg-white"
                          value={formData.applicationDeadline}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                  

                    <div className="d-flex justify-content-between">
                      <button className="btn btn-secondary" onClick={handleBack}>
                        Back
                      </button>
                      <button className="btn btn-success" onClick={handleSubmit}>
                        {isEdit ? "Update Job" : "Post Job"}
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddonJobs;
