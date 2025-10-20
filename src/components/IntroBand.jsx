import React from 'react';
import { Link } from 'react-router-dom';
import './IntroBand.css';

export default function IntroBand() {
  

  return (
    <section id="hero" className="intro-band">
      <div className="intro-band__overlay" aria-hidden="true" />
      <div className="intro-band__inner">
        <div className="intro-band__content">
          <div className="intro-band__actions">   
          </div>
        </div>
      </div>
    </section>
  );
}
