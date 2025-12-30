import React from "react";
import { Modal, Button } from "react-bootstrap";
import companyLogo from "../../assets/logo.png";

import "../../Styles/Onboardingsuccess.css";

const OnboardingSuccess = ({ show, handleClose, name }) => {
  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static">
      <div className="text-center p-4">

        {/* Company Logo */}
        <img 
          src={companyLogo} 
          alt="VIFAST Technologies" 
          style={{ width: "120px", marginBottom: "20px" }}
        />

        {/* Success Heading */}
        <h3 className="fw-bold mb-2">🎉 Onboarding Successful!</h3>

        {/* Personalized Greeting */}
        <h5 className="text-success fw-semibold">
          Welcome, {name} 👋
        </h5>

        {/* Message */}
        <p className="mt-2">
          Thank you for submitting your onboarding details.  
          We are excited to welcome you to <b>SVV</b>.
        </p>

        <Button 
          variant="primary" 
          onClick={handleClose}
          className="mt-3 px-4"
        >
          Continue
        </Button>
      </div>
    </Modal>
  );
};

export default OnboardingSuccess;
