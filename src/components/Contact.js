// src/components/Contact.js
import React from 'react';
import { Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => (
  <div className="text-center my-4">
    <h2 className="contact-title">Contact</h2>
    <div>
      <Button
        className="custom-btn mx-2"
        href="https://github.com/Cyberbot777"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Button>
      <Button
        className="custom-btn mx-2"
        href="https://www.linkedin.com/in/richard-h-169b08364/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </Button>
    </div>
  </div>
);

export default Contact;