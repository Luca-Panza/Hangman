import palavras from "./palavras";

export default function Jogo(props) {
  const { word, setWord, letters, setLetters, errors, setErrors, images, setStartgame, setEndgame, stats, setStats } = props;

  function start() {
    palavras.sort(() => Math.random() - 0.5);
    setWord(palavras[77]);
    setErrors(0);
    setLetters([]);
    setStartgame(true);
    setEndgame(false);
    setStats("letters");
  }

  return (
    <div className="top">
      <div>
        <img data-test="game-image" src={images[errors]} alt={images[errors]} />
      </div>
      <div className="written">
        <button data-test="choose-word" onClick={start}>
          Escolher Palavra
        </button>
        <div className="letters_box">
          {word.split("").map((letra, i) => (
            <div data-test="word" className={stats} key={i}>
              {letters.includes(letra) || stats === "letters_red" ? letra.toUpperCase() : "_"}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
