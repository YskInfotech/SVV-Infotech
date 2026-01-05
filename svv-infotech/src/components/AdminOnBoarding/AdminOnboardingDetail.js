import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminPersInformation from "./AdminPersInformation";
import DocumentsForm from "./DocumentsForm";
import BankForm from "./BankForm";
import "../../Styles/Onboardingview.css";
import AdminJoiningDocsChecklist from "./AdminJoiningDocsChecklist";

const AdminOnboardingDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [activeTab, setActiveTab] = useState("personal");



  /* ===============================
     LOAD EMPLOYEE FROM LOCALSTORAGE
  =============================== */
  useEffect(() => {
    const storedEmployees =
      JSON.parse(localStorage.getItem("employeeOnboarding")) || [];

    const matchedEmployee = storedEmployees.find(
      (emp) => String(emp.id) === String(id)
    );

    setEmployee(matchedEmployee || null);
  }, [id]);

  /* ===============================
     NO EMPLOYEE FOUND
  =============================== */
  if (!employee) {
    return (
      <div className="text-center mt-5">
        <h5>Employee not found</h5>
      </div>
    );
  }

  /* ===============================
     RENDER
  =============================== */
  return (
    <div className="onboarding-detail-container mt-5">
      {/* ===== TABS ===== */}
      <div className="tabs-nav">
        <button
          className={activeTab === "personal" ? "active" : ""}
          onClick={() => {
            setActiveTab("personal");
            document
              .getElementById("personal")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          1. Personal
        </button>

        <button
          className={activeTab === "documents" ? "active" : ""}
          onClick={() => {
            setActiveTab("documents");
            document
              .getElementById("documents")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          2. Documents
        </button>

        <button
          className={activeTab === "bank" ? "active" : ""}
          onClick={() => {
            setActiveTab("bank");
            document
              .getElementById("bank")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          3. Bank
        </button>

        <button
          className={activeTab === "joining" ? "active" : ""}
          onClick={() => {
            setActiveTab("joining");
            document
              .getElementById("joining")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          4. Joining
        </button>
      </div>


      <div className="detail-content mt-4">
        {/* ===== PERSONAL ===== */}
        <AdminPersInformation employeeData={employee.personalInfo} />

        {/* ===== DOCUMENTS ===== */}
        <DocumentsForm
          experienceType={employee.personalInfo?.experienceType}
          employeeDocuments={employee.documents}
        />



        <BankForm
          bankDetails={employee.bankDetails}
          nominees={employee.nominees}
        />


        {/* ===== JOINING ===== */}
        <AdminJoiningDocsChecklist
          experienceType={employee.personalInfo?.experienceType}
          checklist={employee.joiningChecklist || []}
        />
      </div>
    </div>
  );
};

export default AdminOnboardingDetail;
