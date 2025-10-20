import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next"; // 🔹 çeviri eklendi
import "./Sliders.css";
import ImageSlide from "../ImageSlide";

// 🔹 Görseller
const images = [
  "/images/papagou/papagou-interior1-new.webp",
  "/images/papagou/papagou-interior2-new.webp",
  "/images/papagou/papagou-interior3-new.webp",
  "/images/papagou/papagou-interior4-new.webp",
  "/images/papagou/papagou-interior5-new.webp",
  "/images/papagou/papagou-interior6-new.webp",
  "/images/papagou/papagou-interior7-new.webp",
  "/images/papagou/papagou-interior8-new.webp",
  "/images/papagou/papagou-interior9-new.webp",
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
      <h3 className="slider-title" style={{ textAlign: "center", marginBottom: "1rem" }}>
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
