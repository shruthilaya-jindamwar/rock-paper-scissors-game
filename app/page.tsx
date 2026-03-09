"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const choices = ["rock", "paper", "scissors"];

  // state tracking who goes first and whether the round has started
  const [firstPlayer, setFirstPlayer] = useState<"player" | "computer" | "">("");
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  const computeResult = (player: string, computer: string) => {
    if (player === computer) {
      setResult("Draw 🤝");
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      setResult("You Win 🎉");
    } else {
      setResult("Computer Wins 🤖");
    }
  };

  const startGame = (starter: "player" | "computer") => {
    setFirstPlayer(starter);
    setGameStarted(true);
    setResult("");
    setPlayerChoice("");
    if (starter === "computer") {
      // computer makes its choice immediately
      const random = choices[Math.floor(Math.random() * choices.length)];
      setComputerChoice(random);
    } else {
      setComputerChoice("");
    }
  };

  const makeChoice = (choice: string) => {
    if (!gameStarted) return;

    if (firstPlayer === "computer") {
      setPlayerChoice(choice);
      computeResult(choice, computerChoice);
    } else {
      const random = choices[Math.floor(Math.random() * choices.length)];
      setPlayerChoice(choice);
      setComputerChoice(random);
      computeResult(choice, random);
    }
    setGameStarted(false);
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white">
      <h1 className="text-4xl font-bold mb-10">Rock Paper Scissors</h1>

      {/* choose who starts */}
      {!gameStarted && !result && (
        <div className="mb-8">
          <p className="mb-4">Who should play first?</p>
          <div className="flex gap-4">
            <button
              onClick={() => startGame("player")}
              className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
            >
              You
            </button>
            <button
              onClick={() => startGame("computer")}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            >
              Computer
            </button>
          </div>
        </div>
      )}

      {/* Choice Buttons */}
      <div className="flex gap-10">
        {choices.map((c) => (
          <button
            key={c}
            onClick={() => makeChoice(c)}
            disabled={!gameStarted}
            className={`bg-white p-5 rounded-xl hover:scale-110 transition ${
              !gameStarted ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Image
              src={
                c === "rock"
                  ? "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEyL2pvYjk1OS1lbGVtZW50LWItMDEzNl8yLmpwZw.jpg"
                  : c === "paper"
                  ? "https://thumb.silhouette-ac.com/t/26/2654adfd65b6ca4a8ac25a9f727d2262_t.jpeg"
                  : "https://thumb.silhouette-ac.com/t/a7/a7c3020b4cfb4fd154c4fcfd62702df2_t.jpeg"
              }
              width={80}
              height={80}
              alt={c}
            />
            <p className="text-black mt-2 capitalize">{c}</p>
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="mt-10 text-center">
        {firstPlayer === "computer" && computerChoice && (
          <p className="text-lg">
            Computer chose: <span className="font-bold">{computerChoice}</span>
          </p>
        )}

        <p className="text-lg">
          Player: <span className="font-bold">{playerChoice}</span>
        </p>

        <p className="text-lg">
          Computer: <span className="font-bold">{computerChoice}</span>
        </p>

        <h2 className="text-3xl mt-4 font-bold text-yellow-400">{result}</h2>

        {/* play again */}
        {result && (
          <button
            className="mt-6 bg-green-500 px-4 py-2 rounded hover:bg-green-600"
            onClick={() => {
              setResult("");
              setFirstPlayer("");
              setPlayerChoice("");
              setComputerChoice("");
            }}
          >
            Play again
          </button>
        )}
      </div>
    </div>
  );
}
