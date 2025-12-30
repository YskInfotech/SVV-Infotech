import React, { useState } from "react";

/* ---------- Upload Row ---------- */
const UploadRow = ({ label, name, required, helper, onFileSelect }) => (
  <div className="mb-3">
    <label className="form-label">
      {label} {required && <span className="text-danger">*</span>}
    </label>

    <div className="input-group">
      <span className="input-group-text bg-secondary text-white">
        Upload
      </span>
      <input
        type="file"
        className="form-control"
        required={required}
        onChange={(e) => onFileSelect(name, e.target.files[0])}
      />
    </div>

    {helper && <small className="text-muted">{helper}</small>}
  </div>
);

/* ---------- MAIN COMPONENT ---------- */
const ExperiencedDocumentsForm = ({
  onBack,
  onNext,
  personalData,
  experienceType = "", // 🔥 SAFETY DEFAULT
}) => {
  /* ================= FRESHER DOCS ================= */
  const [fresherDocs, setFresherDocs] = useState({
    aadhar: null,
    qualification: null,
    bankProof: null,
    pan: null,
    photo: null,
    internship: null,
  });

  /* ================= EXPERIENCE DATA ================= */
  const [experienceData, setExperienceData] = useState({
    companyName: "",
    jobRole: "",
    doj: "",
    doe: "",
    esiNumber: "",
    uanNumber: "",
    totalExperience: "",
    paySlips: null,
    offerLetter: null,
    hikeLetter: null,
    experienceLetter: null,
    relievingLetter: null,
  });

  /* ---------- HANDLERS ---------- */
  const handleFresherFile = (name, file) => {
    setFresherDocs((prev) => ({ ...prev, [name]: file }));
  };

  const handleExperienceChange = (e) => {
    setExperienceData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleExperienceFile = (name, file) => {
    setExperienceData((prev) => ({ ...prev, [name]: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload =
      experienceType === "experienced"
        ? {
            ...personalData,
            experienceDocuments: experienceData,
          }
        : {
            ...personalData,
            fresherDocuments: fresherDocs,
          };

    localStorage.setItem("onboardingData", JSON.stringify(payload));
    console.log("Onboarding Docs Saved:", payload);

    onNext(payload);
  };

  /* ================= UI ================= */
  return (
    <form className="container my-4 text-start" onSubmit={handleSubmit}>
      <h5 className="text-center fw-bold mb-4">
        {experienceType === "experienced"
          ? "Experience & Documents"
          : "Documents & ID Proofs"}
      </h5>

      {/* ================= EXPERIENCE SECTION ================= */}
      {experienceType === "experienced" && (
        <>
          <h6 className="fw-bold mb-3">Work Experience Details</h6>

          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Company Name *</label>
              <input
                type="text"
                name="companyName"
                className="form-control"
                required
                onChange={handleExperienceChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Job Role *</label>
              <input
                type="text"
                name="jobRole"
                className="form-control"
                required
                onChange={handleExperienceChange}
              />
            </div>
          </div>

          <div className="row g-3 mt-2">
            <div className="col-md-6">
              <label className="form-label">Date of Joining *</label>
              <input
                type="date"
                name="doj"
                className="form-control"
                required
                onChange={handleExperienceChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Date of Exit *</label>
              <input
                type="date"
                name="doe"
                className="form-control"
                required
                onChange={handleExperienceChange}
              />
            </div>
          </div>

          <h6 className="fw-bold mt-4">Experience Documents</h6>

          <div className="row g-3 mt-2">
            <div className="col-md-6">
              <UploadRow
                label="Last 3 Months Pay Slips"
                name="paySlips"
                required
                onFileSelect={handleExperienceFile}
              />
              <UploadRow
                label="Offer Letter"
                name="offerLetter"
                required
                onFileSelect={handleExperienceFile}
              />
            </div>

            <div className="col-md-6">
              <UploadRow
                label="Hike Letter"
                name="hikeLetter"
                onFileSelect={handleExperienceFile}
              />
              <UploadRow
                label="Experience Letter"
                name="experienceLetter"
                onFileSelect={handleExperienceFile}
              />
              <UploadRow
                label="Relieving Letter"
                name="relievingLetter"
                onFileSelect={handleExperienceFile}
              />
            </div>
          </div>

          <div className="row g-3 mt-2">
            <div className="col-md-6">
              <label className="form-label">ESI Number</label>
              <input
                type="text"
                name="esiNumber"
                className="form-control"
                onChange={handleExperienceChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">UAN Number</label>
              <input
                type="text"
                name="uanNumber"
                className="form-control"
                onChange={handleExperienceChange}
              />
            </div>
          </div>

          <div className="row g-3 mt-2">
            <div className="col-md-6">
              <label className="form-label">Total Experience (Years) *</label>
              <input
                type="number"
                name="totalExperience"
                className="form-control"
                required
                onChange={handleExperienceChange}
              />
            </div>
          </div>

          <hr className="my-4" />
        </>
      )}

      {/* ================= FRESHER SECTION ================= */}
      {experienceType === "fresher" && (
        <div className="row g-4">
          <div className="col-md-6">
            <UploadRow
              label="Aadhar Card"
              name="aadhar"
              required
              onFileSelect={handleFresherFile}
            />
            <UploadRow
              label="Qualification Proof"
              name="qualification"
              required
              helper="Upload all certificates as single PDF"
              onFileSelect={handleFresherFile}
            />
            <UploadRow
              label="Bank Account Proof"
              name="bankProof"
              required
              onFileSelect={handleFresherFile}
            />
          </div>

          <div className="col-md-6">
            <UploadRow
              label="PAN Card"
              name="pan"
              required
              onFileSelect={handleFresherFile}
            />
            <UploadRow
              label="Passport Size Photo"
              name="photo"
              required
              onFileSelect={handleFresherFile}
            />
            <UploadRow
              label="Internship Proof (Optional)"
              name="internship"
              onFileSelect={handleFresherFile}
            />
          </div>
        </div>
      )}

      {/* ================= ACTION BUTTONS ================= */}
      <div className="d-flex justify-content-between mt-4">
        <button type="button" className="btn btn-outline-secondary" onClick={onBack}>
          ← Back
        </button>
        <button type="submit" className="btn btn-primary">
          Next →
        </button>
      </div>
    </form>
  );
};

export default ExperiencedDocumentsForm;
