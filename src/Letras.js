import alfabeto from "./alfabeto";

export default function Letras(props) {
  const { word, letters, setLetters, errors, setErrors, startgame, endgame, setEndgame, setStats } = props;

  function verify_click(guess) {
    if (word.includes(guess)) {
      setLetters([...letters, guess]);
      if (word.split("").every((element) => [...letters, guess].includes(element))) {
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

  return (
    <div className="buttons">
      {alfabeto.map((letra) => (
        <button
          data-test="letter"
          className={!startgame || endgame || letters.includes(letra) ? "button_locked" : "button_unlocked"}
          onClick={() => verify_click(letra)}
          disabled={!startgame || endgame || letters.includes(letra) ? true : false}
          key={letra}>
          {letra.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
