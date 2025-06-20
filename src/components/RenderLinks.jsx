import React from 'react';
import './Sliders.css'; // veya özel bir css de yazabilirsin

const RenderLinks = ({ links }) => {
  return (
    <div className="render-links-container">
      <h3>3D Render Videos</h3>
      <div className="render-button-wrapper">
        {links.map((item, index) => (
          <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="render-button">
            ▶ {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default RenderLinks;
