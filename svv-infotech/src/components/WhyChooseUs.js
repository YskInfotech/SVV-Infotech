import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../Styles/WhyChooseUs.css";

import lightbulbIcon from "../assets/light-bulb1.png";
import clockIcon from "../assets/timer2.png";
import dollarIcon from "../assets/salary3.png";
import supportIcon from "../assets/customer-service4.png";
import globeIcon from "../assets/planet-earth5.png";
import talentIcon from "../assets/skill6.png";

const WhyChooseUs = () => {
  const items = [
    { title: "Expertise You Can Trust", icon: lightbulbIcon },
    { title: "On-Time Project Delivery", icon: clockIcon },
    { title: "Cost-Effective & Scalable Solutions", icon: dollarIcon },
    { title: "24/7 Client Support", icon: supportIcon },
    { title: "Pan-India & Global Presence", icon: globeIcon },
    { title: "Reliable & Verified Talent", icon: talentIcon },
  ];

  return (
    <Container className="why-container" id="careers">
      <h5 className="section-title text-center">WHY CHOOSE US</h5>
      <p className="section-subtitle">
        We deliver dependable technology, staffing, and digital solutions backed
        by trust, expertise, and long-term commitment.
      </p>

      <Row className="justify-content-center g-4">
        {items.map(({ icon, title }, idx) => (
          <Col key={idx} xs={12} sm={6} md={4} lg={4} className="d-flex justify-content-center">
            <Card className="why-card">
              <Card.Text className="card-title-text">{title}</Card.Text>
              <div className="icon-circle">
                <img src={icon} alt={title} />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
