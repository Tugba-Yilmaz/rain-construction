// src/components/sliders/FotiouInteriorSlider.jsx
import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Sliders.css";

import ImageSlide from "../ImageSlide"; // ✅ Ortak bileşen

const interiorImages = [
  "/images/fotiou/fotiou-interior1-new.webp",
  "/images/fotiou/fotiou-interior2-new.webp",
  "/images/fotiou/fotiou-interior3-new.webp",
  "/images/fotiou/fotiou-interior4-new.webp",
  "/images/fotiou/fk14-1-new.webp",
  "/images/fotiou/fk6-new.webp",
  "/images/fotiou/6-new.webp",
  "/images/fotiou/5-new.webp",
  "/images/fotiou/2-new.webp",
  "/images/fotiou/1-new.webp",
];

// Özel sol buton
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      position: "absolute",
      left: "-25px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      cursor: "pointer",
      zIndex: 1,
    }}
  >
    <FaChevronLeft size={24} color="#333" />
  </button>
);

// Özel sağ buton
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      position: "absolute",
      right: "-25px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      cursor: "pointer",
      zIndex: 1,
    }}
  >
    <FaChevronRight size={24} color="#333" />
  </button>
);

export default function FotiouInteriorSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Masaüstünde 2
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768, // Mobil için
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="slider-container" style={{ marginTop: "3rem", position: "relative" }}>
      <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>Interior Design</h3>
      <Slider {...settings}>
        {interiorImages.map((src, index) => (
          <div key={index}>
            <ImageSlide
              src={src}
              alt={`Interior ${index + 1}`}
              index={index}
              images={interiorImages} // ✅ Lightbox için gerekli
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
