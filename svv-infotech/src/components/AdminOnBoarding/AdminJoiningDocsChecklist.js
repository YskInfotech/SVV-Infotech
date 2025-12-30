import React, { useEffect, useState } from "react";

const AdminJoiningDocsChecklist = ({ id, experienceType }) => {
  const [submitted, setSubmitted] = useState({});
  const [remarks, setRemarks] = useState({});

  /* ===============================
     DOCUMENT LISTS
  =============================== */
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

  const documents =
    experienceType === "experienced" ? experiencedDocs : fresherDocs;

  /* ===============================
     LOAD SAVED CHECKLIST
  =============================== */
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("joiningDocsChecklist")) || {};
    if (stored[id]) {
      setSubmitted(stored[id].submitted || {});
      setRemarks(stored[id].remarks || {});
    }
  }, [id]);

  /* ===============================
     SAVE TO LOCALSTORAGE
  =============================== */
  const saveToStorage = (updatedSubmitted, updatedRemarks) => {
    const stored = JSON.parse(localStorage.getItem("joiningDocsChecklist")) || {};
    stored[id] = {
      submitted: updatedSubmitted,
      remarks: updatedRemarks,
    };
    localStorage.setItem("joiningDocsChecklist", JSON.stringify(stored));
  };

  /* ===============================
     HANDLERS
  =============================== */
  const toggleCheckbox = (index) => {
    const updated = {
      ...submitted,
      [index]: !submitted[index],
    };
    setSubmitted(updated);
    saveToStorage(updated, remarks);
  };

  const handleRemarksChange = (index, value) => {
    const updated = {
      ...remarks,
      [index]: value,
    };
    setRemarks(updated);
    saveToStorage(submitted, updated);
  };

  /* ===============================
     UI
  =============================== */
  return (
    <form id="joining" className="container text-start my-4">
      <h5 className="mb-3 text-center">Joining Documents Check List</h5>

      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th style={{ width: "5%" }} className="text-center">
                S.No
              </th>
              <th style={{ width: "45%" }}>Document</th>
              <th style={{ width: "15%" }} className="text-center">
                Submitted
              </th>
              <th style={{ width: "35%" }}>Remarks</th>
            </tr>
          </thead>

          <tbody>
            {documents.map((doc, index) => (
              <tr
                key={index}
                className={submitted[index] ? "table-success" : ""}
              >
                <td className="text-center fw-bold">{index + 1}</td>

                <td>
                  <div className="d-flex align-items-center">
                    {submitted[index] && (
                      <span className="text-success me-2">✔</span>
                    )}
                    {doc}
                  </div>
                </td>

                <td className="text-center">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={submitted[index] || false}
                    onChange={() => toggleCheckbox(index)}
                    style={{ cursor: "pointer" }}
                  />
                </td>

                <td>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Enter remarks..."
                    value={remarks[index] || ""}
                    onChange={(e) =>
                      handleRemarksChange(index, e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}

            {documents.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center text-muted py-4">
                  No documents configured
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </form>
  );
};

export default AdminJoiningDocsChecklist;
