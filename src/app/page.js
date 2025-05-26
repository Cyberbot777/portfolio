import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
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
}