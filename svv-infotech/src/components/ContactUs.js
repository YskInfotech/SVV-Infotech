import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../Styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-section" id="contact">
     
      <div className="contact-header">
        <h4 className="contact-title">Contact Us</h4>
      </div>

      
      <div className="contact-content">
        
        <div className="contact-item">
          <div className="contact-item-header">
            <FaMapMarkerAlt className="contact-icon red" />
            <strong>Corporate Office</strong>
          </div>
          <p className="contact-text">
            Flat # 511, 4Th Floor, <br />
            KTC Illumination, The Westin Hotel Rd, <br />
            Vittal Rao Nagar, Madhapur, <br />
            Hyderabad, Telangana 500081.
          </p>
        </div>

       
        <div className="contact-item right">
          <div className="contact-item-header">
            <FaPhoneAlt className="contact-icon green" />
            <strong>Phone Number</strong>
          </div>
          <p className="contact-text">+91-98765 43210</p>

          <div className="contact-item-header">
            <FaEnvelope className="contact-icon blue" />
            <strong>Email ID</strong>
          </div>
          <p className="contact-text">hr@svvinfotech.in</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
