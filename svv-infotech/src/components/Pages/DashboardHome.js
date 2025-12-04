import React from "react";
import { FaUserTie, FaUserGraduate, FaUserShield } from "react-icons/fa";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { PiSuitcaseSimple } from "react-icons/pi";
  import { GrDocumentSound } from "react-icons/gr";   

import "../../Styles/DashboardHome.css";

// __define-ocg__: dashboard cards configuration
function DashboardHome() {
  const varOcg = [
    {
      icon: <MdOutlinePhoneCallback />,
      title: "LIVE JOB POSTS",
      status: [{ count: 15, label: "Quick Contacts", color: "green" }],
    },
    {
      icon: <IoIosPeople />,
      title: "PREVIOUS JOBS",
      status: [{ count: 121, label: "Candidates", color: "green" }],
    },
    {
      icon: <PiSuitcaseSimple />,
      title: "JOB APPLICATIONS",
      status: [{ count: 50, label: "Jobs", color: "green" }],
    },
     {
          icon: <GrDocumentSound />,
          title: "JOB APPLICATIONS",
          status: [{ count: 30, label: "ON Boarding", color: "green" }],
        },
  ];

  return (
    <div className="dashboard-main">
      <div className="dashboard-card-row">
        {varOcg.map((card, index) => (
          <div className="dashboard-big-card" key={index}>
            <div className="dashboard-big-icon">{card.icon}</div>

            {/* If you want to show the title, uncomment this */}
            {/* <h3 className="dashboard-card-title">{card.title}</h3> */}

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
