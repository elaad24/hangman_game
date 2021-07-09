import { useEffect, useState } from "react";
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
  const [usedLetters, setUsedLetters] = useState([]);
  const [secretWord, setSecretWord] = useState("");
  const [gameResult, setGameResult] = useState(undefined);
  const [missingLetters, setMissingLetters] = useState(null);

  useEffect(async () => {
    if (missingLetters == 0) {
      await setLoading(true);
      await setGameResult("win");
      await setLoading(false);
      return await setGameOver(true);
    }
  }, [missingLetters]);

  //functions
  // secretPrase - to compensate the time diffrence without unsinq
  let secretPrase = null;
  const chooseTitle = async () => {
    secretPrase = list[Math.round(Math.random() * Math.random() * 100)].title;
    await setSecretWord(secretPrase.toUpperCase());
  };

  // choose the letter that the user start with - that he see
  // set the number of missing letters
  //initiatUsedLetters - temp container to add letter without rerander several time at first
  let initiatUsedLetters = [];
  const chooseSeenLetters = async () => {
    // search for the uniq letters from the secretPrase

    let uniqLetters = [];
    for (let i of secretPrase.toUpperCase().split("")) {
      if (uniqLetters.indexOf(i) == -1 && i.match(/^\S*$/)) {
        uniqLetters.push(i);
      }
    }
    console.log(uniqLetters);
    // need to fix in futcher to choose from uniq letters

    const numberOfSeenLetters = await Math.round(uniqLetters.length * 0.25);
    console.log("number of uniq letter", uniqLetters.length);
    console.log("number of seen letter", numberOfSeenLetters);

    await setMissingLetters(uniqLetters.length - numberOfSeenLetters);
    const shffledSecretLetters = uniqLetters.sort(() => Math.random() - 0.5);
    for (let i = 0; i < numberOfSeenLetters; i++) {
      initiatUsedLetters.push(shffledSecretLetters[i].toUpperCase());
    }
    console.log("initiatUsedLetters", initiatUsedLetters);
    setUsedLetters(initiatUsedLetters);
  };

  const startGame = async () => {
    await setLoading(true);
    await setGameOver(false);

    await setErrors(0);
    await setUsedLetters([]);
    initiatUsedLetters = [];
    secretPrase = null;
    await chooseTitle();
    await chooseSeenLetters();
    await setGameResult(null);
    await setLoading(false);
  };

  const mainFanction = async (e) => {
    //add the chosen letter to usedLetters
    setUsedLetters([...usedLetters, e.target.value]);

    // check if the choosen letter in the secret praise
    // and if not add "bad" point to player

    if (secretWord.split("").indexOf(e.target.value) === -1) {
      setErrors(errors + 1);
    } else setMissingLetters(missingLetters - 1);

    // check if the user lose the game
    if (errors >= 5) {
      await setLoading(true);
      await setGameResult("lost");
      await setGameOver(true);
      console.log("game over ");
      await setLoading(false);
    }
  };

  return (
    <div className="">
      <Header />
      <div className="main">
        {!gameOver ? (
          <>
            <Pic lvl={errors} />
            <div className="praiseAndPool">
              <Praise secret={secretWord} usedLetters={usedLetters} />
              <LetterPool usedLetters={usedLetters} callBack={mainFanction} />
            </div>
          </>
        ) : gameOver && usedLetters.length !== 0 ? (
          <>
            <Pic lvl={errors} />
            <div className="praiseAndPool">
              <Praise secret={secretWord} usedLetters={usedLetters} />
              <LetterPool usedLetters={usedLetters} callBack={mainFanction} />
            </div>
            <GameBanner gameResult={gameResult} callback={startGame} />
          </>
        ) : (
          <GameBanner gameResult={gameResult} callback={startGame} />
        )}
      </div>
    </div>
  );
}

export default App;
