import { configureStore, createSlice } from '@reduxjs/toolkit';
//const { createStore } = require("redux");


const initialCounterState = { counter: 0, showToggle: true };
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++

        },
        decrement(state) {
            state.counter--
        },
        customIncrease(state, action) {
            state.counter = state.counter + action.payload
        },
        toggle(state) {
            state.showToggle = !state.showToggle;
        }
    }
});
const authInitialState = { isAuthenticated: false }
const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        logIn(state) {
            state.isAuthenticated = true;
        },
        logOut(state) {
            state.isAuthenticated = false;
        }
    }
});


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer, auth: authSlice.reducer
    }
});
export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;
export default store;