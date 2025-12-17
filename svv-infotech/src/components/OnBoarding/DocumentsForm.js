import React, { useState } from "react";

function DocumentsForm({ experienceType, id, activeTab, onBack, onComplete }) {
  const [formData, setFormData] = useState({
    aadhar: null,
    pan: null,
    qualification: null,
    passport: null,
    bank: null,
    internship: null,
    companyName: "",
    jobRole: "",
    doj: "",
    doe: "",
    paySlips: null,
    offerLetter: null,
    hikeLetter: null,
    relievingLetter: null,
    experienceLetter: null,
    esiNumber: "",
    uanNumber: "",
    totalExperience: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files ? files[0] : value }));
  };


  const isExperienced = experienceType === "experienced";

  return (
    <div id="documents" className="container text-start my-4">
      <h5 className="mb-3 text-center">
        Documents & ID Proof
      </h5>

      <form >
        <div className="">
  
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">
                Aadhar Card Photo{!isExperienced && <span className="text-danger">*</span>}
              </label>
              <input
                type="file"
                className="form-control"
                name="aadhar"
                onChange={handleChange}
                accept="image/*,.pdf"
                required={!isExperienced}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Pan Card Photo{!isExperienced && <span className="text-danger">*</span>}
              </label>
              <input
                type="file"
                className="form-control"
                name="pan"
                onChange={handleChange}
                accept="image/*,.pdf"
                required={!isExperienced}
              />
            </div>
          </div>

          <div className="row g-3 mt-1">
            <div className="col-md-6">
              <label className="form-label">
                Qualification Proof{!isExperienced && <span className="text-danger">*</span>}
              </label>
              <input
                type="file"
                className="form-control"
                name="qualification"
                onChange={handleChange}
                accept=".pdf"
                required={!isExperienced}
              />
              {!isExperienced && (
                <small className="form-text text-muted">
                  Upload all college proofs (single PDF | Max 10MB)
                </small>
              )}
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Passport Size Photo{!isExperienced && <span className="text-danger">*</span>}
              </label>
              <input
                type="file"
                className="form-control"
                name="passport"
                onChange={handleChange}
                accept="image/*"
                required={!isExperienced}
              />
            </div>
          </div>

          <div className="row g-3 mt-1">
            <div className="col-md-6">
              <label className="form-label">
                Bank Account Proof{!isExperienced && <span className="text-danger">*</span>}
              </label>
              <input
                type="file"
                className="form-control"
                name="bank"
                onChange={handleChange}
                accept="image/*,.pdf"
                required={!isExperienced}
              />
            </div>
             {!isExperienced && (
            <div className="col-md-6">
              <label className="form-label">
                Any Internship Proof <span className="text-danger">*</span>
              </label>
              <input
                type="file"
                className="form-control"
                name="internship"
                onChange={handleChange}
                accept="image/*,.pdf"
                required
              />
            </div>
          )}
          </div>

          {isExperienced && (
            <>
              <hr className="my-4" />
              <h6 className="mb-3 text-primary">Previous Employment Details</h6>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">
                    Company Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Job Role<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="jobRole"
                    value={formData.jobRole}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row g-3 mt-1">
                <div className="col-md-6">
                  <label className="form-label">
                    Date Of Joining<span className="text-danger">*</span>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="doj"
                    value={formData.doj}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Date Of Exit<span className="text-danger">*</span>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="doe"
                    value={formData.doe}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row g-3 mt-1">
                <div className="col-md-6">
                  <label className="form-label">
                    Last 3 Months Pay Slips<span className="text-danger">*</span>
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    name="paySlips"
                    onChange={handleChange}
                    accept=".pdf"
                    required
                  />
                  <small className="form-text text-muted">
                    Upload combined 3 months pay slips PDF (Max 10MB)
                  </small>
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Offer Letter<span className="text-danger">*</span>
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    name="offerLetter"
                    onChange={handleChange}
                    accept="image/*,.pdf"
                    required
                  />
                </div>
              </div>

              <div className="row g-3 mt-1">
                <div className="col-md-6">
                  <label className="form-label">Hike Letter</label>
                  <input
                    type="file"
                    className="form-control"
                    name="hikeLetter"
                    onChange={handleChange}
                    accept="image/*,.pdf"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Relieving Letter</label>
                  <input
                    type="file"
                    className="form-control"
                    name="relievingLetter"
                    onChange={handleChange}
                    accept="image/*,.pdf"
                  />
                </div>
              </div>

              <div className="row g-3 mt-1">
                <div className="col-md-6">
                  <label className="form-label">Experience Letter</label>
                  <input
                    type="file"
                    className="form-control"
                    name="experienceLetter"
                    onChange={handleChange}
                    accept="image/*,.pdf"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">ESI Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="esiNumber"
                    value={formData.esiNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row g-3 mt-1">
                <div className="col-md-6">
                  <label className="form-label">UAN Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="uanNumber"
                    value={formData.uanNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Total Experience (years)<span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="totalExperience"
                    value={formData.totalExperience}
                    onChange={handleChange}
                    min="0"
                    step="0.1"
                    required
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