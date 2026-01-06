import React from "react";

const Vouncher = ({ list, total }) => {
  return (
    <div className="vouncher">
      <h1 className="vouncher-title">Your Vouncher</h1>
      <div className="divlist">
        {list.map((item, index) => {
          return (
            <div key={index} className="item">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
      <h1>Total : {total}</h1>
    </div>
  );
};

export default Vouncher;
