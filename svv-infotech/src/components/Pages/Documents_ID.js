import React from "react";
import "../../Styles/personalinfo.css";

function Documents_ID() {
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
    
     
    </div>
  );
}

export default Documents_ID;
