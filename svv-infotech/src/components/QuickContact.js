import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/QuickContact.css";
import { FaWhatsapp } from "react-icons/fa";
import contactImg from "../assets/contact-img.jpeg";
import indiaFlag from "../assets/flag.png";
import { useState } from "react";
const QuickContact = () => {
  const [isChecked, setIsChecked] = useState(true); // default enabled
  return (
    <div className="quickcontact-section">
      <h2 className="text-white text-center fw-bold mb-2">QUICK CONTACT</h2>
      <p className="text-center text-white mb-4">
        Build your future with SVV Infotech — where talent meets innovation and growth begins.
      </p>

      <div className="container contact-box shadow">
        <div className="row g-0">

          <div className="col-md-6 contact-img-container">
            <img src={contactImg} alt="Contact Team" className="contact-img" />
          </div>


          <div className="col-md-6 bg-white p-4 rounded-end form-container">
            <form>

              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Full Name" />
              </div>


              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                  <div className="flag-box">
                    <img src={indiaFlag} alt="India" className="flag-icon" />
                    <span className="ms-1">+91</span>
                     <input type="text" className="form-control phone-input flex-grow-1 number-quick" placeholder="Phone Number" />
                      <FaWhatsapp className="icon whatsapp" />
                  <div className="form-check mx-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkMsg"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                    />
                  </div>
                  </div>
              </div>


              <div className="mb-3">
                <label className="form-label">Email Id</label>
                <input type="email" className="form-control" placeholder="Email Id" />
              </div>


              <div className="mb-3">
                <label className="form-label">Leave message</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Leave Message ......."
                ></textarea>
                <small className="text-muted">
                  Special Characters are not allowed e.g. @,#,$,%,^ etc
                </small>
              </div>


              <div className="mb-3">
                <label className="form-label">Captcha</label>
                <div className="row g-2">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control captcha-box text-center fw-bold"
                      value="2 × 98j4"
                      readOnly
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Captcha"
                    />
                  </div>
                </div>
              </div>


              <div className="d-grid mt-4">
                <button className="btn btn-success" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickContact;
