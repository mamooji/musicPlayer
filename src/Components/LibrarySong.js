import React from "react";
const LibrarySong = (props) => {
  const { song, setCurrentSong, currentSong } = props;

  //event handler
  const songSelectHandler = () => {
    setCurrentSong(song);
    console.log(song.id);
    console.log(currentSong);
    // const newSongs = songs.map((targetSong) => {
    //   return {
    //     ...targetSong,
    //     active: targetSong.id === song.id,
    //   };
    // });
    // setSongs(newSongs);
  };

  return (
    <div
      className={`library-song ${song.id === currentSong.id ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
