import React from "react";

const Topping = (props) => {
  return (
    <div className="topping">
      <h1>
        {props.name} - {props.price} Kyat
      </h1>
      <img src={props.img} alt="" className="toppingimg" />

      <div className="btntopping">
        <button className="btnyes" onClick={() => props.clickyes()}>
          YES
        </button>
        <button className="btnno" onClick={() => props.clickno()}>
          NO
        </button>
      </div>
    </div>
  );
};

export default Topping;
