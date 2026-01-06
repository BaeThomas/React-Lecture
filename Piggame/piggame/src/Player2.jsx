import React from "react";
import { MyContext } from "./App";

const Player2 = () => {
  const { totalScore, currentScore, activePlayer } =
    React.useContext(MyContext);
  return (
    <div>
      <div className="player2">
        <h2>Player 2</h2>
        <p>Total Score: {totalScore[1]}</p>
        <p>Current Score: {activePlayer === 1 ? currentScore : 0}</p>
      </div>
    </div>
  );
};

export default Player2;
