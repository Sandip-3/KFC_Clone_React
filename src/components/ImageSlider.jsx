import React, { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 6000);

    return () => {
      clearInterval(timer);
    };
  }, [currentImageIndex]);

  return (
    <div className="relative z-[-1] ">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="w-full h-auto object-cover border-b border-gray-200"
      />

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full border border-red-200 ${
              index === currentImageIndex ? "bg-red-600" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
