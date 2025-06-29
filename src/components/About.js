import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import "./About.css";

const About = () => (
  <Container className="text-center my-4 about-section">
    <Row>
      <Col style={{ marginLeft: "60px", alignItems: "center" }} sm={7}>
        <h2>About Me</h2>
        <p>
          Veteran, business owner, and former ER nurse turned full-stack developer. Skilled in building AI-integrated web applications with Python, React, and PostgreSQL.
        </p>
      </Col>
      <Col>
        <Image
          src="/profile-pic.jpg"
          alt="Richard Hall"
          className="profile-pic"
          width={150}
          height={170}
          priority
          style={{ marginTop: "10px" }}
        />
      </Col>
    </Row>
  </Container>
);

export default About;
