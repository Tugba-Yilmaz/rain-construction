// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import projects from '../data/projects';
import './Home.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="home-container">
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className={project.comingSoon ? 'blurred' : ''}
              />
              {project.comingSoon ? (
                <>
                  <h3 className="project-title coming-soon-label">{project.title}</h3>
                  <p className="project-desc">{t('home.comingSoon')}</p>
                </>
              ) : (
                <>
                  <h3 className="project-title">
                    <Link to={`/projects/${project.id}`}>{project.title}</Link>
                  </h3>
                  <Link to={`/projects/${project.id}`} className="project-desc">
                    {t('home.explore')}
                  </Link>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <iframe
            src="https://www.google.com/maps?q=Avlidos%2024,%20Athens&output=embed"
            width="600"
            height="300"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            title="Map"
          ></iframe>

          <div className="contact-info">
            <div className="contact-item">
              <FaPhoneAlt style={{ color: '#f39c12', marginRight: '8px' }} />
              <a href="tel:+302107792345" className="contact-link">+30 210 7792345</a>
              <p>{t('home.haveQuestion')}</p>
            </div>

            <div className="contact-item">
              <FaEnvelope style={{ color: '#f39c12', marginRight: '8px' }} />
              <a href="mailto:info@rainconstructiongr.com" className="contact-link">
                info@rainconstructiongr.com
              </a>
              <p>{t('home.writeEmail')}</p>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt style={{ color: '#f39c12', marginRight: '8px' }} />
              <a
                href="https://www.google.com/maps?q=Avlidos+24,+Athens+11527"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Avlidos 24, Athens 11527
              </a>
              <p>{t('home.visitAnytime')}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
