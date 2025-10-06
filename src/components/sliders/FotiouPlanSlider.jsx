// src/components/sliders/FotiouPlanSlider.jsx
import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Sliders.css";

import ImageSlide from "../ImageSlide"; // ✅ ortak bileşen

const planImages = [
  "/images/fotiou/1ST FLOOR-FOTIOU.png",
  "/images/fotiou/2ND FLOOR-FOTIOU.png",
  "/images/fotiou/3RD FLOOR-FOTIOU.png",
  "/images/fotiou/4TH FLOOR-FOTIOU.png",
  "/images/fotiou/5TH FLOOR-FOTIOU.png",
  "/images/fotiou/6TH FLOOR-FOTIOU.png",
  
  //"/images/fotiou/fotiou-plan6-new.webp",
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

export default function FotiouPlanSlider() {
 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0',
    variableWidth: false,
    adaptiveHeight: true,
    mobileFirst: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div
      className="slider-container plan-slider"
      style={{ marginTop: "3rem", position: "relative" }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Apartment Plans
      </h3>
      <Slider {...settings}>
        {planImages.map((src, index) => (
          <div key={index}>
            <div className="slide-inner">
               <div className="plan-frame"> 
            <ImageSlide
              src={src}
              alt={`Plan ${index + 1}`}
              index={index}
              images={planImages} // ✅ Lightbox için tüm dizi
            />
            </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
