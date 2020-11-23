import React from "react";
import LibrarySong from "./LibrarySong";
const Library = (props) => {
  const { songs, setCurrentSong, sideBarStatus, currentSong } = props;
  return (
    <div className={`library ${sideBarStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            currentSong={currentSong}
            song={song}
            key={song.id}
            setCurrentSong={setCurrentSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
