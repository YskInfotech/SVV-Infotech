import React, { useState } from "react";

/* ---------- Empty Models ---------- */
const emptyNominee = { name: "", age: "", dob: "", relation: "" };
const emptyFamily = { name: "", dob: "", relation: "" };

const NomineeBankDetails = ({ onBack, onNext, initialData }) => {
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

  return (
    <form className="container my-4" onSubmit={handleSubmit}>
      <h5 className="text-center fw-bold mb-4">
        Nominee, Family & Bank Details
      </h5>

      {/* ================= PF NOMINEE ================= */}
      <div className="bg-light p-3 mb-4 rounded">
        <h6 className="fw-bold mb-3">PF Nominee</h6>

        {formData.pfNominees.map((n, i) => (
          <div className="row g-2 mb-2" key={i}>
            <div className="col-md-3">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                placeholder="Name"
                value={n.name}
                onChange={(e) =>
                  updateArray("pfNominees", i, "name", e.target.value)
                }
              />
            </div>
            <div className="col-md-3">
            <label className="form-label">Age</label>
              <input
                className="form-control"
                placeholder="Age"
                value={n.age}
                onChange={(e) =>
                  updateArray("pfNominees", i, "age", e.target.value)
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
                  updateArray("pfNominees", i, "dob", e.target.value)
                }
              />
            </div>
            <div className="col-md-3">
           <label className="form-label">Relation</label>
              <input
                className="form-control"
                placeholder="Relation"
                value={n.relation}
                onChange={(e) =>
                  updateArray("pfNominees", i, "relation", e.target.value)
                }
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          className="btn btn-sm btn-outline-primary"
          onClick={() => addRow("pfNominees", emptyNominee)}
        >
          + Add PF Nominee
        </button>
      </div>

      {/* ================= ESI NOMINEE ================= */}
      <div className="bg-light p-3 mb-4 rounded">
        <h6 className="fw-bold mb-3">ESI Nominee</h6>

        {formData.esiNominees.map((n, i) => (
          <div className="row g-2 mb-2" key={i}>
            <div className="col-md-3">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                placeholder="Name"
                value={n.name}
                onChange={(e) =>
                  updateArray("esiNominees", i, "name", e.target.value)
                }
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Age</label>
              <input
                className="form-control"
                placeholder="Age"
                value={n.age}
                onChange={(e) =>
                  updateArray("esiNominees", i, "age", e.target.value)
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
                  updateArray("esiNominees", i, "dob", e.target.value)
                }
              />
            </div>
            <div className="col-md-3">
           <label className="form-label">Relation</label>
              <input
                className="form-control"
                placeholder="Relation"
                value={n.relation}
                onChange={(e) =>
                  updateArray("esiNominees", i, "relation", e.target.value)
                }
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          className="btn btn-sm btn-outline-primary"
          onClick={() => addRow("esiNominees", emptyNominee)}
        >
          + Add ESI Nominee
        </button>
      </div>

      {/* ================= ACCIDENT NOMINEE ================= */}
      <div className="bg-light p-3 mb-4 rounded">
        <h6 className="fw-bold mb-3">Accident Insurance Nominee</h6>

        {formData.accidentNominees.map((n, i) => (
          <div className="row g-2 mb-2" key={i}>
            <div className="col-md-3">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                placeholder="Name"
                value={n.name}
                onChange={(e) =>
                  updateArray("accidentNominees", i, "name", e.target.value)
                }
              />
            </div>
            <div className="col-md-3">
           <label className="form-label">Age</label>
              <input
                className="form-control"
                placeholder="Age"
                value={n.age}
                onChange={(e) =>
                  updateArray("accidentNominees", i, "age", e.target.value)
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
                  updateArray("accidentNominees", i, "dob", e.target.value)
                }
              />
            </div>
            <div className="col-md-3">
        <label className="form-label">Relation</label>
              <input
                className="form-control"
                placeholder="Relation"
                value={n.relation}
                onChange={(e) =>
                  updateArray("accidentNominees", i, "relation", e.target.value)
                }
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          className="btn btn-sm btn-outline-primary"
          onClick={() => addRow("accidentNominees", emptyNominee)}
        >
          + Add Accident Nominee
        </button>
      </div>

      {/* ================= FAMILY ================= */}
      <div className="bg-light p-3 mb-4 rounded">
        <h6 className="fw-bold">Family Members</h6>

        {formData.familyMembers.map((m, i) => (
          <div className="row g-2 mb-2" key={i}>
            <div className="col-md-4">
        <label className="form-label">Name</label>
              <input
                className="form-control"
                placeholder="Name"
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
                placeholder="Relation"
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
          className="btn btn-sm btn-outline-primary"
          onClick={() => addRow("familyMembers", emptyFamily)}
        >
          + Add Family Member
        </button>
      </div>

      {/* ================= BANK ================= */}
      <div className="bg-light p-3 mb-4 rounded">
        <h6 className="fw-bold">Bank Details</h6>

        <div className="row g-2">
          <div className="col-md-6">
          <label className="form-label">Account Holder Name</label>
            <input
              className="form-control"
              placeholder="Account Holder Name"
              value={formData.bank.accountName}
              onChange={(e) => updateBank("accountName", e.target.value)}
            />
          </div>
          <div className="col-md-6">
      <label className="form-label">Account Number</label>
            <input
              className="form-control"
              placeholder="Account Number"
              value={formData.bank.accountNumber}
              onChange={(e) => updateBank("accountNumber", e.target.value)}
            />
          </div>
          <div className="col-md-6">

        <label className="form-label">IFSC Code</label>
            <input
              className="form-control"
              placeholder="IFSC Code"
              value={formData.bank.ifsc}
              onChange={(e) => updateBank("ifsc", e.target.value)}
            />
          </div>
          <div className="col-md-6">
        <label className="form-label">Branch Name</label>
            <input
              className="form-control"
              placeholder="Branch Name"
              value={formData.bank.branch}
              onChange={(e) => updateBank("branch", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* ================= ACTIONS ================= */}
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
