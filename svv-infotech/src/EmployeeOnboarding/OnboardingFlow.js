import React, { useState } from "react";
import OnboardingNavbar from "./OnboardingNavbar";
import PersonalInformationForm from "./PersonalinformationForm";
import DocumentsIdProofForm from "./DocumentsIdProofs";
import ExperiencedDocumentsForm from "./ExperiencedDocumentsForm";
import NomineeFamilyBankForm from "./NomineeBankDetails";
import JoiningDocumentsChecklist from "./JoiningDocumentsChecklist";

const OnboardingFlow = () => {
  const [step, setStep] = useState(1);
  const [experienceType, setExperienceType] = useState("fresher");

  const goNext = () => setStep((s) => Math.min(4, s + 1));
  const goBack = () => setStep((s) => Math.max(1, s - 1));

  return (
    <>
      <OnboardingNavbar currentStep={step} />

      <div style={{ paddingTop: "130px" }}>
        {step === 1 && (
          <PersonalInformationForm
            experienceType={experienceType}
            setExperienceType={setExperienceType}
            onNext={(type) => {
              setExperienceType(type);
              setStep(2);
            }}
          />
        )}

        {step === 2 &&
          (experienceType === "experienced" ? (
            <ExperiencedDocumentsForm onBack={goBack} onNext={goNext} />
          ) : (
            <DocumentsIdProofForm onBack={goBack} onNext={goNext} />
          ))}

        {step === 3 && (
          <NomineeFamilyBankForm onBack={goBack} onNext={goNext} />
        )}

        {step === 4 && (
          <JoiningDocumentsChecklist
            onBack={goBack}
            isFresher={experienceType === "fresher"}
          />
        )}
      </div>
    </>
  );
};

export default OnboardingFlow;
