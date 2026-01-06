import React, { useState } from "react";
import OnboardingNavbar from "./OnboardingNavbar";
import PersonalInformationForm from "../EmployeeOnboarding/PersonalinformationForm";
import DocumentsIdProofs from "../EmployeeOnboarding/DocumentsIdProofs";
import ExperiencedDocumentsForm from "../EmployeeOnboarding/ExperiencedDocumentsForm";
import NomineeBankDetails from "../EmployeeOnboarding/NomineeBankDetails";
import JoiningDocumentsChecklist from "../EmployeeOnboarding/JoiningDocumentsChecklist";
import OnboardingSuccess from "../../src/components/Pages/OnboardingSuccess";

const OnboardingFlow = () => {
  const [step, setStep] = useState(1);
  const [experienceType, setExperienceType] = useState("");
  const [formData, setFormData] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  /* ================= SAVE FINAL DATA ================= */
  const saveToLocalStorage = (data) => {
    const existing =
      JSON.parse(localStorage.getItem("employeeOnboarding")) || [];

    const finalPayload = {
      id: Date.now(),

      personalInfo: {
        fullName: data.name,
        dob: data.dob,
        gender: data.gender,
        maritalStatus: data.maritalStatus,
        aadharNumber: data.aadhar,
        fatherName: data.fatherName,
        motherName: data.motherName,
        spouseName: data.spouseName,
        communicationPin: data.communicationPin,
        permanentPin: data.permanentPin,
        contactLL:data.contactLL,
        emergency1:data.emergency1,
        emergency2:data.emergency2,
        mobile: data.mobile,
        education:data.education,
        vehicleNumber:data.vehicleNumber,
        drivingLicense:data.drivingLicense,
        email: data.email,
        bloodGroup: data.bloodGroup,
        appliedFor: data.jobRole,

        // ✅ SINGLE SOURCE OF TRUTH
        experienceType: experienceType,
      },

      // ✅ DOCUMENTS
      documents:
        experienceType === "experienced"
          ? data.experienceDocuments || {}
          : data.fresherDocuments || {},

bankDetails: formData.bank ?? data.bank ?? {},

nominees: {
  pf: formData.pfNominees ?? data.pfNominees ?? [],
  esi: formData.esiNominees ?? data.esiNominees ?? [],
  accident: formData.accidentNominees ?? data.accidentNominees ?? [],
  family: formData.familyMembers ?? data.familyMembers ?? [],
},


      joiningChecklist: data.joiningChecklist || [],
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "employeeOnboarding",
      JSON.stringify([...existing, finalPayload])
    );
  };

  /* ================= NEXT ================= */
  const handleNext = (newData = {}) => {
    const updatedData = { ...formData, ...newData };

    if (step === 4) {
      saveToLocalStorage(updatedData);
      setShowSuccess(true);
      return;
    }

    setFormData(updatedData);

    if (newData.experienceType) {
      setExperienceType(newData.experienceType);
    }

    setStep((prev) => prev + 1);
  };

  const handlePrev = () => setStep((prev) => prev - 1);

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setStep(1);
    setFormData({});
    setExperienceType("");
  };

  return (
    <>
      <OnboardingNavbar currentStep={step} />

      <div className="container py-4" style={{ marginTop: "140px" }}>
        <h2 className="text-center mb-4">Employee Onboarding</h2>

        <div className="card shadow p-4">
          {step === 1 && (
            <PersonalInformationForm
              onNext={handleNext}
              initialData={formData}
              experienceType={experienceType}
              setExperienceType={setExperienceType}
            />
          )}

          {step === 2 && experienceType === "experienced" && (
            <ExperiencedDocumentsForm
              onNext={handleNext}
              onBack={handlePrev}
              personalData={formData}
              experienceType={experienceType}
            />
          )}

          {step === 2 && experienceType === "fresher" && (
            <DocumentsIdProofs
              onNext={handleNext}
              onBack={handlePrev}
              personalData={formData}
            />
          )}

          {step === 3 && (
            <NomineeBankDetails
              onNext={handleNext}
              onBack={handlePrev}
              initialData={formData}
            />
          )}

          {step === 4 && (
            <JoiningDocumentsChecklist
              onNext={handleNext}
              onBack={handlePrev}
              initialData={formData}
            />
          )}
        </div>
      </div>

      <OnboardingSuccess
        show={showSuccess}
        handleClose={handleCloseSuccess}
        name={formData?.name}
      />
    </>
  );
};

export default OnboardingFlow;
