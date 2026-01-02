import React from "react";

function DocumentsForm({ experienceType, employeeDocuments }) {

  const isExperienced = experienceType === "experienced";
  const docs = employeeDocuments || {};

  const FileView = ({ file }) => {
    if (!file) return <span className="text-muted">Not Uploaded</span>;
    return (
      <a
        href={file}
        target="_blank"
        rel="noreferrer"
        className="btn btn-sm btn-outline-primary"
      >
        View
      </a>
    );
  };

  return (
    <div id="documents" className="container text-start my-4">
      <h5 className="mb-3 text-center">Documents & ID Proof</h5>

      <form>
        <div className="">

          {/* Row 1 */}
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Aadhar Card Photo</label>
              <div>
                <FileView file={docs.aadhar} />
              </div>
            </div>

            <div className="col-md-6">
              <label className="form-label">Pan Card Photo</label>
              <div>
                <FileView file={docs.pan} />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="row g-3 mt-1">
            <div className="col-md-6">
              <label className="form-label">Qualification Proof</label>
              <div>
                <FileView file={docs.qualification} />
              </div>
            </div>

            <div className="col-md-6">
              <label className="form-label">Passport Size Photo</label>
              <div>
                <FileView file={docs.photo} />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="row g-3 mt-1">
            <div className="col-md-6">
              <label className="form-label">Bank Account Proof</label>
              <div>
                <FileView file={docs.bankProof} />
              </div>
            </div>

            <div className="col-md-6">
              <label className="form-label">Any Internship Proof</label>
              <div>
                <FileView file={docs.internship} />
              </div>
            </div>
          </div>

          {/* EXPERIENCED SECTION */}
          {isExperienced && (
            <>
              <hr className="my-4" />
              <h6 className="mb-3 text-primary">Previous Employment Details</h6>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={docs.companyName || ""}
                    disabled
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Job Role</label>
                  <input
                    type="text"
                    className="form-control"
                    value={docs.jobRole || ""}
                    disabled
                  />
                </div>
              </div>

              <div className="row g-3 mt-1">
                <div className="col-md-6">
                  <label className="form-label">Date Of Joining</label>
                  <input
                    type="date"
                    className="form-control"
                    value={docs.doj || ""}
                    disabled
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Date Of Exit</label>
                  <input
                    type="date"
                    className="form-control"
                    value={docs.doe || ""}
                    disabled
                  />
                </div>
              </div>

              <div className="row g-3 mt-1">
                <div className="col-md-6">
                  <label className="form-label">Last 3 Months Pay Slips</label>
                  <div>
                    <FileView file={docs.paySlips} />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Offer Letter</label>
                  <div>
                    <FileView file={docs.offerLetter} />
                  </div>
                </div>
              </div>

              <div className="row g-3 mt-1">
                <div className="col-md-6">
                  <label className="form-label">Hike Letter</label>
                  <div>
                    <FileView file={docs.hikeLetter} />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Relieving Letter</label>
                  <div>
                    <FileView file={docs.relievingLetter} />
                  </div>
                </div>
              </div>

              <div className="row g-3 mt-1">
                <div className="col-md-6">
                  <label className="form-label">Experience Letter</label>
                  <div>
                    <FileView file={docs.experienceLetter} />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label">ESI Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={docs.esiNumber || ""}
                    disabled
                  />
                </div>
              </div>

              <div className="row g-3 mt-1">
                <div className="col-md-6">
                  <label className="form-label">UAN Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={docs.uanNumber || ""}
                    disabled
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Total Experience (years)</label>
                  <input
                    type="text"
                    className="form-control"
                    value={docs.totalExperience || ""}
                    disabled
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </form>
    </div>
  );
}

export default DocumentsForm;
