import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "../Styles/About.css";
import aboutImg from "../assets/about-us.png"; 

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <Container fluid="lg" className="px-md-5">
        <Row className="align-items-center about-row">
         
          <Col md={6} className="about-content p-4">
            <h2 className="about-title mb-3">ABOUT US</h2>
            <p className="about-text">
              <strong>SVV INFOTECH Pvt Ltd</strong>, provides reliable software
              solutions, managed IT services, and expert staffing support. We
              help businesses accelerate growth through technology and trusted
              talent.
            </p>
            <Button className="reach-btn mt-3 round">REACH US</Button>
          </Col>

         
          <Col md={6} className="about-image-col p-6 text-center">
            <div className="about-img-container">
              <div className="blue-card top-right"></div>
              <div className="blue-card bottom-left"></div>
              <Image src={aboutImg} alt="About Us" fluid className="about-img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
