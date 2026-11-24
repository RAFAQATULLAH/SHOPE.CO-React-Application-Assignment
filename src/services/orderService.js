
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Place a new order
export const placeOrder = async (orderData) => {
  const response = await axios.post(
    `${API_URL}/api/orders/place`,
    orderData,
    {
      withCredentials: true,
    }
  );

  return response.data;
};

// Get customer's orders
export const getMyOrders = async () => {
  const response = await axios.get(
    `${API_URL}/api/orders/my-orders`,
    {
      withCredentials: true,
    }
  );

  return response.data;
};
