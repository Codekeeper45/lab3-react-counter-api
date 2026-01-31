import React, { useState } from "react";

function StepCounter({ step = 1, initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([initialValue]);
  const [operationCount, setOperationCount] = useState(0);

  function increment() {
    const next = count + step;
    setCount(next);
    setOperationCount(prev => prev + 1);
    setHistory(prev => [...prev, next]);
  }

  function decrement() {
    const next = count - step;
    setCount(next);
    setOperationCount(prev => prev + 1);
    setHistory(prev => [...prev, next]);
  }

  function reset() {
    setCount(initialValue);
    setHistory([initialValue]);
    setOperationCount(0);
  }

  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', margin: '10px 0' }}>
      <h3>Step Counter (Step: {step})</h3>
      <p>Current Count: {count}</p>
      <p>Operations: {operationCount}</p>
      
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <h4>History (Last 5):</h4>
      <p>{history.slice(-5).join(", ")}</p>
    </div>
  );
}

export default StepCounter;
