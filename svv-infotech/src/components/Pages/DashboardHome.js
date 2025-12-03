import React from "react";
import { FaUserTie, FaUserGraduate, FaUserShield } from "react-icons/fa";

import { MdOutlinePhoneCallback } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { PiSuitcaseSimple } from "react-icons/pi";

import "../../Styles/DashboardHome.css"

import "../../Styles/DashboardHome.css";


function DashboardHome() {
  const cards = [
    {
      icon: <MdOutlinePhoneCallback />,
      title: "LIVE JOB POSTS",
      status: [{ count: 15, label: "Quick Contacts", color: "green" }],
    },
    {
      icon: <IoIosPeople />,
      title: "PREVIOUS JOBS",
      status: [
        { count: 121, label: "Candidates", color: "green" },
      
      ],
    },
    {
      icon: <PiSuitcaseSimple />,
      title: "JOB APPLICATIONS",
      status: [
        { count: 50, label: "Jobs", color: "green" },
       
      ],
    },
  ];

  return (
    <div className="hrdh-dashboard-main">
      <div className="hrdh-card-row">
        {cards.map((card, index) => (
          <div className="hrdh-big-card" key={index}>
            <div className="hrdh-big-icon">{card.icon}</div>
            

            <div className="hrdh-status-boxes">
              {card.status.map((s, i) => (
                <div
                  
                  key={i}>
                    <div className={`hrdh-status-item hrdh-${s.color}`}>
                        <p>{s.label}</p> 
                  <span className="count-num">{s.count}</span>
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
