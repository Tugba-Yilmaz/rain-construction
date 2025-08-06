import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const planImages = [
 '/images/fotiou/fotiou-plan1-new.webp',
  '/images/fotiou/fotiou-plan2-new.webp',
  '/images/fotiou/fotiou-plan3-new.webp',
  '/images/fotiou/fotiou-plan4-new.webp',
  '/images/fotiou/fotiou-plan5-new.webp',
  '/images/fotiou/fotiou-plan6-new.webp',
];

// Özel sol buton
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      position: 'absolute',
      left: '-25px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      zIndex: 1
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
      position: 'absolute',
      right: '-25px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      zIndex: 1
    }}
  >
    <FaChevronRight size={24} color="#333" />
  </button>
);

const FotiouPlanSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <div className="slider-container" style={{ marginTop: '3rem', position: 'relative' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Apartment Plans</h3>
      <Slider {...settings}>
        {planImages.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Plan ${index + 1}`} style={{ width: '100%', borderRadius: '8px', padding: '0 10px' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FotiouPlanSlider;
