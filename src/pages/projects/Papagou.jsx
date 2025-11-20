// src/pages/projects/Papagou.jsx
import React from "react";
import Layout from "../../components/Layout";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Papagou.css";

import PapagouPlansSlider from "../../components/sliders/PapagouPlansSlider";
import PapagouInteriorSlider from "../../components/sliders/PapagouInteriorSlider";

// ✅ SEO için react-head
import { Title, Meta, Link as HeadLink } from "react-head";

const Papagou = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* ✅ Sayfa bazlı SEO meta’ları */}
      <Title>Papagou Project | Rain Construction</Title>
      <Meta
        name="description"
        content="Papagou residential building project by Rain Construction in a premium neighborhood of Athens, offering modern construction quality, underground parking and strong investment potential."
      />
      <HeadLink
        rel="canonical"
        href="https://rainconstructiongr.com/projects/papagou"
      />

      <Layout>
        <div className="project-detail-container">
          {/* Üst Bilgi */}
          <div className="project-header">
            <img
              src="/images/papagou/ext-1-new.webp"
              alt="Papagou Project"
              className="project-main-image"
              loading="eager" // 🔹 LCP için daha iyi
              fetchpriority="high" // 🔹 Destekleyen tarayıcılarda öncelik
            />

            <div className="project-description">
              <h2>{t("papagou.title")}</h2>

              <div className="paragraph">{t("papagou.description1")}</div>

              <div className="paragraph">{t("papagou.description2")}</div>

              <h4>{t("papagou.featuresTitle")}</h4>
              <ul>
                <li>{t("papagou.feature1")}</li>
                <li>{t("papagou.feature2")}</li>
                <li>{t("papagou.feature3")}</li>
                <li>{t("papagou.feature4")}</li>
                <li>{t("papagou.feature5")}</li>
              </ul>

              <div>{t("papagou.cta")}</div>
            </div>
          </div>

          {/* Project Stats */}
          <div className="project-stats">
            {[
              {
                icon: "/images/m2-icon.png",
                value: "181",
                label: "Ground (m²)",
              },
              {
                icon: "/images/parking-icon.png",
                value: "5",
                label: "Car parkings",
              },
              { icon: "/images/floor-icon.png", value: "5", label: "Floors" },
              {
                icon: "/images/storage-icon.png",
                value: "5",
                label: "Storage Rooms",
              },
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

          {/* Sliders – artık props yok, slider kendi resimlerini kullanıyor */}
          <PapagouPlansSlider />
          <PapagouInteriorSlider />

          {/* Contact Section */}
          <div className="contact-map-section">
            <div className="map-box">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.7749849110423!2d23.79474037584823!3d38.00157937192926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a199055b90fc2f%3A0x7609ac6e665c69aa!2sTzanni%20Alevizatou%2037%2C%20Papagos%20156%2069!5e0!3m2!1sen!2sgr!4v1713276600011!5m2!1sen!2sgr"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="contact-info">
              <a href="tel:+302107792345">
                <FaPhone style={{ color: "#f39c12" }} />
                <div>
                  <strong>+30 210 779 23 45</strong>
                  <p>{t("home.haveQuestion")}</p>
                </div>
              </a>
              <a href="mailto:info@rainconstructiongr.com">
                <FaEnvelope style={{ color: "#f39c12" }} />
                <div>
                  <strong>info@rainconstructiongr.com</strong>
                  <p>{t("home.writeEmail")}</p>
                </div>
              </a>
              <a
                href="https://www.google.com/maps?q=Tzanni+Alevizatou+37,+Papagos+156+69"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt style={{ color: "#f39c12" }} />
                <div>
                  <strong>Tzanni Alevizatou 37, Papagos 156 69</strong>
                  <p>{t("home.visitAnytime")}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Papagou;
