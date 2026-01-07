import React, { useContext } from "react";
import { MyContext } from "./App";

const Go = () => {
  const { setStart, start } = useContext(MyContext);
  return (
    <div className="gocard">
      <div className="innergo">
        <div className="text">
          <h3>Ready To Choose Your Army</h3>
        </div>
        <div className="goBtn">
          <button onClick={() => setStart(false)}>Start</button>
        </div>
      </div>
    </div>
  );
};

export default Go;
