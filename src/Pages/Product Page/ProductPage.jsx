import React from "react";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import Reviews from "./Reviews";

import "./ProductPage.css";
import Anouncementbar from "../../Components/anouncementbar/announcmentbar";
import Nav from "../../Components/Nav/Nav";
import Products from "../../Components/mainproducts/products";
import Newsletter from "../../Components/News/Newsletters";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import Items from "../../../data";

const ProductPage = () => {
  const { id } = useParams();

    const displayproduct = Items.find(
        (item) => item.id === Number(id)
    );

    if (!displayproduct) {
        return <h2>Product not found</h2>;
    }

  return (
    <>
    <Anouncementbar/>
    <Nav/>
     <main className="product-page">

      <div className="product-breadcrumb">
        Home
        <span>›</span>
        Shop
        <span>›</span>
        Men
        <span>›</span>
        T-Shirts
      </div>

      <section className="product-main">
        <ProductGallery product={displayproduct}/>

        <ProductInfo product={displayproduct}/>

      </section>

      <ProductTabs />

      <Reviews />

    </main>

    <Products/>
    
    <Newsletter/>

    <Footer/>
    </>
    
  );
};

export default ProductPage;