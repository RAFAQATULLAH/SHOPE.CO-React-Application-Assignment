
const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:4000"
).replace(/\/+$/, "");

const CART_URL = `${API_URL}/api/cart`;

const handleResponse = async (response) => {
  const text = await response.text();

  let data;

  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    throw new Error(
      `Server returned an invalid response (HTTP ${response.status}). Check your API route.`
    );
  }

  if (!response.ok) {
    throw new Error(data.message || `Request failed: ${response.status}`);
  }

  return data;
};

// GET SAVED CART
export const getSavedCart = async () => {
  const response = await fetch(CART_URL, {
    method: "GET",
    credentials: "include",
  });

  const data = await handleResponse(response);
  return data.cart;
};

// SAVE CART
export const saveCartToDB = async (cart) => {
  const response = await fetch(CART_URL, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: cart.map((item) => ({
        productId: item.id || item._id,
        quantity: item.quantity,
        size: item.size,
        color: item.color,
      })),
    }),
  });

  const data = await handleResponse(response);
  return data.cart;
};

// CLEAR DATABASE CART
export const clearSavedCart = async () => {
  const response = await fetch(CART_URL, {
    method: "DELETE",
    credentials: "include",
  });

  return handleResponse(response);
};
