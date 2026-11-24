import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./products.css";
import Button from "../button/button";
import Card from "../Productcard/productcard";

import { fetchProducts } from "../../redux/slices/productSlice";

function Products({ heading }) {
  const dispatch = useDispatch();

  const { items, loading, error, status } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (loading) return <p>Loading products...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <div className="heading">
        <h1>{heading}</h1>
      </div>

      <div className="items">
        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p>{error}</p>
        ) : items.length > 0 ? (
          <Card Products={items} />
        ) : (
          <p>No products available.</p>
        )}
      </div>

      <div className="btn">
        <Button text="View All" />
      </div>
    </div>
  );
}

export default Products;
