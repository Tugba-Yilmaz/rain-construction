// src/pages/About.jsx
import React from 'react';
import './Home.css';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';

function About() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="about-page" style={{ padding: "4rem 2rem" }}>
        <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>
          {t('about.title')}
        </h1>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          <img
            src="/images/rain-logo.jpg"
            alt="Rain Construction Logo"
            style={{ width: '200px', height: '200px', objectFit: 'contain' }}
          />

          <div
            style={{
              maxWidth: '500px',
              fontSize: '1rem',
              color: '#444',
              lineHeight: '1.6',
            }}
          >
            <h3>{t('about.subtitle')}</h3>
            <p>{t('about.description')}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
