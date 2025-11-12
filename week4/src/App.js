import { useState } from "react";
import "./App.css";
import CountNumber from "./CountNumber";

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleIncrease10 = () => setCount(count + 10);
  const handleDecrease10 = () => setCount(count - 10);
  const handleReset = () => setCount(0);
  function increment() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <CountNumber
        count={count}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onIncrease10={handleIncrease10}
        onDecrease10={handleDecrease10}
        onReset={handleReset}
      />
    </div>
  );
}

export default Counter;
