import styled from "styled-components";

import palavras from "./palavras";

export default function Jogo(props) {
  const {
    word,
    setWord,
    letters,
    setLetters,
    errors,
    setErrors,
    images,
    setStartgame,
    setEndgame,
    stats,
    setStats,
    setWord_guess,
  } = props;

  function start() {
    palavras.sort(() => Math.random() - 0.5);
    setWord(palavras[0]);
    setErrors(0);
    setLetters([]);
    setStartgame(true);
    setEndgame(false);
    setStats("letters");
    setWord_guess("");
  }

  function letters_answer() {
    return word.split("").map((letra, i) => {
      const letraoriginal = letra;
      letra = letra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return (
        <div data-test="word" key={i}>
          {letters.includes(letra) ||
          stats === "letters_red" ||
          stats === "letters_green"
            ? letraoriginal.toUpperCase()
            : "_"}
        </div>
      );
    });
  }

  return (
    <JogoContainer>
      <div>
        <img data-test="game-image" src={images[errors]} alt={images[errors]} />
      </div>
      <Written>
        <button data-test="choose-word" onClick={start}>
          Escolher Palavra
        </button>
        <LettersBox stats={stats}>{letters_answer()}</LettersBox>
      </Written>
    </JogoContainer>
  );
}

const JogoContainer = styled.div`
  padding: 50px 10% 0px 15%;
  display: flex;
  justify-content: space-between;

  img {
    width: 400px;
  }
`;

const Written = styled.div`
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

const LettersBox = styled.div`
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
    color: ${(props) =>
      props.stats === "letters_red"
        ? "red"
        : props.stats === "letters_green"
        ? "green"
        : "gray"};
  }
`;
