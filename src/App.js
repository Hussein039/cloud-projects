import React from 'react';
import Header from './navigation/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Project1 from './projects/projects1';
import Project2 from './projects/projects2';
import Project3 from './projects/projects3';
import Project4 from './projects/projects4';
import Project5 from './projects/projects5';
import ProjectsSection from './projectsSection';
import Footer from './navigation/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='projects-sec'>
        <Routes>
          <Route path="/" element={<ProjectsSection />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          {/* Add more project routes as needed */}
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
