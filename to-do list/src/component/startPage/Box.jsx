import React from "react";

export default function Box(props) {
  return (
    <div
      onClick={() => {
        props.clickHandler(props.id);
      }}
      className={`flip-box flipped ${props.figState ? "fade" : ""} game_font`}
    >
      {props.text}
    </div>
  );
}
