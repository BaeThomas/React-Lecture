import React, { useMemo } from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  let ExpCal = useMemo(() => {
    console.log("Calculating.....");
    let total = 0;
    for (let i = 0; i < 10; i++) {
      total += i;
    }
    return total + count;
  }, [count]);
  return (
    <div>
      <h1>
        {count} - {text}
      </h1>
      <p>Total : {ExpCal}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default App;
