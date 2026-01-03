import React from "react";

const BankForm = ({ bankDetails = {}, nominees = {} }) => {
  const { accountName, accountNumber, ifsc, branch } = bankDetails;

  const pf = nominees.pf || [];
  const esi = nominees.esi || [];
  const accident = nominees.accident || [];
  const family = nominees.family || [];

  return (
    <div id="bank" className="container text-start my-4">
      <h5 className="mb-3 text-center">Nominee, Family & Bank Details</h5>

      {/* ===== PF NOMINEES ===== */}
      <div className="bg-light p-3 mb-3 rounded">
        <h6 className="fw-bold mb-2">PF Nominees</h6>
        {(pf.length ? pf : [{}]).map((n, i) => (
          <div key={i} className="row g-2 mb-2">
            <input className="form-control col" value={n.name || ""} disabled />
            <input className="form-control col" value={n.age || ""} disabled />
            <input className="form-control col" value={n.dob || ""} disabled />
            <input className="form-control col" value={n.relation || ""} disabled />
          </div>
        ))}
      </div>

      {/* ===== ESI NOMINEES ===== */}
      <div className="bg-light p-3 mb-3 rounded">
        <h6 className="fw-bold mb-2">ESI Nominees</h6>
        {(esi.length ? esi : [{}]).map((n, i) => (
          <div key={i} className="row g-2 mb-2">
            <input className="form-control col" value={n.name || ""} disabled />
            <input className="form-control col" value={n.age || ""} disabled />
            <input className="form-control col" value={n.dob || ""} disabled />
            <input className="form-control col" value={n.relation || ""} disabled />
          </div>
        ))}
      </div>

      {/* ===== ACCIDENT NOMINEES ===== */}
      <div className="bg-light p-3 mb-3 rounded">
        <h6 className="fw-bold mb-2">Accident Insurance Nominees</h6>
        {(accident.length ? accident : [{}]).map((n, i) => (
          <div key={i} className="row g-2 mb-2">
            <input className="form-control col" value={n.name || ""} disabled />
            <input className="form-control col" value={n.age || ""} disabled />
            <input className="form-control col" value={n.dob || ""} disabled />
            <input className="form-control col" value={n.relation || ""} disabled />
          </div>
        ))}
      </div>

      {/* ===== FAMILY ===== */}
      <div className="bg-light p-3 mb-3 rounded">
        <h6 className="fw-bold mb-2">Family Members</h6>
        {(family.length ? family : [{}, {}, {}]).map((f, i) => (
          <div key={i} className="row g-2 mb-2">
            <input className="form-control col" value={f.name || ""} disabled />
            <input className="form-control col" value={f.dob || ""} disabled />
            <input className="form-control col" value={f.relation || ""} disabled />
          </div>
        ))}
      </div>

      {/* ===== BANK DETAILS (ALWAYS SHOW) ===== */}
      <div className="bg-light p-3 rounded">
        <h6 className="fw-bold mb-2">Bank Details</h6>
        <div className="row g-2">
          <input
            className="form-control col-md-6"
            placeholder="Account Holder Name"
            value={accountName || ""}
            disabled
          />
          <input
            className="form-control col-md-6"
            placeholder="Account Number"
            value={accountNumber || ""}
            disabled
          />
          <input
            className="form-control col-md-6"
            placeholder="IFSC Code"
            value={ifsc || ""}
            disabled
          />
          <input
            className="form-control col-md-6"
            placeholder="Branch"
            value={branch || ""}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default BankForm;
