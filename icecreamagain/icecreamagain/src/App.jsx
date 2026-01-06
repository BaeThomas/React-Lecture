import React, { useState } from "react";
import "./App.css";
import { toppings } from "./assets/data";
import Topping from "./Topping";
import Vouncher from "./Vouncher";

const App = () => {
  const [start, setStart] = useState(true);
  const [total, setTotal] = useState(4000);
  const [index, setIndex] = useState(0);
  const topping = toppings[index];
  const [loc, setLoc] = useState("/topping/");
  const [choose, setChoose] = useState(false);
  const [list, setList] = useState([]);

  const next = () => {
    setStart(false);
  };

  const yes = () => {
    setChoose(true);
    console.log("yes");
    console.log(choose);
  };
  const no = () => {
    setChoose(false);
    console.log("no");
    console.log(choose);
  };
  const incIndex = () => {
    if (choose) {
      setTotal(total + topping.price);
      setList([...list, topping]);
      setIndex(index + 1);
    } else if (!choose) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="container">
      {start ? (
        <div>
          <img src="/topping/icecream.jpg" alt="" />

          <h3>Start Choosing Topping</h3>
          <h1>Price : {total} Kyat</h1>
          <div className="btncontainer">
            <button className="btn" onClick={next}>
              Continue
            </button>
          </div>
        </div>
      ) : index >= toppings.length ? (
        <Vouncher list={list} total={total} />
      ) : (
        <div>
          <Topping
            name={topping.name}
            price={topping.price}
            img={loc + topping.img}
            clickyes={yes}
            clickno={no}
          />
          <button className="nextBTN" onClick={incIndex}>
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
