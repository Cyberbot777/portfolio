import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => setHoveredCard(index);
  const handleMouseLeave = () => setHoveredCard(null);

  const projects = [
    {
      title: 'Student Searcher',
      description: 'Full-stack app for managing student records with a Flask backend and React frontend. Features include searching, adding, editing, and analyzing student data, persisted in a text file.',
      tech: 'Python, Flask, React, Axios, Render, Vercel',
      github: 'https://github.com/Cyberbot777/student-searcher',
      demo: 'https://student-searcher.vercel.app/',
    },
    {
      title: 'Instagram Photo Feed Clone',
      description: 'Simplified Instagram-like photo feed with toggleable grid/inline views, post creation/deletion, and a settings modal. Built with Bootstrap for responsive design.',
      tech: 'HTML, CSS, JavaScript, Bootstrap, Vercel',
      github: 'https://github.com/Cyberbot777/instagram-photo-feed',
      demo: 'https://instagram-photo-feed-nine.vercel.app/',
    },
    {
      title: 'As The Crow Flies',
      description: 'Full-stack app calculating straight-line distances between locations with a crow-themed dark UI, interactive map, and crow animation. Uses Flask and React with geopy.',
      tech: 'Python, Flask, React, Leaflet, geopy, Bootstrap, Vercel, Render',
      github: 'https://github.com/Cyberbot777/As-The-Crow-Flies',
      demo: 'https://as-the-crow-flies.vercel.app/',
    },
  ];

  return (
    <Container className="my-4">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <Card
          key={index}
          className="mb-3"
          style={{
            background: hoveredCard === index ? 'rgba(0, 50, 200, 0.9)' : 'rgba(0, 100, 255, 0.7)',
            color: '#000000',
            transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
            transition: 'all 0.3s ease-in-out',
            cursor: 'pointer',
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Card.Text>Tech: {project.tech}</Card.Text>
            <Card.Link href={project.github} style={{ color: '#000000' }}>GitHub</Card.Link>
            <Card.Link href={project.demo} style={{ color: '#000000' }}>Demo</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Projects;
