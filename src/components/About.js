// src/components/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import profilePic from '../assets/profile-pic.jpg';

const About = () => (
  <Container className="text-center my-4 about-section">
    <Row style={{width: "1000px"}}>
      <Col style={{marginLeft: "150px", alignItems: "center"}} sm={7}>
        <h2>About Me</h2>
        <p>
          Veteran, business owner and ER nurse with a Bachelor of Science Degree, transitioning to tech. Skilled in Python, MongoDB, React, and JavaScript.
        </p>
      </Col>
      <Col>
        <img
          src={profilePic}
          alt="Richard Hall"
          className="profile-pic"
          style={{ width: '150px', height: '170px', marginTop: "10px" }}
        />
      </Col>
    </Row>
  </Container>
);

export default About;