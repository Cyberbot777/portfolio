
import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Projects = () => (
  <Container className="my-4">
    <h2>Projects</h2>
    <Card className="mb-3" style={{ background: 'rgba(0, 0, 0, 0.7)', color: '#FFFFFF' }}>
      <Card.Body>
        <Card.Title>Student Searcher</Card.Title>
        <Card.Text>
          Full-stack app for managing student records with a Flask backend and React frontend. Features include searching, adding, editing, and analyzing student data, persisted in a text file.
        </Card.Text>
        <Card.Text>Tech: Python, Flask, React, Axios, Render, Vercel</Card.Text>
        <Card.Link href="https://github.com/Cyberbot777/student-searcher" className="text-white">GitHub</Card.Link>
        <Card.Link href="https://student-searcher.vercel.app/" className="text-white">Demo</Card.Link>
      </Card.Body>
    </Card>
    <Card className="mb-3" style={{ background: 'rgba(0, 0, 0, 0.7)', color: '#FFFFFF' }}>
      <Card.Body>
        <Card.Title>Instagram Photo Feed Clone</Card.Title>
        <Card.Text>
          Simplified Instagram-like photo feed with toggleable grid/inline views, post creation/deletion, and a settings modal. Built with Bootstrap for responsive design.
        </Card.Text>
        <Card.Text>Tech: HTML, CSS, JavaScript, Bootstrap, Vercel</Card.Text>
        <Card.Link href="https://github.com/Cyberbot777/instagram-photo-feed" className="text-white">GitHub</Card.Link>
        <Card.Link href="https://instagram-photo-feed-nine.vercel.app/" className="text-white">Demo</Card.Link>
      </Card.Body>
    </Card>
    <Card className="mb-3" style={{ background: 'rgba(0, 0, 0, 0.7)', color: '#FFFFFF' }}>
      <Card.Body>
        <Card.Title>As The Crow Flies</Card.Title>
        <Card.Text>
          Full-stack app calculating straight-line distances between locations with a crow-themed dark UI, interactive map, and crow animation. Uses Flask and React with geopy.
        </Card.Text>
        <Card.Text>Tech: Python, Flask, React, Leaflet, geopy, Bootstrap, Vercel, Render</Card.Text>
        <Card.Link href="https://github.com/Cyberbot777/As-The-Crow-Flies" className="text-white">GitHub</Card.Link>
        <Card.Link href="https://as-the-crow-flies.vercel.app/" className="text-white">Demo</Card.Link>
      </Card.Body>
    </Card>
  </Container>
);

export default Projects;