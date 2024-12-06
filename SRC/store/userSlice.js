import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    userToken: null,
    error: null,
    loading: false,
};

export const loginUser = createAsyncThunk('user/login', async ({ email, password }) => {
    const response = await axios.post('http://172.16.66.206:8888/users/login', {
        email,
        password,
    });
    return response.data.token;
});

export const registerUser = createAsyncThunk('user/register', async ({ name, email, password, confirm_password }) => {
    const response = await axios.post('http://172.16.66.206:8888/users/register', {
        name,
        email,
        password,
        confirm_password,
    });
    return response.data.token;
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.userToken = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Đăng nhập
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.userToken = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Đăng ký
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.userToken = action.payload;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { logoutUser } = userSlice.actions;
export { registerUser };
export default userSlice.reducer;