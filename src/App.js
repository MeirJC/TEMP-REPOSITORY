import logo from "./logo.svg";
import "./App.css";
import LoopPlayer from "./components/LoopPlayer";
import Loops from "./components/Loops";
// import LoopPlayer3 from "./components/LoopPlayer3";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <LoopPlayer /> */}
        <LoopPlayer />
        <Loops />
      </header>
    </div>
  );
}

export default App;
