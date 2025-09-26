// src/components/ImageSlide.jsx
import React from "react";
import { useLightbox } from "./LightboxProvider";

export default function ImageSlide({ src, alt, index, images }) {
  const { open } = useLightbox();

  const handleKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open(images, index);
    }
  };

  return (
    <img
      src={src}
      alt={alt || `Slide ${index + 1}`}
      className="slider-img"
      role="button"
      tabIndex={0}
      onClick={() => open(images, index)}
      onKeyDown={handleKey}
      draggable={false}
      style={{ cursor: "pointer" }}
    />
  );
}
