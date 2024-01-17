import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    user: string | null;
    token: string | null;
}

const initialState: AuthState = {
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            // Implement login logic
        },
        logout: (state) => {
            // Implement logout logic
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
