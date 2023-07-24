import { useEffect } from "react";

export function useLocalStorageFlippedCards(flippedCards) {
  useEffect(() => {
    localStorage.setItem("flippedCards", flippedCards.toString());
  }, [flippedCards]);
}

export function useLocalStorageMatchedCards(matchedCards) {
  useEffect(() => {
    localStorage.setItem("matchedCards", matchedCards.toString());
  }, [matchedCards]);
}

export function useLocalStorageGameWon(gameWon) {
  useEffect(() => {
    localStorage.setItem("gameWon", gameWon.toString());
  }, [gameWon]);
}

export function useLocalStorageGameLost(gameLost) {
  useEffect(() => {
    localStorage.setItem("gameLost", gameLost.toString());
  }, [gameLost]);
}

export function useLocalStorageGameAbb(gameAbb) {
  useEffect(() => {
    localStorage.setItem("gameAbb", gameAbb.toString());
  }, [gameAbb]);
}
