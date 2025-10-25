import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next"; // 🔹 çeviri eklendi
import "./Sliders.css";
import ImageSlide from "../ImageSlide";

// 🔹 Görseller
const images = [
  "/images/pirinis/Priinis5-B-Floor-Oturma-odası.webp",
  "/images/pirinis/Priinis 5-1.webp",
  "/images/pirinis/Priinis 5-2.webp",
  "/images/pirinis/Priinis 5-4.webp",
  "/images/pirinis/Priinis 5-6.webp",
  "/images/pirinis/Priinis 5-9.webp",
  "/images/pirinis/Priinis 5-10.webp",
  "/images/pirinis/Priinis 5-12.webp",
  "/images/pirinis/Priinis 5-14.webp",
  "/images/pirinis/Priinis 5-18.webp",
  "/images/pirinis/Priinis 5-B-Floor -Oturma-odası-23.webp",
  "/images/pirinis/Priinis5-B-Floor-Balkon-21.webp",
  "/images/pirinis/Priinis5-B-Floor-Oturma-odası-22.webp",
  
  "/images/pirinis/Priinis5-B-Floor-Yatak-odası-20.webp",
  
];

// 🔹 Ok bileşenleri — Slick prop'larını devralır
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
  const { t } = useTranslation(); // 🔹 i18n hook

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // desktop/tablet
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
    <div
      className="slider-container interior-slider"
      style={{ marginTop: "3rem" }}
    >
      {/* 🔹 Başlık çok dilli */}
      <h3
        className="slider-title"
        style={{ textAlign: "center", marginBottom: "1rem" }}
      >
        {t("sections.interiorDesign")}
      </h3>

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
