import React, { createContext, useState } from "react";
import "./App.css";
import Player1 from "./Player1";
import Player2 from "./Player2";
export const MyContext = createContext();

const App = () => {
  const [start, setStart] = useState(false);

  const [totalScore, setTotalScore] = useState([0, 0]);
  const [currentScore, setCurrentScore] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);
  const winningScore = 30;
  const [winner, setWinner] = useState(null);

  const switchPlayer = () => {
    setActivePlayer(activePlayer === 0 ? 1 : 0);
  };

  const dice = () => {
    const dicenumber = Math.trunc(Math.random() * 6) + 1;
    console.log(dicenumber);
    if (dicenumber === 1) {
      setCurrentScore(0);
      switchPlayer();
      return;
    } else {
      setCurrentScore(currentScore + dicenumber);
    }
    setStart(true);
  };

  const hold = () => {
    const newTotalScore = [...totalScore];
    newTotalScore[activePlayer] += currentScore;
    setTotalScore(newTotalScore);
    if (newTotalScore[activePlayer] >= winningScore) {
      setWinner(activePlayer);
    }
    setCurrentScore(0);
    switchPlayer();
  };
  return (
    <MyContext.Provider
      value={{
        start,
        setStart,
        totalScore,
        setTotalScore,
        currentScore,
        setCurrentScore,
        activePlayer,
        setActivePlayer,
        dice,
        hold,
        switchPlayer,
      }}
    >
      <div className="Pigcontainer">
        <h1>Pig Game</h1>
        <div className="player">
          <Player1 />
          <Player2 />
        </div>
        {winner !== null ? (
          <div>
            <h1>Player {winner + 1} Wins!</h1>
            <button onClick={() => window.location.reload()}>Play Again</button>
          </div>
        ) : (
          <div>
            <button onClick={dice}>Get A Number</button>
            <h1>
              {activePlayer === 0 ? "Player 1's Turn" : "Player 2's Turn"}
            </h1>
            <h1>{!start ? "0" : currentScore}</h1>
            <button onClick={hold}>Hold</button>
          </div>
        )}
      </div>
    </MyContext.Provider>
  );
};

export default App;
