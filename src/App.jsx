import { useState } from "react";
import "./App.css";
import Header from "./components/header";
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
  const [secretWord, setSecretWord] = useState(null);

  return (
    <div className="">
      <Header />
    </div>
  );
}

export default App;
