import React from "react";

const UploadRow = ({ label, required, helper }) => (
  <div className="mb-3">
    <label className="form-label">
      {label}
      {required && <span className="text-danger">*</span>}
    </label>
    <div className="input-group">
      <span className="input-group-text bg-secondary text-white border-0">
        Upload Photo
      </span>
      <input type="file" className="form-control" />
    </div>
    {helper && <small className="text-muted d-block mt-1">{helper}</small>}
  </div>
);

const DocumentsIdProofForm = ({ onBack, onNext }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form className="container my-4" onSubmit={handleSubmit}>
      <h5 className="mb-3">Documents &amp; ID Proof</h5>

      <div className="row g-3">
        <div className="col-md-6">
          <UploadRow label="Aadhar Card Photo" required />
          <UploadRow
            label="Qualification Proof"
            required
            helper="Upload all college proofs (single PDF | Max 10MB)"
          />
          <UploadRow label="Bank Account Proof" required />
        </div>

        <div className="col-md-6">
          <UploadRow label="Pan Card Photo" required />
          <UploadRow label="Passport Size Photo" required />
          <UploadRow label="Any Internship Proof" />
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={onBack}
        >
          Back
        </button>
        <button type="submit" className="btn btn-primary">
          Next: Nominee &amp; Banking Details &gt;
        </button>
      </div>
    </form>
  );
};

export default DocumentsIdProofForm;
