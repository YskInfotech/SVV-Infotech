import React, { useState } from "react";

const BankForm = ({ id, activeTab }) => {
  const [formData, setFormData] = useState({

    pfNomineeName: "",
    pfNomineeAge: "",
    pfNomineeDob: "",
    pfNomineeRelation: "",
    esiNomineeName: "",
    esiNomineeAge: "",
    esiNomineeDob: "",
    esiNomineeRelation: "",
    accNomineeName: "",
    accNomineeAge: "",
    accNomineeDob: "",
    accNomineeRelation: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    branchName: ""
  });

  const [familyMembers, setFamilyMembers] = useState([
    { id: 1, name: "", dob: "", relationship: "" },
    { id: 2, name: "", dob: "", relationship: "" },
    { id: 3, name: "", dob: "", relationship: "" },
    { id: 4, name: "", dob: "", relationship: "" }
  ]);

  const [employerReferences, setEmployerReferences] = useState([
    { id: 1, name: "", designation: "", phone: "", email: "", lastEmployer: "" },
    { id: 2, name: "", designation: "", phone: "", email: "", lastEmployer: "" }
  ]);

  const [personalReferences, setPersonalReferences] = useState([
    { id: 1, name: "", occupation: "", phone: "" },
    { id: 2, name: "", occupation: "", phone: "" }
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFamilyMemberChange = (index, field, value) => {
    const updated = [...familyMembers];
    updated[index][field] = value;
    setFamilyMembers(updated);
  };

  const handleEmployerRefChange = (index, field, value) => {
    const updated = [...employerReferences];
    updated[index][field] = value;
    setEmployerReferences(updated);
  };

  const handlePersonalRefChange = (index, field, value) => {
    const updated = [...personalReferences];
    updated[index][field] = value;
    setPersonalReferences(updated);
  };

  const addFamilyMember = () => {
    setFamilyMembers([
      ...familyMembers,
      { id: familyMembers.length + 1, name: "", dob: "", relationship: "" }
    ]);
  };


  return (
    <form id="bank" className="container text-start my-4">
      <h5 className="mb-3 text-center">Nominee, Family &amp; Bank Details</h5>

      {/* 1. Statutory Forms Nominee Details */}
      <div className="bg-light p-3 mb-3 rounded">
        <h6 className="mb-3">1. Statutory Forms Nominee Details</h6>

        {/* Provident Fund (PF) */}
        <p className="mb-2 fw-semibold">Provident Fund (PF)</p>
        <div className="row g-2 align-items-end mb-3">
          <div className="col-md-4">
            <label className="form-label">
              Name of Nominee<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="pfNomineeName"
              value={formData.pfNomineeName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">
              Age<span className="text-danger">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              name="pfNomineeAge"
              value={formData.pfNomineeAge}
              onChange={handleChange}
              min="0"
              max="120"
              required
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">
              Date of Birth<span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className="form-control"
              name="pfNomineeDob"
              value={formData.pfNomineeDob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">
              Relationship<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="pfNomineeRelation"
              value={formData.pfNomineeRelation}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Employees' State Insurance (ESI) */}
        <p className="mb-2 fw-semibold">Employees&apos; State Insurance (ESI)</p>
        <div className="row g-2 align-items-end mb-3">
          <div className="col-md-4">
            <label className="form-label">
              Name of Nominee<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="esiNomineeName"
              value={formData.esiNomineeName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">
              Age<span className="text-danger">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              name="esiNomineeAge"
              value={formData.esiNomineeAge}
              onChange={handleChange}
              min="0"
              max="120"
              required
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">
              Date of Birth<span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className="form-control"
              name="esiNomineeDob"
              value={formData.esiNomineeDob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">
              Relationship<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="esiNomineeRelation"
              value={formData.esiNomineeRelation}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Accident Insurance */}
        <p className="mb-2 fw-semibold">Accident Insurance</p>
        <div className="row g-2 align-items-end">
          <div className="col-md-4">
            <label className="form-label">
              Name of Nominee<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="accNomineeName"
              value={formData.accNomineeName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">
              Age<span className="text-danger">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              name="accNomineeAge"
              value={formData.accNomineeAge}
              onChange={handleChange}
              min="0"
              max="120"
              required
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">
              Date of Birth<span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className="form-control"
              name="accNomineeDob"
              value={formData.accNomineeDob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">
              Relationship<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="accNomineeRelation"
              value={formData.accNomineeRelation}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      {/* 2. Family Particulars of Insured Person */}
      <div className="bg-light p-3 mb-3 rounded">
        <h6 className="mb-3">2. Family Particulars of Insured Person</h6>

        {familyMembers.map((member, index) => (
          <div key={member.id} className="mb-3">
            <p className="mb-2 fw-semibold">
              Family Member {index + 1}
              {index === 3 && " (Nominee)"}
            </p>
            <div className="row g-2">
              <div className="col-md-4">
                <label className="form-label">
                  {index === 3 ? "Name of Nominee" : "Name"}
                  {index === 3 && <span className="text-danger">*</span>}
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={member.name}
                  onChange={(e) => handleFamilyMemberChange(index, "name", e.target.value)}
                  required={index === 3}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  value={member.dob}
                  onChange={(e) => handleFamilyMemberChange(index, "dob", e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">
                  Relationship
                  {index === 0 && <span className="text-danger">*</span>}
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={member.relationship}
                  onChange={(e) => handleFamilyMemberChange(index, "relationship", e.target.value)}
                  required={index === 0}
                />
              </div>
            </div>
          </div>
        ))}

        <div className="text-end mt-3">
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            onClick={addFamilyMember}
          >
            Add One Family Member +
          </button>
        </div>
      </div>

      {/* 3. Bank Details */}
      <div className="bg-light p-3 mb-3 rounded">
        <h6 className="mb-3">3. Bank Details</h6>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">
              Name as per Bank Details<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">
              Account Number<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">
              IFSC Code<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleChange}
              pattern="^[A-Z]{4}0[A-Z0-9]{6}$"
              placeholder="e.g., SBIN0001234"
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Branch Name</label>
            <input
              type="text"
              className="form-control"
              name="branchName"
              value={formData.branchName}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* 4. References */}
      <div className="bg-light p-3 mb-3 rounded">
        <h6 className="mb-3">4. References</h6>

        {/* A. Employer Reference */}
        <p className="fw-semibold mb-2">A. Employer Reference</p>
        {employerReferences.map((ref, index) => (
          <div key={ref.id} className="mb-3">
            <p className="mb-2">Reference {index + 1}</p>
            <div className="row g-2 mb-2">
              <div className="col-md-4">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={ref.name}
                  onChange={(e) => handleEmployerRefChange(index, "name", e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Designation</label>
                <input
                  type="text"
                  className="form-control"
                  value={ref.designation}
                  onChange={(e) => handleEmployerRefChange(index, "designation", e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  value={ref.phone}
                  onChange={(e) => handleEmployerRefChange(index, "phone", e.target.value)}
                  maxLength="10"
                  pattern="\d{10}"
                />
              </div>
            </div>
            <div className="row g-2">
              <div className="col-md-6">
                <label className="form-label">Email ID</label>
                <input
                  type="email"
                  className="form-control"
                  value={ref.email}
                  onChange={(e) => handleEmployerRefChange(index, "email", e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Employer</label>
                <input
                  type="text"
                  className="form-control"
                  value={ref.lastEmployer}
                  onChange={(e) => handleEmployerRefChange(index, "lastEmployer", e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}

        {/* B. Relative or Friends Reference */}
        <p className="fw-semibold mt-4 mb-2">B. Relative or Friends Reference</p>
        {personalReferences.map((ref, index) => (
          <div key={ref.id} className="mb-3">
            <p className="mb-2">Reference {index + 1}</p>
            <div className="row g-2">
              <div className="col-md-4">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={ref.name}
                  onChange={(e) => handlePersonalRefChange(index, "name", e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Occupation</label>
                <input
                  type="text"
                  className="form-control"
                  value={ref.occupation}
                  onChange={(e) => handlePersonalRefChange(index, "occupation", e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  value={ref.phone}
                  onChange={(e) => handlePersonalRefChange(index, "phone", e.target.value)}
                  maxLength="10"
                  pattern="\d{10}"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};

export default BankForm;