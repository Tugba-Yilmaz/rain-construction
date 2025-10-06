// src/components/sliders/PirinisInteriorSlider.jsx
import React from "react";
import Slider from "react-slick";
import "./Sliders.css";
import ImageSlide from "../ImageSlide";

const images = [
  "/images/pirinis/interior1-new.webp",
  "/images/pirinis/interior2-new.webp",
  "/images/pirinis/interior3-new.webp",
  "/images/pirinis/interior4-new.webp",
  "/images/pirinis/interior5-new.webp",
  "/images/pirinis/interior6-new.webp",
];

// Ok bileşenleri — Slick prop'larını devral!
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

export default function PirinisInteriorSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,                // desktop/tablet
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0",
    variableWidth: false,
    adaptiveHeight: true,
    mobileFirst: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="slider-container interior-slider" style={{ marginTop: "3rem" }}>
      <h3 className="slider-title">INTERIOR DESIGNS</h3>

      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i}>
            <div className="slide-inner">
              <ImageSlide
                src={src}
                alt={`Interior ${i + 1}`}
                index={i}
                images={images}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
