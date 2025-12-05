import React from "react";
import "../../Styles/personalinfo.css";

function PersonalInformation() {
  return (
    <div className="pi-container">
      <h4 className="pi-section-title">Personal Information Form</h4>
      <br />

      <div className="pi-grid-2">
        <label className="pi-label">
          Name (Mr./Ms.)
          <input type="text" required className="pi-input" />
        </label>

        <label className="pi-label">
          Email ID
          <input type="email" required className="pi-input" />
        </label>
      </div>

      <div className="pi-grid-3">
        <label className="pi-label">
          Date of Birth
          <input type="date" required className="pi-input" />
        </label>

        <label className="pi-label">
          Marital Status
          <select required className="pi-input">
            <option value="">Select</option>
            <option>Single</option>
            <option>Married</option>
            <option>Divorced</option>
          </select>
        </label>

        <label className="pi-label">
          Gender
          <select required className="pi-input">
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </label>
      </div>


      
        <div className="pi-grid-2">
          <label className="pi-label">
            Aadhar Number
            <input type="text" required className="pi-input" />
          </label>

          <label className="pi-label">
            Father's Name
            <input type="email" required className="pi-input" />
          </label>
           <label className="pi-label">
            Mother's Name
            <input type="text" required className="pi-input" />
          </label>
           <label className="pi-label">
            Blodd Group
            <input type="text" required className="pi-input" />
          </label>
           <label className="pi-label">
            Communication Address-Pincode
            <input type="text" required className="pi-input" />
          </label>
           <label className="pi-label">
            Permanent Address Pincode
            <input type="text" required className="pi-input" />
          </label> <label className="pi-label">
            Contact Number(LL)
            <input type="text" required className="pi-input" />
          </label>
           <label className="pi-label">
            Mobile Number(PL)
            <input type="text" required className="pi-input" />
          </label> 
          <label className="pi-label">
            Emergency Contact Number 1
            <input type="text" required className="pi-input" />
          </label>
           <label className="pi-label">
            Emergency Contact Number 2
            <input type="text" required className="pi-input" />
          </label>
           <label className="pi-label">
            Education Qualification
            <input type="text" required className="pi-input" />
          </label>
          <div className="pi-radio-group">
  <span className="pi-label">Driving License</span>

  <label className="pi-radio-option">
    <input type="radio" name="drivingLicense" value="Yes" /> Yes
  </label>

  <label className="pi-radio-option">
    <input type="radio" name="drivingLicense" value="No" /> No
  </label>
</div>

           <label className="pi-label">
            Vehicle Registration Number
            <input type="text" required className="pi-input" />
          </label>
           <label className="pi-label">
            Applied for Job Role
            <input type="text" required className="pi-input" />
          </label>
           <label className="pi-label">
            Experience Type 
            <input type="text" required className="pi-input" />
          </label>
        </div>
    
     
    </div>
  );
}

export default PersonalInformation;
