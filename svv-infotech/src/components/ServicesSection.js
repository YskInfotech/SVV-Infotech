import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "../Styles/ServicesSection.css";
import itImg from "../assets/ITstaff.png";
import staffImg from "../assets/staff.png";
import bgImg from "../assets/service-bg.png";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="services-section" id="services">
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
                    SVV Infotech provides end-to-end IT services designed to optimize<br></br> business performance and efficiency.
                     Our expert team delivers<br></br> innovative,
                     secure, and scalable technology solutions tailored<br></br> to client needs. 
                     We help organizations embrace digital transformation<br></br> and achieve sustainable growth in a competitive world.
                  </p>
                  <Button className="service-btn-it"  onClick={() => navigate("/itservices")}>View Services</Button>
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
                    SVV Infotech provides complete staffing solutions for both<br></br> IT and Non-IT domains,
                     tailored to meet diverse business needs.<br></br> We focus on sourcing skilled professionals who bring value,<br></br>
                      boost productivity, and align with your organizational goals.<br></br>
                     Our goal is to connect you with talent that drives business success. 

                  </p>
                  <Button className="service-btn-it" onClick={() => navigate("/staffing")}>Find Talent</Button>
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
