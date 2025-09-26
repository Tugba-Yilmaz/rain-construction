// src/App.jsx
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LightboxProvider } from "./components/LightboxProvider";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import Papagou from './pages/projects/Papagou';
import Pirinis from './pages/projects/Pirinis';
import Fotiou from './pages/projects/Fotiou';
import Agkilis from './pages/projects/Agkilis';

import './App.css';

function App() {
  return (
    <Router>
      <LightboxProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/projects/papagou" element={<Papagou />} />
        <Route path="/projects/priinis-6" element={<Pirinis />} />
        <Route path="/projects/fotiou-koritsas-84" element={<Fotiou />} />
        <Route path="/projects/agklis" element={<Agkilis />} />
        
      </Routes>
      </LightboxProvider>
    </Router>
  );
}

export default App;