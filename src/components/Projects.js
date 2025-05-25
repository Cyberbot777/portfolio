// src/components/Projects.js
import React, { useState } from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import './Projects.css';

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => setHoveredCard(index);
  const handleMouseLeave = () => setHoveredCard(null);

  const projects = [
    {
      title: 'As The Crow Flies', /* Changed: Moved to top */
      description: 'Full-stack app calculating straight-line distances between locations with a crow-themed dark UI, interactive map, and crow animation. Uses Flask and React with geopy.',
      tech: 'Python, Flask, React, Leaflet, geopy, Bootstrap, Vercel, Render',
      github: 'https://github.com/Cyberbot777/As-The-Crow-Flies',
      demo: 'https://as-the-crow-flies.vercel.app/',
    },
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
  ];

  return (
    <Container className="my-4">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <Card
          key={index}
          className="mb-3 project-card"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Card.Text>Tech: {project.tech}</Card.Text>
            <Button className="custom-btn mx-2" href={project.github}>GitHub</Button>
            <Button className="custom-btn mx-2" href={project.demo}>Demo</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Projects;