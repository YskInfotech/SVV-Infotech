import React, { useState } from "react";

/* ---------- Empty Models ---------- */
const emptyNominee = { name: "", age: "", dob: "", relation: "" };
const emptyFamily = { name: "", dob: "", relation: "" };

const NomineeBankDetails = ({ onBack, onNext, initialData }) => {

  /* ✅ STATE INITIALIZED ONCE (NO RESET ISSUE) */
  const [formData, setFormData] = useState(() => ({
    pfNominees: initialData?.pfNominees ?? [{ ...emptyNominee }],
    esiNominees: initialData?.esiNominees ?? [{ ...emptyNominee }],
    accidentNominees: initialData?.accidentNominees ?? [{ ...emptyNominee }],
    familyMembers: initialData?.familyMembers ?? [{ ...emptyFamily }],
    bank: initialData?.bank ?? {
      accountName: "",
      accountNumber: "",
      ifsc: "",
      branch: "",
    },
  }));

  /* ---------- Helpers ---------- */
  const updateArray = (section, index, field, value) => {
    setFormData(prev => {
      const updated = [...prev[section]];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, [section]: updated };
    });
  };

  const addRow = (section, emptyObj) => {
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], { ...emptyObj }],
    }));
  };

  const updateBank = (field, value) => {
    setFormData(prev => ({
      ...prev,
      bank: { ...prev.bank, [field]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  /* ---------- Nominee Block ---------- */
  const NomineeSection = ({ title, sectionKey }) => (
    <div className="bg-light p-3 mb-4 rounded">
      <h6 className="fw-bold mb-3">{title}</h6>

      {formData[sectionKey].map((n, i) => (
        <div className="row g-2 mb-2" key={i}>
          <div className="col-md-3">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              value={n.name}
              onChange={(e) =>
                updateArray(sectionKey, i, "name", e.target.value)
              }
            />
          </div>

          <div className="col-md-3">
            <label className="form-label">Age</label>
            <input
              type="text"
              className="form-control"
              value={n.age}
              onChange={(e) =>
                updateArray(sectionKey, i, "age", e.target.value)
              }
            />
          </div>

          <div className="col-md-3">
            <label className="form-label">DOB</label>
            <input
              type="date"
              className="form-control"
              value={n.dob}
              onChange={(e) =>
                updateArray(sectionKey, i, "dob", e.target.value)
              }
            />
          </div>

          <div className="col-md-3">
            <label className="form-label">Relation</label>
            <input
              className="form-control"
              value={n.relation}
              onChange={(e) =>
                updateArray(sectionKey, i, "relation", e.target.value)
              }
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        className="btn btn-sm btn-outline-primary mt-2"
        onClick={() => addRow(sectionKey, emptyNominee)}
      >
        + Add Nominee
      </button>
    </div>
  );

  return (
    <form className="container my-4" onSubmit={handleSubmit}>
      <h5 className="text-center fw-bold mb-4">
        Nominee, Family & Bank Details
      </h5>

      {/* PF → ESI → ACCIDENT */}
      <NomineeSection title="PF Nominee" sectionKey="pfNominees" />
      <NomineeSection title="ESI Nominee" sectionKey="esiNominees" />
      <NomineeSection
        title="Accident Insurance Nominee"
        sectionKey="accidentNominees"
      />

      {/* FAMILY */}
      <div className="bg-light p-3 mb-4 rounded">
        <h6 className="fw-bold">Family Members</h6>

        {formData.familyMembers.map((m, i) => (
          <div className="row g-2 mb-2" key={i}>
            <div className="col-md-4">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                value={m.name}
                onChange={(e) =>
                  updateArray("familyMembers", i, "name", e.target.value)
                }
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">DOB</label>
              <input
                type="date"
                className="form-control"
                value={m.dob}
                onChange={(e) =>
                  updateArray("familyMembers", i, "dob", e.target.value)
                }
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Relation</label>
              <input
                className="form-control"
                value={m.relation}
                onChange={(e) =>
                  updateArray("familyMembers", i, "relation", e.target.value)
                }
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          className="btn btn-sm btn-outline-primary mt-2"
          onClick={() => addRow("familyMembers", emptyFamily)}
        >
          + Add Family Member
        </button>
      </div>

      {/* BANK – 2 PER ROW */}
      <div className="bg-light p-3 mb-4 rounded">
        <h6 className="fw-bold">Bank Details</h6>

        <div className="row g-2">
          <div className="col-md-6">
            <label className="form-label">Account Holder Name</label>
            <input
              className="form-control"
              value={formData.bank.accountName}
              onChange={(e) => updateBank("accountName", e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Account Number</label>
            <input
              className="form-control"
              value={formData.bank.accountNumber}
              onChange={(e) => updateBank("accountNumber", e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">IFSC Code</label>
            <input
              className="form-control"
              value={formData.bank.ifsc}
              onChange={(e) => updateBank("ifsc", e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Branch Name</label>
            <input
              className="form-control"
              value={formData.bank.branch}
              onChange={(e) => updateBank("branch", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="d-flex justify-content-between">
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

export default NomineeBankDetails;
