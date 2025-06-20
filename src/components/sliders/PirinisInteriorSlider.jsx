// src/components/sliders/PirinisInteriorSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import './Sliders.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  '/images/pirinis/interior1.jpg',
  '/images/pirinis/interior2.jpg',
  '/images/pirinis/interior3.jpg',
  '/images/pirinis/interior4.jpg',
  '/images/pirinis/interior5.jpg',
  '/images/pirinis/interior6.jpg',
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

const PirinisInteriorSlider = () => {
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
        breakpoint: 768, // Ekran genişliği 768px ve altıysa
        settings: {
          slidesToShow: 1, // 1 görsel göster
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-wrapper">
      <h3 className="slider-title">Interior Designs</h3>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="slider-slide">
            <img src={src} alt={`Interior ${index + 1}`} className="slider-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default PirinisInteriorSlider;
