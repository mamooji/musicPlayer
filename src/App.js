import React, {useState} from "react";
//comoponent imports
import Player from "./Components/Player";
import Song from "./Components/Song";
//style import
import "./Styles/app.scss";
//Utility import
import Data from "./util"
function App() {
  //state
  const [songs, setSongs] = useState(Data);
  const [currentSong, setCurrentSong] = useState(songs[1])
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="App">
      <Song song={currentSong}  />
      <Player song={currentSong} playing={isPlaying} setPlaying={setIsPlaying} />
    </div>
  );
}

export default App;
