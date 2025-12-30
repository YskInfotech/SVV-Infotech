import React, { useState } from "react";

const JoiningDocumentsChecklist = ({ onBack, onNext, initialData }) => {
  // --------------------------------------------
  // 1. Detect Fresher / Experienced from flow data
  // --------------------------------------------
  const isFresher = initialData?.experienceType === "fresher";

  // --------------------------------------------
  // 2. Document Lists
  // --------------------------------------------
  const fresherDocs = [
    "Aadhar Card Photo Copy",
    "PAN Card Photo Copy",
    "Education Proof",
    "Passport Size Photo",
    "Bank Account Proof",
    "Employer Reference Check Done"
  ];

  const experiencedDocs = [
    "Aadhar Card Photo Copy",
    "PAN Card Photo Copy",
    "Education Proof",
    "Passport Size Photo",
    "Bank Account Proof",
    "Employer Reference Check Done",
    "Last 3 Months Payslips",
    "Offer Letter",
    "Hike Letter",
    "Relieving Letter",
    "Experience Letter"
  ];

  const documents = isFresher ? fresherDocs : experiencedDocs;

  // --------------------------------------------
  // 3. Checklist State
  // --------------------------------------------
  const [checklist, setChecklist] = useState(
    initialData?.joiningChecklist ||
      documents.map((doc) => ({
        document: doc,
        submitted: false,
        remarks: ""
      }))
  );

  const updateChecklist = (index, field, value) => {
    const updated = [...checklist];
    updated[index][field] = value;
    setChecklist(updated);
  };

  // --------------------------------------------
  // 4. Submit – Send ALL 4 STEPS DATA
  // --------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    onNext({
      ...initialData,          // Step 1 + Step 2 + Step 3
      joiningChecklist: checklist // Step 4
    });
  };

  // --------------------------------------------
  // 5. UI
  // --------------------------------------------
  return (
    <form className="container my-4" onSubmit={handleSubmit}>
      <h5 className="mb-3">Joining Documents Checklist</h5>

      <table className="table table-bordered align-middle">
        <thead className="table-light">
          <tr>
            <th style={{ width: "5%" }}>#</th>
            <th style={{ width: "45%" }}>Document</th>
            <th style={{ width: "15%" }} className="text-center">
              Submitted
            </th>
            <th style={{ width: "35%" }}>Remarks</th>
          </tr>
        </thead>

        <tbody>
          {checklist.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.document}</td>

              <td className="text-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={item.submitted}
                  onChange={(e) =>
                    updateChecklist(index, "submitted", e.target.checked)
                  }
                />
              </td>

              <td>
                <input
                  type="text"
                  className="form-control"
                  value={item.remarks}
                  onChange={(e) =>
                    updateChecklist(index, "remarks", e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ACTION BUTTONS */}
      <div className="d-flex justify-content-center gap-3 mt-4">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={onBack}
        >
          ← Back
        </button>

        <button type="submit" className="btn btn-primary">
          Submit & Finish
        </button>
      </div>
    </form>
  );
};

export default JoiningDocumentsChecklist;
