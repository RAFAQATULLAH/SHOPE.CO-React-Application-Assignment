
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export const getProducts = async () => {
  const response = await fetch(`${API_URL}/api/products`);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  const data = await response.json();
  return data.products;
};

export const getSingleProduct = async (id) => {
  const response = await fetch(`${API_URL}/api/products/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch product: ${response.status}`);
  }

  const data = await response.json();
  return data.product;
};
