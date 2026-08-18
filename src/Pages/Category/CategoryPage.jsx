import React from "react";
import CategoryHeader from "./CategoryHeader";
import CategorySidebar from "./CategorySidebar";
import Pagination from "./Pagination";
import Card from "../../Components/Productcard/productcard";
import "./CategoryPage.css";
import Nav from "../../Components/Nav/Nav"
import Announcement from "../../Components/anouncementbar/announcmentbar"
import Newsletter from "../../Components/News/Newsletters"
import Footer from "../../Components/Footer/Footer"

const Products = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 4.5,
    originalPrice: null,
    discount: null,
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.0,
    originalPrice: null,
    discount: null,
  },
  {
    id: 3,
    name: "Black Striped T-shirt",
    price: 120,
    rating: 4.5,
    originalPrice: 150,
    discount: 20,
  },
  {
    id: 4,
    name: "Skinny Fit Jeans",
    price: 240,
    rating: 4.5,
    originalPrice: 260,
    discount: 8,
  },
  {
    id: 5,
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    originalPrice: null,
    discount: null,
  },
  {
    id: 6,
    name: "Sleeve Striped T-shirt",
    price: 130,
    rating: 4.5,
    originalPrice: 160,
    discount: 20,
  },
  {
    id: 7,
    name: "Vertical Striped Shirt",
    price: 212,
    rating: 4.5,
    originalPrice: 232,
    discount: 8,
  },
  {
    id: 8,
    name: "Courage Graphic T-shirt",
    price: 145,
    rating: 4.0,
    originalPrice: null,
    discount: null,
  },
  {
    id: 9,
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 4.5,
    originalPrice: null,
    discount: null,
  },
];

function CategoryPage() {
  return (
    <>
    <Announcement/>
    <Nav/>
    <div className="category-page">

      <CategoryHeader />

      <div className="category-layout">

        {/* Sidebar */}
        <CategorySidebar />

        {/* Products */}
        <main className="products-section">

          <div className="products-top">

            <span>
              Showing 1-9 of 100 Products
            </span>

            <div className="sort-wrapper">
              <span>Sort by:</span>

              <select defaultValue="popular">
                <option value="popular">
                  Most Popular
                </option>

                <option value="newest">
                  Newest
                </option>

                <option value="price-low">
                  Price: Low to High
                </option>

                <option value="price-high">
                  Price: High to Low
                </option>
              </select>
            </div>

          </div>

          {/* Your existing Card component */}
          <Card Products={Products} />

          <Pagination />

        </main>

      </div>

    </div>
    <Newsletter/>
    <Footer/>
    </>
  );
}

export default CategoryPage;