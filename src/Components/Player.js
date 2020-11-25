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
  const { isPlaying, setPlaying, songs, setCurrentSong, currentSong } = props;

  //ref
  const audioRef = useRef(null);

  //state
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  //event handler
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setPlaying(!isPlaying);
    }
  };

  //event handler
  const updateTimeHandler = (event) => {
    setSongInfo({
      ...songInfo,
      currentTime: event.target.currentTime,
      duration: event.target.duration,
      animationPercentage: Math.round(
        (event.target.currentTime / event.target.duration) * 100
      ),
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
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const skipTrackHandler = (direction) => {
    let index = songs.indexOf(currentSong);
    if (direction === "backward") {
      if (index === 0) {
        setCurrentSong(songs[songs.length - 1]);
      } else {
        setCurrentSong(songs[index - 1]);
      }
    } else {
      if (index === songs.length - 1) {
        setCurrentSong(songs[0]);
      } else {
        setCurrentSong(songs[index + 1]);
      }
    }
  };
  const trackAnimation = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getCleanTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            max={songInfo.duration || 0}
            type="range"
          />
          <div style={trackAnimation} className="animate-track"></div>
        </div>

        <p>{songInfo.duration ? getCleanTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          onClick={() => skipTrackHandler("backward")}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => skipTrackHandler("forward")}
        />
      </div>
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={updateTimeHandler}
        onLoadedMetadata={updateTimeHandler}
        onLoadedData={autoPlayHandler}
        onEnded={() => skipTrackHandler("forward")}
      ></audio>
    </div>
  );
};

export default Player;
