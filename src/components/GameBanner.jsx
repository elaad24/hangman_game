import React from "react";

const GameBanner = ({ gameResult, callback }) => {
  return (
    <div className="gameBanner">
      {gameResult == undefined ? (
        <button className="btn" onClick={callback}>
          start game{" "}
        </button>
      ) : gameResult !== undefined ? (
        <>
          {gameResult == "win" ? (
            <>
              <div className="txt_win">YES YOU DID IT</div>
              <button className="btn" onClick={callback}>
                play again
              </button>
            </>
          ) : (
            <>
              <div className="txt_lose">SH*T YOU DIED :(</div>
              <button className="btn" onClick={callback}>
                play again
              </button>
            </>
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default GameBanner;
