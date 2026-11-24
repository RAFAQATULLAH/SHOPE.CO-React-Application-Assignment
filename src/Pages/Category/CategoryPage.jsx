import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoryHeader from "./CategoryHeader";
import CategorySidebar from "./CategorySidebar";
import Pagination from "./Pagination";
import Card from "../../Components/Productcard/productcard";

import {
  fetchProducts,
} from "../../redux/slices/productSlice";

import "./CategoryPage.css";

import Nav from "../../Components/Nav/Nav";
import Announcement from "../../Components/anouncementbar/announcmentbar";
import Newsletter from "../../Components/News/Newsletters";
import Footer from "../../Components/Footer/Footer";

function CategoryPage() {
  const dispatch = useDispatch();

  const { items, loading, error } = useSelector(
    (state) => state.products
  );

  // Filter state
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Sorting state
  const [sortBy, setSortBy] = useState("popular");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Fetch products from Redux
  useEffect(() => {
    if (items.length === 0 && !loading) {
      dispatch(fetchProducts());
    }
  }, [dispatch, items.length, loading]);

  // Get available sizes and colors from MongoDB products
  const availableSizes = useMemo(() => {
    return [...new Set(items.flatMap((product) => product.sizes || []))];
  }, [items]);

  const availableColors = useMemo(() => {
    return [...new Set(items.flatMap((product) => product.colors || []))];
  }, [items]);

  // Apply filters
  const filteredProducts = useMemo(() => {
    let result = [...items];

    if (selectedSize) {
      result = result.filter((product) =>
        product.sizes?.includes(selectedSize)
      );
    }

    if (selectedColor) {
      result = result.filter((product) =>
        product.colors?.includes(selectedColor)
      );
    }

    if (minPrice !== "") {
      result = result.filter(
        (product) => Number(product.price) >= Number(minPrice)
      );
    }

    if (maxPrice !== "") {
      result = result.filter(
        (product) => Number(product.price) <= Number(maxPrice)
      );
    }

    // Apply sorting
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "newest") {
      result.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (sortBy === "popular") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [items, selectedSize, selectedColor, minPrice, maxPrice, sortBy]);

  // Reset to page 1 whenever filters or sorting change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedSize, selectedColor, minPrice, maxPrice, sortBy]);

  // Pagination calculations
  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const startIndex = (currentPage - 1) * productsPerPage;

  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const handleClearFilters = () => {
    setSelectedSize("");
    setSelectedColor("");
    setMinPrice("");
    setMaxPrice("");
    setCurrentPage(1);
  };

  return (
    <>
      <Announcement />
      <Nav />

      <div className="category-page">
        <CategoryHeader />

        <div className="category-layout">
          <CategorySidebar
            sizes={availableSizes}
  colors={availableColors}
  selectedSize={selectedSize}
  selectedColor={selectedColor}
  minPrice={minPrice}
  maxPrice={maxPrice}
  onSizeChange={setSelectedSize}
  onColorChange={setSelectedColor}
  onMinPriceChange={setMinPrice}
  onMaxPriceChange={setMaxPrice}
  onClearFilters={handleClearFilters}
          />

          <main className="products-section">
            <div className="products-top">
              <span>
                {filteredProducts.length === 0
                  ? "Showing 0 products"
                  : `Showing ${startIndex + 1}-${Math.min(
                      startIndex + productsPerPage,
                      filteredProducts.length
                    )} of ${filteredProducts.length} Products`}
              </span>

              <div className="sort-wrapper">
                <span>Sort by:</span>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="popular">Most Popular</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {loading ? (
              <p>Loading products...</p>
            ) : error ? (
              <p>{error}</p>
            ) : paginatedProducts.length > 0 ? (
              <Card Products={paginatedProducts} />
            ) : (
              <p>No products match your filters.</p>
            )}

            {!loading && !error && totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </main>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </>
  );
}

export default CategoryPage;