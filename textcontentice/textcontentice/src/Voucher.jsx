import React, { useContext } from "react";
import { MyContext } from "./App";

const Voucher = () => {
  const { list, total } = useContext(MyContext);
  return (
    <div>
      <div>
        <h1>Your Voucher</h1>
        {list.map((item, index) => (
          <div key={index} className="voucher-item">
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
          </div>
        ))}
      </div>
      <div>
        <h2>Total: {total}</h2>
      </div>
    </div>
  );
};

export default Voucher;
