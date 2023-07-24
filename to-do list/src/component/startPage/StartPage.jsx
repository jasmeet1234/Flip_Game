import React, { useState } from "react";
import "../../style/startPage/flip-box.css";
import "../../style/utility/hoverBox.css";
import "../../style/startPage/dynamicBox.css";
import "../../style/utility/fade.css";
import "../../style/utility/gameFont.css";
import Box from "./Box";
import Instruction from "./Instruction";
import Play from "./Play";
import Figure from "./Figure";

export default function StartPage({
  pageHandler,
  gameWon,
  gameLost,
  gameAbb,
  totalFlippedCards,
  totalMatchedCards,
  winStatus,
}) {
  //FLIP HANDLER
  const [flipped, setFlipped] = useState([false, false, false]);
  const clickHandler = (id) => {
    setFlipped((prev) => {
      const temp = [];
      for (let i = 1; i <= prev.length; i++) {
        if (i == id) temp.push(!prev[i - 1]);
        else if (prev[i - 1]) temp.push(!prev[i - 1]);
        else temp.push(prev[i - 1]);
      }
      return temp;
    });
  };

  return (
    <div className="startPage-cont">
      <div className="gif-overlay"></div>
      <h2 id="game-ins " className="game_font_inst">
        {"Click the letter 'P' to begin."}
      </h2>
      <div className="startPage-box">
        <div className="startPage-box-upper">
          <Figure
            id={1}
            isFlipped={flipped[0]}
            clickHandler={clickHandler}
            gameWon={gameWon}
            gameLost={gameLost}
            gameAbb={gameAbb}
            totalFlippedCards={totalFlippedCards}
            totalMatchedCards={totalMatchedCards}
            text={
              (winStatus == 1 && "N") ||
              (winStatus == 0 && "F") ||
              (winStatus == 2 && "L")
            }
          />
          <Instruction
            id={2}
            isFlipped={flipped[1]}
            clickHandler={clickHandler}
            text={
              (winStatus == 1 && "C") ||
              (winStatus == 0 && "I") ||
              (winStatus == 2 && "S")
            }
          />
        </div>
        <div className="startPage-box-lower">
          <Box
            text={
              (winStatus == 1 && "I") ||
              (winStatus == 0 && "L") ||
              (winStatus == 2 && "O")
            }
            figState={flipped[0]}
          />
          <Play
            id={3}
            isFlipped={flipped[2]}
            clickHandler={clickHandler}
            instState={flipped[1]}
            pageHandler={pageHandler}
            text={
              (winStatus == 1 && "E") ||
              (winStatus == 0 && "P") ||
              (winStatus == 2 && "T")
            }
          />
        </div>
      </div>
    </div>
  );
}
