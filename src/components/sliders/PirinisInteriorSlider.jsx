// src/components/sliders/PirinisInteriorSlider.jsx
import React from "react";
import Slider from "react-slick";
import "./Sliders.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import ImageSlide from "../ImageSlide"; // ✅ ortak bileşen

const images = [
  "/images/pirinis/interior1-new.webp",
  "/images/pirinis/interior2-new.webp",
  "/images/pirinis/interior3-new.webp",
  "/images/pirinis/interior4-new.webp",
  "/images/pirinis/interior5-new.webp",
  "/images/pirinis/interior6-new.webp",
];

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick}>
    <FaChevronLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick}>
    <FaChevronRight />
  </div>
);

export default function PirinisInteriorSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Masaüstünde 2 göster
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768, // Mobilde 1 göster
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="slider-wrapper">
      <h3 className="slider-title">Interior Designs</h3>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="slider-slide">
            <ImageSlide
              src={src}
              alt={`Interior ${index + 1}`}
              index={index}
              images={images} // ✅ Lightbox için tüm dizi
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
