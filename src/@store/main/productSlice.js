import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";
import {
  sampleProducts,
  getProductsByCategory,
  searchProducts,
} from "../../data/sampleProducts";

const initialState = {
  loading: false,
  initialLoading: false,
  products: [],
  metadata: {},
  error: null,
  success: null,
  editingProduct: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (
    { limit = 10, page = 0, category = "", search = "" },
    { rejectWithValue }
  ) => {
    try {
      let url = `/products?_page=${page + 1}&_limit=${limit}`;
      if (search) {
        url += `&q=${search}`;
      }
      if (category && category !== "All") {
        url += `&category=${category}`;
      }

      const response = await axiosInstance.get(url);
      return {
        products: response.data,
        metadata: {
          total:
            parseInt(response.headers["x-total-count"]) || response.data.length,
          page: page,
          limit: limit,
        },
      };
    } catch (error) {
      let filteredProducts = sampleProducts;

      if (category && category !== "All") {
        filteredProducts = getProductsByCategory(category);
      }

      if (search) {
        filteredProducts = searchProducts(search, filteredProducts);
      }

      const startIndex = page * limit;
      const endIndex = startIndex + limit;
      const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

      return {
        products: paginatedProducts,
        metadata: {
          total: filteredProducts.length,
          page: page,
          limit: limit,
        },
      };
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/products", {
        ...productData,
        created_at: new Date().toISOString(),
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, productData }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/products/${id}`, productData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/products/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Legacy function for backward compatibility
export const getProducts =
  (limit, page, category, search) => async (dispatch) => {
    dispatch(fetchProducts({ limit, page, category, search }));
  };

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setInitialLoading: (state, action) => {
      state.initialLoading = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload.products;
      state.metadata = action.payload.metadata;
    },
    clearMessages: (state) => {
      state.error = null;
      state.success = null;
    },
    setEditingProduct: (state, action) => {
      state.editingProduct = action.payload;
    },
    clearEditingProduct: (state) => {
      state.editingProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.metadata = action.payload.metadata;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add product
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.unshift(action.payload);
        state.success = "Product added successfully!";
        state.error = null;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to add product";
      })

      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.products.findIndex(
          (p) => p.id === action.payload.id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
        state.success = "Product updated successfully!";
        state.error = null;
        state.editingProduct = null;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to update product";
      })

      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter((p) => p.id !== action.payload);
        state.success = "Product deleted successfully!";
        state.error = null;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to delete product";
      });
  },
});

export const {
  setLoading,
  setInitialLoading,
  setProducts,
  clearMessages,
  setEditingProduct,
  clearEditingProduct,
} = productSlice.actions;

export default productSlice.reducer;
