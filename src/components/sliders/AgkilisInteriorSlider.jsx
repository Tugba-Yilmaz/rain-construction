import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const interiorImages = [
  '/images/agkilis/2.jpg',
  '/images/agkilis/4.jpg',
  '/images/agkilis/7.jpg',
  '/images/agkilis/9.jpg',
  '/images/agkilis/12.jpg',
    '/images/agkilis/3.jpg',
    '/images/agkilis/5.jpg',
];

// Özel ikon bileşenleri
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

const AgkilisInteriorSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slider-container">
      <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Interior Design</h3>
      <Slider {...settings}>
        {interiorImages.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Interior ${index + 1}`} style={{ width: '100%', borderRadius: '8px' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AgkilisInteriorSlider;
