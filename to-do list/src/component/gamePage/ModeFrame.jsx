import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import Card from "./Card";
import "../../style/gamePage/pause.css";
import { isMobile } from "react-device-detect";

export default function ModeFrame(props) {
  const gameEnd = () => {
    props.handleIsGameStarted();
    props.pageHandler("startPage");
  };
  //pause
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "p") setPaused((prev) => !prev);
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [paused]);
  //pause button

  useEffect(() => {
    const handleKeyClick = (event) => {
      setPaused((prev) => !prev);
    };
    const pauseButton = document.querySelector(".pause_icon");
    pauseButton.addEventListener("click", handleKeyClick);

    return () => {
      pauseButton.removeEventListener("click", handleKeyClick);
    };
  }, [paused]);
  //escape key
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        props.handleWin(0);
        props.setGameAbb((prev) => prev + 1);
        gameEnd();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [props.isGameStarted]);

  //matched logic, unmatched logic

  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  const handleCardClick = (id, image) => {
    if (flippedCards.length === 0) {
      setFlippedCards([{ id, image }]);
      props.setFlippedCards((prev) => parseInt(prev) + 1);
    } else if (flippedCards.length === 1 && flippedCards[0].id !== id) {
      const flippedCard = { id, image };
      setFlippedCards([...flippedCards, flippedCard]);
      props.setFlippedCards((prev) => parseInt(prev) + 1);

      if (flippedCards[0].image === flippedCard.image) {
        setTimeout(() => {
          setMatchedCards([
            ...matchedCards,
            flippedCards[0].id,
            flippedCard.id,
          ]);
          setFlippedCards([]);
          props.setMatchedCards((prev) => prev + 1);
        }, 500);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 500);
      }
    }
  };

  //Game Won
  useEffect(() => {
    if (matchedCards.length === props.cardNumber) {
      props.setGameWon((prev) => prev + 1);
      props.handleWin(1);
      gameEnd();
    }
  }, [matchedCards]);

  //shuffle card
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    const cards = [];
    for (let i = 0; i < props.cardNumber; i++) {
      cards.push({
        id: i,
        image: `../../src/assets/cardPics/pic${Math.floor(i / 2)}.png`,
      });
    }
    shuffleArray(cards);
    setShuffledCards(cards);
  }, [props.isGameStarted]);

  const [shuffledCards, setShuffledCards] = useState([]);

  return (
    <>
      <div className={`pause_icon ${isMobile ? "mobile" : null}`}>
        <img
          src={`../../src/assets/pause/${paused ? "play" : "pause"}.png`}
          alt="pause_icon"
        />
      </div>

      {paused && (
        <div className="pause-screen pause_font">
          <h1>PAUSED</h1>
        </div>
      )}
      <Timer
        time={props.time}
        isGameStarted={props.isGameStarted}
        paused={paused}
        gameEnd={() => {
          props.setGameLost((prev) => prev + 1); //Game Lost
          props.handleWin(2);
          gameEnd();
        }}
      />
      <div className="card-cont">
        {shuffledCards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            handleCardClick={handleCardClick}
            isFlipped={flippedCards.some((c) => c.id === card.id)}
            isMatched={matchedCards.includes(card.id)}
          />
        ))}
      </div>
    </>
  );
}
