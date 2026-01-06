import React, { createContext } from "react";
import { data } from "./assets/data";
import "./App.css";
export const MyContext = createContext();
import Topping from "./Topping";
import Voucher from "./Voucher";

const App = () => {
  const [start, setStart] = React.useState(true);
  const [index, setIndex] = React.useState(0);
  const [total, setTotal] = React.useState(4000);
  const [list, setList] = React.useState([]);
  const [choose, setChoose] = React.useState(false);
  const topping = data[index];
  const imgloc = "/topping/";
  const yes = () => {
    console.log("yes clicked");
    setChoose(true);
  };
  const no = () => {
    console.log("no clicked");
    setChoose(false);
  };

  const incIndex = () => {
    if (choose) {
      setTotal(total + topping.price);
      setList([...list, topping]);
      setIndex(index + 1);
      setChoose(false);
    } else if (!choose) {
      setIndex(index + 1);
      setChoose(false);
    }
  };

  return (
    <div>
      <MyContext.Provider
        value={{
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
        }}
      >
        {start ? (
          <div className="container">
            <img src="/topping/icecream.jpg" alt="" />
            <h1>{total}</h1>
            <h3>Start Choosing Topping</h3>
            <button onClick={() => setStart(false)}>Contiune</button>
          </div>
        ) : index > data.length - 1 ? (
          <div>
            <Voucher />
          </div>
        ) : (
          <div>
            <Topping />
            <div>
              <button onClick={incIndex}>Continue</button>
            </div>
          </div>
        )}
      </MyContext.Provider>
    </div>
  );
};

export default App;
