import React from "react";

const AdminPersInformation = ({ employeeData = {} }) => {
  const p = employeeData;

  return (
    <div id="personal" className="container text-start my-4">
      <h5 className="mb-3 text-center">Personal Information</h5>

      <form>
        {/* ROW 1 */}
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input className="form-control" value={p.fullName || ""} readOnly />
          </div>

          <div className="col-md-6">
            <label className="form-label">Date of Birth</label>
            <input className="form-control" value={p.dob || ""} readOnly />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="row g-3 mt-1">
          <div className="col-md-6">
            <label className="form-label">Gender</label>
            <input className="form-control" value={p.gender || ""} readOnly />
          </div>

          <div className="col-md-6">
            <label className="form-label">Marital Status</label>
            <input className="form-control" value={p.maritalStatus || ""} readOnly />
          </div>
        </div>

        {/* ROW 3 */}
        <div className="row g-3 mt-1">
          <div className="col-md-6">
            <label className="form-label">Aadhar Number</label>
            <input className="form-control" value={p.aadharNumber || ""} readOnly />
          </div>

          <div className="col-md-6">
            <label className="form-label">Father Name</label>
            <input className="form-control" value={p.fatherName || ""} readOnly />
          </div>
        </div>

        {/* ROW 4 */}
        <div className="row g-3 mt-1">
          <div className="col-md-6">
            <label className="form-label">Mother Name</label>
            <input className="form-control" value={p.motherName || ""} readOnly />
          </div>

          <div className="col-md-6">
            <label className="form-label">Spouse Name</label>
            <input className="form-control" value={p.spouseName || ""} readOnly />
          </div>
        </div>

        {/* ROW 5 */}
        <div className="row g-3 mt-1">
          <div className="col-md-6">
            <label className="form-label">Communication Pincode</label>
            <input className="form-control" value={p.communicationPin || ""} readOnly />
          </div>

          <div className="col-md-6">
            <label className="form-label">Permanent Pincode</label>
            <input className="form-control" value={p.permanentPin || ""} readOnly />
          </div>
        </div>

        {/* ROW 6 */}
        <div className="row g-3 mt-1">
          <div className="col-md-6">
            <label className="form-label">Mobile Number</label>
            <input className="form-control" value={p.mobile || ""} readOnly />
          </div>

          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input className="form-control" value={p.email || ""} readOnly />
          </div>
        </div>

        {/* ROW 7 */}
        <div className="row g-3 mt-1">
          <div className="col-md-6">
            <label className="form-label">Blood Group</label>
            <input className="form-control" value={p.bloodGroup || ""} readOnly />
          </div>

          <div className="col-md-6">
            <label className="form-label">Experience Type</label>
            <input className="form-control" value={p.experienceType || ""} readOnly />
          </div>
        </div>

        {/* ROW 8 */}
        <div className="row g-3 mt-1">
          <div className="col-12">
            <label className="form-label">Applied Job Role</label>
            <input className="form-control" value={p.appliedFor || ""} readOnly />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminPersInformation;
