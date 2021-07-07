import { useState } from "react";
import "./App.css";

import list from "./movies.json";

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
  const [usedLetters, setUsedLetters] = useState([""]);
  const [secretWord, setSecretWord] = useState("");
  const [gameResult, setGameResult] = useState(undefined);
  const [missingLetters, setMissingLetters] = useState(null);

  //functions

  const chooseTitle = () => {
    return list[Math.round(Math.random() * Math.random() * 100)].title;
  };

  // choose the letter that the user start with - that he see
  // set the # of missing letters

  const chooseSeenLetters = () => {
    // need to fix in futcher to choose from uniq letters
    const numberOfLetters = Math.round(secretWord.length * 0.25);
    setMissingLetters(secretWord.length - numberOfLetters);
    const shffledSecretLetters = secretWord
      .split("")
      .sort(() => Math.random() - 0.5);
    for (let i = 0; i <= numberOfLetters; i++) {
      setUsedLetters([...(usedLetters + shffledSecretLetters[i])]);
    }
  };

  const startGame = () => {
    setLoading(true);
    setGameOver(false);
    setErrors(0);
    setSecretWord(chooseTitle);
    setUsedLetters([]);
    chooseSeenLetters();
    setGameResult(null);
    setLoading(false);
  };

  const mainFanction = (e) => {
    //add the chosen letter to usedLetters
    setUsedLetters([...usedLetters, e.target.value]);
    // check if the chhosen letter in the secret praise
    // and if not add "bad" point to player
    if (secretWord.split("").indexOf(e.target.value) === -1) {
      setErrors(errors + 1);
      // subtract from mising letters every time user find correct letter
    } else setMissingLetters(missingLetters - 1);
    // check if the user lose the game
    if (errors >= 5) {
      setGameResult("lost");
      setGameOver(true);
      console.log("game over ");
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
        </div>
        <GameBanner gameResult={gameResult} callback={startGame} />
      </div>
    </div>
  );
}

export default App;
