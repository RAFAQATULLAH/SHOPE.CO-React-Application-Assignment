import React, { useState } from "react";
import "./ProductGallery.css";

const ProductGallery = ({ product }) => {

    const images = [
        product.images.img1,
        product.images.img2,
        product.images.img3
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="product-gallery">

            <div className="product-thumbnails">

                {images.map((image, index) => (

                    <button
                        key={index}
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
                    alt={product.name}
                />

            </div>

        </div>
    );
};

export default ProductGallery;