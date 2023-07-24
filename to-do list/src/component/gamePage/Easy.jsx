import React, { useEffect } from "react";
import ModeFrame from "./ModeFrame";

export default function Easy(props) {
  return (
    <div className="easy-mode">
      <ModeFrame
        time={45}
        isGameStarted={props.isGameStarted}
        handleIsGameStarted={props.handleIsGameStarted}
        pageHandler={props.pageHandler}
        cardNumber={16}
        setFlippedCards={props.setFlippedCards}
        setMatchedCards={props.setMatchedCards}
        setGameWon={props.setGameWon}
        setGameLost={props.setGameLost}
        setGameAbb={props.setGameAbb}
        handleWin={props.handleWin}
      />
    </div>
  );
}
