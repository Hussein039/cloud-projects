import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'; 
import './projectsSection.css';

const ProjectsSection = () => {
  return (
    <div>
      <div className="projects">
        <Link to="/project1" className="proj proj1">
          <img src="your_image_url.jpg" alt="Project 1" />
          <div className="proj-text">
            <h3>Project 1</h3>
            <p>Project description goes here...</p>
          </div>
        </Link>
              

        <Link to="/project2" className="proj proj2">
          <img src="your_image_url.jpg" alt="Project 2" />
          <div className="proj-text">
            <h3>Project 2</h3>
            <p>Project description goes here...</p>
          </div>
        </Link>
        <Link to="/project3" className="proj proj3">
          <img src="your_image_url.jpg" alt="Project 3" />
          <div className="proj-text">
            <h3>Project 3</h3>
            <p>Project description goes here...</p>
          </div>
        </Link>
        {/* Add more projects as needed */}
      </div>
    </div>
  );
};

export default ProjectsSection;
