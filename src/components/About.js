// src/components/About.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './About.css'; // NEW: Add CSS file for gradient and animation

const About = () => (
  <Container className="text-center my-4">
    <Card className="about-card"> {/* CHANGED: Wrap in Card for gradient */}
      <Card.Body>
        <h2>About Me</h2>
        <p>
          {/* CHANGED: Updated text to match LinkedIn */}
          Veteran, business owner and ER nurse with a Bachelor of Science Degree, transitioning to tech. Skilled in Python, MongoDB, React, and JavaScript.
        </p>
      </Card.Body>
    </Card>
  </Container>
);

export default About;