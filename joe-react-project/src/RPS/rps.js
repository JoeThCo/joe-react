import { useState } from "react";
import "./rps.css";

export function RPS() {
  document.title = "RPS";
  const rock = "Rock";
  const paper = "Paper";
  const scissors = "Scissors";

  const [wins, setWins] = useState(0);
  const [loses, setLoses] = useState(0);
  const [ties, setTies] = useState(0);

  const [result, setResult] = useState("");

  const [playerChoice, setPlayerChoice] = useState("?");
  const [cpuChoice, setCpuChoice] = useState("?");

  function onPlayerGuess(choice) {
    setPlayerChoice(choice);

    let cpuChoice = cpuGuess();
    setCpuChoice(cpuChoice);

    console.log(choice + " vs " + cpuChoice);

    if (choice !== cpuChoice) {
      if (choice === rock) {
        if (cpuChoice === scissors) {
          onWin();
        } else {
          onLose();
        }
      } else if (choice === paper) {
        if (cpuChoice === rock) {
          onWin();
        } else {
          onLose();
        }
      } else if (choice === scissors) {
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
    setResult("You Won!");
  }

  function onLose() {
    setLoses((cur) => cur + 1);
    setResult("You Lost!");
  }

  function onTie() {
    setTies((cur) => cur + 1);
    setResult("You Tied!");
  }

  function resetRecord() {
    setWins(0);
    setLoses(0);
    setTies(0);

    setPlayerChoice("?");
    setCpuChoice("?");
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
      <h2>
        {playerChoice} vs {cpuChoice}
      </h2>
      <h2>Last Result: {result}</h2>
      <h3>{`${wins}W - ${loses}L - ${ties}T`}</h3>
      <div className="reset">
        <button onClick={() => resetRecord()}>Reset Record</button>
      </div>
    </div>
  );
}
