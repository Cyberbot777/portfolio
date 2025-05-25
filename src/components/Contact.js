// src/components/Contact.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => (
  <Container className="text-center my-4">
    <h2>Contact</h2>
    <div>
      <Button className="custom-btn mx-2" href="https://github.com/Cyberbot777">GitHub</Button>
      <Button className="custom-btn mx-2" href="https://www.linkedin.com/in/richard-h-169b08364/">LinkedIn</Button>
    </div>
  </Container>
);

export default Contact;