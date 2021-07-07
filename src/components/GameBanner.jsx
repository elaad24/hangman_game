import React from "react";

const GameBanner = ({ gameResult, callback }) => {
  return (
    <div>
      {gameResult == undefined ? (
        <button className="" onClick={callback}>
          start game{" "}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default GameBanner;
