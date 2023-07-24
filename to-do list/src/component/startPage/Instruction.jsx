import React from "react";

export default function Instruction(props) {
  return (
    <div
      className={`card  ${props.isFlipped ? "flipped" : ""} instruction`}
      onClick={() => {
        props.clickHandler(props.id);
      }}
    >
      <div className="card__face card__face--front game_font  ">
        {props.text}
      </div>
      <div className="card__face card__face--back ">
        <div className="inst_cont">
          <h2 className="inst_heading game_font_mid">INSTRUCTIONS</h2>
          <div className="inst_para game_font_small">
            <p>Please press [P] to pause the game or [ESC] to abandon it.</p>
            <p>
              The objective is to uncover two identical symbols simultaneously
              in order to remove them from the game board.
            </p>
            <p>
              Your goal is to eliminate all the cards as quickly as possible in
              order to win the game.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
