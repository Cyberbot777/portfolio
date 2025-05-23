
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => (
  <div style={{ background: '#1E1E1E', color: '#FFFFFF', minHeight: '100vh' }}>
    <Container>
      <Header />
      <About />
      <Projects />
      <Contact />
    </Container>
  </div>
);

export default App;