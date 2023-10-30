import React, { useState } from "react";

const ButtonRouter = () => {
  const [videoOn, pause] = useState(false);
  const [play, currentPlay] = useState("Play");


  // BUTTON CLICK EVENT
  const playVideo = (event) => {
    event.stopPropagation();
    videoOn ? videoPlay() : videoPause();
    videoOn ? currentPlay("Play") : currentPlay("Pause");
    pause(!videoOn);
  };

  const videoPlay = () => {
    console.log("video is play");
  };

  const videoPause = () => {
    console.log("video is paused");
  };
  return (
    <>
      <button
        onClick={playVideo}
        type="button"
        className="btn btn-outline-primary border-2 border-primary "
      >
        {play} {videoOn ?  "⏯️" : "▶️"}
      </button>
      <div className="child_context">
      </div>
    </>
  );
};

export default ButtonRouter;
