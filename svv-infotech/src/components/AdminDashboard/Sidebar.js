import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../../Styles/Sidebar.css"
import { IoMdDocument } from "react-icons/io";

import {
  FaHome,
  FaUserTie,
  FaBriefcase,
  FaBars,
  FaChevronDown,
  FaChevronUp,
  FaUserCircle,
} from "react-icons/fa";



function Sidebar() {
  
  const navigate = useNavigate();

  const [openMenus, setOpenMenus] = useState({});
  
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className={`admin-sidebar ${isCollapsed ? "collapsed" : ""}`}>

      <div className="admin-sidebar-header">
        {/* <h3 className="admin-sidebar-logo">ADMIN</h3> */}
        <button
          className="admin-toggle-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <FaBars />
        </button>

        <NavLink
          to="/dashboard"
          end
        >
          {/* <span className="dashboard-tit">Dashboard</span> */}
        </NavLink>
      </div>  
     
      <ul className="admin-sidebar-menu">
        
        <li>
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <FaHome className="admin-icon" />
            <span className="admin-menu-item2">Home</span>
          </NavLink>
        </li>

        {/* Contact */}
        
 <li>
 

          <NavLink
            to="/dashboard/Quickadmin"

            end
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <FaUserCircle  className="admin-icon" />
            <span className="admin-menu-item2">Quick Contact Us</span>
          </NavLink>
        </li>
      
        <li>
          <div
            className="admin-menu-item"
            onClick={() => toggleMenu("registration")}
          >
            <FaUserTie className="admin-icon" />
            <span>Job Applications</span>
            {openMenus.registration ? <FaChevronUp /> : <FaChevronDown />}
          </div>

          <ul
            className={`admin-submenu ${openMenus.registration ? "open" : ""}`}
          >
            <li>
              <NavLink

                to="/dashboard/Registercandidates"

                className={({ isActive }) =>
                  isActive ? "submenu-link active-submenu" : "submenu-link"
                }
              >
                Candidates
              </NavLink>
            </li>

           
          </ul>
        </li>

        {/* Jobs */}
        <li>
          <div className="admin-menu-item" onClick={() => toggleMenu("jobs")}>
            <FaBriefcase className="admin-icon" />
            <span>Jobs</span>
            {openMenus.jobs ? <FaChevronUp /> : <FaChevronDown />}
          </div>

          <ul className={`admin-submenu ${openMenus.jobs ? "open" : ""}`}>
            <li>
              <NavLink

                to="/dashboard/AddonJob"

                className={({ isActive }) =>
                  isActive ? "submenu-link active-submenu" : "submenu-link"
                }
              >
                Add on Job
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/Viewjobs"

                className={({ isActive }) =>
                  isActive ? "submenu-link active-submenu" : "submenu-link"
                }
              >
                View Jobs
              </NavLink>
            </li>

           
          </ul>
        </li>
        <li>
 

          <NavLink
            to="/dashboard/Onboardingview"

            end
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <IoMdDocument  className="admin-icon" />
            <span className="admin-menu-item2">On boarding</span>
          </NavLink>
        </li>

              </ul>

    </div>
  );
}

export default Sidebar;
