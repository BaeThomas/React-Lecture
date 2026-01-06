import React, { use } from "react";
import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  let [text, setText] = useState("");
  return (
    <div>
      <p>Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Text is: {text}</p>
    </div>
  );
};

export default Counter;
