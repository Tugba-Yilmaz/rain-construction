import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next"; // 🔹 çeviri eklendi
import "./Sliders.css";
import ImageSlide from "../ImageSlide";

// 🔹 Görseller
const images = [
  "/images/papagou/24-new.webp",
  "/images/papagou/25-new.webp",
  "/images/papagou/21-new.webp",
  "/images/papagou/27-new.webp",
  "/images/papagou/19-new.webp",
  "/images/papagou/15-new.webp",
  "/images/papagou/31-new.webp",
  "/images/papagou/13-new.webp",
  "/images/papagou/9-new.webp",
  "/images/papagou/10-new.webp",
  "/images/papagou/12-new.webp",
  "/images/papagou/1-new.webp",
  "/images/papagou/3-new.webp",
  "/images/papagou/4-new.webp",
  "/images/papagou/5-new.webp",
  "/images/papagou/6-new.webp",
  "/images/papagou/14-new.webp",
  "/images/papagou/17-new.webp",
  "/images/papagou/26-new.webp",
  "/images/papagou/34-new.webp",
  "/images/papagou/35-new.webp",
  "/images/papagou/29-new.webp",
  "/images/papagou/30-new.webp",
  "/images/papagou/36-new.webp",
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

export default function PapagouInteriorSlider() {
  const { t } = useTranslation(); // 🔹 i18n hook

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // bu slider için 2 ise bırak
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
      {/* 🔹 Başlık çok dilli hale getirildi */}
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
