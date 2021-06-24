import { createStore } from 'redux';
//const { createStore } = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'INCREMENT') {
        let count;
        for (let x = 0; x < 10; x++) {
            console.log(x)
            count = { counter: state.counter + x }

        }
        return count
    }
    if (action.type === 'Increase') {
        console.log(action.amount)
        return {
            counter: state.counter + action.amount
        }
    }


    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1
        }
    }

    return state;

}
const store = createStore(counterReducer);
export default store;