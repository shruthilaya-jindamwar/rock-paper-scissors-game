"use client";

import { useState } from "react";

export default function Home() {
  const choices = ["Rock", "Paper", "Scissors"];

  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const playGame = (choice) => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];

    setPlayerChoice(choice);
    setComputerChoice(randomChoice);

    if (choice === randomChoice) {
      setResult("Draw");
    } else if (
      (choice === "Rock" && randomChoice === "Scissors") ||
      (choice === "Paper" && randomChoice === "Rock") ||
      (choice === "Scissors" && randomChoice === "Paper")
    ) {
      setResult("You Win");
    } else {
      setResult("Computer Wins");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Rock Paper Scissors</h1>

      <button onClick={() => playGame("Rock")}>Rock</button>
      <button onClick={() => playGame("Paper")}>Paper</button>
      <button onClick={() => playGame("Scissors")}>Scissors</button>

      <h3>Player: {playerChoice}</h3>
      <h3>Computer: {computerChoice}</h3>
      <h2>{result}</h2>
    </div>
  );
}