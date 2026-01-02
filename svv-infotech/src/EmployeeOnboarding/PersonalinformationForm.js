import React, { useState, useEffect } from "react";

const PersonalinformationForm = ({
  experienceType,
  setExperienceType,
  onNext,
  initialData = {},
}) => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    maritalStatus: "",
    gender: "",
    aadhar: "",
    fatherName: "",
    motherName: "",
    spouseName: "",
    communicationPin: "",
    permanentPin: "",
    contactLL: "",
    mobile: "",
    email: "",
    bloodGroup: "",
    emergency1: "",
    emergency2: "",
    education: "",
    drivingLicense: "",
    vehicleNumber: "",
    jobRole: "",
  });

  // Prefill when navigating back
  useEffect(() => {
    if (initialData && Object.keys(initialData).length) {
      setFormData((prev) => ({ ...prev, ...initialData }));
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (!experienceType) {
      alert("Please select Experience Type (Fresher / Experienced)");
      return;
    }
    onNext({ ...formData, experienceType });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      dob: "",
      maritalStatus: "",
      gender: "",
      aadhar: "",
      fatherName: "",
      motherName: "",
      spouseName: "",
      communicationPin: "",
      permanentPin: "",
      contactLL: "",
      mobile: "",
      email: "",
      bloodGroup: "",
      emergency1: "",
      emergency2: "",
      education: "",
      drivingLicense: "",
      vehicleNumber: "",
      jobRole: "",
    });
    setExperienceType("");
  };

  return (
    <div className="container text-start my-4">
      <h5 className="mb-3 text-center fw-bold">Personal Information Form</h5>

      {/* Row 1 */}
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Name (Mr./Ms.) *</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Date of Birth *</label>
          <input type="date" className="form-control" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>
      </div>

      {/* Row 2 */}
      <div className="row g-3 mt-1">
        <div className="col-md-6">
          <label className="form-label">Marital Status *</label>
          <select className="form-select" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
            <option value="">Select</option>
            <option>Single</option>
            <option>Married</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Gender *</label>
          <select className="form-select" name="gender" value={formData.gender} onChange={handleChange}>
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
          <input type="text" className="form-control" name="aadhar" value={formData.aadhar} onChange={handleChange} maxLength={12} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Father Name *</label>
          <input type="text" className="form-control" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
        </div>
      </div>

      {/* Row 4 */}
      <div className="row g-3 mt-1">
        <div className="col-md-6">
          <label className="form-label">Mother Name</label>
          <input type="text" className="form-control" name="motherName" value={formData.motherName} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Spouse Name</label>
          <input type="text" className="form-control" name="spouseName" value={formData.spouseName} onChange={handleChange} />
        </div>
      </div>

      {/* Row 5 */}
      <div className="row g-3 mt-1">
        <div className="col-md-6">
          <label className="form-label">Communication Address – Pin *</label>
          <input type="text" className="form-control" name="communicationPin" value={formData.communicationPin} onChange={handleChange} maxLength={6} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Permanent Address – Pin *</label>
          <input type="text" className="form-control" name="permanentPin" value={formData.permanentPin} onChange={handleChange} maxLength={6} />
        </div>
      </div>

      {/* Row 6 */}
      <div className="row g-3 mt-1">
        <div className="col-md-6">
          <label className="form-label">Contact Number (LL)</label>
          <div className="input-group">
            <span className="input-group-text">+91</span>
            <input type="tel" className="form-control" name="contactLL" value={formData.contactLL} onChange={handleChange} maxLength={10} />
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label">Mobile Number *</label>
          <div className="input-group">
            <span className="input-group-text">+91</span>
            <input type="tel" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} maxLength={10} required />
          </div>
        </div>
      </div>

      {/* Row 7 */}
      <div className="row g-3 mt-1">
        <div className="col-md-6">
          <label className="form-label">Email ID *</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Blood Group</label>
          <select className="form-select" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
            <option value="">Select</option>
            <option>A+</option><option>A-</option><option>B+</option><option>B-</option>
            <option>O+</option><option>O-</option><option>AB+</option><option>AB-</option>
          </select>
        </div>
      </div>

      {/* Row 8 */}
      <div className="row g-3 mt-1">
        <div className="col-md-6">
          <label className="form-label">Emergency Contact – 1 *</label>
          <div className="input-group">
            <span className="input-group-text">+91</span>
            <input type="tel" className="form-control" name="emergency1" value={formData.emergency1} onChange={handleChange} maxLength={10} />
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label">Emergency Contact – 2</label>
          <div className="input-group">
            <span className="input-group-text">+91</span>
            <input type="tel" className="form-control" name="emergency2" value={formData.emergency2} onChange={handleChange} maxLength={10} />
          </div>
          
        </div>
      </div>

      {/* Row 9 */}
      <div className="row g-3 mt-1">
        <div className="col-12">
          <label className="form-label">Education Qualification *</label>
          <input type="text" className="form-control" name="education" value={formData.education} onChange={handleChange} />
        </div>
      </div>

      {/* Row 10 */}
      <div className="row g-3 mt-2">
        <div className="col-md-6">
          <label className="form-label">Driving License</label>
          <div className="form-check">
            <input type="radio" className="form-check-input" name="drivingLicense" value="Yes" checked={formData.drivingLicense === "Yes"} onChange={handleChange} />
            <label className="form-check-label">Yes</label>
          </div>
          <div className="form-check">
            <input type="radio" className="form-check-input" name="drivingLicense" value="No" checked={formData.drivingLicense === "No"} onChange={handleChange} />
            <label className="form-check-label">No</label>
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label">Vehicle Registration Number</label>
          <input type="text" className="form-control" name="vehicleNumber" value={formData.vehicleNumber} onChange={handleChange} />
        </div>
      </div>

      {/* Row 11 */}
      <div className="row g-3 mt-2">
        <div className="col-md-6">
          <label className="form-label">Applied Job Role</label>
          <input type="text" className="form-control" name="jobRole" value={formData.jobRole} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label d-block">Experience Type *</label>
          <button type="button" className={`btn btn-sm ${experienceType === "fresher" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setExperienceType("fresher")}>Fresher</button>
          <button type="button" className={`btn btn-sm ms-2 ${experienceType === "experienced" ? "btn-primary" : "btn-outline-secondary"}`} onClick={() => setExperienceType("experienced")}>Experienced</button>
        </div>
      </div>

      {/* Actions */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <button type="button" className="btn btn-outline-secondary" onClick={resetForm}>Reset Form</button>
        <button type="button" className="btn btn-primary" onClick={handleNext}>Next: Documents & ID Proof</button>
      </div>
    </div>
  );
};

export default PersonalinformationForm;
