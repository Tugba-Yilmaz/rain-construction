import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // ikonlar için

const planImages = [
  '/images/agkilis/planground.jpg',
  '/images/agkilis/plan1.jpg',
  '/images/agkilis/plan2.jpg',
  '/images/agkilis/plan3.jpg',
  '/images/agkilis/plan4.jpg',
  '/images/agkilis/plan5.jpg',
];

// Özel arrow bileşenleri
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

const AgkilisPlanSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slider-container">
      <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Apartment Plans</h3>
      <Slider {...settings}>
        {planImages.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Plan ${index + 1}`} style={{ width: '100%', borderRadius: '8px' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AgkilisPlanSlider;
