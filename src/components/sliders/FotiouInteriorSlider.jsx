import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const interiorImages = [
  '/images/fotiou/fotiou-interior1.jpg',
  '/images/fotiou/fotiou-interior2.jpg',
  '/images/fotiou/fotiou-interior3.jpg',
  '/images/fotiou/fotiou-interior4.jpg',
  '/images/fotiou/fk14-1.jpg',
  '/images/fotiou/fk6.jpg',
  '/images/fotiou/6.jpg',
  '/images/fotiou/5.jpg',
  '/images/fotiou/2.jpg',
  '/images/fotiou/1.jpg',
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

const FotiouInteriorSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Masaüstünde 2 göster
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768, // Mobil için
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container" style={{ marginTop: '3rem', position: 'relative' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Interior Design</h3>
      <Slider {...settings}>
        {interiorImages.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Interior ${index + 1}`}
              className="slider-img"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FotiouInteriorSlider;
