"use client";

import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className="app-background"
      style={{
        minHeight: '100vh',
        height: '100%',
        backgroundImage: 'url(/crowBackground1.jpg?v=1)', 
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        color: '#ffffff',
      }}
    >
      <Container style={{ flex: '1 0 auto' }}>
        <Header />
        <About />
        <Projects />
        <Contact />
      </Container>
      <footer style={{ textAlign: 'center', padding: '1rem 0' }} />
    </div>
  );
}