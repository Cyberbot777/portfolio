import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => (
  <Container className="text-center my-4 about-section">
    <Row>
      <Col style={{ marginLeft: "60px", alignItems: "center" }} sm={7}>
        <h2>About Me</h2>
        <p>
          Veteran, business owner and ER nurse with a Bachelor of Science Degree, transitioning to tech. Skilled in Python, MongoDB, React, and JavaScript.
        </p>
      </Col>
      <Col>
        <img
          src="/profile-pic.jpg"
          alt="Richard Hall"
          className="profile-pic"
          style={{ width: '150px', height: '170px', marginTop: "10px" }}
        />
      </Col>
    </Row>
  </Container>
);

export default About;