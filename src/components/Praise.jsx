import React from "react";

const Praise = ({ secret, usedLetters }) => {
  // steps -
  // split the sentense
  // make diffrence css between letters and spacses

  // split the sentense
  const splitSecret = secret.split("");

  // replace the spacese with the minus
  /* for (let i = 0; i <= splitSecret.length; i++) {
    if (splitSecret[i] == " ") {
      splitSecret[i] = "-";
    }
  } */

  for (let i of usedLetters) {
    console.log(i);
    for (let j = 0; j <= splitSecret.length; j++) {
      if (i == splitSecret[j]) {
        console.log(i);
      }
    }
  }

  splitSecret.filter((letter) => letter != usedLetters);

  return (
    <div className="main">
      {splitSecret.map((SecretLetter) => {
        {
          if (usedLetters.indexOf(SecretLetter) >= 0) {
            if (SecretLetter !== " ") {
              return <div className="secretLetter">{SecretLetter}</div>;
            } else if (SecretLetter === " ") {
              return <div>{SecretLetter}</div>;
            }
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
