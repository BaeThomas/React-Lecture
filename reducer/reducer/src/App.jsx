import React from "react";

const App = () => {
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return { count: state.count + 1 };
    } else if (action.type === "DECREMENT") {
      return { count: state.count - 1 };
    } else if (action.type === "RESET") {
      return { count: 0 };
    }
  };
  let initialState = { count: 0 };
  let [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default App;
