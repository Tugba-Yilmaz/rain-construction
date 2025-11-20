// src/components/Navbar.jsx
import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import allProjects from "../data/projects";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProjectsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsProjectsOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Navbar yüksekliğini CSS değişkenine yaz (scroll-margin için)
  useEffect(() => {
    const applyPadding = () => {
      const el = document.querySelector(".navbar");
      if (!el) return;
      const h = el.offsetHeight || 80;
      // Bu satırı İSTERSEN kaldırabilirsin; hero’nun hemen altta başlamasını istiyorsan body padding verme:
      document.body.style.paddingTop = `${h}px`;
      document.documentElement.style.setProperty("--nav-h", `${h}px`);
    };
    applyPadding();
    window.addEventListener("resize", applyPadding);
    return () => window.removeEventListener("resize", applyPadding);
  }, []);

  // Home davranışı (/#hero)
  const goHome = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsProjectsOpen(false);

    if (location.pathname !== "/") {
      navigate("/#hero");
      return;
    }
    const el = document.getElementById("hero");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, navigate]);

  // Projects davranışı (/#projects)
  const goToProjects = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsProjectsOpen(false);

    if (location.pathname !== "/") {
      navigate("/#projects");
      return;
    }
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.pathname, navigate]);

  return (
    <nav className="navbar" role="navigation" aria-label="Primary">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="logo-link"
          >
            <img
              src="/images/rain-logo-new.webp"
              alt="Rain Construction Logo"
            />
            <span className="brand-text">RAIN CONSTRUCTION</span>
          </Link>
        </div>

        <div
          className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}
          id="primary-nav"
        >
          {/* Home: buton gibi çalışsın (link görünümü için CSS ekledim) */}
          <button type="button" className="linklike" onClick={goHome}>
            {t("navbar.home")}
          </button>

          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
            {t("navbar.about")}
          </Link>

          <div
            className={`nav-item dropdown ${isProjectsOpen ? "open" : ""}`}
            onMouseLeave={() => setIsProjectsOpen(false)}
          >
            <button
              className="dropdown-toggle"
              aria-haspopup="true"
              aria-expanded={isProjectsOpen}
              onMouseEnter={() => setIsProjectsOpen(true)}
              onClick={goToProjects}
              type="button"
            >
              {t("navbar.projects")} ▾
            </button>

            <div className="dropdown-menu" role="menu">
              {allProjects.map((project) =>
                project.comingSoon ? (
                  <span
                    key={project.id}
                    className="disabled-link"
                    role="menuitem"
                    aria-disabled="true"
                  >
                    {project.title}
                  </span>
                ) : (
                  <Link
                    key={project.id}
                    to={`/projects/${project.id}`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsProjectsOpen(false);
                    }}
                    role="menuitem"
                  >
                    {project.title}
                  </Link>
                )
              )}
            </div>
          </div>

          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            {t("navbar.contact")}
          </Link>

          <div className="lang-select">
            <label htmlFor="lang" className="sr-only">
              Language
            </label>
            <select
              id="lang"
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
            >
              <option value="en">EN</option>
              <option value="gr">GR</option>
            </select>
          </div>
        </div>

        <button
          className="burger"
          aria-controls="primary-nav"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
