import React from "react";
import { useContext } from "react";
import { MyContext } from "./App";

const ChildOne = () => {
  const { user, setUser } = useContext(MyContext);
  return (
    <div>
      <h1>
        In ChildOne: {user.name}-{user.age}
      </h1>
      <button
        onClick={() => {
          setUser({ ...user, age: user.age + 1 });
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default ChildOne;
