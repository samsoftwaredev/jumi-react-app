import { Button } from "reactstrap";
import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AudioControlsStyle from "./AudioControls.style";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => (
  <AudioControlsStyle>
    <div className="audio-controls">
      <Button
        className="prev btn-clear rounded-circle"
        aria-label="Previous"
        onClick={onPrevClick}
      >
        <FontAwesomeIcon icon={faBackward} />
      </Button>
      {isPlaying ? (
        <Button
          className="pause btn-clear rounded-circle"
          onClick={() => onPlayPauseClick(false)}
          aria-label="Pause"
        >
          <FontAwesomeIcon icon={faPause} />
        </Button>
      ) : (
        <Button
          className="play btn-clear rounded-circle"
          onClick={() => onPlayPauseClick(true)}
          aria-label="Play"
        >
          <FontAwesomeIcon icon={faPlay} />
        </Button>
      )}
      <Button
        className="next btn-clear rounded-circle"
        aria-label="Next"
        onClick={onNextClick}
      >
        <FontAwesomeIcon icon={faForward} />
      </Button>
    </div>
  </AudioControlsStyle>
);

export default AudioControls;
