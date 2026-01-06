import React, { useEffect, useState } from "react";
import "./App.css";
import { toppings } from "./assets/data";
import Topping from "./Topping";
import Vouncher from "./Vouncher";

const App = () => {
  const [start, setStart] = useState(true);
  const [total, setTotal] = useState(4000);
  const [index, setIndex] = useState(0);
  const [topping, setTopping] = useState(toppings[index]);
  const [loc, setLoc] = useState("/toppings/" + topping.image);
  const [choose, setChoose] = useState(false);
  const [chooselist, setChooselist] = useState([]);
  const yes = () => {
    setChoose(true);
  };
  const no = () => {
    setChoose(false);
  };
  const INCindex = () => {
    if (choose) {
      setChooselist([...chooselist, topping]);
      setTotal(total + topping.price);
    }
    setIndex(index + 1);
    setTopping(toppings[index]);
    setLoc("/toppings/" + toppings[index].image);
  };

  useEffect(() => {
    console.log(choose);
  }, [choose]);

  const next = () => {
    setStart(false);
  };
  return (
    <div className="container">
      {start ? (
        <div>
          <img src="/toppings/icecream.jpg" alt="" />
          <h3>Start Choosing Topping </h3>
          <h1>Price : {total}</h1>
          <div className="btncontainer">
            <button className="btn" onClick={next}>
              Continue
            </button>
          </div>
        </div>
      ) : index >= toppings.length ? (
        <Vouncher />
      ) : (
        <div>
          <Topping
            name={topping.name}
            price={topping.price}
            iloc={loc}
            clickyes={yes}
            clickno={no}
          />
          <div className="btncontainer">
            <button className="btn" onClick={INCindex}>
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
