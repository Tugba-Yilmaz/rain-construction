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


const PrevArrow = ({ onClick }) => (
  <button
    type="button"
    className="custom-arrow prev"
    aria-label="Previous"
    onClick={(e) => {
      e.stopPropagation();
      onClick?.(e);
    }}
  >
    <FaChevronLeft size={20} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    type="button"
    className="custom-arrow next"
    aria-label="Next"
    onClick={(e) => {
      e.stopPropagation();
      onClick?.(e);
    }}
  >
    <FaChevronRight size={20} />
  </button>
);

export default function FotiouInteriorSlider() {
 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,               // bu slider için 2 ise bırak
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0',
    variableWidth: false,
    adaptiveHeight: true,
    mobileFirst: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  return (
    // 🔹 interior-slider: sadece bu slider'ı hedefleyen scope sınıfı
    <div className="slider-container interior-slider" style={{ marginTop: "3rem", position: "relative" }}>
      <h3 className="slider-title" style={{ marginBottom: "1rem" }}>Interior Design</h3>

      <Slider {...settings}>
        {interiorImages.map((src, index) => (
          <div key={index}>
             <div className="slide-inner">
            <ImageSlide
              src={src}
              alt={`Interior ${index + 1}`}
              index={index}
              images={interiorImages}   // ✅ Lightbox için gerekli dizi
            />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
