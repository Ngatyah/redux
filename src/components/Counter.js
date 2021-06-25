import classes from './Counter.module.css';
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(true)
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };


  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' });
  }
  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' });
  }
  const increaseHandler = () => {
    dispatch({ type: 'Increase', amount: 3 })
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{` ${counter}`}</div>
      <div >
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Custom Increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
