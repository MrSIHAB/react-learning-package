//  every single react Hooks starts with 'use' word
import React, { useState, useEffect } from "react";

// -----------------------------    Mount / Unmount component
const Mount = () => {
  useEffect(() => {
    console.log("Mounted");

    return () => {
      console.log("Unmonted");
    };
  }, []);

  return <p>Odd</p>;
};

//  -----------------------------   counter component (useState, useEffect)
const Counter = () => {
  const [count, setCount] = useState(0); // useState(value) -- returns an array[value, updateValue f()]

  useEffect(() => {
    console.log("Counter is loading...");
  }, []);
  /*
   * this array[] is a dependency for useEffect
   * if the defendency array is Empty, then the fuction will run once while mounting
   * And if the arrayValue is [useState.initialValue], it will run when the value update
   *
   * The returned function of useEffect will be render on unmount.
   */

  useEffect(() => {
    console.log("useState updated.");
  }, [count]);

  return (
    <div style={{ textAlign: "center", alignContent: "center" }} className="taskContainer" >
      <h2>Counter Component</h2>
      <p>Value = {count} </p>
      {count % 2 == 0 ? <p>Even</p> : <Mount />}
      <button className="btn taskBtn" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="btn taskBtn" onClick={() => setCount(count - 1)} style={{marginTop: '1rem'}}>
        Decrement
      </button>

    </div>
  );
};

export default Counter;
