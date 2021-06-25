import { createStore } from 'redux';
//const { createStore } = require("redux");

const initialState = { counter: 0, showToggle: true };
const counterReducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {

        return {
            count: state.counter + 1,
            showToggle: state.showToggle

        }
    }
    if (action.type === 'Increase') {
        console.log(action.amount)
        return {
            counter: state.counter + action.amount,
            showToggle: state.showToggle
        }
    }


    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1,
            showToggle: state.showToggle
        }
    }
    if (action.type === 'toggle') {
        return {
            showToggle: !state.showToggle,
            counter: state.counter
        }
    }

    return state;

}
const store = createStore(counterReducer);
export default store;