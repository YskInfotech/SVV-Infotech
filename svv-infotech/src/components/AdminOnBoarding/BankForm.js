import React, { useEffect, useState } from "react";

const BankForm = ({ employeeId }) => {
  const [data, setData] = useState(null);

  /* ===============================
     LOAD EMPLOYEE DATA
  =============================== */
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("employeeOnboarding")) || [];
    const employee = stored.find((emp) => emp.id === employeeId);
    setData(employee?.bankDetails || null);
  }, [employeeId]);

  if (!data) {
    return (
      <div className="container my-4 text-center">
        <h6 className="text-muted">No Bank Details Found</h6>
      </div>
    );
  }

  const {
    pfNomineeName,
    pfNomineeAge,
    pfNomineeDob,
    pfNomineeRelation,
    esiNomineeName,
    esiNomineeAge,
    esiNomineeDob,
    esiNomineeRelation,
    accNomineeName,
    accNomineeAge,
    accNomineeDob,
    accNomineeRelation,
    bankName,
    accountNumber,
    ifscCode,
    branchName,
    familyMembers = [],
    employerReferences = [],
    personalReferences = []
  } = data;

  return (
    <form id="bank" className="container text-start my-4">
      <h5 className="mb-3 text-center">Nominee, Family & Bank Details</h5>

      {/* 1. Statutory Forms Nominee Details */}
      <div className="bg-light p-3 mb-3 rounded">
        <h6 className="mb-3">1. Statutory Forms Nominee Details</h6>

        {/* PF */}
        <p className="fw-semibold mb-2">Provident Fund (PF)</p>
        <div className="row g-2 mb-3">
          <input className="form-control col" value={pfNomineeName || ""} disabled />
          <input className="form-control col" value={pfNomineeAge || ""} disabled />
          <input className="form-control col" value={pfNomineeDob || ""} disabled />
          <input className="form-control col" value={pfNomineeRelation || ""} disabled />
        </div>

        {/* ESI */}
        <p className="fw-semibold mb-2">Employees' State Insurance (ESI)</p>
        <div className="row g-2 mb-3">
          <input className="form-control col" value={esiNomineeName || ""} disabled />
          <input className="form-control col" value={esiNomineeAge || ""} disabled />
          <input className="form-control col" value={esiNomineeDob || ""} disabled />
          <input className="form-control col" value={esiNomineeRelation || ""} disabled />
        </div>

        {/* Accident */}
        <p className="fw-semibold mb-2">Accident Insurance</p>
        <div className="row g-2">
          <input className="form-control col" value={accNomineeName || ""} disabled />
          <input className="form-control col" value={accNomineeAge || ""} disabled />
          <input className="form-control col" value={accNomineeDob || ""} disabled />
          <input className="form-control col" value={accNomineeRelation || ""} disabled />
        </div>
      </div>

      {/* 2. Family Details */}
      <div className="bg-light p-3 mb-3 rounded">
        <h6 className="mb-3">2. Family Particulars of Insured Person</h6>

        {familyMembers.map((member, index) => (
          <div key={index} className="mb-3">
            <p className="fw-semibold">Family Member {index + 1}</p>
            <div className="row g-2">
              <input className="form-control col-md-4" value={member.name || ""} disabled />
              <input className="form-control col-md-4" value={member.dob || ""} disabled />
              <input className="form-control col-md-4" value={member.relationship || ""} disabled />
            </div>
          </div>
        ))}
      </div>

      {/* 3. Bank Details */}
      <div className="bg-light p-3 mb-3 rounded">
        <h6 className="mb-3">3. Bank Details</h6>
        <div className="row g-3">
          <input className="form-control col-md-6" value={bankName || ""} disabled />
          <input className="form-control col-md-6" value={accountNumber || ""} disabled />
          <input className="form-control col-md-6" value={ifscCode || ""} disabled />
          <input className="form-control col-md-6" value={branchName || ""} disabled />
        </div>
      </div>

      {/* 4. References */}
      <div className="bg-light p-3 rounded">
        <h6 className="mb-3">4. References</h6>

        <p className="fw-semibold">A. Employer Reference</p>
        {employerReferences.map((ref, index) => (
          <div key={index} className="mb-3">
            <div className="row g-2">
              <input className="form-control col-md-4" value={ref.name || ""} disabled />
              <input className="form-control col-md-4" value={ref.designation || ""} disabled />
              <input className="form-control col-md-4" value={ref.phone || ""} disabled />
              <input className="form-control col-md-6" value={ref.email || ""} disabled />
              <input className="form-control col-md-6" value={ref.lastEmployer || ""} disabled />
            </div>
          </div>
        ))}

        <p className="fw-semibold mt-4">B. Relative or Friends Reference</p>
        {personalReferences.map((ref, index) => (
          <div key={index} className="mb-3">
            <div className="row g-2">
              <input className="form-control col-md-4" value={ref.name || ""} disabled />
              <input className="form-control col-md-4" value={ref.occupation || ""} disabled />
              <input className="form-control col-md-4" value={ref.phone || ""} disabled />
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};

export default BankForm;
