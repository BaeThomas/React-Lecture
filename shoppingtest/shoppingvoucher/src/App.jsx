import React, { createContext, useState } from "react";
import { tshirt } from "./assets/shirts";
import Outfit from "./Outfit";
export const MyContext = createContext();

const App = () => {
  const [choose, setChoose] = useState([]);
  const imgloc = "/shirt/";

  return (
    <MyContext.Provider value={{ tshirt, choose, imgloc }}>
      <div>
        <h1>Our Latest Outfit</h1>
        <Outfit />
      </div>
    </MyContext.Provider>
  );
};

export default App;
