import React from "react";

const JoiningDocumentsChecklist = ({ onBack, isFresher }) => {
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

  const documents = isFresher ? fresherDocs : experiencedDocs;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <form className="container my-4" onSubmit={handleSubmit}>
      <h5 className="mb-3">Joining Documents Check List</h5>

      <table className="table table-bordered align-middle">
        <thead className="table-light">
          <tr>
            <th style={{ width: "5%" }}>#</th>
            <th style={{ width: "45%" }}>Document</th>
            <th style={{ width: "15%" }}>Submitted</th>
            <th style={{ width: "35%" }}>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => (
            <tr key={doc}>
              <td>{index + 1}</td>
              <td>{doc}</td>
              <td className="text-center">
                <input className="form-check-input" type="checkbox" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={onBack}
        >
          Back
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default JoiningDocumentsChecklist;
