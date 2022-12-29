import { useState, useEffect, useRef } from "react";
import URL from "../samples/Hbas3.mp3";
import URL2 from "../samples/Hgtr4.mp3";

function App() {
  // Context ↓
  const [ctx, setCtx] = useState(null);
  // Source 1 ↓
  const [s1, setS1] = useState(null);
  // Gain 1 ↓
  const [gain1, setGain1] = useState(null);
  // Source 2 ↓
  const [s2, setS2] = useState(null);

  // Open new AudioContext (must be by action cannot be on a page load)
  const setContext = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    console.log(audioContext);
    setCtx(audioContext);
  };

  // Load Sources of audio and save them to state, then create gain node or any other middleware, then connect all the destination (main output)
  const load = async () => {
    //? fetch song from url or physical audio
    const res = await fetch(URL);
    //? convert audio to arrayBuffer
    const arrayBuffer = await res.arrayBuffer();
    //? convert arrayBuffer to audioBuffer
    const audioBuffer = await ctx.decodeAudioData(arrayBuffer);

    //? create new buffer source Node
    const source = ctx.createBufferSource();
    //? connect the audio buffer that we created before to the source node
    source.buffer = audioBuffer;

    source.loop = true;

    //? set the source node to state
    setS1(source);

    //? create new gain node
    const gain = await ctx.createGain();
    //? set the gain node to state
    setGain1(gain);
    //? connect the gain node to the final destination
    gain.connect(ctx.destination);

    //? connect the gain node to the gain node
    source.connect(gain);

    //* The general flow:
    //* sourceNode (audioBuffer from audio) → gainNode → destination (the final output)

    // duplicate No 2
    const res2 = await fetch(URL2);
    const arrayBuffer2 = await res2.arrayBuffer();
    const audioBuffer2 = await ctx.decodeAudioData(arrayBuffer2);
    const source2 = ctx.createBufferSource();
    source2.buffer = audioBuffer2;

    source2.connect(ctx.destination);
    setS2(source2);
  };
  const play = async () => {
    // start source 1
    s1.start();
    // start source 2
    s2.start();
  };
  const openGainForSource = () => {
    // manipulate gain (the middle node)
    if (gain1.gain.value === 0) {
      gain1.gain.value = 1;
    } else {
      gain1.gain.value = 0;
    }
  };
  return (
    <div className="App">
      <button onClick={setContext}>Set Audio Context</button>
      <button onClick={load}>load</button>
      <button onClick={play}>play</button>
      <button onClick={openGainForSource}>Open Gain For Source</button>
    </div>
  );
}

export default App;

// const context = new AudioContext();
// const playButton = document.querySelector('#play');

// let yodelBuffer;

// window
//   .fetch(URL)
//   .then((response) => {
//     console.log(response);
//     return response.arrayBuffer();
//   })
//   .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
//   .then((audioBuffer) => {
//     playButton.disabled = false;
//     yodelBuffer = audioBuffer;
//   });

// playButton.onclick = () => play(yodelBuffer);

// function play(audioBuffer) {
//   const source = context.createBufferSource();
//   source.buffer = audioBuffer;
//   source.connect(context.destination);
//   source.start();
// }
