import React from "react";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { PiSuitcaseSimple } from "react-icons/pi";
import { GrDocumentSound } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import "../../Styles/DashboardHome.css";

function DashboardHome() {
  const navigate = useNavigate();

  const varOcg = [
    {
      icon: <MdOutlinePhoneCallback />,
      title: "QUICK CONTACTS",
      path: "/dashboard/Quickadmin",
      status: [{ count: 15, label: "Quick Contacts", color: "green" }],
    },
    {
      icon: <IoIosPeople />,
      title: "CANDIDATES",
      path: "/dashboard/AdminJobsList/:jobId",
      status: [{ count: 121, label: "Candidates", color: "green" }],
    },
    {
      icon: <PiSuitcaseSimple />,
      title: "JOBS",
      path: "/dashboard/AdminJobsList/:jobId",
      status: [{ count: 50, label: "Jobs", color: "green" }],
    },
    {
      icon: <GrDocumentSound />,
      title: "ON BOARDING",
      path: "/dashboard/Onboardingview",
      status: [{ count: 30, label: "ON Boarding", color: "green" }],
    },
  ];

  return (
    <div className="dashboard-main">
      <div className="dashboard-card-row">
        {varOcg.map((card, index) => (
          <div
            className="dashboard-big-card"
            key={index}
            onClick={() => navigate(card.path)}
            style={{ cursor: "pointer" }}
          >
            <div className="dashboard-big-icon">{card.icon}</div>

            <div className="dashboard-status-boxes">
              {card.status.map((s, i) => (
                <div key={i}>
                  <div className={`dashboard-status-item dashboard-${s.color}`}>
                    <p>{s.label}</p>
                    <span className="dashboard-count-num">{s.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardHome;
