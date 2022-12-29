import React, { useState } from "react";
import * as Tone from "tone";
import { Players } from "tone";
import "./LoopPlayer.css";
const LoopPlayer = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [currentTime, setCurrentTime] = useState(0);
  const player = new Tone.Player().toDestination();
  const loops = [
    { url: "./samples/Hdrm/Hdrm1.mp3", player },
    { url: "./samples/Hdrm/Hdrm2.mp3", player },
    { url: "./samples/Hdrm/Hdrm3.mp3", player },
    { url: "./samples/Hdrm/Hdrm4.mp3", player },
  ];

  const handleClick = (index) => {
    if (currentIndex === -1) {
      loops[index].player.load(loops[index].url).start();
      setCurrentIndex(index);
    } else {
      setCurrentTime(loops[currentIndex].player.currentTime);
      loops[currentIndex].player.stop();
      loops[index].player.load(loops[index].url).start(undefined, currentTime);
      setCurrentIndex(index);
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

// Instead of creating a new Player instance for each audio file,
//you can create a single Player instance and use the load method
//to load different audio files into it. This will reduce the number
//of instances being created and garbage collected, improving performance.

// Instead of using a string to store the current audio file,
// you can use an integer index to store the index of the current audio file
//in the loops array. This will make it easier to identify the current audio file and avoid confusion.

// Instead of creating an array of Player instances, you can create an array of objects that contain the audio file URL and the Player instance. This will make it easier to manage the audio files and Player instances, and make it easier to add additional properties or methods to the objects if needed.
