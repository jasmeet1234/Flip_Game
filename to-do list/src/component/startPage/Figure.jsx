import React from "react";

export default function Instruction(props) {
  return (
    <div
      className={`card  ${props.isFlipped ? "flipped" : ""} instruction`}
      onClick={() => {
        props.clickHandler(props.id);
      }}
    >
      <div className="card__face card__face--front game_font ">
        {props.text}
      </div>
      <div className="card__face card__face--back ">
        <div className=" fig_cont">
          <h2 className="fig_heading game_font_mid ">FIGURES</h2>
          <div className="fig_para game_font_small">
            {/* left */}
            <div className="fig_para_left ">
              <div className="fig_para_elements">
                <div className="fig_para_head">Won:-</div>
                <div className="fig_para_num">{props.gameWon}</div>
              </div>
              <div className="fig_para_elements">
                <div className="fig_para_head">Lost:-</div>
                <div className="fig_para_num">{props.gameLost}</div>
              </div>
              <div className="fig_para_elements">
                <div className="fig_para_head">Abandoned:- </div>
                <div className="fig_para_num">{props.gameAbb}</div>
              </div>
            </div>

            {/* right */}
            <div className="fig_para_right">
              <div className="fig_para_elements">
                <div className="fig_para_head">Total Flips:-</div>
                <div className="fig_para_num">{props.totalFlippedCards}</div>
              </div>
              <div className="fig_para_elements">
                <div className="fig_para_head">Matched Flips:- </div>
                <div className="fig_para_num">{props.totalMatchedCards}</div>
              </div>
              <div className="fig_para_elements">
                <div className="fig_para_head">Wrong Flips:- </div>
                <div className="fig_para_num">
                  {Math.floor(
                    (props.totalFlippedCards - props.totalMatchedCards) / 2
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
