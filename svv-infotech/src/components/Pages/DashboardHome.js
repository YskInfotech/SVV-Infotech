import React from "react";
import { FaUserTie, FaUserGraduate, FaUserShield,FaGlobe } from "react-icons/fa";
import { MdOutlineCardTravel,MdQuickreply } from "react-icons/md";
import { IoNewspaperSharp } from "react-icons/io5";
import { GiTeamIdea } from "react-icons/gi";
import { FaHeadSideVirus } from "react-icons/fa6";
import "../../Styles/DashboardHome.css";

function DashboardHome() {
  const sections = [
    {
      title: "Registration",
      cards: [
        { icon: <FaUserTie />, label: "Quick Contacts" },
        { icon: <FaUserGraduate />, label: "Candidates" },
        { icon: <FaUserShield />, label: "Jobs" },
      ],
    },
   
  ];

  return (
    <div className="dashboard-home">
      {sections.map((section, index) => (
        <div key={index} className="dashboard-section ">
          <h2 className="mt-3">{section.title}</h2>
          <div className="card-grid">
            {section.cards.map((card, i) => (
              <div className="dashboard-card" key={i}>
                <div className="icon">{card.icon}</div>
                <h3>{card.label}</h3>
                <div className="status-card">
                  <div className="approved">
                    <h4>50</h4>
                    
                  </div>
                
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardHome;
