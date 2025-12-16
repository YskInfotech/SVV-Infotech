import React from "react";

const PersonalInformationForm = ({ experienceType, setExperienceType, onNext }) => {
  return (
    <div className="container text-start my-4">
      <h5 className="mb-3 text-center">Personal Information Form</h5>
      <div className="">
        {/* Row 1 */}
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">
              Name (Mr./Ms.)<span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Date Of Birth<span className="text-danger">*</span>
            </label>
            <input type="date" className="form-control" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="row g-3 mt-1">
          <div className="col-md-6">
            <label className="form-label">
              Marital Status<span className="text-danger">*</span>
            </label>
            <select className="form-select">
              <option value="">Select</option>
              <option>Single</option>
              <option>Married</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Gender<span className="text-danger">*</span>
            </label>
            <select className="form-select">
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row g-3 mt-1">
          <div className="col-md-6">
            <label className="form-label">Aadhar Card Number</label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Father Name<span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>

        {/* Row 4 */}
        <div className="row g-3 mt-1">
          <div className="col-md-6">
            <label className="form-label">Mother Name</label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Spouse Name</label>
            <input type="text" className="form-control" />
          </div>
        </div>

        {/* Row 5 */}
        <div className="row g-3 mt-1">
          <div className="col-md-6">
            <label className="form-label">
              Communication Address-Pin Code<span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Permanent Address-Pin Code<span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>

        {/* Row 6 */}
        <div className="row g-3 mt-1">
          <div className="col-md-6">
            <label className="form-label">
              Contact Number (LL)<span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text">+91</span>
              <input type="tel" className="form-control" />
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Mobile Number (Ps)<span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text">+91</span>
              <input type="tel" className="form-control" />
            </div>
          </div>
        </div>

        {/* Row 7 */}
        <div className="row g-3 mt-1">
          <div className="col-md-6">
            <label className="form-label">
              Email ID<span className="text-danger">*</span>
            </label>
            <input type="email" className="form-control" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Blood Group</label>
            <select className="form-select">
              <option value="">Select</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>O+</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
          </div>
        </div>

        {/* Row 8 */}
        <div className="row g-3 mt-1">
          <div className="col-md-6">
            <label className="form-label">
              Emergency Contact Number 1<span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text">+91</span>
              <input type="tel" className="form-control" />
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">Emergency Contact Number 2</label>
            <div className="input-group">
              <span className="input-group-text">+91</span>
              <input type="tel" className="form-control" />
            </div>
          </div>
        </div>

        {/* Row 9 */}
        <div className="row g-3 mt-1">
          <div className="col-12">
            <label className="form-label">
              Education Qualification<span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>

        {/* Row 10 */}
        <div className="row g-3 mt-2">
          <div className="col-md-6">
            <label className="form-label">Driving License No</label>
            <div className="d-flex align-items-center gap-3">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="dl" id="dlYes" />
                <label className="form-check-label" htmlFor="dlYes">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="dl" id="dlNo" />
                <label className="form-check-label" htmlFor="dlNo">
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">Vehicle Registration Number</label>
            <input type="text" className="form-control" />
          </div>
        </div>

        {/* Row 11 */}
        <div className="row g-3 mt-1">
          <div className="col-md-6">
            <label className="form-label">Applied for Job Role</label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-md-6">
            <label className="form-label d-block">Experience Type</label>
            <div className="d-flex gap-2">
              <button
                type="button"
                className={`btn btn-sm ${experienceType === "fresher"
                  ? "btn-primary"
                  : "btn-outline-primary"
                  }`}
                onClick={() => setExperienceType("fresher")}
              >
                Fresher
              </button>
              <button
                type="button"
                className={`btn btn-sm ${experienceType === "experienced"
                  ? "btn-primary"
                  : "btn-outline-secondary"
                  }`}
                onClick={() => setExperienceType("experienced")}
              >
                Experienced
              </button>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <button type="button" className="btn btn-outline-secondary">
            Reset Form
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onNext(experienceType)}
          >
            Next: Documents &amp; ID Proof
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationForm;