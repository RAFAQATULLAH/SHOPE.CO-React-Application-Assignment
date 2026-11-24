
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import Reviews from "./Reviews";
import { useEffect } from "react";
import "./ProductPage.css";
import Anouncementbar from "../../Components/anouncementbar/announcmentbar";
import Nav from "../../Components/Nav/Nav";
import Products from "../../Components/mainproducts/products";
import Newsletter from "../../Components/News/Newsletters";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchSingleProduct,
  clearSelectedProduct,
} from "../../redux/slices/productSlice";

function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    selectedProduct: displayproduct,
    detailsLoading,
    detailsError,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));

    return () => {
      dispatch(clearSelectedProduct());
    };
  }, [dispatch, id]);

  if (detailsLoading) {
    return <h2>Loading product...</h2>;
  }

  if (detailsError || !displayproduct) {
    return <h2>{detailsError || "Product not found"}</h2>;
  }

  return (
    <>
      <Anouncementbar />
      <Nav />

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
          <ProductGallery product={displayproduct} />
          <ProductInfo product={displayproduct} />
        </section>

        <ProductTabs />
        <Reviews />
      </main>

      <Products />
      <Newsletter />
      <Footer />
    </>
  );
}

export default ProductPage;