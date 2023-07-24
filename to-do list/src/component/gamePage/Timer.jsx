import React from "react";
import "../../style/gamePage/timer.css";

export default function Timer(props) {
  return (
    <div className="timer-con">
      <div
        className={`timer-ele ${props.paused ? "paused" : "running"}`}
        style={{
          animation: props.isGameStarted
            ? `timer ${props.time}s linear`
            : "none",
        }}
        onAnimationEnd={props.gameEnd} //game ends here
      ></div>
    </div>
  );
}
