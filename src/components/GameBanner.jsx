import React from "react";

const GameBanner = ({ gameResult, callback }) => {
  return (
    <div>
      {gameResult == undefined ? (
        <button className="" onClick={callback}>
          start game{" "}
        </button>
      ) : GameBanner !== undefined ? (
        <button className="" onClick={callback}>
          play again
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default GameBanner;
