"use client";

import { useState } from "react";

export default function Home() {
  const choices = ["rock", "paper", "scissors"];

  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const playGame = (choice: string) => {
    const randomChoice =
      choices[Math.floor(Math.random() * choices.length)];

    setPlayerChoice(choice);
    setComputerChoice(randomChoice);

    if (choice === randomChoice) {
      setResult("Draw 🤝");
    } else if (
      (choice === "rock" && randomChoice === "scissors") ||
      (choice === "paper" && randomChoice === "rock") ||
      (choice === "scissors" && randomChoice === "paper")
    ) {
      setResult("You Win 🎉");
    } else {
      setResult("Computer Wins 🤖");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white">

      <h1 className="text-4xl font-bold mb-10">
        Rock Paper Scissors
      </h1>

      {/* Choice Buttons */}

      <div className="flex gap-10">

        <button
          onClick={() => playGame("rock")}
          className="bg-white p-5 rounded-xl hover:scale-110 transition"
        >
          <img src="/rock.png" width={80} />
          <p className="text-black mt-2">Rock</p>
        </button>

        <button
          onClick={() => playGame("paper")}
          className="bg-white p-5 rounded-xl hover:scale-110 transition"
        >
          <img src="/paper.png" width={80} />
          <p className="text-black mt-2">Paper</p>
        </button>

        <button
          onClick={() => playGame("scissors")}
          className="bg-white p-5 rounded-xl hover:scale-110 transition"
        >
          <img src="/scissors.png" width={80} />
          <p className="text-black mt-2">Scissors</p>
        </button>

      </div>

      {/* Results */}

      <div className="mt-10 text-center">

        <p className="text-lg">
          Player: <span className="font-bold">{playerChoice}</span>
        </p>

        <p className="text-lg">
          Computer: <span className="font-bold">{computerChoice}</span>
        </p>

        <h2 className="text-3xl mt-4 font-bold text-yellow-400">
          {result}
        </h2>

      </div>
    </div>
  );
}

      