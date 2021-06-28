import { createSlice } from "@reduxjs/toolkit";

const authInitialState = { isAuthenticated: false }
const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        logIn(state) {
            state.isAuthenticated = !state.isAuthenticated;
        },
        logOut(state) {
            state.isAuthenticated = !state.isAuthenticated;
        }
    }
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
