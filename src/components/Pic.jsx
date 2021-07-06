import React from "react";
import Hangman1 from "../images/Hangman1.png";
import Hangman2 from "../images/Hangman2.png";
import Hangman3 from "../images/Hangman3.png";
import Hangman4 from "../images/Hangman4.png";
import Hangman5 from "../images/Hangman5.png";
import Hangman6 from "../images/Hangman6.png";
import Hangman7 from "../images/Hangman7.png";

const Pic = ({ lvl }) => {
  let activePic = Hangman1;
  switch (lvl) {
    case 1:
      activePic = Hangman2;
      break;
    case 2:
      activePic = Hangman3;
      break;
    case 3:
      activePic = Hangman4;
      break;
    case 4:
      activePic = Hangman5;
      break;
    case 5:
      activePic = Hangman6;
      break;
    case 6:
      activePic = Hangman7;
      break;

    default:
      activePic = Hangman1;
      break;
  }
  return (
    <div>
      <img src={activePic} alt="" />
    </div>
  );
};

export default Pic;
{
}
