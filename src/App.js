import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

import Jogo from "./Jogo";
import Letras from "./Letras";

import React from "react";
import GlobalStyle from "./globalStyles";

export default function App() {
  const [word, setWord] = React.useState("");
  const [guess, setGuess] = React.useState("");
  const [word_guess, setWord_guess] = React.useState("");
  const [errors, setErrors] = React.useState(0);
  const [letters, setLetters] = React.useState([]);
  const [startgame, setStartgame] = React.useState(false);
  const [endgame, setEndgame] = React.useState(false);
  const [stats, setStats] = React.useState("letters");
  const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

  return (
    <>
      <GlobalStyle />
      <Jogo
        word={word}
        setWord={setWord}
        letters={letters}
        setLetters={setLetters}
        errors={errors}
        setErrors={setErrors}
        guess={guess}
        setGuess={setGuess}
        images={images}
        startgame={startgame}
        setStartgame={setStartgame}
        endgame={endgame}
        setEndgame={setEndgame}
        stats={stats}
        setStats={setStats}
        setWord_guess={setWord_guess}
      />
      <Letras
        word={word}
        setWord={setWord}
        letters={letters}
        setLetters={setLetters}
        errors={errors}
        setErrors={setErrors}
        guess={guess}
        setGuess={setGuess}
        images={images}
        startgame={startgame}
        setStartgame={setStartgame}
        endgame={endgame}
        setEndgame={setEndgame}
        stats={stats}
        setStats={setStats}
        word_guess={word_guess}
        setWord_guess={setWord_guess}
      />
    </>
  );
}
