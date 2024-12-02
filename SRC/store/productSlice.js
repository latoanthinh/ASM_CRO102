import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch all products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('http://192.168.1.17:8888/product/get_product');
    return response.data;
});

// Fetch products by category
export const fetchProductsByCategory = createAsyncThunk('products/fetchProductsByCategory', async (categoryName) => {
    const response = await axios.get(`http://192.168.1.17:8888/product/get_product_by_category/${categoryName}`);
    return response.data; 
});

// Search products by name
export const searchProductsByName = createAsyncThunk('products/searchProductsByName', async (productName) => {
    const response = await axios.get(`http://192.168.1.17:8888/product/get_product_by_name/${productName}`); // Đường dẫn đã sửa
    return response.data; 
});

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchProductsByCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProductsByCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(searchProductsByName.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchProductsByName.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(searchProductsByName.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// Selectors
export const selectProducts = (state) => state.products.products;
export const selectProductLoading = (state) => state.products.loading;
export const selectProductError = (state) => state.products.error;

export default productSlice.reducer;