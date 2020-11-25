import React, { useState } from "react";
//comoponent imports
import Player from "./Components/Player";
import Song from "./Components/Song";
import Library from "./Components/Library";
import Nav from "./Components/Nav";
//style import
import "./Styles/app.scss";
//Utility import
import Data from "./data";
function App() {
  //state
  const [songs, setSongs] = useState(Data);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sideBarStatus, setSideBarStatus] = useState(false);

  return (
    <div className={`App ${sideBarStatus ? "library-active" : ""}`}>
      <Nav sideBarStatus={sideBarStatus} setSideBarStatus={setSideBarStatus} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setPlaying={setIsPlaying}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        currentSong={currentSong}
        sideBarStatus={sideBarStatus}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
}

export default App;
