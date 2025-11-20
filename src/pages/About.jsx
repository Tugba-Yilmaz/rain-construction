// src/pages/About.jsx
import React from "react";
import "./Home.css";
import { useTranslation } from "react-i18next";
import Layout from "../components/Layout";

// ✅ SEO için react-head importları
import { Title, Meta, Link as HeadLink } from "react-head";

function About() {
  const { t } = useTranslation();

  return (
    <>
      {/* ✅ Sayfa bazlı SEO meta’ları */}
      <Title>About Us | Rain Construction</Title>
      <Meta
        name="description"
        content="Rain Construction is a construction company in Athens specializing in residential and commercial building projects."
      />
      <HeadLink rel="canonical" href="https://rainconstructiongr.com/about" />

      <Layout>
        <div className="about-page" style={{ padding: "4rem 2rem" }}>
          <h1 style={{ textAlign: "center", marginBottom: "3rem" }}>
            {t("about.title")}
          </h1>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <img
              src="/images/rain-logo2.png"
              alt="Rain Construction Logo"
              style={{ width: "200px", height: "200px", objectFit: "contain" }}
            />

            <div
              style={{
                maxWidth: "500px",
                fontSize: "1rem",
                color: "#444",
                lineHeight: "1.6",
              }}
            >
              <h3>{t("about.subtitle")}</h3>
              <p>{t("about.description")}</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default About;
