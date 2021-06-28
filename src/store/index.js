import { configureStore } from '@reduxjs/toolkit';
//const { createStore } = require("redux");
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
    reducer: {
        counter: counterReducer, auth: authReducer
    }
});

export default store;