import React from "react";

const Topping = (props) => {
  return (
    <div className="topping">
      <h1 className="title">
        {props.name} - {props.price} Kyats
      </h1>
      <img src={props.iloc} alt="" />
      <div className="BTNgroup">
        <button className="chooseBTN" onClick={() => props.clickyes()}>
          YES
        </button>
        <button className="chooseBTN" onClick={() => props.clickno()}>
          NO
        </button>
      </div>
    </div>
  );
};

export default Topping;
