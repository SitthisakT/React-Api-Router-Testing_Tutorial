import React, { useState } from "react";

export default function CounterHook() {
  const [count, setCount] = useState(999);

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}