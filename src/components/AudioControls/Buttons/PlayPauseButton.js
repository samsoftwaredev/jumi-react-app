import React from "react";
import { Button } from "reactstrap";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlayPauseButton = ({ isPlaying, onPlayPauseClick }) => {
  if (isPlaying) {
    return (
      <Button
        id="pause-track"
        className="pause btn-clear"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <FontAwesomeIcon icon={faPause} />
      </Button>
    );
  } else {
    return (
      <Button
        id="play-track"
        className="play btn-clear"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <FontAwesomeIcon icon={faPlay} />
      </Button>
    );
  }
};

export default PlayPauseButton;
