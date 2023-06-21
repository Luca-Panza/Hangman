import styled from "styled-components";

import alfabeto from "./alfabeto";

export default function Letras(props) {
  const {
    word,
    letters,
    setLetters,
    errors,
    setErrors,
    startgame,
    endgame,
    setEndgame,
    setStats,
    word_guess,
    setWord_guess,
  } = props;

  function verify_click(guess) {
    if (
      word
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(guess)
    ) {
      setLetters([...letters, guess]);
      if (
        word
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .split("")
          .every((element) => [...letters, guess].includes(element))
      ) {
        setEndgame(true);
        setStats("letters_green");
      }
    } else {
      setErrors(errors + 1);
      setLetters([...letters, guess]);
      if (errors === 5) {
        setEndgame(true);
        setStats("letters_red");
      }
    }
  }

  function verify_input() {
    if (
      word_guess
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") ===
      word
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
    ) {
      setEndgame(true);
      setStats("letters_green");
    } else {
      setEndgame(true);
      setStats("letters_red");
    }
  }

  return (
    <ContainerSC>
      <LettersbuttonSC>
        {alfabeto.map((letra) => (
          <ButtonSC
            data-test="letter"
            unlocked={!startgame || endgame || letters.includes(letra)}
            onClick={() => verify_click(letra)}
            disabled={!startgame || endgame || letters.includes(letra)}
            key={letra}>
            {letra.toUpperCase()}
          </ButtonSC>
        ))}
      </LettersbuttonSC>
      <InputSC>
        <input
          placeholder="Palavra"
          value={word_guess}
          disabled={!startgame || endgame}
          onChange={(e) => setWord_guess(e.target.value)}
        />
        <button onClick={verify_input} disabled={!startgame || endgame}>
          Chutar!
        </button>
      </InputSC>
    </ContainerSC>
  );
}

const ContainerSC = styled.div`
  width: 100%;
  padding: 30px 225px 0px 225px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const InputSC = styled.div`
  width: 100%;
  display: flex;
  padding-top: 50px;
  padding-left: 225px;
  align-items: center;
  input {
    width: 353px;
    height: 40px;

    background: #e1ecf4;
    border: 1px solid #cccccc;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
  button {
    width: 100px;
    height: 40px;
    margin-left: 5%;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    background-color: #e1ecf4;
    color: #3c76a1;
  }
`;

const LettersbuttonSC = styled.div`
  width: 100%;
  height: 91px;
  gap: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ButtonSC = styled.button`
  width: 40px;
  height: 40px;
  background: ${({ unlocked }) => (unlocked ? "#9faab5" : "#e1ecf4")};
  border: 1px solid #7aa7c7;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #798a9f;
  cursor: ${({ unlocked }) => (unlocked ? "default" : "pointer")};

  &:hover {
    opacity: ${({ unlocked }) => (unlocked ? "1" : "0.8")};
    border: 1px solid white;
  }
`;
