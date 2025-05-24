// src/components/About.js
import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'; // Keep: For fade-in animation

const About = () => (
  <Container className="text-center my-4 about-section"> {/* Changed: No background, just text */}
    <h2>About Me</h2>
    <p>
      Veteran, business owner and ER nurse with a Bachelor of Science Degree, transitioning to tech. Skilled in Python, MongoDB, React, and JavaScript.
    </p>
  </Container>
);

export default About;