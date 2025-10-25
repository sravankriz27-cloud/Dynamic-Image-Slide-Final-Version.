import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const images = [
  require("../assets/img1.jpg"),
  require("../assets/img2.jpg"),
  require("../assets/img3.jpg"),
  require("../assets/img4.jpg"),
  require("../assets/img5.jpg"),
  require("../assets/img6.jpg"),
  require("../assets/img7.jpg")
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div className="slider">
      <img src={images[currentIndex]} alt="slider" className="slide-image" />
      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
}

export default ImageSlider;