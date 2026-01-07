import React, { useContext, useState } from "react";
import { MyContext } from "./App";
const BattleAnimation = () => {
  const { activeid, worriors } = useContext(MyContext);
  const index = activeid - 1;
  return (
    <div>
      <div className="Anime">
        <h1>{worriors[index].name}</h1>
      </div>
    </div>
  );
};

export default BattleAnimation;
