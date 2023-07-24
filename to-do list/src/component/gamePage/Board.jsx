import React, { useState, useEffect } from "react";
import "../../style/startPage/board.css";
import StartPage from "../startPage/StartPage";
import Easy from "../gamePage/Easy";
import Hard from "../gamePage/Hard";
import {
  useLocalStorageFlippedCards,
  useLocalStorageMatchedCards,
  useLocalStorageGameWon,
  useLocalStorageGameLost,
  useLocalStorageGameAbb,
} from "./LocalStorage";

export default function Board() {
  //local data
  const [flippedCards, setFlippedCards] = useState(
    localStorage.getItem("flippedCards")
      ? parseInt(localStorage.getItem("flippedCards"))
      : 0
  );
  const [matchedCards, setMatchedCards] = useState(
    localStorage.getItem("matchedCards")
      ? parseInt(localStorage.getItem("matchedCards"))
      : 0
  );

  const [gameWon, setGameWon] = useState(
    localStorage.getItem("gameWon")
      ? parseInt(localStorage.getItem("gameWon"))
      : 0
  );

  const [gameLost, setGameLost] = useState(
    localStorage.getItem("gameLost")
      ? parseInt(localStorage.getItem("gameLost"))
      : 0
  );
  const [gameAbb, setGameAbb] = useState(
    localStorage.getItem("gameAbb")
      ? parseInt(localStorage.getItem("gameAbb"))
      : 0
  );

  useLocalStorageGameWon(gameWon);
  useLocalStorageGameLost(gameLost);
  useLocalStorageGameAbb(gameAbb);
  useLocalStorageFlippedCards(flippedCards);
  useLocalStorageMatchedCards(matchedCards);

  //current Page
  const [currentPage, setCurrentPage] = useState("startPage");

  const pageHandler = (id) => {
    setCurrentPage(id);
    if (id !== "startPage") setIsGameStarted((prev) => !prev);
  };

  //game status

  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleIsGameStarted = () => {
    setIsGameStarted((prev) => !prev);
  };
  //Game win status

  const [winStatus, setWinStatus] = useState(0);

  function handleWin(id) {
    setWinStatus(id);
  }

  //Mobile and Desktop
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="board">
      {currentPage === "startPage" && (
        <StartPage
          pageHandler={pageHandler}
          gameWon={gameWon}
          gameLost={gameLost}
          gameAbb={gameAbb}
          totalFlippedCards={flippedCards}
          totalMatchedCards={matchedCards}
          winStatus={winStatus}
        />
      )}
      {currentPage === "easyMode" && (
        <Easy
          handleIsGameStarted={handleIsGameStarted}
          isGameStarted={isGameStarted}
          pageHandler={pageHandler}
          setFlippedCards={setFlippedCards}
          setMatchedCards={setMatchedCards}
          setGameWon={setGameWon}
          setGameLost={setGameLost}
          setGameAbb={setGameAbb}
          handleWin={handleWin}
        />
      )}

      {currentPage === "hardMode" && (
        <Hard
          handleIsGameStarted={handleIsGameStarted}
          isGameStarted={isGameStarted}
          pageHandler={pageHandler}
          setFlippedCards={setFlippedCards}
          setMatchedCards={setMatchedCards}
          setGameWon={setGameWon}
          setGameLost={setGameLost}
          setGameAbb={setGameAbb}
          handleWin={handleWin}
        />
      )}
    </div>
  );
}
