import React from "react";
import "../../Styles/personalinfo.css";
import { MdOutlineDoubleArrow, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";


function Documents_ID() {
  const navigate = useNavigate()
  return (
    <div className="pi-container">
      <h4 className="pi-section-title">Documents & ID Proof</h4>
      <br />

      <div className="pi-grid-2">
        <label className="pi-label">
          Aadhar Card Photo
          <input type="file" required className="pi-input" />
        </label>

        <label className="pi-label">
          Pan Card Photo
          <input type="file" required className="pi-input" />
        </label>
      </div>




      <div className="pi-grid-2">
        <label className="pi-label">
          Qualification Proof
          <input type="file" required className="pi-input" />
        </label>

        <label className="pi-label">
          Passport Photo
          <input type="file" required className="pi-input" />
        </label>
        <label className="pi-label">
          Bank Account Proof
          <input type="file" required className="pi-input" />
        </label>
        <label className="pi-label">
          Any Internship Proof
          <input type="file" required className="pi-input" />
        </label>

      </div>
      <div className="d-flex d-flex justify-content-between">
        <div>
          <button className="bc-button" onClick={() => { navigate("/dashboard/Onboardinglanding/") }}><MdKeyboardDoubleArrowLeft className="bc-ic" />Back</button>
        </div>
        <div>
          <button className="next-button" onClick={() => { navigate("/dashboard/Onboardinglanding/Nomineebankdetails") }}>Next<MdOutlineDoubleArrow /></button>
        </div>
      </div>

    </div>
  );
}

export default Documents_ID;
