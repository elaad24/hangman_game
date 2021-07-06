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
  const [usedLetters, setUsedLetters] = useState(["a", "f"]);
  const [secretWord, setSecretWord] = useState("abc cdef fght");
  const [gameResult, setGameResult] = useState(null);

  return (
    <div className="">
      <Header />
      <div className="main">
        <Pic lvl={errors} />
        <div>
          <Praise secret={secretWord} usedLetters={usedLetters} />
          <LetterPool usedLetters={usedLetters} />
          <GameBanner gameResult={gameResult} />
        </div>
      </div>
    </div>
  );
}

export default App;
