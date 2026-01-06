import React from "react";
import { MyContext } from "./App";

const Player1 = () => {
  const { totalScore, currentScore, activePlayer } =
    React.useContext(MyContext);
  return (
    <div>
      <div className="player1">
        <h2>Player 1</h2>
        <p>Total Score: {totalScore[0]}</p>
        <p>Current Score: {activePlayer === 0 ? currentScore : 0}</p>
      </div>
    </div>
  );
};

export default Player1;
