
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => (
  <div
    style={{
      background: '#E6F0FA',
      color: '#000000',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Container style={{ flex: '1 0 auto' }}>
      <Header />
      <About />
      <Projects />
      <Contact />
    </Container>
    <footer style={{ background: '#E6F0FA', textAlign: 'center', padding: '1rem 0' }} />
  </div>
);

export default App;