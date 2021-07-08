import React from "react";

const LetterPool = ({ usedLetters, callBack }) => {
  const Letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <div className="letterPool">
      {Letters.map((letter) => {
        return (
          <button
            className="letter "
            disabled={usedLetters.indexOf(letter) !== -1}
            value={letter}
            onClick={callBack}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default LetterPool;
