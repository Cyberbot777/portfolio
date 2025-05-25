// src/components/Contact.js
import React from 'react';
import { Container, Button } from 'react-bootstrap'; // Changed: Added Button
import './Contact.css'; // Added: Link to new CSS

const Contact = () => (
  <Container className="text-center my-4">
    <h2>Contact</h2>
    <div> {/* Added: Wrap buttons for spacing */}
      <Button className="custom-btn mx-2" href="https://github.com/Cyberbot777">GitHub</Button> {/* Changed: Button instead of <a> */}
      <Button className="custom-btn mx-2" href="https://www.linkedin.com/in/richard-h-169b08364/">LinkedIn</Button> {/* Added: LinkedIn button */}
    </div>
  </Container>
);

export default Contact;