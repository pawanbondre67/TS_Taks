import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isAuthenticated: false,
        user: null,
        error: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
        },
    },
});

export const { loginSuccess, loginFailure, logout } = loginSlice.actions;
export default loginSlice.reducer;
