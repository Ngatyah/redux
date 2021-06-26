import { configureStore, createSlice } from '@reduxjs/toolkit';
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
            state.counter = state.counter + action.payload
        },
        toggle(state) {
            state.showToggle = !state.showToggle;
        }
    }
});


const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;