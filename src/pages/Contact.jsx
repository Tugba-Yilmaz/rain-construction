// src/pages/Contact.jsx
import React from 'react';
import Layout from '../components/Layout';
import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="contact-page">
        <div className="contact-section">
          {/* Harita */}
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps?q=Avlidos%2024,%20Athens&output=embed"
              title="Map"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* İletişim Bilgileri */}
          <div className="contact-info">
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <a href="tel:+302107792345" className="contact-link">+30 210 779 23 45</a>
              <p>{t('home.haveQuestion')}</p>
            </div>

            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:rainconstructiongr@gmail.com" className="contact-link">
                rainconstructiongr@gmail.com
              </a>
              <p>{t('home.writeEmail')}</p>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
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
};

export default Contact;
