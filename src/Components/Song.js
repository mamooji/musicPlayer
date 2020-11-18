import React from "react";

const Song = (props) => {
  const { song} = props;
  return (
    <div className="song-container">
      <img src={song.cover} alt="Song Cover art"/>
      <h2>{song.name}</h2>
      <h3>{song.artist}</h3>
    </div>
  );
};

export default Song;
