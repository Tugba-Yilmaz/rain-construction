// src/pages/Home.jsx
import React, { useEffect } from 'react';
import IntroBand from '../components/IntroBand';
import { Link, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import projects from '../data/projects';
import './Home.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  // Hash'e göre ( #projects / #hero ) ofsetli scroll
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;

    const id = hash.slice(1); // 'projects' | 'hero' | ...
    const el = document.getElementById(id);

    requestAnimationFrame(() => {
      const nav = document.querySelector('.navbar');
      const navH = nav?.offsetHeight ?? 80;
      // projects için biraz daha rahat bir tampon, hero için küçük
      const extra = id === 'projects' ? 24 : 8;

      if (el) {
        const top =
          el.getBoundingClientRect().top + window.pageYOffset - (navH + extra);
        window.scrollTo({ top, behavior: 'smooth' });
      } else if (id === 'hero') {
        // hero id'si yoksa en üste kaydır
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }, [hash]);

  return (
    <Layout>
      {/* LÜTFEN IntroBand.jsx içinde section'a id="hero" ver: <section id="hero" className="intro-band"> */}
      <IntroBand />

      <div className="home-container">
        <section id="projects" className="projects-section">
          <h2 className="projects-heading">
            {t('home.projectsTitle', 'Completed & Ongoing Projects')}
          </h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.id}>
                <div className="project-thumb">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className={project.comingSoon ? 'blurred' : ''}
                  />
                </div>

                <div className="project-body">
                  {project.comingSoon ? (
                    <>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-desc coming-soon-label">
                        {t('home.comingSoon')}
                      </p>
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
              </article>
            ))}
          </div>
        </section>

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
          />
          <div className="contact-info">
            <div className="contact-item">
              <FaPhoneAlt style={{ color: '#f39c12', marginRight: '8px' }} />
              <a href="tel:+302107792345" className="contact-link">
                +30 210 7792345
              </a>
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
