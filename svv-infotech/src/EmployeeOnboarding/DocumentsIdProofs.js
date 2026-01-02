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
const DocumentsIdProofs = ({ onBack, onNext, personalData }) => {
  /* ================= FRESHER DOCS ================= */
  const [docs, setDocs] = useState({
    aadhar: null,
    qualification: null,
    bankProof: null,
    pan: null,
    photo: null,
    internship: null,
  });

  /* ================= FILE HANDLER (✅ FIX) ================= */
  const handleFile = (name, file) => {
    setDocs((prev) => ({
      ...prev,
      [name]: URL.createObjectURL(file), // ✅ IMPORTANT
    }));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...personalData,
      fresherDocuments: docs, // ✅ SAME STRUCTURE AS EXPERIENCE
    };

    onNext(payload);
  };

  /* ================= UI ================= */
  return (
    <form className="container my-4 text-start" onSubmit={handleSubmit}>
      <h5 className="text-center fw-bold mb-4">Documents & ID Proofs</h5>

      <div className="row g-4">
        <div className="col-md-6">
          <UploadRow
            label="Aadhar Card"
            name="aadhar"
            required
            onFileSelect={handleFile}
          />

          <UploadRow
            label="Qualification Proof"
            name="qualification"
            required
            helper="Upload all certificates as single PDF"
            onFileSelect={handleFile}
          />

          <UploadRow
            label="Bank Account Proof"
            name="bankProof"
            required
            onFileSelect={handleFile}
          />
        </div>

        <div className="col-md-6">
          <UploadRow
            label="PAN Card"
            name="pan"
            required
            onFileSelect={handleFile}
          />

          <UploadRow
            label="Passport Size Photo"
            name="photo"
            required
            onFileSelect={handleFile}
          />

          <UploadRow
            label="Internship Proof (Optional)"
            name="internship"
            onFileSelect={handleFile}
          />
        </div>
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={onBack}
        >
          ← Back
        </button>

        <button type="submit" className="btn btn-primary">
          Next →
        </button>
      </div>
    </form>
  );
};

export default DocumentsIdProofs;
