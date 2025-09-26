// src/components/sliders/PapagouPlansSlider.jsx
import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Sliders.css";

import ImageSlide from "../ImageSlide"; // ✅ ortak bileşen

const images = [
  "/images/papagou/plan1-new.webp",
  "/images/papagou/plan2-new.webp",
  "/images/papagou/plan3-new.webp",
  "/images/papagou/plan4-new.webp",
  "/images/papagou/plan5-new.webp",
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

export default function PapagouPlansSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="slider-wrapper">
      <h2 className="slider-title">Apartment Plans</h2>
      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i} className="slider-slide">
            <ImageSlide
              src={src}
              alt={`Plan ${i + 1}`}
              index={i}
              images={images} // ✅ Lightbox için tüm dizi
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
