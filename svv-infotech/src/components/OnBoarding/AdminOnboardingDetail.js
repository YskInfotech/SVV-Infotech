import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { useNavigate, NavLink } from "react-router-dom";
import AdminPersonalInformation from "./AdminPersonalInformation";
import BankForm from "./BankForm";
import AdminJoiningDocsChecklist from "./AdminJoiningDocsChecklist";
import DocumentsForm from "./DocumentsForm";

import "../../Styles/AdminOnboardingDetail.css";

const AdminOnboardingDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("personal");
  const [employeeData, setEmployeeData] = useState(null);
  const [experienceType, setExperienceType] = useState("fresher");

  const mockEmployees = {
    1: { id: 1, name: "Rahul Sharma", email: "rahul@example.com", phone: "+91 9876543210", position: "Software Engineer", experience: "Fresher" },
    2: { id: 2, name: "Priya Varma", email: "priya@example.com", phone: "+91 9123456780", position: "HR Manager", experience: "1 Years" },
    3: { id: 3, name: "Amit Singh", email: "amit@example.com", phone: "+91 9988776655", position: "Marketing Executive", experience: "Fresher" },
    4: { id: 4, name: "Neha Kapoor", email: "neha@example.com", phone: "+91 9988223344", position: "UI/UX Designer", experience: "2 Years" },
    5: { id: 5, name: "Arjun Reddy", email: "arjun@example.com", phone: "+91 8899776655", position: "Data Analyst", experience: "Fresher" },
    6: { id: 6, name: "Kavya Nair", email: "kavya@example.com", phone: "+91 7766554433", position: "Project Manager", experience: "Fresher" }
  };

  useEffect(() => {
    const employee = mockEmployees[id] || mockEmployees[1];
    setEmployeeData(employee);

    if (employee.experience === "Fresher") {
      setExperienceType("fresher");
    } else {
      setExperienceType("experienced");
    }
  }, [id]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveTab(sectionId);
    }
  };

  const tabs = [
    { id: "personal", label: "1. Personal Information" },
    { id: "documents", label: "2. Documents & ID Proof" },
    { id: "bank", label: "3. Nominee & Banking Details" },
    { id: "joining", label: "4. Joining CheckList" }
  ];

  if (!employeeData) {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 text-muted">Loading employee details...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="onboarding-detail-container">
    
      <div className="tabs-nav">
        
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`btn tab-btn ${
              activeTab === tab.id ? "btn-primary active" : "btn-outline-primary"
            }`}
            onClick={() => scrollToSection(tab.id)}
          >
            {tab.label}
          </button>
          
        ))}

       
      </div>

      <div className="detail-content mt-4">
        <button className="adminback"  onClick={() => navigate(-1)}>Back</button>
        <AdminPersonalInformation
          id={id}
          activeTab={activeTab}
          experienceType={experienceType}
          setExperienceType={setExperienceType}
        />
        <DocumentsForm
          id={id}
          activeTab={activeTab}
          experienceType={experienceType}
        />
        <BankForm
          id={id}
          activeTab={activeTab}
        />
        <AdminJoiningDocsChecklist
          id={id}
          activeTab={activeTab}
          experienceType={experienceType}
        />
      </div>
    </div>
  );
};

export default AdminOnboardingDetail;
