// src/App.js
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App = () => (
  <div className="app-background">
    <Container style={{ flex: '1 0 auto' }}>
      <Header />
      <About />
      <Projects />
      <Contact />
    </Container>
    <footer style={{ textAlign: 'center', padding: '1rem 0' }} />
  </div>
);

export default App;