"use client";

import React, { useState } from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => setHoveredCard(index);
  const handleMouseLeave = () => setHoveredCard(null);

  const projects = [
    {
      title: "Nightingale",
      description: `
      Full-stack journaling app with GPT 3.5 Turbo AI integrated feedback, JWT-secured CRUD,
      and PostgreSQL backend. Built with React, FastAPI, and Tailwind.
      Includes mobile optimization, dark-mode UI, and email-based password
      reset via SendGrid. Deployed on Vercel and Render.
      Demo login: demo@nightingale.ai | demo123!
    `,
      tech: "React, Python, FastAPI, PostgreSQL, OpenAI API, Tailwind CSS, JWT, SendGrid, Vercel, Render",
      github: "https://github.com/Cyberbot777/nightingale",
      demo: "https://nightingaleapp.ai",
    },
    {
      title: "Nightingale GPT",
      description: `
      Custom GPT-4 assistant fully integrated into my FastAPI backend using OpenAI’s API.
      Connected to a PostgreSQL database with OpenAPI (3.1) for full CRUD operations
      on journal entries. Delivers structured AI feedback tied to user data, with
      secure JWT authentication and feedback rate limiting.
    `,
      tech: "Python, FastAPI, OpenAI API, PostgreSQL, OpenAPI 3.1, JWT, REST, Render",
      github: "https://github.com/Cyberbot777/nightingale",
      demo: "https://chatgpt.com/g/g-6844bc07cb148191b8afa39dde1a1a91-nightingale-your-journal-companion",
    },
    {
      title: "PromptPilot",
      description: `
  Full-stack AI prompt testing platform with a dual-pane interface for editing system instructions and testing GPT-3.5 responses in real-time.
  Features animated GPT output, Markdown rendering, export/import for .json/.md/.txt files, and secure API proxying through FastAPI backend.
  Deployed with custom domain at prompt-pilot.ai.`,
      tech: "React, TypeScript, FastAPI, PostgreSQL, OpenAI API, Tailwind CSS, Framer Motion, Render, Vercel",
      github: "https://github.com/Cyberbot777/prompt-pilot",
      demo: "https://prompt-pilot.ai",
    },
    {
      title: "As The Crow Flies",
      description:
        "Full-stack geolocation app that calculates straight-line distances between places using geopy. Features a crow-themed dark UI, animated crow flight across an interactive Leaflet map, and sound effects. Built with Flask and React, and deployed on Render and Vercel.",
      tech: "Python, Flask, React, Leaflet, geopy, Axios, Flask-CORS, Bootstrap, Vercel, Render",
      github: "https://github.com/Cyberbot777/As-The-Crow-Flies",
      demo: "https://as-the-crow-flies.vercel.app/",
    },
  ];

  return (
    <Container className="my-4">
      <Row>
        <Col className="text-center">
          <h2 className="section-title">Projects</h2>
        </Col>
      </Row>

      <Row
        className="justify-content-center gx-4"
        style={{ maxWidth: "1140px", margin: "0 auto" }}
      >
        {projects.map((project, index) => (
          <Col
            key={index}
            xs={12}
            sm={6}
            md={6}
            className="mb-4 d-flex justify-content-center"
          >
            <div className="d-flex justify-content-center">
              <Card
                className="project-card h-100"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Card.Body className="text-center d-flex flex-column">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text className="flex-grow-1">
                    {project.description}
                  </Card.Text>
                  <Card.Text>Tech: {project.tech}</Card.Text>
                  <div className="mt-auto">
                    <Button
                      className="custom-btn mx-2"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Button>
                    <Button
                      className="custom-btn mx-2"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
