import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

import footerLOGO from "../assets/footerlogo.png";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row align-items-start">
          
          <div className="col-lg-5 col-md-12 mb-4 footer-left">
            <div className="footer-left-content d-flex align-items-center text-md-start text-center flex-md-row flex-column">
              <img src={footerLOGO} alt="SVV Logo" className="footer-logo" />
              <div className="footer-text-block">
                <p className="footer-subtitle mb-2">
                  Empowering Digital <br /> Solutions
                </p>
                <div className="footer-social-icons">
                  <a href="#" className="facebook">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" className="linkedin">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="youtube">
                    <FaYoutube />
                  </a>
                  <a href="#" className="instagram">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-lg-3 col-md-6 mb-4 text-md-start text-center">
            <h6 className="footer-heading">Quick links</h6>
            <ul className="footer-links">
              <li>
                <FaHome className="footer-link-icon" /> Home
              </li>
              <li>
                <FaInfoCircle className="footer-link-icon" /> About Us
              </li>
              <li>
                <FaCogs className="footer-link-icon" /> Our Services
              </li>
              <li>
                <FaBriefcase className="footer-link-icon" /> Careers
              </li>
              <li>
                <FaEnvelope className="footer-link-icon" /> Contact us
              </li>
            </ul>
          </div>

          
          <div className="col-lg-4 col-md-6 mb-4 text-md-start text-center">
            <h6 className="footer-heading">Our Services</h6>
            <ul className="footer-services">
              <li className="footer-service-title">
                IT Services
              </li>
              <li>Product-Based Solutions</li>
              <li>Service-Based Solutions</li>
              <li className="footer-service-title">Staffing Solutions</li>
              <li>IT Staffing</li>
              <li>Non-IT Staffing</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
