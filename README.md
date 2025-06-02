# Portfolio

**View Live Demo: (https://portfolio-yhy4.vercel.app)

## Overview
`Portfolio` is a single-page web application showcasing my skills and projects as a Full Stack Developer. Built with React, Next.js, and React Bootstrap, it features a gothic design with a background image and semi-transparent black containers, deployed on Vercel for a seamless, optimized user experience across all devices with static site generation (SSG).

## Features
- **Header Section:** Displays my name and title as a Full Stack Developer, centered within a semi-transparent black container.
- **About Section:** Highlights my background as a developer, veteran, nurse, developer, transitioning to tech with skills in Python, MongoDB, React, and JavaScript. Includes a centered profile picture on mobile.
- **Projects Section:** Showcases three projects (Nightingale, Student Searcher, Instagram Photo Feed Clone) with descriptions, tech stacks, and links to GitHub and live demos, styled in semi-transparent black cards with hover effects for scaling.
- **Contact Section:** Provides links to my GitHub and LinkedIn profiles, with centered buttons on all screen sizes.
- **Responsive Design:** Optimized with media queries and Next.js optimizations for mobile, tablet, and desktop, ensuring a seamless layout with centered content on small screens.
- **Consistent UI:** Uses a gothic background image, semi-transparent black containers, light gray text, and cyan links for readability and aesthetic consistency, enhanced by Next.js's fast rendering.

## Technologies
- **Frontend**:
  - **React**: JavaScript library for building the user interface.
  - **Next.js**: React framework for static site generation (SSG), server-side rendering (SSR), and optimized performance.
  - **React Bootstrap**: Provides responsive styling and components.
  - **Bootstrap**: CSS framework for consistent design.
- **Deployment**:
  - **Vercel**: Hosts the Next.js frontend with optimized hosting.
  - **GitHub**: Version control and source code hosting.

## FOUC Fix with Next.js Migration
Initially, the portfolio had a Flash of Unstyled Content (FOUC) due to client-side rendering in Create React App. I migrated to Next.js to leverage Static Site Generation (SSG) and Turbopack, pre-rendering HTML, CSS, and images to eliminate FOUC. Key steps:
- Moved assets (`crowBackground1.jpg`, `profile-pic.jpg`) to `public/` for instant loading.
- Updated CSS paths in `App.css` to reference `public/` images, preserving the gothic background.
- Added `"use client"` in `Projects.js` for `useState` hover effects, keeping SSG for other components.
- Ensured *identical* styling, layout, and behavior, including Bootstrap, `Projects.css`, hover effects, and semi-transparent containers.
The migration preserved all functionality and visuals, improving load performance and SEO without any changes except the FOUC fix.

## Skills Demonstrated
- Front-end development with React and Next.js
- Responsive design with React Bootstrap and custom media queries
- State management with React (`useState`) for hover effects
- Deployment with Vercel
- Version control with Git and GitHub
- Debugging and optimization for mobile layouts
- Performance optimization with Next.js SSG and Turbopack

## Usage Instructions
1. **Access the Web App**:
   - Visit the live demo (https://portfolio-yhy4.vercel.app).
   - Scroll through sections to view my background, projects, and contact information.
2. **Interact with Features**:
   - **Projects**: Hover over project cards to see a scale animation.
   - **Contact**: Click the GitHub and LinkedIn buttons to visit my profiles.
3. **Development Setup**:
   - Clone the repository: `git clone https://github.com/Cyberbot777/portfolio.git`
   - Navigate to the project: `cd portfolio`
   - Install dependencies: `npm install`
   - Run locally: `npm run dev`
   - Access locally: `http://localhost:3000`

## Author
- Richard Hall

## Date
- Created: May 20, 2025
- Last Updated: June 01, 2025