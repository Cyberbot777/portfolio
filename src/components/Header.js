// src/components/Header.js
import React from 'react';
import { Container } from 'react-bootstrap';
import profilePic from '../assets/profile-pic.jpg';
import './Header.css';

const Header = () => (
  <Container className="py-4 mb-4 mt-4 header-container">
    <div className="header-content">
      <img
        src={profilePic}
        alt="Richard Hall"
        className="profile-pic"
        style={{ width: '150px', height: '170px' }}
      />
      <div className="header-text">
        <h1>Richard Hall</h1>
        <h2>Full Stack Developer</h2>
      </div>
    </div>
  </Container>
);

export default Header;