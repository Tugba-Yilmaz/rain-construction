// src/components/sliders/AgkilisInteriorSlider.jsx
import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Sliders.css";

import ImageSlide from "../ImageSlide"; // ✅ Ortak slide bileşeni

// Tüm görseller tek dizide
const interiorImages = [
  "/images/agkilis/1.webp",
  "/images/agkilis/2.webp",
  "/images/agkilis/3.webp",
  "/images/agkilis/4.webp",
  "/images/agkilis/5.webp",
  "/images/agkilis/6.webp",
  "/images/agkilis/7.webp",
  "/images/agkilis/8.webp",
  "/images/agkilis/9.webp",
  "/images/agkilis/10.webp",
  "/images/agkilis/11.webp",
  "/images/agkilis/12.webp",
  "/images/agkilis/13.webp",
  "/images/agkilis/14.webp",
  "/images/agkilis/15.webp",
  "/images/agkilis/16.webp",
  "/images/agkilis/17.webp",
  "/images/agkilis/18.webp",
  "/images/agkilis/19.webp",
  "/images/agkilis/20.webp",
];

// Slick özel ok bileşenleri
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick}>
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const AgkilisInteriorSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
     centerMode: false,
  centerPadding: '0',
  variableWidth: false,
  adaptiveHeight: true,
  mobileFirst: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const renderLinks = [
    { label: "3D Render - Ground Floor", url: "/videos/Ground Floor Agkilis-Video.mp4" },
    { label: "3D Render - 1&2 Floor - A Studio", url: "/videos/Agkilis 1 floor-A studio Video.mp4" },
    { label: "3D Render - 1&2 Floor - B", url: "/videos/agkilis 1floor-B Video.mp4" },
    { label: "3D Render - 1&2 Floor - C", url: "/videos/agkilis 1floor C– Video.mp4" },
    { label: "3D Render - 3-4-5 Floor - A", url: "/videos/Agkilis 3 Floor - A-Video.mp4" },
    { label: "3D Render - 3-4-5 Floor - B", url: "/videos/agkilis 3 floor-B Video.mp4" },
  ];

  return (
    <div className="slider-container interior-slider">
      <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>Interior Design</h3>

      <Slider {...settings}>
        {interiorImages.map((src, index) => (
          <div key={index}>
             <div className="slide-inner">
            <ImageSlide
              src={src}
              alt={`Interior ${index + 1}`}
              index={index}
              images={interiorImages} // ✅ lightbox için tüm dizi
            />
            </div>
          </div>
        ))}
      </Slider>

      {/* 3D Render Butonları */}
      <div className="render-links-container">
        <h3>3D Render Videos</h3>
        <div className="render-button-wrapper">
          {renderLinks.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="render-button"
            >
              ▶ {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgkilisInteriorSlider;
