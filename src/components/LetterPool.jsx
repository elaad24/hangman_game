import React from "react";

const LetterPool = ({ usedLetters, callBack }) => {
  const Letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <div className="letterPool">
      {Letters.map((letter) => {
        return (
          <button className="letter " value={letter} onClick={callBack}>
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default LetterPool;
