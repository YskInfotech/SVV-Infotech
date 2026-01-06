import React, { useEffect, useState } from "react";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { PiSuitcaseSimple } from "react-icons/pi";
import { GrDocumentSound } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import "../../Styles/DashboardHome.css";

function DashboardHome() {
  const navigate = useNavigate();

  /* ================= COUNTS ================= */
  const [quickCount, setQuickCount] = useState(0);
  const [jobCount, setJobCount] = useState(0);
  const [onboardCount, setOnboardCount] = useState(0);

  /* ================= LOAD COUNTS ================= */
  useEffect(() => {
    const loadCounts = () => {
      const contacts =
        JSON.parse(localStorage.getItem("contactRequests")) || [];
      const jobs =
        JSON.parse(localStorage.getItem("jobs")) || [];
      const onboarding =
        JSON.parse(localStorage.getItem("employeeOnboarding")) || [];

      setQuickCount(contacts.length);
      setJobCount(jobs.length);

      // remove duplicate onboarding by id (same logic as your onboarding page)
      const uniqueOnboarding = Array.from(
        new Map(onboarding.map(e => [e.id, e])).values()
      );
      setOnboardCount(uniqueOnboarding.length);
    };

    loadCounts();

    // 🔁 auto refresh when user comes back
    window.addEventListener("focus", loadCounts);
    return () => window.removeEventListener("focus", loadCounts);
  }, []);

  /* ================= DASHBOARD CARDS ================= */
  const varOcg = [
    {
      icon: <MdOutlinePhoneCallback />,
      title: "QUICK CONTACTS",
      path: "/dashboard/Quickadmin",
      count: quickCount,
    },
    {
      icon: <PiSuitcaseSimple />,
      title: "JOBS",
      path: "/dashboard/AdminJobsList",
      count: jobCount,
    },
    {
      icon: <GrDocumentSound />,
      title: "ON BOARDING",
      path: "/dashboard/Onboardingview",
      count: onboardCount,
    },
  ];

  return (
    <div className="dashboard-main">
      <div className="dashboard-card-row">
        {varOcg.map((card, index) => (
          <div
            key={index}
            className="dashboard-big-card"
            onClick={() => navigate(card.path)}
          >
            <div className="dashboard-big-icon">{card.icon}</div>

            <h6 className="dashboard-title">{card.title}</h6>

            <div className="dashboard-status-item dashboard-green">
              <span className="dashboard-count-num">{card.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardHome;
