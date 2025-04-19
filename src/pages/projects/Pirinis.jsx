// src/pages/projects/Pirinis.jsx
import React from 'react';
import Layout from '../../components/Layout';
import PirinisPlanSlider from '../../components/sliders/PirinisPlanSlider';
import PirinisInteriorSlider from '../../components/sliders/PirinisInteriorSlider';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Pirinis.css';
import { useTranslation } from 'react-i18next';

const Pirinis = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="project-detail-container">
        <div className="project-header">
          <img
            src="/images/priinis.jpg"
            alt="Pirinis 6 Project"
            className="project-main-image"
          />
          <div className="project-description">
            <h2>{t('pirinis.title')}</h2>
            <h3>{t('pirinis.subtitle')}</h3>

            <p>{t('pirinis.description1')}</p>
            <p>{t('pirinis.description2')}</p>

            <h4>{t('pirinis.featuresTitle')}</h4>
            <ul>
              <li>{t('pirinis.features.0')}</li>
              <li>{t('pirinis.features.1')}</li>
              <li>{t('pirinis.features.2')}</li>
              <li>{t('pirinis.features.3')}</li>
              <li>{t('pirinis.features.4')}</li>
            </ul>

            <p><strong>{t('pirinis.callToAction')}</strong></p>
          </div>
        </div>

        <div className="project-stats">
          {[
            { icon: '/images/m2-icon.png', value: '95', label: t('pirinis.stats.ground') },
            { icon: '/images/parking-icon.png', value: '3', label: t('pirinis.stats.parking') },
            { icon: '/images/floor-icon.png', value: '6', label: t('pirinis.stats.floors') },
            { icon: '/images/storage-icon.png', value: '6', label: t('pirinis.stats.storage') },
          ].map((item, index) => (
            <div key={index} className="stat-item">
              <img src={item.icon} alt={item.label} />
              <div>
                <div className="value">{item.value}</div>
                <div>{item.label}</div>
              </div>
            </div>
          ))}
        </div>

        <PirinisPlanSlider />
        <PirinisInteriorSlider />

        <div className="contact-map-section">
          <div className="map-box">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Pirinis+6,+Athens&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="contact-info">
            <a href="tel:+302107792345">
              <FaPhone style={{ color: '#f39c12' }} />
              <div>
                <strong>+30 210 779 23 45</strong>
                <p>{t('home.haveQuestion')}</p>
              </div>
            </a>
            <a href="mailto:rainconstructiongr@gmail.com">
              <FaEnvelope style={{ color: '#f39c12' }} />
              <div>
                <strong>rainconstructiongr@gmail.com</strong>
                <p>{t('home.writeEmail')}</p>
              </div>
            </a>
            <a
              href="https://maps.google.com?q=Pirinis+6,+Athens"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMapMarkerAlt style={{ color: '#f39c12' }} />
              <div>
                <strong>Pirinis 6, Athens</strong>
                <p>{t('home.visitAnytime')}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pirinis;
