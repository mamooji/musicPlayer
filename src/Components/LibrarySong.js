import React from "react";
const LibrarySong = (props) => {
  const { song, setCurrentSong, currentSong } = props;

  //event handler
  const songSelectHandler = () => {
    setCurrentSong(song);
  };
  var divStyle = {
    background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
  };

  return (
    <div
      style={song.id === currentSong.id ? divStyle : {}}
      className={"library-song"}
      // className={`library-song ${song.id === currentSong.id ? "selected" : ""}`}
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
