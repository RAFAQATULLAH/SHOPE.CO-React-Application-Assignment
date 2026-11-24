
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getSavedCart,
  saveCartToDB,
  clearSavedCart,
} from "../../services/cartService";

// Get customer ID
const getUserId = (user) => user?._id || user?.id || null;

// Read guest cart from localStorage
const getLocalCart = () => {
  try {
    if (typeof window === "undefined") return [];

    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch {
    return [];
  }
};

// LOAD CUSTOMER CART
export const loadCartFromDB = createAsyncThunk(
  "cart/loadCartFromDB",
  async (userId, { rejectWithValue, getState }) => {
    const currentUserId = getUserId(getState().auth.user);

    if (!userId || currentUserId !== userId) {
      return { userId, ignored: true };
    }

    try {
      const savedCart = await getSavedCart();

      // Ignore response if authentication changed during request
      if (getUserId(getState().auth.user) !== userId) {
        return { userId, ignored: true };
      }

      const items = (savedCart?.items || [])
        .filter((item) => item.product)
        .map((item) => ({
          ...item.product,
          id: item.product._id,
          size: item.size,
          color: item.color,
          quantity: item.quantity,
        }));

      return { userId, items };
    } catch (error) {
      return rejectWithValue({
        userId,
        message: error.message,
      });
    }
  }
);

// SAVE CUSTOMER CART
export const syncCartToDB = createAsyncThunk(
  "cart/syncCartToDB",
  async ({ items, userId }, { rejectWithValue, getState }) => {
    const state = getState();

    if (
      !userId ||
      getUserId(state.auth.user) !== userId ||
      state.cart.cartOwnerId !== userId
    ) {
      return null;
    }

    try {
      await saveCartToDB(items);
      return { userId };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// CLEAR CUSTOMER DATABASE CART
export const clearCartFromDB = createAsyncThunk(
  "cart/clearCartFromDB",
  async (_, { rejectWithValue, getState }) => {
    if (!getState().auth.user) return null;

    try {
      return await clearSavedCart();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: getLocalCart(),
    initialized: false,
    loading: false,
    syncing: false,
    error: null,
    cartOwnerId: undefined,
  },

  reducers: {
    // Start a cart session when authentication changes
    beginCartSession: (state, action) => {
      const userId = action.payload || null;

      if (state.cartOwnerId === userId) return;

      // Remove previous customer's cart on logout
      if (userId === null && state.cartOwnerId) {
        state.items = [];
      }

      // A logged-in customer gets their own database cart
      if (userId !== null) {
        state.items = [];
      }

      state.cartOwnerId = userId;
      state.initialized = userId === null;
      state.loading = false;
      state.syncing = false;
      state.error = null;
    },

    // ADD PRODUCT
    addToCart: (state, action) => {
      const {
        product,
        size = "Large",
        color = "White",
        quantity = 1,
      } = action.payload;

      const productId = product.id || product._id;

      const existingItem = state.items.find(
        (item) =>
          (item.id || item._id) === productId &&
          item.size === size &&
          item.color === color
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          ...product,
          id: productId,
          size,
          color,
          quantity,
        });
      }
    },

    // REMOVE PRODUCT
    removeFromCart: (state, action) => {
      const { id, size, color } = action.payload;

      state.items = state.items.filter(
        (item) =>
          !(
            (item.id || item._id) === id &&
            item.size === size &&
            item.color === color
          )
      );
    },

    // INCREASE QUANTITY
    increaseQuantity: (state, action) => {
      const { id, size, color } = action.payload;

      const item = state.items.find(
        (item) =>
          (item.id || item._id) === id &&
          item.size === size &&
          item.color === color
      );

      if (item) item.quantity += 1;
    },

    // DECREASE QUANTITY
    decreaseQuantity: (state, action) => {
      const { id, size, color } = action.payload;

      const item = state.items.find(
        (item) =>
          (item.id || item._id) === id &&
          item.size === size &&
          item.color === color
      );

      if (item) {
        item.quantity -= 1;

        if (item.quantity <= 0) {
          state.items = state.items.filter(
            (cartItem) => cartItem !== item
          );
        }
      }
    },

    // CLEAR LOCAL CART
    clearCart: (state) => {
      state.items = [];
    },
  },

  extraReducers: (builder) => {
    builder

      // LOAD CART
      .addCase(loadCartFromDB.pending, (state, action) => {
        if (state.cartOwnerId !== action.meta.arg) return;

        state.loading = true;
        state.error = null;
      })

      .addCase(loadCartFromDB.fulfilled, (state, action) => {
        const result = action.payload;

        if (
          !result ||
          result.ignored ||
          state.cartOwnerId !== result.userId
        ) {
          return;
        }

        state.loading = false;
        state.initialized = true;
        state.items = result.items;
      })

      .addCase(loadCartFromDB.rejected, (state, action) => {
        const error = action.payload;

        if (!error || state.cartOwnerId !== error.userId) return;

        state.loading = false;
        state.initialized = true;
        state.error = error.message;
      })

      // SYNC CART
      .addCase(syncCartToDB.pending, (state) => {
        state.syncing = true;
      })

      .addCase(syncCartToDB.fulfilled, (state) => {
        state.syncing = false;
      })

      .addCase(syncCartToDB.rejected, (state, action) => {
        state.syncing = false;
        state.error = action.payload;
      })

      // CLEAR DATABASE CART
      .addCase(clearCartFromDB.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

// ACTIONS
export const {
  beginCartSession,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

// SELECTORS
export const selectCartItems = (state) => state.cart.items;

export const selectCartCount = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

export const selectCartSubtotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

export default cartSlice.reducer;
