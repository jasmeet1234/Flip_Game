import React, { useState } from "react";
import "../../style/gamePage/card.css";

export default function Card({
  image,
  id,
  handleCardClick,
  isFlipped,
  isMatched,
}) {
  const flipCard = () => {
    if (!isMatched) {
      handleCardClick(id, image);
    }
  };

  return (
    <div
      className={`game-card ${isFlipped ? "flipped" : ""}  ${
        isMatched ? "matched" : ""
      }`}
      onClick={flipCard}
    >
      <div className="game-card-inner">
        <div
          className="game-card-front"
          // style={isMatched ? { backgroundColor: "#272525" } : null}
        ></div>
        <div className="game-card-back">
          <img src={image} alt="Card Image" />
        </div>
      </div>
    </div>
  );
}
