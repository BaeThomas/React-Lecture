import React from "react";

const Vouncher = ({ list, total }) => {
  return (
    <div>
      <h1>Your Vouncher</h1>
      <div className="list">
        {list.map((item, index) => {
          <div className="item">
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>;
        })}
      </div>
      <h1> Total : {total} Kyat</h1>
    </div>
  );
};

export default Vouncher;
