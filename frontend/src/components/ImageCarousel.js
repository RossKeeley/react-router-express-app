import React, { useState } from "react";
import "../styles/image-carousel.css";

const ImageCarousel = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const previousImage = () => {
    setSelectedImage(selectedImage - 1);
  }
  const nextImage = () => {
    setSelectedImage(selectedImage + 1);
  }

  console.log(selectedImage);

  return (
    <div className="image-carousel">
      <ul className="image-carousel__list">
        {(images || []).map((image, index) => (
          <li 
          key={index}
          className={`image-carousel__list-item ${index === selectedImage ? "item-showing" : ""}`}
          >
            <img 
              className="image-carousel__list-image" 
              src={image} 
              alt="" 
            />
          </li>
        ))}
        {images.length > 1 && (
          <button 
          className="image-carousel__previous-button"
          onClick={previousImage}
          disabled={selectedImage === 0}
          ></button>
        )}
        {images.length > 1 && (
          <button 
          className="image-carousel__next-button"
          onClick={nextImage}
          disabled={selectedImage === images.length - 1}
          ></button>
        )}
      </ul>
    </div>
  )
};

export default ImageCarousel;