import React from "react";

const GameOver = ({ winner, setGameTurns }) => {
  return (
    <div id="game-over">
      <h2>GameOver!</h2>
      {winner && <p>{winner} Won</p>}
      {!winner && <p>Match Draw!</p>}
      <p>
        <button onClick={() => setGameTurns([])}>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;
