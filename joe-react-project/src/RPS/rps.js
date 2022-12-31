import { useState } from "react";

export function RPS() {
  const rock = "Rock";
  const paper = "Paper";
  const scissors = "Scissors";

  const [wins, setWins] = useState(0);
  const [loses, setLoses] = useState(0);
  const [ties, setTies] = useState(0);

  //strings can be derived from state
  const [choices, setChoices] = useState("You: ? vs CPU: ?");

  function onPlayerGuess(playerChoice) {
    let cpuChoice = cpuGuess();

    setChoices(`You: ${playerChoice} vs CPU: ${cpuChoice}`);
    console.log(playerChoice + " vs " + cpuChoice);

    if (playerChoice !== cpuChoice) {
      if (playerChoice === rock) {
        if (cpuChoice === scissors) {
          onWin();
        } else {
          onLose();
        }
      } else if (playerChoice === paper) {
        if (cpuChoice === rock) {
          onWin();
        } else {
          onLose();
        }
      } else if (playerChoice === scissors) {
        if (cpuChoice === paper) {
          onWin();
        } else {
          onLose();
        }
      }
    } else {
      onTie();
    }
  }

  function onWin() {
    setWins((cur) => cur + 1);
  }
  function onLose() {
    setLoses((cur) => cur + 1);
  }

  function onTie() {
    setTies((cur) => cur + 1);
  }

  function resetRecord() {
    setWins(0);
    setLoses(0);
    setTies(0);
  }

  function cpuGuess() {
    let rand = Math.floor(Math.random() * 3);

    if (rand === 0) {
      return rock;
    } else if (rand === 1) {
      return paper;
    } else if (rand === 2) {
      return scissors;
    } else {
      return -1;
    }
  }

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <button onClick={() => onPlayerGuess(rock)}>{rock}</button>
      <button onClick={() => onPlayerGuess(paper)}>{paper}</button>
      <button onClick={() => onPlayerGuess(scissors)}>{scissors}</button>
      <h2>{choices}</h2>
      <h3>{`${wins}W - ${loses}L - ${ties}T`}</h3>
      <button onClick={() => resetRecord()}>Reset Record</button>
    </div>
  );
}
