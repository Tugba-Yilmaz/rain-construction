// src/components/sliders/PirinisPlanSlider.jsx
import React from "react";
import Slider from "react-slick";
import "./Sliders.css";
import ImageSlide from "../ImageSlide";

const images = [
  "/images/pirinis/plan1-new.webp",
  "/images/pirinis/plan2-new.webp",
  "/images/pirinis/plan3-new.webp",
  "/images/pirinis/plan4-new.webp",
  "/images/pirinis/plan5-new.webp",
  "/images/pirinis/plan6-new.webp",
];

// Oklar — Slick prop'larını devral!
const NextArrow = ({ className, style, onClick }) => (
  <button
    className={`${className || ""} custom-arrow is-next`.trim()}
    style={{ ...style }}
    onClick={onClick}
    aria-label="Next"
  />
);

const PrevArrow = ({ className, style, onClick }) => (
  <button
    className={`${className || ""} custom-arrow is-prev`.trim()}
    style={{ ...style }}
    onClick={onClick}
    aria-label="Previous"
  />
);

export default function PirinisPlanSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0",
    variableWidth: false,
    adaptiveHeight: true,
    mobileFirst: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slider-container plan-slider">
      <h3 className="slider-title">Apartment Plans</h3>

      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i}>
            <div className="slide-inner">{/* gutter burada */}
              <div className="plan-frame">{/* sabit oranlı çerçeve */}
                <ImageSlide
                  src={src}
                  alt={`Plan ${i + 1}`}
                  index={i}
                  images={images}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
