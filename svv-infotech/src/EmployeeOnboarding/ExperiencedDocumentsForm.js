import React from "react";

const UploadRow = ({ label, name, required }) => (
  <div className="mb-3">
    <label className="form-label">
      {label}
      {required && <span className="text-danger">*</span>}
    </label>
    <div className="input-group">
      <span className="input-group-text bg-secondary text-white border-0">
        Upload Photo
      </span>
      <input type="file" name={name} className="form-control" />
    </div>
  </div>
);

const ExperiencedDocumentsForm = ({ onBack, onNext }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form className="container text-start my-4" onSubmit={handleSubmit}>
      <h5 className="mb-3 text-center">Work Experience Details</h5>

      {/* Row 1 */}
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">
            Company Name<span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="companyName"
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">
            Job Role<span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="jobRole"
            className="form-control"
            required
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="row g-3 mt-1">
        <div className="col-md-6">
          <label className="form-label">
            Date Of Joining<span className="text-danger">*</span>
          </label>
          <input type="date" name="doj" className="form-control" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">
            Date Of Exit<span className="text-danger">*</span>
          </label>
          <input type="date" name="doe" className="form-control" required />
        </div>
      </div>

     

      
      
       
      


      <div className="row g-3 mt-1">
        <div className="col-md-6">
          <UploadRow
            label="Last 3 Months Pay Slips"
            name="paySlips"
            required
          />
         
        </div>
        <div className="col-md-6">
          <UploadRow label="Offer Letter" name="offerLetter" required />
        </div>
      </div>

      <div className="row g-3 mt-1">
        <div className="col-md-6">
          <UploadRow label="Hike Letter" name="hikeLetter" />
          <UploadRow label="Experience Letter" name="experienceLetter" />
        </div>
        <div className="col-md-6">
          <UploadRow label="Relieving Letter" name="relievingLetter" />
        </div>
      </div>

      {/* ESI / UAN / Total experience */}
      <div className="row g-3 mt-1">
        <div className="col-md-6">
          <label className="form-label">
            ESI Number (If already available)
          </label>
          <input type="text" name="esiNumber" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">UAN Number</label>
          <input type="text" name="uanNumber" className="form-control" />
        </div>
      </div>

      <div className="row g-3 mt-1">
        <div className="col-md-6">
          <label className="form-label">
            Total Experience (in years)
            <span className="text-danger">*</span>
          </label>
          <input
            type="number"
            step="0.1"
            name="totalExperience"
            className="form-control"
            required
          />
        </div>
      </div>

       {/* Files */}

      <div className="row g-3 mt-1">
        <div className="col-md-6">
          <UploadRow
            label="Aadhar Card Photo"
            name="paySlips"
            required
          />
        
        </div>
        <div className="col-md-6">
          <UploadRow label="Pan Card Photo" name="Pan card Photo" required />
        </div>
      </div>

      <div className="row g-3 mt-1">
        <div className="col-md-6">
          <UploadRow
            label="Qualification Proof"
            name="paySlips"
            required
          />
           <small className="text-muted">
            Upload all college proofs (single PDF | Max 10MB)
          </small>
        </div>
        <div className="col-md-6">
          <UploadRow label="Passport Size Photo" name="offerLetter" required />
        </div>

          <div className="col-md-6">
          <UploadRow
            label="Bank Account Proof"
            name="paySlips"
            required
          />
          
        </div>
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={onBack}
        >
          Back
        </button>

        <div className="d-flex align-items-center gap-3">
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
          >
            Add Second Company Details +
          </button>
          <button type="submit" className="btn btn-primary">
            Next: Documents &amp; ID Proof
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExperiencedDocumentsForm;
