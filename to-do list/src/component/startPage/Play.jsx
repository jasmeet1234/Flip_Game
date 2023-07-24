import React from "react";

export default function Play(props) {
  return (
    <div
      className={`card play ${props.isFlipped ? "flipped" : ""}
       ${props.instState ? "fade" : ""}`}
      onClick={() => {
        props.clickHandler(props.id);
      }}
    >
      <div className="card__face card__face--front game_font">{props.text}</div>

      <div
        className="card__face card__face--back--play"
        style={{ backgroundColor: "#272525" }}
      >
        <div className="play_cont">
          <div
            className="play-item hoverBlack game_font_mid"
            onClick={() => {
              props.pageHandler("easyMode");
            }}
            style={{ borderBottom: "1px solid black" }}
          >
            CASUAL
          </div>

          <div
            className="play-item hoverBlack game_font_mid"
            onClick={() => {
              props.pageHandler("hardMode");
            }}
            style={{ borderTop: "1px solid black" }}
          >
            HARD
          </div>
        </div>
      </div>
    </div>
  );
}
