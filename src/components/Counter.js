import classes from './Counter.module.css';
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const toggleCounterHandler = () => { };
  console.log(counter);

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' });
  }
  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' });
  }



  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{` ${counter}`}</div>
      <div >
        <button>Increment</button>
        <button>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;