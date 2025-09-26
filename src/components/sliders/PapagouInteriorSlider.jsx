// src/components/sliders/PapagouInteriorSlider.jsx
import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./Sliders.css";
import ImageSlide from "../ImageSlide"; // ✅ ortak bileşen

const images = [
  "/images/papagou/papagou-interior1-new.webp",
  "/images/papagou/papagou-interior2-new.webp",
  "/images/papagou/papagou-interior3-new.webp",
  "/images/papagou/papagou-interior4-new.webp",
  "/images/papagou/papagou-interior5-new.webp",
  "/images/papagou/papagou-interior6-new.webp",
  "/images/papagou/papagou-interior7-new.webp",
  "/images/papagou/papagou-interior8-new.webp",
  "/images/papagou/papagou-interior9-new.webp",
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

export default function PapagouInteriorSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="slider-wrapper">
      <h2 className="slider-title">Interior Designs</h2>
      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i} className="slider-slide">
            <ImageSlide
              src={src}
              alt={`Interior ${i + 1}`}
              index={i}
              images={images} // ✅ Lightbox için tüm array
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
