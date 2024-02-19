import styled from "styled-components";

import words from "../constants/words";

export default function Game(props) {
  const { word, setWord, letters, setLetters, errors, setErrors, images, setStartGame, setEndGame, stats, setStats, setWordGuess } = props;

  function start() {
    words.sort(() => Math.random() - 0.5);
    setWord(words[0]);
    setErrors(0);
    setLetters([]);
    setStartGame(true);
    setEndGame(false);
    setStats("letters");
    setWordGuess("");
  }

  function letters_answer() {
    return word.split("").map((letter, i) => {
      const originalLetter = letter;
      letter = letter.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return (
        <div key={i}>
          {letters.includes(letter) || stats === "letters_red" || stats === "letters_green" ? originalLetter.toUpperCase() : "_"}
        </div>
      );
    });
  }

  return (
    <GameContainerSC>
      <div>
        <img src={images[errors]} alt={images[errors]} />
      </div>
      <AnswerContainerSC>
        <button onClick={start}>Choose Word</button>
        <LettersContainerSC stats={stats}>{letters_answer()}</LettersContainerSC>
      </AnswerContainerSC>
    </GameContainerSC>
  );
}

const GameContainerSC = styled.div`
  padding: 50px 10% 0px 15%;
  display: flex;
  justify-content: space-between;

  img {
    width: 400px;
  }
`;

const AnswerContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 130px;

  button {
    width: 200px;
    height: 60px;
    background: #27ae60;
    border-radius: 8px;
    border: 1px solid black;
    cursor: pointer;
    margin-top: 30px;
    margin-left: auto;
    justify-content: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;

    &:hover {
      opacity: 0.8;
      border: 1px solid white;
    }
  }
`;

const LettersContainerSC = styled.div`
  height: 68px;
  margin-top: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;

  div {
    width: 30px;
    border-bottom: 2px white solid;
    display: flex;
    justify-content: center;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 68px;
    color: ${(props) => (props.stats === "letters_red" ? "red" : props.stats === "letters_green" ? "green" : "gray")};
  }
`;
