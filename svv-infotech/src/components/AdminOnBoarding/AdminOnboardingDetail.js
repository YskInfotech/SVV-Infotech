import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminPersInformation from "./AdminPersInformation";
import DocumentsForm from "./DocumentsForm";
import BankForm from "./BankForm";
import AdminJoiningDocsChecklist from "./AdminJoiningDocsChecklist";

const AdminOnboardingDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

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
    <div className="onboarding-detail-container">
      {/* ===== TABS ===== */}
      <div className="tabs-nav">
        <button onClick={() =>
          document.getElementById("personal")?.scrollIntoView({ behavior: "smooth" })
        }>
          1. Personal
        </button>

        <button onClick={() =>
          document.getElementById("documents")?.scrollIntoView({ behavior: "smooth" })
        }>
          2. Documents
        </button>

        <button onClick={() =>
          document.getElementById("bank")?.scrollIntoView({ behavior: "smooth" })
        }>
          3. Bank
        </button>

        <button onClick={() =>
          document.getElementById("joining")?.scrollIntoView({ behavior: "smooth" })
        }>
          4. Joining
        </button>
      </div>

      <div className="detail-content mt-4">
        {/* ===== PERSONAL ===== */}
        <AdminPersInformation employeeData={employee.personalInfo} />

        {/* ===== DOCUMENTS ===== */}
        <DocumentsForm
          experienceType={employee.personalInfo?.experienceType}
          employeeDocuments={employee.documents || {}}
        />

        {/* ===== BANK ===== */}
        <BankForm employeeData={employee.bankDetails || {}} />

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
