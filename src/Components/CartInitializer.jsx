
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  beginCartSession,
  loadCartFromDB,
  syncCartToDB,
} from "../redux/slices/cartSlice";

function CartInitializer() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);
  const initialized = useSelector(
    (state) => state.cart.initialized
  );
  const loading = useSelector((state) => state.cart.loading);
  const cartOwnerId = useSelector(
    (state) => state.cart.cartOwnerId
  );

  const { user, initialized: authInitialized } = useSelector(
    (state) => state.auth
  );

  const userId = user?._id || user?.id || null;

  // Initialize cart when authentication changes
  useEffect(() => {
    if (!authInitialized) return;

    dispatch(beginCartSession(userId));

    if (userId) {
      dispatch(loadCartFromDB(userId));
    }
  }, [authInitialized, userId, dispatch]);

  // Save cart locally and synchronize with MongoDB
  useEffect(() => {
    if (!initialized || loading) return;

    localStorage.setItem("cart", JSON.stringify(items));

    if (!userId || cartOwnerId !== userId) return;

    const timeout = setTimeout(() => {
      dispatch(
        syncCartToDB({
          items,
          userId,
        })
      );
    }, 500);

    return () => clearTimeout(timeout);
  }, [
    items,
    initialized,
    loading,
    userId,
    cartOwnerId,
    dispatch,
  ]);

  return null;
}

export default CartInitializer;
