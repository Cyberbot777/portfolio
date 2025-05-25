// src/components/Header.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profilePic from '../assets/profile-pic.jpg';
import './Header.css';

const Header = () => (
  <Container className="py-4 mb-4 mt-4 header-container">
    <Row className="align-items-center">
      <Col xs={4} className="text-center pic-container">
        <img
          src={profilePic}
          alt="Richard Hall"
          className="profile-pic"
          style={{ width: '150px', height: '170px' }}
        />
      </Col>
      <Col xs={8}>
        <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>Richard Hall</h1>
        <div className="text-left" style={{ paddingLeft: '45px' }}>
          <h2 style={{ fontSize: '1.5rem' }}>Full Stack Developer</h2>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Header;