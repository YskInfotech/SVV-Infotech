import React from "react";

const AdminJoiningDocsChecklist = ({ checklist = [] }) => {
  return (
    <div id="joining" className="container my-4">
      <h5 className="mb-3 text-center">Joining Documents Check List</h5>

      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th style={{ width: "5%" }} className="text-center">S.No</th>
              <th style={{ width: "45%" }}>Document</th>
              <th style={{ width: "15%" }} className="text-center">Submitted</th>
              <th style={{ width: "35%" }}>Remarks</th>
            </tr>
          </thead>

          <tbody>
            {checklist.map((item, index) => (
              <tr
                key={index}
                className={item.submitted ? "table-success" : ""}
              >
                <td className="text-center fw-bold">{index + 1}</td>

                <td>
                  <div className="d-flex align-items-center">
                    {item.submitted && (
                      <span className="text-success me-2">✔</span>
                    )}
                    {item.document}
                  </div>
                </td>

                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={item.submitted === true}
                    readOnly
                  />
                </td>

                <td>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={item.remarks || ""}
                    readOnly
                  />
                </td>
              </tr>
            ))}

            {checklist.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center text-muted py-4">
                  No checklist data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminJoiningDocsChecklist;
