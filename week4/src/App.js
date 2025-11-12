import { useState } from "react";

import CountNumber from "./CountNumber";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <CountNumber count={count} />

      <button onClick={increment}>+1</button>
    </div>
  );
}

export default Counter;
