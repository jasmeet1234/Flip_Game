import React from "react";
import ModeFrame from "./ModeFrame";

export default function Hard(props) {
  return (
    <div className="hard-mode">
      <ModeFrame
        time={90}
        isGameStarted={props.isGameStarted}
        handleIsGameStarted={props.handleIsGameStarted}
        pageHandler={props.pageHandler}
        cardNumber={36}
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
