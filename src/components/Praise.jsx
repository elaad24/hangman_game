import React from "react";

const Praise = ({ secret, usedLetters }) => {
  // steps -
  // split the sentense
  // make diffrence css between letters and spacses

  // split the sentense
  const splitSecret = secret.split("");
  console.log("splitSecret", splitSecret);

  for (let i of usedLetters) {
    for (let j = 0; j <= splitSecret.length; j++) {
      if (i == splitSecret[j]) {
      }
    }
  }

  splitSecret.filter((letter) => letter != usedLetters);

  return (
    <div className="praise">
      {splitSecret.map((SecretLetter) => {
        {
          if (usedLetters.indexOf(SecretLetter) >= 0) {
            if (SecretLetter !== " ") {
              return <div className="secretLetter">{SecretLetter}</div>;
            }
          } else if (SecretLetter == " ") {
            return <div className="wordGap"> </div>;
          } else {
            return (
              <div className="secretLetter">
                <div className="secretLetter"></div>
              </div>
            );
          }
        }
      })}
    </div>
  );
};

export default Praise;
