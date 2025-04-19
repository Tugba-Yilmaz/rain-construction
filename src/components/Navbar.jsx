import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import allProjects from '../data/projects';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="logo-link">
          <img src="/images/rain-logo.jpg" alt="Rain Construction Logo" />
          <span className="brand-text">RAIN CONSTRUCTION</span>
        </Link>
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        
      <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
  {t('navbar.home')}
</Link>

<Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
  {t('navbar.about')}
</Link>

<div className="nav-item dropdown">
  <span>{t('navbar.projects')} ▾</span>
  <div className="dropdown-menu">
    {allProjects.map(project =>
      project.comingSoon ? (
        <span key={project.id} className="disabled-link">
          {project.title}
        </span>
      ) : (
        <Link
          key={project.id}
          to={`/projects/${project.id}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {project.title}
        </Link>
      )
    )}
  </div>
</div>

<Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
  {t('navbar.contact')}
</Link>

      </div>

      <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language} style={{ marginLeft: '1rem' }}>
        <option value="en">EN</option>
        <option value="gr">GR</option>
      </select>

      <button className="burger" onClick={() => setIsMobileMenuOpen(prev => !prev)}>☰</button>
    </nav>
  );
}

export default Navbar;
