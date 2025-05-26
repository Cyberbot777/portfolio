/* Import Bootstrap components */
import { Container } from 'react-bootstrap';
/* Import Bootstrap CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
/* Import custom CSS */
import '../App.css';
/* Import portfolio components */
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div
      className="app-background"
      style={{
        minHeight: '100vh',
        height: '100%',
        backgroundImage: 'url(/crowBackground1.jpg)', /* Inline background to match App.css and prevent FOUC */
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        color: '#ffffff', /* Match App.css text color */
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