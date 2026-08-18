import React, { useState } from "react";

import "./ProductGallery.css";

const images = [
  "/images/product-1.jpg",
  "/images/product-2.jpg",
  "/images/product-model.jpg",
];

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="product-gallery">

      <div className="product-thumbnails">

        {images.map((image, index) => (
          <button
            key={image}
            className={`product-thumbnail ${
              selectedImage === image ? "active" : ""
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image}
              alt={`Product ${index + 1}`}
            />
          </button>
        ))}

      </div>

      <div className="product-main-image">

        <img
          src={selectedImage}
          alt="One Life Graphic T-Shirt"
        />

      </div>

    </div>
  );
};

export default ProductGallery;