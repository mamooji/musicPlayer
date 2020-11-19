import React from "react";
import LibrarySong from "./LibrarySong";
const Library = (props) => {
  const { songs } = props;
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong song={song} key={song.id} />
        ))}
      </div>
    </div>
  );
};

export default Library;
