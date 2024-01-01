import React from 'react';

const projects = [
  {
    title: 'Digital Card',
    description: 'This project comtains HTML, and CSS files compiled to create a webpage showcasing pesonal digital card.',
    link: 'https://github.com/asra707/web_assignment_01', 
  },
  {
    title: 'Project 2',
    description: 'This project contains HTML, CSS, and JavaScript files compiled to create a webpage showcasing product details obtained through an API.',
    link: 'https://github.com/asra707/products_info', 
  },
];

export default function Home() {
  return (
    <div className="body">
      <div className="banner">
        <div className="des1">
          <h1>Hellou</h1>
          <p>My name is Asra Mammadli, and this is my Flash Card application.</p>
          
          <h1>Projects</h1>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="des2"> </div> */}
        
      </div>
    </div>
  );
}
