import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
const Player = (props) => {
  //props
  const { song, playing, setPlaying } = props;

  //ref
  const audioRef = useRef(null);

  //state
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  //event handler
  const playSongHandler = () => {
    if (playing) {
      audioRef.current.pause();
      setPlaying(!playing);
    } else {
      audioRef.current.play();
      setPlaying(!playing);
    }
  };

  //event handler
  const updateTimeHandler = (event) => {
    setSongInfo({
      ...songInfo,
      currentTime: event.target.currentTime,
      duration: event.target.duration,
    });
  };

  //event handler
  const getCleanTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  //event handler
  const dragHandler = (event) => {
    audioRef.current.currentTime = event.target.value;
    setSongInfo({ ...songInfo, currentTime: event.target.value });
  };

  //event handler
  const autoPlayHandler = () => {
    if (playing) {
      audioRef.current.play();
    }
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getCleanTime(songInfo.currentTime)}</p>
        <input
          min={0}
          value={songInfo.currentTime}
          onChange={dragHandler}
          max={songInfo.duration}
          type="range"
        />
        <p>{getCleanTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={playing ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio
        ref={audioRef}
        src={song.audio}
        onTimeUpdate={updateTimeHandler}
        onLoadedMetadata={updateTimeHandler}
        onLoadedData={autoPlayHandler}
      ></audio>
    </div>
  );
};

export default Player;
