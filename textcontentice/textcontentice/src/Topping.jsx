import React, { useContext } from "react";
import { MyContext } from "./App";

const Topping = () => {
  const {
    data,
    index,
    setIndex,
    total,
    setTotal,
    topping,
    imgloc,
    list,
    setList,
    yes,
    no,
    choose,
    setChoose,
  } = useContext(MyContext);
  return (
    <div className="topping-container">
      <h1>{topping.name}</h1>
      <img src={imgloc + topping.img} alt="" />
      <h2>{topping.price}</h2>
      <div>
        <button onClick={yes}>YES</button>
        <button onClick={no}>NO</button>
      </div>
    </div>
  );
};

export default Topping;
