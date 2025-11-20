// src/pages/projects/Fotiou.jsx
import React from "react";
import Layout from "../../components/Layout";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Fotiou.css";
import FotiouPlanSlider from "../../components/sliders/FotiouPlanSlider";
import FotiouInteriorSlider from "../../components/sliders/FotiouInteriorSlider";

// ✅ SEO için react-head
import { Title, Meta, Link as HeadLink } from "react-head";

const Fotiou = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* ✅ Sayfa bazlı SEO meta’ları */}
      <Title>Fotiou Koritsas 84 Project | Rain Construction</Title>
      <Meta
        name="description"
        content="Fotiou Koritsas 84 residential building project by Rain Construction in Piraeus, featuring strong construction quality, modern architecture, and Golden Visa investment potential."
      />
      <HeadLink
        rel="canonical"
        href="https://rainconstructiongr.com/projects/fotiou-koritsas-84"
      />

      <Layout>
        <div className="project-detail-container">
          {/* Üst bilgi */}
          <div className="project-header">
            <div className="project-image-wrap">
              <img
                src="/images/fotiou/fotiou-new.webp"
                alt="Fotiou Koritsas 84"
                className="project-main-image"
                loading="eager"
                fetchpriority="high"
              />
            </div>
            <div className="project-description">
              <h2>{t("fotiou.title")}</h2>
              <h3>{t("fotiou.subtitle")}</h3>
              <p>{t("fotiou.description1")}</p>
              <p>{t("fotiou.description2")}</p>

              <h4>{t("fotiou.areaTitle")}</h4>
              <p>{t("fotiou.area1")}</p>
              <p>{t("fotiou.area2")}</p>

              <h4>{t("fotiou.locationTitle")}</h4>
              <ul className="location-benefits">
                <li>
                  <strong>{t("fotiou.metro")}</strong> 550 meters
                </li>
                <li>
                  <strong>{t("fotiou.airport")}</strong> 35 km
                </li>
                <li>
                  <strong>{t("fotiou.port")}</strong> 1.5 km
                </li>
                <li>
                  <strong>{t("fotiou.school")}</strong> 350 meters
                </li>
                <li>
                  <strong>{t("fotiou.university")}</strong> 2.3 km
                </li>
              </ul>

              <h4>{t("fotiou.featuresTitle")}</h4>
              <ul>
                <li>{t("fotiou.feature1")}</li>
                <li>{t("fotiou.feature2")}</li>
                <li>{t("fotiou.feature3")}</li>
                <li>{t("fotiou.feature4")}</li>
              </ul>

              <p>
                <strong>{t("fotiou.cta")}</strong>
              </p>
            </div>
          </div>

          {/* İstatistikler */}
          <div className="project-stats">
            {[
              {
                icon: "/images/m2-icon.png",
                value: "75",
                label: "Ground (m²)",
              },
              {
                icon: "/images/parking-icon.png",
                value: "3",
                label: "Car parkings",
              },
              { icon: "/images/floor-icon.png", value: "6", label: "Floors" },
              {
                icon: "/images/storage-icon.png",
                value: "6",
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

          <FotiouPlanSlider />
          <div style={{ marginTop: "2rem" }} />
          <FotiouInteriorSlider />

          {/* Harita ve iletişim */}
          <div className="contact-map-section">
            <div className="map-box">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Fotiou+Koritsas+84,+Pireas+185+45&output=embed"
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

              <a href="mailto:rainconstructiongr@gmail.com">
                <FaEnvelope style={{ color: "#f39c12" }} />
                <div>
                  <strong>rainconstructiongr@gmail.com</strong>
                  <p>{t("home.writeEmail")}</p>
                </div>
              </a>

              <a
                href="https://maps.google.com?q=Fotiou+Koritsas+84,+Pireas+185+45"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt style={{ color: "#f39c12" }} />
                <div>
                  <strong>Fotiou Koritsas 84, Pireas 185 45</strong>
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

export default Fotiou;
