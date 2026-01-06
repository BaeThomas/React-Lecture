import React, { useContext } from "react";
import { MyContext } from "./App";

const Outfit = () => {
  const { tshirt, imgloc } = useContext(MyContext);
  return (
    <div>
      {tshirt.map((item, index) => (
        <div key={index}>
          <img src={imgloc + item.img} alt="" />
          <h1>{item.name}</h1>
          <h3>{item.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default Outfit;
