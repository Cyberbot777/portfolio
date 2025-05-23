
import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => (
  <Container className="bg-dark text-white text-center py-4" style={{ background: 'rgba(0, 0, 0, 0.7)' }}>
    <h1>Richard Hall</h1>
    <p className="text-secondary">Full-Stack Developer in Training</p>
  </Container>
);

export default Header;