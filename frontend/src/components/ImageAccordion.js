import React, { useState } from "react";
import "../styles/image-accordion.css";

const ImageAccordion = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const previousImage = () => {
    setSelectedImage(selectedImage - 1);
  }
  const nextImage = () => {
    setSelectedImage(selectedImage + 1);
  }

  console.log(selectedImage);

  return (
    <div className="image-accordion">
      <ul className="image-accordion__list">
        <button 
          className="image-accordion__previous-button"
          onClick={previousImage}
          disabled={selectedImage === 0}
        ></button>
        {(images || []).map((image, index) => (
          <li 
          key={index}
          className="image-accordion__list-item"
          >
            <img 
              className="image-accordion__list-image" 
              src={image} 
              alt="" 
            />
          </li>
        ))}
        <button 
          className="image-accordion__next-button"
          onClick={nextImage}
          disabled={selectedImage === images.length - 1}
        ></button>
      </ul>
    </div>
  )
};

export default ImageAccordion;