import React, { useState } from "react";

const NomineeFamilyBankForm = ({ onBack, onNext }) => {
  const [familyMembers, setFamilyMembers] = useState([1, 2, 3, 4]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form
      className="container my-4"
      onSubmit={handleSubmit}
    >
      <h5 className="mb-3">Nominee, Family &amp; Bank Details</h5>

      {/* 1. Statutory Forms Nominee Details */}
      <div className="bg-light p-3 mb-3">
        <h6>1. Statutory Forms Nominee Details</h6>

        {/* Provident Fund (PF) */}
        <p className="mb-1 fw-semibold">Provident Fund (PF)</p>
        <div className="row g-2 align-items-end mb-3">
          <div className="col-md-4">
            <label className="form-label">
              Name of Nominee<span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-2">
            <label className="form-label">Age<span className="text-danger">*</span></label>
            <div className="input-group">
              <input type="number" className="form-control" defaultValue={25} />
            </div>
          </div>
          <div className="col-md-3">
            <label className="form-label">
              Date of Birth<span className="text-danger">*</span>
            </label>
            <input type="date" className="form-control" />
          </div>
          <div className="col-md-3">
            <label className="form-label">
              Relationship<span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>

        {/* Employees' State Insurance (ESI) */}
        <p className="mb-1 fw-semibold">Employees&apos; State Insurance (ESI)</p>
        <div className="row g-2 align-items-end mb-3">
          <div className="col-md-4">
            <label className="form-label">
              Name of Nominee<span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-2">
            <label className="form-label">Age<span className="text-danger">*</span></label>
            <input type="number" className="form-control" defaultValue={25} />
          </div>
          <div className="col-md-3">
            <label className="form-label">
              Date of Birth<span className="text-danger">*</span>
            </label>
            <input type="date" className="form-control" />
          </div>
          <div className="col-md-3">
            <label className="form-label">
              Relationship<span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>

        {/* Accident Insurance */}
        <p className="mb-1 fw-semibold">Accident Insurance</p>
        <div className="row g-2 align-items-end">
          <div className="col-md-4">
            <label className="form-label">
              Name of Nominee<span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-2">
            <label className="form-label">Age<span className="text-danger">*</span></label>
            <input type="number" className="form-control" defaultValue={25} />
          </div>
          <div className="col-md-3">
            <label className="form-label">
              Date of Birth<span className="text-danger">*</span>
            </label>
            <input type="date" className="form-control" />
          </div>
          <div className="col-md-3">
            <label className="form-label">
              Relationship<span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>
      </div>

      {/* 2. Family Particulars of Insured Person */}
      <div className="bg-light p-3 mb-3">
        <h6>2. Family Particulars of Insured Person</h6>

        {[1, 2, 3].map((n) => (
          <div key={n} className="mb-3">
            <p className="mb-1 fw-semibold">Family Member {n}</p>
            <div className="row g-2">
              <div className="col-md-4">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Date of Birth</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-4">
                <label className="form-label">
                  Relationship{n === 1 && <span className="text-danger">*</span>}
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        ))}

        {/* Family Member 4 (Nominee) */}
        <div>
          <p className="mb-1 fw-semibold">Family Member 4</p>
          <div className="row g-2">
            <div className="col-md-4">
              <label className="form-label">
                Name of Nominee<span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label className="form-label">Date of Birth</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-4">
              <label className="form-label">Relationship</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>

        <div className="text-end mt-3">
          <button type="button" className="btn btn-outline-primary btn-sm">
            Add One Family Member +
          </button>
        </div>
      </div>

      {/* 3. Bank Details */}
      <div className="bg-light p-3 mb-3">
        <h6>3. Bank Details</h6>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">
              Name as per Bank Details<span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">
              Account Number<span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">
              IFSC Code<span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Branch Name</label>
            <input type="text" className="form-control" />
          </div>
        </div>
      </div>

      {/* 4. References */}
      <div className="bg-light p-3 mb-3">
        <h6>4. References</h6>

        {/* A. Employer Reference */}
        <p className="fw-semibold mb-1">A. Employer Reference</p>
        {[1, 2].map((n) => (
          <div key={n} className="mb-3">
            <p className="mb-1">Reference {n}</p>
            <div className="row g-2 mb-2">
              <div className="col-md-4">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Designation</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-control" />
              </div>
            </div>
            <div className="row g-2">
              <div className="col-md-6">
                <label className="form-label">Email ID</label>
                <input type="email" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Employer</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        ))}

        {/* B. Relative or Friends Reference */}
        <p className="fw-semibold mt-3 mb-1">B. Relative or Friends Reference</p>
        {[1, 2].map((n) => (
          <div key={n} className="mb-3">
            <p className="mb-1">Reference {n}</p>
            <div className="row g-2">
              <div className="col-md-4">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Occupation</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-control" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom buttons */}
  <div className="d-flex justify-content-between align-items-center mt-4">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={onBack}
        >
          Back
        </button>
        <button type="submit" className="btn btn-primary">
          Next: Joining Check List &gt;
        </button>
      </div>
    </form>
  );
};

export default NomineeFamilyBankForm;
