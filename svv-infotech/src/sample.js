import React, { useState } from "react";
import PersonalinformationForm from "./PersonalinformationForm";
import DocumentsIdProofs from "./DocumentsIdProofs";
import ExperiencedDocumentsForm from "./ExperiencedDocumentsForm";
import NomineeBankDetails from "./NomineeBankDetails";
import JoiningDocumentsChecklist from "./JoiningDocumentsChecklist";
import OnboardingNavbar from "./OnboardingNavbar";
import OnboardingSuccessModal from "./OnboardingSuccessModal";

const OnboardingFlow = () => {
  const [step, setStep] = useState(1);
  const [experienceType, setExperienceType] = useState("");
  const [formData, setFormData] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  /* ==================================================
     NEXT STEP HANDLER (FINAL SAVE AT STEP 4)
  ================================================== */
  const handleNext = (newData = {}) => {
    setFormData((prev) => {
      const updatedData = { ...prev, ...newData };

      // -------- FINAL STEP → SAVE TO LOCALSTORAGE --------
      if (step === 4) {
        const existing =
          JSON.parse(localStorage.getItem("employeeOnboarding")) || [];

        const finalPayload = {
          id: Date.now(), // unique id
          personalInfo: {
            fullName: updatedData.name,
            appliedFor: updatedData.jobRole,
            email: updatedData.email,
            phone: updatedData.mobile,
          },
          experienceType: updatedData.experienceType || "fresher",
          onboardingData: updatedData, // FULL FORM DATA
          createdAt: new Date().toISOString(),
        };

        localStorage.setItem(
          "employeeOnboarding",
          JSON.stringify([...existing, finalPayload])
        );

        setShowSuccess(true);
        return updatedData;
      }

      return updatedData;
    });

    if (newData.experienceType) {
      setExperienceType(newData.experienceType);
    }

    if (step < 4) {
      setStep((prev) => prev + 1);
    }
  };

  /* ==================================================
     PREVIOUS STEP
  ================================================== */
  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  /* ==================================================
     CLOSE SUCCESS MODAL
  ================================================== */
  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setStep(1);      // restart flow
    setFormData({}); // clear form
    setExperienceType("");
  };

  /* ==================================================
     UI
  ================================================== */
  return (
    <>
      <OnboardingNavbar currentStep={step} />

      <div className="container py-4" style={{ marginTop: "140px" }}>
        <h2 className="text-center mb-4">Employee Onboarding</h2>

        <div className="card shadow p-4">
          {/* STEP 1 – PERSONAL INFO */}
          {step === 1 && (
            <PersonalinformationForm
              onNext={handleNext}
              initialData={formData}
              experienceType={experienceType}
              setExperienceType={setExperienceType}
            />
          )}

          {/* STEP 2 – DOCUMENTS */}
          {step === 2 &&
            (experienceType === "experienced" ? (
              <ExperiencedDocumentsForm
                onNext={handleNext}
                onBack={handlePrev}
                personalData={formData}
                experienceType={experienceType}
              />
            ) : (
              <DocumentsIdProofs
                onNext={handleNext}
                onBack={handlePrev}
                personalData={formData}
              />
            ))}

          {/* STEP 3 – NOMINEE + BANK */}
          {step === 3 && (
            <NomineeBankDetails
              onNext={handleNext}
              onBack={handlePrev}
              initialData={formData}
            />
          )}

          {/* STEP 4 – JOINING CHECKLIST */}
          {step === 4 && (
            <JoiningDocumentsChecklist
              onNext={handleNext}
              onBack={handlePrev}
              initialData={formData}
            />
          )}
        </div>
      </div>

      {/* SUCCESS MODAL */}
      <OnboardingSuccessModal
        show={showSuccess}
        handleClose={handleCloseSuccess}
        name={formData?.name}
      />
    </>
  );
};

export default OnboardingFlow;
