import { useState } from "react";
import "./App.css";

const OPTIONS = [
  {
    id: "1",
    symbol: "ROCK",
  },
  {
    id: "2",
    symbol: "PAPER",
  },
  {
    id: "3",
    symbol: "SCISSORS",
  },
];

function App() {
  const [options, setOptions] = useState(OPTIONS);
  const [compChoices, setCompchoices] = useState("");
  const [winner, setWinner] = useState("");
  const [compcount, setCompcount] = useState(0);
  const [playercount, setPlayercount] = useState(0)

  const handleCheck = (e) => {
    const newOption = options;
    const playerChoice = e.target.innerText;
    const compChoice =
      newOption[Math.floor(Math.random() * newOption.length)].symbol;
    setCompchoices(compChoice);
    if (compChoice === playerChoice) {
      return setWinner("DRAW");
    } else {
      if (
        (playerChoice == "ROCK" && compChoice == "SCISSORS") ||
        (playerChoice == "SCISSORS" && compChoice == "PAPER") ||
        (playerChoice == "PAPER" && compChoice == "ROCK")
      ) {
        setWinner("PLAYER 1");
        setPlayercount(playercount + 1);
      } else {
        setWinner("COMPUTER");
        setCompcount(compcount + 1);
      }
    }
  };

  return (
    <div className="App w-screen h-screen bg-amber-200">
      <h3 className=" font-extrabold font-mono text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-800 to-orange-400 tracking-wider p-4">
        ROCK-PAPER-SCISSORS
      </h3>
      <div className="relative top-20">
        <div className="border-b-2 pb-3 text-amber-600 text-xl border-orange-700 h-12 flex justify-evenly items-center font-bold font-mono">
          <div>Player : {playercount}</div>
          <div>Computer : {compcount}</div>
        </div>
        <div className="flex items-center justify-evenly h-72">
          {OPTIONS.map((option) => {
            return (
              <button
                onClick={handleCheck}
                className="w-32 h-32 m-2 rounded-full text-amber-600 bg-gradient-to-tl from-slate-400 via-slate-600 to-slate-800 shadow-md font-mono text-center tracking-wide text-xl font-bold hover:text-amber-200"
                key={option.id}
                id={option.id}
              >
                {option.symbol}
              </button>
            );
          })}
        </div>
        <h2 className="text-center text-2xl text-amber-600 font-bold mt-2">
          COMPUTER CHOICE : {compChoices}
        </h2>
        <h2 className="text-center text-2xl text-amber-600 font-bold mt-4">
          {" "}
          WINNER : {winner}
        </h2>
      </div>
    </div>
  );
}

export default App;
