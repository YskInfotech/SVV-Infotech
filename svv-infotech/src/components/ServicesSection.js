import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "../Styles/ServicesSection.css";
import itImg from "../assets/ITstaff.png";
import staffImg from "../assets/staff.png";
import bgImg from "../assets/service-bg.png"; 

const ServicesSection = () => {
  return (
    <section className="services-section"  id="services">
      <div className="services-header text-center">
        <h2 className="services-title">OUR SERVICES</h2>
        <p className="services-subtitle">Solutions and Focus Areas</p>
      </div>

      <div
        className="services-bg"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <Container>
          <Row className="justify-content-center">
            {/* Card 1 */}
            <Col md={6} className="mb-4">
              <div className="service-card">
                <div className="image-wrapper">
                  <Image src={itImg} alt="IT Services" fluid />
                 
                </div>
                <div className="card-content text-center">
                  <h5>IT SERVICES</h5>
                  <p>
                    We deliver complete <strong>IT solutions</strong> that blend
                    innovation and expertise, helping businesses streamline
                    operations and achieve lasting digital growth.
                  </p>
                  <Button className="service-btn">View Services</Button>
                </div>
              </div>
            </Col>

            {/* Card 2 */}
            <Col md={6} className="mb-4">
              <div className="service-card">
                <div className="image-wrapper">
                  <Image src={staffImg} alt="Staffing Solutions" fluid />
                  
                </div>
                <div className="card-content text-center">
                  <h5>STAFFING SOLUTIONS</h5>
                  <p>
                    We deliver end-to-end staffing for <strong>IT and Non-IT</strong>, 
                    ensuring every hire is the right talent who adds real value to your organization.
                    
                  </p>
                  <Button className="service-btn">Find Talent</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default ServicesSection;
