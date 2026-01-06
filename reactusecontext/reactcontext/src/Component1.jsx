import React, { useContext } from "react";
import { MyContext } from "./App";

const Component1 = () => {
  const { user, setUser } = useContext(MyContext);
  return (
    <div>
      <h2 style={{ color: "red" }}>
        In Component 1 - {user.name} - {user.age}
      </h2>
    </div>
  );
};

export default Component1;
