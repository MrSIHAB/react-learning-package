import { useContext } from "react";
import { CounterContext } from "../context/Counter";

const Counter = () => {
  const counterContext = useContext(CounterContext);

  return (
    <div className="">
      <button
        className="btn taskBtn"
        onClick={() => counterContext.setCount(counterContext.count + 1)}
      >
        Increment
      </button>

      <br />

      <button
        className="btn taskBtn"
        onClick={() => counterContext.setCount(counterContext.count - 1)}
      >
        Decrement
      </button>
      <br /><br /><br />
    </div>
  );
};

export default Counter;
