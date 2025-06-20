import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Sliders.css'; // CSS dosyası içinde butonlar için stil tanımları

const interiorImages = [
  '/images/agkilis/1.jpg',
  '/images/agkilis/2.jpg',
  '/images/agkilis/3.jpg',
  '/images/agkilis/4.jpg',
  '/images/agkilis/5.jpg',
  '/images/agkilis/6.jpg',
  '/images/agkilis/7.jpg',
  '/images/agkilis/8.jpg',
  '/images/agkilis/9.jpg',
  '/images/agkilis/10.jpg',
  '/images/agkilis/11.jpg',
  '/images/agkilis/12.jpg',
  '/images/agkilis/13.jpg',
  '/images/agkilis/14.jpg',
  '/images/agkilis/15.jpg',
  '/images/agkilis/16.jpg',
  '/images/agkilis/17.jpg',
  '/images/agkilis/18.jpg',
  '/images/agkilis/19.jpg',
  '/images/agkilis/20.jpg',
];

// Özel ikon bileşenleri
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick}>
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick}>
    <FaArrowLeft />
  </div>
);

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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

 

const renderLinks = [
  {
    label: '3D Render - Ground Floor',
    url: '/videos/Ground Floor Agkilis-Video.mp4',
  },
  {
    label: '3D Render - 1&2 Floor - A Studio',
    url: '/videos/Agkilis 1 floor-A studio Video.mp4',
  },
  {
    label: '3D Render - 1&2 Floor - B',
    url: '/videos/agkilis 1floor-B Video.mp4',
  },
  {
    label: '3D Render - 1&2 Floor - C',
    url: '/videos/agkilis 1floor C– Video.mp4',
  },

  {
    label: '3D Render - 3-4-5 Floor - A',
    url: '/videos/Agkilis 3 Floor - A-Video.mp4',
  },
  {
    label: '3D Render - 3-4-5 Floor - B',
    url: '/videos/agkilis 3 floor-B Video.mp4',
  },
 

];



  return (
    <div className="slider-container">
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

      {/* Yeni 3D Render Butonları */}
      <div className="render-links-container">
        <h3>3D Render Videos</h3>
        <div className="render-button-wrapper">
          {renderLinks.map((item, index) => (
            <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="render-button">
              ▶ {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgkilisInteriorSlider;
