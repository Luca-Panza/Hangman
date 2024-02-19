import React from "react";
import { useState } from "react";

import GlobalStyle from "./styles/globalStyles";

import image0 from "./assets/image0.png";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import image5 from "./assets/image5.png";
import image6 from "./assets/image6.png";

import Game from "./components/GameContainer";
import Keyboard from "./components/KeyboardContainer";

export default function App() {
  const [word, setWord] = useState("");
  const [guess, setGuess] = useState("");
  const [wordGuess, setWordGuess] = useState("");
  const [errors, setErrors] = useState(0);
  const [letters, setLetters] = useState([]);
  const [startGame, setStartGame] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [stats, setStats] = useState("letters");
  const images = [image0, image1, image2, image3, image4, image5, image6];

  return (
    <>
      <GlobalStyle />
      <Game
        word={word}
        setWord={setWord}
        letters={letters}
        setLetters={setLetters}
        errors={errors}
        setErrors={setErrors}
        guess={guess}
        setGuess={setGuess}
        images={images}
        startGame={startGame}
        setStartGame={setStartGame}
        endGame={endGame}
        setEndGame={setEndGame}
        stats={stats}
        setStats={setStats}
        setWordGuess={setWordGuess}
      />
      <Keyboard
        word={word}
        setWord={setWord}
        letters={letters}
        setLetters={setLetters}
        errors={errors}
        setErrors={setErrors}
        guess={guess}
        setGuess={setGuess}
        images={images}
        startGame={startGame}
        setStartGame={setStartGame}
        endGame={endGame}
        setEndGame={setEndGame}
        stats={stats}
        setStats={setStats}
        wordGuess={wordGuess}
        setWordGuess={setWordGuess}
      />
    </>
  );
}
