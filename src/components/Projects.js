// src/components/Projects.js
import React, { useState } from 'react';
import { Card, Container, Button, Row, Col } from 'react-bootstrap';
import './Projects.css';

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => setHoveredCard(index);
  const handleMouseLeave = () => setHoveredCard(null);

  const projects = [
    {
      title: 'As The Crow Flies',
      description: 'Full-stack app to calculate straight-line distances between locations, with a crow-themed dark UI, Leaflet-powered interactive map, and crow animation. Built with Flask (using geopy), React, and Bootstrap. Deployed on Vercel and Render.',
      tech: 'Python, Flask, React, Leaflet, geopy, Bootstrap, Vercel, Render',
      github: 'https://github.com/Cyberbot777/As-The-Crow-Flies',
      demo: 'https://as-the-crow-flies.vercel.app/',
    },
    {
      title: 'Student Searcher',
      description: 'Full-stack app for managing student records, with features for searching, adding, editing, and filtering data. Built with a Flask backend, React frontend (using Axios), and MongoDB database. Deployed on Render and Vercel.',
      tech: 'Python, Flask, MongoDB, React, Axios, Render, Vercel',
      github: 'https://github.com/Cyberbot777/student-searcher',
      demo: 'https://student-searcher.vercel.app/',
    },
    {
      title: 'Instagram Photo Feed',
      description: 'Frontend app mimicking Instagram’s photo feed, with toggleable grid/inline views, post creation/deletion, and a settings modal. Built with JavaScript for interactivity and Bootstrap for responsive design. Deployed on Vercel.',
      tech: 'HTML, CSS, JavaScript, Bootstrap, Vercel',
      github: 'https://github.com/Cyberbot777/instagram-photo-feed',
      demo: 'https://instagram-photo-feed-nine.vercel.app/',
    },
  ];

  return (
    <Container className="my-4">
      <h2 className='text-center'>Projects</h2>
      <Row className="justify-content-center">
        {projects.map((project, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <Card
              className="project-card h-100"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body className="text-center d-flex flex-column">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text className="flex-grow-1">{project.description}</Card.Text>
                <Card.Text>Tech: {project.tech}</Card.Text>
                <div className="mt-auto">
                  <Button className="custom-btn mx-2" href={project.github}>GitHub</Button>
                  <Button className="custom-btn mx-2" href={project.demo}>Demo</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;