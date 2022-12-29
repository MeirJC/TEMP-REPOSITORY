import React, { useState } from "react";
import * as Tone from "tone";
// import { Players } from "tone";
import "./LoopPlayer.css";
const LoopPlayer = () => {
  const [currentLoop, setCurrentLoop] = useState("");
  // const time = ([time, setTime] = useState(0));
  const loops = [
    new Tone.Player("./samples/Hdrm/Hdrm1.mp3").toDestination(),
    new Tone.Player("./samples/Hdrm/Hdrm2.mp3").toDestination(),
    new Tone.Player("./samples/Hdrm/Hdrm3.mp3").toDestination(),
    new Tone.Player("./samples/Hdrm/Hdrm4.mp3").toDestination(),
  ];

  const handleClick = (index) => {
    if (currentLoop === "") {
      loops[index].start();
      setCurrentLoop(loops[index]);
    } else {
      currentLoop.stop();
      loops[index].start();
      setCurrentLoop(loops[index]);
    }
  };

  return (
    <div>
      <div className="btn-div" onClick={() => handleClick(0)}>
        Loop 1
      </div>
      <div className="btn-div" onClick={() => handleClick(1)}>
        Loop 2
      </div>
      <div className="btn-div" onClick={() => handleClick(2)}>
        Loop 3
      </div>
      <div className="btn-div" onClick={() => handleClick(3)}>
        Loop 4
      </div>
    </div>
  );
};

export default LoopPlayer;
