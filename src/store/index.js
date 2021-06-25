import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createStore } from 'redux';
//const { createStore } = require("redux");


const initialState = { counter: 0, showToggle: true };
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++

        },
        decrement(state) {
            state.counter--
        },
        customIncrease(state, action) {
            state.counter = state.counter + action.amount
        },
        toggleHandler(state) {
            state.showToggle = !state.showToggle;
        }
    }
});

const store = configureStore({
    reducer: counterSlice.reducer
});
export default store;