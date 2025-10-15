import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";
import {
  sampleProducts,
  getProductsByCategory,
  searchProducts,
} from "../../data/sampleProducts";

const initialState = {
  loading: false,
  products: [],
  metadata: {},
};

export const getProducts =
  (limit, page, category, search) => async (dispatch) => {
    let url = `/products?limit=${limit}&page=${page}`;
    if (search) {
      url = `${url}&search=${search}`;
    }
    if (category) {
      url = `${url}&category=${category}`;
    }
    dispatch(setLoading(true));

    try {
      const res = await axiosInstance.get(url);
      let apiProducts = res.data.products || res.data;

      if (!Array.isArray(apiProducts)) {
        apiProducts = [];
      }

      dispatch(
        setProducts({
          products: apiProducts,
          metadata: res.data.metadata || {
            total: apiProducts.length,
            page: page,
          },
        })
      );
    } catch (errors) {
      console.log("API Error, using sample data:", errors);

      // Fallback to sample data
      let filteredProducts = sampleProducts;

      if (category && category !== "All") {
        filteredProducts = getProductsByCategory(category);
      }

      if (search) {
        filteredProducts = searchProducts(search);
      }

      // Apply pagination to sample data
      const startIndex = page * limit;
      const endIndex = startIndex + limit;
      const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

      dispatch(
        setProducts({
          products: paginatedProducts,
          metadata: {
            total: filteredProducts.length,
            page: page,
            limit: limit,
          },
        })
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload.products;
      state.metadata = action.payload.metadata;
    },
  },
});

export const { setLoading, setProducts } = productSlice.actions;

export default productSlice.reducer;
