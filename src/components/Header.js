// src/components/Header.js
import React from 'react';
import { Container } from 'react-bootstrap';
import './Header.css';

const Header = () => (
  <Container className="py-4 mb-4 mt-4 header-container d-flex justify-content-center align-items-center">
    <div className="header-content">
      <div className="header-text-centered">
        <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>Richard Hall</h1>
        <div className="text-center">
          <h2 style={{ fontSize: '1.5rem' }}>Full Stack Developer</h2>
        </div>
      </div>
    </div>
  </Container>
);

export default Header;