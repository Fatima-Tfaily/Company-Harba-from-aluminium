import React, { useState, useEffect } from "react";
import "../styles/slider.css";
import image1 from "../images/image1.jpg";
import image2 from "../images/image10.jpg";
import image3 from "../images/image3.jpg";

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2, image3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`slide ${index}`}
          className={`slider-image ${index === currentImage ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default Slider;
