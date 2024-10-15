import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const XisNext = currentMove % 2 === 0;

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  function jumpToMove(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button
          className="border border-slate-500 hover:bg-slate-500/50 p-2 m-1"
          onClick={() => jumpToMove(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <>
      <Board XisNext={XisNext} squares={currentSquares} onPlay={handlePlay} />
      <div className="flex flex-col m-5">
        <ol>{moves}</ol>
      </div>
    </>
  );
};

export default Game;
