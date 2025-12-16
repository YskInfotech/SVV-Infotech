import React from "react";
import logo from "../assets/logo.png";

const OnboardingNavbar = ({ currentStep }) => {
  const steps = [
    "1. Personal Information",
    "2. Documents & ID Proof",
    "3. Nominee & Banking Details",
    "4. Joining CheckList",
  ];

  return (
    <header className="fixed-top bg-white" style={{ zIndex: 1000 }}>
      <div className="container-fluid border-bottom pt-3 pb-2 position-relative">
        
        {/* Top Header */}
        <div className="d-flex align-items-center justify-content-between">
          <div className="px-2">
            <h1
              className="m-0 fw-semibold"
              style={{ letterSpacing: "0.04em", fontSize: "20px" }}
            >
              SVV
            </h1>
            <p className="m-0 mt-1 text-muted" style={{ fontSize: "11px" }}>
              Joining Kit / Employee Onboarding Forms
            </p>
          </div>
          <img
            src={logo}
            alt="SVV Logo"
            className="position-absolute"
            style={{
              height: 80,
              width: "auto",
              top: "0px",
              right: "8px",
            }}
          />
        </div>

        {/* Steps Navigation */}
        <div className="mt-3 px-2">
          <ul className="nav nav-pills">
            {steps.map((step, index) => (
              <li key={step} className="nav-item me-2">
                <button
                  type="button"
                  className={`nav-link rounded-pill px-4 py-1 ${
                    currentStep === index + 1
                      ? "active"
                      : "bg-light text-dark border-0"
                  }`}
                >
                  {step}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </header>
  );
};

export default OnboardingNavbar;
