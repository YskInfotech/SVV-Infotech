import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import {
  
  FaBell,
  FaCog,
  FaUser,
  FaLock,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 
import "../../Styles/AdminNav.css";

import profilePic from "../../assets/client3.png";

function AdminNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); 

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const handleLogout = () => {
    
    localStorage.clear();

    
    navigate("/");

    
    setDropdownOpen(false);
  };

  return (
    <nav className="adminnav-container">
      <div className="adminnav-left">
        <Link to="/dashboard" className="adminnav-icon-link">
  <CgProfile  className="adminnav-icon" />
</Link>

<Link to="/dashboard" className="adminnav-title-link">
  <span  className="adminnav-title">ADMIN</span >
</Link>
      </div>

      <div className="adminnav-center">
        {/* <span className="adminnav-center-text">Welcome to Ysk Infotech</span> */}
      </div>

      <div className="adminnav-right">
        <FaBell className="adminnav-right-icon" />
        {/* <FaCog className="adminnav-right-icon" /> */}
        <div className="adminnav-profile" ref={dropdownRef}>
          <img
            src={profilePic}
            alt="Profile"
            className="adminnav-profile-img"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div className="adminnav-dropdown">
              <button className="adminnav-dropdown-item">
                <FaUser className="adminnav-dropdown-icon" /> My Profile
              </button>
              <button className="adminnav-dropdown-item">
                <FaLock className="adminnav-dropdown-icon" /> Change Password
              </button>
              
              <button
                className="adminnav-dropdown-item adminnav-logout"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="adminnav-dropdown-icon" /> Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
