import React, { useState } from "react";

/* ---------- Upload Row ---------- */
const UploadRow = ({ label, name, required, helper, onFileSelect }) => (
  <div className="mb-3">
    <label className="form-label">
      {label} {required && <span className="text-danger">*</span>}
    </label>

    <div className="input-group">
      <span className="input-group-text bg-secondary text-white">Upload</span>
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

const ExperiencedDocumentsForm = ({
  onBack,
  onNext,
  personalData,
  experienceType,
}) => {
  /* ================= COMMON (FRESHER) DOCS ================= */
  const [fresherDocs, setFresherDocs] = useState({
    aadhar: null,
    qualification: null,
    bankProof: null,
    pan: null,
    photo: null,
    internship: null,
  });

  /* ================= EXPERIENCE DOCS ================= */
  const [experienceDocs, setExperienceDocs] = useState({
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

  /* ================= HANDLERS ================= */
  const handleFresherFile = (name, file) => {
    setFresherDocs((prev) => ({
      ...prev,
      [name]: URL.createObjectURL(file),
    }));
  };

  const handleExperienceFile = (name, file) => {
    setExperienceDocs((prev) => ({
      ...prev,
      [name]: URL.createObjectURL(file),
    }));
  };

  const handleExperienceChange = (e) => {
    setExperienceDocs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = (e) => {
    e.preventDefault();

    onNext({
      ...personalData,
      documents: {
        fresher: fresherDocs,               // ✅ ALWAYS
        experience:
          experienceType === "experienced"
            ? experienceDocs
            : null,
      },
    });
  };

  return (
    <form className="container my-4 text-start" onSubmit={handleSubmit}>
      <h5 className="text-center fw-bold mb-4">
        Documents & Employment Details
      </h5>

      {/* ================= COMMON DOCUMENTS ================= */}
      <h6 className="fw-bold mb-3">Basic Documents</h6>

      <div className="row g-4">
        <div className="col-md-6">
          <UploadRow label="Aadhar Card" name="aadhar" required onFileSelect={handleFresherFile} />
          <UploadRow
            label="Qualification Proof"
            name="qualification"
            required
            helper="Upload all certificates as single PDF"
            onFileSelect={handleFresherFile}
          />
          <UploadRow label="Bank Proof" name="bankProof" required onFileSelect={handleFresherFile} />
        </div>

        <div className="col-md-6">
          <UploadRow label="PAN Card" name="pan" required onFileSelect={handleFresherFile} />
          <UploadRow label="Photo" name="photo" required onFileSelect={handleFresherFile} />
          
        </div>
      </div>

      {/* ================= EXPERIENCE ONLY ================= */}
      {experienceType === "experienced" && (
        <>
          <hr className="my-4" />
          <h6 className="fw-bold mb-3">Previous Employment</h6>

          <div className="row g-3">
            <div className="col-md-6">
              <input className="form-control" name="companyName" placeholder="Company Name" required onChange={handleExperienceChange} />
            </div>
            <div className="col-md-6">
              <input className="form-control" name="jobRole" placeholder="Job Role" required onChange={handleExperienceChange} />
            </div>
          </div>

          <div className="row g-3 mt-2">
            <div className="col-md-6">
              <input type="date" name="doj" className="form-control" required onChange={handleExperienceChange} />
            </div>
            <div className="col-md-6">
              <input type="date" name="doe" className="form-control" required onChange={handleExperienceChange} />
            </div>
          </div>

          <UploadRow label="Pay Slips" name="paySlips" required onFileSelect={handleExperienceFile} />
          <UploadRow label="Offer Letter" name="offerLetter" required onFileSelect={handleExperienceFile} />
          <UploadRow label="Experience Letter" name="experienceLetter" onFileSelect={handleExperienceFile} />
        </>
      )}

      {/* ================= ACTIONS ================= */}
      <div className="d-flex justify-content-between mt-4">
        <button type="button" className="btn btn-outline-secondary" onClick={onBack}>← Back</button>
        <button type="submit" className="btn btn-primary">Next →</button>
      </div>
    </form>
  );
};

export default ExperiencedDocumentsForm;
