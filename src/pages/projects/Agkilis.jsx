// src/pages/projects/Agkilis.jsx
import React from "react";
import Layout from "../../components/Layout";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Fotiou.css";
import AgkilisPlanSlider from "../../components/sliders/AgkilisPlanSlider";
import AgkilisInteriorSlider from "../../components/sliders/AgkilisInteriorSlider";
import { useTranslation } from "react-i18next";

// ✅ SEO için react-head
import { Title, Meta, Link as HeadLink } from "react-head";

const Agkilis = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* ✅ Sayfa bazlı SEO meta’ları */}
      <Title>Agklis Project | Rain Construction</Title>
      <Meta
        name="description"
        content="Agklis project by Rain Construction in Athens, offering premium construction quality, efficient layout design, and Golden Visa investment potential."
      />
      <HeadLink
        rel="canonical"
        href="https://rainconstructiongr.com/projects/agklis"
      />

      <Layout>
        <div className="project-detail-container">
          {/* Header */}
          <div className="project-header">
            <img
              src="/images/agkilis/agklis-new.webp"
              alt="Agkilis 56"
              className="project-main-image"
              loading="eager"
              fetchpriority="high"
            />

            <div className="project-description">
              <h2>{t("agkilis.title")}</h2>
              <h3>{t("agkilis.subtitle")}</h3>

              <p>{t("agkilis.description1")}</p>

              <h4>{t("agkilis.whyTitle")}</h4>
              <ul>
                <li>{t("agkilis.point1")}</li>
                <li>{t("agkilis.point2")}</li>
                <li>{t("agkilis.point3")}</li>
                <li>{t("agkilis.point4")}</li>
                <li>{t("agkilis.point5")}</li>
              </ul>

              <p>{t("agkilis.description2")}</p>
            </div>
          </div>

          {/* Project Stats */}
          <div className="project-stats">
            {[
              {
                icon: "/images/m2-icon.png",
                value: "135",
                label: "Ground (m²)",
              },
              {
                icon: "/images/parking-icon.png",
                value: "2",
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

          {/* Sliders */}
          <AgkilisPlanSlider />
          <div style={{ marginTop: "2rem" }} />
          <AgkilisInteriorSlider />

          {/* Contact + Map */}
          <div className="contact-map-section">
            <div className="map-box">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Agkilis+56,+Athina+117+43&output=embed"
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
                href="https://maps.google.com?q=Agkilis+56,+Athina+117+43"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt style={{ color: "#f39c12" }} />
                <div>
                  <strong>Agkilis 56, Athina 117 43</strong>
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

export default Agkilis;
