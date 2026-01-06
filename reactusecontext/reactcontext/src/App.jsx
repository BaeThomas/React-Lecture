import React, { createContext, useState } from "react";
export const MyContext = createContext();
import Component1 from "./Component1";

const App = () => {
  let [user, setUser] = useState({ name: "StudyRightNow", age: 6 });

  return (
    <MyContext.Provider value={{ user, setUser }}>
      <h1>
        In Partent : {user.name} - {user.age}
      </h1>
      <Component1 />
    </MyContext.Provider>
  );
};

export default App;
