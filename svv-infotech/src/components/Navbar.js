import React, { useState } from "react";
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import logo from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";




function  Navbar() {


  const navigate = useNavigate();
  const location = useLocation();
  


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


            <Nav.Link href="#home"  className="nav-link-custom nav-hed-text" onClick={() => navigate("/")} >
              
              Home
            </Nav.Link>


            <Nav.Link href="#about"   className="nav-link-custom nav-hed-text" onClick={() => navigate("/")} >About Us</Nav.Link>


            <NavDropdown
              title={
                <span
                  style={{ cursor: "pointer" }}
                  
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
                // id="it-services-dropdown"
                // drop="end"
                // className="dropdown-submenu"
                show={showITServices}
                onMouseEnter={() => setShowITServices(true)}
                onMouseLeave={() => setShowITServices(false)}
                onClick={() => navigate("/itservices")}

              >
                {/* <NavDropdown.Item onClick={() => scrollToSection("services")}>
                  Product-Based Solutions
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => scrollToSection("services")}>
                  Service-Based Solutions
                </NavDropdown.Item> */}
              </NavDropdown>


              <NavDropdown
                title="Staffing Solutions"
                // id="staffing-dropdown"
                // drop="end"
                // className="dropdown-submenu"
                show={showStaffing}
                onMouseEnter={() => setShowStaffing(true)}
                onMouseLeave={() => setShowStaffing(false)}
                onClick={() => navigate("/staffing")}
              >
                {/* <NavDropdown.Item onClick={() => scrollToSection("services")}>
                  IT Staffing
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => scrollToSection("services")}>
                  Non-IT Staffing
                </NavDropdown.Item> */}
              </NavDropdown>
            </NavDropdown>




            <Nav.Link   onClick={() => navigate("/carrerlayout")} className="nav-link-custom nav-hed-text">
              Careers
            </Nav.Link>
            <Nav.Link   href="#contact"  className="nav-link-custom nav-hed-text" onClick={() => navigate("/")} >Contact</Nav.Link>


            <Button variant="outline-primary" className="login-btn ms-3 px-4" onClick={() => navigate("/Login")}>
              Login
            </Button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>

  );
}

export default Navbar;
