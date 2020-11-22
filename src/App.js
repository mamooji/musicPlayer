import React, { useState } from "react";
//comoponent imports
import Player from "./Components/Player";
import Song from "./Components/Song";
import Library from "./Components/Library";
//style import
import "./Styles/app.scss";
//Utility import
import Data from "./util";
//icon import
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  //state
  const [songs, setSongs] = useState(Data);
  const [currentSong, setCurrentSong] = useState(songs[6]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [theme, setTheme] = useState("light");
  const themeHandler = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="App">
      <FontAwesomeIcon
        className="theme-icon"
        icon={theme === "light" ? faSun : faMoon}
        onClick={themeHandler}
        size="2x"
      />
      <Song song={currentSong} />
      <Player
        song={currentSong}
        playing={isPlaying}
        setPlaying={setIsPlaying}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
