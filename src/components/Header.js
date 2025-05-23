
import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => (
  <Container
    className="text-center py-4 mb-4"
    style={{
      background: 'rgba(0, 100, 255, 0.7)',
      color: '#000000',
      borderRadius: '8px',
    }}
  >
    <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>Richard Hall</h1>
    <p style={{ fontSize: '1.5rem', color: '#000000' }}>Full Stack Developer</p>
  </Container>
);

export default Header;