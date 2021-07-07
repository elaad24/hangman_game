import { useState } from "react";
import "./App.css";
//components

import Header from "./components/header";
import Pic from "./components/Pic";
import GameBanner from "./components/GameBanner";
import LetterPool from "./components/LetterPool";
import Praise from "./components/Praise";

function App() {
  // loading - pase when the game initiate and get the woed and
  // replace pic ans letters
  // gameOver - when the game not started  and or ended
  // errors - the "bad " point of the player whe he choose incorrect letter
  // usedLetters - the letters that the game stated with and the letters theat the user choose - way to folaw the letters the user choose
  // secretWord - the word that the player looging for

  const [loading, setLoading] = useState(false);
  const [gameOver, setGameOver] = useState(true);
  const [errors, setErrors] = useState(0);
  const [usedLetters, setUsedLetters] = useState(["b"]);
  const [secretWord, setSecretWord] = useState("abc cdef fght");
  const [gameResult, setGameResult] = useState(null);

  //functions

  const mainFanction = (e) => {
    //add the chosen letter to usedLetters
    setUsedLetters([...usedLetters, e.target.value]);
    // check if the chhosen letter in the secret praise
    // and if not add "bad" point to player
    if (secretWord.split("").indexOf(e.target.value) === -1) {
      setErrors(errors + 1);
    }
    // check if the user lose the game
    if (errors >= 5) {
      setGameOver(true);
      console.log("game over ");
      return gameOver;
    }
  };

  return (
    <div className="">
      <Header />
      <div className="main">
        <Pic lvl={errors} />
        <div>
          <Praise secret={secretWord} usedLetters={usedLetters} />
          <LetterPool usedLetters={usedLetters} callBack={mainFanction} />
          <GameBanner gameResult={gameResult} />
        </div>
      </div>
    </div>
  );
}

export default App;
