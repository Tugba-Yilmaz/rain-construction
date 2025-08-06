// src/components/sliders/PirinisPlanSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import './Sliders.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Plan görselleri (public klasöründen)
const images = [
'/images/pirinis/plan1-new.webp',
  '/images/pirinis/plan2-new.webp',
  '/images/pirinis/plan3-new.webp',
  '/images/pirinis/plan4-new.webp',
  '/images/pirinis/plan5-new.webp',
  '/images/pirinis/plan6-new.webp',
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

const PirinisPlanSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />, // Özel sol ok
    nextArrow: <NextArrow />, // Özel sağ ok
  };

  return (
    <div className="slider-wrapper">
      <h3 className="slider-title">Apartment Plans</h3>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="slider-slide">
            <img src={src} alt={`Plan ${index + 1}`} className="slider-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PirinisPlanSlider;