// src/components/sliders/PapagouInteriorSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import './Sliders.css';
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
  

const PapagouInteriorSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <div className="slider-wrapper">
      <h2 className="slider-title">Interior Designs</h2>
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i} className="slider-slide">
            <img src={img} alt={`Interior ${i + 1}`} className="slider-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PapagouInteriorSlider;
