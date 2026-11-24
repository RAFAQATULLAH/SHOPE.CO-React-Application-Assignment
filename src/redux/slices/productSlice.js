
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getProducts,
  getSingleProduct,
} from "../../services/productService";

// Fetch all products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      return await getProducts();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Fetch one product
export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id, { rejectWithValue }) => {
    try {
      return await getSingleProduct(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",

  initialState: {
    items: [],
    selectedProduct: null,
    loading: false,
    detailsLoading: false,
    error: null,
    detailsError: null,
    status: "idle",
  },

  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
      state.detailsError = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // ALL PRODUCTS
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "succeeded";
        state.items = action.payload;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error =
          action.payload || "Unable to load products";
      })

      // SINGLE PRODUCT
      .addCase(fetchSingleProduct.pending, (state) => {
        state.detailsLoading = true;
        state.detailsError = null;
        state.selectedProduct = null;
      })

      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.detailsLoading = false;
        state.selectedProduct = action.payload;
      })

      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.detailsLoading = false;
        state.detailsError =
          action.payload || "Product not found";
      });
  },
});

export const { clearSelectedProduct } = productSlice.actions;

export default productSlice.reducer;
