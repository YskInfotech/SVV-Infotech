import React, { useState } from "react";

const AdminJoiningDocsChecklist = ({ id, activeTab, experienceType }) => {
  const [submitted, setSubmitted] = useState({});
  const [remarks, setRemarks] = useState({});

  const fresherDocs = [
    "Aadhar Card Photo Copy",
    "PAN Card Photo Copy",
    "Education Proof",
    "Passport Size Photo",
    "Bank Account Proof",
    "Employer Reference Check Done",
  ];

  const experiencedDocs = [
    "Aadhar Card Photo Copy",
    "PAN Card Photo Copy",
    "Education Proof",
    "Passport Size Photo",
    "Bank Account Proof",
    "Relieving Letter / Resignation Acceptance Letter",
    "Employer Reference Check Done",
    "Last 3 Months Payslips",
    "Offer Letter",
    "Hike Letter",
    "Relieving Letter",
    "Experience Letter",
  ];

  const documents = experienceType === "experienced" ? experiencedDocs : fresherDocs;

  const toggleCheckbox = (index) => {
    setSubmitted(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleRemarksChange = (index, value) => {
    setRemarks(prev => ({
      ...prev,
      [index]: value
    }));
  };


  return (
    <form id="joining" className="container text-start my-4" >
      <h5 className="mb-3 text-center">Joining Documents Check List</h5>


      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th style={{ width: "5%" }} className="text-center">S.No</th>
              <th style={{ width: "45%" }}>Document</th>
              <th style={{ width: "15%" }} className="text-center">Submitted</th>
              <th style={{ width: "35%" }}>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, index) => (
              <tr key={index} className={submitted[index] ? 'table-success' : ''}>
                <td className="text-center fw-bold">{index + 1}</td>
                <td>
                  <div className="d-flex align-items-center">
                    {submitted[index] && (
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                    )}
                    {doc}
                  </div>
                </td>
                <td className="text-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={submitted[index] || false}
                    onChange={() => toggleCheckbox(index)}
                    style={{ cursor: 'pointer' }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Enter remarks..."
                    value={remarks[index] || ""}
                    onChange={(e) => handleRemarksChange(index, e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </form>
  );
};

export default AdminJoiningDocsChecklist;