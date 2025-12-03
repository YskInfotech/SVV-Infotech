import React, { useState } from "react";
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import logo from "../assets/logo.png";
import { useNavigate,useLocation  } from "react-router-dom";
import "../Styles/Navbar.css";
import { ToastContainer } from "react-toastify";



function Navbar() {
  

  const navigate = useNavigate();
  const location = useLocation();
  const handleHomeClick = () => {
  if (location.pathname === "/") {
    
    scrollToSection("home");   
  } else {
    
    navigate("/");
    
    setTimeout(() => {
      scrollToSection("home");
    }, 100);
  }
};

  
  const [showServices, setShowServices] = useState(false);
  const [showITServices, setShowITServices] = useState(false);
  const [showStaffing, setShowStaffing] = useState(false);


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <BootstrapNavbar expand="lg" className="custom-navbar shadow-sm fixed-top">
      <Container>
        <BootstrapNavbar.Brand href="#">
          <img src={logo} alt="SVV Logo" className="navbar-logo" />
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">

            
               <Nav.Link onClick={handleHomeClick} className="nav-link-custom nav-hed-text">
  Home
</Nav.Link>


            <Nav.Link onClick={() => scrollToSection("about")} className="nav-link-custom nav-hed-text">About Us</Nav.Link>


            <NavDropdown
              title={
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToSection("services")}
                  className="nav-hed-text nav-link-custom"
                >
                  Our Services
                </span>
              }
              id="services-dropdown"
              show={showServices}
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >

              <NavDropdown
                title="IT Services"
                id="it-services-dropdown"
                drop="end"
                className="dropdown-submenu"
                show={showITServices}
                onMouseEnter={() => setShowITServices(true)}
                onMouseLeave={() => setShowITServices(false)}
              >
                <NavDropdown.Item onClick={() => scrollToSection("services")}>
                  Product-Based Solutions
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => scrollToSection("services")}>
                  Service-Based Solutions
                </NavDropdown.Item>
              </NavDropdown>


              <NavDropdown
                title="Staffing Solutions"
                id="staffing-dropdown"
                drop="end"
                className="dropdown-submenu"
                show={showStaffing}
                onMouseEnter={() => setShowStaffing(true)}
                onMouseLeave={() => setShowStaffing(false)}
              >
                <NavDropdown.Item onClick={() => scrollToSection("services")}>
                  IT Staffing
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => scrollToSection("services")}>
                  Non-IT Staffing
                </NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            



            <Nav.Link onClick={() => navigate("/carrerlayout")} className="nav-link-custom nav-hed-text">
              Careers
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("contact")} className="nav-link-custom nav-hed-text">Contact</Nav.Link>


            <Button variant="outline-primary" className="login-btn ms-3 px-4" onClick={()=>navigate("/Login")}>
              Login
            </Button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
     <ToastContainer />
  </>
  );
}

export default Navbar;
