import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../../Styles/Sidebar.css"

import {
  FaHome,
  FaUserTie,
  FaBriefcase,
  FaChevronDown,
  FaChevronUp,
  FaUserCircle,
} from "react-icons/fa";



function Sidebar() {
  // eslint-disable-next-line
  const navigate = useNavigate();

  const [openMenus, setOpenMenus] = useState({});
  // eslint-disable-next-line
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className={`admin-sidebar ${isCollapsed ? "collapsed" : ""}`}>
     
      <ul className="admin-sidebar-menu">
        {/* Dashboard */}
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
          <div className="admin-menu-item" onClick={() => toggleMenu("contact")}>
            <FaUserCircle className="admin-icon" />
            <span>Contact Us</span>
            {openMenus.contact ? <FaChevronUp /> : <FaChevronDown />}
          </div>

          <ul className={`admin-submenu ${openMenus.contact ? "open" : ""}`}>
            <li>
              <NavLink
                to="/dashboard/Quickadmin"
                className={({ isActive }) =>
                  isActive ? "submenu-link active-submenu" : "submenu-link"
                }
              >
                Quick Contact Us
              </NavLink>
            </li>
           
          </ul>
        </li>

        {/* Registration */}
        <li>
          <div
            className="admin-menu-item"
            onClick={() => toggleMenu("registration")}
          >
            <FaUserTie className="admin-icon" />
            <span>Registration</span>
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
                to="/"
                className={({ isActive }) =>
                  isActive ? "submenu-link active-submenu" : "submenu-link"
                }
              >
                Add on Job
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/"
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
            to="/dashboard"
            end
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <FaHome className="admin-icon" />
            <span className="admin-menu-item2">On boarding</span>
          </NavLink>
        </li>

              </ul>

    </div>
  );
}

export default Sidebar;
