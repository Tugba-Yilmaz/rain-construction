// src/components/sliders/PapagouPlansSlider.jsx
import React from "react";
import Slider from "react-slick";
import "./Sliders.css";
import ImageSlide from "../ImageSlide";

const images = [
  "/images/papagou/plan1-new.webp",
  "/images/papagou/plan2-new.webp",
  "/images/papagou/plan3-new.webp",
  "/images/papagou/plan4-new.webp",
  "/images/papagou/plan5-new.webp",
];

// Ok bileşenleri — Slick prop'larını DEVRAL!
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

export default function PapagouPlansSlider() {
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
    <div className="slider-container plan-slider" style={{ marginTop: "3rem" }}>
      <h3 className="slider-title">Apartment Plans</h3>

      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i}>
            <div className="slide-inner">
              <div className="plan-frame">
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
