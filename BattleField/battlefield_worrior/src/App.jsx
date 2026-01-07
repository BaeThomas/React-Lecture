import React, { createContext, useContext, useState } from "react";
import "./App.css";
import { worriors } from "./assets/data";

import Go from "./Go";
import Heros from "./Heros";
import BattleAnimation from "./BattleAnimation";
export const MyContext = createContext();
const App = () => {
  const [start, setStart] = useState(true);
  const imgloc = "./public/character/";
  const [activeid, SetActiveid] = useState(1);
  return (
    <div className="theorigin">
      <MyContext.Provider
        value={{ worriors, start, setStart, imgloc, activeid, SetActiveid }}
      >
        <div className="container">
          {start ? (
            <Go />
          ) : (
            <>
              <div>
                <Heros />

                <BattleAnimation />
              </div>
            </>
          )}
        </div>
      </MyContext.Provider>
    </div>
  );
};

export default App;
