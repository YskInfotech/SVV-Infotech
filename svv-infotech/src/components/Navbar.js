import React, { useState } from "react";
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import logo from "../assets/logo.png";
import "../Styles/Navbar.css";

function Navbar() {
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
    <BootstrapNavbar expand="lg" className="custom-navbar shadow-sm fixed-top">
      <Container>
        <BootstrapNavbar.Brand href="#">
          <img src={logo} alt="SVV Logo" className="navbar-logo" />
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            
            <Nav.Link onClick={() => scrollToSection("home")} className="nav-link-custom">Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("about")} className="nav-link-custom">About Us</Nav.Link>

            
            <NavDropdown
              title={
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToSection("services")}
                >
                  Our Services
                </span>
              }
              id="services-dropdown"
              className="nav-link-custom"
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

            <Nav.Link onClick={() => scrollToSection("careers")} className="nav-link-custom">Careers</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("contact")} className="nav-link-custom">Contact</Nav.Link>

            <Button variant="outline-primary" className="login-btn ms-3 px-4">
              Login
            </Button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
