// src/components/sliders/AgkilisPlanSlider.jsx
import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// (opsiyonel) ortak slider stillerin varsa aç:
import "./Sliders.css";

import ImageSlide from "../ImageSlide"; // sliders klasöründen bir seviye yukarı

const planImages = [
  "/images/agkilis/ground.webp",
  "/images/agkilis/1st.webp",
  "/images/agkilis/2nd.webp",
  "/images/agkilis/3rd.webp",
  "/images/agkilis/4th.webp",
  "/images/agkilis/5th.webp",
];

// Özel ok bileşenleri
// Özel ok bileşenleri (prop devralma + sınıfları birleştirme)
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className || ''} custom-arrow is-next`.trim()}
      style={{ ...style }}
      onClick={onClick}
      aria-label="Next"
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className || ''} custom-arrow is-prev`.trim()}
      style={{ ...style }}
      onClick={onClick}
      aria-label="Previous"
    />
  );
};

export default function AgkilisPlanSlider() {
 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: false,
  centerPadding: '0',
  variableWidth: false,
  adaptiveHeight: true,
  mobileFirst: true,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};


  return (
    <div className="slider-container plan-slider">
      <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>Apartment Plans</h3>

      <Slider {...settings}>
        {planImages.map((src, index) => (
          <div key={index} className="plan-slider">
            <div className="plan-frame" > 
            <ImageSlide
              src={src}
              alt={`Plan ${index + 1}`}
              index={index}
              images={planImages}   // ✅ Lightbox için tüm dizi
            />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
